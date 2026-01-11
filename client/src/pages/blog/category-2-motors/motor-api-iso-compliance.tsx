import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/industrial_electric_motor_studio_shot.png";

const faqs = [
  {
    question: "What is API compliance?",
    answer: "API (American Petroleum Institute) compliance means motors meet API standards for design, materials, and testing. Prestil Energy's motors are designed and manufactured to API standards, ensuring compatibility with industry requirements and reliable operation.",
  },
  {
    question: "What is ISO 9001:2015?",
    answer: "ISO 9001:2015 is an international quality management standard. Prestil Energy's ISO 9001:2015 certification ensures consistent quality across all production stages. This certification demonstrates our commitment to quality and continuous improvement.",
  },
  {
    question: "Why is compliance important?",
    answer: "Compliance ensures motors meet industry standards for safety, performance, and reliability. Prestil Energy's compliance demonstrates our commitment to quality and enables market access. Compliance provides operators with confidence in equipment quality.",
  },
  {
    question: "What standards do Prestil Energy motors meet?",
    answer: "Prestil Energy motors meet API, ISO, and GOST standards. Our ISO 9001:2015 certified quality management system ensures compliance. Motors undergo acceptance testing according to these standards before delivery.",
  },
  {
    question: "How is compliance verified?",
    answer: "Compliance is verified through testing, inspection, and certification. Prestil Energy conducts comprehensive testing according to standards. ISO 9001:2015 certification ensures consistent compliance. Third-party certification validates compliance.",
  },
  {
    question: "What are the benefits of compliance?",
    answer: "Compliance benefits include: market access, operator confidence, quality assurance, and reliability demonstration. Prestil Energy's compliance enables global market participation and provides operators with quality assurance.",
  },
  {
    question: "Does compliance affect performance?",
    answer: "Compliance ensures performance meets standards. Prestil Energy's compliance demonstrates our motors meet industry requirements for performance and reliability. Our 17,500+ hour MTTF validates compliance effectiveness.",
  },
  {
    question: "How does Prestil Energy maintain compliance?",
    answer: "Prestil Energy maintains compliance through ISO 9001:2015 certified quality management, comprehensive testing, and continuous improvement. Our quality system ensures consistent compliance across all production stages.",
  },
  {
    question: "Are all Prestil Energy motors compliant?",
    answer: "Yes, all Prestil Energy motors are designed and manufactured to API and ISO standards. Our ISO 9001:2015 certification ensures consistent compliance. Each motor undergoes acceptance testing before delivery.",
  },
  {
    question: "What documentation proves compliance?",
    answer: "Prestil Energy provides compliance documentation including test certificates, quality records, and certification evidence. Our ISO 9001:2015 certification demonstrates quality management compliance. Operators receive compliance documentation with equipment.",
  },
];

export default function MotorAPIISOCompliance() {
  return (
    <>
      <BlogHero
        title="API and ISO Compliance in Submersible Motor Manufacturing"
        image={heroImage}
        category="motors"
        date="January 11, 2026"
        readTime={12}
      />
      <BlogLayout
        relatedProducts={[
          {
            id: "2",
            title: "Single-Section Electric Motor 103mm",
            image: "/images/products/motor-single-section-103-1.png",
            href: "/products#motors",
          },
        ]}
        relatedPosts={[
          { slug: "submersible-motors-guide", title: "Submersible Electric Motors: Complete Technical Guide" },
        ]}
        author="Prestil Energy India"
        date="January 11, 2026"
        readTime={12}
      >
        <div className="space-y-8">
          <h2 id="introduction">Introduction</h2>
          <p>
            API and ISO compliance ensure submersible motors meet industry standards for design, materials, testing, and quality. Prestil Energy's ISO 9001:2015 certified manufacturing and API-compliant designs demonstrate our commitment to quality and enable global market participation.
          </p>
          <p>
            This article explores compliance standards, certification processes, quality assurance, and compliance benefits. Understanding compliance enables better appreciation of product quality and market acceptance.
          </p>

          <h2 id="compliance-standards">Compliance Standards</h2>
          <p>
            Prestil Energy motors comply with API standards for design and materials, ISO standards for quality management, and GOST standards for regional requirements. Our ISO 9001:2015 certification ensures consistent quality across all production stages.
          </p>

          <h2 id="quality-assurance">Quality Assurance</h2>
          <p>
            Prestil Energy's ISO 9001:2015 certified quality management system ensures consistent compliance. Comprehensive testing verifies performance meets standards. Each motor undergoes acceptance testing before delivery, ensuring compliance.
          </p>

          <h2 id="compliance-benefits">Compliance Benefits</h2>
          <p>
            Compliance enables market access, provides operator confidence, and demonstrates quality commitment. Prestil Energy's compliance enables global market participation and provides operators with quality assurance.
          </p>

          <h2 id="prestil-energy-compliance">Prestil Energy Compliance Commitment</h2>
          <p>
            Prestil Energy maintains compliance through ISO 9001:2015 certified quality management, comprehensive testing, and continuous improvement. Our commitment to compliance ensures quality and enables market participation.
          </p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View Compliant Motors
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </p>

          <BlogFAQ faqs={faqs} />

          <h2 id="conclusion">Conclusion</h2>
          <p>
            API and ISO compliance ensure quality and enable market participation. Prestil Energy's compliance demonstrates our commitment to quality. Contact us to discuss compliance and quality assurance.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}
