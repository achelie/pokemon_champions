import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import SinistchaBuildGuidePage from "./page";

const sourceImages = [
  "/images/guides/sinistcha-build-guide/cover.png",
  "/images/guides/sinistcha-build-guide/m3-usage-data.png",
  "/images/guides/sinistcha-build-guide/matcha-gotcha-offense.png",
  "/images/guides/sinistcha-build-guide/recommended-sets.png",
  "/images/guides/sinistcha-build-guide/defensive-benchmarks.png",
  "/images/guides/sinistcha-build-guide/stats-and-role.png",
  "/images/guides/sinistcha-build-guide/format-usage-ranking.png",
  "/images/guides/sinistcha-build-guide/santino-team.png"
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

describe("/sinistcha-build-guide page", () => {
  it("renders a long SEO guide with every source image, FAQ JSON-LD, and guide navigation", () => {
    const html = renderToStaticMarkup(createElement(SinistchaBuildGuidePage));
    const wordCount = visibleText(html).split(/\s+/).filter(Boolean).length;

    expect(html).toContain("Pokemon Champions Sinistcha build guide");
    expect(html).toContain("Matcha Gotcha support");
    expect(html).toContain('dateTime="2026-07-11"');
    expect(html).toContain("Rage Powder");
    expect(html).toContain("Hospitality");
    expect(html).toContain("Kasib Berry");
    expect(html).toContain("Shell Smash Blastoise");
    expect(html).toContain('aria-label="Guide table of contents"');
    expect(html).toContain('aria-label="Read related articles"');
    expect(wordCount).toBeGreaterThanOrEqual(3000);

    for (const image of sourceImages) {
      expect(html).toContain(`src="${image}"`);
    }

    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*Pokemon Champions Sinistcha Build Guide/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*FAQPage/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*"datePublished":"2026-07-11"/);
  });
});
