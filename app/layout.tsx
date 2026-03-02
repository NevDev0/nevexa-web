import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  // ✅ BASE URL : Indispensable pour que les images s'affichent sur les réseaux
  metadataBase: new URL("https://www.nevexacars.com"),
  
  // ✅ TITRE DYNAMIQUE :
  // Sur la home : "Nevexa — Premium vehicles..."
  // Sur les autres pages : "Financing | Nevexa" (automatique)
  title: {
    default: "Nevexa — Premium vehicles, from Canada to Africa",
    template: "%s | Nevexa", 
  },

  description: "Nevexa sources 2021-2026 premium vehicles from official Canadian dealerships for African markets. Sourcing, inspection, delivery.",
  
  // ✅ MOTS-CLÉS : Mixte Anglais (contenu) + Français (marché cible)
  keywords: [
    "Nevexa", 
    "Premium Vehicles", 
    "Car Export Canada", 
    "North America Car Sourcing", 
    "Luxury Cars West Africa", 
    "Vehicle Import Nigeria", 
    "Off-market Cars",
    "Import voiture Canada",
    "Mandataire auto Canada Afrique",
    "Export véhicule Sénégal",
    "Voiture de luxe Côte d'Ivoire"
  ],
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png", 
  },

  // ✅ RESEAUX SOCIAUX (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    title: "Nevexa — Premium vehicles, from Canada to Africa",
    description: "Sourcing and delivering 2021-2026 premium vehicles from Canada to African markets.",
    url: "https://www.nevexacars.com",
    siteName: "Nevexa",
    images: [
      {
        url: "/opengraph-image.jpg", // Ton image dans le dossier public
        width: 1200,
        height: 630,
        alt: "Nevexa Premium Cars Import",
      },
    ],
    locale: "en_US", // Contenu principal en anglais
    type: "website",
  },

  // ✅ TWITTER / X
  twitter: {
    card: "summary_large_image",
    title: "Nevexa — Premium vehicles, from Canada to Africa",
    description: "Sourcing and delivering 2021-2026 premium vehicles from Canada to African markets.",
    images: ["/opengraph-image.jpg"], 
  },

  // ✅ ROBOTS : On ouvre les vannes pour Google
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
    // J'ai mis lang="en" car le texte de ton site est majoritairement en anglais
    <html lang="en" className="bg-black">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <main>{children}</main>
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}