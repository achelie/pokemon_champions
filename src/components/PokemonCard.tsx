import Image from "next/image";

import { TypeBadgeList } from "@/components/TypeBadge";
import { getPokemonByName } from "@/data/pokemon";
import type { PokemonTierEntry, TierRank } from "@/types/content";

type PokemonCardProps = {
  pokemon: PokemonTierEntry;
  rank: TierRank;
};

const rankStyles: Record<TierRank, string> = {
  SS: "bg-champion-red text-white",
  S: "bg-champion-red text-white",
  A: "bg-champion-blue text-white",
};

export function PokemonCard({ pokemon, rank }: PokemonCardProps) {
  const asset = getPokemonByName(pokemon.pokemonId ?? pokemon.name);

  return (
    <article className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-md border border-line bg-mist">
          {asset ? (
            <Image
              src={asset.image}
              alt={`${pokemon.name} artwork`}
              width={64}
              height={64}
              unoptimized
              className="h-14 w-14 object-contain"
            />
          ) : (
            <span className="text-sm font-black text-champion-navy">{pokemon.name.slice(0, 2).toUpperCase()}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-black text-champion-navy">{pokemon.name}</h3>
          <div className="mt-2">
            <TypeBadgeList type={pokemon.type} />
          </div>
        </div>
        <span className={`rounded-md px-2.5 py-1 text-xs font-black ${rankStyles[rank]}`}>{rank}</span>
      </div>
      <dl className="mt-4 grid gap-2 text-sm">
        <div className="flex justify-between gap-3 border-t border-line pt-2">
          <dt className="font-extrabold text-slate-500">Role</dt>
          <dd className="text-right text-slate-700">{pokemon.role}</dd>
        </div>
        <div className="flex justify-between gap-3 border-t border-line pt-2">
          <dt className="font-extrabold text-slate-500">Format</dt>
          <dd className="text-right text-slate-700">{pokemon.format}</dd>
        </div>
      </dl>
      <p className="mt-4 text-sm leading-6 text-slate-600">{pokemon.reason}</p>
    </article>
  );
}
