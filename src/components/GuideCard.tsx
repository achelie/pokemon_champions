import Link from "next/link";

import type { Guide } from "@/types/content";

type GuideCardProps = {
  guide: Guide;
};

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="group relative rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-champion-blue hover:shadow-soft">
      <h3 className="text-lg font-black text-champion-navy">
        <Link href={guide.href} className="after:absolute after:inset-0">
          {guide.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{guide.description}</p>
      <p className="mt-4 text-sm font-extrabold text-champion-blue">Read guide</p>
    </article>
  );
}
