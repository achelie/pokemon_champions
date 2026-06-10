import { describe, expect, it } from "vitest";

import { resolveUsefulPokemonView, usefulPokemonViews } from "@/data/usefulPokemonViews";

describe("useful Pokemon view config", () => {
  it("defines the three useful Pokemon categories in display order", () => {
    expect(usefulPokemonViews.map((view) => view.key)).toEqual(["mega", "utility", "damage-dealers"]);
    expect(usefulPokemonViews.map((view) => view.shortLabel)).toEqual(["Mega Builds", "Utility Picks", "Damage Dealers"]);
  });

  it("maps categories to recommendation group ids", () => {
    expect(usefulPokemonViews.map((view) => view.recommendationGroupId)).toEqual(["mega", "utility", "damageDealers"]);
  });

  it("falls back to mega for missing, array, or invalid query values", () => {
    expect(resolveUsefulPokemonView(undefined).key).toBe("mega");
    expect(resolveUsefulPokemonView(["utility"]).key).toBe("mega");
    expect(resolveUsefulPokemonView("bad").key).toBe("mega");
  });

  it("resolves valid query values", () => {
    expect(resolveUsefulPokemonView("utility").key).toBe("utility");
    expect(resolveUsefulPokemonView("damage-dealers").key).toBe("damage-dealers");
  });
});
