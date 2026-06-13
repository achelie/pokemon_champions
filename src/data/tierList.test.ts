import { describe, expect, it } from "vitest";

import { getPokemonByName } from "@/data/pokemon";
import { resolveTierListView, tierListViews } from "@/data/tierListViews";
import { tierListsByFormat } from "@/data/tierList";

describe("format-specific tier lists", () => {
  it("defines Single and Double Battle views with Double as the fallback", () => {
    expect(tierListViews.map((view) => view.key)).toEqual(["double", "single"]);
    expect(resolveTierListView("double").key).toBe("double");
    expect(resolveTierListView("single").key).toBe("single");
    expect(resolveTierListView("unknown").key).toBe("double");
    expect(resolveTierListView(undefined).key).toBe("double");
  });

  it("uses SS, S, and A ranks for both formats", () => {
    expect(Object.keys(tierListsByFormat)).toEqual(["double", "single"]);
    expect(Object.keys(tierListsByFormat.double)).toEqual(["SS", "S", "A"]);
    expect(Object.keys(tierListsByFormat.single)).toEqual(["SS", "S", "A"]);
  });

  it("keeps every tier entry complete and resolved through the asset library", () => {
    for (const [formatKey, tierList] of Object.entries(tierListsByFormat)) {
      for (const [rank, entries] of Object.entries(tierList)) {
        expect(entries.length, `${formatKey} ${rank}`).toBeGreaterThan(0);

        for (const entry of entries) {
          expect(entry.pokemonId, entry.name).toBeTruthy();
          expect(entry.name).toBeTruthy();
          expect(entry.type).toBeTruthy();
          expect(entry.role).toBeTruthy();
          expect(entry.format).toBe(formatKey === "double" ? "Double" : "Single");
          expect(entry.reason).toBeTruthy();
          expect(entry.reason).not.toMatch(/Early meta placeholder/i);
          expect(entry.reason).not.toMatch(/video|screenshot|source/i);
          const pokemon = getPokemonByName(entry.pokemonId);
          expect(pokemon, entry.name).toBeDefined();
          expect(pokemon?.image, entry.name).toMatch(/^\/images\/pokemon\/[a-z0-9-]+\.(webp|png)$/);
        }
      }
    }
  });

  it("matches the requested screenshot tier sizes", () => {
    expect(tierListsByFormat.double.SS).toHaveLength(7);
    expect(tierListsByFormat.double.S).toHaveLength(14);
    expect(tierListsByFormat.double.A).toHaveLength(31);
    expect(tierListsByFormat.single.SS).toHaveLength(4);
    expect(tierListsByFormat.single.S).toHaveLength(19);
    expect(tierListsByFormat.single.A).toHaveLength(23);
  });
});
