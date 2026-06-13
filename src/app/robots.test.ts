import { describe, expect, it } from "vitest";

import robots from "./robots";

describe("robots", () => {
  it("allows crawling and points crawlers at the www sitemap", () => {
    expect(robots()).toMatchObject({
      rules: {
        userAgent: "*",
        allow: "/"
      },
      sitemap: "https://www.pokemetahub.com/sitemap.xml",
      host: "https://www.pokemetahub.com"
    });
  });
});
