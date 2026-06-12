import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/data/guides";
import { getItemByName } from "@/data/items";
import { getPokemonByName, pokemonAssets } from "@/data/pokemon";
import { teams } from "@/data/teams";
import { tierListsByFormat } from "@/data/tierList";
import { tierRecommendationGroups } from "@/data/tierRecommendations";
import { usefulPokemonViews } from "@/data/usefulPokemonViews";
import { createPageMetadata, websiteJsonLd } from "@/lib/seo";
import type { Guide, PokemonTierEntry } from "@/types/content";

export const metadata: Metadata = createPageMetadata({
  title: "Pokemon Champions Guide - Tier List, Best Teams & Beginner Tips",
  description:
    "Pokemon Champions Guide covers early tier lists, best teams, beginner tips, Pokemon HOME, mobile release prep, and Mega Raichu builds.",
  path: "/",
  keywords: ["Pokemon Champions Guide", "Pokemon Champions Tier List", "Pokemon Champions Best Teams"]
});

type PreviewAsset = {
  src?: string;
  alt: string;
  label: string;
};

type MainEntry = {
  title: string;
  href: string;
  label: string;
  value: string;
  accent: string;
};

const mainEntries: MainEntry[] = [
  { title: "Tier List", href: "/tier-list", label: "Double + Single", value: "SS/S/A", accent: "bg-champion-red" },
  { title: "Useful Pokemon", href: "/useful-pokemon", label: "Build groups", value: "Mega", accent: "bg-champion-blue" },
  { title: "Best Teams", href: "/best-teams", label: "Team previews", value: "6v6", accent: "bg-champion-yellow" }
];

const mainGuideHrefs = new Set(mainEntries.map((entry) => entry.href));
const moreGuides = guides.filter((guide) => !mainGuideHrefs.has(guide.href));
const popularPokemon = pokemonAssets.filter((pokemon) => pokemon.usage > 0).slice(0, 10);
const bestTeamRows = [
  {
    label: "Single Battle",
    href: "/best-teams?format=single",
    teams: teams.filter((team) => team.format === "Single").slice(0, 4)
  },
  {
    label: "Double Battle",
    href: "/best-teams",
    teams: teams.filter((team) => team.format === "Double").slice(0, 4)
  }
];

function titleFromSlug(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function pokemonAsset(name: string): PreviewAsset {
  const pokemon = getPokemonByName(name);
  const label = pokemon?.name ?? titleFromSlug(name);

  return {
    src: pokemon?.image,
    alt: `${label} artwork`,
    label
  };
}

function itemAsset(name: string): PreviewAsset {
  const item = getItemByName(name);
  const label = item?.name ?? titleFromSlug(name);

  return {
    src: item?.image,
    alt: `${label} icon`,
    label
  };
}

function staticAsset(src: string, label: string): PreviewAsset {
  return {
    src,
    alt: `${label} image`,
    label
  };
}

function uniqueTierPreview(entries: PokemonTierEntry[]) {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    const key = entry.pokemonId ?? entry.name;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

const tierPreview = uniqueTierPreview([
  ...tierListsByFormat.double.SS,
  ...tierListsByFormat.single.SS,
  ...tierListsByFormat.double.S,
  ...tierListsByFormat.single.S
]).slice(0, 12);

function hrefForUsefulPokemonView(viewKey: string) {
  return viewKey === "mega" ? "/useful-pokemon" : `/useful-pokemon?view=${viewKey}`;
}

function guideAssets(guide: Guide): PreviewAsset[] {
  if (guide.href === "/beginner-guide") return [pokemonAsset("pikachu")];
  if (guide.href === "/pokemon-home") return [staticAsset("/logo.png", "Pokemon Champions")];
  if (guide.href === "/mobile-release") return [staticAsset("/icon-192x192.png", "Pokemon Champions mobile")];
  if (guide.href === "/mega-raichu") return [pokemonAsset("raichu"), pokemonAsset("raichu-alola"), itemAsset("raichunite")];
  return [staticAsset("/logo.png", guide.title)];
}

function AssetFallback({ label, className = "text-xs" }: { label: string; className?: string }) {
  return <span className={`${className} font-black text-champion-navy`}>{label.slice(0, 2).toUpperCase()}</span>;
}

function TinyImage({ asset, className = "h-9 w-9", priority = false }: { asset: PreviewAsset; className?: string; priority?: boolean }) {
  return (
    <span className={`grid shrink-0 place-items-center overflow-hidden rounded-md border border-line bg-white p-0.5 ${className}`}>
      {asset.src ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          width={40}
          height={40}
          priority={priority}
          unoptimized
          className="max-h-full max-w-full object-contain"
          style={{ width: "auto", height: "auto" }}
        />
      ) : (
        <AssetFallback label={asset.label} />
      )}
    </span>
  );
}

function SectionHeader({ title, href }: { title: string; href?: string }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <h2 className="text-sm font-black uppercase tracking-wide text-champion-navy">{title}</h2>
      {href ? (
        <Link href={href} className="ml-auto rounded-full border border-line bg-white px-3 py-1 text-xs font-black text-champion-blue hover:border-champion-blue">
          Open
        </Link>
      ) : null}
    </div>
  );
}

function MainEntryCard({ entry }: { entry: MainEntry }) {
  return (
    <Link
      href={entry.href}
      className="group flex min-w-0 items-center gap-3 rounded-lg border border-line bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-champion-blue hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champion-blue"
    >
      <span className={`h-10 w-1.5 shrink-0 rounded-full ${entry.accent}`} aria-hidden="true" />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-base font-black text-champion-navy">{entry.title}</span>
        <span className="mt-1 block truncate text-xs font-bold text-slate-500">{entry.label}</span>
      </span>
      <span className="shrink-0 rounded-md bg-mist px-2.5 py-1 text-xs font-black text-champion-navy transition group-hover:bg-champion-blue group-hover:text-white">
        {entry.value}
      </span>
    </Link>
  );
}

function PopularPokemonPanel() {
  return (
    <section className="min-w-0 rounded-lg border border-line bg-white p-3 shadow-sm" aria-labelledby="popular-pokemon-heading">
      <SectionHeader title="Popular Pokemon" href="/pokemon" />
      <div id="popular-pokemon-heading" className="sr-only">
        Popular Pokemon
      </div>
      <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 xl:grid xl:grid-cols-10 xl:overflow-visible">
        {popularPokemon.map((pokemon, index) => (
          <Link
            key={pokemon.slug}
            href={`/pokemon/${pokemon.slug}`}
            className="relative grid h-28 w-[7.25rem] shrink-0 grid-rows-[auto_1fr_auto] rounded-md border border-line/80 bg-slate-50 p-1.5 text-center transition hover:-translate-y-0.5 hover:border-champion-blue hover:bg-white xl:w-auto"
          >
            <div className="flex items-center justify-between gap-1">
              <span className="grid h-5 min-w-5 place-items-center rounded-md bg-champion-yellow px-1 text-[10px] font-black leading-none text-champion-navy">
                {index + 1}
              </span>
              <span className="rounded-full bg-white px-1.5 py-0.5 text-[10px] font-black leading-none text-champion-blue">{pokemon.usage.toFixed(1)}%</span>
            </div>
            <span className="grid place-items-center">
              <TinyImage asset={{ src: pokemon.image, alt: `${pokemon.name} artwork`, label: pokemon.name }} className="h-14 w-14 border-0 bg-transparent" priority={index < 10} />
            </span>
            <span className="line-clamp-2 min-h-[1.75rem] text-[11px] font-bold leading-tight text-champion-navy">{pokemon.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function TierListPanel() {
  return (
    <Link
      href="/tier-list"
      aria-label="Open Tier List"
      className="group block min-w-0 rounded-lg border border-line bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-champion-blue hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champion-blue"
    >
      <div className="mb-3 flex items-center gap-3">
        <h2 className="text-sm font-black uppercase tracking-wide text-champion-navy">Tier List</h2>
        <span className="ml-auto rounded-full border border-line bg-white px-3 py-1 text-xs font-black text-champion-blue transition group-hover:border-champion-blue">
          Open
        </span>
      </div>
      <div className="grid min-w-0 gap-2 lg:grid-cols-[0.55fr_1.45fr]">
        <div className="grid grid-cols-3 gap-2">
          {(["SS", "S", "A"] as const).map((rank) => (
            <div key={rank} className="rounded-md bg-mist px-3 py-2">
              <div className="text-lg font-black leading-none text-champion-navy">{rank}</div>
              <div className="mt-1 text-[11px] font-bold text-slate-500">{tierListsByFormat.double[rank].length + tierListsByFormat.single[rank].length} picks</div>
            </div>
          ))}
        </div>
        <div className="grid min-w-0 grid-cols-6 gap-1.5 sm:grid-cols-12">
          {tierPreview.map((entry, index) => (
            <TinyImage key={`${entry.pokemonId ?? entry.name}-${index}`} asset={pokemonAsset(entry.pokemonId ?? entry.name)} className="mx-auto h-9 w-9" priority={index < 4} />
          ))}
        </div>
      </div>
    </Link>
  );
}

function UsefulPokemonPanel() {
  return (
    <article className="min-w-0 rounded-lg border border-line bg-white p-3 shadow-sm">
      <SectionHeader title="Useful Pokemon" href="/useful-pokemon" />
      <div className="grid gap-2 lg:grid-cols-3">
        {usefulPokemonViews.map((view) => {
          const group = tierRecommendationGroups.find((recommendationGroup) => recommendationGroup.id === view.recommendationGroupId);
          if (!group) return null;

          return (
            <Link
              key={group.id}
              href={hrefForUsefulPokemonView(view.key)}
              className="block min-w-0 overflow-hidden rounded-md border border-line/80 bg-slate-50 p-2 transition hover:-translate-y-0.5 hover:border-champion-blue hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champion-blue"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="min-w-0 flex-1 truncate text-sm font-black leading-tight text-champion-navy">{group.title.replace(" Recommendations", "")}</span>
                <span className="shrink-0 rounded bg-white px-1.5 py-0.5 text-[11px] font-black text-slate-500">{group.entries.length}</span>
              </div>
              <div className="grid min-w-0 grid-cols-[repeat(5,minmax(0,1fr))] gap-1 sm:gap-1.5">
                {group.entries.slice(0, 5).map((entry, index) => (
                  <span key={`${group.id}-${entry.id}`} className="flex min-w-0 items-center justify-center overflow-hidden rounded-md border border-line bg-white px-0.5 py-1 sm:p-1">
                    <TinyImage asset={pokemonAsset(entry.pokemonId)} className="h-6 w-6 border-0 sm:h-7 sm:w-7" priority={index < 2} />
                    <TinyImage asset={itemAsset(entry.itemId)} className="ml-0.5 h-4 w-4 border-0 bg-mist sm:h-5 sm:w-5" />
                  </span>
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </article>
  );
}

function BestTeamsPanel() {
  return (
    <article className="min-w-0 rounded-lg border border-line bg-white p-3 shadow-sm">
      <SectionHeader title="Best Teams" href="/best-teams" />
      <div className="grid gap-3">
        {bestTeamRows.map((row) => (
          <section key={row.label} className="min-w-0" aria-label={`${row.label} best teams`}>
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-xs font-black uppercase tracking-wide text-slate-500">{row.label}</h3>
            </div>
            <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
              {row.teams.map((team, teamIndex) => (
                <Link
                  key={team.id}
                  href={row.href}
                  className="block min-w-0 rounded-md border border-line/80 bg-slate-50 p-2 transition hover:-translate-y-0.5 hover:border-champion-blue hover:bg-white"
                >
                  <div className="mb-2 flex min-w-0 items-center gap-1.5">
                    <span className="grid h-5 min-w-5 place-items-center rounded-md bg-champion-blue px-1 text-[10px] font-black leading-none text-white">
                      {teamIndex + 1}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[11px] font-bold text-champion-navy">{team.title}</span>
                  </div>
                  <div className="grid min-w-0 grid-cols-6 gap-1.5">
                    {team.members.slice(0, 6).map((member, memberIndex) => (
                      <TinyImage
                        key={`${team.id}-${member.pokemonId}`}
                        asset={pokemonAsset(member.pokemonId)}
                        className="mx-auto h-7 w-7"
                        priority={row === bestTeamRows[0] && teamIndex === 0 && memberIndex < 2}
                      />
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function MoreGuideCard({ guide }: { guide: Guide }) {
  const assets = guideAssets(guide);

  return (
    <Link
      href={guide.href}
      className="group flex min-w-0 items-center gap-2 rounded-lg border border-line bg-white p-2.5 shadow-sm transition hover:-translate-y-0.5 hover:border-champion-blue hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champion-blue"
    >
      <TinyImage asset={assets[0]} className="h-9 w-9" />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-black text-champion-navy">{guide.title.replace(" Guide", "")}</span>
        <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-wide text-slate-500">Open</span>
      </span>
      {assets.length > 1 ? (
        <span className="flex -space-x-2">
          {assets.slice(1, 3).map((asset, index) => (
            <TinyImage key={`${guide.href}-${asset.label}-${index}`} asset={asset} className="h-6 w-6 rounded-full border-white" />
          ))}
        </span>
      ) : null}
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <div className="bg-mist">
        <div className="mx-auto max-w-6xl px-4 pb-10 pt-5 sm:px-6 sm:pb-14 sm:pt-7">
          <section className="grid min-w-0 gap-3 lg:grid-cols-3" aria-label="Main entries">
            {mainEntries.map((entry) => (
              <MainEntryCard key={entry.href} entry={entry} />
            ))}
          </section>

          <div className="mt-3 grid min-w-0 gap-3">
            <PopularPokemonPanel />
            <TierListPanel />
            <UsefulPokemonPanel />
            <BestTeamsPanel />
          </div>

          <section className="mt-3 min-w-0 rounded-lg border border-line bg-white p-4 shadow-sm" aria-labelledby="more-guides-heading">
            <SectionHeader title="More Guides" />
            <h2 id="more-guides-heading" className="sr-only">
              More Guides
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {moreGuides.map((guide) => (
                <MoreGuideCard key={guide.href} guide={guide} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
