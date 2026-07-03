import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import MegaStaraptorBuildGuidePage from "./page";

describe("/mega-staraptor-build-guide page", () => {
  it("renders the Mega Staraptor Contrary guide with SEO headings, build advice, and source images", () => {
    const html = renderToStaticMarkup(createElement(MegaStaraptorBuildGuidePage));

    expect(html).toContain("Pokemon Champions Mega Staraptor Build Guide");
    expect(html).toContain("Contrary Close Combat");
    expect(html).toContain("dateTime=\"2026-07-03\"");
    expect(html).toContain("Regulation Set M-B");
    expect(html).toContain("Choice Scarf Final Gambit");
    expect(html).toContain("Close Combat");
    expect(html).toContain("Brave Bird");
    expect(html).toContain("Dual Wingbeat");
    expect(html).toContain("Whimsicott");
    expect(html).toContain("Grimmsnarl");
    expect(html).toContain("Simple Beam");
    expect(html).toContain("Worry Seed");
    expect(html).toContain("src=\"/images/guides/mega-staraptor-build-guide/cover.png\"");
    expect(html).toContain("src=\"/images/guides/mega-staraptor-build-guide/mega-staraptor-season-data.png\"");
    expect(html).toContain("src=\"/images/guides/mega-staraptor-build-guide/mega-staraptor-offense-calcs.png\"");
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*Pokemon Champions Mega Staraptor Build Guide/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*"datePublished":"2026-07-03"/);
  });
});
