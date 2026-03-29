import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  {
    question: "What is the purpose of an ESP intake screen?",
    answer: "Intake screens block or slow large debris, proppant, and solids agglomerates before fluid enters the first pump stage. They reduce erosion and plugging of impeller passages when sized and maintained correctly for the expected solids spectrum.",
  },
  {
    question: "Do screens eliminate the need for wear-resistant pump materials?",
    answer: "No. Screens reduce particle size and loading but rarely remove all solids. Abrasion-resistant hydraulics and separation equipment remain important when sand production is chronic or unpredictable.",
  },
  {
    question: "How does screen selection affect pressure drop?",
    answer: "Finer mesh captures smaller particles but increases pressure drop and can plug faster. The design must balance protection with sufficient intake margin for NPSH and gas separation upstream. Prestil Energy reviews screen loss alongside pump intake hydraulics.",
  },
  {
    question: "Can screens plug during production?",
    answer: "Yes. Scale, wax, and fines can bridge openings. Surveillance of intake pressure trends helps detect plugging before pump starvation. Chemical programs and periodic throughput management may be required in parallel with mechanical protection.",
  },
  {
    question: "Where should sand control be placed relative to the gas separator?",
    answer: "Completion architecture varies. Screens may sit below or above separation equipment depending on solids entry point and gas handling strategy. Integrated modeling of the full completion avoids contradictory assumptions between components.",
  },
  {
    question: "What data supports screen sizing?",
    answer: "Particle size distribution, concentration, and maximum particle size from produced samples inform slot or mesh selection. Lack of data forces conservative sizing or higher risk of pump exposure.",
  },
  {
    question: "How does Prestil Energy coordinate with completion design?",
    answer: "Prestil Energy aligns pump intake expectations with completion hardware and separation trains. Our goal is a single solids-management story from reservoir to first stage.",
  },
  {
    question: "Are there alternatives to screens?",
    answer: "Gravel packs, inflow control devices, and surface desanding are complementary strategies. The right combination depends on reservoir, completion type, and economics.",
  },
  {
    question: "What inspection is needed after pulls?",
    answer: "Inspect screens for erosion holes, collapse, and plugging material. Compare findings to pump wear patterns to verify whether protection was effective or bypassed.",
  },
  {
    question: "Who can help with upset solids events?",
    answer: "Prestil Energy technical teams assist with diagnosing solids breakthrough, recommending rate adjustments, and evaluating whether pump or separation changes are warranted.",
  },
];

export default function EspPumpIntakeScreenSandControl() {
  return (
    <>
      <BlogHero
        title="Intake Screens and Upstream Sand Control Before the ESP Pump"
        image={heroImage}
        category="pumps"
        date="April 2026"
        readTime={12}
      />
      <BlogLayout
        relatedProducts={[
          {
            id: "1",
            title: "Submersible Centrifugal Pump 25 m³/day",
            image: "/images/products/centrifugal-pump-25-1.png",
            href: "/products#pumps",
          },
        ]}
        relatedPosts={[
          { slug: "wear-resistant-pumps", title: "Wear-Resistant Pumps for Abrasive Well Fluids" },
          { slug: "sand-slurry-pump-stage-design", title: "Pump Stage Design for Abrasive Sand and Slurry Service" },
          { slug: "gas-separators-guide", title: "Gas Separators for ESP Systems: Complete Guide" },
        ]}
        author="Prestil Energy India"
        date="April 2026"
        readTime={12}
      >
        <div className="space-y-8">
          <h2 id="introduction">Introduction</h2>
          <p>
            Solids production challenges every artificial lift system. Intake screens and completion-based sand control reduce what reaches the first pump stage, extending run life when paired with appropriate hydraulics and materials.
          </p>
          <p>
            This guide explains screening principles, pressure-drop trade-offs, and how Prestil Energy integrates intake protection with pump and separator selection.
          </p>

          <h2 id="screening-basics">Screening Basics</h2>
          <p>
            Screens operate by size exclusion: openings must be smaller than damaging particles yet large enough to sustain flow without excessive fouling. Slot geometry, alloy selection, and burst ratings must match well pressure and installation loads.
          </p>

          <h2 id="integration">Integration With Pumps and Separators</h2>
          <p>
            Screens do not replace gas separators or dispersers. They complement separation by reducing mechanical load on stages and by protecting sensitive internals from sudden proppant surges during flowback.
          </p>

          <h2 id="operations">Operations and Monitoring</h2>
          <p>
            Trending intake pressure and pump differential helps detect screen plugging or bypass. Operators should establish baseline signatures after commissioning to recognize drift early.
          </p>

          <h2 id="prestil-energy-solutions">Prestil Energy Solutions</h2>
          <p>
            Prestil Energy supplies pumps engineered for abrasive duty when solids cannot be fully eliminated. We work with operators to align screening, separation, and stage materials with documented fluid expectations.
          </p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View Complete Pump Range
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </p>

          <BlogFAQ faqs={faqs} />

          <h2 id="conclusion">Conclusion</h2>
          <p>
            Intake screens are one layer in a solids management strategy. Combined with proper pump metallurgy and operating discipline, they materially improve ESP economics in sandy wells.
          </p>
          <p>
            Reach out to Prestil Energy for application review when sand production is part of your lift plan.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}
