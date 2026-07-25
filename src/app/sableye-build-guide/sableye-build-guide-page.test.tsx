import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import SableyeBuildGuidePage from "./page";

const sourceImages = [
  "/images/guides/sableye-build-guide/cover.png",
  "/images/guides/sableye-build-guide/format-usage-ranking.png",
  "/images/guides/sableye-build-guide/stats-typing-mega.png",
  "/images/guides/sableye-build-guide/season-m3-usage-data.png",
  "/images/guides/sableye-build-guide/recommended-sets.png",
  "/images/guides/sableye-build-guide/defensive-benchmarks.png"
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

describe("/sableye-build-guide page", () => {
  it("renders a long SEO guide with every source image, structured data, and guide navigation", () => {
    const html = renderToStaticMarkup(createElement(SableyeBuildGuidePage));
    const wordCount = visibleText(html).split(/\s+/).filter(Boolean).length;

    expect(html).toContain("Pokemon Champions Sableye build guide");
    expect(html).toContain("Prankster screens");
    expect(html).toContain('dateTime="2026-07-26"');
    expect(html).toContain("Rain Dance");
    expect(html).toContain("Light Clay");
    expect(html).toContain("Roseli Berry");
    expect(html).toContain("Encore");
    expect(html).toContain("Disable");
    expect(html).toContain("Will-O-Wisp");
    expect(html).toContain('aria-label="Guide table of contents"');
    expect(html).toContain('aria-label="Read related articles"');
    expect(wordCount).toBeGreaterThanOrEqual(2000);

    for (const image of sourceImages) {
      expect(html).toContain(`src="${image}"`);
    }

    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*Pokemon Champions Sableye Build Guide/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*FAQPage/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*"datePublished":"2026-07-26"/);
  });
});
