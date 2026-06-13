import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import PokemonListPage from "./page";

describe("/pokemon page", () => {
  it("renders Pokebase aligned columns, local detail links, and omits the old type column", () => {
    const html = renderToStaticMarkup(createElement(PokemonListPage, { searchParams: {} }));

    expect(html).toContain('aria-label="Pokemon Champions Pokemon usage table"');
    expect(html).toMatch(/<th[^>]*>Pokemon<\/th>/);
    expect(html).toMatch(/<th[^>]*>Usage<\/th>/);
    expect(html).toMatch(/<th[^>]*>Sp\. ATK<\/th>/);
    expect(html).toMatch(/<th[^>]*>Sp\. DEF<\/th>/);
    expect(html).not.toMatch(/<th[^>]*>Type<\/th>/);
    expect(html).toContain('href="/pokemon/basculegion"');
    expect(html).not.toContain('href="https://pokebase.app/pokemon-champions/pokemon/basculegion"');
    expect(html).toContain(">287</span>");
    expect(html).toContain(">results</span>");
    expect(html).toContain(">1</span>");
    expect(html).toContain(">of</span>");
    expect(html).toContain(">3</span>");
  });
});
