import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PeopleCore - The GPT of HR | AI-Native HRIS Platform",
  description: "Transform your HR operations with PeopleCore, the world's most advanced conversational AI for human resources. Automate complex workflows through natural language.",
  keywords: ["HR software", "AI HRIS", "human resources", "HR automation", "conversational AI", "workforce management"],
  authors: [{ name: "PeopleCore" }],
  creator: "PeopleCore",
  publisher: "PeopleCore",
  openGraph: {
    title: "PeopleCore - The GPT of HR",
    description: "Transform your HR operations with AI-native automation. Talk naturally, AI handles complexity.",
    url: "https://peoplecore.ai",
    siteName: "PeopleCore",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PeopleCore - AI-Native HRIS Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PeopleCore - The GPT of HR",
    description: "Transform your HR operations with AI-native automation. Talk naturally, AI handles complexity.",
    images: ["/og-image.png"],
    creator: "@peoplecore",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
