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
    title: "Single-Section Electric Motor",
    subtitle: "103mm Series",
    description: "Single-section submersible electric motor with 103mm outside diameter, featuring optimized stator design and enhanced thermal resistance.",
    image: "/images/products/motor-single-section-103-1.png",
    category: "motors",
    href: "/products#motor-single-103",
    specs: {
      "Outside Diameter": "103 mm",
      "Sections": "1",
      "Power Range": "12-320 kW",
      "Voltage": "350-2,300 V"
    }
  },
  {
    id: 6,
    title: "Two-Section Electric Motor",
    subtitle: "103mm Series",
    description: "Two-section submersible electric motor with 103mm outside diameter, providing increased power capacity through modular design.",
    image: "/images/products/motor-two-section-103-1.png",
    category: "motors",
    href: "/products#motor-two-103",
    specs: {
      "Outside Diameter": "103 mm",
      "Sections": "2",
      "Power Range": "Up to 640 kW",
      "Voltage": "350-2,300 V"
    }
  },
  {
    id: 7,
    title: "ESP Pump",
    subtitle: "50 m³/day",
    description: "Multistage submersible ESP pump with rated delivery of 50 m³/day for high-capacity oil production.",
    image: "/images/products/centrifugal-pump-50-1.png",
    category: "pumps",
    href: "/products#esp-pump-50",
    specs: {
      "Housing Diameter": "92 mm",
      "Rated Delivery": "50 m³/day",
      "Head Range": "560-3,450 m",
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
