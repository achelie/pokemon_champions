"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { mobileBottomNavItems } from "@/data/navigation";

const navMeta: Record<string, { label: string; icon: "list" | "spark" | "team" | "guides" }> = {
  "/tier-list": { label: "Tier", icon: "list" },
  "/useful-pokemon": { label: "Useful", icon: "spark" },
  "/best-teams": { label: "Teams", icon: "team" },
  "/guides": { label: "Guides", icon: "guides" }
};

function NavIcon({ icon }: { icon: "list" | "spark" | "team" | "guides" }) {
  if (icon === "list") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M8 6h12" strokeLinecap="round" />
        <path d="M8 12h12" strokeLinecap="round" />
        <path d="M8 18h12" strokeLinecap="round" />
        <path d="M4 6h.01" strokeLinecap="round" />
        <path d="M4 12h.01" strokeLinecap="round" />
        <path d="M4 18h.01" strokeLinecap="round" />
      </svg>
    );
  }

  if (icon === "spark") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" strokeLinejoin="round" />
        <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" strokeLinejoin="round" />
        <path d="M5 14l.7 1.8L7.5 16.5l-1.8.7L5 19l-.7-1.8-1.8-.7 1.8-.7L5 14z" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "guides") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M5 4.5h10.5A3.5 3.5 0 0 1 19 8v11.5H8.5A3.5 3.5 0 0 1 5 16V4.5z" strokeLinejoin="round" />
        <path d="M8 8h7" strokeLinecap="round" />
        <path d="M8 12h7" strokeLinecap="round" />
        <path d="M8.5 19.5A3.5 3.5 0 0 1 5 16" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M8.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M15.5 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M3.5 20c.6-3 2.4-5 5-5s4.4 2 5 5" strokeLinecap="round" />
      <path d="M10.5 20c.6-3 2.4-5 5-5s4.4 2 5 5" strokeLinecap="round" />
    </svg>
  );
}

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-[#cfe4f2]/90 bg-[#eafaff]/95 px-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] pt-2 shadow-[0_-10px_30px_rgba(23,32,51,0.12)] backdrop-blur-xl md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        {mobileBottomNavItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          const meta = navMeta[item.href] ?? { label: item.title, icon: "list" as const };

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`flex h-14 min-w-0 flex-col items-center justify-center gap-1 rounded-md border-2 px-1 text-[11px] font-extrabold leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champion-blue ${
                isActive
                  ? "border-champion-blue/35 bg-white text-champion-blue shadow-[0_5px_0_rgba(23,32,51,0.1)]"
                  : "border-transparent text-[#52627f] hover:bg-white/75 hover:text-champion-navy"
              }`}
            >
              <NavIcon icon={meta.icon} />
              <span className="truncate">{meta.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
