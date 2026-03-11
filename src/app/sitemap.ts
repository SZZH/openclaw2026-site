import type { MetadataRoute } from "next";
import { topicCategories } from "@/data/categories";
import { enTopicCategories } from "@/data/categories-en";
import { enPosts } from "@/data/posts-en";
import { posts } from "@/data/posts";

const SITE_URL = "https://openclaw.cc";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/playbooks`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  const topicRoutes: MetadataRoute.Sitemap = topicCategories.map((topic) => ({
    url: `${SITE_URL}/topics/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/guides/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const enTopicRoutes: MetadataRoute.Sitemap = enTopicCategories.map((topic) => ({
    url: `${SITE_URL}/en/topics/${topic.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const enGuideRoutes: MetadataRoute.Sitemap = enPosts.map((post) => ({
    url: `${SITE_URL}/en/guides/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...baseRoutes,
    ...topicRoutes,
    ...guideRoutes,
    ...enTopicRoutes,
    ...enGuideRoutes,
  ];
}
