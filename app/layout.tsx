import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  // C'est très bien d'avoir mis ça
  metadataBase: new URL("https://www.nevexacars.com"),
  
  title: "Nevexa — Premium vehicles, from Canada to Africa",
  description: "Nevexa sources 2021-2026 premium vehicles from official Canadian dealerships for African markets. Sourcing, inspection, delivery.",
  keywords: ["Nevexa", "Premium Vehicles", "Car Export Canada", "North America Car Sourcing", "Luxury Cars West Africa", "Vehicle Import Nigeria", "Off-market Cars"],
  
  icons: {
    icon: "/favicon.ico",        // Vérifie que ce fichier est bien dans ton dossier 'public'
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png", // Optionnel, si tu en as un
  },

};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="bg-black">
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