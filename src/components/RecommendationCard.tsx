import Image from "next/image";

import { TypeBadgeList } from "@/components/TypeBadge";
import { getItemByName } from "@/data/items";
import { getPokemonByName } from "@/data/pokemon";
import type { PokemonStats, TierRecommendation } from "@/types/content";

type RecommendationCardProps = {
  recommendation: TierRecommendation;
};

const statLabels: Array<[keyof PokemonStats, string]> = [
  ["hp", "HP"],
  ["attack", "Atk"],
  ["defense", "Def"],
  ["specialAttack", "SpA"],
  ["specialDefense", "SpD"],
  ["speed", "Spe"]
];

function StatRow({ label, stats }: { label: string; stats: PokemonStats }) {
  return (
    <div className="rounded-md border border-line bg-mist/60 p-3">
      <p className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</p>
      <dl className="mt-2 grid grid-cols-3 gap-2 text-xs sm:grid-cols-6">
        {statLabels.map(([key, statLabel]) => (
          <div key={key}>
            <dt className="font-black text-slate-500">{statLabel}</dt>
            <dd className="mt-0.5 font-black text-champion-navy">{stats[key]}</dd>
          </div>
        ))}
      </dl>
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
      <div className="flex gap-4">
        <div className="grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-md border border-line bg-mist">
          <Image
            src={pokemon.image}
            alt={`${recommendation.name} artwork`}
            width={96}
            height={96}
            className="h-20 w-20 object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-wide text-champion-blue">{recommendation.role}</p>
          <h3 className="mt-1 text-xl font-black text-champion-navy">{recommendation.name}</h3>
          <div className="mt-2">
            <TypeBadgeList type={recommendation.type} />
          </div>
          <div className="mt-3 inline-flex max-w-full items-center gap-2 rounded-md border border-line bg-mist px-2.5 py-1.5">
            <Image src={item.image} alt={`${recommendation.itemName} icon`} width={32} height={32} className="h-7 w-7 object-contain" />
            <span className="truncate text-xs font-black text-champion-navy">{recommendation.itemName}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-md border border-line p-3">
          <p className="text-xs font-black uppercase tracking-wide text-slate-500">Moves</p>
          <ul className="mt-2 grid grid-cols-2 gap-1.5 text-sm font-bold text-slate-700">
            {recommendation.moves.map((move) => (
              <li key={move} className="rounded-md bg-mist px-2 py-1">
                {move}
              </li>
            ))}
          </ul>
        </div>
        <dl className="grid gap-2 rounded-md border border-line p-3 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="font-black text-slate-500">Nature</dt>
            <dd className="text-right font-bold text-slate-700">{recommendation.nature}</dd>
          </div>
          <div className="flex justify-between gap-3 border-t border-line pt-2">
            <dt className="font-black text-slate-500">Ability</dt>
            <dd className="text-right font-bold text-slate-700">{recommendation.ability}</dd>
          </div>
          {recommendation.megaAbility ? (
            <div className="flex justify-between gap-3 border-t border-line pt-2">
              <dt className="font-black text-slate-500">Mega Ability</dt>
              <dd className="text-right font-bold text-slate-700">{recommendation.megaAbility}</dd>
            </div>
          ) : null}
        </dl>
      </div>

      <div className="mt-3 grid gap-3">
        <StatRow label="Base stats" stats={recommendation.baseStats} />
        <StatRow label="EV spread" stats={recommendation.evs} />
        {recommendation.megaBaseStats ? <StatRow label="Mega base stats" stats={recommendation.megaBaseStats} /> : null}
        {recommendation.megaEvs ? <StatRow label="Mega EV spread" stats={recommendation.megaEvs} /> : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{recommendation.explanation}</p>
    </article>
  );
}
