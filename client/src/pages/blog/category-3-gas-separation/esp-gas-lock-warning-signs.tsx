import { ConciseEspBlog } from "../concise-esp-blog";

export default function EspGasLockWarningSigns() {
  return <ConciseEspBlog title="ESP Gas Lock Warning Signs" category="gas-separation" image="/images/products/gas-separator-gs5-200.png" product={{ id: "6", title: "GS5-200 Gas Separator", image: "/images/products/gas-separator-gs5-200.png", href: "/products#gas-separation" }} introduction="Gas lock can quickly reduce pump performance when free gas reaches the intake faster than the system can handle it." signals="Look for unstable current, falling production, pressure swings, and repeated changes around the same operating rate." actions="Confirm the gas condition, return to a stable operating range, and review separation or intake strategy before increasing speed." relatedPosts={[{ slug: "preventing-gas-lock", title: "Preventing Gas Lock" }, { slug: "free-gas-volume-fraction-limits-before-pump-intake", title: "Free-Gas Volume Fraction Limits Before Pump Intake" }]} />;
}
