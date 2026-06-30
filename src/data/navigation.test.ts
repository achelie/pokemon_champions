import { describe, expect, it } from "vitest";

import { headerNavItems, mobileBottomNavItems } from "@/data/navigation";

describe("header navigation", () => {
  it("keeps the main header focused on strategy destinations and the guide index", () => {
    expect(headerNavItems).toEqual([
      { title: "Tier List", href: "/tier-list" },
      { title: "Useful Pokemon", href: "/useful-pokemon" },
      { title: "Best Teams", href: "/best-teams" },
      { title: "Guides", href: "/guides" }
    ]);
  });

  it("uses the same destinations for the mobile bottom navigation", () => {
    expect(mobileBottomNavItems).toBe(headerNavItems);
  });
});
