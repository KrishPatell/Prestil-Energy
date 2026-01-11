import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: Record<string, any>;
}

export function SEO({
  title,
  description,
  keywords = [],
  image = "/images/3d_technical_render_of_submersible_pump.png",
  url,
  type = "website",
  author = "Prestil Energy India",
  publishedTime,
  modifiedTime,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://prestil-energy.com";
    const fullUrl = url ? `${siteUrl}${url}` : (typeof window !== "undefined" ? window.location.href : siteUrl);
    const fullImageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
    const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : fullUrl;
    const robotsContent = `${noindex ? "noindex" : "index"}, ${nofollow ? "nofollow" : "follow"}`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement("link");
        element.rel = rel;
        document.head.appendChild(element);
      }
      element.href = href;
    };

    // Update title
    document.title = title;

    // Primary Meta Tags
    updateMetaTag("title", title);
    updateMetaTag("description", description);
    if (keywords.length > 0) {
      updateMetaTag("keywords", keywords.join(", "));
    }
    updateMetaTag("author", author);
    updateMetaTag("robots", robotsContent);
    updateLinkTag("canonical", canonical);

    // Open Graph / Facebook
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", fullImageUrl, true);
    updateMetaTag("og:site_name", "Prestil Energy Ltd.", true);
    if (author) {
      updateMetaTag("article:author", author, true);
    }
    if (publishedTime) {
      updateMetaTag("article:published_time", publishedTime, true);
    }
    if (modifiedTime) {
      updateMetaTag("article:modified_time", modifiedTime, true);
    }

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:url", fullUrl);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", fullImageUrl);
    updateMetaTag("twitter:creator", "@prestilenergy");
    updateMetaTag("twitter:site", "@prestilenergy");

    // Additional SEO
    updateMetaTag("theme-color", "#E5472E");
    updateMetaTag("apple-mobile-web-app-capable", "yes");
    updateMetaTag("apple-mobile-web-app-status-bar-style", "black-translucent");
    updateMetaTag("format-detection", "telephone=no");
    updateMetaTag("content-language", "en");

    // Language alternate
    updateLinkTag("alternate", fullUrl);
    const hreflang = document.querySelector('link[hreflang="en"]') as HTMLLinkElement;
    if (hreflang) {
      hreflang.href = fullUrl;
    } else {
      const langLink = document.createElement("link");
      langLink.rel = "alternate";
      langLink.hreflang = "en";
      langLink.href = fullUrl;
      document.head.appendChild(langLink);
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      // Remove existing structured data script
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, image, url, type, author, publishedTime, modifiedTime, canonicalUrl, noindex, nofollow, structuredData]);

  return null;
}
