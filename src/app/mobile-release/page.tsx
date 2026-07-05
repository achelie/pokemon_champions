import type { Metadata } from "next";

import { FAQ } from "@/components/FAQ";
import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { faqsByPage } from "@/data/faqs";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const page = {
  title: "Pokemon Champions Mobile Release Date",
  description: "Pokemon Champions mobile release guide for June 17, 2026, covering iOS, Android, pre-registration prep, and launch checklist.",
  path: "/mobile-release",
  keywords: ["Pokemon Champions Mobile Release Date", "Pokemon Champions Android", "Pokemon Champions iOS", "Pokemon Champions Pre Registration"]
};

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "release-date", title: "Mobile release date" },
  { id: "ios-android", title: "iOS and Android overview" },
  { id: "mobile-prep", title: "What mobile players should prepare" },
  { id: "cross-platform", title: "Cross-platform expectations" },
  { id: "launch-checklist", title: "Launch checklist" },
  { id: "faq-heading", title: "FAQ" }
];

export const metadata: Metadata = createPageMetadata(page);

export default function MobileReleasePage() {
  return (
    <article className="bg-mist">
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <JsonLd data={articleJsonLd(page)} />
        <PageHeader
          eyebrow="Mobile Launch"
          title="Pokemon Champions Mobile Release Date"
          description="Pokemon Champions is scheduled for mobile release on iOS and Android on June 17, 2026."
        />
        <div className="prose-guide">
          <h2 id="release-date">Mobile release date: June 17, 2026</h2>
          <p>
            Pokemon Champions mobile release is announced for June 17, 2026. This is the key date for iOS and Android players preparing to jump
            into Casual, Private, and Ranked Battles.
          </p>

          <h2 id="ios-android">iOS and Android overview</h2>
          <p>
            The mobile launch brings Pokemon Champions to iOS and Android players. Before launch day, check the official app listing in your region
            for device requirements, pre-registration availability, and download details.
          </p>

          <h2 id="mobile-prep">What mobile players should prepare</h2>
          <ul>
            <li>Decide whether you want to learn Single Battle, Double Battle, or both.</li>
            <li>Bookmark early tier list and team guide pages for launch-week updates.</li>
            <li>Review Pokemon HOME compatibility once official details are available.</li>
            <li>Plan a beginner team instead of chasing every possible Pokemon immediately.</li>
          </ul>

          <h2 id="cross-platform">Cross-platform expectations</h2>
          <p>
            Cross-platform details should be handled carefully. Wait for official wording on account linking, matchmaking, save behavior, and any
            platform-specific limitations before making long-term plans.
          </p>

          <h2 id="launch-checklist">Launch checklist</h2>
          <ul>
            <li>Confirm the official iOS or Android listing for your region.</li>
            <li>Pre-register if it is available and you want launch notifications.</li>
            <li>Choose one starter team concept to test first.</li>
            <li>Play Casual or Private Battles before entering Ranked.</li>
            <li>Track early meta changes during the first week after mobile launch.</li>
          </ul>
        </div>
        <FAQ items={faqsByPage["mobile-release"]} />
      </GuideArticleLayout>
    </article>
  );
}
