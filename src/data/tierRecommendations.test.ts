import { describe, expect, it } from "vitest";

import { getItemByName } from "@/data/items";
import { getPokemonByName } from "@/data/pokemon";
import { tierRecommendationGroups, tierRecommendationSourceImages } from "@/data/tierRecommendations";

const expectedSourceIds = [
  "overview",
  "mega-1",
  "mega-2",
  "mega-3",
  "mega-4",
  "mega-5",
  "mega-6",
  "mega-7",
  "mega-8",
  "mega-9",
  "utility-1",
  "utility-2",
  "utility-3",
  "utility-4",
  "damage-1",
  "damage-2",
  "damage-3",
  "damage-4",
  "damage-5",
  "damage-6",
  "damage-7",
  "damage-8",
  "ev-note"
];

describe("tier recommendation build data", () => {
  it("defines the three recommendation categories after the main tier list", () => {
    expect(tierRecommendationGroups.map((group) => group.id)).toEqual(["mega", "utility", "damageDealers"]);
    expect(tierRecommendationGroups.map((group) => group.entries.length)).toEqual([27, 12, 24]);
  });

  it("keeps each build complete and resolved through the asset library", () => {
    for (const group of tierRecommendationGroups) {
      for (const entry of group.entries) {
        expect(entry.id).toBeTruthy();
        expect(entry.category).toBe(group.id);
        expect(entry.moves).toHaveLength(4);
        expect(entry.moves.every(Boolean)).toBe(true);
        expect(entry.nature).toBeTruthy();
        expect(entry.ability).toBeTruthy();
        expect(entry.baseStats).toBeTruthy();
        expect(entry.evs).toBeTruthy();
        expect(entry.itemId).toBeTruthy();
        expect(entry.itemName).toBeTruthy();
        expect(entry.explanation).toBeTruthy();
        expect(entry.explanation).not.toMatch(/Recommended for|Why it matters|Strengths|Cautions/);
        expect(entry.sourceImages.length).toBeGreaterThanOrEqual(1);

        const pokemon = getPokemonByName(entry.pokemonId);
        expect(pokemon, entry.name).toBeDefined();
        expect(pokemon?.image).toMatch(/^\/images\/pokemon\/[a-z0-9-]+\.(webp|png)$/);

        const item = getItemByName(entry.itemId);
        expect(item, `${entry.itemName} should resolve through itemId ${entry.itemId}`).toBeDefined();
        expect(item?.image).toMatch(/^\/images\/items\/[a-z0-9-]+\.(webp|png)$/);
      }
    }
  });

  it("requires Mega build entries to include Mega ability, stats, and EVs", () => {
    const megaEntries = tierRecommendationGroups.find((group) => group.id === "mega")?.entries ?? [];

    expect(megaEntries.length).toBeGreaterThan(0);
    for (const entry of megaEntries) {
      expect(entry.megaAbility).toBeTruthy();
      expect(entry.megaBaseStats).toBeTruthy();
      expect(entry.megaEvs).toBeTruthy();
    }
  });

  it("records every screenshot source id without exposing external image URLs", () => {
    const usedSourceIds = new Set([
      ...tierRecommendationSourceImages.map((source) => source.id),
      ...tierRecommendationGroups.flatMap((group) => group.entries.flatMap((entry) => entry.sourceImages))
    ]);

    expect(Array.from(usedSourceIds).sort()).toEqual([...expectedSourceIds].sort());
    for (const entry of tierRecommendationGroups.flatMap((group) => group.entries)) {
      expect(JSON.stringify(entry)).not.toMatch(/static\.dotgg\.gg|s1\.52poke\.com|media\.52poke\.com/);
    }
  });
});
