import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/JsonLd";
import { PokebasePageShell } from "@/components/PokebaseTable";
import { getPokemonBySlug, pokemonAssets } from "@/data/pokemon";
import { createPageMetadata, pokemonDetailJsonLd } from "@/lib/seo";

type PokemonDetailPageProps = {
  params: {
    slug: string;
  };
};

const statRows = [
  { key: "hp", label: "HP" },
  { key: "attack", label: "ATK" },
  { key: "defense", label: "DEF" },
  { key: "specialAttack", label: "Sp. ATK" },
  { key: "specialDefense", label: "Sp. DEF" },
  { key: "speed", label: "SPD" }
] as const;

export function generateStaticParams() {
  return pokemonAssets.map((pokemon) => ({ slug: pokemon.slug }));
}

export function generateMetadata({ params }: PokemonDetailPageProps): Metadata {
  const pokemon = getPokemonBySlug(params.slug);
  if (!pokemon) return {};

  return createPageMetadata({
    title: `${pokemon.name} Pokemon Champions Data`,
    description: `${pokemon.name} usage, base stats, moves, and abilities for Pokemon Champions.`,
    path: `/pokemon/${pokemon.slug}`,
    keywords: [`${pokemon.name} Pokemon Champions`, `${pokemon.name} moves`, `${pokemon.name} stats`]
  });
}

export default function PokemonDetailPage({ params }: PokemonDetailPageProps) {
  const pokemon = getPokemonBySlug(params.slug);
  if (!pokemon) notFound();

  return (
    <>
      <JsonLd data={pokemonDetailJsonLd(pokemon)} />
      <PokebasePageShell title={pokemon.name}>
      <div className="mb-5">
        <Link href="/pokemon" className="text-sm font-semibold text-blue-600 hover:underline">
          Back to Pokemon
        </Link>
      </div>

      <section className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-100">
          <div className="grid aspect-square place-items-center rounded-lg bg-zinc-50">
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={220}
              height={220}
              unoptimized
              className="h-56 w-56 object-contain"
            />
          </div>
          <dl className="mt-4 grid gap-2 text-sm">
            <div className="flex items-center justify-between gap-3 border-t border-zinc-100 pt-2">
              <dt className="font-semibold text-zinc-500">Usage</dt>
              <dd className="font-semibold text-zinc-900">{pokemon.usage}%</dd>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-zinc-100 pt-2">
              <dt className="font-semibold text-zinc-500">Generation</dt>
              <dd className="font-semibold text-zinc-900">{pokemon.generation}</dd>
            </div>
            <div className="flex items-center justify-between gap-3 border-t border-zinc-100 pt-2">
              <dt className="font-semibold text-zinc-500">Mega Evolution</dt>
              <dd className="font-semibold text-zinc-900">{pokemon.isMega ? "Yes" : "No"}</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-5">
          <section className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-100">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Base Stats</h2>
            <dl className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {statRows.map((row) => (
                <div key={row.key} className="rounded-lg border border-zinc-100 bg-zinc-50 px-3 py-2">
                  <dt className="text-xs font-semibold text-zinc-500">{row.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-zinc-900">{pokemon.baseStats[row.key]}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-100">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Abilities</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {pokemon.abilities.map((ability) => (
                <span key={ability} className="rounded-full border border-orange-100 bg-orange-50 px-3 py-1 text-sm font-semibold text-zinc-700">
                  {ability}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-100">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">Moves</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {pokemon.moves.map((move) => (
                <span key={move} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700">
                  {move}
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
      </PokebasePageShell>
    </>
  );
}
