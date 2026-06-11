import Image from "next/image";

import { MoveBadge } from "@/components/MoveBadge";
import { TypeBadgeList } from "@/components/TypeBadge";
import { getItemByName } from "@/data/items";
import { getPokemonByName } from "@/data/pokemon";
import type { PokemonStats, TierRecommendation } from "@/types/content";

type RecommendationCardProps = {
  recommendation: TierRecommendation;
};

const statRows: Array<{ key: keyof PokemonStats; label: string }> = [
  { key: "hp", label: "HP" },
  { key: "attack", label: "Atk" },
  { key: "specialAttack", label: "SpA" },
  { key: "speed", label: "Spe" }
];

function MergedStats({
  baseStats,
  megaBaseStats,
  evs
}: {
  baseStats: PokemonStats;
  megaBaseStats?: PokemonStats;
  evs: PokemonStats;
}) {
  const evTotal = evs.hp + evs.attack + evs.defense + evs.specialAttack + evs.specialDefense + evs.speed;

  return (
    <div className="mt-4">
      <h4 className="text-xs font-black uppercase tracking-wide text-slate-500">Stats and EVs</h4>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {statRows.map((row) => (
          <div key={row.key} className="rounded-md bg-slate-50 px-3 py-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-black text-slate-500">{row.label}</span>
              <span className="text-sm font-black text-champion-navy">
                {baseStats[row.key]}
                {megaBaseStats ? <span className="text-champion-blue"> → {megaBaseStats[row.key]}</span> : null}
              </span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs font-bold text-slate-500">EVs: {evTotal}</p>
    </div>
  );
}

export function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const pokemon = getPokemonByName(recommendation.pokemonId);
  const item = getItemByName(recommendation.itemId);

  if (!pokemon) {
    throw new Error(`Missing Pokemon asset for recommendation: ${recommendation.pokemonId}`);
  }
  if (!item) {
    throw new Error(`Missing item asset for recommendation: ${recommendation.itemId}`);
  }

  return (
    <article className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <div className="flex gap-3">
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-lg bg-mist">
          <Image
            src={pokemon.image}
            alt={`${recommendation.name} artwork`}
            width={88}
            height={88}
            className="h-22 w-22 object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start gap-2">
            <h3 className="text-lg font-black leading-tight text-champion-navy">{recommendation.name}</h3>
            <span className="rounded-full bg-mist px-2 py-0.5 text-xs font-black text-slate-600">{recommendation.role}</span>
          </div>
          <div className="mt-2">
            <TypeBadgeList type={recommendation.type} />
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-md border border-line bg-slate-50 px-2 py-1.5">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded bg-white">
              <Image src={item.image} alt={`${recommendation.itemName} icon`} width={28} height={28} className="h-7 w-7 object-contain" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-black uppercase tracking-wide text-slate-500">Held Item</p>
              <p className="truncate text-sm font-extrabold text-champion-navy">{recommendation.itemName}</p>
            </div>
          </div>
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-md bg-mist p-3">
          <dt className="text-xs font-black uppercase tracking-wide text-slate-500">Ability</dt>
          <dd className="mt-1 text-sm font-extrabold text-champion-navy">{recommendation.ability}</dd>
        </div>
        <div className="rounded-md bg-mist p-3">
          <dt className="text-xs font-black uppercase tracking-wide text-slate-500">Nature</dt>
          <dd className="mt-1 text-sm font-extrabold text-champion-navy">{recommendation.nature}</dd>
        </div>
        {recommendation.megaAbility ? (
          <div className="rounded-md bg-mist p-3 col-span-2">
            <dt className="text-xs font-black uppercase tracking-wide text-slate-500">Mega Ability</dt>
            <dd className="mt-1 text-sm font-extrabold text-champion-navy">{recommendation.megaAbility}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-4">
        <h4 className="text-xs font-black uppercase tracking-wide text-slate-500">Moves</h4>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {recommendation.moves.map((move) => (
            <li key={move} className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700">
              <MoveBadge move={move} />
            </li>
          ))}
        </ul>
      </div>

      <MergedStats
        baseStats={recommendation.baseStats}
        megaBaseStats={recommendation.megaBaseStats}
        evs={recommendation.evs}
      />

      <p className="mt-4 text-sm leading-6 text-slate-600">{recommendation.explanation}</p>
    </article>
  );
}
