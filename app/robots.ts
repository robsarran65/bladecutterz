import type { MetadataRoute } from "next";

const siteUrl = "https://bladecutterz-florida.chatgpt-sites.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
