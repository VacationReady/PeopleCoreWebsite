import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/app/components/navigation/site-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PeopleCore - 100% Holidays Act Compliant HRIS | Built for New Zealand",
  description: "New Zealand's most advanced HRIS. Master the Holidays Act, automate KiwiSaver, ensure Fair Pay Agreement compliance. AI-native platform with Auckland data residency.",
  keywords: [
    "NZ HRIS", "New Zealand HR software", "Holidays Act compliance", "KiwiSaver management", 
    "Fair Pay Agreements", "NZ payroll", "Auckland data centre", "NZ employment law", 
    "leave management NZ", "MECA compliance", "te reo Māori HRIS", "Aotearoa HR"
  ],
  authors: [{ name: "PeopleCore NZ" }],
  creator: "PeopleCore NZ",
  publisher: "PeopleCore NZ Ltd",
  openGraph: {
    title: "PeopleCore - 100% Holidays Act Compliant | Built for NZ",
    description: "AI-native HRIS designed for New Zealand employment law. Holidays Act, KiwiSaver, Fair Pay Agreements. Data hosted in Auckland.",
    url: "https://peoplecore.co.nz",
    siteName: "PeopleCore NZ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PeopleCore - New Zealand's Most Advanced HRIS",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeopleCore - 100% Holidays Act Compliant HRIS",
    description: "Built for New Zealand employment law. Holidays Act, KiwiSaver, Fair Pay Agreements. Auckland data residency.",
    images: ["/og-image.png"],
    creator: "@peoplecore_nz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <SiteNav />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
