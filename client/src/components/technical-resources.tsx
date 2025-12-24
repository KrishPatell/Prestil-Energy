import { motion } from "framer-motion";
import { Download, Award, BookOpen } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const resources = [
  {
    id: 1,
    title: "Product Catalog",
    description: "Complete product catalog with specifications, dimensions, and performance data for all submersible equipment.",
    type: "PDF",
    size: "12.5 MB",
    icon: BookOpen,
    href: "https://pub-2752c63c2f67411bbfaa5eece76e2136.r2.dev/Catalogue%20-%20Submersible%20Equipment%20for%20Oil%20Production.pdf",
    download: true,
  },
  {
    id: 2,
    title: "ISO Compliance Certificates",
    description: "Combined PDF with all current ISO compliance certificates for Prestil Energy Ltd.",
    type: "PDF",
    size: "1.2 MB",
    icon: Award,
    href: "https://pub-2752c63c2f67411bbfaa5eece76e2136.r2.dev/certificates.pdf",
    download: true,
  },
];

export function TechnicalResources() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Resources</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="section-title mb-6">
            Technical Resources<br />
            <span className="text-primary">& Downloads</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Access comprehensive technical documentation, product catalogs, and certification materials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-card border border-border p-6 hover:border-primary/30 transition-colors group hover:shadow-lg flex flex-col"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display text-foreground mb-3 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {resource.description}
              </p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{resource.type}</span>
                <span className="text-xs text-muted-foreground">{resource.size}</span>
              </div>
              <a 
                href={resource.href} 
                download={resource.download ? resource.href.split('/').pop() : undefined}
                target={resource.download ? undefined : "_blank"}
                rel={resource.download ? undefined : "noopener noreferrer"}
                className="block"
              >
                <Button className="w-full bg-secondary border border-border text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all group/btn">
                  <Download className="mr-2 w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                  Download
                </Button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary rounded-sm">
              Request Additional Documentation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

