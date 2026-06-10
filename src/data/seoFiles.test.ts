import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

const root = process.cwd();

describe("SEO and advertising static files", () => {
  it("publishes the Google AdSense ads.txt record", () => {
    const adsTxt = readFileSync(join(root, "public", "ads.txt"), "utf8").trim();

    expect(adsTxt).toBe("google.com, pub-7443237558968985, DIRECT, f08c47fec0942fa0");
  });

  it("publishes an LLM-friendly site summary for pokemetahub.com", () => {
    const llmsTxt = readFileSync(join(root, "public", "llms.txt"), "utf8");

    expect(llmsTxt).toContain("https://pokemetahub.com");
    expect(llmsTxt).toContain("/tier-list");
    expect(llmsTxt).toContain("/best-teams");
    expect(llmsTxt).not.toContain("pokemonchampionsguide.com");
  });
});
