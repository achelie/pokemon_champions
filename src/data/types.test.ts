import { describe, expect, it } from "vitest";

import { pokemonTypes } from "@/data/types";

describe("Pokemon type metadata", () => {
  it("defines all 18 Pokemon types for badge rendering", () => {
    expect(pokemonTypes.map((type) => type.name)).toEqual([
      "Normal",
      "Flying",
      "Fire",
      "Psychic",
      "Water",
      "Bug",
      "Electric",
      "Rock",
      "Grass",
      "Ghost",
      "Ice",
      "Dragon",
      "Fighting",
      "Dark",
      "Poison",
      "Steel",
      "Ground",
      "Fairy"
    ]);

    for (const type of pokemonTypes) {
      expect(type.zh).toBeTruthy();
      expect(type.color).toMatch(/^#[0-9a-f]{6}$/i);
      expect(type.glyph).toBeTruthy();
    }
  });
});
