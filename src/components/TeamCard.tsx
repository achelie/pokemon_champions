import Image from "next/image";

import { getItemByName } from "@/data/items";
import { getPokemonByName } from "@/data/pokemon";
import { MoveBadge } from "@/components/MoveBadge";
import { TypeBadgeList } from "@/components/TypeBadge";
import type { PokemonStats, Team, TeamMemberBuild } from "@/types/content";

type TeamCardProps = {
  team: Team;
};

const statRows: Array<{ key: keyof PokemonStats; label: string }> = [
  { key: "hp", label: "HP" },
  { key: "attack", label: "Atk" },
  { key: "defense", label: "Def" },
  { key: "specialAttack", label: "Sp. Atk" },
  { key: "specialDefense", label: "Sp. Def" },
  { key: "speed", label: "Speed" }
];

function statLabel(key: keyof PokemonStats) {
  return statRows.find((row) => row.key === key)?.label ?? key;
}

function NatureNote({ member }: { member: TeamMemberBuild }) {
  if (!member.statModifiers?.increased && !member.statModifiers?.decreased) {
    return null;
  }

  return (
    <p className="mt-1 text-xs font-bold text-slate-500">
      {member.statModifiers.increased ? `Raises ${statLabel(member.statModifiers.increased)}` : null}
      {member.statModifiers.increased && member.statModifiers.decreased ? " / " : null}
      {member.statModifiers.decreased ? `Lowers ${statLabel(member.statModifiers.decreased)}` : null}
    </p>
  );
}

function TeamMemberCard({ member }: { member: TeamMemberBuild }) {
  const pokemon = getPokemonByName(member.pokemonId);
  const item = member.itemId ? getItemByName(member.itemId) : undefined;

  return (
    <article className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <div className="flex gap-3">
        <div className="grid h-24 w-24 shrink-0 place-items-center rounded-lg bg-mist">
          {pokemon ? (
            <Image
              src={pokemon.image}
              alt={`${member.displayName} artwork`}
              width={88}
              height={88}
              unoptimized
              className="h-22 w-22 object-contain"
            />
          ) : (
            <span className="text-sm font-black text-champion-navy">{member.displayName.slice(0, 2).toUpperCase()}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start gap-2">
            <h3 className="text-lg font-black leading-tight text-champion-navy">{member.displayName}</h3>
            {member.gender ? <span className="rounded-full bg-mist px-2 py-0.5 text-xs font-black text-slate-600">{member.gender}</span> : null}
          </div>
          <div className="mt-2">
            <TypeBadgeList type={member.types.join(" / ")} />
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-md border border-line bg-slate-50 px-2 py-1.5">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded bg-white">
              {item && member.itemName ? (
                <Image
                  src={item.image}
                  alt={`${member.itemName} icon`}
                  width={28}
                  height={28}
                  unoptimized
                  className="h-7 w-7 object-contain"
                />
              ) : (
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-slate-300" />
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-black uppercase tracking-wide text-slate-500">Held Item</p>
              <p className="truncate text-sm font-extrabold text-champion-navy">{member.itemName ?? "No held item"}</p>
            </div>
          </div>
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-md bg-mist p-3">
          <dt className="text-xs font-black uppercase tracking-wide text-slate-500">Ability</dt>
          <dd className="mt-1 text-sm font-extrabold text-champion-navy">{member.ability}</dd>
        </div>
        <div className="rounded-md bg-mist p-3">
          <dt className="text-xs font-black uppercase tracking-wide text-slate-500">Nature</dt>
          <dd className="mt-1 text-sm font-extrabold text-champion-navy">{member.nature}</dd>
          <NatureNote member={member} />
        </div>
      </dl>

      <div className="mt-4">
        <h4 className="text-xs font-black uppercase tracking-wide text-slate-500">Moves</h4>
        <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {member.moves.map((move) => (
            <li key={move} className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700">
              <MoveBadge move={move} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <h4 className="text-xs font-black uppercase tracking-wide text-slate-500">Stats and EVs</h4>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {statRows.map((row) => (
            <div key={row.key} className="rounded-md bg-slate-50 px-3 py-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-black text-slate-500">{row.label}</span>
                <span className="text-sm font-black text-champion-navy">{member.stats[row.key]}</span>
              </div>
              <div className="mt-1 text-xs font-bold text-slate-500">EV {member.evs[row.key]}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <section aria-labelledby={`${team.id}-title`} className="rounded-lg border border-line bg-white/70 p-4 shadow-sm sm:p-5">
      <div className="flex flex-wrap items-start gap-3">
        <div className="mr-auto">
          <h2 id={`${team.id}-title`} className="text-2xl font-black leading-tight text-champion-navy">
            {team.title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{team.description}</p>
        </div>
        <span className="rounded-full bg-champion-blue px-3 py-1 text-xs font-black text-white">{team.format} Battle</span>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {team.members.map((member) => (
          <TeamMemberCard key={member.pokemonId} member={member} />
        ))}
      </div>
    </section>
  );
}
