import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHeader } from "@/components/PageHeader";
import { guides } from "@/data/guides";
import { createPageMetadata } from "@/lib/seo";
import type { Guide } from "@/types/content";

const page = {
  title: "Pokemon Champions Guides",
  description: "Browse every Pokemon Champions strategy guide, including tier lists, useful Pokemon, best teams, beginner tips, Pokemon HOME, mobile release notes, and Mega Raichu builds.",
  path: "/guides",
  keywords: ["Pokemon Champions Guides", "Pokemon Champions Strategy Guide", "Pokemon Champions Articles"]
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC"
});

export const metadata: Metadata = createPageMetadata(page);

function formatPublishedDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00.000Z`));
}

function GuideArticleCard({ guide, priority = false }: { guide: Guide; priority?: boolean }) {
  return (
    <Link
      href={guide.href}
      className="group grid min-w-0 overflow-hidden rounded-lg border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-champion-blue hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champion-blue"
    >
      <span className="relative grid aspect-[16/9] place-items-center overflow-hidden bg-mist">
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-champion-red via-champion-yellow to-champion-blue" aria-hidden="true" />
        <Image
          src={guide.image.src}
          alt={guide.image.alt}
          width={320}
          height={180}
          priority={priority}
          unoptimized
          className="h-full w-full object-contain p-6 transition duration-300 group-hover:scale-105"
        />
      </span>
      <span className="grid min-h-52 grid-rows-[auto_auto_1fr_auto] p-5">
        <time dateTime={guide.publishedAt} className="text-xs font-black uppercase tracking-wide text-champion-red">
          {formatPublishedDate(guide.publishedAt)}
        </time>
        <span className="mt-3 text-xl font-black leading-tight text-champion-navy">{guide.title}</span>
        <span className="mt-3 text-sm leading-6 text-slate-600">{guide.description}</span>
        <span className="mt-5 text-sm font-extrabold text-champion-blue">Read guide</span>
      </span>
    </Link>
  );
}

export default function GuidesPage() {
  return (
    <div className="bg-mist">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <PageHeader
          eyebrow="Guides"
          title="Pokemon Champions Guides"
          description="All current strategy articles in one place, with quick routes into tier planning, team building, beginner prep, Pokemon HOME, mobile launch notes, and Mega Raichu builds."
        />
        <section aria-label="Pokemon Champions guide articles" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide, index) => (
            <GuideArticleCard key={guide.href} guide={guide} priority={index < 3} />
          ))}
        </section>
      </div>
    </div>
  );
}
