import type { Metadata } from "next";
import Link from "next/link";

import { FAQ } from "@/components/FAQ";
import { GuideCard } from "@/components/GuideCard";
import { JsonLd } from "@/components/JsonLd";
import { faqsByPage } from "@/data/faqs";
import { guides, latestGuides } from "@/data/guides";
import { createPageMetadata, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Pokemon Champions Guide - Tier List, Best Teams & Beginner Tips",
  description:
    "Pokemon Champions Guide covers early tier lists, best teams, beginner tips, Pokémon HOME, mobile release prep, and Mega Raichu builds.",
  path: "/",
  keywords: ["Pokemon Champions Guide", "Pokemon Champions Tier List", "Pokemon Champions Best Teams"]
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-champion-red">Ranked Battle Strategy</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-champion-navy sm:text-6xl">
              Pokemon Champions Guide
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Pokémon Champions is a battle-focused Pokémon game with Ranked, Casual, and Private Battles. This site focuses on PvP team
              building, early tier list notes, and launch-ready guides for players who want to battle well.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/tier-list" className="rounded-full bg-champion-blue px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-blue-700">
                View Tier List
              </Link>
              <Link href="/best-teams" className="rounded-full border border-line bg-white px-5 py-3 text-sm font-extrabold text-champion-navy hover:border-champion-blue">
                Browse Teams
              </Link>
            </div>
          </div>
          <aside className="rounded-lg border border-line bg-mist p-5 shadow-soft">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">Launch Focus</p>
            <dl className="mt-5 grid gap-4">
              <div className="rounded-md bg-white p-4">
                <dt className="text-sm font-extrabold text-slate-500">Mobile release</dt>
                <dd className="mt-1 text-2xl font-black text-champion-navy">June 17, 2026</dd>
              </div>
              <div className="rounded-md bg-white p-4">
                <dt className="text-sm font-extrabold text-slate-500">Formats</dt>
                <dd className="mt-1 text-lg font-black text-champion-navy">Single + Double Battle</dd>
              </div>
              <div className="rounded-md bg-white p-4">
                <dt className="text-sm font-extrabold text-slate-500">Main coverage</dt>
                <dd className="mt-1 text-lg font-black text-champion-navy">Tier List, Best Teams, HOME, Mega Raichu</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <section aria-labelledby="quick-entry-heading">
          <h2 id="quick-entry-heading" className="text-2xl font-black text-champion-navy">
            Quick Entries
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <GuideCard key={guide.href} guide={guide} />
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="latest-guides-heading">
          <h2 id="latest-guides-heading" className="text-2xl font-black text-champion-navy">
            Latest Guides
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {latestGuides.slice(0, 4).map((guide) => (
              <article key={guide.href} className="rounded-lg border border-line bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-champion-navy">
                  <Link href={guide.href} className="hover:text-champion-blue">
                    {guide.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
              </article>
            ))}
          </div>
        </section>

        <FAQ items={faqsByPage.home} />
      </div>
    </>
  );
}
