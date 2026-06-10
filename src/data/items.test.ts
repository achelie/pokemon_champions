import { describe, expect, it } from "vitest";

import { getItemByName, getItemImageByName, itemAssets } from "@/data/items";

describe("Champions item asset library", () => {
  it("uses unique slugs and local image paths", () => {
    const slugs = new Set(itemAssets.map((item) => item.slug));
    const images = new Set(itemAssets.map((item) => item.image));

    expect(itemAssets.length).toBeGreaterThan(20);
    expect(slugs.size).toBe(itemAssets.length);
    expect(images.size).toBe(itemAssets.length);

    for (const item of itemAssets) {
      expect(item.image).toMatch(/^\/images\/items\/[a-z0-9-]+\.(webp|png)$/);
      expect(item.sourceImageUrl).toMatch(/^https:\/\/(s1|media)\.52poke\.com\/wiki\//);
    }
  });

  it("normalizes case, punctuation, and aliases", () => {
    expect(getItemByName("focus sash")?.name).toBe("Focus Sash");
    expect(getItemByName("Focus-Sash")?.name).toBe("Focus Sash");
    expect(getItemImageByName("Sitrus Berry")).toMatch(/^\/images\/items\/[a-z0-9-]+\.(webp|png)$/);
  });
});
