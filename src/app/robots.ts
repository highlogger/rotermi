import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/kvkk", "/cerez-politikasi", "/gizlilik"],
    },
    sitemap: "https://rotermi.com.tr/sitemap.xml",
  };
}
