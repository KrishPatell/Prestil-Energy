import { ReactNode } from "react";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import { BlogTOC } from "@/components/blog/blog-toc";
import { BlogAuthorCard } from "@/components/blog/blog-author-card";
import { BlogContactForm } from "@/components/blog/blog-contact-form";
import { SEO } from "@/components/seo";
import { useLocation } from "wouter";
import { blogPostsMetadata } from "./blog-metadata";

interface BlogLayoutProps {
  children: ReactNode;
  seo?: {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
  };
  relatedProducts?: Array<{
    id: string;
    title: string;
    image: string;
    href: string;
  }>;
  relatedPosts?: Array<{
    slug: string;
    title: string;
  }>;
  author?: string;
  date?: string;
  readTime?: number;
}

export function BlogLayout({
  children,
  seo: seoProp,
  relatedProducts,
  relatedPosts,
  author,
  date,
  readTime,
}: BlogLayoutProps) {
  const [location] = useLocation();
  
  // Auto-detect SEO from metadata if not provided
  let seo = seoProp;
  if (!seo) {
    const slug = location.split("/blog/")[1]?.split("?")[0];
    const metadata = blogPostsMetadata.find((post) => post.slug === slug);
    if (metadata) {
      seo = {
        title: metadata.metaTitle || metadata.title,
        description: metadata.metaDescription,
        keywords: metadata.keywords,
        image: metadata.heroImage,
        url: `/blog/${metadata.slug}`,
        author: metadata.author,
        publishedTime: new Date(metadata.date).toISOString(),
        modifiedTime: new Date(metadata.date).toISOString(),
      };
    } else {
      // Fallback SEO
      seo = {
        title: "Blog Post | Prestil Energy",
        description: "Technical article about submersible equipment for oil & gas production.",
        keywords: ["submersible pumps", "oil production"],
        image: "/images/3d_technical_render_of_submersible_pump.png",
        url: location,
        author: author || "Prestil Energy India",
        publishedTime: date ? new Date(date).toISOString() : "2026-01-11T00:00:00Z",
      };
    }
  }
  
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://prestil-energy.com";
  const fullImageUrl = seo.image?.startsWith("http") ? seo.image : `${siteUrl}${seo.image || "/images/3d_technical_render_of_submersible_pump.png"}`;
  const fullUrl = seo.url ? `${siteUrl}${seo.url}` : (typeof window !== "undefined" ? window.location.href : siteUrl);
  
  // Create structured data for Article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: seo.title,
    description: seo.description,
    image: {
      "@type": "ImageObject",
      url: fullImageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: seo.publishedTime || date || "2026-01-11T00:00:00Z",
    dateModified: seo.modifiedTime || seo.publishedTime || date || "2026-01-11T00:00:00Z",
    author: {
      "@type": "Organization",
      name: seo.author || author || "Prestil Energy India",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Prestil Energy Ltd.",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
        width: 200,
        height: 200,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": fullUrl,
    },
    keywords: seo.keywords?.join(", ") || "",
    articleSection: "Oil & Gas Equipment",
    inLanguage: "en-US",
    wordCount: 3000,
  };

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        image={seo.image}
        url={seo.url}
        type="article"
        author={seo.author || author}
        publishedTime={seo.publishedTime || date}
        modifiedTime={seo.modifiedTime}
        canonicalUrl={seo.url}
        structuredData={structuredData}
      />
      <div className="bg-background min-h-screen text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-headings:uppercase prose-headings:font-semibold prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-strong:font-semibold prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground prose-img:rounded-sm prose-img:border prose-img:border-border">
              {children}
            </div>
            <BlogAuthorCard author={author} date={date} readTime={readTime} />
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="hidden lg:block">
              <BlogTOC />
            </div>
            <BlogSidebar relatedProducts={relatedProducts} relatedPosts={relatedPosts} />
          </aside>
        </div>

        {/* Contact Form */}
        <BlogContactForm />
      </div>
    </div>
    </>
  );
}
