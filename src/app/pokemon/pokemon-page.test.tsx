import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import PokemonListPage from "./page";

describe("/pokemon page", () => {
  it("renders PokéBase aligned columns and omits the old type column", () => {
    const html = renderToStaticMarkup(createElement(PokemonListPage, { searchParams: {} }));

    expect(html).toContain('aria-label="Pokémon Champions Pokémon usage table"');
    expect(html).toMatch(/<th[^>]*>Pokemon<\/th>/);
    expect(html).toMatch(/<th[^>]*>Usage<\/th>/);
    expect(html).toMatch(/<th[^>]*>Sp\. ATK<\/th>/);
    expect(html).toMatch(/<th[^>]*>Sp\. DEF<\/th>/);
    expect(html).not.toMatch(/<th[^>]*>Type<\/th>/);
    expect(html).toContain(">272</span>");
    expect(html).toContain(">results</span>");
    expect(html).toContain(">1</span>");
    expect(html).toContain(">of</span>");
    expect(html).toContain(">3</span>");
  });
});
