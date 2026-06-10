import { describe, expect, it } from "vitest";

import { pokemonAssets, getPokemonByName, getPokemonImageByName } from "@/data/pokemon";
import { teams } from "@/data/teams";
import { tierListsByFormat } from "@/data/tierList";
import { tierRecommendationGroups } from "@/data/tierRecommendations";

describe("Pokemon asset library", () => {
  it("uses unique slugs and local image paths", () => {
    const slugs = new Set(pokemonAssets.map((pokemon) => pokemon.slug));
    const images = new Set(pokemonAssets.map((pokemon) => pokemon.image));

    expect(slugs.size).toBe(pokemonAssets.length);
    expect(images.size).toBe(pokemonAssets.length);

    for (const pokemon of pokemonAssets) {
      expect(pokemon.image).toMatch(/^\/images\/pokemon\/[a-z0-9-]+\.(webp|png)$/);
      expect(pokemon.sourceImageUrl).toMatch(/^https:\/\/(static\.dotgg\.gg\/pokechamps\/|raw\.githubusercontent\.com\/PokeAPI\/)/);
    }
  });

  it("resolves every Pokemon currently referenced by tier list and teams", () => {
    const tierNames = Object.values(tierListsByFormat).flatMap((tierList) =>
      Object.values(tierList).flatMap((rank) => rank.flatMap((pokemon) => [pokemon.pokemonId, pokemon.name]))
    );
    const teamNames = teams.flatMap((team) => team.members.map((member) => member.pokemonId));
    const recommendationNames = tierRecommendationGroups.flatMap((group) =>
      group.entries.flatMap((recommendation) => [recommendation.pokemonId, recommendation.name])
    );
    const uniqueNames = Array.from(new Set([...tierNames, ...teamNames, ...recommendationNames]));

    for (const name of uniqueNames) {
      expect(getPokemonByName(name), name).toBeDefined();
      expect(getPokemonImageByName(name), name).toMatch(/^\/images\/pokemon\/[a-z0-9-]+\.(webp|png)$/);
    }
  });

  it("normalizes case, punctuation, spacing, and aliases", () => {
    expect(getPokemonByName("mega raichu x")?.slug).toBe("raichu");
    expect(getPokemonByName("Mega-Raichu-X")?.slug).toBe("raichu");
    expect(getPokemonByName("Pokémon Champion Pikachu")?.name).toBe("Pikachu");
  });
});
