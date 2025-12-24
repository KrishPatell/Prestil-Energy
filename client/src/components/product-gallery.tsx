import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "wouter";

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

export function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  // Responsive items per page: 3 on mobile/tablet, 5 on desktop
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 5; // lg screens and up - show 5 products
      return 3; // mobile and tablet - show 3 products
    }
    return 3;
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Update items per page on resize
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentIndex(0); // Reset to first page on resize
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const totalPages = Math.ceil(featuredProducts.length / itemsPerPage);
  const currentProducts = featuredProducts.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage >= featuredProducts.length ? 0 : prev + itemsPerPage));
    setExpandedCard(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage < 0 ? featuredProducts.length - itemsPerPage : prev - itemsPerPage));
    setExpandedCard(null);
  };

  const toggleExpand = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-12 flex-wrap gap-8">
          <div className="flex-1" style={{ maxWidth: '1200px' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Products</span>
            </div>
            <h2 className="section-title mb-6">
              Durable Submersible<br />
              <span className="text-primary">Solutions</span><br />
              Engineered To Perform
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mt-4">
              Advanced submersible equipment crafted to enhance productivity and operational reliability in oil & gas production.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2 ml-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-border bg-background hover:bg-accent flex items-center justify-center transition-colors group"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5 text-primary-foreground" />
            </button>
          </div>
        </div>

        {/* Product Cards Grid - Responsive: 3 on mobile/tablet, 5 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {currentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-card border border-border rounded-sm overflow-hidden group cursor-pointer transition-all duration-300 ${
                expandedCard === product.id ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              onClick={() => toggleExpand(product.id)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Expand Icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                    {product.category === 'gas-separators' ? 'Products' : 
                     product.category === 'dosing-pumps' ? 'Products' :
                     product.category === 'protection' ? 'Products' : 'Products'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="card-title mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                {product.subtitle && (
                  <p className="text-primary text-sm font-medium mb-4">{product.subtitle}</p>
                )}
                
                {expandedCard === product.id ? (
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                    
                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                      {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-xs text-muted-foreground/60 uppercase tracking-wider block mb-1">{key}</span>
                          <span className="text-sm text-foreground font-medium">{value}</span>
                        </div>
                      ))}
                    </div>

                    <Link href={product.href}>
                      <button className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-sm transition-colors">
                        View Details
                      </button>
                    </Link>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm line-clamp-2">{product.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index * itemsPerPage);
                setExpandedCard(null);
              }}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / itemsPerPage) === index
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
