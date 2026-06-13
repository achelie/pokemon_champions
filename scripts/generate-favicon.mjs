import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const source = path.join(publicDir, "logo.png");

async function renderIcon(size) {
  return sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
      withoutEnlargement: false
    })
    .png()
    .toBuffer();
}

function icoFromPng(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);

  const directory = Buffer.alloc(16);
  directory.writeUInt8(32, 0);
  directory.writeUInt8(32, 1);
  directory.writeUInt8(0, 2);
  directory.writeUInt8(0, 3);
  directory.writeUInt16LE(1, 4);
  directory.writeUInt16LE(32, 6);
  directory.writeUInt32LE(png.length, 8);
  directory.writeUInt32LE(22, 12);

  return Buffer.concat([header, directory, png]);
}

const sizes = [
  ["favicon-32x32.png", 32],
  ["favicon-48x48.png", 48],
  ["favicon-96x96.png", 96],
  ["apple-touch-icon.png", 180],
  ["icon-192x192.png", 192],
  ["icon-512x512.png", 512]
];

for (const [filename, size] of sizes) {
  await writeFile(path.join(publicDir, filename), await renderIcon(size));
}

await writeFile(path.join(publicDir, "favicon.ico"), icoFromPng(await readFile(path.join(publicDir, "favicon-32x32.png"))));

console.log("Generated favicon assets.");
