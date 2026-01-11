import { Button } from "@/components/ui/button";

interface BlogCategoryFilterProps {
  categories: Array<{ id: string; label: string; count?: number }>;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogCategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: BlogCategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          variant={activeCategory === category.id ? "default" : "outline"}
          className={
            activeCategory === category.id
              ? "bg-primary hover:bg-primary/90 text-white"
              : "border-border text-foreground hover:bg-secondary"
          }
        >
          {category.label}
          {category.count !== undefined && (
            <span className="ml-2 text-xs opacity-75">({category.count})</span>
          )}
        </Button>
      ))}
    </div>
  );
}
