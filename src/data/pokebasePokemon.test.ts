import { describe, expect, it } from "vitest";

import {
  filterPokebasePokemon,
  pokebasePokemon,
  pokebaseRegulationSets
} from "@/data/pokebasePokemon";

describe("PokéBase Pokémon list data", () => {
  it("matches the default M-A PokéBase list snapshot", () => {
    expect(pokebaseRegulationSets).toContain("M-A");
    expect(pokebasePokemon).toHaveLength(272);
    expect(pokebasePokemon[0]).toMatchObject({
      name: "Basculegion",
      slug: "basculegion",
      usage: 45.5,
      baseStats: {
        hp: 120,
        attack: 112,
        defense: 65,
        specialAttack: 80,
        specialDefense: 75,
        speed: 78
      }
    });
  });

  it("has complete filterable metadata for every listed Pokémon", () => {
    for (const pokemon of pokebasePokemon) {
      expect(pokemon.sourceUrl).toMatch(/^https:\/\/pokebase\.app\/pokemon-champions\/pokemon\//);
      expect(pokemon.image).toMatch(/^\/images\/pokemon\/[a-z0-9-]+\.(webp|png)$/);
      expect(Object.values(pokemon.baseStats)).toHaveLength(6);
      expect(Object.values(pokemon.baseStats).every((stat) => Number.isInteger(stat))).toBe(true);
      expect(pokemon.generation).toMatch(/^Gen [1-9]$/);
      expect(Array.isArray(pokemon.moves)).toBe(true);
      expect(Array.isArray(pokemon.abilities)).toBe(true);
    }
  });

  it("filters by move, ability, generation, and mega state together", () => {
    const filtered = filterPokebasePokemon(pokebasePokemon, {
      move: "Fake Out",
      ability: "Intimidate",
      generation: "Gen 7",
      mega: "base"
    });

    expect(filtered.map((pokemon) => pokemon.name)).toContain("Incineroar");
    expect(filtered.every((pokemon) => pokemon.moves.includes("Fake Out"))).toBe(true);
    expect(filtered.every((pokemon) => pokemon.abilities.includes("Intimidate"))).toBe(true);
    expect(filtered.every((pokemon) => pokemon.generation === "Gen 7")).toBe(true);
    expect(filtered.every((pokemon) => !pokemon.isMega)).toBe(true);
  });
});
