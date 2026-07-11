import { describe, expect, it } from "vitest";

import { pokemonAssets } from "@/data/pokemon";

import sitemap from "./sitemap";

describe("sitemap", () => {
  it("includes guide routes, database routes, and Pokemon detail routes on www.pokemetahub.com", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toContain("https://www.pokemetahub.com/");
    expect(urls).toContain("https://www.pokemetahub.com/guides");
    expect(urls).toContain("https://www.pokemetahub.com/tier-list");
    expect(urls).toContain("https://www.pokemetahub.com/mega-staraptor-build-guide");
    expect(urls).toContain("https://www.pokemetahub.com/garchomp-build-guide");
    expect(urls).toContain("https://www.pokemetahub.com/kingambit-build-guide");
    expect(urls).toContain("https://www.pokemetahub.com/sinistcha-build-guide");
    expect(urls).toContain("https://www.pokemetahub.com/mega-raichu-y-zap-cannon-build");
    expect(urls).toContain("https://www.pokemetahub.com/regulation-set-mb-mega-analysis");
    expect(urls).toContain("https://www.pokemetahub.com/pokemon");
    expect(urls).toContain("https://www.pokemetahub.com/moves");
    expect(urls).toContain("https://www.pokemetahub.com/abilities");
    expect(urls).toContain("https://www.pokemetahub.com/items");
    expect(urls).toContain("https://www.pokemetahub.com/pokemon/basculegion");
    expect(urls).toContain("https://www.pokemetahub.com/pokemon/blastoise-mega");
    expect(entries).toHaveLength(1 + 1 + 13 + 4 + pokemonAssets.length);
    expect(urls.every((url) => url.startsWith("https://www.pokemetahub.com"))).toBe(true);
  });
});
