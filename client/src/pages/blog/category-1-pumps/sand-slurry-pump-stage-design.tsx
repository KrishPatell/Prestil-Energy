import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  {
    question: "Why is sand especially damaging to ESP stages?",
    answer: "Solid particles increase erosion at high-velocity regions—impeller vanes, diffuser throats, and wear rings—while also accelerating abrasive fatigue. Even low sand concentrations can shorten run life if stage hydraulics create locally high shear velocities. Material hardness and geometric robustness must match the solids loading.",
  },
  {
    question: "Which materials are common in abrasive service?",
    answer: "Hardened steels, tungsten carbide inserts, and specialized coatings are selected based on particle hardness, size distribution, and fluid chemistry. The goal is to reduce wear rates while maintaining hydraulic efficiency. Prestil Energy aligns material choices with documented solids data when available.",
  },
  {
    question: "Does lowering flow rate always reduce sand wear?",
    answer: "Not necessarily. Some wear mechanisms scale with velocity cubed; others depend on particle trajectory through the stage. The best efficiency point still matters—operating far from design can redirect solids into unfavorable paths. Field optimization should combine rate, drawdown, and surface desanding where feasible.",
  },
  {
    question: "How does stage count interact with abrasion?",
    answer: "More stages divide head per stage at a given total lift, which can reduce per-stage loading and local velocities. However, more stages also increase internal surface area exposed to solids. Selection balances hydraulic duty, motor capability, and wear life for the specific well.",
  },
  {
    question: "Can downhole desanders replace pump hardening?",
    answer: "Desanding or improved completion design reduces solids reaching the pump, which is often the first line of defense. Pump hardening remains valuable as insurance against upset conditions, proppant flowback, and transient solids spikes that bypass surface control.",
  },
  {
    question: "What data should operators provide for abrasive service?",
    answer: "Particle size distribution, concentration trends, mineralogy when available, and producing intervals help engineers select materials and hydraulic targets. Periodic fluid samples and failure analysis of returned pumps close the feedback loop for continuous improvement.",
  },
  {
    question: "How does gas plus sand compound the problem?",
    answer: "Multiphase flow changes particle trajectories and can increase impingement on pressure faces. Combined gas-handling and abrasion reviews are important in unconventional or high-GOR wells with proppant production.",
  },
  {
    question: "Are modular sections helpful for abrasive wells?",
    answer: "Modular pump construction allows targeted replacement of worn sections and can reduce workover cost when wear concentrates in specific stages. It does not eliminate abrasion but improves lifecycle economics when wear patterns are predictable.",
  },
  {
    question: "What monitoring signals suggest abrasive wear in progress?",
    answer: "Gradual loss of head at constant speed, rising power for the same rate, and increasing vibration may indicate clearance growth from erosion. Downhole gauges and periodic performance tests help quantify degradation before failure.",
  },
  {
    question: "How does Prestil Energy support abrasive applications?",
    answer: "Prestil Energy provides pump configurations suited to documented solids environments, supported by field experience and quality-controlled manufacturing. Technical teams assist with stage selection, materials, and integration with separation and motor sizing.",
  },
];

export default function SandSlurryPumpStageDesign() {
  return (
    <>
      <BlogHero
        title="Pump Stage Design for Abrasive Sand and Slurry Service"
        image={heroImage}
        category="pumps"
        date="March 2026"
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
          { slug: "pump-reliability-mttf", title: "Achieving 17,500+ Hours MTTF in Submersible Pumps" },
          { slug: "multistage-pump-design", title: "Multistage Centrifugal Pump Design and Performance" },
        ]}
        author="Prestil Energy India"
        date="March 2026"
        readTime={12}
      >
        <div className="space-y-8">
          <h2 id="introduction">Introduction</h2>
          <p>
            Wells that produce sand, proppant, or abrasive fines demand ESP pump stages that combine robust hydraulics with materials matched to the solids environment. Generic pump selections often fail early when particle loading and velocity fields are ignored.
          </p>
          <p>
            This article outlines how multistage designs address abrasive service, which engineering levers matter most, and how operators can partner with suppliers to extend run life without surrendering production targets.
          </p>

          <h2 id="erosion-mechanisms">Erosion Mechanisms in ESP Stages</h2>
          <p>
            Solids impinge on metal surfaces where flow turns accelerate or where clearance jets form. Hard particles cut softer metals; repeated impacts cause fatigue spalling. The wear rate scales with particle kinetic energy and frequency of impact, which ties directly to operating rate and fluid velocity distribution inside each stage.
          </p>

          <h2 id="hydraulic-design">Hydraulic Design Considerations</h2>
          <p>
            Stage designers balance head per stage, efficiency, and mechanical robustness. In abrasive service, slightly conservative hydraulic loading can reduce local velocities that drive erosion. The correct answer is well-specific: some fields tolerate aggressive curves when solids are controlled upstream.
          </p>

          <h2 id="material-selection">Material Selection and Coatings</h2>
          <p>
            Base metals, heat treatments, and hard-facing extend service when matched to particle hardness and chemistry. Coatings may reduce friction and wear in certain regimes but must survive downhole temperature and mechanical loads. Supplier testing and field returns validate choices over time.
          </p>

          <h2 id="field-practices">Field Practices That Extend Life</h2>
          <p>
            Surface desanding, managed drawdown, and prompt response to solids breakthrough reduce time-at-risk. Pulling pumps for inspection when performance drifts prevents secondary damage to motors and protectors. Documentation of wear patterns informs the next configuration.
          </p>

          <h2 id="prestil-energy-solutions">Prestil Energy Solutions for Abrasive Wells</h2>
          <p>
            Prestil Energy manufactures submersible pumps with attention to section-based construction, quality materials, and application engineering. We work with operators to translate solids data into practical pump specifications that align with economic run-life targets.
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
            Abrasive production is manageable when pump stage design, materials, and field practices work together. Treating sand as a system constraint—not an afterthought—preserves head, efficiency, and intervention intervals.
          </p>
          <p>
            Contact Prestil Energy to review solids production data and define a pump configuration suited to your well.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}
