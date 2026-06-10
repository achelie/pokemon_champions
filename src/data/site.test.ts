import { describe, expect, it } from "vitest";

import { faqsByPage } from "@/data/faqs";
import { guides } from "@/data/guides";
import { tierListsByFormat } from "@/data/tierList";
import { teams } from "@/data/teams";

describe("Pokemon Champions Guide data", () => {
  it("defines guide routes used by homepage cards and sitemap", () => {
    expect(guides.map((guide) => guide.href)).toEqual([
      "/tier-list",
      "/useful-pokemon",
      "/best-teams",
      "/beginner-guide",
      "/pokemon-home",
      "/mobile-release",
      "/mega-raichu"
    ]);
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
    expect(teams).toHaveLength(5);
    expect(teams.every((team) => team.format === "Double")).toBe(true);
    expect(teams.map((team) => team.title)).toEqual([
      "Turn-One Defense +6! The Hardest Mega Ampharos Ever",
      "Mega Emboar Bulk Up Fortress Team",
      "Mega Meowstic Expanding Force Tailwind Team",
      "Special Attack Ceiling Mega Alakazam Team",
      "Espathra Baton Pass Mega Gardevoir Team"
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
