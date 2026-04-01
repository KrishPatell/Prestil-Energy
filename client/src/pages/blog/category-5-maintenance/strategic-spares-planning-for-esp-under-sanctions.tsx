import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  { question: "What are strategic spares in ESP operations?", answer: "Strategic spares are high-consequence components with long or uncertain replenishment lead times. They are stocked intentionally to prevent extended deferred production during disruptions." },
  { question: "How do sanctions change spare philosophy?", answer: "Sanctions increase uncertainty in sourcing and logistics. Operators typically move from lean just-in-time models toward risk-tiered stock planning for critical assets." },
  { question: "Which items are usually prioritized first?", answer: "Cable and termination hardware, motor-critical components, protector elements, and specialized monitoring parts are often prioritized because replacement delays can be severe." },
  { question: "How should spare levels be calculated?", answer: "A practical method combines failure rate history, intervention lead time, and production consequence. High-impact items receive deeper buffers than low-impact consumables." },
  { question: "Can overstocking become a risk?", answer: "Yes, especially with poor storage controls or non-standard configurations. Stock depth should be paired with shelf-life management and standardized equipment strategy." },
  { question: "How important is preservation practice for stocked components?", answer: "Critical. Improper humidity, handling, or packaging can degrade materials before use. Preservation protocols should be part of spare governance." },
  { question: "Should spare strategy vary by field type?", answer: "Yes. High-rate, remote, or offshore fields generally require stronger spare coverage than low-risk onshore assets with fast intervention access." },
  { question: "How often should spare plans be reviewed?", answer: "Quarterly is common, with rapid review after major policy or logistics changes. Reviews should include reliability data and supplier status updates." },
  { question: "How does telemetry support spare optimization?", answer: "Telemetry improves failure prediction, allowing inventory to be used proactively rather than reactively. This reduces both emergency pulls and unnecessary stocking." },
  { question: "What is the core objective of strategic spares planning?", answer: "To minimize deferred production and operational volatility while maintaining safe, compliant, and technically reliable intervention capability." },
];

export default function StrategicSparesPlanningForEspUnderSanctions() {
  return (
    <>
      <BlogHero
        title="Strategic Spares Planning for ESP Systems Under Sanctions Pressure"
        image={heroImage}
        category="maintenance"
        date="April 2026"
        readTime={11}
      />
      <BlogLayout
        relatedProducts={[{ id: "5", title: "Integrated Centrifugal Pump Solutions", image: "/images/products/centrifugal-pump-25-1.png", href: "/products#esp" }]}
        relatedPosts={[
          { slug: "predictive-maintenance-esp", title: "Predictive Maintenance for Submersible Pump Systems" },
          { slug: "esp-storage-handling-field", title: "ESP Equipment Storage, Handling, and Pre-Installation Verification" },
          { slug: "esp-post-pull-inspection-analysis", title: "Post-Pull ESP Inspection: Systematic Analysis After Equipment Retrieval" },
        ]}
        author="Prestil Energy India"
        date="April 2026"
        readTime={11}
      >
        <div className="space-y-8">
          <h2>From Reactive to Planned Availability</h2>
          <p>When sanctions and routing disruptions affect oilfield supply chains, spare planning becomes a core production control lever. Waiting for failure before ordering is no longer viable for many ESP-dependent assets.</p>
          <p>Strategic spares reduce exposure by ensuring that critical components are available when intervention is required.</p>

          <h2>Risk-Tiered Spare Segmentation</h2>
          <p>Not all parts require the same stock depth. Operators should classify items by consequence of failure, lead-time volatility, and interchangeability constraints.</p>
          <p>This segmentation supports better capital efficiency and avoids blanket overstocking.</p>

          <h2>Storage and Preservation Discipline</h2>
          <p>Inventory quality is as important as inventory quantity. Moisture control, packaging integrity, handling rules, and shelf-life tracking are essential to preserve component readiness.</p>
          <p>Without strong preservation practices, strategic stock can quietly degrade and fail to deliver value during critical interventions.</p>

          <h2>Linking Reliability Data to Inventory Decisions</h2>
          <p>Failure mode trends and telemetry signals should inform reorder priorities. Data-led planning helps teams stock what is most likely to be needed under realistic field conditions.</p>

          <h2>Conclusion</h2>
          <p>Strategic spares planning is a resilience program, not a warehouse exercise. In volatile geopolitical environments, disciplined stock governance protects uptime and reduces deferred production risk.</p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Build a Risk-Tiered Spare Strategy
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
