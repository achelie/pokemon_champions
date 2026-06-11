import type { Metadata } from "next";
import Image from "next/image";
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
import {
  filterPokebasePokemon,
  pokebaseAbilityOptions,
  pokebaseGenerationOptions,
  pokebaseMoveOptions,
  pokebasePokemon,
  pokebaseRegulationSets,
  type PokebaseMegaFilter,
  type PokebasePokemonFilters
} from "@/data/pokebasePokemon";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const PAGE_SIZE = 100;

const pageMeta = {
  title: "Pokémon Champions Pokémon List",
  description: "List of currently available Pokémon in Pokémon Champions with usage and base stats.",
  path: "/pokemon",
  keywords: ["Pokémon Champions Pokémon List", "Pokémon Champions All Pokémon", "Pokémon Champions Usage"]
};

export const metadata: Metadata = createPageMetadata(pageMeta);

type PokemonListPageProps = {
  searchParams?: {
    page?: string | string[];
    regulation?: string | string[];
    move?: string | string[];
    ability?: string | string[];
    generation?: string | string[];
    mega?: string | string[];
  };
};

const statColumns = [
  { key: "hp", label: "HP" },
  { key: "attack", label: "ATK" },
  { key: "defense", label: "DEF" },
  { key: "specialAttack", label: "Sp. ATK" },
  { key: "specialDefense", label: "Sp. DEF" },
  { key: "speed", label: "SPD" }
] as const;

function scalarParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function pageNumber(value: string | string[] | undefined, totalPages: number) {
  const parsed = Number.parseInt(scalarParam(value) ?? "1", 10);
  return Math.min(Math.max(Number.isFinite(parsed) ? parsed : 1, 1), totalPages);
}

function selectedFilters(searchParams: PokemonListPageProps["searchParams"]): PokebasePokemonFilters {
  const mega = scalarParam(searchParams?.mega);
  return {
    regulation: scalarParam(searchParams?.regulation) || pokebaseRegulationSets[0],
    move: scalarParam(searchParams?.move) || undefined,
    ability: scalarParam(searchParams?.ability) || undefined,
    generation: scalarParam(searchParams?.generation) || undefined,
    mega: mega === "mega" || mega === "base" ? (mega as PokebaseMegaFilter) : "all"
  };
}

export default function PokemonListPage({ searchParams }: PokemonListPageProps) {
  const filters = selectedFilters(searchParams);
  const filteredEntries = filterPokebasePokemon(pokebasePokemon, filters);
  const totalPages = Math.max(1, Math.ceil(filteredEntries.length / PAGE_SIZE));
  const currentPage = pageNumber(searchParams?.page, totalPages);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const entries = filteredEntries.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <PokebasePageShell
      title="Pokémon List"
      description="Usage-ranked Pokémon Champions data aligned with PokéBase's current M-A regulation list."
    >
      <JsonLd data={articleJsonLd(pageMeta)} />
      <PokemonFilters filters={filters} />

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <PokebaseResultBar currentPage={currentPage} totalPages={totalPages} totalResults={filteredEntries.length} />
        <PokebasePagination basePath="/pokemon" currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
      </div>

      <PokebaseTableWrap>
        <table className="w-full min-w-[760px] border-separate border-spacing-0" aria-label="Pokémon Champions Pokémon usage table">
          <thead>
            <tr className="bg-white">
              <th className={`${pokebaseThClass} min-w-60`}>Pokemon</th>
              <th className={`${pokebaseThClass} text-right`}>Usage</th>
              {statColumns.map((column) => (
                <th key={column.key} className={`${pokebaseThClass} text-right`}>
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {entries.map((pokemon) => (
              <tr key={pokemon.slug} className="odd:bg-zinc-50">
                <td className={pokebaseTdClass}>
                  <a href={pokemon.sourceUrl} className="group flex min-w-60 items-center gap-3">
                    <Image
                      src={pokemon.image}
                      alt={pokemon.name}
                      width={36}
                      height={36}
                      className="h-9 w-9 object-contain"
                    />
                    <span className="font-semibold text-zinc-800 group-hover:underline">{pokemon.name}</span>
                  </a>
                </td>
                <td className={`${pokebaseTdClass} text-right tabular-nums`}>{pokemon.usage}%</td>
                {statColumns.map((column) => (
                  <td key={column.key} className={`${pokebaseTdClass} text-right tabular-nums`}>
                    {pokemon.baseStats[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </PokebaseTableWrap>

      <div className="mt-5 flex justify-end">
        <PokebasePagination basePath="/pokemon" currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
      </div>
    </PokebasePageShell>
  );
}

function PokemonFilters({ filters }: { filters: PokebasePokemonFilters }) {
  const selectClass =
    "h-10 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-700 shadow-sm shadow-zinc-100 outline-offset-2 focus:outline-2 focus:outline-blue-400";
  const labelClass = "flex min-w-0 flex-col gap-1 text-xs font-medium text-zinc-500";

  return (
    <form action="/pokemon" className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm shadow-zinc-100">
      <div className="grid gap-3 md:grid-cols-5">
        <label className={labelClass}>
          Filter by regulation set
          <select name="regulation" defaultValue={filters.regulation} className={selectClass}>
            {pokebaseRegulationSets.map((regulation) => (
              <option key={regulation} value={regulation}>
                {regulation}
              </option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          Filter by move
          <select name="move" defaultValue={filters.move ?? ""} className={selectClass}>
            <option value="">Any move</option>
            {pokebaseMoveOptions.map((move) => (
              <option key={move} value={move}>
                {move}
              </option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          Filter by ability
          <select name="ability" defaultValue={filters.ability ?? ""} className={selectClass}>
            <option value="">Any ability</option>
            {pokebaseAbilityOptions.map((ability) => (
              <option key={ability} value={ability}>
                {ability}
              </option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          Filter by generation
          <select name="generation" defaultValue={filters.generation ?? ""} className={selectClass}>
            <option value="">Any generation</option>
            {pokebaseGenerationOptions.map((generation) => (
              <option key={generation} value={generation}>
                {generation}
              </option>
            ))}
          </select>
        </label>

        <label className={labelClass}>
          Mega Evolution
          <select name="mega" defaultValue={filters.mega ?? "all"} className={selectClass}>
            <option value="all">All Pokémon</option>
            <option value="mega">Mega only</option>
            <option value="base">No Mega</option>
          </select>
        </label>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="submit"
          className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm shadow-orange-100/60 transition hover:border-orange-200 hover:bg-orange-100"
        >
          Apply filters
        </button>
        <Link href="/pokemon" className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-blue-200 hover:text-blue-600">
          Clear
        </Link>
      </div>
    </form>
  );
}
