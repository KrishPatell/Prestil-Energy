import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  { question: "Why is offshore intervention cost planning harder during conflict?", answer: "Vessel access, insurance terms, and logistics reliability can change rapidly, affecting intervention feasibility and timing." },
  { question: "How should risk and cost be evaluated together?", answer: "Use scenario-based cost models linked to deferred production exposure and intervention success probability." },
  { question: "What is the role of risk allowances?", answer: "Risk allowances account for schedule and execution uncertainty so decisions reflect realistic intervention economics." },
  { question: "Should all wells receive equal intervention priority?", answer: "No. Prioritize by production consequence, failure trajectory, and access certainty." },
  { question: "Can preventive actions reduce offshore intervention pressure?", answer: "Yes. Conservative operation and early diagnostics can delay or avoid high-risk interventions." },
  { question: "How do contracts influence outcome?", answer: "Flexible contract structures with contingency terms can reduce execution friction under volatile conditions." },
  { question: "What governance is required?", answer: "Cross-functional risk review with clear thresholds for go/no-go intervention decisions." },
  { question: "How often should assumptions be refreshed?", answer: "Frequently during instability, with updates tied to security and logistics intelligence." },
  { question: "What is a common mistake?", answer: "Using pre-crisis cost assumptions for post-crisis intervention decisions." },
  { question: "What is the objective?", answer: "Select intervention paths that maximize safe economic value under uncertainty." },
];

export default function OffshoreEspInterventionRiskCostPlanningDuringConflict() {
  return (
    <>
      <BlogHero
        title="Offshore ESP Intervention Risk-Cost Planning During Conflict"
        image={heroImage}
        category="maintenance"
        date="April 2026"
        readTime={10}
      />
      <BlogLayout
        relatedProducts={[{ id: "5", title: "Integrated Centrifugal Pump Solutions", image: "/images/products/centrifugal-pump-25-1.png", href: "/products#esp" }]}
        relatedPosts={[
          { slug: "offshore-risk-zones-redundant-pump-design", title: "Offshore Risk Zones and Redundant-Ready ESP Pump Design" },
          { slug: "conflict-zone-workover-window-optimization-for-esp", title: "Conflict-Zone Workover Window Optimization for ESP Systems" },
          { slug: "strategic-spares-planning-for-esp-under-sanctions", title: "Strategic Spares Planning for ESP Systems Under Sanctions Pressure" },
        ]}
        author="Prestil Energy India"
        date="April 2026"
        readTime={10}
      >
        <div className="space-y-8">
          <h2>Offshore Intervention Economics Under Instability</h2>
          <p>Conflict-related volatility can shift offshore intervention feasibility and cost assumptions quickly. Planning must reflect current execution reality.</p>
          <h2>Risk-Cost Decision Framework</h2>
          <p>Compare intervention options using scenario-based cost and production-risk models rather than static historical averages.</p>
          <h2>Priority and Execution Discipline</h2>
          <p>Focus resources on highest-value, highest-feasibility interventions with clear governance and escalation triggers.</p>
          <h2>Conclusion</h2>
          <p>Robust offshore risk-cost planning improves decision quality and protects value when intervention conditions are uncertain.</p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Develop a Conflict-Aware Offshore Intervention Plan
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
