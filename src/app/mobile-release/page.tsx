import type { Metadata } from "next";

import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { faqsByPage } from "@/data/faqs";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const page = {
  title: "Pokémon Champions Mobile Release Date",
  description: "Pokemon Champions mobile release guide for June 17, 2026, covering iOS, Android, pre-registration prep, and launch checklist.",
  path: "/mobile-release",
  keywords: ["Pokémon Champions Mobile Release Date", "Pokémon Champions Android", "Pokémon Champions iOS", "Pokémon Champions Pre Registration"]
};

export const metadata: Metadata = createPageMetadata(page);

export default function MobileReleasePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(page)} />
      <PageHeader
        eyebrow="Mobile Launch"
        title="Pokémon Champions Mobile Release Date"
        description="Pokémon Champions is scheduled for mobile release on iOS and Android on June 17, 2026."
      />
      <div className="prose-guide">
        <h2>Mobile release date: June 17, 2026</h2>
        <p>
          Pokémon Champions mobile release is announced for June 17, 2026. This is the key date for iOS and Android players preparing to jump
          into Casual, Private, and Ranked Battles.
        </p>

        <h2>iOS and Android overview</h2>
        <p>
          The mobile launch brings Pokémon Champions to iOS and Android players. Before launch day, check the official app listing in your region
          for device requirements, pre-registration availability, and download details.
        </p>

        <h2>What mobile players should prepare</h2>
        <ul>
          <li>Decide whether you want to learn Single Battle, Double Battle, or both.</li>
          <li>Bookmark early tier list and team guide pages for launch-week updates.</li>
          <li>Review Pokémon HOME compatibility once official details are available.</li>
          <li>Plan a beginner team instead of chasing every possible Pokémon immediately.</li>
        </ul>

        <h2>Cross-platform expectations</h2>
        <p>
          Cross-platform details should be handled carefully. Wait for official wording on account linking, matchmaking, save behavior, and any
          platform-specific limitations before making long-term plans.
        </p>

        <h2>Launch checklist</h2>
        <ul>
          <li>Confirm the official iOS or Android listing for your region.</li>
          <li>Pre-register if it is available and you want launch notifications.</li>
          <li>Choose one starter team concept to test first.</li>
          <li>Play Casual or Private Battles before entering Ranked.</li>
          <li>Track early meta changes during the first week after mobile launch.</li>
        </ul>
      </div>
      <FAQ items={faqsByPage["mobile-release"]} />
    </article>
  );
}
