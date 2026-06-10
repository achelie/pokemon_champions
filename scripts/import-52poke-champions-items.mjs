import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const sourcePage = "https://wiki.52poke.com/zh-hant/%E9%81%93%E5%85%B7%E5%88%97%E8%A1%A8%EF%BC%88Champions%EF%BC%89";
const imageDir = path.join(root, "public", "images", "items");
const outputFile = path.join(root, "src", "data", "items.ts");

const requiredItems = [
  "Focus Sash",
  "Choice Scarf",
  "Sitrus Berry",
  "White Herb",
  "Black Glasses",
  "Charizardite X",
  "Charizardite Y",
  "Gengarite",
  "Tyranitarite"
];

const itemAliases = {
  "Sitrus Berry": ["Sitrus"],
  "Focus Sash": ["Focus-Sash"],
  "Safety Goggles": ["Goggles"],
  "Charizardite X": ["Charizardite-X"],
  "Charizardite Y": ["Charizardite-Y"]
};

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripTags(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function normalizeKey(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

function absoluteUrl(url) {
  const decoded = decodeHtml(url);
  if (decoded.startsWith("//")) return `https:${decoded}`;
  if (decoded.startsWith("/")) return `https://wiki.52poke.com${decoded}`;
  return decoded;
}

function originalImageUrl(row) {
  const loginOnly = row.match(/data-loginonly-srcset="([^"]+)"/)?.[1]?.split(/\s+/)[0];
  if (loginOnly) return absoluteUrl(loginOnly);
  const src = row.match(/<img[^>]+src="([^"]+)"/)?.[1];
  if (src) return absoluteUrl(src);
  return undefined;
}

function tableCells(row) {
  return [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((match) => match[1]);
}

async function downloadImage(url, destination) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.status}`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.byteLength < 500) {
    throw new Error(`Downloaded item image is suspiciously small: ${url}`);
  }
  await writeFile(destination, bytes);
}

function buildModule(items) {
  return `import type { ItemAsset } from "@/types/content";

export const itemAssets = ${JSON.stringify(items, null, 2)} satisfies ItemAsset[];

function normalizeItemKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\\s+/g, "-");
}

const itemByKey = new Map<string, ItemAsset>();

for (const item of itemAssets) {
  const keys = [item.id, item.slug, item.name, ...item.aliases];
  for (const key of keys) {
    itemByKey.set(normalizeItemKey(key), item);
  }
}

export function getItemByName(name: string) {
  return itemByKey.get(normalizeItemKey(name));
}

export function getItemImageByName(name: string) {
  return getItemByName(name)?.image;
}
`;
}

const response = await fetch(sourcePage);
if (!response.ok) {
  throw new Error(`Failed to fetch 52Poke item list: ${response.status}`);
}
const html = await response.text();
const rows = [...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((match) => match[1]);
const items = [];

for (const row of rows) {
  if (!row.includes("Champions_Sprite")) continue;
  const cells = tableCells(row);
  if (cells.length < 4) continue;
  const imageUrl = originalImageUrl(cells[0]);
  const zhName = stripTags(cells[1]);
  const englishName = stripTags(cells[3]);
  if (!imageUrl || !zhName || !englishName) continue;

  const slug = normalizeKey(englishName);
  items.push({
    id: slug,
    slug,
    name: englishName,
    aliases: [zhName, ...(itemAliases[englishName] ?? [])],
    image: `/images/items/${slug}.png`,
    sourceUrl: sourcePage,
    sourceImageUrl: imageUrl
  });
}

const uniqueItems = Array.from(new Map(items.map((item) => [item.slug, item])).values()).sort((a, b) =>
  a.slug.localeCompare(b.slug)
);

if (uniqueItems.length < 20) {
  throw new Error(`Collected too few Champions item entries: ${uniqueItems.length}`);
}

const byName = new Set(uniqueItems.flatMap((item) => [item.id, item.slug, item.name, ...item.aliases].map(normalizeKey)));
const missing = requiredItems.filter((item) => !byName.has(normalizeKey(item)));
if (missing.length) {
  throw new Error(`Missing required Champions items: ${missing.join(", ")}`);
}

await rm(imageDir, { recursive: true, force: true });
await mkdir(imageDir, { recursive: true });

for (const item of uniqueItems) {
  await downloadImage(item.sourceImageUrl, path.join(imageDir, `${item.slug}.png`));
}

await writeFile(outputFile, buildModule(uniqueItems), "utf8");
console.log(`Imported ${uniqueItems.length} Champions item assets to ${path.relative(root, imageDir)}`);
