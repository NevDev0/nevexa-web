import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL('https://nevexacars.com'),
  title: "Nevexa — Premium vehicles, from Canada to Africa",
  description:
    "Nevexa sources 2021-2026 premium vehicles from official Canadian dealerships for West African markets. Sourcing, inspection, delivery.",
  keywords: [
    "Nevexa", 
    "Premium Vehicles", 
    "Car Export Canada", 
    "North America Car Sourcing", 
    "Luxury Cars West Africa", 
    "Vehicle Import Nigeria",     
    "Off-market Cars"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main>{children}</main>
        
        {/* Vercel Monitoring */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}