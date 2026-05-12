import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";

export const metadata: Metadata = {
  title: "Body Lab — Aesthetic Clinic Tbilisi",
  description:
    "Premium aesthetic clinic in Tbilisi, Georgia. Expert treatments including lip fillers, skin rejuvenation, laser procedures, and body contouring.",
  keywords:
    "aesthetic clinic tbilisi, body lab georgia, lip fillers tbilisi, laser treatment georgia, aesthetic medicine tbilisi",
  openGraph: {
    title: "Body Lab — Aesthetic Clinic Tbilisi",
    description:
      "Premium aesthetic treatments in Tbilisi, Georgia. Book your consultation today.",
    type: "website",
    locale: "en_US",
    siteName: "Body Lab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-brand-cream text-text-dark">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
