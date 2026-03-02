import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"], // On cache juste l'API, tout le reste est visible
    },
    sitemap: "https://www.nevexacars.com/sitemap.xml",
  };
}