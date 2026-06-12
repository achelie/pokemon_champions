import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import AbilitiesListPage from "./page";

describe("/abilities page", () => {
  it("renders Pokebase ability columns and mega ability filters", () => {
    const html = renderToStaticMarkup(createElement(AbilitiesListPage, { searchParams: {} }));

    expect(html).toContain('aria-label="Pokemon Champions abilities table"');
    expect(html).toMatch(/<th[^>]*>Ability<\/th>/);
    expect(html).toMatch(/<th[^>]*>Description<\/th>/);
    expect(html).toContain("Mega Ability");
    expect(html).toContain(">311</span>");
    expect(html).toContain(">results</span>");
    expect(html).toContain(">1</span>");
    expect(html).toContain(">of</span>");
    expect(html).toContain(">4</span>");
    expect(html).not.toContain("https://pokebase.app/pokemon-champions/abilities/");
  });
});
