import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Zap, Factory, Globe, Award, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import { FeaturedProductsGrid } from "@/components/featured-products-grid";
import { CTASection } from "@/components/cta-section";
import { TechnicalResources } from "@/components/technical-resources";
import { FAQSection } from "@/components/faq-section";

// Real images from public folder
const heroImage = "/images/dark_cinematic_offshore_oil_rig_at_night_with_orange_lights.png";
const pumpImage = "/images/3d_technical_render_of_submersible_pump.png";
const motorImage = "/images/industrial_electric_motor_studio_shot.png";
const manufacturingImage = "/images/high-tech_manufacturing_facility_interior.png";

const heroSlides = [
  {
    image: heroImage,
    subtitle: "ISO 9001:2015 Certified",
    titleLine1: "Submersible Equipment",
    titleLine2: "for Oil & Gas Production",
    titleLine3: "",
    description: "Prestil Energy Ltd has been a manufacturer of submersible centrifugal pumps and submersible electric motors for oil and gas production, well services, and production enhancement applications since 1995.",
  },
  {
    image: "https://khemz-ipec.com.ua/bd/photoalbum/images/18-09-2013%20235.jpg",
    subtitle: "API Quality Products",
    titleLine1: "Manufacturer of submersible",
    titleLine2: "centrifugal pumps &",
    titleLine3: "submersible electric motors.",
    description: "State-of-the-art 22,000 m² production facility with capacity for 3,000 electric motors annually.",
  },
];

const products = [
  {
    title: "Submersible\nCentrifugal Pumps",
    description: "Ø92mm pumps with capacities from 25 to 200 m³/day and heads up to 4,000m for efficient oil lifting.",
    image: pumpImage,
    specs: ["25-200 m³/day", "Up to 4,000m head", "Ø92mm housing"],
    href: "/products",
  },
  {
    title: "Submersible\nElectric Motors",
    description: "M5 and 400-series motors featuring enhanced insulation, thermal resistance, and integrated protection.",
    image: motorImage,
    specs: ["M5 & 400 Series", "24-slot stator", "API/ISO compliant"],
    href: "/products",
  },
  {
    title: "Integrated\nESP Solutions",
    description: "Complete artificial lift systems with gas separators, cables, control stations, and telemetry.",
    image: pumpImage,
    specs: ["Full ESP Systems", "Telemetry included", "Turnkey solutions"],
    href: "/products",
  },
];

const capabilities = [
  { icon: Factory, value: "22,000", unit: "m²", label: "Production Space" },
  { icon: Gauge, value: "3,000", unit: "+", label: "Motors Per Year" },
  { icon: Award, value: "550", unit: "+", label: "Machine Tools" },
  { icon: Globe, value: "25", unit: "+", label: "Years Experience" },
];

const features = [
  {
    icon: Shield,
    title: "ISO Certified\n& API Quality",
    description: "All equipment manufactured under ISO 9001:2015 certification and designed to API quality standards with full quality traceability.",
  },
  {
    icon: Zap,
    title: "Proven\nPerformance",
    description: "Operating successfully at oil fields in Ukraine, Romania, Lithuania, and expanding to the U.S. market.",
  },
  {
    icon: Factory,
    title: "Integrated\nManufacturing",
    description: "Complete in-house cycle: design, machining, assembly, testing, and quality assurance.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      
      {/* Hero Section - Always dark background for impact */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt="Industrial Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />
          </div>
        ))}

        <div className="container mx-auto px-4 relative z-20">
          <motion.div 
            key={currentSlide}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ maxWidth: '1380px' }}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                {heroSlides[currentSlide].subtitle}
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-display font-normal text-white leading-[0.95] mb-8 text-3xl md:text-5xl lg:text-6xl xl:text-7xl" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span>{heroSlides[currentSlide].titleLine1}</span>
              <span className={heroSlides[currentSlide].titleLine3 ? "" : "text-primary"}>{heroSlides[currentSlide].titleLine2}</span>
              {heroSlides[currentSlide].titleLine3 && <span className="text-primary">{heroSlides[currentSlide].titleLine3}</span>}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base md:text-xl text-white/70 mb-10 leading-relaxed" style={{ maxWidth: '750px' }}>
              {heroSlides[currentSlide].description}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-8 text-sm rounded-sm group">
                  View Products
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 px-8 text-sm rounded-sm">
                  Request Quote
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Slide Indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-12 bg-primary" : "w-6 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
        </div>
      </section>

      {/* Capabilities Stats */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                  </div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-3xl md:text-5xl font-display font-medium text-foreground">{item.value}</span>
                  <span className="text-xl text-primary font-semibold">{item.unit}</span>
                    </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 tech-grid-bg opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
              </div>
              <h2 className="section-title mb-6">
                Engineering Excellence<br />
                <span className="text-primary">Since 1995</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Prestil Energy Ltd., established in 1995, specializes in the development and manufacturing of submersible equipment for the oil and gas industry. With strong in-house engineering capabilities and a fully integrated manufacturing process, we deliver reliable solutions to global operators.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our 22,000 m² facility is equipped with over 550 machine tools, dedicated test benches, and specialized production units. We operate under ISO 9001:2015 certification, ensuring consistent quality across all production stages.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border p-6">
                  <span className="text-2xl md:text-3xl font-display text-primary">ISO/API</span>
                  <p className="text-sm text-muted-foreground mt-2">Quality Standards</p>
                </div>
                <div className="bg-card border border-border p-6">
                  <span className="text-2xl md:text-3xl font-display text-primary">2.93 Ha</span>
                  <p className="text-sm text-muted-foreground mt-2">Manufacturing Site</p>
                </div>
              </div>

              <Link href="/about">
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary rounded-sm group">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-card border border-border overflow-hidden">
                <img 
                  src="https://pub-2752c63c2f67411bbfaa5eece76e2136.r2.dev/Screenshot%202025-12-24%20at%203.01.35%E2%80%AFPM.png" 
                  alt="Prestil Energy Manufacturing Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 shadow-xl">
                <span className="block text-4xl font-display text-white">25+</span>
                <span className="text-sm text-white/80 uppercase tracking-wider">Years</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Featured Products */}
      <FeaturedProductsGrid />

      {/* Technical Resources */}
      <TechnicalResources />

      {/* Why Choose Us */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why Choose Us</span>
              <div className="h-px w-12 bg-primary" />
            </div>
            <h2 className="section-title mb-6">
              Your Trusted Partner<br />
              <span className="text-primary">In Oil & Gas</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-card border border-border p-8 hover:border-primary/30 transition-colors group hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-4 whitespace-pre-line">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-card border border-border p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-display text-foreground mb-4">
                  Global Market<br />
                  <span className="text-primary">Expansion</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Today, our 400-series pumps and motors are successfully operating at oil fields in Ukraine, Romania, and Lithuania. In 2024–2025, Prestil Energy initiated deliveries to the U.S. market, including product adaptation and local support infrastructure.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                {["Ukraine", "Romania", "Lithuania", "India", "USA"].map((country, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{country}</span>
                  </div>
                ))}
              </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}
