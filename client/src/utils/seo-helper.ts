import { blogPostsMetadata } from "@/pages/blog/blog-metadata";

export function getBlogSEO(slug: string) {
  const metadata = blogPostsMetadata.find((post) => post.slug === slug);
  if (!metadata) {
    return null;
  }

  return {
    title: metadata.metaTitle || metadata.title,
    description: metadata.metaDescription,
    keywords: metadata.keywords,
    image: metadata.heroImage,
    url: `/blog/${slug}`,
    author: metadata.author,
    publishedTime: new Date(metadata.date).toISOString(),
    modifiedTime: new Date(metadata.date).toISOString(),
  };
}
