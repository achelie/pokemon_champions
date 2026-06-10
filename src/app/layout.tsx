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
