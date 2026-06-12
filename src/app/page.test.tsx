import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { pokemonAssets } from "@/data/pokemon";

import HomePage from "./page";

function sectionHtml(html: string, label: string) {
  const match = html.match(new RegExp(`<section[^>]+aria-label="${label}"[\\s\\S]*?</section>`));
  return match?.[0] ?? "";
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

describe("home page", () => {
  it("links each Popular Pokemon card to that pokemon detail page", () => {
    const html = renderToStaticMarkup(createElement(HomePage));
    const popularPokemon = pokemonAssets.filter((pokemon) => pokemon.usage > 0).slice(0, 10);

    for (const pokemon of popularPokemon) {
      expect(html).toMatch(new RegExp(`<a[^>]+href="/pokemon/${pokemon.slug}"[\\s\\S]*?${escapeRegExp(pokemon.name)}[\\s\\S]*?</a>`));
    }
  });

  it("makes the full Tier List panel link to the tier list page", () => {
    const html = renderToStaticMarkup(createElement(HomePage));

    expect(html).toMatch(/<a[^>]+aria-label="Open Tier List"[^>]+href="\/tier-list"[\s\S]*?<h2[^>]*>Tier List<\/h2>/);
  });

  it("links each Useful Pokemon card to its matching category", () => {
    const html = renderToStaticMarkup(createElement(HomePage));

    expect(html).toMatch(/<a[^>]+href="\/useful-pokemon"[\s\S]*?Mega Pokemon/);
    expect(html).toMatch(/<a[^>]+href="\/useful-pokemon\?view=utility"[\s\S]*?General Utility Pokemon/);
    expect(html).toMatch(/<a[^>]+href="\/useful-pokemon\?view=damage-dealers"[\s\S]*?Other Damage Dealers/);
  });

  it("constrains Useful Pokemon preview tiles for narrow screens", () => {
    const html = renderToStaticMarkup(createElement(HomePage));

    expect(html).toContain("grid min-w-0 grid-cols-[repeat(5,minmax(0,1fr))]");
    expect(html).toContain("h-6 w-6 border-0 sm:h-7 sm:w-7");
    expect(html).toContain("h-4 w-4 border-0 bg-mist sm:h-5 sm:w-5");
  });

  it("renders four single teams and four double teams in separate Best Teams rows", () => {
    const html = renderToStaticMarkup(createElement(HomePage));
    const singleTeams = sectionHtml(html, "Single Battle best teams");
    const doubleTeams = sectionHtml(html, "Double Battle best teams");

    expect(singleTeams).toContain("Single Battle");
    expect(doubleTeams).toContain("Double Battle");
    expect(singleTeams.match(/href="\/best-teams\?format=single"/g)).toHaveLength(4);
    expect(doubleTeams.match(/href="\/best-teams"/g)).toHaveLength(4);
    expect(singleTeams).toMatch(/>1<\/span>[\s\S]*>2<\/span>[\s\S]*>3<\/span>[\s\S]*>4<\/span>/);
    expect(doubleTeams).toMatch(/>1<\/span>[\s\S]*>2<\/span>[\s\S]*>3<\/span>[\s\S]*>4<\/span>/);
  });
});
