import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

import { getPokemonByName, getPokemonImageByName, pokemonAssets } from "@/data/pokemon";
import { teams } from "@/data/teams";
import { tierListsByFormat } from "@/data/tierList";
import { tierRecommendationGroups } from "@/data/tierRecommendations";

function publicPath(assetPath: string) {
  return path.join(process.cwd(), "public", assetPath.replace(/^\//, ""));
}

function fileHash(filePath: string) {
  return createHash("sha256").update(readFileSync(filePath)).digest("hex");
}

async function topLeftOpaquePixelCount(filePath: string) {
  const { data, info } = await sharp(filePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let opaquePixels = 0;

  for (let y = 0; y < Math.min(12, info.height); y += 1) {
    for (let x = 0; x < Math.min(12, info.width); x += 1) {
      if (data[(y * info.width + x) * 4 + 3] > 16) {
        opaquePixels += 1;
      }
    }
  }

  return opaquePixels;
}

describe("Pokemon asset library", () => {
  it("uses canonical rows, unique slugs, and local image paths", () => {
    const slugs = new Set(pokemonAssets.map((pokemon) => pokemon.slug));
    const images = new Set(pokemonAssets.map((pokemon) => pokemon.image));

    expect(pokemonAssets).toHaveLength(287);
    expect(slugs.size).toBe(pokemonAssets.length);
    expect(images.size).toBe(pokemonAssets.length);
    expect(pokemonAssets[0]).toMatchObject({
      name: "Basculegion",
      slug: "basculegion",
      usage: 45.5
    });

    for (const pokemon of pokemonAssets) {
      expect(pokemon.image).toMatch(/^\/images\/pokemon\/[a-z0-9-]+\.(webp|png)$/);
      expect(pokemon.sourceUrl).toMatch(/^https:\/\/(pokebase\.app\/pokemon-champions\/pokemon|pokeapi\.co\/api\/v2\/pokemon)\//);
      expect(pokemon.sourceImageUrl).toMatch(/^https:\/\/(i\.pokebase\.app\/pokemon-champions|raw\.githubusercontent\.com\/PokeAPI\/sprites)\//);
      expect(Object.values(pokemon.baseStats)).toHaveLength(6);
      expect(existsSync(publicPath(pokemon.image)), pokemon.slug).toBe(true);
    }
  });

  it("resolves every referenced Pokemon through the asset library", () => {
    const tierNames = Object.values(tierListsByFormat).flatMap((tierList) =>
      Object.values(tierList).flatMap((rank) => rank.flatMap((pokemon) => [pokemon.pokemonId, pokemon.name]))
    );
    const teamNames = teams.flatMap((team) => team.members.map((member) => member.pokemonId));
    const recommendationNames = tierRecommendationGroups.flatMap((group) =>
      group.entries.flatMap((recommendation) => [recommendation.pokemonId, recommendation.name])
    );
    const uniqueNames = Array.from(new Set([...tierNames, ...teamNames, ...recommendationNames]));

    for (const name of uniqueNames) {
      const pokemon = getPokemonByName(name);
      expect(pokemon, name).toBeDefined();
      expect(getPokemonImageByName(name), name).toMatch(/^\/images\/pokemon\/[a-z0-9-]+\.(webp|png)$/);
    }
  });

  it("normalizes case, punctuation, spacing, and local display prefixes", () => {
    expect(getPokemonByName("mega lucario")?.slug).toBe("lucario-mega");
    expect(getPokemonByName("Mega-Lucario")?.slug).toBe("lucario-mega");
    expect(getPokemonByName("Pokemon Champion Pikachu")?.name).toBe("Pikachu");
  });

  it("keeps known form images away from the favicon fallback", () => {
    const logoHash = fileHash(path.join(process.cwd(), "public", "logo.png"));
    for (const slug of ["lycanroc-midday", "tauros-paldea-aqua-breed", "blastoise-mega"]) {
      const pokemon = getPokemonByName(slug);
      expect(pokemon, slug).toBeDefined();
      expect(pokemon?.image, slug).not.toMatch(/favicon|logo/i);
      expect(pokemon?.sourceImageUrl, slug).toMatch(/^https:\/\/i\.pokebase\.app\/pokemon-champions\//);
      expect(fileHash(publicPath(pokemon?.image ?? "")), slug).not.toBe(logoHash);
    }
  });

  it("stores clean transparent 256px Pokemon images instead of page screenshots", async () => {
    const checkedSlugs = new Set(["basculegion", "garchomp", "blastoise-mega", "lycanroc-midday", "tauros-paldea-aqua-breed"]);

    for (const pokemon of pokemonAssets) {
      const imagePath = publicPath(pokemon.image);
      const metadata = await sharp(imagePath).metadata();

      expect(metadata.format, pokemon.slug).toBe("png");
      expect(metadata.width, pokemon.slug).toBe(256);
      expect(metadata.height, pokemon.slug).toBe(256);
      expect(metadata.hasAlpha, pokemon.slug).toBe(true);

      if (checkedSlugs.has(pokemon.slug)) {
        expect(await topLeftOpaquePixelCount(imagePath), pokemon.slug).toBe(0);
      }
    }
  });
});
