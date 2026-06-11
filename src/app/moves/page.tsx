import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/JsonLd";
import { allMoves } from "@/data/moves";
import { getPokemonTypeMeta } from "@/data/types";
import { articleJsonLd, createPageMetadata } from "@/lib/seo";

const pageMeta = {
  title: "Pokémon Champions Moves List",
  description: "Complete list of all moves available in Pokémon Champions with their types.",
  path: "/moves",
  keywords: ["Pokémon Champions Moves List", "Pokémon Champions All Moves", "Pokémon Champions Move Types"]
};

export const metadata: Metadata = createPageMetadata(pageMeta);

const PAGE_SIZE = 50;

type MovesPageProps = {
  searchParams?: { page?: string | string[] };
};

export default function MovesListPage({ searchParams }: MovesPageProps) {
  const sorted = [...allMoves].sort((a, b) => a.name.localeCompare(b.name));

  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const raw = Array.isArray(searchParams?.page) ? searchParams.page[0] : searchParams?.page;
  const currentPage = Math.min(Math.max(parseInt(raw ?? "1", 10) || 1, 1), totalPages);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const entries = sorted.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(pageMeta)} />

      <Pagination currentPage={currentPage} totalPages={totalPages} />

      <div className="mt-4 overflow-x-auto rounded-lg border border-line bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-line bg-mist/60 text-left">
              <th className="w-8 px-3 py-3 text-center text-xs font-black uppercase tracking-wide text-slate-500">#</th>
              <th className="px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-500">Move</th>
              <th className="px-4 py-3 text-xs font-black uppercase tracking-wide text-slate-500">Type</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {entries.map((move, i) => {
              const typeMeta = getPokemonTypeMeta(move.type);
              return (
                <tr key={move.name} className="transition-colors hover:bg-mist/30">
                  <td className="px-3 py-3 text-center text-xs font-bold text-slate-400">{startIdx + i + 1}</td>
                  <td className="px-4 py-3">
                    <span className="text-sm font-extrabold text-champion-navy">{move.name}</span>
                  </td>
                  <td className="px-4 py-3">
                    {typeMeta ? (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-black text-white shadow-sm"
                        style={{ backgroundColor: typeMeta.color }}
                      >
                        <img src={typeMeta.icon} alt={typeMeta.name} className="h-4 w-4" />
                        <span>{typeMeta.name}</span>
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

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
    <nav aria-label="Moves list pagination" className="flex items-center justify-center gap-1">
      {currentPage > 1 ? (
        <Link href={`/moves?page=${currentPage - 1}`} className="rounded-full px-3 py-2 text-xs font-black text-champion-navy hover:bg-mist transition">
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
            href={`/moves?page=${p}`}
            className={`grid h-8 w-8 place-items-center rounded-full text-xs font-black transition ${
              p === currentPage ? "bg-champion-blue text-white" : "text-champion-navy hover:bg-mist"
            }`}
          >
            {p}
          </Link>
        )
      )}
      {currentPage < totalPages ? (
        <Link href={`/moves?page=${currentPage + 1}`} className="rounded-full px-3 py-2 text-xs font-black text-champion-navy hover:bg-mist transition">
          Next →
        </Link>
      ) : (
        <span className="rounded-full px-3 py-2 text-xs font-black text-slate-300">Next →</span>
      )}
    </nav>
  );
}
