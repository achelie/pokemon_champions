import type { Metadata } from "next";

import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQ } from "@/components/FAQ";
import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { faqsByPage } from "@/data/faqs";
import { megaRaichuBuilds } from "@/data/megaRaichu";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const page = {
  title: "Mega Raichu Pokemon Champions Builds",
  description: "Early Mega Raichu X and Mega Raichu Y builds for Pokemon Champions, including teammates, counters, and Mega Stone notes.",
  path: "/mega-raichu",
  keywords: ["Mega Raichu Pokemon Champions", "Mega Raichu X Build", "Mega Raichu Y Build", "Pokemon Champions Mega Stones"]
};

const tableOfContents: GuideTableOfContentsItem[] = [
  { id: "overview", title: "Mega Raichu overview" },
  { id: "builds", title: "Builds" },
  { id: "best-teammates", title: "Best teammates" },
  { id: "counters", title: "Counters" },
  { id: "faq-heading", title: "FAQ" }
];

export const metadata: Metadata = createPageMetadata(page);

export default function MegaRaichuPage() {
  return (
    <article className="bg-mist">
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <JsonLd data={articleJsonLd(page)} />
        <PageHeader
          eyebrow="Mega Builds"
          title="Mega Raichu Pokemon Champions Builds"
          description="Early planning notes for Mega Raichu X, Mega Raichu Y, teammates, counters, and Mega Stone decisions."
        />
        <DisclaimerBox>Builds are early recommendations and should be updated after mobile launch data.</DisclaimerBox>
        <div className="prose-guide mt-8">
          <h2 id="overview">Mega Raichu overview</h2>
          <p>
            Mega Raichu is one of the most important early search topics for Pokemon Champions players because it connects team building, Electric
            pressure, and Mega Stone choices. Treat every build here as a testing shell until launch data confirms what works.
          </p>
        </div>

        <section id="builds" className="mt-8 grid gap-4 scroll-mt-24 md:grid-cols-2" aria-label="Mega Raichu placeholder builds">
          {megaRaichuBuilds.map((build) => (
            <article key={build.name} className="rounded-lg border border-line bg-white p-5 shadow-sm">
              <h2 className="text-xl font-black text-champion-navy">{build.name}</h2>
              <dl className="mt-4 grid gap-3 text-sm">
                <div>
                  <dt className="font-extrabold text-slate-500">Format</dt>
                  <dd className="text-slate-700">{build.format}</dd>
                </div>
                <div>
                  <dt className="font-extrabold text-slate-500">Role</dt>
                  <dd className="text-slate-700">{build.role}</dd>
                </div>
                <div>
                  <dt className="font-extrabold text-slate-500">Nature</dt>
                  <dd className="text-slate-700">{build.nature}</dd>
                </div>
                <div>
                  <dt className="font-extrabold text-slate-500">Moves</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {build.moves.map((move) => (
                      <span key={move} className="rounded-md border border-line bg-mist px-3 py-1 font-bold text-champion-navy">
                        {move}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-6 text-slate-600">{build.notes}</p>
            </article>
          ))}
        </section>

        <div className="prose-guide mt-8">
          <h2 id="best-teammates">Best teammates</h2>
          <ul>
            <li>Ground-resistant or Ground-immune partners that help Mega Raichu stay active.</li>
            <li>Support Pokemon that create safer turns for Mega Evolution and attacking.</li>
            <li>Bulky pivots that cover bad matchups and reset tempo.</li>
          </ul>

          <h2 id="counters">Counters</h2>
          <ul>
            <li>Strong Ground-type pressure can force Mega Raichu into awkward turns.</li>
            <li>Bulky special walls may slow down Mega Raichu Y-style plans.</li>
            <li>Speed control can punish fragile Electric teams if they rely only on moving first.</li>
          </ul>
        </div>
        <FAQ items={faqsByPage["mega-raichu"]} />
      </GuideArticleLayout>
    </article>
  );
}
