import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-background text-white">
      <div className="text-center max-w-lg px-4">
        <span className="text-8xl font-display text-primary block mb-4">404</span>
        <h1 className="text-3xl font-display text-white mb-4">
          Page Not<br />
          <span className="text-primary">Found</span>
        </h1>
        <p className="text-white/60 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
