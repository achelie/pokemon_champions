import { describe, expect, it } from "vitest";

import { abilityAssets, getAbilityByName, getAbilityDescriptionByName } from "@/data/abilities";

describe("Champions ability library", () => {
  it("uses Pokebase canonical rows and exposes lookup helpers", () => {
    expect(abilityAssets).toHaveLength(311);
    expect(abilityAssets[0]).toMatchObject({
      slug: "adaptability",
      name: "Adaptability",
      isMegaAbility: true
    });
    expect(abilityAssets[0].description).toContain("Same Type Attack Bonus");

    for (const ability of abilityAssets) {
      expect(ability.slug).toMatch(/^[a-z0-9-]+$/);
      expect(ability.sourceUrl).toMatch(/^https:\/\/pokebase\.app\/pokemon-champions\/abilities\//);
      expect(ability.description).toBeTruthy();
      expect(Array.isArray(ability.pokemon)).toBe(true);
    }
  });

  it("normalizes case and punctuation", () => {
    expect(getAbilityByName("mega launcher")?.slug).toBe("mega-launcher");
    expect(getAbilityByName("Mega-Launcher")?.slug).toBe("mega-launcher");
    expect(getAbilityDescriptionByName("Adaptability")).toContain("Same Type Attack Bonus");
  });
});
