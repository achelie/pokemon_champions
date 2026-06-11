import type { Metadata } from "next";
import Image from "next/image";

import { JsonLd } from "@/components/JsonLd";
import { TypeBadgeList } from "@/components/TypeBadge";
import { pokemonAssets } from "@/data/pokemon";
import { getPokemonMeta } from "@/data/pokemonMeta";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";
import type { PokemonStats } from "@/types/content";

const page = {
  title: "Pokémon Champions Pokémon List",
  description: "Complete list of all Pokémon available in Pokémon Champions with types, base stats, and tournament usage rates.",
  path: "/pokemon",
  keywords: ["Pokémon Champions Pokémon List", "Pokémon Champions All Pokémon", "Pokémon Champions Stats", "Pokémon Champions Usage"]
};

export const metadata: Metadata = createPageMetadata(page);

const statLabels: Array<{ key: keyof PokemonStats; label: string }> = [
  { key: "hp", label: "HP" },
  { key: "attack", label: "ATK" },
  { key: "defense", label: "DEF" },
  { key: "specialAttack", label: "SpA" },
  { key: "specialDefense", label: "SpD" },
  { key: "speed", label: "SPD" }
];

export default function PokemonListPage() {
  const entries = pokemonAssets
    .map((asset) => {
      const meta = getPokemonMeta(asset.id);
      return { asset, meta };
    })
    .sort((a, b) => {
      const aUsage = a.meta?.usage ?? -1;
      const bUsage = b.meta?.usage ?? -1;
      if (bUsage !== aUsage) return bUsage - aUsage;
      return a.asset.name.localeCompare(b.asset.name);
    });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(page)} />

      <div className="overflow-x-auto rounded-lg border border-line bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line bg-mist/60 text-left">
              <th className="w-8 px-3 py-3 text-center text-xs font-black uppercase tracking-wide text-slate-500">#</th>
              <th className="px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-500">Pokémon</th>
              <th className="px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-500">Type</th>
              <th className="hidden px-3 py-3 text-center text-xs font-black uppercase tracking-wide text-slate-500 sm:table-cell">
                Usage
              </th>
              {statLabels.map((s) => (
                <th
                  key={s.key}
                  className="hidden px-3 py-3 text-center text-xs font-black uppercase tracking-wide text-slate-500 md:table-cell"
                >
                  {s.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {entries.map(({ asset, meta }, index) => (
              <tr key={asset.id} className="transition-colors hover:bg-mist/30">
                <td className="px-3 py-3 text-center text-xs font-bold text-slate-400">{index + 1}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-mist">
                      <Image
                        src={asset.image}
                        alt={asset.name}
                        width={44}
                        height={44}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <span className="text-sm font-extrabold text-champion-navy">{asset.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  {meta ? (
                    <TypeBadgeList type={meta.types.join(" / ")} />
                  ) : (
                    <span className="text-xs text-slate-400">—</span>
                  )}
                </td>
                <td className="hidden px-3 py-3 text-center sm:table-cell">
                  {meta?.usage !== undefined ? (
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-champion-blue"
                          style={{ width: `${Math.min(meta.usage, 100)}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-600">{meta.usage.toFixed(1)}%</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-300">—</span>
                  )}
                </td>
                {statLabels.map((s) => (
                  <td key={s.key} className="hidden px-3 py-3 text-center text-sm font-bold text-slate-700 md:table-cell">
                    {meta?.baseStats[s.key] ?? <span className="text-slate-300">—</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
