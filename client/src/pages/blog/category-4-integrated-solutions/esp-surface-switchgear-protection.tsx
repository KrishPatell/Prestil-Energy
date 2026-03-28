import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  {
    question: "What is protection coordination for ESP feeders?",
    answer: "Coordination ensures that downstream devices (motor overload, VSD protection) trip before upstream switchgear is damaged, while avoiding nuisance trips during starting inrush or brief transients. Time-current curves for breakers, fuses, and relays must be stacked logically with the ESP motor starting profile.",
  },
  {
    question: "How do VSDs change traditional motor protection?",
    answer: "Variable speed drives embed electronic protection for overcurrent, undervoltage, ground fault, and thermal modeling. These functions interact with supply-side breakers. Settings must be documented so field teams understand which device clears which fault.",
  },
  {
    question: "Why is cable charging current relevant?",
    answer: "Long ESP feeders exhibit capacitance that influences ground-fault detection and nuisance tripping, especially on medium-voltage systems. Protection settings and filtering features may need adjustment based on cable length and voltage level.",
  },
  {
    question: "What standards commonly apply?",
    answer: "Regional electrical codes, IEC and IEEE practices for industrial power, and manufacturer guidelines for VSDs and motors collectively define minimum expectations. Oilfield operators often add corporate standards for arc flash and lockout/tagout integration.",
  },
  {
    question: "How does transformer sizing relate to protection?",
    answer: "Transformers must support inrush and continuous load while impedance influences fault levels available to clear faults. Protection devices are selected for available fault current and coordination with transformer limits.",
  },
  {
    question: "Should ESP circuits use dedicated switchgear sections?",
    answer: "Dedicated sections simplify coordination, reduce interaction with unrelated loads, and improve outage isolation during maintenance. Shared bus arrangements demand more rigorous selective coordination studies.",
  },
  {
    question: "What documentation should be kept on site?",
    answer: "Single-line diagrams, coordination study results, relay and VSD setting sheets, and as-built cable schedules should be available to electricians and automation engineers. Out-of-date drawings are a common root cause of mis-trips.",
  },
  {
    question: "How often should settings be reviewed?",
    answer: "After major electrical work, VSD firmware updates, motor changes, or cable replacements, protection reviews should be repeated. Periodic audits every few years catch drift from undocumented field changes.",
  },
  {
    question: "Can harmonic filters affect protection?",
    answer: "Filters change fault current paths and can influence ground-return sensing schemes. Integrated studies should include filter contribution when harmonic mitigation is installed for ESP VSDs.",
  },
  {
    question: "How does Prestil Energy support surface electrical design?",
    answer: "Prestil Energy integrates ESP power trains from downhole equipment through surface controls. Our teams work with customers and electrical contractors to align equipment ratings, starting methods, and protection philosophies with field standards.",
  },
];

export default function EspSurfaceSwitchgearProtection() {
  return (
    <>
      <BlogHero
        title="Surface Switchgear and Protection Coordination for ESP Circuits"
        image={heroImage}
        category="integrated-solutions"
        date="March 2026"
        readTime={12}
      />
      <BlogLayout
        relatedProducts={[
          {
            id: "5",
            title: "Integrated Centrifugal Pump Solutions",
            image: "/images/products/centrifugal-pump-25-1.png",
            href: "/products#esp",
          },
        ]}
        relatedPosts={[
          { slug: "esp-control-stations", title: "Control Stations and Surface Equipment for ESP Operations" },
          { slug: "esp-cables-guide", title: "Power Cables and Flat Cables for ESP Systems" },
          { slug: "motor-voltage-guide", title: "Voltage Selection for Submersible Motors: 350V to 2,300V" },
        ]}
        author="Prestil Energy India"
        date="March 2026"
        readTime={12}
      >
        <div className="space-y-8">
          <h2 id="introduction">Introduction</h2>
          <p>
            Surface switchgear and protective devices are the electrical backbone of ESP operations. Poor coordination leads to either destructive faults that damage gear or chronic nuisance trips that reduce runtime and obscure downhole problems.
          </p>
          <p>
            This article summarizes how ESP feeders differ from general industrial motors, why variable speed drives complicate classical protection schemes, and which documentation practices keep sites safe and reliable.
          </p>

          <h2 id="fault-perspective">Fault Clearing Perspective</h2>
          <p>
            ESP circuits must clear ground faults, phase faults, and overload conditions without exposing personnel or equipment to sustained energy release. The hierarchy begins at the motor and VSD, extends through medium-voltage motor starters or breakers, and ends at the utility or generator interface.
          </p>

          <h2 id="starting-inrush">Starting Inrush and Thermal Overload</h2>
          <p>
            Across-the-line starts produce high inrush current for short intervals; VSDs ramp torque electronically but introduce harmonics. Protection curves must accommodate legitimate starting while remaining sensitive to abnormal currents that indicate locked rotor or cable damage.
          </p>

          <h2 id="ground-fault">Ground Fault and System Grounding</h2>
          <p>
            Grounding practices influence how ground-fault sensors measure leakage. Mixed grounding schemes or high-resistance grounded systems require device selection compatible with the intended philosophy. Misapplication causes false trips or delayed clearing.
          </p>

          <h2 id="operations-interface">Operations and Maintenance Interface</h2>
          <p>
            Clear labeling, lockout points, and training align switchgear operations with well work. When electrical and production teams share a common protection narrative, troubleshooting accelerates during storms, voltage sags, and partial cable failures.
          </p>

          <h2 id="prestil-energy-solutions">Prestil Energy Integrated Electrical Support</h2>
          <p>
            Prestil Energy delivers integrated ESP packages where downhole ratings, cable ampacity, and surface equipment are engineered together. We support customers in specifying control stations and reviewing protection assumptions against motor nameplate data and expected operating envelopes.
          </p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Explore Integrated Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </p>

          <BlogFAQ faqs={faqs} />

          <h2 id="conclusion">Conclusion</h2>
          <p>
            Protection coordination is not a paperwork exercise—it defines whether ESP installations survive real-world electrical events. Investing in studies, documentation, and periodic reviews pays back in uptime and safety.
          </p>
          <p>
            Speak with Prestil Energy about integrated ESP power systems aligned with your site electrical standards.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}
