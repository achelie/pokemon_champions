import type { Metadata } from "next";

import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ } from "@/components/FAQ";
import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { faqsByPage } from "@/data/faqs";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const page = {
  title: "Pokemon Champions Pokemon HOME Guide",
  description: "A careful Pokemon Champions HOME guide covering transfer overview, limitations, best use cases, and compatibility warnings.",
  path: "/pokemon-home",
  keywords: ["Pokemon Champions Pokemon HOME", "How to Transfer Pokemon to Pokemon Champions", "Pokemon Champions HOME Guide"]
};

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "what-home-does", title: "What Pokemon HOME does" },
  { id: "transfer-overview", title: "Transfer overview" },
  { id: "limitations", title: "Important limitations" },
  { id: "best-use-cases", title: "Best use cases" },
  { id: "faq-heading", title: "FAQ" }
];

export const metadata: Metadata = createPageMetadata(page);

export default function PokemonHomePage() {
  return (
    <article className="bg-mist">
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <JsonLd data={articleJsonLd(page)} />
        <PageHeader
          eyebrow="Pokemon HOME"
          title="Pokemon Champions Pokemon HOME Guide"
          description="Use Pokemon HOME carefully in Pokemon Champions, especially before confirmed compatibility and launch restrictions are widely documented."
        />
        <DisclaimerBox>Check official compatibility before transferring. This guide does not list unconfirmed compatible Pokemon.</DisclaimerBox>
        <div className="prose-guide mt-8">
          <h2 id="what-home-does">What Pokemon HOME does in Pokemon Champions</h2>
          <p>
            Pokemon HOME support lets players bring eligible Pokemon into Pokemon Champions while also using in-game recruitment for team building.
            For a PvP-focused game, HOME can help players prepare battle-ready options once restrictions are confirmed.
          </p>

          <h2 id="transfer-overview">Transfer overview</h2>
          <p>
            The safest approach is to treat transfers as a planned step: decide which role your team needs, check official compatibility, then move
            only Pokemon that match your battle plan and the confirmed rules.
          </p>

          <h2 id="limitations">Important limitations</h2>
          <ul>
            <li>Do not assume every Pokemon, move, form, or battle-ready setup is supported.</li>
            <li>Check official compatibility before transferring.</li>
            <li>Ranked rules may restrict Pokemon or strategies even when a transfer is technically possible.</li>
            <li>Future balance updates may change what is worth preparing.</li>
          </ul>

          <h2 id="best-use-cases">Best use cases</h2>
          <p>
            Pokemon HOME is most useful for filling team roles, testing known partners, preparing alternate builds, and reducing the time needed to
            try a new Ranked Battle concept.
          </p>
        </div>
        <FAQ items={faqsByPage["pokemon-home"]} />
      </GuideArticleLayout>
    </article>
  );
}
