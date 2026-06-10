import { describe, expect, it } from "vitest";

import { headerNavItems, mobileBottomNavItems } from "@/data/navigation";

describe("header navigation", () => {
  it("keeps the main header focused on the three primary strategy destinations", () => {
    expect(headerNavItems).toEqual([
      { title: "Tier List", href: "/tier-list" },
      { title: "Useful Pokemon", href: "/useful-pokemon" },
      { title: "Best Teams", href: "/best-teams" }
    ]);
  });

  it("uses the same primary destinations for the mobile bottom navigation", () => {
    expect(mobileBottomNavItems).toBe(headerNavItems);
  });
});
