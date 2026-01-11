import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";

interface BlogHeroProps {
  title: string;
  image: string;
  category: string;
  date?: string;
  readTime?: number;
  author?: string;
}

export function BlogHero({
  title,
  image,
  category,
  date = "January 11, 2026",
  readTime,
  author = "Prestil Energy India",
}: BlogHeroProps) {
  const categoryColors: Record<string, string> = {
    pumps: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    motors: "bg-green-500/10 text-green-600 border-green-500/20",
    "gas-separation": "bg-purple-500/10 text-purple-600 border-purple-500/20",
    "integrated-solutions": "bg-orange-500/10 text-orange-600 border-orange-500/20",
    maintenance: "bg-red-500/10 text-red-600 border-red-500/20",
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-secondary border-b border-border">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/95 to-secondary" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span
              className={`px-3 py-1 text-xs font-medium border rounded-sm ${
                categoryColors[category] || "bg-gray-500/10 text-gray-600 border-gray-500/20"
              }`}
            >
              {category.replace("-", " ")}
            </span>
          </div>
          <h1 className="page-hero-title mb-6">{title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            {readTime && (
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {readTime} min read
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
