import { describe, expect, it } from "vitest";

import { faqsByPage } from "@/data/faqs";
import { guides } from "@/data/guides";
import { tierListsByFormat } from "@/data/tierList";
import { teams } from "@/data/teams";
import { absoluteUrl, site } from "@/lib/site";

describe("Pokemon Champions Guide data", () => {
  it("uses the production www.pokemetahub.com domain for canonical URLs", () => {
    expect(site.domain).toBe("www.pokemetahub.com");
    expect(site.url).toBe("https://www.pokemetahub.com");
    expect(absoluteUrl("/tier-list")).toBe("https://www.pokemetahub.com/tier-list");
  });

  it("defines guide routes used by homepage cards and sitemap", () => {
    expect(guides.map((guide) => guide.href)).toEqual([
      "/mega-staraptor-build-guide",
      "/garchomp-build-guide",
      "/mega-raichu-y-zap-cannon-build",
      "/regulation-set-mb-mega-analysis",
      "/tier-list",
      "/useful-pokemon",
      "/best-teams",
      "/beginner-guide",
      "/pokemon-home",
      "/mobile-release",
      "/mega-raichu"
    ]);
  });

  it("provides publication dates and index images for every guide article", () => {
    for (const guide of guides) {
      expect(guide.publishedAt).toMatch(/^2026-(06-(09|30)|07-0[123])$/);
      expect(guide.image.src).toMatch(/^\/(?:images\/pokemon\/|images\/guides\/|logo\.png|icon-192x192\.png)/);
      expect(guide.image.alt).toContain(guide.title);
    }
  });

  it("keeps separate Single and Double tier lists without placeholder reasons", () => {
    expect(Object.keys(tierListsByFormat)).toEqual(["double", "single"]);
    for (const tierList of Object.values(tierListsByFormat)) {
      expect(Object.keys(tierList)).toEqual(["SS", "S", "A"]);
      for (const entries of Object.values(tierList)) {
        expect(entries.length).toBeGreaterThan(0);
        expect(entries.every((pokemon) => pokemon.reason && !pokemon.reason.includes("Early meta placeholder"))).toBe(true);
      }
    }
  });

  it("provides expanded Double Battle build teams", () => {
    const doubleTeams = teams.filter((team) => team.format === "Double");
    const singleTeams = teams.filter((team) => team.format === "Single");

    expect(teams).toHaveLength(10);
    expect(doubleTeams).toHaveLength(5);
    expect(singleTeams).toHaveLength(5);
    expect(doubleTeams.map((team) => team.title)).toEqual([
      "Turn-One Defense +6! The Hardest Mega Ampharos Ever",
      "Mega Emboar Bulk Up Fortress Team",
      "Mega Meowstic Expanding Force Tailwind Team",
      "Special Attack Ceiling Mega Alakazam Team",
      "Espathra Baton Pass Mega Gardevoir Team"
    ]);
    expect(singleTeams.map((team) => team.title)).toEqual([
      "Mega Glimmora Adaptability Offense Team",
      "Mega Alakazam Special Sweeper Team",
      "Mega Lucario Adaptability Wallbreaker Team",
      "Mega Froslass Snow Curse Control Team",
      "Mega Gallade Sharpness Balance Team"
    ]);

    for (const team of teams) {
      expect(team.members).toHaveLength(6);
      expect(team.description).not.toMatch(/video|screenshot|source/i);
    }
  });

  it("provides FAQ content for every published page", () => {
    const pages = ["home", "tier-list", "best-teams", "beginner-guide", "pokemon-home", "mobile-release", "mega-raichu"];
    expect(Object.keys(faqsByPage)).toEqual(pages);
    for (const page of pages) {
      expect(faqsByPage[page]?.length).toBeGreaterThanOrEqual(2);
    }
  });
});
