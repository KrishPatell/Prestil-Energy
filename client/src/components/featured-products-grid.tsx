import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const featuredProducts = [
  {
    id: 1,
    title: "Gas Separator-Disperser",
    subtitle: "GS5-200",
    description: "Advanced gas separator-disperser combining separation and dispersion functions for enhanced well performance in high gas content applications.",
    image: "/images/products/gas-separator-disperser-gs5-200.png",
    category: "gas-separators",
    href: "/products#gas-separator-disperser",
    specs: {
      "Type": "Separator-Disperser",
      "Model": "GS5-200",
      "Application": "High Gas Content Wells",
      "Standard": "API/ISO"
    }
  },
  {
    id: 2,
    title: "Gas Separator",
    subtitle: "GS5-200",
    description: "Gas separator for oil and gas production wells, designed to separate gas from formation fluid before it enters the pump.",
    image: "/images/products/gas-separator-gs5-200.png",
    category: "gas-separators",
    href: "/products#gas-separator",
    specs: {
      "Type": "Gas Separator",
      "Model": "GS5-200",
      "Application": "Oil & Gas Wells",
      "Standard": "API/ISO"
    }
  },
  {
    id: 3,
    title: "Hermetic Dosing Plunger Pump Units",
    subtitle: "DNP Series",
    description: "Hermetic dosing plunger pump units for precise metering of chemicals and additives in oil & gas production applications.",
    image: "/images/products/dosing-pump-dnp-2500-10.png",
    category: "dosing-pumps",
    href: "/products#dosing-pumps",
    specs: {
      "Power": "3.0 - 4.0 kW",
      "Design": "Hermetic",
      "Type": "Plunger Pump",
      "Applications": "Chemical Injection"
    }
  },
  {
    id: 4,
    title: "Hydroprotection (Protectors)",
    subtitle: "Motor Protection",
    description: "Single-housing motor protectors designed to prevent well fluid from entering the motor and compensate for pressure changes.",
    image: "/images/products/motor-single-section-103-1.png",
    category: "protection",
    href: "/products#motor-protectors",
    specs: {
      "Type": "Diaphragm & Seal",
      "Pressure Rating": "Up to 400 bar",
      "Temperature": "High resistance",
      "Integration": "Single housing"
    }
  },
  {
    id: 5,
    title: "Centrifugal Pumps",
    subtitle: "125 m³/day",
    description: "Multistage submersible centrifugal pump with rated delivery of 125 m³/day for high-volume production wells.",
    image: "/images/products/centrifugal-pump-125-1.png",
    category: "pumps",
    href: "/products#centrifugal-pump-125",
    specs: {
      "Housing Diameter": "92 mm",
      "Rated Delivery": "125 m³/day",
      "Head Range": "480-2,950 m",
      "MTTF": "17,500 hours"
    }
  },
  {
    id: 6,
    title: "Centrifugal Pumps",
    subtitle: "200 m³/day",
    description: "Multistage submersible centrifugal pump with rated delivery of 200 m³/day for maximum production applications.",
    image: "/images/products/centrifugal-pump-200-1.png",
    category: "pumps",
    href: "/products#centrifugal-pump-200",
    specs: {
      "Housing Diameter": "92 mm",
      "Rated Delivery": "200 m³/day",
      "Head Range": "290-2,400 m",
      "MTTF": "17,500 hours"
    }
  },
];

export function FeaturedProductsGrid() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Products</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="section-title mb-6">
            Submersible Equipment<br />
            <span className="text-primary">For Oil Production</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Reliable, high-performance submersible pumps and motors engineered for demanding well conditions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="h-full flex"
            >
              <Link href={product.href} className="block group w-full flex flex-col">
                <div className="bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg rounded-sm flex flex-col h-full">
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                        Products
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="card-title mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    {product.subtitle && (
                      <p className="text-primary text-sm font-medium mb-4">{product.subtitle}</p>
                    )}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                      {product.description}
                    </p>
                    
                    {/* Specifications */}
                    {product.specs && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                          <div key={key} className="bg-secondary border border-border p-2 rounded-sm">
                            <span className="text-xs text-muted-foreground/60 uppercase tracking-wider block mb-1">{key}</span>
                            <span className="text-xs text-foreground font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-4 transition-all mt-auto">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-10 text-sm rounded-sm">
              View All Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

