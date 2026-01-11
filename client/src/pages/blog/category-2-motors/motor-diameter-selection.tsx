import { BlogLayout } from "../blog-layout";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogFAQ } from "@/components/blog/blog-faq";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImage = "/images/industrial_electric_motor_studio_shot.png";

const faqs = [
  {
    question: "What motor diameters does Prestil Energy offer?",
    answer: "Prestil Energy offers motors in 103mm, 117mm, and 123mm outside diameters. Each diameter serves different power ranges and application requirements. Diameter selection depends on power requirements, well conditions, and completion constraints.",
  },
  {
    question: "How do I choose between 103mm, 117mm, and 123mm motors?",
    answer: "Diameter selection depends on power requirements and well conditions. 103mm motors serve most applications up to 320 kW (single-section) or 960 kW (three-section). 117mm and 123mm motors provide additional power capacity or suit specific well completion requirements. Prestil Energy's technical team assists with diameter selection.",
  },
  {
    question: "What are the advantages of smaller diameter motors?",
    answer: "Smaller diameter motors (103mm) offer advantages including: fit in smaller casings, lower material costs, easier handling, compatibility with standard completions, and reduced wellbore restrictions. Prestil Energy's 103mm motors serve most applications efficiently.",
  },
  {
    question: "When are larger diameter motors needed?",
    answer: "Larger diameter motors (117mm, 123mm) are needed when power requirements exceed smaller diameter capability or when well completions require larger diameters. These motors provide additional power capacity within diameter constraints, enabling higher-power applications.",
  },
  {
    question: "How does diameter affect motor power?",
    answer: "Larger diameters allow larger stator and rotor, enabling higher power within section constraints. 103mm motors provide up to 320 kW per section. 117mm and 123mm motors can provide higher power per section, extending total power capability for multi-section configurations.",
  },
  {
    question: "Can I use different diameter motors in the same well?",
    answer: "Motor diameter should match pump diameter and well completion requirements. Mixing diameters can cause installation difficulties and operational issues. Prestil Energy's consistent diameter approach ensures compatibility across system components.",
  },
  {
    question: "How does diameter affect installation?",
    answer: "Smaller diameters simplify installation by reducing weight and easing handling. Larger diameters may require more handling equipment but provide higher power capability. Prestil Energy's diameter range balances installation ease with power requirements.",
  },
  {
    question: "What is the relationship between diameter and efficiency?",
    answer: "Larger diameters allow more efficient designs through increased stator and rotor size. However, Prestil Energy optimizes all diameters for maximum efficiency. Diameter selection primarily depends on power requirements rather than efficiency differences.",
  },
  {
    question: "Do larger diameter motors cost more?",
    answer: "Larger diameter motors cost more due to increased material usage and manufacturing complexity. However, they enable higher-power applications that smaller diameters cannot serve. Prestil Energy provides cost-effective solutions across all diameters.",
  },
  {
    question: "How does Prestil Energy assist with diameter selection?",
    answer: "Prestil Energy's technical team analyzes power requirements, well conditions, and completion constraints to recommend optimal motor diameter. Our selection process ensures appropriate diameter for each application, balancing power requirements with practical considerations.",
  },
];

export default function MotorDiameterSelection() {
  return (
    <>
      <BlogHero
        title="103mm vs 117mm vs 123mm Motor Diameters: Which to Choose?"
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
          {
            id: "18",
            title: "Single-Section Electric Motor 117mm",
            image: "/images/products/motor-single-section-117-1.png",
            href: "/products#motors",
          },
          {
            id: "19",
            title: "Single-Section Electric Motor 123mm",
            image: "/images/products/motor-single-section-123-1.png",
            href: "/products#motors",
          },
        ]}
        relatedPosts={[
          { slug: "submersible-motors-guide", title: "Submersible Electric Motors: Complete Technical Guide" },
          { slug: "motor-power-selection", title: "Motor Power Ratings: 12 kW to 960 kW Selection Guide" },
        ]}
        author="Prestil Energy India"
        date="January 11, 2026"
        readTime={12}
      >
        <div className="space-y-8">
          <h2 id="introduction">Introduction</h2>
          <p>
            Motor diameter selection is a critical decision affecting power capability, well compatibility, installation ease, and system economics. Prestil Energy offers motors in three diameters—103mm, 117mm, and 123mm—each optimized for different applications and power requirements.
          </p>
          <p>
            Understanding diameter differences enables optimal motor selection that balances power requirements with practical considerations. This article compares the three diameter options, examining power capabilities, applications, costs, and selection criteria.
          </p>
          <p>
            Prestil Energy's technical team assists with diameter selection based on power requirements, well conditions, and completion constraints. Our comprehensive range ensures appropriate motors for all applications, from standard 103mm designs to specialized larger diameters.
          </p>

          <h2 id="103mm-motors">103mm Motor Diameter</h2>
          <p>
            The 103mm diameter represents Prestil Energy's standard motor size, serving most applications efficiently. This diameter provides power from 12 kW (single-section) to 960 kW (three-section), accommodating diverse pump requirements while maintaining well compatibility.
          </p>
          <p>
            103mm motors offer advantages including: standard well compatibility, lower material costs, easier handling, and proven reliability. This diameter fits standard well completions while providing sufficient power for most applications. Prestil Energy's 103mm motors are the most commonly selected option.
          </p>
          <p>
            Power capability ranges from 12-320 kW for single-section configurations, up to 640 kW for two-section, and 960 kW for three-section designs. This range covers most pump applications from low-flow mature wells to high-capacity production systems.
          </p>
          <p>
            Installation advantages include manageable weight, standard handling equipment compatibility, and proven installation procedures. Prestil Energy's extensive 103mm experience ensures reliable installation and operation across diverse applications.
          </p>

          <h2 id="117mm-motors">117mm Motor Diameter</h2>
          <p>
            The 117mm diameter provides intermediate power capability between 103mm and 123mm options. This diameter serves applications requiring power beyond 103mm single-section limits but where 123mm may be unnecessary or incompatible with well completions.
          </p>
          <p>
            117mm motors offer increased power capacity within manageable dimensions. This diameter enables higher-power single-section applications or provides additional power headroom in multi-section configurations. Prestil Energy's 117mm motors bridge the gap between standard and large-diameter options.
          </p>
          <p>
            Applications include high-power single-section requirements, wells requiring larger diameter motors for completion compatibility, or systems where 117mm provides optimal power-to-size balance. Prestil Energy's technical team can advise on 117mm suitability for specific applications.
          </p>

          <h2 id="123mm-motors">123mm Motor Diameter</h2>
          <p>
            The 123mm diameter represents Prestil Energy's largest standard motor size, providing maximum power capacity within diameter constraints. This diameter serves applications requiring maximum power or specific well completion requirements.
          </p>
          <p>
            123mm motors offer highest power capability per section, enabling maximum-power single-section applications or extending multi-section power limits. This diameter provides additional power headroom for demanding applications requiring maximum capability.
          </p>
          <p>
            Applications include maximum-power requirements, wells with completion constraints requiring larger diameters, or systems where 123mm provides optimal power-to-cost balance. Prestil Energy's 123mm motors enable maximum production from highly productive wells.
          </p>

          <h2 id="comparative-analysis">Comparative Analysis</h2>
          <h3 id="power-capability-comparison">Power Capability</h3>
          <p>
            103mm motors provide 12-960 kW depending on section count, serving most applications. 117mm motors extend single-section power capability and provide additional headroom in multi-section designs. 123mm motors provide maximum power capability, enabling highest-power applications.
          </p>

          <h3 id="cost-comparison-diameter">Cost Comparison</h3>
          <p>
            103mm motors offer lowest cost due to standard sizing and manufacturing efficiency. 117mm motors cost more but provide increased power capability. 123mm motors represent highest cost but enable maximum-power applications. Cost per kilowatt generally decreases with diameter due to manufacturing efficiency.
          </p>

          <h3 id="well-compatibility">Well Compatibility</h3>
          <p>
            103mm motors fit standard well completions, ensuring broad compatibility. 117mm and 123mm motors require larger casings but provide additional power capability. Well completion constraints may dictate diameter selection regardless of power requirements.
          </p>

          <h2 id="selection-methodology">Selection Methodology</h2>
          <p>
            Diameter selection begins with power requirement determination based on pump specifications. Prestil Energy's technical team calculates power requirements and recommends appropriate diameter. Power requirements typically drive selection, with well completion constraints as secondary factors.
          </p>
          <p>
            Well completion constraints may require specific diameters regardless of power requirements. Prestil Energy considers completion requirements in selection recommendations, ensuring compatibility with well equipment and procedures.
          </p>
          <p>
            Economic factors affect selection decisions. 103mm motors offer lowest cost for applications within their capability. Larger diameters enable higher-power applications that may provide better economics despite higher equipment costs. Prestil Energy considers economic factors in selection recommendations.
          </p>

          <h2 id="prestil-energy-solutions">Prestil Energy Diameter Solutions</h2>
          <p>
            Prestil Energy offers comprehensive motor solutions across all three diameters, enabling optimal selection for all applications. Our technical team assists with diameter selection, ensuring appropriate motors for each application.
          </p>
          <p>
            Our 25+ years of manufacturing experience include all diameters, ensuring reliable performance regardless of size. Field performance data validates our approach across diameters, demonstrating reliable performance in diverse applications.
          </p>
          <p>
            ISO 9001:2015 certified manufacturing ensures consistent quality across all diameters. Each motor undergoes acceptance testing before delivery, verifying performance meets specifications. This commitment to quality delivers reliability operators require.
          </p>
          <p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Compare Motor Diameters
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </p>

          <BlogFAQ faqs={faqs} />

          <h2 id="conclusion">Conclusion</h2>
          <p>
            Motor diameter selection depends on power requirements, well conditions, and completion constraints. Prestil Energy's comprehensive range across 103mm, 117mm, and 123mm diameters enables optimal selection for all applications.
          </p>
          <p>
            Understanding diameter differences enables better selection decisions. Prestil Energy's technical team can assist with diameter selection based on your specific power requirements and well conditions. Contact us to discuss how our motor diameter options can optimize your artificial lift systems.
          </p>
        </div>
      </BlogLayout>
    </>
  );
}
