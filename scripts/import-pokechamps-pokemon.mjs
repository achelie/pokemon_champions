import { existsSync } from "node:fs";
import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourcePage = "https://pokechamps.com/pokemon/";
const staticPrefix = "https://static.dotgg.gg/pokechamps/";
const imageDir = path.join(root, "public", "images", "pokemon");
const outputFile = path.join(root, "src", "data", "pokemon.ts");

const requiredPokemon = [
  "Mega Raichu X",
  "Mega Raichu Y",
  "Garchomp",
  "Whimsicott",
  "Arcanine",
  "Milotic",
  "Pikachu",
  "Snorlax"
];

const aliasesByIdentifier = {
  Raichu: ["Mega Raichu X", "Mega Raichu Y"],
  Pikachu: ["Pokémon Champion Pikachu", "Pokemon Champion Pikachu"]
};

const pokemonTypes = [
  "Bug",
  "Dark",
  "Dragon",
  "Electric",
  "Fairy",
  "Fighting",
  "Fire",
  "Flying",
  "Ghost",
  "Grass",
  "Ground",
  "Ice",
  "Normal",
  "Poison",
  "Psychic",
  "Rock",
  "Steel",
  "Water"
];

function normalizeKey(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/pok[eé]mon champion/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

function parseNameFromCardText(text) {
  let name = text.replace(/\s+/g, " ").trim();
  const typePattern = pokemonTypes.join("|");
  const suffix = new RegExp(`(?:${typePattern})(?:/(?:${typePattern}))?$`);
  name = name.replace(suffix, "").trim();
  if (!name) {
    throw new Error(`Unable to parse Pokemon name from card text: "${text}"`);
  }
  return name;
}

function identifierFromUrl(url) {
  const parsed = new URL(url);
  const parts = parsed.pathname.split("/").filter(Boolean);
  return decodeURIComponent(parts.at(-1) ?? "");
}

function localSlugForIdentifier(identifier) {
  return normalizeKey(identifier);
}

async function launchBrowser() {
  const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ?? findWindowsBrowser();
  return chromium.launch({
    headless: true,
    executablePath
  });
}

function findWindowsBrowser() {
  if (process.platform !== "win32") {
    return undefined;
  }

  const candidates = [
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
  ];

  return candidates.find((candidate) => existsSync(candidate));
}

async function collectPokemonLinks() {
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1200 } });
    page.setDefaultTimeout(60_000);
    await page.goto(sourcePage, { waitUntil: "domcontentloaded", timeout: 60_000 });
    await page.waitForSelector('main a[href*="/pokemon/"]', { timeout: 60_000 });
    await page.waitForTimeout(4_000);

    let stableRounds = 0;
    let lastCount = 0;
    for (let i = 0; i < 80 && stableRounds < 6; i += 1) {
      await page.mouse.wheel(0, 2400);
      await page.waitForTimeout(350);
      const count = await page.locator('main a[href*="/pokemon/"]').count();
      if (count === lastCount) {
        stableRounds += 1;
      } else {
        stableRounds = 0;
        lastCount = count;
      }
    }

    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll('main a[href*="/pokemon/"]')).map((anchor) => ({
        text: (anchor.textContent || "").trim(),
        href: anchor.href
      }))
    );

    return links;
  } finally {
    await browser.close();
  }
}

function sourceImageCandidates(identifier) {
  return [
    `${staticPrefix}alt-pokemon/art/${identifier}.webp`,
    `${staticPrefix}alt-pokemon/${identifier}.webp`
  ];
}

async function downloadImage(url, destination) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("image/")) {
    throw new Error(`Unexpected content type for ${url}: ${contentType}`);
  }

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.byteLength < 1000) {
    throw new Error(`Downloaded image is suspiciously small: ${url}`);
  }
  await writeFile(destination, bytes);
}

async function downloadBestImage(identifier, destination) {
  const errors = [];
  for (const candidate of sourceImageCandidates(identifier)) {
    try {
      await downloadImage(candidate, destination);
      return candidate;
    } catch (error) {
      errors.push(error instanceof Error ? error.message : String(error));
    }
  }

  throw new Error(`No accepted image found for ${identifier}: ${errors.join("; ")}`);
}

async function mapConcurrent(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function buildModule(assets) {
  return `import type { PokemonAsset } from "@/types/content";

export const pokemonAssets = ${JSON.stringify(assets, null, 2)} satisfies PokemonAsset[];

function normalizePokemonKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .toLowerCase()
    .replace(/pok[eé]mon champion/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\\s+/g, "-");
}

const pokemonByKey = new Map<string, PokemonAsset>();

for (const pokemon of pokemonAssets) {
  const keys = [pokemon.id, pokemon.slug, pokemon.name, ...pokemon.aliases];
  for (const key of keys) {
    pokemonByKey.set(normalizePokemonKey(key), pokemon);
  }
}

export function getPokemonByName(name: string) {
  return pokemonByKey.get(normalizePokemonKey(name));
}

export function getPokemonImageByName(name: string) {
  return getPokemonByName(name)?.image;
}
`;
}

function validateAssets(assets) {
  if (assets.length === 0) {
    throw new Error("No Pokemon assets collected.");
  }

  const byName = new Map();
  const seenSlugs = new Set();
  const seenImages = new Set();
  for (const asset of assets) {
    if (seenSlugs.has(asset.slug)) throw new Error(`Duplicate slug: ${asset.slug}`);
    if (seenImages.has(asset.image)) throw new Error(`Duplicate image: ${asset.image}`);
    if (!asset.sourceImageUrl.startsWith(staticPrefix)) throw new Error(`Rejected source image: ${asset.sourceImageUrl}`);
    seenSlugs.add(asset.slug);
    seenImages.add(asset.image);
    for (const key of [asset.id, asset.slug, asset.name, ...asset.aliases]) {
      byName.set(normalizeKey(key), asset);
    }
  }

  const missing = requiredPokemon.filter((name) => !byName.has(normalizeKey(name)));
  if (missing.length) {
    throw new Error(`Missing required Pokemon references: ${missing.join(", ")}`);
  }
}

const rawLinks = await collectPokemonLinks();
const uniqueLinks = new Map();

for (const link of rawLinks) {
  if (!link.href.includes("/pokemon/")) continue;
  const identifier = identifierFromUrl(link.href);
  if (!identifier) continue;
  uniqueLinks.set(identifier, {
    id: localSlugForIdentifier(identifier),
    slug: localSlugForIdentifier(identifier),
    name: parseNameFromCardText(link.text),
    aliases: aliasesByIdentifier[identifier] ?? [],
    identifier,
    sourceUrl: link.href
  });
}

const entries = Array.from(uniqueLinks.values()).sort((a, b) => a.slug.localeCompare(b.slug));

if (entries.length < 50) {
  throw new Error(`Collected too few Pokemon entries: ${entries.length}`);
}

await rm(imageDir, { recursive: true, force: true });
await mkdir(imageDir, { recursive: true });

const assets = await mapConcurrent(entries, 10, async (entry) => {
  const image = `/images/pokemon/${entry.slug}.webp`;
  const sourceImageUrl = await downloadBestImage(entry.identifier, path.join(imageDir, `${entry.slug}.webp`));
  return {
    id: entry.id,
    slug: entry.slug,
    name: entry.name,
    aliases: entry.aliases,
    image,
    sourceUrl: entry.sourceUrl,
    sourceImageUrl
  };
});

validateAssets(assets);
await writeFile(outputFile, buildModule(assets), "utf8");

console.log(`Imported ${assets.length} Pokemon assets to ${path.relative(root, imageDir)}`);
