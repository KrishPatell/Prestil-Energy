import { ConciseEspBlog } from "../concise-esp-blog";

export default function EspSparePartsStorageBasics() {
  return <ConciseEspBlog title="ESP Spare Parts Storage Basics" category="maintenance" image="/images/3d_technical_render_of_submersible_pump.png" product={{ id: "5", title: "ESP System Components", image: "/images/products/20240717100620530.png", href: "/products#integrated-solutions" }} introduction="Proper storage keeps spare ESP components ready for service instead of creating hidden risk before installation." signals="Check packaging, seals, humidity, cleanliness, identification, preservation dates, and handling damage." actions="Store components in clean, dry conditions, rotate stock by approved dates, and record every inspection." relatedPosts={[{ slug: "esp-storage-handling-field", title: "ESP Storage and Field Handling" }, { slug: "esp-preservation-plan-for-long-lead-spares-storage", title: "ESP Preservation Plan for Long-Lead Spares" }]} />;
}
