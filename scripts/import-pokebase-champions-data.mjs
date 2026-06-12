import { existsSync } from "node:fs";
import { execFile } from "node:child_process";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const execFileAsync = promisify(execFile);
const baseUrl = "https://pokebase.app/pokemon-champions";

const urls = {
  pokemon: `${baseUrl}/pokemon`,
  moves: `${baseUrl}/moves`,
  abilities: `${baseUrl}/abilities`,
  items: `${baseUrl}/items`
};

const pokemonImageDir = path.join(root, "public", "images", "pokemon");
const itemImageDir = path.join(root, "public", "images", "items");
const logoPath = path.join(root, "public", "logo.png");

const outputFiles = {
  pokemon: path.join(root, "src", "data", "pokemon.ts"),
  moves: path.join(root, "src", "data", "moves.ts"),
  abilities: path.join(root, "src", "data", "abilities.ts"),
  items: path.join(root, "src", "data", "items.ts")
};

function findWindowsBrowser() {
  if (process.platform !== "win32") return undefined;

  return [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
  ].find((candidate) => existsSync(candidate));
}

async function launchBrowser() {
  return chromium.launch({
    headless: true,
    executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ?? findWindowsBrowser()
  });
}

function decodeEmbeddedPayload(html) {
  return html
    .replace(/&quot;/g, "\"")
    .replace(/&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\\"/g, "\"")
    .replace(/\\n/g, "\n")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function findMatching(text, start, open, close) {
  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let i = start; i < text.length; i += 1) {
    const char = text[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "\"") {
        inString = false;
      }
      continue;
    }

    if (char === "\"") {
      inString = true;
    } else if (char === open) {
      depth += 1;
    } else if (char === close) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  throw new Error(`No matching ${close} found.`);
}

function extractJsonArraysAfter(text, marker) {
  const arrays = [];
  let markerIndex = -1;

  while ((markerIndex = text.indexOf(marker, markerIndex + 1)) !== -1) {
    const start = text.indexOf("[", markerIndex + marker.length - 1);
    const end = findMatching(text, start, "[", "]");
    try {
      arrays.push(JSON.parse(text.slice(start, end + 1)));
    } catch {
      // Ignore similarly named payload fragments that are not the table docs.
    }
  }

  return arrays;
}

function extractFirstJsonAfter(text, marker, open, close) {
  const markerIndex = text.indexOf(marker);
  if (markerIndex === -1) throw new Error(`Unable to find marker: ${marker}`);
  const start = text.indexOf(open, markerIndex + marker.length - 1);
  const end = findMatching(text, start, open, close);
  return JSON.parse(text.slice(start, end + 1));
}

function chooseDocs(html, predicate, label) {
  const docs = extractJsonArraysAfter(html, "\"docs\":")
    .filter((array) => array.length > 0 && predicate(array[0]))
    .sort((a, b) => b.length - a.length)[0];

  if (!docs) {
    throw new Error(`Unable to find ${label} docs in Pokebase payload.`);
  }

  return docs;
}

async function fetchDecoded(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return decodeEmbeddedPayload(await response.text());
}

async function collectRenderedRows(page, pageUrl) {
  await page.goto(`${pageUrl}?page=1`, { waitUntil: "domcontentloaded", timeout: 60_000 });
  await page.waitForSelector(".table-row-group .table-row", { timeout: 60_000 });

  const totalPages = await page.evaluate(() => {
    const text = document.body.innerText.replace(/\s+/g, " ");
    const match = text.match(/\b1\s*of\s*(\d+)\b/i);
    return match ? Number(match[1]) : 1;
  });

  const rows = [];
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
    if (pageNumber > 1) {
      await page.goto(`${pageUrl}?page=${pageNumber}`, { waitUntil: "domcontentloaded", timeout: 60_000 });
      await page.waitForSelector(".table-row-group .table-row", { timeout: 60_000 });
    }

    rows.push(
      ...(await page.$$eval(".table-row-group .table-row", (tableRows) =>
        tableRows.map((row) => {
          const cells = Array.from(row.children).map((cell) => cell.textContent?.replace(/\s+/g, " ").trim() ?? "");
          const link = row.querySelector("a");
          const image = row.querySelector("img");
          return {
            cells,
            href: link?.getAttribute("href") ?? "",
            image: image?.getAttribute("src") ?? "",
            imageAlt: image?.getAttribute("alt") ?? ""
          };
        })
      ))
    );
  }

  return rows;
}

function parsePercent(value) {
  if (!value || value === "-") return 0;
  const parsed = Number(value.replace("%", ""));
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseNullableNumber(value) {
  if (!value || value === "-" || value === "--") return null;
  const normalized = value.replace("%", "");
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : null;
}

function labelFromSlug(value) {
  return String(value ?? "")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function cleanText(value) {
  return String(value ?? "")
    .replace(/\u8305/g, "e")
    .replace(/\u9225\u6a9a/g, "'s")
    .replace(/\u9225\u6a9b/g, "'t")
    .replace(/\u9225\u651a/g, " - w")
    .replace(/\u9225\u6503/g, " - c")
    .replace(/\u9225\?/g, "'");
}

function generationFromNationalNumber(nationalNumber) {
  if (nationalNumber >= 906) return "Gen 9";
  if (nationalNumber >= 810) return "Gen 8";
  if (nationalNumber >= 722) return "Gen 7";
  if (nationalNumber >= 650) return "Gen 6";
  if (nationalNumber >= 494) return "Gen 5";
  if (nationalNumber >= 387) return "Gen 4";
  if (nationalNumber >= 252) return "Gen 3";
  if (nationalNumber >= 152) return "Gen 2";
  if (nationalNumber >= 1) return "Gen 1";
  return "Gen ?";
}

function generationLabel(value, nationalNumber) {
  const match = String(value ?? "").match(/_(\d+)/);
  return match ? `Gen ${match[1]}` : generationFromNationalNumber(Number(nationalNumber));
}

function extensionFromUrl(url) {
  const ext = path.extname(new URL(url).pathname).toLowerCase();
  return ext || ".png";
}

function absoluteRemoteUrl(url) {
  return new URL(url, "https://pokebase.app").toString();
}

function sizedImageUrl(url, size) {
  const parsed = new URL(absoluteRemoteUrl(url));
  parsed.searchParams.set("width", String(size));
  parsed.searchParams.set("height", String(size));
  return parsed.toString();
}

async function downloadImage(remoteUrl, destination) {
  if (process.platform === "win32") {
    let lastError;
    for (let attempt = 1; attempt <= 4; attempt += 1) {
      try {
        await execFileAsync(
          "powershell",
          [
            "-NoProfile",
            "-Command",
            "Invoke-WebRequest -Uri $env:POKEBASE_URI -OutFile $env:POKEBASE_OUT -UseBasicParsing -TimeoutSec 60"
          ],
          {
            timeout: 90_000,
            env: {
              ...process.env,
              POKEBASE_URI: remoteUrl,
              POKEBASE_OUT: destination
            }
          }
        );
        return;
      } catch (error) {
        lastError = error;
        await new Promise((resolve) => setTimeout(resolve, attempt * 1_000));
      }
    }
    throw new Error(`Failed to download ${remoteUrl}: ${lastError?.message ?? lastError}`);
  }

  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(remoteUrl, {
        signal: AbortSignal.timeout(30_000),
        headers: { "user-agent": "Mozilla/5.0" }
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.byteLength < 500) {
        throw new Error(`Downloaded image is suspiciously small: ${bytes.byteLength} bytes`);
      }

      await writeFile(destination, bytes);
      return;
    } catch (error) {
      lastError = error;
      await new Promise((resolve) => setTimeout(resolve, attempt * 750));
    }
  }

  throw new Error(`Failed to download ${remoteUrl}: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
}

async function fileHash(filePath) {
  const buffer = await readFile(filePath);
  return createHash("sha256").update(buffer).digest("hex");
}

async function assertPokemonImage(destination, slug) {
  const metadata = await sharp(destination).metadata();
  if (metadata.format !== "png" || metadata.width !== 256 || metadata.height !== 256 || !metadata.hasAlpha) {
    throw new Error(`Downloaded invalid Pokemon image for ${slug}: ${JSON.stringify(metadata)}`);
  }
}

async function localImage(slug, remoteUrl, imageDir, publicDir, options = {}) {
  if (!remoteUrl) throw new Error(`Missing image URL for ${slug}.`);
  const absoluteUrl = options.size ? sizedImageUrl(remoteUrl, options.size) : absoluteRemoteUrl(remoteUrl);
  const extension = options.extension ?? extensionFromUrl(absoluteUrl);
  const destination = path.join(imageDir, `${slug}${extension}`);
  const downloadDestination = options.kind === "pokemon" ? `${destination}.download` : destination;
  await downloadImage(absoluteUrl, downloadDestination);
  if (options.kind === "pokemon") {
    await sharp(downloadDestination)
      .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(destination);
    await rm(downloadDestination, { force: true });
  }
  if (existsSync(logoPath) && (await fileHash(destination)) === (await fileHash(logoPath))) {
    throw new Error(`Downloaded logo/favicon instead of ${slug}: ${absoluteUrl}`);
  }
  if (options.kind === "pokemon") {
    await assertPokemonImage(destination, slug);
  }
  return {
    image: `${publicDir}/${slug}${extension}`,
    sourceImageUrl: absoluteUrl
  };
}

async function cleanImageDirectory(imageDir, keepPublicPaths, publicPrefix) {
  const keep = new Set(
    keepPublicPaths.map((publicPath) => path.basename(publicPath))
  );
  const files = await readdir(imageDir);

  await Promise.all(
    files
      .filter((file) => /\.(png|webp|jpg|jpeg)$/i.test(file))
      .filter((file) => !keep.has(file))
      .map((file) => rm(path.join(imageDir, file), { force: true }))
  );

  console.log(`Kept ${keep.size} ${publicPrefix} images.`);
}

function slugFromHref(href, section) {
  const match = href.match(new RegExp(`/pokemon-champions/${section}/([^/?#]+)`));
  if (!match) throw new Error(`Unable to parse ${section} slug from href: ${href}`);
  return decodeURIComponent(match[1]);
}

function normalizeDataKeyFunction(name) {
  return `function ${name}(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .toLowerCase()
    .replace(/pok[eé]mon champion/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\\s+/g, "-");
}`;
}

function buildPokemonModule(entries, regulationSets) {
  return `import type { PokemonAsset } from "@/types/content";

export type PokebaseMegaFilter = "all" | "mega" | "base";

export type PokebasePokemonFilters = {
  regulation?: string;
  move?: string;
  ability?: string;
  generation?: string;
  mega?: PokebaseMegaFilter;
};

export const pokebaseRegulationSets = ${JSON.stringify(regulationSets, null, 2)} as const;

export const pokemonAssets = ${JSON.stringify(entries, null, 2)} satisfies PokemonAsset[];

export const pokebasePokemon = pokemonAssets;

export const pokebaseMoveOptions = Array.from(
  new Set(pokemonAssets.flatMap((pokemon) => pokemon.moves))
).sort((a, b) => a.localeCompare(b));

export const pokebaseAbilityOptions = Array.from(
  new Set(pokemonAssets.flatMap((pokemon) => pokemon.abilities))
).sort((a, b) => a.localeCompare(b));

export const pokebaseGenerationOptions = Array.from(
  new Set(pokemonAssets.map((pokemon) => pokemon.generation))
).sort((a, b) => Number(a.replace("Gen ", "")) - Number(b.replace("Gen ", "")));

${normalizeDataKeyFunction("normalizePokemonKey")}

const pokemonByKey = new Map<string, PokemonAsset>();
const legacyPokemonAliases: Record<string, string> = {
  "basculegion-f": "basculegion",
  "basculegion-female": "basculegion"
};

for (const pokemon of pokemonAssets) {
  const keys = [pokemon.slug, pokemon.name, pokemon.name.replace(/^Mega (.+)$/, "$1 Mega")];
  for (const key of keys) {
    pokemonByKey.set(normalizePokemonKey(key), pokemon);
  }
}

for (const [alias, slug] of Object.entries(legacyPokemonAliases)) {
  const pokemon = pokemonAssets.find((entry) => entry.slug === slug);
  if (pokemon) pokemonByKey.set(normalizePokemonKey(alias), pokemon);
}

export function getPokemonByName(name: string) {
  return pokemonByKey.get(normalizePokemonKey(name));
}

export function getPokemonImageByName(name: string) {
  return getPokemonByName(name)?.image;
}

export function getPokemonBySlug(slug: string) {
  return pokemonAssets.find((pokemon) => pokemon.slug === slug);
}

export function filterPokebasePokemon(
  entries: PokemonAsset[],
  filters: PokebasePokemonFilters = {}
) {
  return entries.filter((pokemon) => {
    if (filters.move && !pokemon.moves.includes(filters.move)) return false;
    if (filters.ability && !pokemon.abilities.includes(filters.ability)) return false;
    if (filters.generation && pokemon.generation !== filters.generation) return false;
    if (filters.mega === "mega" && !pokemon.isMega) return false;
    if (filters.mega === "base" && pokemon.isMega) return false;
    return true;
  });
}
`;
}

function buildMovesModule(entries) {
  return `export type MoveMeta = {
  name: string;
  slug: string;
  usage: number;
  description: string;
  power: number | null;
  accuracy: number | null;
  pp: number | null;
  type?: string;
};

export const allMoves = ${JSON.stringify(entries, null, 2)} satisfies MoveMeta[];

const moveByName = new Map(allMoves.map((move) => [move.name.trim().toLowerCase(), move]));

export function formatMoveNumber(value: number | null): string {
  return value === null || value === undefined ? "--" : String(value);
}

export function formatMoveAccuracy(value: number | null): string {
  return value === null || value === undefined ? "--" : \`\${value}%\`;
}

export function getMoveMeta(name: string): MoveMeta | undefined {
  return moveByName.get(name.trim().toLowerCase());
}

export function getMoveType(name: string): string | undefined {
  return getMoveMeta(name)?.type;
}
`;
}

function buildAbilitiesModule(entries) {
  return `export type AbilityAsset = {
  slug: string;
  name: string;
  description: string;
  sourceUrl: string;
  isMegaAbility: boolean;
  pokemon: Array<{ slug: string; name: string; image?: string }>;
};

export const abilityAssets = ${JSON.stringify(entries, null, 2)} satisfies AbilityAsset[];

${normalizeDataKeyFunction("normalizeAbilityKey")}

const abilityByKey = new Map<string, AbilityAsset>();

for (const ability of abilityAssets) {
  abilityByKey.set(normalizeAbilityKey(ability.slug), ability);
  abilityByKey.set(normalizeAbilityKey(ability.name), ability);
}

export function getAbilityByName(name: string) {
  return abilityByKey.get(normalizeAbilityKey(name));
}

export function getAbilityDescriptionByName(name: string) {
  return getAbilityByName(name)?.description;
}

export function filterAbilities(mega: "all" | "mega" | "base" = "all") {
  return abilityAssets.filter((ability) => {
    if (mega === "mega") return ability.isMegaAbility;
    if (mega === "base") return !ability.isMegaAbility;
    return true;
  });
}
`;
}

function buildItemsModule(entries) {
  return `import type { ItemAsset } from "@/types/content";

export const itemAssets = ${JSON.stringify(entries, null, 2)} satisfies ItemAsset[];

${normalizeDataKeyFunction("normalizeItemKey")}

const itemByKey = new Map<string, ItemAsset>();

for (const item of itemAssets) {
  itemByKey.set(normalizeItemKey(item.slug), item);
  itemByKey.set(normalizeItemKey(item.name), item);
}

export const itemCategoryOptions = Array.from(new Set(itemAssets.map((item) => item.category))).sort((a, b) =>
  a.localeCompare(b)
);

export function getItemByName(name: string) {
  return itemByKey.get(normalizeItemKey(name));
}

export function getItemImageByName(name: string) {
  return getItemByName(name)?.image;
}

export function filterItems(category?: string) {
  return category ? itemAssets.filter((item) => item.category === category) : itemAssets;
}
`;
}

async function main() {
  await mkdir(pokemonImageDir, { recursive: true });
  await mkdir(itemImageDir, { recursive: true });

  const [pokemonHtml, movesHtml, abilitiesHtml, itemsHtml] = await Promise.all([
    fetchDecoded(urls.pokemon),
    fetchDecoded(urls.moves),
    fetchDecoded(urls.abilities),
    fetchDecoded(urls.items)
  ]);

  const pokemonDocs = chooseDocs(pokemonHtml, (doc) => "nationalNumber" in doc && "hp" in doc && "attack" in doc, "Pokemon");
  const moveDocs = chooseDocs(movesHtml, (doc) => "power" in doc && "damageClass" in doc && "description" in doc, "moves");
  const abilityDocs = chooseDocs(abilitiesHtml, (doc) => "isMegaAbility" in doc && "description" in doc, "abilities");
  const itemDocs = chooseDocs(itemsHtml, (doc) => "category" in doc && "description" in doc, "items");
  const regulationOptions = extractFirstJsonAfter(pokemonHtml, "\"regulationSetOptions\":", "[", "]");

  const pokemonDocsBySlug = new Map(pokemonDocs.map((pokemon) => [pokemon.slug, pokemon]));
  const moveDocsBySlug = new Map(moveDocs.map((move) => [move.slug, move]));
  const abilityDocsBySlug = new Map(abilityDocs.map((ability) => [ability.slug, ability]));
  const itemDocsBySlug = new Map(itemDocs.map((item) => [item.slug, item]));

  const browser = await launchBrowser();
  try {
    const [pokemonRows, moveRows, abilityRows, itemRows] = await Promise.all(
      Object.entries(urls).map(async ([key, url]) => {
        const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
        try {
          page.setDefaultTimeout(60_000);
          return await collectRenderedRows(page, url);
        } finally {
          await page.close();
        }
      })
    );

    const pokemonEntries = [];
    for (const row of pokemonRows) {
      const slug = slugFromHref(row.href, "pokemon");
      const doc = pokemonDocsBySlug.get(slug);
      if (!doc) throw new Error(`Missing Pokemon doc for slug: ${slug}`);
      const image = await localImage(slug, row.image, pokemonImageDir, "/images/pokemon", {
        kind: "pokemon",
        size: 256,
        extension: ".png"
      });

      pokemonEntries.push({
        slug,
        name: cleanText(row.cells[0]),
        ...image,
        sourceUrl: `https://pokebase.app${row.href}`,
        usage: parsePercent(row.cells[1]),
        baseStats: {
          hp: Number(row.cells[2]),
          attack: Number(row.cells[3]),
          defense: Number(row.cells[4]),
          specialAttack: Number(row.cells[5]),
          specialDefense: Number(row.cells[6]),
          speed: Number(row.cells[7])
        },
        generation: generationLabel(doc.generation, doc.nationalNumber),
        isMega: Boolean(doc.isMega) || row.cells[0].startsWith("Mega "),
        moves: Array.from(new Set((doc.moves ?? []).map((move) => cleanText(move.name)).filter(Boolean))).sort((a, b) =>
          a.localeCompare(b)
        ),
        abilities: Array.from(new Set((doc.abilities ?? []).map((ability) => cleanText(ability.name)).filter(Boolean))).sort(
          (a, b) => a.localeCompare(b)
        )
      });
    }

    const moveEntries = moveRows.map((row) => {
      const slug = slugFromHref(row.href, "moves");
      const doc = moveDocsBySlug.get(slug);
      if (!doc) throw new Error(`Missing move doc for slug: ${slug}`);
      return {
        name: cleanText(doc.name),
        slug,
        usage: parsePercent(row.cells[1]),
        description: cleanText(doc.description),
        power: doc.power ?? null,
        accuracy: doc.accuracy ?? null,
        pp: parseNullableNumber(row.cells[5]),
        type: doc.type?.name ? cleanText(doc.type.name) : undefined
      };
    });

    const abilityEntries = abilityRows.map((row) => {
      const slug = slugFromHref(row.href, "abilities");
      const doc = abilityDocsBySlug.get(slug);
      if (!doc) throw new Error(`Missing ability doc for slug: ${slug}`);
      return {
        slug,
        name: cleanText(doc.name),
        description: cleanText(doc.description),
        sourceUrl: `https://pokebase.app${row.href}`,
        isMegaAbility: Boolean(doc.isMegaAbility),
        pokemon: (doc.pokemonWithAbility?.docs ?? []).map((pokemon) => ({
          slug: pokemon.slug,
          name: cleanText(pokemon.name),
          image: pokemon.icon?.url
        }))
      };
    });

    const itemEntries = [];
    for (const row of itemRows) {
      const slug = slugFromHref(row.href, "items");
      const doc = itemDocsBySlug.get(slug);
      if (!doc) throw new Error(`Missing item doc for slug: ${slug}`);
      const image = await localImage(slug, row.image, itemImageDir, "/images/items");
      itemEntries.push({
        slug,
        name: cleanText(doc.name),
        category: cleanText(doc.category?.name ?? labelFromSlug(doc.category) ?? row.cells[0].replace(doc.name, "").trim()),
        description: cleanText(doc.description ?? row.cells[1]),
        ...image,
        sourceUrl: `https://pokebase.app${row.href}`
      });
    }

    const expectedCounts = [
      ["Pokemon", pokemonEntries.length, 272],
      ["moves", moveEntries.length, 937],
      ["abilities", abilityEntries.length, 311],
      ["items", itemEntries.length, 119]
    ];
    for (const [label, actual, expected] of expectedCounts) {
      if (actual !== expected) throw new Error(`Expected ${expected} ${label} rows, got ${actual}.`);
    }

    await writeFile(outputFiles.pokemon, buildPokemonModule(pokemonEntries, regulationOptions.map((option) => option.label)), "utf8");
    await writeFile(outputFiles.moves, buildMovesModule(moveEntries), "utf8");
    await writeFile(outputFiles.abilities, buildAbilitiesModule(abilityEntries), "utf8");
    await writeFile(outputFiles.items, buildItemsModule(itemEntries), "utf8");

    await cleanImageDirectory(pokemonImageDir, pokemonEntries.map((pokemon) => pokemon.image), "/images/pokemon");
    await cleanImageDirectory(itemImageDir, itemEntries.map((item) => item.image), "/images/items");

    console.log(`Imported ${pokemonEntries.length} Pokebase Pokemon rows.`);
    console.log(`Imported ${moveEntries.length} Pokebase move rows.`);
    console.log(`Imported ${abilityEntries.length} Pokebase ability rows.`);
    console.log(`Imported ${itemEntries.length} Pokebase item rows.`);
  } finally {
    await browser.close();
  }
}

await main();
