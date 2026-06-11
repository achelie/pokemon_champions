import { describe, expect, it } from "vitest";

import { allMoves, formatMoveNumber } from "@/data/moves";

describe("PokéBase moves list data", () => {
  it("matches the PokéBase moves usage snapshot", () => {
    expect(allMoves).toHaveLength(937);
    expect(allMoves[0]).toMatchObject({
      name: "Protect",
      slug: "protect",
      usage: 17,
      power: null,
      accuracy: null,
      pp: 8
    });
    expect(allMoves[0].description).toContain("protect itself from all attacks");
  });

  it("formats missing numeric fields with the PokéBase placeholder", () => {
    expect(formatMoveNumber(null)).toBe("--");
    expect(formatMoveNumber(100)).toBe("100");
  });
});
