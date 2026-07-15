import type { Metadata } from "next";
import Link from "next/link";

import { FAQ } from "@/components/FAQ";
import { GuideArticleLayout, type GuideTableOfContentsItem } from "@/components/GuideArticleLayout";
import { JsonLd } from "@/components/JsonLd";
import { TeamCard } from "@/components/TeamCard";
import { faqsByPage } from "@/data/faqs";
import { bestTeamFormatViews, resolveBestTeamFormatView } from "@/data/teamViews";
import { teams } from "@/data/teams";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const page = {
  title: "Pokemon Champions Best Teams",
  description:
    "Pokemon Champions best team builds for Single and Double Battle, including full moves, natures, abilities, EVs, stats, and item images.",
  path: "/best-teams",
  keywords: ["Pokemon Champions Best Teams", "Best Ranked Teams Pokemon Champions", "Pokemon Champions Team Guide"]
};

type BestTeamsPageProps = {
  searchParams?: {
    format?: string | string[];
  };
};

function hrefForFormat(format: string) {
  return format === "double" ? "/best-teams" : `/best-teams?format=${format}`;
}

export const metadata: Metadata = createPageMetadata(page);

export default function BestTeamsPage({ searchParams }: BestTeamsPageProps) {
  const activeView = resolveBestTeamFormatView(searchParams?.format);
  const activeTeams = teams.filter((team) => team.format.toLowerCase() === activeView.key);
  const tableOfContents: GuideTableOfContentsItem[] = [
    { id: "format-selector", title: "Format selector" },
    { id: "team-cards", title: `${activeView.label} teams` },
    { id: "faq-heading", title: "FAQ" }
  ];

  return (
    <div className="bg-mist">
      <GuideArticleLayout currentHref={page.path} tableOfContents={tableOfContents}>
        <JsonLd data={articleJsonLd(page)} />
        <nav id="format-selector" aria-label="Best Teams formats" className="scroll-mt-24">
          <div className="grid grid-cols-2 gap-2">
            {bestTeamFormatViews.map((view) => {
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

        <div id="team-cards" className="mt-10 grid scroll-mt-24 gap-5">
          {activeTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
          {activeTeams.length === 0 ? (
            <div className="rounded-lg border border-dashed border-line bg-white p-8 text-center">
              <p className="text-lg font-black text-champion-navy">Single Battle teams are being prepared.</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                This section will be updated once a complete Single Battle build has matching Pokemon images, item icons, moves, natures, abilities,
                stats, and EV spreads.
              </p>
            </div>
          ) : null}
        </div>

        <FAQ items={faqsByPage["best-teams"]} />
      </GuideArticleLayout>
    </div>
  );
}
