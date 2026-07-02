import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import GarchompBuildGuidePage from "./page";

describe("/garchomp-build-guide page", () => {
  it("renders the Garchomp ranked guide with SEO headings, build advice, and source images", () => {
    const html = renderToStaticMarkup(createElement(GarchompBuildGuidePage));

    expect(html).toContain("Pokemon Champions Garchomp Build Guide");
    expect(html).toContain("Life Orb Ranked Moveset");
    expect(html).toContain("dateTime=\"2026-07-02\"");
    expect(html).toContain("Regulation Set M-B");
    expect(html).toContain("Rough Skin");
    expect(html).toContain("Dragon Claw");
    expect(html).toContain("Earthquake");
    expect(html).toContain("Rock Slide");
    expect(html).toContain("Mega Garchomp");
    expect(html).toContain("Flying or Levitate");
    expect(html).toContain("src=\"/images/guides/garchomp-build-guide/cover.png\"");
    expect(html).toContain("src=\"/images/guides/garchomp-build-guide/garchomp-m3-season-data.png\"");
    expect(html).toContain("src=\"/images/guides/garchomp-build-guide/garchomp-offense-calcs.png\"");
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*Pokemon Champions Garchomp Build Guide/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*"datePublished":"2026-07-02"/);
  });
});
