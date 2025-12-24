import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FeaturedProductsGrid } from "@/components/featured-products-grid";
import { CTASection } from "@/components/cta-section";
import { TechnicalResources } from "@/components/technical-resources";
import { CatalogRequestDialog } from "@/components/catalog-request-dialog";

// Real product images from KHEMZ-IPEC
const pumpImage = "/images/products/centrifugal-pump-25-1.png";
const motorImage = "/images/products/motor-single-section-103-1.png";
const gasSeparatorImage = "/images/products/gas-separator-gs5-200.png";
const gasSeparatorDisperserImage = "/images/products/gas-separator-disperser-gs5-200.png";
const dosingPumpImage = "/images/products/dosing-pump-dnp-2500-10.png";

const productCategories = [
  { id: "all", label: "All Products" },
  { id: "pumps", label: "Centrifugal Pumps" },
  { id: "motors", label: "Electric Motors" },
  { id: "gas-separators", label: "Gas Separators" },
  { id: "dosing-pumps", label: "Dosing Pumps" },
  { id: "protection", label: "Motor Protection" },
  { id: "esp", label: "ESP Solutions" },
];

const products = [
  {
    id: 1,
    category: "pumps",
    title: "Submersible\nCentrifugal Pump 25 m³/day",
    subtitle: "Ø92mm Series",
    description: "Multistage submersible centrifugal pump with rated delivery of 25 m³/day for efficient lifting of formation fluid from oil wells.",
    image: "/images/products/centrifugal-pump-25-1.png",
    specs: [
      { label: "Housing Diameter", value: "92 mm" },
      { label: "Rated Delivery", value: "25 m³/day" },
      { label: "Head Range", value: "600-3,600 m" },
      { label: "Mean Time to Failure", value: "17,500 hours" },
    ],
    features: [
      "Standard, heat-resistant, wear-resistant variants",
      "Check valve and drain valve included",
      "Modular section design",
      "5-year mean service life",
    ],
  },
  {
    id: 13,
    category: "pumps",
    title: "Submersible\nCentrifugal Pump 30 m³/day",
    subtitle: "Ø92mm Series",
    description: "Multistage submersible centrifugal pump with rated delivery of 30 m³/day for efficient oil lifting applications.",
    image: "/images/products/centrifugal-pump-30-1.png",
    specs: [
      { label: "Housing Diameter", value: "92 mm" },
      { label: "Rated Delivery", value: "30 m³/day" },
      { label: "Head Range", value: "530-3,250 m" },
      { label: "Mean Time to Failure", value: "17,500 hours" },
    ],
    features: [
      "Optimized for medium-capacity wells",
      "High efficiency design",
      "Modular construction",
      "Long service life",
    ],
  },
  {
    id: 14,
    category: "pumps",
    title: "Submersible\nCentrifugal Pump 50 m³/day",
    subtitle: "Ø92mm Series",
    description: "Multistage submersible centrifugal pump with rated delivery of 50 m³/day for high-capacity oil production.",
    image: "/images/products/centrifugal-pump-50-1.png",
    specs: [
      { label: "Housing Diameter", value: "92 mm" },
      { label: "Rated Delivery", value: "50 m³/day" },
      { label: "Head Range", value: "560-3,450 m" },
      { label: "Mean Time to Failure", value: "17,500 hours" },
    ],
    features: [
      "High capacity design",
      "Efficient operation",
      "Robust construction",
      "API/ISO compliant",
    ],
  },
  {
    id: 15,
    category: "pumps",
    title: "Submersible\nCentrifugal Pump 80 m³/day",
    subtitle: "Ø92mm Series",
    description: "Multistage submersible centrifugal pump with rated delivery of 80 m³/day for demanding production applications.",
    image: "/images/products/centrifugal-pump-80-1.png",
    specs: [
      { label: "Housing Diameter", value: "92 mm" },
      { label: "Rated Delivery", value: "80 m³/day" },
      { label: "Head Range", value: "580-3,600 m" },
      { label: "Mean Time to Failure", value: "17,500 hours" },
    ],
    features: [
      "High flow capacity",
      "Optimized performance",
      "Durable materials",
      "Proven reliability",
    ],
  },
  {
    id: 16,
    category: "pumps",
    title: "Submersible\nCentrifugal Pump 125 m³/day",
    subtitle: "Ø92mm Series",
    description: "Multistage submersible centrifugal pump with rated delivery of 125 m³/day for high-volume production wells.",
    image: "/images/products/centrifugal-pump-125-1.png",
    specs: [
      { label: "Housing Diameter", value: "92 mm" },
      { label: "Rated Delivery", value: "125 m³/day" },
      { label: "Head Range", value: "480-2,950 m" },
      { label: "Mean Time to Failure", value: "17,500 hours" },
    ],
    features: [
      "Very high capacity",
      "Efficient design",
      "Long-lasting performance",
      "Industry proven",
    ],
  },
  {
    id: 17,
    category: "pumps",
    title: "Submersible\nCentrifugal Pump 200 m³/day",
    subtitle: "Ø92mm Series",
    description: "Multistage submersible centrifugal pump with rated delivery of 200 m³/day for maximum production applications.",
    image: "/images/products/centrifugal-pump-200-1.png",
    specs: [
      { label: "Housing Diameter", value: "92 mm" },
      { label: "Rated Delivery", value: "200 m³/day" },
      { label: "Head Range", value: "290-2,400 m" },
      { label: "Mean Time to Failure", value: "17,500 hours" },
    ],
    features: [
      "Maximum capacity",
      "High efficiency",
      "Robust design",
      "Production optimized",
    ],
  },
  {
    id: 2,
    category: "motors",
    title: "Single-Section\nElectric Motor 103mm",
    subtitle: "Submersible Asynchronous",
    description: "Single-section submersible electric motor with 103mm outside diameter, featuring optimized stator design and enhanced thermal resistance.",
    image: "/images/products/motor-single-section-103-1.png",
    specs: [
      { label: "Outside Diameter", value: "103 mm" },
      { label: "Sections", value: "1" },
      { label: "Power Range", value: "12-320 kW" },
      { label: "Voltage", value: "350-2,300 V" },
    ],
    features: [
      "24 closed-slot stator design",
      "Enhanced electrical insulation",
      "Single-housing motor protector",
      "API/ISO compliant",
    ],
  },
  {
    id: 18,
    category: "motors",
    title: "Single-Section\nElectric Motor 117mm",
    subtitle: "Submersible Asynchronous",
    description: "Single-section submersible electric motor with 117mm outside diameter for medium to high power applications.",
    image: "/images/products/motor-single-section-117-1.png",
    specs: [
      { label: "Outside Diameter", value: "117 mm" },
      { label: "Sections", value: "1" },
      { label: "Power Range", value: "Up to 320 kW" },
      { label: "Voltage", value: "350-2,300 V" },
    ],
    features: [
      "Medium diameter design",
      "High power capability",
      "Enhanced thermal management",
      "API/ISO compliant",
    ],
  },
  {
    id: 19,
    category: "motors",
    title: "Single-Section\nElectric Motor 123mm",
    subtitle: "Submersible Asynchronous",
    description: "Single-section submersible electric motor with 123mm outside diameter for high-power production applications.",
    image: "/images/products/motor-single-section-123-1.png",
    specs: [
      { label: "Outside Diameter", value: "123 mm" },
      { label: "Sections", value: "1" },
      { label: "Power Range", value: "Up to 320 kW" },
      { label: "Voltage", value: "350-2,300 V" },
    ],
    features: [
      "Large diameter design",
      "Maximum power output",
      "Optimized cooling",
      "Industry proven",
    ],
  },
  {
    id: 20,
    category: "motors",
    title: "Two-Section\nElectric Motor 103mm",
    subtitle: "Submersible Asynchronous",
    description: "Two-section submersible electric motor with 103mm outside diameter, providing increased power capacity through modular design.",
    image: "/images/products/motor-two-section-103-1.png",
    specs: [
      { label: "Outside Diameter", value: "103 mm" },
      { label: "Sections", value: "2" },
      { label: "Power Range", value: "Up to 640 kW" },
      { label: "Voltage", value: "350-2,300 V" },
    ],
    features: [
      "Modular two-section design",
      "Increased power capacity",
      "Flexible configuration",
      "API/ISO compliant",
    ],
  },
  {
    id: 21,
    category: "motors",
    title: "Two-Section\nElectric Motor 117mm",
    subtitle: "Submersible Asynchronous",
    description: "Two-section submersible electric motor with 117mm outside diameter for high-power production requirements.",
    image: "/images/products/motor-two-section-117-1.png",
    specs: [
      { label: "Outside Diameter", value: "117 mm" },
      { label: "Sections", value: "2" },
      { label: "Power Range", value: "Up to 640 kW" },
      { label: "Voltage", value: "350-2,300 V" },
    ],
    features: [
      "High power two-section",
      "Medium diameter",
      "Enhanced performance",
      "Reliable operation",
    ],
  },
  {
    id: 22,
    category: "motors",
    title: "Two-Section\nElectric Motor 123mm",
    subtitle: "Submersible Asynchronous",
    description: "Two-section submersible electric motor with 123mm outside diameter for maximum power applications.",
    image: "/images/products/motor-two-section-123-1.png",
    specs: [
      { label: "Outside Diameter", value: "123 mm" },
      { label: "Sections", value: "2" },
      { label: "Power Range", value: "Up to 640 kW" },
      { label: "Voltage", value: "350-2,300 V" },
    ],
    features: [
      "Maximum power design",
      "Large diameter",
      "Two-section modular",
      "Production optimized",
    ],
  },
  {
    id: 23,
    category: "motors",
    title: "Three-Section\nElectric Motor 103mm",
    subtitle: "Submersible Asynchronous",
    description: "Three-section submersible electric motor with 103mm outside diameter, providing maximum power through advanced modular design.",
    image: "/images/products/motor-three-section-103-1.png",
    specs: [
      { label: "Outside Diameter", value: "103 mm" },
      { label: "Sections", value: "3" },
      { label: "Power Range", value: "Up to 960 kW" },
      { label: "Voltage", value: "350-2,300 V" },
    ],
    features: [
      "Three-section modular design",
      "Maximum power capacity",
      "Advanced cooling system",
      "API/ISO compliant",
    ],
  },
  {
    id: 4,
    category: "protection",
    title: "Motor\nProtectors",
    subtitle: "Water Protection Systems",
    description: "Single-housing motor protectors designed to prevent well fluid from entering the motor and compensate for pressure changes and thermal expansion.",
    image: motorImage,
    specs: [
      { label: "Type", value: "Diaphragm & Seal" },
      { label: "Pressure Rating", value: "Up to 400 bar" },
      { label: "Temperature", value: "High resistance" },
      { label: "Integration", value: "Single housing" },
    ],
    features: [
      "Diaphragm protection system",
      "Face seal technology",
      "Prevents fluid ingress",
      "Thermal expansion compensation",
    ],
  },
  {
    id: 5,
    category: "esp",
    title: "Integrated\nESP Solutions",
    subtitle: "Complete Artificial Lift",
    description: "Coordinated supply and technical support for complete artificial lift systems, engineered and selected based on specific well conditions.",
    image: pumpImage,
    specs: [
      { label: "Components", value: "Full system" },
      { label: "Support", value: "End-to-end" },
      { label: "Customization", value: "Per well" },
      { label: "Training", value: "Included" },
    ],
    features: [
      "Gas separators included",
      "Power and flat cables",
      "Control stations",
      "Telemetry & monitoring",
    ],
  },
  {
    id: 6,
    category: "gas-separators",
    title: "Gas Separator\nGS5-200",
    subtitle: "Oil & Gas Production",
    description: "Gas separator for oil and gas production wells, designed to separate gas from formation fluid before it enters the pump.",
    image: gasSeparatorImage,
    specs: [
      { label: "Type", value: "Gas Separator" },
      { label: "Model", value: "GS5-200" },
      { label: "Application", value: "Oil & Gas Wells" },
      { label: "Standard", value: "API/ISO" },
    ],
    features: [
      "Efficient gas separation",
      "Improved pump performance",
      "Reduced gas interference",
      "API/ISO compliant",
    ],
  },
  {
    id: 7,
    category: "gas-separators",
    title: "Gas Separator-Disperser\nGS5-200",
    subtitle: "Advanced Design",
    description: "Gas separator-disperser combining separation and dispersion functions for enhanced well performance in high gas content applications.",
    image: gasSeparatorDisperserImage,
    specs: [
      { label: "Type", value: "Separator-Disperser" },
      { label: "Model", value: "GS5-200" },
      { label: "Application", value: "High Gas Content Wells" },
      { label: "Standard", value: "API/ISO" },
    ],
    features: [
      "Dual function design",
      "Gas separation & dispersion",
      "Enhanced efficiency",
      "API/ISO compliant",
    ],
  },
  {
    id: 8,
    category: "dosing-pumps",
    title: "Hermetic Dosing Pump\nDNP 2500/10",
    subtitle: "3.0 - 4.0 kW",
    description: "Hermetic dosing plunger pump unit for precise metering of chemicals and additives in oil & gas production applications.",
    image: dosingPumpImage,
    specs: [
      { label: "Model", value: "DNP 2500/10" },
      { label: "Power", value: "3.0 - 4.0 kW" },
      { label: "Design", value: "Hermetic" },
      { label: "Type", value: "Plunger Pump" },
    ],
    features: [
      "Complete hermeticity",
      "Precise metering",
      "Leak-free operation",
      "Chemical resistant",
    ],
  },
  {
    id: 9,
    category: "dosing-pumps",
    title: "Hermetic Dosing Pump\nDNP 1600/16",
    subtitle: "3.0 - 4.0 kW",
    description: "Hermetic dosing plunger pump unit designed for reliable chemical injection in oil & gas production systems.",
    image: "/images/products/dosing-pump-dnp-1600-16.png",
    specs: [
      { label: "Model", value: "DNP 1600/16" },
      { label: "Power", value: "3.0 - 4.0 kW" },
      { label: "Design", value: "Hermetic" },
      { label: "Type", value: "Plunger Pump" },
    ],
    features: [
      "Hermetic construction",
      "Precise flow control",
      "Durable materials",
      "Maintenance-free design",
    ],
  },
  {
    id: 10,
    category: "dosing-pumps",
    title: "Hermetic Dosing Pump\nDNP 1000/25",
    subtitle: "3.0 - 4.0 kW",
    description: "Compact hermetic dosing pump unit for chemical injection applications in oil & gas production.",
    image: "/images/products/dosing-pump-dnp-1000-25.png",
    specs: [
      { label: "Model", value: "DNP 1000/25" },
      { label: "Power", value: "3.0 - 4.0 kW" },
      { label: "Design", value: "Hermetic" },
      { label: "Type", value: "Plunger Pump" },
    ],
    features: [
      "Compact design",
      "Hermetic sealing",
      "Accurate dosing",
      "Long service life",
    ],
  },
  {
    id: 11,
    category: "dosing-pumps",
    title: "Hermetic Dosing Pump\nDNP 630/40",
    subtitle: "3.0 - 4.0 kW",
    description: "Hermetic dosing plunger pump unit for medium-capacity chemical injection in production systems.",
    image: "/images/products/dosing-pump-dnp-630-40.png",
    specs: [
      { label: "Model", value: "DNP 630/40" },
      { label: "Power", value: "3.0 - 4.0 kW" },
      { label: "Design", value: "Hermetic" },
      { label: "Type", value: "Plunger Pump" },
    ],
    features: [
      "Medium capacity",
      "Hermetic design",
      "Reliable operation",
      "Easy maintenance",
    ],
  },
  {
    id: 12,
    category: "dosing-pumps",
    title: "Hermetic Dosing Pump\nDNP 400/63",
    subtitle: "3.0 - 4.0 kW",
    description: "High-pressure hermetic dosing pump unit for demanding chemical injection applications.",
    image: "/images/products/dosing-pump-dnp-400-63.png",
    specs: [
      { label: "Model", value: "DNP 400/63" },
      { label: "Power", value: "3.0 - 4.0 kW" },
      { label: "Design", value: "Hermetic" },
      { label: "Type", value: "Plunger Pump" },
    ],
    features: [
      "High pressure capability",
      "Hermetic sealing",
      "Precise control",
      "Robust construction",
    ],
  },
  {
    id: 24,
    category: "dosing-pumps",
    title: "Hermetic Dosing Pump\nDNP 40/400",
    subtitle: "3.0 - 4.0 kW",
    description: "Ultra-high pressure hermetic dosing pump unit for extreme chemical injection applications.",
    image: "/images/products/dosing-pump-dnp-40-400.png",
    specs: [
      { label: "Model", value: "DNP 40/400" },
      { label: "Power", value: "3.0 - 4.0 kW" },
      { label: "Design", value: "Hermetic" },
      { label: "Type", value: "Plunger Pump" },
    ],
    features: [
      "Ultra-high pressure",
      "Hermetic design",
      "Precise metering",
      "Extreme conditions",
    ],
  },
  {
    id: 25,
    category: "dosing-pumps",
    title: "Hermetic Dosing Pump\nDNP 160/160",
    subtitle: "3.0 - 4.0 kW",
    description: "Balanced flow and pressure hermetic dosing pump unit for standard chemical injection needs.",
    image: "/images/products/dosing-pump-dnp-160-160.png",
    specs: [
      { label: "Model", value: "DNP 160/160" },
      { label: "Power", value: "3.0 - 4.0 kW" },
      { label: "Design", value: "Hermetic" },
      { label: "Type", value: "Plunger Pump" },
    ],
    features: [
      "Balanced design",
      "Hermetic sealing",
      "Reliable operation",
      "Standard applications",
    ],
  },
  {
    id: 26,
    category: "dosing-pumps",
    title: "Hermetic Dosing Pump\nDNP 100/250",
    subtitle: "3.0 - 4.0 kW",
    description: "Medium-pressure hermetic dosing pump unit for chemical injection in production systems.",
    image: "/images/products/dosing-pump-dnp-100-250.png",
    specs: [
      { label: "Model", value: "DNP 100/250" },
      { label: "Power", value: "3.0 - 4.0 kW" },
      { label: "Design", value: "Hermetic" },
      { label: "Type", value: "Plunger Pump" },
    ],
    features: [
      "Medium pressure",
      "Hermetic construction",
      "Accurate dosing",
      "Versatile applications",
    ],
  },
];

const pumpRangeData = [
  { delivery: "25", headMin: "600", headMax: "3,600" },
  { delivery: "30", headMin: "530", headMax: "3,250" },
  { delivery: "50", headMin: "560", headMax: "3,450" },
  { delivery: "80", headMin: "580", headMax: "3,600" },
  { delivery: "125", headMin: "480", headMax: "2,950" },
  { delivery: "200", headMin: "290", headMax: "2,400" },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isCatalogDialogOpen, setIsCatalogDialogOpen] = useState(false);

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-background min-h-screen text-foreground">
      
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-secondary">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Product Catalogue</span>
            </div>
                    <h1 className="page-hero-title mb-6">
                      Submersible<br />
                      <span className="text-primary">Equipment</span>
                    </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              High-performance submersible pumps, electric motors, and integrated ESP solutions for oil & gas production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-y border-border bg-card sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border overflow-hidden group hover:border-primary/30 transition-colors hover:shadow-lg"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image */}
                  <div className="aspect-square bg-muted relative overflow-hidden">
                   <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary text-white text-xs font-semibold uppercase tracking-wider">
                        {product.subtitle}
                      </span>
                   </div>
                </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col">
                    <h3 className="text-2xl font-display text-foreground mb-4 whitespace-pre-line group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                      {product.description}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="bg-secondary border border-border p-3">
                          <span className="block text-xs text-muted-foreground mb-1">{spec.label}</span>
                          <span className="text-sm text-foreground font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                  <Link href="/contact">
                      <Button className="w-full bg-secondary border border-border text-foreground hover:bg-primary hover:text-white hover:border-primary transition-all group/btn">
                        <span>Request Quote</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                     </Button>
                  </Link>
                </div>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pump Range Table */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Specifications</span>
              <div className="h-px w-12 bg-primary" />
            </div>
                    <h2 className="section-title mb-4">
                      Centrifugal Pump<br />
                      <span className="text-primary">Range</span>
                    </h2>
            <p className="text-muted-foreground">
              Ø92mm housing diameter pumps with various delivery rates and head ranges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-foreground uppercase tracking-wider">
                    Rated Delivery
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-foreground uppercase tracking-wider">
                    Min Head
                  </th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-foreground uppercase tracking-wider">
                    Max Head
                  </th>
                  <th className="py-4 px-6 text-right text-sm font-semibold text-foreground uppercase tracking-wider">
                    Housing
                  </th>
                </tr>
              </thead>
              <tbody>
                {pumpRangeData.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-foreground font-medium">{row.delivery} m³/day</td>
                    <td className="py-4 px-6 text-center text-muted-foreground">{row.headMin} m</td>
                    <td className="py-4 px-6 text-center text-primary font-medium">{row.headMax} m</td>
                    <td className="py-4 px-6 text-right text-muted-foreground">Ø92mm</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground text-sm mb-6">
              Extended ranges and custom configurations available on request.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => setIsCatalogDialogOpen(true)}
            >
              <Download className="mr-2 w-4 h-4" />
              Request Full Catalogue
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Operating Conditions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display text-foreground mb-6">
                Operating<br />
                <span className="text-primary">Conditions</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our pumps are designed for efficient lifting of oil, produced water, and associated gas, including operation in wells with deviation angles of up to 60° at the suspension point.
              </p>
              
              <div className="space-y-4">
                <div className="bg-card border border-border p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Max Fluid Density</span>
                    <span className="text-foreground font-medium">1,400 kg/m³</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary rounded-full" />
                  </div>
                </div>
                <div className="bg-card border border-border p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Well Temperature</span>
                    <span className="text-foreground font-medium">Up to 150°C</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-2/3 bg-primary rounded-full" />
                  </div>
                </div>
                <div className="bg-card border border-border p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Max Deviation Angle</span>
                    <span className="text-foreground font-medium">60°</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-display text-foreground mb-6">
                Reliability<br />
                <span className="text-primary">Parameters</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                All equipment is manufactured under a full quality control cycle, including mandatory acceptance and performance testing according to API and ISO standards.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border p-6 text-center">
                  <span className="block text-3xl font-display text-primary mb-2">17,500</span>
                  <span className="text-sm text-muted-foreground">Hours MTTF</span>
                </div>
                <div className="bg-card border border-border p-6 text-center">
                  <span className="block text-3xl font-display text-primary mb-2">19,000</span>
                  <span className="text-sm text-muted-foreground">Hours MTBO</span>
                </div>
                <div className="bg-card border border-border p-6 text-center">
                  <span className="block text-3xl font-display text-primary mb-2">5</span>
                  <span className="text-sm text-muted-foreground">Years Service Life</span>
                </div>
                <div className="bg-card border border-border p-6 text-center">
                  <span className="block text-3xl font-display text-primary mb-2">18</span>
                  <span className="text-sm text-muted-foreground">Months Warranty</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProductsGrid />

      {/* Technical Resources */}
      <TechnicalResources />

      {/* CTA Section */}
      <CTASection />

      {/* Catalog Request Dialog */}
      <CatalogRequestDialog open={isCatalogDialogOpen} onOpenChange={setIsCatalogDialogOpen} />

    </div>
  );
}
