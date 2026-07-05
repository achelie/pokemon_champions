import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import BeginnerGuidePage from "../beginner-guide/page";
import BestTeamsPage from "../best-teams/page";
import GarchompBuildGuidePage from "../garchomp-build-guide/page";
import KingambitBuildGuidePage from "../kingambit-build-guide/page";
import MegaRaichuPage from "../mega-raichu/page";
import MegaRaichuYZapCannonBuildPage from "../mega-raichu-y-zap-cannon-build/page";
import MegaStaraptorBuildGuidePage from "../mega-staraptor-build-guide/page";
import MobileReleasePage from "../mobile-release/page";
import PokemonHomePage from "../pokemon-home/page";
import RegulationSetMBMegaAnalysisPage from "../regulation-set-mb-mega-analysis/page";
import TierListPage from "../tier-list/page";
import UsefulPokemonPage from "../useful-pokemon/page";

const guidePages = [
  ["beginner guide", BeginnerGuidePage],
  ["best teams", BestTeamsPage],
  ["garchomp build guide", GarchompBuildGuidePage],
  ["kingambit build guide", KingambitBuildGuidePage],
  ["mega raichu", MegaRaichuPage],
  ["mega raichu y zap cannon", MegaRaichuYZapCannonBuildPage],
  ["mega staraptor", MegaStaraptorBuildGuidePage],
  ["mobile release", MobileReleasePage],
  ["pokemon home", PokemonHomePage],
  ["regulation set mb mega analysis", RegulationSetMBMegaAnalysisPage],
  ["tier list", TierListPage],
  ["useful pokemon", UsefulPokemonPage]
] as const;

describe("guide article enhancements", () => {
  it.each(guidePages)("%s page renders a table of contents and related article navigation", (_name, Page) => {
    const html = renderToStaticMarkup(createElement(Page));

    expect(html).toContain('aria-label="Guide table of contents"');
    expect(html).toContain('aria-label="Read related articles"');
    expect(html).toContain("Read related articles");
  });
});
