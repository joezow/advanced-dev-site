import { MetadataRoute } from "next";
import { portfolioProjects } from "./portfolio/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.advanceddevelopers.com.au/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.advanceddevelopers.com.au/duplex-builders-sydney",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.advanceddevelopers.com.au/custom-home-builder-sydney",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.advanceddevelopers.com.au/townhouse-developments-sydney",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.advanceddevelopers.com.au/portfolio",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.advanceddevelopers.com.au/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.advanceddevelopers.com.au/approach",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.advanceddevelopers.com.au/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...portfolioProjects.map((project) => ({
      url: `https://www.advanceddevelopers.com.au/portfolio/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}