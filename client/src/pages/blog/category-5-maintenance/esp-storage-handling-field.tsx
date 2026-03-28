import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  {
    question: "Why does storage environment matter before installation?",
    answer: "Moisture ingress, temperature cycling, and contamination compromise motors, protectors, and dielectric fluids before equipment ever reaches the wellbore. Controlled, clean storage preserves factory quality and avoids infant failures.",
  },
  {
    question: "How should pumps be supported off the ground?",
    answer: "Pumps should rest on certified saddles or pallets that avoid point loads on housings or flanges. Long-term storage may require rotation schedules for bearings in some designs per manufacturer guidance.",
  },
  {
    question: "What checks apply to cable reels?",
    answer: "Reels should be stored upright with edge protection, kept dry, and inspected for mechanical damage to armor or insulation. Bend radius violations during handling create hidden defects that fail under voltage later.",
  },
  {
    question: "Should desiccant or nitrogen blankets be used?",
    answer: "Manufacturer storage bulletins specify whether motor interiors require desiccant, nitrogen, or sealed caps. Deviating from those instructions voids assumptions about moisture content at startup.",
  },
  {
    question: "What paperwork should travel with the string?",
    answer: "Factory test reports, torque sheets, material certificates, and shipment inspection records should accompany equipment to the rig site. Missing documents delay audits and commissioning sign-off.",
  },
  {
    question: "How do rig-site receiving inspections work?",
    answer: "Compare shipment manifests to physical tags, photograph any shipping damage immediately, and isolate suspect components for OEM review. Early claims reduce disputes and keep critical path schedules intact.",
  },
  {
    question: "Are there special handling rules for protectors?",
    answer: "Protectors contain elastomers and precision mechanical stacks sensitive to impact. Dropping or using lifting slings incorrectly can distort seals. Use approved lifting points and soft slings as directed.",
  },
  {
    question: "What about long international shipments?",
    answer: "Sea freight exposes equipment to humidity and salt air. Enhanced packaging, vapor barriers, and accelerated post-arrival inspections mitigate corrosion risks before installation.",
  },
  {
    question: "Who should attend pre-install meetings?",
    answer: "Rig superintendent, electrical supervisor, ESP vendor representative, and completion engineer should align on sequence, torque procedures, and testing responsibilities. Clear roles prevent duplicated or skipped steps.",
  },
  {
    question: "How does Prestil Energy support logistics and field readiness?",
    answer: "Prestil Energy provides documentation and guidance for handling integrated ESP strings from factory release through rig floor make-up. Our objective is that equipment arrives in the same condition it left quality control.",
  },
];

export default function EspStorageHandlingField() {
  return (
    <>
      <BlogHero
        title="ESP Equipment Storage, Handling, and Pre-Installation Verification"
        image={heroImage}
        category="maintenance"
        date="March 2026"
        readTime={11}
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
          { slug: "esp-installation-guide", title: "ESP Installation Best Practices: Step-by-Step Guide" },
          { slug: "esp-commissioning-checklist", title: "Commissioning Submersible Pump Systems: Complete Checklist" },
          { slug: "predictive-maintenance-esp", title: "Predictive Maintenance for Submersible Pump Systems" },
        ]}
        author="Prestil Energy India"
        date="March 2026"
        readTime={11}
      >
        <div className="space-y-8">
          <h2 id="introduction">Introduction</h2>
          <p>
            ESP reliability begins before the rig floor. Storage conditions, transportation handling, and disciplined receiving inspections determine whether factory-built quality survives to commissioning. Small lapses in this phase create costly mysteries later.
          </p>
          <p>
            This article summarizes practical storage and handling practices for pumps, motors, protectors, and cables, plus pre-installation verification steps that align with Prestil Energy integrated deliveries.
          </p>

          <h2 id="warehouse-storage">Warehouse and Laydown Storage</h2>
          <p>
            Indoor climate-controlled storage is ideal for motors and protectors. If outdoor laydown is unavoidable, weather covers and elevated dunnage reduce moisture wicking and pooling. Inventory rotation ensures oldest stock ships first when serial flexibility allows.
          </p>

          <h2 id="lifting-and-rigging">Lifting and Rigging Discipline</h2>
          <p>
            Use manufacturer-approved lifting fixtures and respect center of gravity markings. Shock loads from crane set-downs transmit stress to internal thrust and bearing systems. Smooth lifts cost nothing compared with premature failures.
          </p>

          <h2 id="pre-install-checks">Pre-Installation Verification</h2>
          <p>
            Megger tests, visual seal inspection, and confirmation that thread protectors remain intact are typical baseline checks. Compare nameplate ratings to the job design to catch shipment errors before running in hole.
          </p>

          <h2 id="coordination">Coordination With Rig Operations</h2>
          <p>
            Rig floors are congested and dynamic. Dedicated staging zones, tool control, and briefings reduce accidental impacts. ESP strings should not double as walkway supports or welding grounds.
          </p>

          <h2 id="prestil-energy-support">Prestil Energy Quality Handover</h2>
          <p>
            Prestil Energy emphasizes documentation and handling instructions with every integrated system. Our teams support customers during receiving and rig-up to ensure procedures are understood and followed consistently.
          </p>
          <p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Request Installation Support
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </p>

          <BlogFAQ faqs={faqs} />

          <h2 id="conclusion">Conclusion</h2>
          <p>
            Treating ESP hardware with the same care as precision rotating machinery pays dividends in first-run success and run life. Storage, handling, and verification are the foundation of dependable artificial lift operations.
          </p>
          <p>
            Contact Prestil Energy for handling guides and checklists tailored to your upcoming ESP deployment.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}
