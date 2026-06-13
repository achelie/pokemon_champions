import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import MovesListPage from "./page";

describe("/moves page", () => {
  it("renders Pokebase aligned columns and omits the old type and class columns", () => {
    const html = renderToStaticMarkup(createElement(MovesListPage, { searchParams: {} }));

    expect(html).toContain('aria-label="Pokemon Champions moves usage table"');
    expect(html).toMatch(/<th[^>]*>Move<\/th>/);
    expect(html).toMatch(/<th[^>]*>%<\/th>/);
    expect(html).toMatch(/<th[^>]*>Description<\/th>/);
    expect(html).toMatch(/<th[^>]*>Accuracy<\/th>/);
    expect(html).not.toMatch(/<th[^>]*>Type<\/th>/);
    expect(html).not.toMatch(/<th[^>]*>Class<\/th>/);
    expect(html).toContain(">937</span>");
    expect(html).toContain(">results</span>");
    expect(html).toContain(">1</span>");
    expect(html).toContain(">of</span>");
    expect(html).toContain(">10</span>");
    expect(html).not.toContain("https://pokebase.app/pokemon-champions/moves/");
  });
});
