import { Card } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

interface BlogAuthorCardProps {
  author?: string;
  date?: string;
  readTime?: number;
}

export function BlogAuthorCard({
  author = "Prestil Energy India",
  date = "January 11, 2026",
  readTime,
}: BlogAuthorCardProps) {
  return (
    <Card className="p-6 border-border bg-card">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-foreground">{author}</p>
          <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {date}
            </span>
            {readTime && (
              <span>{readTime} min read</span>
            )}
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mt-4">
        Prestil Energy India represents the technical expertise and manufacturing excellence of Prestil Energy Ltd., 
        a leading manufacturer of submersible equipment for the oil and gas industry since 1995.
      </p>
    </Card>
  );
}
