import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
} from "@/lib/site";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | Eta Kappa Chapter",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Alpha Phi Alpha",
    "Eta Kappa Chapter",
    "Louisiana Tech",
    "LA Tech Alphas",
    "Black Greek Letter Organization",
    "Divine Nine",
    "NPHC",
    "Ruston Louisiana",
  ],
  authors: [{ name: "Eta Kappa Chapter of Alpha Phi Alpha Fraternity, Inc." }],
  creator: "Eta Kappa Chapter of Alpha Phi Alpha Fraternity, Inc.",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_TAGLINE,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="bg-ink text-bone antialiased">{children}</body>
    </html>
  );
}
