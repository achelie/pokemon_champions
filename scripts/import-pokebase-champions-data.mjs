import { existsSync } from "node:fs";
import { copyFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const pokemonPageUrl = "https://pokebase.app/pokemon-champions/pokemon";
const movesPageUrl = "https://pokebase.app/pokemon-champions/moves";
const pokemonImageDir = path.join(root, "public", "images", "pokemon");
const fallbackPokemonImage = path.join(root, "public", "logo.png");
const pokemonOutputFile = path.join(root, "src", "data", "pokebasePokemon.ts");
const movesOutputFile = path.join(root, "src", "data", "moves.ts");

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

function extractJsonAfter(text, marker, open, close, occurrence = 0) {
  let markerIndex = -1;
  for (let i = 0; i <= occurrence; i += 1) {
    markerIndex = text.indexOf(marker, markerIndex + 1);
    if (markerIndex === -1) {
      throw new Error(`Unable to find marker: ${marker}`);
    }
  }

  const start = text.indexOf(open, markerIndex + marker.length - 1);
  const end = findMatching(text, start, open, close);
  return JSON.parse(text.slice(start, end + 1));
}

async function fetchDecoded(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }
  return decodeEmbeddedPayload(await response.text());
}

async function collectRenderedRows(page, baseUrl) {
  await page.goto(`${baseUrl}?page=1`, { waitUntil: "domcontentloaded", timeout: 60_000 });
  await page.waitForSelector(".table-row-group .table-row", { timeout: 60_000 });

  const totalPages = await page.evaluate(() => {
    const text = document.body.innerText.replace(/\s+/g, " ");
    const match = text.match(/\b1\s*of\s*(\d+)\b/i);
    return match ? Number(match[1]) : 1;
  });

  const rows = [];
  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber += 1) {
    if (pageNumber > 1) {
      await page.goto(`${baseUrl}?page=${pageNumber}`, { waitUntil: "domcontentloaded", timeout: 60_000 });
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
  return Number(normalized);
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

async function downloadImage(remoteUrl, destination) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(remoteUrl, { signal: AbortSignal.timeout(30_000) });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

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

async function localPokemonImage(slug, remoteUrl) {
  const existingWebp = path.join(pokemonImageDir, `${slug}.webp`);
  if (existsSync(existingWebp)) return `/images/pokemon/${slug}.webp`;

  const existingPng = path.join(pokemonImageDir, `${slug}.png`);
  if (existsSync(existingPng)) return `/images/pokemon/${slug}.png`;

  const extension = extensionFromUrl(remoteUrl);
  const destination = path.join(pokemonImageDir, `${slug}${extension}`);
  if (process.env.POKEBASE_DOWNLOAD_IMAGES !== "1") {
    await copyFile(fallbackPokemonImage, destination);
    return `/images/pokemon/${slug}${extension}`;
  }

  try {
    await downloadImage(remoteUrl, destination);
  } catch (error) {
    console.warn(error instanceof Error ? error.message : String(error));
    console.warn(`Using local fallback image for ${slug}.`);
    await copyFile(fallbackPokemonImage, destination);
  }
  return `/images/pokemon/${slug}${extension}`;
}

function slugFromHref(href, section) {
  const match = href.match(new RegExp(`/pokemon-champions/${section}/([^/?#]+)`));
  if (!match) throw new Error(`Unable to parse ${section} slug from href: ${href}`);
  return decodeURIComponent(match[1]);
}

function buildPokemonModule(entries, regulationSets) {
  return `import type { PokemonStats } from "@/types/content";

export type PokebaseMegaFilter = "all" | "mega" | "base";

export type PokebasePokemonFilters = {
  regulation?: string;
  move?: string;
  ability?: string;
  generation?: string;
  mega?: PokebaseMegaFilter;
};

export type PokebasePokemonListEntry = {
  slug: string;
  name: string;
  image: string;
  sourceUrl: string;
  sourceImageUrl: string;
  usage: number;
  baseStats: PokemonStats;
  generation: string;
  isMega: boolean;
  moves: string[];
  abilities: string[];
};

export const pokebaseRegulationSets = ${JSON.stringify(regulationSets, null, 2)} as const;

export const pokebasePokemon = ${JSON.stringify(entries, null, 2)} satisfies PokebasePokemonListEntry[];

export const pokebaseMoveOptions = Array.from(
  new Set(pokebasePokemon.flatMap((pokemon) => pokemon.moves))
).sort((a, b) => a.localeCompare(b));

export const pokebaseAbilityOptions = Array.from(
  new Set(pokebasePokemon.flatMap((pokemon) => pokemon.abilities))
).sort((a, b) => a.localeCompare(b));

export const pokebaseGenerationOptions = Array.from(
  new Set(pokebasePokemon.map((pokemon) => pokemon.generation))
).sort((a, b) => Number(a.replace("Gen ", "")) - Number(b.replace("Gen ", "")));

export function filterPokebasePokemon(
  entries: PokebasePokemonListEntry[],
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

function buildMovesModule(entries, typeByMoveName) {
  return `import type { PokemonTypeName } from "@/data/types";

export type MoveMeta = {
  name: string;
  slug: string;
  usage: number;
  description: string;
  power: number | null;
  accuracy: number | null;
  pp: number | null;
};

export const allMoves = ${JSON.stringify(entries, null, 2)} satisfies MoveMeta[];

const moveByName = new Map(allMoves.map((move) => [move.name.trim().toLowerCase(), move]));
const moveTypeByName = new Map<string, PokemonTypeName>(
  ${JSON.stringify(typeByMoveName, null, 2)}.map(([name, type]) => [name.trim().toLowerCase(), type as PokemonTypeName])
);

export function formatMoveNumber(value: number | null): string {
  return value === null || value === undefined ? "--" : String(value);
}

export function formatMoveAccuracy(value: number | null): string {
  return value === null || value === undefined ? "--" : \`\${value}%\`;
}

export function getMoveMeta(name: string): MoveMeta | undefined {
  return moveByName.get(name.trim().toLowerCase());
}

export function getMoveType(name: string): PokemonTypeName | undefined {
  return moveTypeByName.get(name.trim().toLowerCase());
}
`;
}

async function main() {
  await mkdir(pokemonImageDir, { recursive: true });

  const [pokemonHtml, movesHtml] = await Promise.all([fetchDecoded(pokemonPageUrl), fetchDecoded(movesPageUrl)]);
  const pokemonDocs = extractJsonAfter(pokemonHtml, "\"docs\":[", "[", "]", 1);
  const moveDocs = extractJsonAfter(movesHtml, "\"docs\":[", "[", "]", 1);
  const regulationOptions = extractJsonAfter(pokemonHtml, "\"regulationSetOptions\":", "[", "]", 0);

  const pokemonDocsBySlug = new Map(pokemonDocs.map((pokemon) => [pokemon.slug, pokemon]));
  const moveDocsBySlug = new Map(moveDocs.map((move) => [move.slug, move]));

  const browser = await launchBrowser();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
    page.setDefaultTimeout(60_000);

    const [pokemonRows, moveRows] = await Promise.all([
      collectRenderedRows(page, pokemonPageUrl),
      browser.newPage({ viewport: { width: 1440, height: 1200 } }).then(async (movesPage) => {
        try {
          movesPage.setDefaultTimeout(60_000);
          return await collectRenderedRows(movesPage, movesPageUrl);
        } finally {
          await movesPage.close();
        }
      })
    ]);

    const pokemonEntries = [];
    for (const row of pokemonRows) {
      const slug = slugFromHref(row.href, "pokemon");
      const doc = pokemonDocsBySlug.get(slug);
      if (!doc) throw new Error(`Missing Pokémon doc for slug: ${slug}`);

      pokemonEntries.push({
        slug,
        name: row.cells[0],
        image: await localPokemonImage(slug, row.image),
        sourceUrl: `https://pokebase.app${row.href}`,
        sourceImageUrl: row.image.split("?")[0],
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
        moves: Array.from(new Set((doc.moves ?? []).map((move) => move.name).filter(Boolean))).sort((a, b) =>
          a.localeCompare(b)
        ),
        abilities: Array.from(new Set((doc.abilities ?? []).map((ability) => ability.name).filter(Boolean))).sort((a, b) =>
          a.localeCompare(b)
        )
      });
    }

    const moveEntries = moveRows.map((row) => {
      const slug = slugFromHref(row.href, "moves");
      const doc = moveDocsBySlug.get(slug);
      if (!doc) throw new Error(`Missing move doc for slug: ${slug}`);
      return {
        name: doc.name,
        slug,
        usage: parsePercent(row.cells[1]),
        description: doc.description ?? "",
        power: doc.power ?? null,
        accuracy: doc.accuracy ?? null,
        pp: parseNullableNumber(row.cells[5])
      };
    });

    const typeByMoveName = moveEntries.map((move) => {
      const doc = moveDocsBySlug.get(move.slug);
      return [move.name, doc?.type?.name ?? "Normal"];
    });

    if (pokemonEntries.length !== 272) {
      throw new Error(`Expected 272 Pokémon rows, got ${pokemonEntries.length}.`);
    }
    if (moveEntries.length !== 937) {
      throw new Error(`Expected 937 move rows, got ${moveEntries.length}.`);
    }

    await writeFile(
      pokemonOutputFile,
      buildPokemonModule(pokemonEntries, regulationOptions.map((option) => option.label)),
      "utf8"
    );
    await writeFile(movesOutputFile, buildMovesModule(moveEntries, typeByMoveName), "utf8");

    console.log(`Imported ${pokemonEntries.length} PokéBase Pokémon rows.`);
    console.log(`Imported ${moveEntries.length} PokéBase move rows.`);
  } finally {
    await browser.close();
  }
}

await main();
