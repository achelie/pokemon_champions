import type { Metadata } from "next";
import Link from "next/link";

import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { PokemonCard } from "@/components/PokemonCard";
import { faqsByPage } from "@/data/faqs";
import { tierListsByFormat } from "@/data/tierList";
import { resolveTierListView, tierListViews } from "@/data/tierListViews";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";
import type { TierRank } from "@/types/content";

const page = {
  title: "Pokemon Champions Tier List",
  description: "Pokemon Champions Tier List split into Single Battle and Double Battle rankings for launch-window team building.",
  path: "/tier-list",
  keywords: ["Pokemon Champions Tier List", "Pokemon Champions Best Pokemon", "Best Pokemon in Pokemon Champions"]
};

type TierListPageProps = {
  searchParams?: {
    format?: string | string[];
  };
};

const ranks: TierRank[] = ["SS", "S", "A"];

function hrefForFormat(format: string) {
  return format === "double" ? "/tier-list" : `/tier-list?format=${format}`;
}

export const metadata: Metadata = createPageMetadata(page);

export default function TierListPage({ searchParams }: TierListPageProps) {
  const activeView = resolveTierListView(searchParams?.format);
  const activeTierList = tierListsByFormat[activeView.key];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(page)} />
      <PageHeader
        title="Pokemon Champions Tier List"
        description="Browse format-specific Pokemon Champions rankings for Double Battle and Single Battle, with local Pokemon images and clean English reasons for each placement."
      />

      <nav aria-label="Tier List formats" className="mt-8">
        <div className="grid grid-cols-2 gap-2">
          {tierListViews.map((view) => {
            const isActive = view.key === activeView.key;
            return (
              <Link
                key={view.key}
                href={hrefForFormat(view.key)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full border px-3 py-2.5 text-center text-sm font-black transition ${
                  isActive
                    ? "border-champion-blue bg-champion-blue text-white shadow-sm"
                    : "border-line bg-white text-champion-navy hover:border-champion-blue hover:text-champion-blue"
                }`}
              >
                {view.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="mt-10 grid gap-8">
        {ranks.map((rank) => (
          <section key={rank} aria-labelledby={`${activeView.key}-${rank}-tier-heading`}>
            <h2 id={`${activeView.key}-${rank}-tier-heading`} className="mb-4 text-2xl font-black text-champion-navy">
              {rank} Tier
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {activeTierList[rank].map((pokemon) => (
                <PokemonCard key={`${activeView.key}-${rank}-${pokemon.pokemonId}`} pokemon={pokemon} rank={rank} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <FAQ items={faqsByPage["tier-list"]} />
    </div>
  );
}
