import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/3d_technical_render_of_submersible_pump.png";

const faqs = [
  {
    question: "What are ESP control stations?",
    answer: "ESP control stations provide surface control and monitoring for downhole systems. These stations include motor starters, protection devices, monitoring equipment, and control interfaces. Prestil Energy provides control stations in integrated solutions, ensuring reliable system operation.",
  },
  {
    question: "What functions do control stations provide?",
    answer: "Control stations provide motor starting, protection, monitoring, and control functions. Prestil Energy's control stations include all necessary functions for reliable ESP operation. Our integrated solutions ensure optimal control station selection.",
  },
  {
    question: "What is a variable speed drive (VSD)?",
    answer: "VSDs enable motor speed adjustment, allowing flow rate optimization without equipment changes. Prestil Energy's integrated solutions can include VSDs for operational flexibility. VSDs enable production optimization through speed adjustment.",
  },
  {
    question: "What protection is provided?",
    answer: "Control stations provide protection against overload, underload, phase loss, and other electrical faults. Prestil Energy's control stations include comprehensive protection, ensuring safe and reliable operation. Protection prevents equipment damage.",
  },
  {
    question: "What monitoring is available?",
    answer: "Control stations monitor electrical parameters, production rates, and system status. Prestil Energy's control stations provide comprehensive monitoring capabilities. Our telemetry systems extend monitoring to downhole parameters.",
  },
  {
    question: "How are control stations selected?",
    answer: "Control station selection depends on motor power, voltage, and control requirements. Prestil Energy's technical team selects appropriate control stations based on system requirements. Our integrated approach ensures optimal selection.",
  },
  {
    question: "Can control stations be upgraded?",
    answer: "Control stations can be upgraded to add features or capabilities. Prestil Energy can advise on upgrade options. Our technical team can recommend upgrades based on operational needs.",
  },
  {
    question: "What training is provided?",
    answer: "Prestil Energy provides operator training covering control station operation, monitoring, and troubleshooting. Training is included with integrated solutions, ensuring operators can effectively manage systems. Our training programs ensure competent operation.",
  },
  {
    question: "How are control stations maintained?",
    answer: "Control stations require periodic inspection and maintenance. Prestil Energy provides maintenance recommendations. Our technical support assists with maintenance procedures. Proper maintenance ensures reliable operation.",
  },
  {
    question: "How does Prestil Energy ensure control station quality?",
    answer: "Prestil Energy's control station suppliers meet quality standards. Our quality control verifies station quality before delivery. ISO 9001:2015 certified processes ensure consistent quality. Our commitment to quality delivers reliable control station performance.",
  },
];

export default function ESPControlStations() {
  return (
    <>
      <BlogHero
        title="Control Stations and Surface Equipment for ESP Operations"
        image={heroImage}
        category="integrated-solutions"
        date="January 11, 2026"
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
          { slug: "complete-esp-systems", title: "Complete ESP Systems: From Pump to Surface" },
          { slug: "esp-telemetry-monitoring", title: "Telemetry and Monitoring Systems for ESP Performance" },
        ]}
        author="Prestil Energy India"
        date="January 11, 2026"
        readTime={12}
      >
        <div className="space-y-8">
          <h2 id="introduction">Introduction</h2>
          <p>
            Control stations provide surface control and monitoring for ESP systems. Prestil Energy provides control stations in integrated solutions, ensuring reliable system operation. This guide explores control station functions, selection, and operation.
          </p>

          <h2 id="control-functions">Control Functions</h2>
          <p>
            Control stations provide motor starting, protection, monitoring, and control. Prestil Energy's control stations include all necessary functions for reliable ESP operation. Our integrated solutions ensure optimal control station selection.
          </p>

          <h2 id="prestil-energy-control">Prestil Energy Control Solutions</h2>
          <p>
            Prestil Energy provides control stations in integrated solutions. Our technical team selects appropriate stations based on system requirements. ISO 9001:2015 certified processes ensure consistent quality.
          </p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Discuss Control Stations
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </p>

          <BlogFAQ faqs={faqs} />

          <h2 id="conclusion">Conclusion</h2>
          <p>
            Control stations provide essential surface control for ESP systems. Prestil Energy's control solutions ensure reliable operation. Contact us to discuss control station solutions.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}
