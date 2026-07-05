import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import KingambitBuildGuidePage from "./page";

const sourceImages = [
  "/images/guides/kingambit-build-guide/cover.png",
  "/images/guides/kingambit-build-guide/kingambit-usage-ranking.png",
  "/images/guides/kingambit-build-guide/kingambit-stats-triangle.png",
  "/images/guides/kingambit-build-guide/kingambit-m3-data.png",
  "/images/guides/kingambit-build-guide/kingambit-sets.png",
  "/images/guides/kingambit-build-guide/kingambit-offense-calcs.png",
  "/images/guides/kingambit-build-guide/kingambit-defense-calcs.png"
];

function visibleText(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[^;\s]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

describe("/kingambit-build-guide page", () => {
  it("renders a long SEO guide with every source image and guide navigation", () => {
    const html = renderToStaticMarkup(createElement(KingambitBuildGuidePage));
    const wordCount = visibleText(html).split(/\s+/).filter(Boolean).length;

    expect(html).toContain("Pokemon Champions Kingambit Build Guide");
    expect(html).toContain("Defiant Sucker Punch");
    expect(html).toContain('dateTime="2026-07-05"');
    expect(html).toContain("Regulation Set M-B");
    expect(html).toContain("Chople Berry");
    expect(html).toContain("Black Glasses");
    expect(html).toContain("Focus Sash");
    expect(html).toContain("Sneasler");
    expect(html).toContain("Basculegion");
    expect(html).toContain("Garchomp");
    expect(html).toContain('aria-label="Guide table of contents"');
    expect(html).toContain('aria-label="Read related articles"');
    expect(wordCount).toBeGreaterThanOrEqual(3000);

    for (const image of sourceImages) {
      expect(html).toContain(`src="${image}"`);
    }

    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*Pokemon Champions Kingambit Build Guide/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*"datePublished":"2026-07-05"/);
  });
});
