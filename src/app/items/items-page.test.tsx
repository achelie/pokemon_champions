import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import ItemsListPage from "./page";

describe("/items page", () => {
  it("renders Pokebase item columns and category filters", () => {
    const html = renderToStaticMarkup(createElement(ItemsListPage, { searchParams: {} }));

    expect(html).toContain('aria-label="Pokemon Champions items table"');
    expect(html).toMatch(/<th[^>]*>Item<\/th>/);
    expect(html).toMatch(/<th[^>]*>Description<\/th>/);
    expect(html).toContain("Category");
    expect(html).toContain("Mega Evolution");
    expect(html).toContain(">119</span>");
    expect(html).toContain(">results</span>");
    expect(html).toContain(">1</span>");
    expect(html).toContain(">of</span>");
    expect(html).toContain(">2</span>");
    expect(html).not.toContain("https://pokebase.app/pokemon-champions/items/");
  });
});
