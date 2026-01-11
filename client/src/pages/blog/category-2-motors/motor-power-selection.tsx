import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/industrial_electric_motor_studio_shot.png";

const faqs = [
  {
    question: "How do I determine motor power requirements?",
    answer: "Motor power requirements depend on pump power needs, which vary with flow rate, head, and efficiency. Prestil Energy's technical team calculates power requirements based on pump specifications, recommending appropriate motor power. Proper sizing ensures reliable operation without overloading.",
  },
  {
    question: "What power range do Prestil Energy motors cover?",
    answer: "Prestil Energy offers motors from 12 kW to 960 kW depending on configuration. Single-section motors provide 12-320 kW. Two-section motors extend to 640 kW. Three-section motors reach 960 kW maximum. This range accommodates diverse pump requirements.",
  },
  {
    question: "What happens if I select an undersized motor?",
    answer: "Undersized motors risk overload and failure. Motors operating above rated power experience excessive heating, reduced efficiency, and premature failure. Prestil Energy's selection process ensures motors match or slightly exceed pump requirements, preventing overload conditions.",
  },
  {
    question: "Can I use an oversized motor?",
    answer: "Oversized motors increase costs without benefits and may operate inefficiently at low loads. However, slight oversizing provides safety margin. Prestil Energy recommends motors sized to match pump requirements with appropriate safety margins, optimizing economics and performance.",
  },
  {
    question: "How does power selection affect efficiency?",
    answer: "Motors operate most efficiently near rated load. Proper power selection ensures operation near optimal efficiency point. Prestil Energy's selection process considers efficiency factors, ensuring motors operate efficiently throughout service life.",
  },
  {
    question: "What is the relationship between motor power and pump flow rate?",
    answer: "Motor power requirements increase with pump flow rate and head. Higher flow rates require more power. Higher head requires more power. Prestil Energy's technical team calculates power requirements based on pump specifications, ensuring proper motor selection.",
  },
  {
    question: "How do I calculate motor power from pump requirements?",
    answer: "Motor power equals pump hydraulic power divided by pump efficiency, plus motor losses. Prestil Energy's technical team performs these calculations, considering all factors to ensure accurate motor selection. Our selection process ensures optimal motor sizing.",
  },
  {
    question: "What safety margins are recommended?",
    answer: "Prestil Energy recommends motors sized to match pump requirements with 10-15% safety margin. This margin accounts for variations in operating conditions and ensures reliable operation. Our selection process includes appropriate safety margins.",
  },
  {
    question: "Can motor power be adjusted after installation?",
    answer: "Motor power is fixed by design. However, variable speed drives (VSDs) can adjust motor speed, affecting power output. Prestil Energy's integrated solutions can include VSDs for operational flexibility. Motor changes require equipment replacement.",
  },
  {
    question: "How does Prestil Energy assist with power selection?",
    answer: "Prestil Energy's technical team analyzes pump requirements and well conditions to recommend optimal motor power. Our selection process ensures proper sizing, considering all factors to optimize performance and economics. We provide comprehensive selection support.",
  },
];

export default function MotorPowerSelection() {
  return (
    <>
      <BlogHero
        title="Motor Power Ratings: 12 kW to 960 kW Selection Guide"
        image={heroImage}
        category="motors"
        date="January 11, 2026"
        readTime={13}
      />
      <BlogLayout
        relatedProducts={[
          {
            id: "2",
            title: "Single-Section Electric Motor 103mm",
            image: "/images/products/motor-single-section-103-1.png",
            href: "/products#motors",
          },
          {
            id: "23",
            title: "Three-Section Electric Motor 103mm",
            image: "/images/products/motor-three-section-103-1.png",
            href: "/products#motors",
          },
        ]}
        relatedPosts={[
          { slug: "submersible-motors-guide", title: "Submersible Electric Motors: Complete Technical Guide" },
          { slug: "motor-sections-comparison", title: "Single-Section vs Multi-Section Submersible Motors" },
        ]}
        author="Prestil Energy India"
        date="January 11, 2026"
        readTime={13}
      >
        <div className="space-y-8">
          <h2 id="introduction">Introduction</h2>
          <p>
            Motor power selection is critical to artificial lift system success. Proper power sizing ensures reliable pump operation without overloading, while optimizing efficiency and economics. Prestil Energy offers motors from 12 kW to 960 kW, enabling precise power matching for all pump requirements.
          </p>
          <p>
            This guide explores motor power selection principles, calculation methods, and selection criteria. Understanding power requirements enables better motor selection decisions that optimize performance, reliability, and economics.
          </p>
          <p>
            Prestil Energy's technical team assists with power selection, ensuring optimal motor sizing for each application. Our comprehensive range and selection expertise ensure appropriate motors for all pump requirements.
          </p>

          <h2 id="power-fundamentals">Power Fundamentals</h2>
          <p>
            Motor power represents the electrical power input required to drive the pump. Pump power requirements depend on flow rate, head, fluid properties, and efficiency. Motor power must match or slightly exceed pump requirements, accounting for efficiency losses.
          </p>
          <p>
            Prestil Energy's motors convert electrical power into mechanical power with high efficiency. Power selection ensures motors operate within their capability while maintaining efficiency. Proper selection prevents overload while optimizing economics.
          </p>

          <h2 id="power-calculation">Power Calculation Methods</h2>
          <p>
            Power calculation begins with pump hydraulic power: flow rate multiplied by head and fluid density, divided by efficiency. Motor power equals pump power divided by motor efficiency, plus safety margin. Prestil Energy's technical team performs these calculations for accurate selection.
          </p>
          <p>
            Flow rate and head determine pump power requirements. Higher flow rates or head require more power. Prestil Energy considers these factors in motor selection, ensuring motors match pump requirements.
          </p>

          <h2 id="power-ranges">Prestil Energy Power Ranges</h2>
          <p>
            Single-section motors provide 12-320 kW, suitable for most standard applications. Two-section motors extend to 640 kW for high-power requirements. Three-section motors reach 960 kW for maximum power applications. Prestil Energy's comprehensive range ensures appropriate motors for all requirements.
          </p>

          <h2 id="selection-criteria">Selection Criteria</h2>
          <p>
            Power selection considers pump requirements, operating conditions, and safety margins. Prestil Energy recommends motors sized to match pump requirements with 10-15% safety margin. This ensures reliable operation while optimizing economics.
          </p>

          <h2 id="prestil-energy-solutions">Prestil Energy Power Solutions</h2>
          <p>
            Prestil Energy offers comprehensive motor solutions covering power from 12 kW to 960 kW. Our technical team assists with power selection, ensuring optimal motor sizing for each application. ISO 9001:2015 certified manufacturing ensures consistent quality.
          </p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View Motor Power Range
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </p>

          <BlogFAQ faqs={faqs} />

          <h2 id="conclusion">Conclusion</h2>
          <p>
            Proper motor power selection ensures reliable pump operation and optimal economics. Prestil Energy's comprehensive range and technical expertise ensure optimal selection for all applications. Contact us to discuss motor power selection for your specific requirements.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}
