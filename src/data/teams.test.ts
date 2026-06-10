import { describe, expect, it } from "vitest";

import { getItemByName } from "@/data/items";
import { getPokemonByName } from "@/data/pokemon";
import { bestTeamFormatViews, resolveBestTeamFormatView } from "@/data/teamViews";
import { teams } from "@/data/teams";

const statKeys = ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed"] as const;

describe("best team build data", () => {
  it("defines Single and Double Battle format views with Double as the fallback", () => {
    expect(bestTeamFormatViews.map((view) => view.key)).toEqual(["single", "double"]);
    expect(resolveBestTeamFormatView("single").key).toBe("single");
    expect(resolveBestTeamFormatView("double").key).toBe("double");
    expect(resolveBestTeamFormatView("unknown").key).toBe("double");
    expect(resolveBestTeamFormatView(undefined).key).toBe("double");
  });

  it("contains the requested Double Battle teams", () => {
    expect(teams).toHaveLength(5);
    expect(teams.map((team) => team.id)).toEqual([
      "turn-one-defense-plus-six-mega-ampharos",
      "mega-emboar-bulk-up-fortress",
      "mega-meowstic-expanding-force-tailwind",
      "special-attack-ceiling-mega-alakazam",
      "espathra-baton-pass-mega-gardevoir"
    ]);

    for (const team of teams) {
      expect(team.format).toBe("Double");
      expect(team.members).toHaveLength(6);
    }
  });

  it("explains the Mega Ampharos game plan without source-language filler", () => {
    const description = teams[0]?.description ?? "";

    expect(description).toContain("Simple Beam");
    expect(description).toContain("Cotton Guard");
    expect(description).toContain("Charge");
    expect(description).toContain("Parabolic Charge");
    expect(description).toMatch(/critical hits/i);
    expect(description).not.toMatch(/video|screenshot|source/i);
  });

  it("keeps every team description clean and useful", () => {
    for (const team of teams) {
      expect(team.description.length).toBeGreaterThan(120);
      expect(team.description).not.toMatch(/video|screenshot|source/i);
    }
  });

  it("keeps every team member complete and backed by local assets", () => {
    for (const team of teams) {
      for (const member of team.members) {
        expect(getPokemonByName(member.pokemonId)?.image, member.pokemonId).toMatch(/^\/images\/pokemon\/[a-z0-9-]+\.(webp|png)$/);
        expect(getItemByName(member.itemId)?.image, member.itemId).toMatch(/^\/images\/items\/[a-z0-9-]+\.(webp|png)$/);
        expect(member.displayName).toBeTruthy();
        expect(member.types.length).toBeGreaterThan(0);
        expect(member.ability).toBeTruthy();
        expect(member.nature).toBeTruthy();
        expect(member.itemName).toBeTruthy();
        expect(member.moves).toHaveLength(4);
        expect(member.moves.every(Boolean)).toBe(true);

        for (const key of statKeys) {
          expect(member.stats[key], `${member.displayName} ${key} stat`).toBeGreaterThan(0);
          expect(member.evs[key], `${member.displayName} ${key} EV`).toBeGreaterThanOrEqual(0);
        }
      }
    }
  });
});
