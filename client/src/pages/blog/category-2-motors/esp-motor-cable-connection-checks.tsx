import { ConciseEspBlog } from "../concise-esp-blog";

export default function EspMotorCableConnectionChecks() {
  return <ConciseEspBlog title="ESP Motor Cable Connection Checks" category="motors" image="/images/industrial_electric_motor_studio_shot.png" product={{ id: "2", title: "Submersible Electric Motor", image: "/images/products/motor-single-section-117-1.png", href: "/products#motors" }} introduction="Good cable connections protect the motor from heat, voltage loss, and avoidable electrical faults." signals="Review insulation resistance, phase balance, torque records, connector condition, and any sign of moisture or damage." actions="Use the approved connection procedure, record test values before energizing, and correct defects before run-in." relatedPosts={[{ slug: "esp-motor-cable-splice-quality-control-field-protocol", title: "ESP Motor Cable Splice Quality Control" }, { slug: "esp-cables-guide", title: "ESP Cables Guide" }]} />;
}
