import type { Metadata } from "next";
import Link from "next/link";

import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
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
  const tableOfContents: GuideTableOfContentsItem[] = [
    { id: "category-selector", title: "Category selector" },
    { id: "recommended-builds", title: activeRecommendationGroup?.title ?? "Recommended builds" }
  ];

  return (
    <div className="bg-mist">
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <JsonLd data={articleJsonLd(page)} />
        <nav id="category-selector" aria-label="Useful Pokemon categories" className="scroll-mt-24">
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

        {activeRecommendationGroup ? (
          <section
            id="recommended-builds"
            aria-label={`${activeRecommendationGroup.title} build cards`}
            className="mt-10 grid scroll-mt-24 gap-4 lg:grid-cols-2"
          >
            {activeRecommendationGroup.entries.map((recommendation) => (
              <RecommendationCard key={recommendation.id} recommendation={recommendation} />
            ))}
          </section>
        ) : null}
      </GuideArticleLayout>
    </div>
  );
}
