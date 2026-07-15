import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { GuideArticleLayout } from "./GuideArticleLayout";

describe("GuideArticleLayout", () => {
  it("renders a table of contents and related articles while excluding the current guide", () => {
    const html = renderToStaticMarkup(
      createElement(
        GuideArticleLayout,
        {
          currentHref: "/mega-staraptor-build-guide",
          tableOfContents: [
            { id: "overview", title: "Overview" },
            { id: "moveset", title: "Moveset" }
          ]
        },
        createElement("section", null, "Guide body")
      )
    );

    expect(html).toContain("Table of contents");
    expect(html).toContain('href="#overview"');
    expect(html).toContain('href="#moveset"');
    expect(html).toContain("Read related articles");
    expect(html).not.toMatch(/aria-label="Read related articles"[\s\S]*href="\/mega-staraptor-build-guide"/);
    expect(html).toContain("Read guide");
  });
});
