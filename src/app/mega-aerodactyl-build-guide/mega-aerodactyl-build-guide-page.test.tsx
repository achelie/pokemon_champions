import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import MegaAerodactylBuildGuidePage from "./page";

const sourceImages = [
  "/images/guides/mega-aerodactyl-build-guide/cover.png",
  "/images/guides/mega-aerodactyl-build-guide/offensive-benchmarks.png",
  "/images/guides/mega-aerodactyl-build-guide/defensive-benchmarks.png",
  "/images/guides/mega-aerodactyl-build-guide/usage-data-changes.png",
  "/images/guides/mega-aerodactyl-build-guide/recommended-sets.png",
  "/images/guides/mega-aerodactyl-build-guide/stats-typing-ability.png",
  "/images/guides/mega-aerodactyl-build-guide/format-usage-ranking.png"
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

describe("/mega-aerodactyl-build-guide page", () => {
  it("renders a long SEO guide with every source image, FAQ JSON-LD, and guide navigation", () => {
    const html = renderToStaticMarkup(createElement(MegaAerodactylBuildGuidePage));
    const wordCount = visibleText(html).split(/\s+/).filter(Boolean).length;

    expect(html).toContain("Pokemon Champions Mega Aerodactyl build guide");
    expect(html).toContain("Tailwind, Rock Slide");
    expect(html).toContain('dateTime="2026-07-15"');
    expect(html).toContain("Tough Claws");
    expect(html).toContain("Dual Wingbeat");
    expect(html).toContain("Ice Fang");
    expect(html).toContain("Wide Guard");
    expect(html).toContain("Choice Scarf Basculegion");
    expect(html).toContain('aria-label="Guide table of contents"');
    expect(html).toContain('aria-label="Read related articles"');
    expect(wordCount).toBeGreaterThanOrEqual(2000);

    for (const image of sourceImages) {
      expect(html).toContain(`src="${image}"`);
    }

    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*Pokemon Champions Mega Aerodactyl Build Guide/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*FAQPage/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*"datePublished":"2026-07-15"/);
  });
});
