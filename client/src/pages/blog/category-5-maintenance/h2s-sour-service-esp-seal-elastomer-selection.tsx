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

export default function H2sSourServiceEspSealElastomerSelection() {
  return (
    <>
      <BlogHero
        title="H2S Sour Service: ESP Seal and Elastomer Selection"
        image={heroImage}
        category="maintenance"
        date="April 2026"
        readTime={10}
      />
      <BlogLayout
        relatedProducts={[
          {
            id: "5",
            title: "Integrated Centrifugal Pump Solutions",
            image: "/images/products/centrifugal-pump-25-1.png",
            href: "/products#esp"
          }
        ]}
        relatedPosts={[
          { slug: "esp-chemical-compatibility-materials", title: "ESP Chemical Compatibility and Materials" },
          { slug: "esp-storage-handling-field", title: "ESP Storage and Handling in the Field" },
          { slug: "esp-commissioning-checklist", title: "ESP Commissioning Checklist" }
        ]}
        author="Prestil Energy India"
        date="April 2026"
        readTime={10}
      >
        <div className="space-y-8">
          <h2>Compatibility testing</h2>
          <p>Use qualified elastomer charts and fluid samples representative of produced water and gas.</p>
          <h2>Assembly hygiene</h2>
          <p>Control contamination during makeup to avoid premature seal damage.</p>
          <h2>Operations</h2>
          <p>Monitor for souring trends that could outpace original material assumptions.</p>
          <h2>Conclusion</h2>
          <p>Structured field practice improves margin, reduces reactive troubleshooting, and supports consistent ESP performance across the well life cycle.</p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Plan maintenance and spares with Prestil Energy
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
