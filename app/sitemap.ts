import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // ON FORCE LE WWW ICI 👇
  const baseUrl = "https://www.nevexacars.com"; 
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/b2c`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/b2b`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/financing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/legal-notice`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}