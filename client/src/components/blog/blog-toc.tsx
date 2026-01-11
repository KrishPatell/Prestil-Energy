import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { List } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface BlogTOCProps {
  headings?: TOCItem[];
}

export function BlogTOC({ headings = [] }: BlogTOCProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [tocItems, setTocItems] = useState<TOCItem[]>(headings);

  useEffect(() => {
    if (headings.length === 0) {
      // Auto-generate TOC from page headings
      const headingElements = document.querySelectorAll("h2, h3");
      const items: TOCItem[] = Array.from(headingElements).map((el, index) => {
        const id = el.id || `heading-${index}`;
        if (!el.id) el.id = id;
        return {
          id,
          text: el.textContent || "",
          level: parseInt(el.tagName.charAt(1)),
        };
      });
      setTocItems(items);
    }
  }, [headings]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  if (tocItems.length === 0) return null;

  return (
    <Card className="p-6 border-border bg-card sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4 text-primary" />
        <h3 className="font-semibold text-foreground">Table of Contents</h3>
      </div>
      <nav className="space-y-2">
        {tocItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`block text-sm transition-colors ${
              item.level === 3 ? "ml-4" : ""
            } ${
              activeId === item.id
                ? "text-primary font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </Card>
  );
}
