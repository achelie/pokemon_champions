import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RecommendationCard } from "@/components/RecommendationCard";
import { resolveUsefulPokemonView, usefulPokemonViews } from "@/data/usefulPokemonViews";
import { tierRecommendationGroups } from "@/data/tierRecommendations";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const page = {
  title: "Pokemon Champions Useful Pokemon",
  description:
    "Useful Pokemon for Pokemon Champions team building, including Mega builds, utility picks, and other damage dealer recommendations.",
  path: "/useful-pokemon",
  keywords: ["Pokemon Champions Useful Pokemon", "Pokemon Champions Mega Pokemon", "Pokemon Champions Utility Pokemon"]
};

type UsefulPokemonPageProps = {
  searchParams?: {
    view?: string | string[];
  };
};

function hrefForView(viewKey: string) {
  return viewKey === "mega" ? "/useful-pokemon" : `/useful-pokemon?view=${viewKey}`;
}

export const metadata: Metadata = createPageMetadata(page);

export default function UsefulPokemonPage({ searchParams }: UsefulPokemonPageProps) {
  const activeView = resolveUsefulPokemonView(searchParams?.view);
  const activeRecommendationGroup = tierRecommendationGroups.find((group) => group.id === activeView.recommendationGroupId);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(page)} />
      <PageHeader
        title="Pokemon Champions Useful Pokemon"
        description="Browse practical Pokemon Champions build cards by team role: Mega Pokemon, utility picks, and other damage dealers."
      />

      <nav aria-label="Useful Pokemon categories" className="mt-8">
        <div className="grid grid-cols-3 gap-2">
          {usefulPokemonViews.map((view) => {
            const isActive = view.key === activeView.key;
            return (
              <Link
                key={view.key}
                href={hrefForView(view.key)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full border px-2 py-2.5 text-center text-xs font-black leading-tight transition sm:px-4 sm:text-sm ${
                  isActive
                    ? "border-champion-blue bg-champion-blue text-white shadow-sm"
                    : "border-line bg-white text-champion-navy hover:border-champion-blue hover:text-champion-blue"
                }`}
              >
                <span className="sm:hidden">{view.shortLabel}</span>
                <span className="hidden sm:inline">{view.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <section aria-labelledby="active-useful-pokemon-view" className="mt-10">
        <h2 id="active-useful-pokemon-view" className="text-3xl font-black text-champion-navy">
          {activeView.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{activeView.description}</p>
      </section>

      {activeRecommendationGroup ? (
        <section aria-label={`${activeRecommendationGroup.title} build cards`} className="mt-6 grid gap-4 lg:grid-cols-2">
          {activeRecommendationGroup.entries.map((recommendation) => (
            <RecommendationCard key={recommendation.id} recommendation={recommendation} />
          ))}
        </section>
      ) : null}
    </div>
  );
}
