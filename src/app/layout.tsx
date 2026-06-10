import type { Metadata } from "next";
import Script from "next/script";

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
  other: {
    "google-adsense-account": "ca-pub-7443237558968985",
    "geo.region": "US",
    "geo.placename": "United States"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          id="google-adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7443237558968985"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
