import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://leonhebeisen.com",
      lastModified: new Date(),
    },
  ];
}
