import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  {
    question: "How is torque transferred from motor to pump in an ESP?",
    answer: "Torque travels through a splined or keyed shaft coupling designed for the rated power and speed of the string. The coupling must maintain concentricity under axial thrust and bending moments from the completion. Manufacturer torque specifications and make-up procedures must be followed to avoid fretting or fatigue.",
  },
  {
    question: "What causes coupling-related failures downhole?",
    answer: "Common causes include improper make-up torque, foreign debris on mating faces, corrosion pitting, and excessive cyclic bending from vibration or gas slugging. Thermal cycles and thrust oscillations can accelerate spline wear if lubrication or clearances are marginal.",
  },
  {
    question: "Is field alignment the same as for surface pumps?",
    answer: "Downhole strings are rigidly stacked with controlled diametrical clearances rather than dial-indicator alignment in the traditional sense. The critical factors are correct torque sequence, verified thread engagement, and squareness of shoulders. Deviated wells add side-load considerations that should be reviewed in completion design.",
  },
  {
    question: "How does modular pump construction affect couplings?",
    answer: "Each pump section adds another mechanical joint in the load path. Section stacking procedures must ensure uniform compression and alignment of internal shafts. Skipping steps or mixing incompatible section types can create eccentric loading at the coupling.",
  },
  {
    question: "Should couplings be inspected after every pull?",
    answer: "Yes. Visual inspection of splines, keys, and shoulders is standard during failure analysis. Photograph wear patterns and measure clearances when possible. This data informs whether the issue was hydraulic, mechanical, or installation-related.",
  },
  {
    question: "What documentation should be recorded at installation?",
    answer: "Torque values, turn counts, thread compound type, and component serial numbers should be recorded per joint. Traceability links field practice to later performance and simplifies warranty or root cause reviews.",
  },
  {
    question: "Can VSD operation affect coupling life?",
    answer: "Rapid speed ramps and frequent cycling increase torsional cycles on the coupling. Soft acceleration profiles reduce shock loading. If resonance is suspected, torsional analysis may be warranted for very long strings or unusual power ranges.",
  },
  {
    question: "How does Prestil Energy support coupling integrity?",
    answer: "Prestil Energy provides pumps and motors engineered for compatible connection geometry with documented make-up procedures. Technical support assists crews with proper handling and torque verification during rig-site assembly.",
  },
  {
    question: "What if torque specs differ between vendors?",
    answer: "Always use the more restrictive specification when mixing certified components, or obtain written compatibility approval. Exceeding torque can yield threads; insufficient torque risks loosening under shock loads.",
  },
  {
    question: "Where can I find installation procedures?",
    answer: "Installation bulletins ship with equipment and cover make-up sequence, lubricants, and inspection checkpoints. Prestil Energy field engineers can review procedures specific to your completion and handling plan.",
  },
];

export default function EspPumpShaftCouplingAlignment() {
  return (
    <>
      <BlogHero
        title="Pump-to-Motor Coupling: Alignment and Torque Transfer in ESP Strings"
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
          { slug: "modular-pump-design", title: "Modular Pump Design: Benefits of Section-Based Construction" },
          { slug: "submersible-centrifugal-pumps-guide", title: "Complete Guide to Submersible Centrifugal Pumps" },
          { slug: "esp-installation-guide", title: "ESP Installation Best Practices: Step-by-Step Guide" },
        ]}
        author="Prestil Energy India"
        date="April 2026"
        readTime={12}
      >
        <div className="space-y-8">
          <h2 id="introduction">Introduction</h2>
          <p>
            The coupling between submersible motor and multistage pump is a highly loaded mechanical interface. Proper torque transfer, concentric rotation, and resistance to cyclic stress define whether the string delivers years of service or fails early from fretting and fatigue.
          </p>
          <p>
            This article summarizes coupling behavior in ESP applications, field practices that protect the joint, and how Prestil Energy approaches compatibility across pump sections and motor stacks.
          </p>

          <h2 id="mechanical-load-path">Mechanical Load Path</h2>
          <p>
            Hydraulic thrust from the pump and motor stacks passes through bearings and couplings while torque transmits rotation. Any eccentricity or misalignment increases local stress and vibration, which can propagate to seals and windings over time.
          </p>

          <h2 id="make-up">Make-Up Torque and Procedures</h2>
          <p>
            Thread compounds, torque-turn monitoring, and shoulder alignment are not optional details—they define the clamp load available to resist shock and vibration. Crews should follow OEM procedures without substitution unless engineering approves alternatives.
          </p>

          <h2 id="deviated-wells">Deviated and Horizontal Completions</h2>
          <p>
            Side loading from wellbore curvature changes how couplings experience bending. Centralization, dogleg severity, and running speed during installation influence whether the string is straight enough to avoid chronic side-load wear.
          </p>

          <h2 id="prestil-energy-solutions">Prestil Energy Solutions</h2>
          <p>
            Prestil Energy manufactures modular pump sections and matches motors with verified connection compatibility. We support customers with documentation and field guidance so each make-up meets design intent.
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
            Coupling integrity is foundational to ESP reliability. Disciplined make-up, inspection after pulls, and attention to wellbore loading keep torque transfer predictable over the run life.
          </p>
          <p>
            Contact Prestil Energy for coupling and installation support tailored to your completion.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}
