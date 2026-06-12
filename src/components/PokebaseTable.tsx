import Link from "next/link";
import type { ReactNode } from "react";

type SearchParams = Record<string, string | string[] | undefined>;

const databaseTabs = [
  { href: "/pokemon", label: "Pokemon" },
  { href: "/moves", label: "Moves" },
  { href: "/abilities", label: "Abilities" },
  { href: "/items", label: "Items" }
] as const;

export function PokebasePageShell({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 font-geist text-zinc-700 sm:px-6">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Pokemon Champions</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-normal text-zinc-900">{title}</h1>
          {description ? <p className="mt-1 max-w-2xl text-sm leading-6 text-zinc-600">{description}</p> : null}
        </div>
      </div>
      <nav aria-label="Pokemon Champions database" className="mb-5 flex flex-wrap gap-2">
        {databaseTabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="rounded-xl border border-zinc-200 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-700 shadow-sm shadow-zinc-100 transition hover:border-blue-200 hover:text-blue-600"
          >
            {tab.label}
          </Link>
        ))}
      </nav>
      {children}
    </div>
  );
}

export function PokebaseTableWrap({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm shadow-zinc-100">
      {children}
    </div>
  );
}

export const pokebaseThClass =
  "whitespace-nowrap border-b border-zinc-200 px-2 py-2 text-left text-xs font-semibold text-zinc-500";

export const pokebaseTdClass = "align-middle px-2 py-2 text-sm text-zinc-700";

export function PokebaseResultBar({
  currentPage,
  totalPages,
  totalResults
}: {
  currentPage: number;
  totalPages: number;
  totalResults: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-700">
      <div className="inline-flex items-center gap-1 rounded-xl border border-orange-100 bg-orange-50 px-3 py-1.5 shadow-sm shadow-orange-100/60">
        <span className="font-semibold">{currentPage}</span>
        <span className="text-zinc-500">of</span>
        <span className="font-semibold">{totalPages}</span>
      </div>
      <span className="mx-1 size-1 rounded-full bg-zinc-300" />
      <div className="inline-flex items-center gap-1">
        <span>{totalResults}</span>
        <span className="text-zinc-500">results</span>
      </div>
    </div>
  );
}

function scalarParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function pageHref(basePath: string, searchParams: SearchParams | undefined, page: number) {
  const params = new URLSearchParams();

  for (const [key, rawValue] of Object.entries(searchParams ?? {})) {
    if (key === "page") continue;
    const value = scalarParam(rawValue);
    if (value) params.set(key, value);
  }

  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `${basePath}?${query}` : basePath;
}

export function PokebasePagination({
  basePath,
  currentPage,
  totalPages,
  searchParams
}: {
  basePath: string;
  currentPage: number;
  totalPages: number;
  searchParams?: SearchParams;
}) {
  const previousPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center gap-2">
      <Link
        href={pageHref(basePath, searchParams, previousPage)}
        aria-disabled={currentPage === 1}
        className={`rounded-xl border px-3 py-1.5 text-sm font-medium transition ${
          currentPage === 1
            ? "pointer-events-none border-zinc-100 bg-zinc-50 text-zinc-300"
            : "border-zinc-200 bg-white text-zinc-700 hover:border-blue-200 hover:text-blue-600"
        }`}
      >
        Prev
      </Link>
      <Link
        href={pageHref(basePath, searchParams, nextPage)}
        aria-disabled={currentPage === totalPages}
        className={`rounded-xl border px-3 py-1.5 text-sm font-medium transition ${
          currentPage === totalPages
            ? "pointer-events-none border-zinc-100 bg-zinc-50 text-zinc-300"
            : "border-zinc-200 bg-white text-zinc-700 hover:border-blue-200 hover:text-blue-600"
        }`}
      >
        Next
      </Link>
    </nav>
  );
}
