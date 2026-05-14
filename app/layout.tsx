import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.advanceddevelopers.com.au"),
  alternates: {
    canonical: "https://www.advanceddevelopers.com.au",
  },
  verification: {
  google: "gF2oWiym8GaKAnqi",
},
  title: "Advanced Developers | Builder & Property Developer Sydney",
  description:
    "Licensed NSW builder delivering architect-designed homes, duplexes and multi-dwelling developments across Sydney and the Central Coast.",

  keywords: [
    "builder Sydney",
    "duplex builder Sydney",
    "custom home builder Sydney",
    "townhouse development builder",
    "Central Coast builder",
    "residential property developer NSW",
  ],

  openGraph: {
    title: "Advanced Developers",
    description:
      "Residential projects developed and delivered across Sydney and the Central Coast.",
    url: "https://www.advanceddevelopers.com.au",
    siteName: "Advanced Developers",
    images: [
      {
        url: "https://www.advanceddevelopers.com.au/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_AU",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Advanced Developers",
    description: "Architect-designed homes, duplexes and multi-dwelling projects.",
    images: ["https://www.advanceddevelopers.com.au/hero.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
