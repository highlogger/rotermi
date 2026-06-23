import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rotermi.com.tr";

  const staticPages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/hakkimizda", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/urun-gruplari", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/hizmetler", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/referanslar", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/iletisim", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  const trPages = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: {
      languages: {
        tr: `${baseUrl}${page.path}`,
        en: `${baseUrl}/en${page.path}`,
      },
    },
  }));

  const enPages = staticPages.map((page) => ({
    url: `${baseUrl}/en${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority * 0.9,
    alternates: {
      languages: {
        en: `${baseUrl}/en${page.path}`,
        tr: `${baseUrl}${page.path}`,
      },
    },
  }));

  return [...trPages, ...enPages];
}
