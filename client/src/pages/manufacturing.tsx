import { motion } from "framer-motion";
import { CheckCircle2, Shield, Gauge, Settings, Wrench, Zap, TestTube } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FeaturedProductsGrid } from "@/components/featured-products-grid";
import { CTASection } from "@/components/cta-section";
import { TechnicalResources } from "@/components/technical-resources";

const manufacturingImage = "/images/high-tech_manufacturing_facility_interior.png";

const workshops = [
  { icon: Settings, title: "Blanking & Stamping", description: "Precision metal forming operations for component manufacturing." },
  { icon: Wrench, title: "Machining & Heat Treatment", description: "CNC machining and thermal processing for optimal material properties." },
  { icon: Zap, title: "Winding & Impregnation", description: "Motor winding and varnish impregnation for electrical insulation." },
  { icon: Shield, title: "Assembly & Reinforcement", description: "Final assembly and structural reinforcement processes." },
  { icon: TestTube, title: "Testing Stations", description: "Comprehensive acceptance and performance testing facilities." },
  { icon: Gauge, title: "Quality Control", description: "Full traceability and ISO 9001:2015 certified quality systems." },
];

const testingCapabilities = [
  {
    title: "Centrifugal Pump\nAcceptance Testing",
    standard: "API / GOST 6134-87",
    description: "Comprehensive pump performance verification including flow rate, head, and efficiency measurements.",
  },
  {
    title: "Electric Motor\nAcceptance Testing",
    standard: "API / ISO / GOST",
    description: "Motor performance testing including electrical characteristics, thermal behavior, and efficiency.",
  },
  {
    title: "Pressure &\nTightness Testing",
    standard: "DSTU 2649-94",
    description: "Leak detection and pressure integrity verification for all sealed components.",
  },
  {
    title: "Vibration\nDiagnostics",
    standard: "ISO 10816-1-97",
    description: "Motor vibration analysis in inclined positions to ensure operational reliability.",
  },
];

export default function Manufacturing() {
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
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Facilities</span>
            </div>
                    <h1 className="page-hero-title mb-6">
                      Manufacturing<br />
                      <span className="text-primary">Excellence</span>
                    </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              A fully integrated, ISO 9001:2015 certified manufacturing facility with closed-cycle production capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-muted border border-border overflow-hidden">
                <img 
                  src="https://pub-2752c63c2f67411bbfaa5eece76e2136.r2.dev/Gemini_Generated_Image_ach3uuach3uuach3%201.webp" 
                  alt="Prestil Energy Manufacturing Facility" 
                  className="w-full h-full object-cover"
                />
      </div>

              {/* Stats Overlay */}
              <div className="absolute -bottom-8 left-8 right-8 bg-background border border-border p-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <span className="block text-2xl font-display text-primary">2.93</span>
                  <span className="text-xs text-muted-foreground">Hectares</span>
                </div>
                <div className="text-center border-x border-border">
                  <span className="block text-2xl font-display text-primary">22,000</span>
                  <span className="text-xs text-muted-foreground">m² Space</span>
                </div>
                <div className="text-center">
                  <span className="block text-2xl font-display text-primary">550+</span>
                  <span className="text-xs text-muted-foreground">Machines</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
                      <h2 className="section-title mb-6">
                        Integrated Production<br />
                        <span className="text-primary">Facility</span>
                      </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Our manufacturing facility occupies 2.93 hectares, including 22,000 m² of production space. Equipped with more than 550 machine tools, dedicated test benches, and specialized production units, we maintain a closed manufacturing cycle for submersible equipment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The plant was established in 1995 on the basis of Kharkiv Electromechanical Plant, which had been manufacturing submersible electric motors for over half a century. Today, we combine this heritage with modern technology and international quality standards.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">API Compliant</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">Full Traceability</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Workshops */}
      <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Capabilities</span>
              <div className="h-px w-12 bg-primary" />
            </div>
                    <h2 className="section-title mb-6">
                      Production<br />
                      <span className="text-primary">Workshops</span>
                    </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Complete in-house manufacturing capabilities from raw materials to finished products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border p-8 group hover:border-primary/30 transition-colors hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <workshop.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display text-foreground mb-3">{workshop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{workshop.description}</p>
              </motion.div>
          ))}
        </div>
      </div>
      </section>

      {/* Capacity */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
                      <h2 className="section-title mb-6">
                        Production<br />
                        <span className="text-primary">Capacity</span>
                      </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With a dedicated workforce and optimized production lines, we maintain consistent output while ensuring the highest quality standards for every unit.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground">Electric Motors</span>
                    <span className="text-primary font-semibold">3,000+ units/year</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground">Centrifugal Pumps</span>
                    <span className="text-primary font-semibold">Full range</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "75%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground">Motor Protectors</span>
                    <span className="text-primary font-semibold">Integrated</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "65%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card border border-border p-8 text-center">
                <span className="block text-5xl font-display text-primary mb-2">25+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <span className="block text-5xl font-display text-primary mb-2">50+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Test Stations</span>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <span className="block text-5xl font-display text-primary mb-2">550+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Machine Tools</span>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <span className="block text-5xl font-display text-primary mb-2">100%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Testing Rate</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testing & QA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Quality Assurance</span>
              <div className="h-px w-12 bg-primary" />
            </div>
                    <h2 className="section-title mb-6">
                      Testing &<br />
                      <span className="text-primary">Validation</span>
                    </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Every unit undergoes comprehensive testing to ensure compliance with international standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testingCapabilities.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border p-8 group hover:border-primary/30 transition-colors hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-display text-foreground whitespace-pre-line">{test.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-xs text-primary font-medium shrink-0 ml-4">
                    {test.standard}
                  </span>
              </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{test.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-card border border-border p-8 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Our testing facilities include stands for acceptance testing, periodic testing, pressure verification, vibration diagnostics, and automated motor testing—all designed to ensure every unit meets strict requirements for reliability, safety, and long-term operation.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                Request Quality Documentation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProductsGrid />

      {/* Technical Resources */}
      <TechnicalResources />

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}
