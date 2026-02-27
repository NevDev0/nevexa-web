import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/partnership",
        destination: "/",
        permanent: false,
      },
      // --- NETTOYAGE ANCIEN SITE WIX ---
      {
        // Regroupe toutes les pages de services et catalogue
        source: "/(services|catalogue|process|my-portfolio|shipping-policy|blank|contact)",
        destination: "/",
        permanent: true, // 301 : Dit à Google d'effacer ces liens
      },
      {
        // Attrape tout le dossier "category" (all-products, etc.)
        source: "/category/:path*",
        destination: "/",
        permanent: true,
      },
      {
        // Attrape tout le dossier "service-page" (vehicle-import, etc.)
        source: "/service-page/:path*",
        destination: "/",
        permanent: true,
      },
      {
        // Attrape les pages produits individuelles si elles existent
        source: "/product-page/:path*",
        destination: "/",
        permanent: true,
      }
    ];
  },
};

export default withBundleAnalyzer(nextConfig);