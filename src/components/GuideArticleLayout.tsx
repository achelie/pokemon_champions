import Image from "next/image";
import Link from "next/link";
import { Children, type ReactNode } from "react";

import { guides } from "@/data/guides";

export type GuideTableOfContentsItem = {
  id: string;
  title: string;
  depth?: 2 | 3;
};

type GuideArticleLayoutProps = {
  currentHref: string;
  tableOfContents: GuideTableOfContentsItem[];
  children: ReactNode;
  relatedLimit?: number;
};

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00.000Z`));
}

function TableOfContents({ items }: { items: GuideTableOfContentsItem[] }) {
  return (
    <nav
      aria-label="Guide table of contents"
      className="rounded-lg border border-line bg-white p-5 shadow-sm"
    >
      <p className="text-xl font-black text-champion-navy">Table of contents</p>
      <ol className="mt-4 space-y-3 text-sm font-bold text-slate-600">
        {items.map((item) => (
          <li key={item.id} className={item.depth === 3 ? "pl-4" : undefined}>
            <Link href={`#${item.id}`} className="transition hover:text-champion-blue">
              {item.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function GuideArticleLayout({ currentHref, tableOfContents, children, relatedLimit = 3 }: GuideArticleLayoutProps) {
  const relatedGuides = guides.filter((guide) => guide.href !== currentHref).slice(0, relatedLimit);
  const childArray = Children.toArray(children);
  const mobileLeadCount = Math.min(2, childArray.length);
  const mobileLeadChildren = childArray.slice(0, mobileLeadCount);
  const mobileBodyChildren = childArray.slice(mobileLeadCount);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
        <main className="min-w-0">
          {mobileLeadChildren}
          <div className="mb-8 lg:hidden">
            <TableOfContents items={tableOfContents} />
          </div>
          {mobileBodyChildren}
          <section className="mt-14" aria-label="Read related articles">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-champion-navy sm:text-4xl">Read related articles</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Keep building better Pokemon Champions teams with more guide coverage.
              </p>
            </div>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {relatedGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-champion-blue hover:shadow-soft"
                >
                  <div className="relative aspect-[16/9] bg-mist">
                    <Image
                      src={guide.image.src}
                      alt={guide.image.alt}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 768px) 33vw, 100vw"
                      unoptimized
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="border-t border-line p-4">
                    <time dateTime={guide.publishedAt} className="text-xs font-black uppercase tracking-wide text-slate-500">
                      {formatPublishedDate(guide.publishedAt)}
                    </time>
                    <h3 className="mt-2 line-clamp-2 text-base font-black leading-snug text-champion-navy group-hover:text-champion-blue">
                      {guide.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{guide.description}</p>
                    <span className="mt-4 inline-flex text-sm font-black text-champion-blue">Read guide</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>
        <aside className="sticky top-24 hidden lg:block">
          <TableOfContents items={tableOfContents} />
        </aside>
      </div>
    </div>
  );
}
