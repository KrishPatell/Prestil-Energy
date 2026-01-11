import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ArrowRight, Mail, Phone } from "lucide-react";
import { CatalogRequestDialog } from "@/components/catalog-request-dialog";
import { useState } from "react";

interface BlogSidebarProps {
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
}

export function BlogSidebar({ relatedProducts = [], relatedPosts = [] }: BlogSidebarProps) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  return (
    <aside className="space-y-6">
      {/* Quick Contact Card */}
      <Card className="p-6 border-border bg-card">
        <h3 className="text-lg font-display text-foreground mb-4">Quick Contact</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Need immediate assistance? Contact our technical team.
        </p>
        <div className="space-y-3">
          <a
            href="tel:+919824054002"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <span>+91 9824054002</span>
          </a>
          <a
            href="mailto:energy.apatel@gmail.com"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <span>energy.apatel@gmail.com</span>
          </a>
          <a
            href="mailto:hi@kpatel.xyz"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <span>hi@kpatel.xyz</span>
          </a>
        </div>
        <Link href="/contact" className="mt-4 block">
          <Button variant="outline" className="w-full border-border text-foreground hover:bg-secondary">
            Full Contact Form
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </Card>

      {/* Download Catalog */}
      <Card className="p-6 border-border bg-card">
        <h3 className="text-lg font-display text-foreground mb-4">Product Catalog</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Download our complete product catalog with technical specifications.
        </p>
        <Button
          onClick={() => setIsCatalogOpen(true)}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          <Download className="mr-2 w-4 h-4" />
          Download Catalog
        </Button>
      </Card>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Card className="p-6 border-border bg-card">
          <h3 className="text-lg font-display text-foreground mb-4">Related Products</h3>
          <div className="space-y-4">
            {relatedProducts.map((product) => (
              <Link key={product.id} href={product.href}>
                <div className="flex items-center gap-4 p-3 border border-border rounded-sm hover:border-primary/30 transition-colors cursor-pointer group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-sm"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/products" className="mt-4 block">
            <Button variant="outline" className="w-full border-border text-foreground hover:bg-secondary">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </Card>
      )}

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Card className="p-6 border-border bg-card">
          <h3 className="text-lg font-display text-foreground mb-4">Related Articles</h3>
          <ul className="space-y-3">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-start gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span>{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <CatalogRequestDialog open={isCatalogOpen} onOpenChange={setIsCatalogOpen} />
    </aside>
  );
}
