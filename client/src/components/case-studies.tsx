import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    location: "Ukraine",
    title: "High-Performance ESP System Deployment",
    description: "Successfully deployed 400-series pumps and motors in challenging well conditions with high gas content and elevated temperatures.",
    results: [
      { label: "Production Increase", value: "35%" },
      { label: "MTTF", value: "18,500 hours" },
      { label: "Uptime", value: "98.5%" },
    ],
    icon: TrendingUp,
  },
  {
    id: 2,
    location: "Romania",
    title: "Optimized Pump Configuration",
    description: "Customized centrifugal pump configuration for deep well applications, achieving optimal flow rates and extended service life.",
    results: [
      { label: "Efficiency Gain", value: "28%" },
      { label: "Service Life", value: "6+ years" },
      { label: "Energy Savings", value: "22%" },
    ],
    icon: Clock,
  },
  {
    id: 3,
    location: "Lithuania",
    title: "Integrated ESP Solution",
    description: "Complete artificial lift system with gas separators, motors, and control systems delivering reliable production enhancement.",
    results: [
      { label: "System Reliability", value: "99.2%" },
      { label: "Installation Time", value: "Reduced 40%" },
      { label: "Maintenance Cost", value: "Reduced 30%" },
    ],
    icon: CheckCircle2,
  },
  {
    id: 4,
    location: "USA",
    title: "Market Entry Success",
    description: "Successful product adaptation and deployment in the U.S. market with local support infrastructure and compliance certification.",
    results: [
      { label: "Market Entry", value: "2024-2025" },
      { label: "Deployments", value: "15+" },
      { label: "Customer Satisfaction", value: "98%" },
    ],
    icon: MapPin,
  },
];

export function CaseStudies() {
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
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Success Stories</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="section-title mb-6">
            Case Studies<br />
            <span className="text-primary">& Results</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Real-world deployments demonstrating the performance and reliability of Prestil Energy equipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="bg-card border border-border p-8 hover:border-primary/30 transition-colors group hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <study.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display text-foreground mb-1">{study.title}</h3>
                    <p className="text-sm text-primary font-medium">{study.location}</p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {study.description}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                {study.results.map((result, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-display text-primary mb-1">{result.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">{result.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-10 text-sm rounded-sm">
              Request Case Study Details
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

