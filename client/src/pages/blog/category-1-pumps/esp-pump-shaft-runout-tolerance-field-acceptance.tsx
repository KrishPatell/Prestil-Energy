import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  { question: 'What is the main operational objective?', answer: 'To improve ESP reliability and decision quality using field-measurable signals, documented assumptions, and staged verification.' },
  { question: 'How often should teams review assumptions?', answer: 'Whenever rates, choke, separator performance, or power conditions change materially—at minimum on a quarterly cadence for stable wells.' },
  { question: 'What data is most valuable?', answer: 'Time-aligned intake pressure, motor electrical parameters, vibration where available, and production trends.' },
  { question: 'Can Prestil Energy support implementation?', answer: 'Yes. Prestil Energy helps translate well conditions into equipment selection, operating envelopes, and monitoring priorities.' },
  { question: 'What is a common pitfall?', answer: 'Treating a single snapshot as proof without trending across operating states.' },
  { question: 'How does this relate to run life?', answer: 'Better intake and mechanical margins reduce cycling damage and unplanned interventions.' },
  { question: 'Should VSD settings be included?', answer: 'Yes. Ramp profiles and harmonic filtering influence motor heating and mechanical excitation.' },
  { question: 'What about high-GOR wells?', answer: 'Gas-handling strategy must be coordinated with pump hydraulics; see Prestil Energy gas separation guidance.' },
  { question: 'Is training required?', answer: 'Short operator briefings improve alarm response consistency and reduce false escalations.' },
  { question: 'What is the first practical step?', answer: 'Establish baselines after stable operation, then define thresholds tied to production consequence.' },
];

export default function EspPumpShaftRunoutToleranceFieldAcceptance() {
  return (
    <>
      <BlogHero
        title="ESP Pump Shaft Runout Tolerance and Field Acceptance"
        image={heroImage}
        category="pumps"
        date="April 2026"
        readTime={10}
      />
      <BlogLayout
        relatedProducts={[
          {
            id: "1",
            title: "Submersible Centrifugal Pump 25 m³/day",
            image: "/images/products/centrifugal-pump-25-1.png",
            href: "/products#pumps"
          }
        ]}
        relatedPosts={[
          { slug: "esp-pump-shaft-coupling-alignment", title: "ESP Pump Shaft Coupling Alignment" },
          { slug: "esp-motor-rotor-dynamic-balance-oilfield-specs", title: "ESP Motor Rotor Dynamic Balance: Oilfield Specs" },
          { slug: "esp-installation-guide", title: "ESP Installation Guide" }
        ]}
        author="Prestil Energy India"
        date="April 2026"
        readTime={10}
      >
        <div className="space-y-8">
          <h2>Why runout matters</h2>
          <p>Excessive shaft runout increases vibration, seal wear, and coupling stress during startup and steady operation.</p>
          <h2>Acceptance criteria</h2>
          <p>Define measurable runout limits at assembly and pre-run checks with documented gauge references.</p>
          <h2>Field verification</h2>
          <p>Record runout readings in commissioning packets and compare after any mechanical disturbance.</p>
          <h2>Conclusion</h2>
          <p>Structured field practice improves margin, reduces reactive troubleshooting, and supports consistent ESP performance across the well life cycle.</p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Review ESP system design with Prestil Energy
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
