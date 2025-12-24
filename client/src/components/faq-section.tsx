import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ReactNode } from "react";

const faqs = [
  {
    id: 1,
    question: "What is the typical service life of Prestil Energy pumps and motors?",
    answer: "Our submersible centrifugal pumps and electric motors are designed for a mean service life of 5 years, with a Mean Time To Failure (MTTF) of 17,500 hours and Mean Time Between Outages (MTBO) of 19,000 hours under normal operating conditions.",
  },
  {
    id: 2,
    question: "What well conditions can your equipment handle?",
    answer: "Our equipment is designed for operation in wells with fluid densities up to 1,400 kg/m³, temperatures up to 150°C, and deviation angles of up to 60° at the suspension point. We offer standard, heat-resistant, and wear-resistant variants to match specific well conditions.",
  },
  {
    id: 3,
    question: "Do you provide complete ESP systems or individual components?",
    answer: "We provide both individual components (pumps, motors, protectors, gas separators) and complete integrated ESP solutions. Our integrated systems include gas separators, power and flat cables, control stations, and telemetry systems, all engineered and selected based on specific well conditions.",
  },
  {
    id: 4,
    question: "What certifications do your products have?",
    answer: "All equipment is manufactured under ISO 9001:2015 quality management certification and designed to API quality standards. We maintain full traceability and quality control throughout the manufacturing process.",
  },
  {
    id: 5,
    question: "Can you customize equipment for specific well requirements?",
    answer: "Yes, our engineering team can adapt equipment to your specific well conditions and requirements. We offer technical consultations to help select the optimal configuration based on well depth, production capacity, fluid characteristics, and other operational parameters.",
  },
  {
    id: 6,
    question: "What support services do you provide after installation?",
    answer: "We provide comprehensive after-sales support including technical assistance, maintenance guidance, spare parts supply, and training programs. Our technical and commercial teams are available for ongoing support and can assist with troubleshooting and optimization.",
  },
  {
    id: 7,
    question: "What is your production capacity?",
    answer: "Our 22,000 m² manufacturing facility has the capacity to produce over 3,000 electric motors annually, along with a full range of centrifugal pumps, motor protectors, and gas separators. We maintain consistent output while ensuring the highest quality standards.",
  },
  {
    id: 8,
    question: "How do I request a quote or technical consultation?",
    answer: (
      <>
        You can request a quote or technical consultation through our contact form, email (
        <a href="mailto:energy.apatel@gmail.com" className="text-primary hover:underline">
          energy.apatel@gmail.com
        </a>
        ), or by contacting our sales team directly. We typically respond within 24 hours and can provide detailed specifications, pricing, and delivery timelines based on your requirements.
      </>
    ),
  },
];

export function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="section-title mb-6">
            Frequently Asked<br />
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Find answers to common questions about our products, services, and technical specifications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <AccordionItem
                  value={`item-${faq.id}`}
                  className="bg-card border border-border px-6 rounded-sm hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {typeof faq.answer === 'string' ? faq.answer : faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? Our technical team is ready to help.
          </p>
          <Link href="/contact">
            <Button variant="outline" className="border-border text-foreground hover:bg-secondary rounded-sm">
              Contact Technical Support
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

