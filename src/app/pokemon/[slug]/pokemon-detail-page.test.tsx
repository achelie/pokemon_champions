import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import PokemonDetailPage, { generateMetadata } from "./page";

describe("/pokemon/[slug] page", () => {
  it("renders a local Pokebase Pokemon detail page", () => {
    const html = renderToStaticMarkup(createElement(PokemonDetailPage, { params: { slug: "blastoise-mega" } }));

    expect(html).toContain("Mega Blastoise");
    expect(html).toContain("Usage");
    expect(html).toContain("HP");
    expect(html).toContain("Sp. ATK");
    expect(html).toContain("Abilities");
    expect(html).toContain("Moves");
    expect(html).toContain('href="/pokemon"');
    expect(html).not.toContain("Local Pokemon Champions detail page generated from the Pokebase data snapshot.");
    expect(html).not.toContain("Source");
    expect(html).not.toContain('href="https://pokebase.app/pokemon-champions/pokemon/blastoise-mega"');
    expect(html).toContain('"@type":"WebPage"');
    expect(html).toContain('"url":"https://pokemetahub.com/pokemon/blastoise-mega"');
    expect(html).toContain('"name":"Mega Blastoise"');
  });

  it("generates canonical metadata for a Pokemon detail page", () => {
    const metadata = generateMetadata({ params: { slug: "blastoise-mega" } });

    expect(metadata.alternates).toMatchObject({
      canonical: "https://pokemetahub.com/pokemon/blastoise-mega"
    });
  });
});
