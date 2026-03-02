import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google"; // ✅ L'import est là
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nevexacars.com"),
  
  title: {
    default: "Nevexa — Premium vehicles, from Canada to Africa",
    template: "%s | Nevexa", 
  },

  description: "Nevexa sources 2021-2026 premium vehicles from official Canadian dealerships for African markets. Sourcing, inspection, delivery.",
  
  keywords: [
    "Nevexa", "Premium Vehicles", "Car Export Canada", "North America Car Sourcing", 
    "Luxury Cars West Africa", "Vehicle Import Nigeria", "Off-market Cars",
    "Import voiture Canada", "Mandataire auto Canada Afrique", "Export véhicule Sénégal"
  ],
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png", 
  },

  openGraph: {
    title: "Nevexa — Premium vehicles, from Canada to Africa",
    description: "Sourcing and delivering 2021-2026 premium vehicles from Canada to African markets.",
    url: "https://www.nevexacars.com",
    siteName: "Nevexa",
    images: [
      {
        url: "/opengraph-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Nevexa Premium Cars Import",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nevexa — Premium vehicles, from Canada to Africa",
    description: "Sourcing and delivering 2021-2026 premium vehicles from Canada to African markets.",
    images: ["/opengraph-image.jpg"], 
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <main>{children}</main>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
        
        {/* ✅ Ton Analytics est configuré ici avec le bon ID */}
        <GoogleAnalytics gaId="G-HPHS5FN0SK" /> 
      </body>
    </html>
  );
}