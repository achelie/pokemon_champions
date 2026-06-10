import Link from "next/link";

import { guides } from "@/data/guides";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-28 pt-10 sm:px-6 md:grid-cols-[1.3fr_1fr] md:py-10">
        <div>
          <p className="font-black text-champion-navy">{site.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            A lightweight English strategy site for Pokémon Champions PvP guides, early meta notes, mobile launch prep, and team-building ideas.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            This fan guide is not affiliated with Nintendo, The Pokémon Company, Game Freak, or Creatures Inc.
          </p>
        </div>
        <div>
          <p className="text-sm font-extrabold text-champion-navy">Guides</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="hover:text-champion-blue">
                {guide.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
