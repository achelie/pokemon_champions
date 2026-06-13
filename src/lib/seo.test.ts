import { describe, expect, it } from "vitest";

import { databasePageJsonLd, pokemonDetailJsonLd } from "@/lib/seo";

const pokemon = {
  slug: "basculegion",
  name: "Basculegion",
  image: "/images/pokemon/basculegion.png",
  usage: 45.5,
  generation: "Gen 8",
  abilities: ["Swift Swim", "Adaptability"]
};

describe("SEO structured data helpers", () => {
  it("creates stable JSON-LD for database pages", () => {
    expect(
      databasePageJsonLd({
        title: "Pokemon Champions Pokemon List",
        description: "Complete Pokemon Champions Pokemon usage table.",
        path: "/pokemon",
        itemCount: 287
      })
    ).toMatchObject({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Pokemon Champions Pokemon List",
      url: "https://www.pokemetahub.com/pokemon",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: 287
      }
    });
  });

  it("creates stable JSON-LD for Pokemon detail pages", () => {
    expect(pokemonDetailJsonLd(pokemon)).toMatchObject({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Basculegion Pokemon Champions Data",
      url: "https://www.pokemetahub.com/pokemon/basculegion",
      mainEntity: {
        "@type": "Thing",
        name: "Basculegion",
        image: "https://www.pokemetahub.com/images/pokemon/basculegion.png"
      }
    });
  });
});
