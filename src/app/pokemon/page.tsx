import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { TypeBadgeList } from "@/components/TypeBadge";
import { pokemonAssets } from "@/data/pokemon";
import { getPokemonMeta } from "@/data/pokemonMeta";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";
import type { PokemonStats } from "@/types/content";

const PAGE_SIZE = 50;

const pageMeta = {
  title: "Pokémon Champions Pokémon List",
  description: "Complete list of all Pokémon available in Pokémon Champions with types, base stats, and tournament usage rates.",
  path: "/pokemon",
  keywords: ["Pokémon Champions Pokémon List", "Pokémon Champions All Pokémon", "Pokémon Champions Stats", "Pokémon Champions Usage"]
};

export const metadata: Metadata = createPageMetadata(pageMeta);

const statLabels: Array<{ key: keyof PokemonStats; label: string }> = [
  { key: "hp", label: "HP" },
  { key: "attack", label: "ATK" },
  { key: "defense", label: "DEF" },
  { key: "specialAttack", label: "SpA" },
  { key: "specialDefense", label: "SpD" },
  { key: "speed", label: "SPD" }
];

type PokemonListPageProps = {
  searchParams?: {
    page?: string | string[];
  };
};

export default function PokemonListPage({ searchParams }: PokemonListPageProps) {
  const allEntries = pokemonAssets
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

  const totalPages = Math.ceil(allEntries.length / PAGE_SIZE);
  const raw = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page;
  const currentPage = Math.min(Math.max(parseInt(raw ?? "1", 10) || 1, 1), totalPages);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const entries = allEntries.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(pageMeta)} />

      {/* Pagination top */}
      <Pagination currentPage={currentPage} totalPages={totalPages} />

      <div className="mt-4 overflow-x-auto rounded-lg border border-line bg-white shadow-sm">
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
            {entries.map(({ asset, meta }, i) => (
              <tr key={asset.id} className="transition-colors hover:bg-mist/30">
                <td className="px-3 py-3 text-center text-xs font-bold text-slate-400">{startIdx + i + 1}</td>
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

      {/* Pagination bottom */}
      <div className="mt-6">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  const pages: (number | "...")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <nav aria-label="Pokémon list pagination" className="flex items-center justify-center gap-1">
      {currentPage > 1 ? (
        <Link
          href={`/pokemon?page=${currentPage - 1}`}
          className="rounded-full px-3 py-2 text-xs font-black text-champion-navy hover:bg-mist transition"
        >
          ← Prev
        </Link>
      ) : (
        <span className="rounded-full px-3 py-2 text-xs font-black text-slate-300">← Prev</span>
      )}

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="px-1 text-xs text-slate-400">…</span>
        ) : (
          <Link
            key={p}
            href={`/pokemon?page=${p}`}
            className={`grid h-8 w-8 place-items-center rounded-full text-xs font-black transition ${
              p === currentPage
                ? "bg-champion-blue text-white"
                : "text-champion-navy hover:bg-mist"
            }`}
          >
            {p}
          </Link>
        )
      )}

      {currentPage < totalPages ? (
        <Link
          href={`/pokemon?page=${currentPage + 1}`}
          className="rounded-full px-3 py-2 text-xs font-black text-champion-navy hover:bg-mist transition"
        >
          Next →
        </Link>
      ) : (
        <span className="rounded-full px-3 py-2 text-xs font-black text-slate-300">Next →</span>
      )}
    </nav>
  );
}
