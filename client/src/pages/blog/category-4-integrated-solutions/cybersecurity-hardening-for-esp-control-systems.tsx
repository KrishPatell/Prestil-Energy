import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  { question: "Why is cybersecurity relevant to ESP operations?", answer: "ESP performance depends on control and telemetry systems. Cyber incidents can disrupt monitoring, control logic, and response workflows." },
  { question: "What is the first hardening step?", answer: "Asset inventory and network segmentation are foundational. You cannot secure what is not mapped." },
  { question: "How should remote access be managed?", answer: "Use strict role-based access, multi-factor authentication, and monitored session controls." },
  { question: "Do firmware and patch policies matter?", answer: "Yes. Controlled update programs reduce known vulnerability exposure while preserving operational stability." },
  { question: "How can operators reduce blast radius?", answer: "Segment control zones, enforce least privilege, and isolate critical control paths from non-essential networks." },
  { question: "What monitoring is required?", answer: "Continuous logging, anomaly detection, and incident playbooks aligned to operations teams." },
  { question: "Can cybersecurity changes impact uptime?", answer: "Poorly planned changes can. Security controls should be tested and phased with operations coordination." },
  { question: "How often should incident drills run?", answer: "Regular tabletop and technical drills are recommended, especially for high-consequence assets." },
  { question: "What is a common weakness?", answer: "Unmanaged legacy access paths and shared credentials." },
  { question: "What is the objective?", answer: "Protect control integrity and maintain safe production continuity under digital threat conditions." },
];

export default function CybersecurityHardeningForEspControlSystems() {
  return (
    <>
      <BlogHero
        title="Cybersecurity Hardening for ESP Control and Telemetry Systems"
        image={heroImage}
        category="integrated-solutions"
        date="April 2026"
        readTime={10}
      />
      <BlogLayout
        relatedProducts={[{ id: "5", title: "Integrated Centrifugal Pump Solutions", image: "/images/products/centrifugal-pump-25-1.png", href: "/products#esp" }]}
        relatedPosts={[
          { slug: "esp-control-stations", title: "Control Stations and Surface Equipment for ESP Operations" },
          { slug: "esp-telemetry-monitoring", title: "Telemetry and Monitoring Systems for ESP Performance" },
          { slug: "esp-sensors-vsd-control-integration", title: "Integrating Downhole Sensors with Variable Speed Drive Control Loops" },
        ]}
        author="Prestil Energy India"
        date="April 2026"
        readTime={10}
      >
        <div className="space-y-8">
          <h2>Digital Risk Is Operational Risk</h2>
          <p>As ESP systems rely more on connected control and telemetry, cybersecurity resilience becomes essential for safe, reliable production.</p>
          <h2>Security by Architecture</h2>
          <p>Segment networks, harden access, and define privileged workflows to reduce exposure and improve recoverability.</p>
          <h2>Operationally Safe Implementation</h2>
          <p>Security controls should be introduced through phased, tested changes coordinated with production and maintenance teams.</p>
          <h2>Conclusion</h2>
          <p>Cyber hardening should be treated as core reliability engineering for modern ESP operations.</p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Request ESP Control Security Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </p>
          <BlogFAQ faqs={faqs} />
        </div>
      </BlogLayout>
    </>
  );
}
