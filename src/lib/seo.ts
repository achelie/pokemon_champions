import type { Metadata } from "next";

import type { FAQItem } from "@/types/content";
import { absoluteUrl, site } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

type ArticleJsonLdInput = MetadataInput & {
  datePublished?: string;
  dateModified?: string;
};

type DatabasePageJsonLdInput = Pick<MetadataInput, "title" | "description" | "path"> & {
  itemCount: number;
};

type PokemonDetailJsonLdInput = {
  slug: string;
  name: string;
  image: string;
  usage: number;
  generation: string;
  abilities: string[];
};

export function createPageMetadata({ title, description, path, keywords = [], image }: MetadataInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : undefined;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: "article",
      ...(imageUrl ? { images: [imageUrl] } : {})
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {})
    }
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  image,
  datePublished = "2026-06-09",
  dateModified = datePublished
}: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    ...(image ? { image: absoluteUrl(image) } : {}),
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "Organization",
      name: site.name
    },
    mainEntityOfPage: absoluteUrl(path),
    datePublished,
    dateModified
  };
}

export function databasePageJsonLd({ title, description, path, itemCount }: DatabasePageJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url
    },
    mainEntity: {
      "@type": "ItemList",
      name: title,
      numberOfItems: itemCount
    }
  };
}

export function pokemonDetailJsonLd(pokemon: PokemonDetailJsonLdInput) {
  const url = absoluteUrl(`/pokemon/${pokemon.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${pokemon.name} Pokemon Champions Data`,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url
    },
    mainEntity: {
      "@type": "Thing",
      name: pokemon.name,
      image: absoluteUrl(pokemon.image),
      url,
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Usage",
          value: `${pokemon.usage}%`
        },
        {
          "@type": "PropertyValue",
          name: "Generation",
          value: pokemon.generation
        },
        {
          "@type": "PropertyValue",
          name: "Abilities",
          value: pokemon.abilities.join(", ")
        }
      ]
    }
  };
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}
