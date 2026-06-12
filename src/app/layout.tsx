import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Pokemon Champions Guide - Tier List, Best Teams & Beginner Tips",
    template: "%s | Pokemon Champions Guide"
  },
  description: site.description,
  applicationName: site.name,
  alternates: {
    canonical: site.url
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  openGraph: {
    title: "Pokemon Champions Guide - Tier List, Best Teams & Beginner Tips",
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pokemon Champions Guide"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokemon Champions Guide - Tier List, Best Teams & Beginner Tips",
    description: site.description,
    images: ["/og-image.png"]
  },
  other: {
    "google-adsense-account": "ca-pub-7443237558968985",
    "geo.region": "US",
    "geo.placename": "United States"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7443237558968985"
          crossOrigin="anonymous"
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=3" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=3" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png?v=3" />
        <link rel="shortcut icon" href="/favicon.ico?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192x192.png?v=3" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512x512.png?v=3" />
        <meta property="og:image" content="https://pokemetahub.com/og-image.png?v=2" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://pokemetahub.com/og-image.png?v=2" />
      </head>
      <body>
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
        <Analytics />
      </body>
    </html>
  );
}
