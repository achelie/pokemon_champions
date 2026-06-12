import { readFileSync } from "node:fs";
import path from "node:path";

import sharp from "sharp";
import { describe, expect, it } from "vitest";

const publicDir = path.join(process.cwd(), "public");

const expectedIconSizes = [
  ["logo.png", 910],
  ["favicon-32x32.png", 32],
  ["favicon-48x48.png", 48],
  ["favicon-96x96.png", 96],
  ["apple-touch-icon.png", 180],
  ["icon-192x192.png", 192],
  ["icon-512x512.png", 512]
] as const;

async function alphaBounds(filePath: string) {
  const { data, info } = await sharp(filePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let minX = info.width;
  let minY = info.height;
  let maxX = -1;
  let maxY = -1;
  let alphaPixels = 0;

  for (let y = 0; y < info.height; y += 1) {
    for (let x = 0; x < info.width; x += 1) {
      const alpha = data[(y * info.width + x) * 4 + 3];
      if (alpha > 16) {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        alphaPixels += 1;
      }
    }
  }

  return {
    width: info.width,
    height: info.height,
    alphaPixels,
    widthRatio: (maxX - minX + 1) / info.width,
    heightRatio: (maxY - minY + 1) / info.height
  };
}

describe("favicon artwork", () => {
  it("generates square logo and favicon assets at Google-friendly sizes", async () => {
    for (const [filename, size] of expectedIconSizes) {
      const metadata = await sharp(path.join(publicDir, filename)).metadata();
      expect(metadata.width, filename).toBe(size);
      expect(metadata.height, filename).toBe(size);
    }
  });

  it("preserves the source artwork composition without trimming or adding a new background", async () => {
    const sourceBounds = await alphaBounds(path.join(publicDir, "logo.png"));
    const faviconBounds = await alphaBounds(path.join(publicDir, "favicon-96x96.png"));

    expect(faviconBounds.alphaPixels).toBeGreaterThan(0);
    expect(faviconBounds.widthRatio).toBeCloseTo(sourceBounds.widthRatio, 1);
    expect(faviconBounds.heightRatio).toBeCloseTo(sourceBounds.heightRatio, 1);
  });

  it("declares the generated icon files in the root layout head", () => {
    const layout = readFileSync(path.join(process.cwd(), "src", "app", "layout.tsx"), "utf8");

    expect(layout).toContain("/favicon.ico?v=3");
    expect(layout).toContain('/favicon-48x48.png?v=3"');
    expect(layout).toContain('/favicon-96x96.png?v=3"');
  });
});
