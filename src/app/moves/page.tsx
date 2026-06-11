import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import {
  PokebasePageShell,
  PokebasePagination,
  PokebaseResultBar,
  PokebaseTableWrap,
  pokebaseTdClass,
  pokebaseThClass
} from "@/components/PokebaseTable";
import { allMoves, formatMoveAccuracy, formatMoveNumber } from "@/data/moves";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const pageMeta = {
  title: "Pokémon Champions Moves List",
  description: "Complete list of all moves in Pokémon Champions with usage, descriptions, power, accuracy, and PP.",
  path: "/moves",
  keywords: ["Pokémon Champions Moves List", "Pokémon Champions All Moves", "Pokémon Champions Move Usage"]
};

export const metadata: Metadata = createPageMetadata(pageMeta);

const PAGE_SIZE = 100;

type MovesPageProps = {
  searchParams?: { page?: string | string[] };
};

function scalarParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function pageNumber(value: string | string[] | undefined, totalPages: number) {
  const parsed = Number.parseInt(scalarParam(value) ?? "1", 10);
  return Math.min(Math.max(Number.isFinite(parsed) ? parsed : 1, 1), totalPages);
}

export default function MovesListPage({ searchParams }: MovesPageProps) {
  const totalPages = Math.max(1, Math.ceil(allMoves.length / PAGE_SIZE));
  const currentPage = pageNumber(searchParams?.page, totalPages);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const entries = allMoves.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <PokebasePageShell
      title="Moves List"
      description="Usage-ranked Pokémon Champions move data aligned with PokéBase's current M-A regulation list."
    >
      <JsonLd data={articleJsonLd(pageMeta)} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <PokebaseResultBar currentPage={currentPage} totalPages={totalPages} totalResults={allMoves.length} />
        <PokebasePagination basePath="/moves" currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
      </div>

      <PokebaseTableWrap>
        <table className="w-full min-w-[820px] border-separate border-spacing-0" aria-label="Pokémon Champions moves usage table">
          <thead>
            <tr className="bg-white">
              <th className={`${pokebaseThClass} min-w-52`}>Move</th>
              <th className={`${pokebaseThClass} text-right`}>%</th>
              <th className={`${pokebaseThClass} min-w-96`}>Description</th>
              <th className={`${pokebaseThClass} text-right`}>Power</th>
              <th className={`${pokebaseThClass} text-right`}>Accuracy</th>
              <th className={`${pokebaseThClass} text-right`}>PP</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((move) => (
              <tr key={move.slug} className="odd:bg-zinc-50">
                <td className={pokebaseTdClass}>
                  <a
                    href={`https://pokebase.app/pokemon-champions/moves/${move.slug}`}
                    className="font-semibold text-zinc-800 hover:text-blue-600 hover:underline"
                  >
                    {move.name}
                  </a>
                </td>
                <td className={`${pokebaseTdClass} text-right text-xs tabular-nums`}>{move.usage}%</td>
                <td className={`${pokebaseTdClass} max-w-xl whitespace-pre-wrap leading-6`}>{move.description}</td>
                <td className={`${pokebaseTdClass} text-right tabular-nums`}>{formatMoveNumber(move.power)}</td>
                <td className={`${pokebaseTdClass} text-right tabular-nums`}>{formatMoveAccuracy(move.accuracy)}</td>
                <td className={`${pokebaseTdClass} text-right tabular-nums`}>{formatMoveNumber(move.pp)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PokebaseTableWrap>

      <div className="mt-5 flex justify-end">
        <PokebasePagination basePath="/moves" currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
      </div>
    </PokebasePageShell>
  );
}
