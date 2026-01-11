import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  type: "Article" | "Organization" | "WebSite" | "BreadcrumbList";
  data: Record<string, any>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "https://prestil-energy.com";
  
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  // Add organization context for articles
  if (type === "Article") {
    baseSchema.publisher = {
      "@type": "Organization",
      name: "Prestil Energy Ltd.",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
    </Helmet>
  );
}
