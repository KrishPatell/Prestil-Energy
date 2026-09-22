import { BlogLayout } from "./blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type RelatedPost = { slug: string; title: string };

interface ConciseEspBlogProps {
  title: string;
  category: "pumps" | "motors" | "gas-separation" | "integrated-solutions" | "maintenance";
  image: string;
  product: { id: string; title: string; image: string; href: string };
  introduction: string;
  signals: string;
  actions: string;
  relatedPosts: RelatedPost[];
}

export function ConciseEspBlog({ title, category, image, product, introduction, signals, actions, relatedPosts }: ConciseEspBlogProps) {
  const faqs = [
    { question: "What is the first step?", answer: "Record a stable baseline, identify the responsible owner, and agree on the next review date." },
    { question: "What data should be checked?", answer: "Use time-aligned production, pressure, electrical, and operating-condition data rather than a single reading." },
    { question: "When should the plan change?", answer: "Review it whenever production, fluid conditions, power quality, or equipment configuration changes materially." },
    { question: "Can Prestil Energy help?", answer: "Yes. Prestil Energy can help connect well conditions, equipment selection, and practical operating limits." },
  ];

  return (
    <>
      <BlogHero title={title} image={image} category={category} date="September 2026" readTime={5} />
      <BlogLayout relatedProducts={[product]} relatedPosts={relatedPosts} author="Prestil Energy India" date="September 2026" readTime={5}>
        <div className="space-y-8">
          <h2>Why it matters</h2>
          <p>{introduction}</p>
          <h2>What to watch</h2>
          <p>{signals}</p>
          <h2>Simple actions</h2>
          <p>{actions}</p>
          <h2>Conclusion</h2>
          <p>Clear checks, simple records, and timely action help teams protect ESP run life and make better decisions.</p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Talk to Prestil Energy
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </p>
          <BlogFAQ faqs={faqs} />
        </div>
      </BlogLayout>
    </>
  );
}
