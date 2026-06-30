import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { guides } from "@/data/guides";

import GuidesPage from "./page";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

describe("/guides page", () => {
  it("renders every guide article with title, summary, date, image, and link", () => {
    const html = renderToStaticMarkup(createElement(GuidesPage));

    expect(html).toContain("Pokemon Champions Guides");
    expect(html).toContain('aria-label="Pokemon Champions guide articles"');
    expect(html).toContain(">Jun 9, 2026</time>");
    expect(html).toContain(">Jun 30, 2026</time>");

    for (const guide of guides) {
      expect(html).toMatch(new RegExp(`<a[^>]+href="${escapeRegExp(guide.href)}"[\\s\\S]*?${escapeRegExp(guide.title)}[\\s\\S]*?</a>`));
      expect(html).toContain(guide.description);
      expect(html).toContain(`dateTime="${guide.publishedAt}"`);
      expect(html).toContain(`alt="${guide.image.alt}"`);
    }
  });
});
