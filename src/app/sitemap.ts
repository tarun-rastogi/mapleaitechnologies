import type { MetadataRoute } from "next";

const siteUrl = "https://mapleaitechnologies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/agent-studio",
    "/services",
    "/portfolio",
    "/case-studies",
    "/about",
    "/blog",
    "/contact",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.8,
  }));
}
