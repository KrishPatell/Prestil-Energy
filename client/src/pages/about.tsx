import { motion } from "framer-motion";
import { CheckCircle2, Factory, Award, Users, Globe } from "lucide-react";
import { FeaturedProductsGrid } from "@/components/featured-products-grid";
import { CTASection } from "@/components/cta-section";
import { TechnicalResources } from "@/components/technical-resources";

const manufacturingImage = "/images/high-tech_manufacturing_facility_interior.png";

const capabilities = [
  "Blanking and stamping operations",
  "Precision machining and heat treatment",
  "Impregnation and winding operations",
  "Painting, assembly, and reinforcement",
  "Dedicated testing stations",
  "Repair shops and toolmaking facilities",
];

export default function About() {
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
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">About Us</span>
            </div>
            <h1 className="page-hero-title mb-6 text-primary">
              Prestil Energy Ltd.
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              A modern high-technology enterprise with over 25 years of experience manufacturing submersible equipment for the global oil & gas industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title mb-8">
                Company<br />
                <span className="text-primary">Overview</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Prestil Energy Ltd., established in 1995, specializes in the development and manufacturing of equipment for the oil and gas industry. The manufacturing facility was built on the basis of Kharkiv Electromechanical Plant, which had been manufacturing submersible electric motors for over half a century.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, Prestil Energy is a modern high-technology enterprise with a closed manufacturing cycle for submersible centrifugal pumps and electric motors. We operate under ISO 9001:2015 certification, ensuring traceability and consistent quality across all production stages.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary border border-border p-6">
                  <Factory className="w-8 h-8 text-primary mb-4" />
                  <span className="block text-2xl font-display text-foreground mb-1">22,000 m²</span>
                  <span className="text-sm text-muted-foreground">Production Premises</span>
                </div>
                <div className="bg-secondary border border-border p-6">
                  <Award className="w-8 h-8 text-primary mb-4" />
                  <span className="block text-2xl font-display text-foreground mb-1">ISO 9001</span>
                  <span className="text-sm text-muted-foreground">Certified Quality</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-muted border border-border overflow-hidden">
                <img 
                  src="https://pub-2752c63c2f67411bbfaa5eece76e2136.r2.dev/Gemini_Generated_Image_ml87zhml87zhml87.webp" 
                  alt="Prestil Energy Manufacturing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8">
                <span className="block text-5xl font-display text-white">2.93</span>
                <span className="text-sm text-white/80 uppercase tracking-wider">Hectares</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
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
                      Manufacturing<br />
                      <span className="text-primary">Excellence</span>
                    </h2>
            <p className="text-muted-foreground text-lg">
              Our facility is equipped with more than 550 machine tools, dedicated test benches, and specialized production units.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-card border border-border p-6 flex items-start gap-4 hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground">{capability}</span>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Global Reach</span>
              </div>
                      <h2 className="section-title mb-6">
                        International<br />
                        <span className="text-primary">Markets</span>
                      </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Today, our 400-series pumps and motors are successfully operating at oil fields in Ukraine, Romania, and Lithuania, demonstrating stable performance in diverse operating environments. In 2024–2025, we initiated and continue to expand deliveries to the U.S. market.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {["Ukraine", "Romania", "Lithuania", "United States"].map((country, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-3 bg-card border border-border">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{country}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border p-8"
            >
              <Users className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-display text-foreground mb-4">
                Partnership<br />
                <span className="text-primary">Model</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our cooperation model includes full engineering and technical support—from equipment selection and manufacturing to delivery, commissioning, and start-up assistance. Where required, we also provide on-site installation supervision and operator training.
              </p>
              <ul className="space-y-3">
                {["Equipment selection & engineering", "Manufacturing & quality control", "Delivery & commissioning", "On-site supervision & training"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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

    </div>
  );
}
