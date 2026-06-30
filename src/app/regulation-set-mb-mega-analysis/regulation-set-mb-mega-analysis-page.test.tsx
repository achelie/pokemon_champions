import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import RegulationSetMbMegaAnalysisPage from "./page";

describe("/regulation-set-mb-mega-analysis page", () => {
  it("renders the long-form Regulation Set M-B Mega analysis with SEO headings and source images", () => {
    const html = renderToStaticMarkup(createElement(RegulationSetMbMegaAnalysisPage));

    expect(html).toContain("Pokemon Champions Regulation Set M-B Mega Analysis");
    expect(html).toContain("dateTime=\"2026-06-30\"");
    expect(html).toContain("Regulation Set M-B runs from June 17, 2026");
    expect(html).toContain("Mega Swampert");
    expect(html).toContain("Mega Sceptile");
    expect(html).toContain("Mega Metagross");
    expect(html).toContain("Mega Staraptor");
    expect(html).toContain("Mega Mawile");
    expect(html).toContain("Life Orb");
    expect(html).toContain("src=\"/images/guides/regulation-set-mb-mega-analysis/cover.png\"");
    expect(html).toContain("src=\"/images/guides/regulation-set-mb-mega-analysis/mega-swampert-blaziken-sceptile.png\"");
    expect(html).toContain("src=\"/images/guides/regulation-set-mb-mega-analysis/mega-metagross-staraptor-mawile.png\"");
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*Pokemon Champions Regulation Set M-B Mega Analysis/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*"datePublished":"2026-06-30"/);
  });
});
