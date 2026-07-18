import type { Metadata } from "next";
import { Hanken_Grotesk, Archivo_Black } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { SITE } from "@/lib/data";

// Display: Archivo Black — monumental grotesque, reads like architectural
// signage / building nameplates. Body: Hanken Grotesk — a refined, slightly
// warm grotesque with excellent text texture. Contrast by weight + character.
const display = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const sans = Hanken_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Architecture, Interiors & Design in Hyderabad, Telangana & India`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "architects in Hyderabad",
    "interior designers in Hyderabad",
    "architects in Madhapur",
    "architects in Telangana",
    "free construction estimate Hyderabad",
    "3D architectural consultation",
    "residential architects Hyderabad",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Architecture, Interiors & Design`,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

// LocalBusiness schema — both cities. Helps Google show the studio for
// local "architects in <city>" searches.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArchitecturalService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  email: SITE.email,
  telephone: SITE.phone,
  areaServed: [
    { "@type": "State", name: "Telangana" },
    { "@type": "Country", name: "India" },
  ],
  address: SITE.cities.map((c) => ({
    "@type": "PostalAddress",
    addressLocality: c,
    addressRegion: "Telangana",
    addressCountry: "IN",
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="grain" aria-hidden />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
