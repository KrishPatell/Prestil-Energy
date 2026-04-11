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

export default function AbrasiveSlurryStageMaterialSelectionEsp() {
  return (
    <>
      <BlogHero
        title="Abrasive Slurry Stage Material Selection for ESPs"
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
          { slug: "sand-slurry-pump-stage-design", title: "Sand and Slurry Pump Stage Design" },
          { slug: "wear-resistant-pumps", title: "Wear-Resistant Pump Materials" },
          { slug: "esp-pump-intake-screen-sand-control", title: "ESP Pump Intake Screen and Sand Control" }
        ]}
        author="Prestil Energy India"
        date="April 2026"
        readTime={10}
      >
        <div className="space-y-8">
          <h2>Solids loading and wear modes</h2>
          <p>Solids increase abrasive wear on impellers and diffusers; material hardness and coating strategy should match PSD and velocity.</p>
          <h2>Selection framework</h2>
          <p>Match stage metallurgy to solids concentration, brine chemistry, and expected intervention interval.</p>
          <h2>Monitoring inputs</h2>
          <p>Trend delta-P, current stability, and sand detection alarms to validate material performance over time.</p>
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
