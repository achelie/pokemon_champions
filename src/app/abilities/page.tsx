import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import {
  PokebasePageShell,
  PokebasePagination,
  PokebaseResultBar,
  PokebaseTableWrap,
  pokebaseTdClass,
  pokebaseThClass
} from "@/components/PokebaseTable";
import { abilityAssets, filterAbilities } from "@/data/abilities";
import { createPageMetadata, databasePageJsonLd } from "@/lib/seo";

const PAGE_SIZE = 100;

const pageMeta = {
  title: "Pokemon Champions Abilities List",
  description: "Complete list of Pokemon Champions abilities with descriptions and Mega Ability filtering.",
  path: "/abilities",
  keywords: ["Pokemon Champions Abilities List", "Pokemon Champions Ability Database", "Pokemon Champions Mega Ability"]
};

export const metadata: Metadata = createPageMetadata(pageMeta);

type AbilitiesPageProps = {
  searchParams?: {
    page?: string | string[];
    mega?: string | string[];
  };
};

function scalarParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function pageNumber(value: string | string[] | undefined, totalPages: number) {
  const parsed = Number.parseInt(scalarParam(value) ?? "1", 10);
  return Math.min(Math.max(Number.isFinite(parsed) ? parsed : 1, 1), totalPages);
}

function selectedMega(value: string | string[] | undefined): "all" | "mega" | "base" {
  const scalar = scalarParam(value);
  return scalar === "mega" || scalar === "base" ? scalar : "all";
}

export default function AbilitiesListPage({ searchParams }: AbilitiesPageProps) {
  const mega = selectedMega(searchParams?.mega);
  const filteredEntries = filterAbilities(mega);
  const totalPages = Math.max(1, Math.ceil(filteredEntries.length / PAGE_SIZE));
  const currentPage = pageNumber(searchParams?.page, totalPages);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const entries = filteredEntries.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <PokebasePageShell
      title="Abilities List"
      description="Pokemon Champions ability data aligned with Pokebase's current public list."
    >
      <JsonLd data={databasePageJsonLd({ ...pageMeta, itemCount: abilityAssets.length })} />
      <form action="/abilities" className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm shadow-zinc-100">
        <label className="flex max-w-xs flex-col gap-1 text-xs font-medium text-zinc-500">
          Mega Ability
          <select
            name="mega"
            defaultValue={mega}
            className="h-10 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-700 shadow-sm shadow-zinc-100 outline-offset-2 focus:outline-2 focus:outline-blue-400"
          >
            <option value="all">All abilities</option>
            <option value="mega">Mega Ability</option>
            <option value="base">Non-Mega Ability</option>
          </select>
        </label>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="submit"
            className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm shadow-orange-100/60 transition hover:border-orange-200 hover:bg-orange-100"
          >
            Apply filters
          </button>
          <Link
            href="/abilities"
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-blue-200 hover:text-blue-600"
          >
            Clear
          </Link>
        </div>
      </form>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <PokebaseResultBar currentPage={currentPage} totalPages={totalPages} totalResults={filteredEntries.length} />
        <PokebasePagination basePath="/abilities" currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
      </div>

      <PokebaseTableWrap>
        <table className="w-full min-w-[740px] border-separate border-spacing-0" aria-label="Pokemon Champions abilities table">
          <thead>
            <tr className="bg-white">
              <th className={`${pokebaseThClass} min-w-56`}>Ability</th>
              <th className={`${pokebaseThClass} min-w-96`}>Description</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((ability) => (
              <tr key={ability.slug} className="odd:bg-zinc-50">
                <td className={pokebaseTdClass}>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-zinc-800">{ability.name}</span>
                    {ability.isMegaAbility ? (
                      <span className="w-fit rounded-full border border-orange-100 bg-orange-50 px-2 py-0.5 text-xs font-semibold text-zinc-600">
                        Mega Ability
                      </span>
                    ) : null}
                  </div>
                </td>
                <td className={`${pokebaseTdClass} max-w-3xl whitespace-pre-wrap leading-6`}>{ability.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PokebaseTableWrap>

      <div className="mt-5 flex justify-end">
        <PokebasePagination basePath="/abilities" currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
      </div>
    </PokebasePageShell>
  );
}
