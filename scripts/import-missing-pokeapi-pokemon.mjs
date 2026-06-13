import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const imageDir = path.join(root, "public", "images", "pokemon");
const pokemonDataFile = path.join(root, "src", "data", "pokemon.ts");
const pokemonArrayMarker = "export const pokemonAssets = ";
const pokemonArrayEndMarker = "] satisfies PokemonAsset[];";

const missingPokemon = [
  { slug: "amoonguss", name: "Amoonguss", apiName: "amoonguss" },
  { slug: "blaziken-mega", name: "Mega Blaziken", apiName: "blaziken-mega" },
  { slug: "cloyster", name: "Cloyster", apiName: "cloyster" },
  { slug: "dondozo", name: "Dondozo", apiName: "dondozo" },
  { slug: "escavalier", name: "Escavalier", apiName: "escavalier" },
  { slug: "grimmsnarl", name: "Grimmsnarl", apiName: "grimmsnarl" },
  { slug: "indeedee", name: "Indeedee", apiName: "indeedee-male" },
  { slug: "iron-valiant", name: "Iron Valiant", apiName: "iron-valiant" },
  { slug: "mawile-mega", name: "Mega Mawile", apiName: "mawile-mega" },
  { slug: "metagross-mega", name: "Mega Metagross", apiName: "metagross-mega" },
  { slug: "rillaboom", name: "Rillaboom", apiName: "rillaboom" },
  { slug: "salamence-mega", name: "Mega Salamence", apiName: "salamence-mega" },
  { slug: "swampert-mega", name: "Mega Swampert", apiName: "swampert-mega" },
  { slug: "tatsugiri", name: "Tatsugiri", apiName: "tatsugiri-curly" },
  { slug: "ursaluna", name: "Ursaluna", apiName: "ursaluna" }
];

const statNames = {
  hp: "hp",
  attack: "attack",
  defense: "defense",
  "special-attack": "specialAttack",
  "special-defense": "specialDefense",
  speed: "speed"
};

const generationNumbers = {
  "generation-i": 1,
  "generation-ii": 2,
  "generation-iii": 3,
  "generation-iv": 4,
  "generation-v": 5,
  "generation-vi": 6,
  "generation-vii": 7,
  "generation-viii": 8,
  "generation-ix": 9
};

function titleCase(value) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizeStats(stats) {
  const normalized = {};
  for (const stat of stats) {
    const key = statNames[stat.stat.name];
    if (!key) continue;
    normalized[key] = stat.base_stat;
  }

  for (const key of Object.values(statNames)) {
    if (typeof normalized[key] !== "number") {
      throw new Error(`Missing stat ${key}`);
    }
  }

  return normalized;
}

function generationLabel(species) {
  const key = species.generation?.name;
  const generation = generationNumbers[key];
  if (!generation) throw new Error(`Unsupported generation: ${key}`);
  return `Gen ${generation}`;
}

async function fetchWithRetry(url, readResponse, options = {}) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        lastError = new Error(`HTTP ${response.status}`);
      } else {
        return await readResponse(response);
      }
    } catch (error) {
      lastError = error;
    }

    await new Promise((resolve) => setTimeout(resolve, 400 * attempt));
  }

  throw lastError;
}

async function fetchJson(url) {
  return fetchWithRetry(url, (response) => response.json());
}

async function downloadOfficialArtwork(url, destination) {
  const buffer = await fetchWithRetry(url, async (response) => {
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("image/")) {
      throw new Error(`Unexpected image content type for ${url}: ${contentType}`);
    }
    return Buffer.from(await response.arrayBuffer());
  });
  if (buffer.byteLength < 1000) {
    throw new Error(`Downloaded image is suspiciously small: ${url}`);
  }

  await sharp(buffer)
    .resize(256, 256, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toFile(destination);

  const metadata = await sharp(destination).metadata();
  if (metadata.format !== "png" || metadata.width !== 256 || metadata.height !== 256 || !metadata.hasAlpha) {
    throw new Error(`Invalid normalized image: ${destination}`);
  }
}

function parsePokemonAssetsModule(source) {
  const start = source.indexOf(pokemonArrayMarker);
  if (start === -1) throw new Error("Could not find pokemonAssets export");

  const arrayStart = source.indexOf("[", start);
  const end = source.indexOf(pokemonArrayEndMarker, arrayStart);
  if (arrayStart === -1 || end === -1) throw new Error("Could not find pokemonAssets array bounds");

  const arraySource = source.slice(arrayStart, end + 1);
  return {
    prefix: source.slice(0, arrayStart),
    assets: JSON.parse(arraySource),
    suffix: source.slice(end + 1)
  };
}

function stringifyPokemonAssets({ prefix, assets, suffix }) {
  return `${prefix}${JSON.stringify(assets, null, 2)}${suffix}`;
}

async function buildPokemonAsset(entry) {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${entry.apiName}`;
  const pokemon = await fetchJson(pokemonUrl);
  const species = await fetchJson(pokemon.species.url);
  const sourceImageUrl = pokemon.sprites?.other?.["official-artwork"]?.front_default;
  if (!sourceImageUrl) throw new Error(`Missing official artwork for ${entry.apiName}`);

  const image = `/images/pokemon/${entry.slug}.png`;
  await downloadOfficialArtwork(sourceImageUrl, path.join(imageDir, `${entry.slug}.png`));

  return {
    slug: entry.slug,
    name: entry.name,
    image,
    sourceImageUrl,
    sourceUrl: pokemonUrl,
    usage: 0,
    baseStats: normalizeStats(pokemon.stats),
    generation: generationLabel(species),
    isMega: entry.slug.endsWith("-mega"),
    moves: pokemon.moves.map((move) => titleCase(move.move.name)).sort((a, b) => a.localeCompare(b)),
    abilities: pokemon.abilities.map((ability) => titleCase(ability.ability.name)).sort((a, b) => a.localeCompare(b))
  };
}

await mkdir(imageDir, { recursive: true });

const source = await readFile(pokemonDataFile, "utf8");
const parsed = parsePokemonAssetsModule(source);
const existingSlugs = new Set(parsed.assets.map((asset) => asset.slug));
const additions = [];

for (const entry of missingPokemon) {
  if (existingSlugs.has(entry.slug)) continue;
  additions.push(await buildPokemonAsset(entry));
}

if (additions.length > 0) {
  parsed.assets.push(...additions);
  await writeFile(pokemonDataFile, stringifyPokemonAssets(parsed), "utf8");
}

console.log(`Imported ${additions.length} PokeAPI Pokemon assets.`);
