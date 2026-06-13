import type { MetadataRoute } from "next";

import { guides } from "@/data/guides";
import { pokemonAssets } from "@/data/pokemon";
import { absoluteUrl } from "@/lib/site";

const databaseRoutes = ["/pokemon", "/moves", "/abilities", "/items"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-06-09");
  const entries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 1
    },
    ...guides.map((guide) => ({
      url: absoluteUrl(guide.href),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...databaseRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7
    })),
    ...pokemonAssets.map((pokemon) => ({
      url: absoluteUrl(`/pokemon/${pokemon.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];

  return entries.map((entry) => ({
    ...entry,
    lastModified: now,
  }));
}
