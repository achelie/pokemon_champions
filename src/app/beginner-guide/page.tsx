import type { Metadata } from "next";

import { FAQ } from "@/components/FAQ";
import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { faqsByPage } from "@/data/faqs";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const page = {
  title: "Pokemon Champions Beginner Guide",
  description: "Learn how to play Pokemon Champions with battle modes, Single vs Double Battle basics, team building tips, and Ranked prep.",
  path: "/beginner-guide",
  keywords: ["Pokemon Champions Beginner Guide", "How to Play Pokemon Champions", "Pokemon Champions Ranked Battle Guide"]
};

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "what-is-pokemon-champions", title: "What is Pokemon Champions?" },
  { id: "battle-modes", title: "Battle modes" },
  { id: "single-vs-double", title: "Single Battle vs Double Battle" },
  { id: "first-team", title: "How to build your first team" },
  { id: "common-mistakes", title: "Common beginner mistakes" },
  { id: "ranked-prep", title: "What to do before Ranked" },
  { id: "faq-heading", title: "FAQ" }
];

export const metadata: Metadata = createPageMetadata(page);

export default function BeginnerGuidePage() {
  return (
    <article className="bg-mist">
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <JsonLd data={articleJsonLd(page)} />
        <PageHeader
          eyebrow="Beginner Guide"
          title="Pokemon Champions Beginner Guide"
          description="Start with the battle modes, learn the difference between Single and Double Battle, then build a simple team before Ranked."
        />
        <div className="prose-guide">
          <h2 id="what-is-pokemon-champions">What is Pokemon Champions?</h2>
          <p>
            Pokemon Champions is a battle-focused Pokemon game built around competitive matches. Instead of trying to be a full adventure wiki,
            this guide focuses on teams, match preparation, and practical PvP decisions.
          </p>

          <h2 id="battle-modes">Battle modes: Ranked, Casual, Private</h2>
          <p>
            Ranked Battles are the serious ladder mode where consistency matters. Casual Battles are better for testing new ideas without
            pressure. Private Battles are useful for friend matches, practice sets, and controlled matchup testing.
          </p>

          <h2 id="single-vs-double">Single Battle vs Double Battle</h2>
          <p>
            Single Battle rewards clean one-on-one trades, defensive switching, and direct matchup planning. Double Battle adds positioning,
            partner synergy, protection turns, spread pressure, and support Pokemon that can change the pace of a match.
          </p>

          <h2 id="first-team">How to build your first team</h2>
          <ul>
            <li>Pick one main attacker that gives your team a clear win condition.</li>
            <li>Add one bulky Pokemon that can absorb pressure and stabilize bad turns.</li>
            <li>Use one utility slot for support, pivoting, speed control, or matchup coverage.</li>
            <li>Test the team in Casual or Private Battles before judging it too quickly.</li>
          </ul>

          <h2 id="common-mistakes">Common beginner mistakes</h2>
          <ul>
            <li>Using six attackers with no defensive plan.</li>
            <li>Ignoring Double Battle positioning and support moves.</li>
            <li>Changing the whole team after one loss instead of identifying the specific problem.</li>
            <li>Copying an early tier list without checking team roles.</li>
          </ul>

          <h2 id="ranked-prep">What to do before playing Ranked</h2>
          <p>
            Before Ranked, confirm your team roles, test key matchups, check official Pokemon HOME compatibility, and make sure your game plan is
            simple enough to execute under pressure.
          </p>
        </div>
        <FAQ items={faqsByPage["beginner-guide"]} />
      </GuideArticleLayout>
    </article>
  );
}
