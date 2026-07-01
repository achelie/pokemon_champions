import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import MegaRaichuYZapCannonBuildPage from "./page";

describe("/mega-raichu-y-zap-cannon-build page", () => {
  it("renders the Mega Raichu Y Zap Cannon guide with SEO headings, build advice, and source images", () => {
    const html = renderToStaticMarkup(createElement(MegaRaichuYZapCannonBuildPage));

    expect(html).toContain("Pokemon Champions Mega Raichu Y Build Guide");
    expect(html).toContain("No Guard Zap Cannon");
    expect(html).toContain("dateTime=\"2026-07-01\"");
    expect(html).toContain("0 Special Attack");
    expect(html).toContain("bulk investment");
    expect(html).toContain("Steam Eruption");
    expect(html).toContain("Grass Knot");
    expect(html).toContain("Lightning Rod");
    expect(html).toContain("Focus Sash Raichu");
    expect(html).toContain("src=\"/images/guides/mega-raichu-y-zap-cannon-build/cover.png\"");
    expect(html).toContain("src=\"/images/guides/mega-raichu-y-zap-cannon-build/mega-raichu-y-set.png\"");
    expect(html).toContain("src=\"/images/guides/mega-raichu-y-zap-cannon-build/mega-raichu-y-offense-calcs.png\"");
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*Pokemon Champions Mega Raichu Y Build Guide/);
    expect(html).toMatch(/<script type="application\/ld\+json"[^>]*>[\s\S]*"datePublished":"2026-07-01"/);
  });
});
