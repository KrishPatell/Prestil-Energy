import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogCategoryFilter } from "@/components/blog/blog-category-filter";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { blogPostsMetadata } from "./blog-metadata";
import { SEO } from "@/components/seo";

// Convert metadata to blog posts format for BlogCard component
const blogPosts = blogPostsMetadata.map((meta) => ({
  slug: meta.slug,
  title: meta.title,
  excerpt: meta.excerpt,
  image: meta.heroImage,
  category: meta.category,
  date: meta.date,
  readTime: meta.readTime,
}));

const categories = [
  { id: "all", label: "All Posts", count: 35 },
  { id: "pumps", label: "Pumps", count: 10 },
  { id: "motors", label: "Motors", count: 10 },
  { id: "gas-separation", label: "Gas Separation", count: 5 },
  { id: "integrated-solutions", label: "Integrated Solutions", count: 5 },
  { id: "maintenance", label: "Maintenance", count: 5 },
];

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "all" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Create structured data for Blog listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Prestil Energy Technical Blog",
    description: "Comprehensive guides, technical insights, and best practices for submersible equipment in oil and gas production.",
    url: typeof window !== "undefined" ? window.location.href : "https://prestil-energy.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Prestil Energy Ltd.",
      logo: {
        "@type": "ImageObject",
        url: "https://prestil-energy.com/logo.png",
      },
    },
    blogPost: blogPostsMetadata.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: `https://prestil-energy.com/blog/${post.slug}`,
      datePublished: new Date(post.date).toISOString(),
      author: {
        "@type": "Organization",
        name: post.author,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Technical Blog | Oil & Gas Equipment Insights | Prestil Energy"
        description="Comprehensive guides, technical insights, and best practices for submersible equipment in oil and gas production. Expert articles on pumps, motors, gas separation, and maintenance."
        keywords={[
          "submersible pumps blog",
          "oil production articles",
          "ESP systems guide",
          "artificial lift resources",
          "oil and gas equipment",
          "technical articles",
          "pump maintenance",
          "motor technology",
        ]}
        image="/images/3d_technical_render_of_submersible_pump.png"
        url="/blog"
        structuredData={structuredData}
      />
      <div className="bg-background min-h-screen text-foreground">
        {/* Hero */}
        <section className="relative py-32 overflow-hidden bg-secondary">
          <div className="absolute inset-0 tech-grid-bg opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                  Resources & Insights
                </span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h1 className="page-hero-title mb-6">
                Technical<br />
                <span className="text-primary">Blog</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Comprehensive guides, technical insights, and best practices for submersible equipment 
                in oil and gas production.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b border-border bg-card sticky top-20 z-30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <BlogCategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <>
                <div className="mb-8 text-sm text-muted-foreground">
                  Showing {filteredPosts.length} of {blogPosts.length} articles
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <BlogCard key={post.slug} {...post} featured={index === 0 && activeCategory === "all"} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  {searchQuery
                    ? `No articles found matching "${searchQuery}"`
                    : "No articles found in this category"}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
