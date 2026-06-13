import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";

import { getItemByName, getItemImageByName, itemAssets } from "@/data/items";

function publicPath(assetPath: string) {
  return path.join(process.cwd(), "public", assetPath.replace(/^\//, ""));
}

function fileHash(filePath: string) {
  return createHash("sha256").update(readFileSync(filePath)).digest("hex");
}

describe("Champions item asset library", () => {
  it("uses Pokebase canonical rows, unique slugs, and local image paths", () => {
    const slugs = new Set(itemAssets.map((item) => item.slug));
    const images = new Set(itemAssets.map((item) => item.image));

    expect(itemAssets).toHaveLength(119);
    expect(itemAssets[0]).toMatchObject({
      slug: "abomasite",
      name: "Abomasite",
      category: "Mega Evolution"
    });
    expect(slugs.size).toBe(itemAssets.length);
    expect(images.size).toBe(itemAssets.length);

    for (const item of itemAssets) {
      expect(item.image).toMatch(/^\/images\/items\/[a-z0-9-]+\.(webp|png)$/);
      expect(item.sourceUrl).toMatch(/^https:\/\/pokebase\.app\/pokemon-champions\/items\//);
      expect(item.sourceImageUrl).toMatch(/^https:\/\/i\.pokebase\.app\/pokemon-champions\//);
      expect(item.description).toBeTruthy();
      expect(item.category).toBeTruthy();
      expect(existsSync(publicPath(item.image)), item.slug).toBe(true);
    }
  });

  it("does not reuse the site logo as an item image", () => {
    const logoHash = fileHash(path.join(process.cwd(), "public", "logo.png"));

    for (const item of itemAssets) {
      expect(fileHash(publicPath(item.image)), item.slug).not.toBe(logoHash);
    }
  });

  it("normalizes case and punctuation", () => {
    expect(getItemByName("focus sash")?.name).toBe("Focus Sash");
    expect(getItemByName("Focus-Sash")?.name).toBe("Focus Sash");
    expect(getItemImageByName("Sitrus Berry")).toMatch(/^\/images\/items\/[a-z0-9-]+\.(webp|png)$/);
  });
});
