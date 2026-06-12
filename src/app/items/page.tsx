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
import { filterItems, itemAssets, itemCategoryOptions } from "@/data/items";
import { createPageMetadata, databasePageJsonLd } from "@/lib/seo";

const PAGE_SIZE = 100;

const pageMeta = {
  title: "Pokemon Champions Items List",
  description: "Complete list of Pokemon Champions items with descriptions and category filtering.",
  path: "/items",
  keywords: ["Pokemon Champions Items List", "Pokemon Champions Item Database", "Pokemon Champions Held Items"]
};

export const metadata: Metadata = createPageMetadata(pageMeta);

type ItemsPageProps = {
  searchParams?: {
    page?: string | string[];
    category?: string | string[];
  };
};

function scalarParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function pageNumber(value: string | string[] | undefined, totalPages: number) {
  const parsed = Number.parseInt(scalarParam(value) ?? "1", 10);
  return Math.min(Math.max(Number.isFinite(parsed) ? parsed : 1, 1), totalPages);
}

export default function ItemsListPage({ searchParams }: ItemsPageProps) {
  const category = scalarParam(searchParams?.category);
  const filteredEntries = filterItems(category);
  const totalPages = Math.max(1, Math.ceil(filteredEntries.length / PAGE_SIZE));
  const currentPage = pageNumber(searchParams?.page, totalPages);
  const startIdx = (currentPage - 1) * PAGE_SIZE;
  const entries = filteredEntries.slice(startIdx, startIdx + PAGE_SIZE);

  return (
    <PokebasePageShell
      title="Items List"
      description="Pokemon Champions item data aligned with Pokebase's current public list."
    >
      <JsonLd data={databasePageJsonLd({ ...pageMeta, itemCount: itemAssets.length })} />
      <form action="/items" className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm shadow-zinc-100">
        <label className="flex max-w-xs flex-col gap-1 text-xs font-medium text-zinc-500">
          Category
          <select
            name="category"
            defaultValue={category ?? ""}
            className="h-10 rounded-xl border border-zinc-200 bg-white px-3 text-sm text-zinc-700 shadow-sm shadow-zinc-100 outline-offset-2 focus:outline-2 focus:outline-blue-400"
          >
            <option value="">All categories</option>
            {itemCategoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="submit"
            className="rounded-xl border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm shadow-orange-100/60 transition hover:border-orange-200 hover:bg-orange-100"
          >
            Apply filters
          </button>
          <Link
            href="/items"
            className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-blue-200 hover:text-blue-600"
          >
            Clear
          </Link>
        </div>
      </form>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <PokebaseResultBar currentPage={currentPage} totalPages={totalPages} totalResults={filteredEntries.length} />
        <PokebasePagination basePath="/items" currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
      </div>

      <PokebaseTableWrap>
        <table className="w-full min-w-[760px] border-separate border-spacing-0" aria-label="Pokemon Champions items table">
          <thead>
            <tr className="bg-white">
              <th className={`${pokebaseThClass} min-w-64`}>Item</th>
              <th className={`${pokebaseThClass} min-w-96`}>Description</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((item) => (
              <tr key={item.slug} className="odd:bg-zinc-50">
                <td className={pokebaseTdClass}>
                  <div className="flex min-w-60 items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      unoptimized
                      className="h-8 w-8 object-contain"
                    />
                    <span className="min-w-0">
                      <span className="block font-semibold text-zinc-800">{item.name}</span>
                      <span className="mt-1 inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs font-semibold text-zinc-500">
                        {item.category}
                      </span>
                    </span>
                  </div>
                </td>
                <td className={`${pokebaseTdClass} max-w-3xl whitespace-pre-wrap leading-6`}>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </PokebaseTableWrap>

      <div className="mt-5 flex justify-end">
        <PokebasePagination basePath="/items" currentPage={currentPage} totalPages={totalPages} searchParams={searchParams} />
      </div>
    </PokebasePageShell>
  );
}
