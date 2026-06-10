import Link from "next/link";

import { headerNavItems } from "@/data/navigation";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6 sm:py-3" aria-label="Main navigation">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-black text-champion-navy">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-champion-navy bg-champion-yellow text-xs sm:h-8 sm:w-8 sm:text-sm">
            PC
          </span>
          <span className="truncate text-sm leading-tight sm:hidden">Pokemon Champions</span>
          <span className="hidden leading-tight sm:inline">{site.name}</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {headerNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-slate-700 hover:bg-mist hover:text-champion-blue"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <Link
          href="/mobile-release"
          className="shrink-0 rounded-full bg-champion-red px-3 py-1.5 text-xs font-extrabold text-white shadow-sm hover:bg-red-700 sm:py-2 sm:text-sm"
        >
          <span className="sm:hidden">Launch</span>
          <span className="hidden sm:inline">Mobile Launch</span>
        </Link>
      </nav>
    </header>
  );
}
