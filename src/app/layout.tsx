import type { Metadata, Viewport } from "next";
import { Public_Sans, Source_Serif_4 } from "next/font/google";
import { company } from "@/config/company";
import { defaultLocale, getContent } from "@/content";
import "./globals.css";

// Serif untuk heading (kesan institusional), sans-serif untuk body.
const serif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-serif-src",
  display: "swap",
});

const sans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-src",
  display: "swap",
});

const content = getContent(defaultLocale);
// Pratinjau di GitHub Pages tidak boleh diindeks mesin pencari.
const allowIndexing = company.allowIndexing && process.env.GITHUB_PAGES !== "true";
const title = `${company.legalName} — ${content.meta.titleSuffix}`;

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: { default: title, template: `%s | ${company.shortName}` },
  description: content.meta.description,
  keywords: content.meta.keywords,
  applicationName: company.shortName,
  authors: [{ name: company.legalName }],
  creator: company.legalName,
  publisher: company.legalName,
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: company.shortName,
    title,
    description: content.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: content.meta.description,
  },
  robots: allowIndexing
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0e2238",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={defaultLocale} className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
