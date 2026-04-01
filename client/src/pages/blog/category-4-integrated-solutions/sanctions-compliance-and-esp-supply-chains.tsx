import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  { question: "Why is sanctions compliance critical for ESP programs?", answer: "Non-compliant sourcing can trigger shipment holds, legal penalties, and project shutdowns. Compliance-first sourcing protects schedule integrity and reduces reputational and contractual risk." },
  { question: "How should operators manage supplier qualification?", answer: "Use documented vendor due diligence, ownership checks, export-control screening, and approved alternative suppliers. Qualification should be refreshed periodically as regulations evolve." },
  { question: "What happens when a previously approved supplier becomes restricted?", answer: "Teams should activate pre-approved alternates, verify technical interchangeability, and update control documentation immediately to avoid procurement gaps." },
  { question: "Can compliance and reliability objectives conflict?", answer: "They can if procurement is reactive. A proactive framework aligns both by mapping critical technical requirements to compliant supplier options in advance." },
  { question: "Which documents are most important for auditability?", answer: "Traceable purchase records, supplier declarations, part-level interchangeability notes, and engineering approval logs are essential for both compliance audits and technical accountability." },
  { question: "How can engineering teams support compliance?", answer: "Engineering can define acceptable equivalence limits for substitute parts, reducing delays when procurement needs compliant alternatives quickly." },
  { question: "Do sanctions affect maintenance planning?", answer: "Yes. Maintenance windows should account for potential import delays and include minimum strategic stock levels for restricted-risk components." },
  { question: "What is a practical way to reduce exposure?", answer: "Diversify by region, reduce single-source dependencies, and standardize where feasible so compliant substitutions are easier to execute." },
  { question: "How often should risk reviews be run?", answer: "In high-volatility environments, monthly reviews are common, with immediate ad-hoc reviews when major policy announcements occur." },
  { question: "What is the best long-term strategy?", answer: "Treat compliance as part of system reliability. Integrated governance across legal, procurement, and engineering delivers better production continuity." },
];

export default function SanctionsComplianceAndEspSupplyChains() {
  return (
    <>
      <BlogHero
        title="Sanctions Compliance and ESP Supply Chain Continuity"
        image={heroImage}
        category="integrated-solutions"
        date="April 2026"
        readTime={11}
      />
      <BlogLayout
        relatedProducts={[{ id: "5", title: "Integrated Centrifugal Pump Solutions", image: "/images/products/centrifugal-pump-25-1.png", href: "/products#esp" }]}
        relatedPosts={[
          { slug: "esp-system-design", title: "ESP System Design: Matching Components for Optimal Performance" },
          { slug: "esp-wellhead-penetrator-cables", title: "Wellhead Penetrators and ESP Power Cable Terminations at Surface" },
          { slug: "esp-storage-handling-field", title: "ESP Equipment Storage, Handling, and Pre-Installation Verification" },
        ]}
        author="Prestil Energy India"
        date="April 2026"
        readTime={11}
      >
        <div className="space-y-8">
          <h2>Compliance Is an Operations Issue</h2>
          <p>In conflict-affected markets, sanctions policy can change faster than conventional procurement cycles. For ESP-dependent assets, this creates both legal and production risk if sourcing controls are weak.</p>
          <p>Compliance should be embedded into day-to-day equipment planning, not treated as a separate administrative function.</p>

          <h2>Building a Compliant Supplier Network</h2>
          <p>A resilient network includes primary and alternate compliant suppliers, with validated technical equivalence for key components. This reduces downtime when a vendor or route becomes restricted.</p>
          <p>Structured qualification criteria and recurring reviews help maintain readiness as policy landscapes shift.</p>

          <h2>Interchangeability Governance</h2>
          <p>Substitutions must remain technically safe. Engineering teams should define acceptable material, electrical, and dimensional tolerances before an emergency occurs.</p>
          <p>With pre-cleared interchangeability rules, procurement teams can execute compliant alternatives without introducing hidden reliability risks.</p>

          <h2>Documentation and Audit Trail Discipline</h2>
          <p>Traceability matters. Complete records of supplier checks, approvals, and substitutions protect operators during compliance audits and strengthen internal accountability.</p>

          <h2>Conclusion</h2>
          <p>Sanctions-aware ESP planning improves both legal compliance and production continuity. The strongest programs integrate policy monitoring, supplier governance, and engineering validation into a single execution model.</p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Request a Compliance-Ready ESP Architecture Review
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
