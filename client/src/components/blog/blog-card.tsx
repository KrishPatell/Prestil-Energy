import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date?: string;
  readTime?: number;
  featured?: boolean;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  image,
  category,
  date = "January 11, 2026",
  readTime,
  featured = false,
}: BlogCardProps) {
  const categoryColors: Record<string, string> = {
    pumps: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    motors: "bg-green-500/10 text-green-600 border-green-500/20",
    "gas-separation": "bg-purple-500/10 text-purple-600 border-purple-500/20",
    "integrated-solutions": "bg-orange-500/10 text-orange-600 border-orange-500/20",
    maintenance: "bg-red-500/10 text-red-600 border-red-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${slug}`}>
        <Card className="border-border bg-card overflow-hidden group hover:border-primary/30 transition-all hover:shadow-lg cursor-pointer h-full flex flex-col">
          <div className="relative aspect-video overflow-hidden bg-muted">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {featured && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-primary text-white text-xs font-semibold uppercase">
                  Featured
                </span>
              </div>
            )}
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1 text-xs font-medium border rounded-sm ${
                  categoryColors[category] || "bg-gray-500/10 text-gray-600 border-gray-500/20"
                }`}
              >
                {category.replace("-", " ")}
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {date}
              </span>
              {readTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {readTime} min
                </span>
              )}
            </div>
            <h3 className="text-xl font-display text-foreground mb-3 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {excerpt}
            </p>
            <Button
              variant="ghost"
              className="w-full justify-between group-hover:bg-secondary"
            >
              Read More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
