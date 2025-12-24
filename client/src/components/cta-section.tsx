import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CatalogRequestDialog } from "@/components/catalog-request-dialog";

export function CTASection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://pub-2752c63c2f67411bbfaa5eece76e2136.r2.dev/Gemini_Generated_Image_azxkxgazxkxgazxk%201.webp')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
              Ready To Partner With<br />
              Prestil Energy?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Our technical and commercial teams are available for discussions, technical clarifications, and pilot supply projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold h-14 px-10 text-sm rounded-sm">
                  Request A Quote
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 h-14 px-10 text-sm rounded-sm"
                onClick={() => setIsDialogOpen(true)}
              >
                Request Catalogue
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <CatalogRequestDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}

