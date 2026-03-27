import DisclosureProcess from "@/components/hoyzerotest/DisclosureProcess";
import EthicsRules from "@/components/hoyzerotest/EthicsRules";
import FAQ from "@/components/hoyzerotest/FAQ";
import HoyCTA from "@/components/hoyzerotest/HoyCTA";
import HoyHeader from "@/components/hoyzerotest/HoyHeader";
import Methodology from "@/components/hoyzerotest/Methodology";
import SampleFindings from "@/components/hoyzerotest/SampleFindings";
import TargetAudience from "@/components/hoyzerotest/TargetAudience";
import TechStack from "@/components/hoyzerotest/TechStack";
import TestingScope from "@/components/hoyzerotest/TestingScope";
import WhatIsHoy from "@/components/hoyzerotest/WhatIsHoy";

export default function HoyZeroTestPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <HoyHeader />
      {/* What is HoyZeroTest section 2*/}
      <WhatIsHoy/>
      {/* Testing Scope section 3 */}
      <TestingScope/>
      {/* Methodology section 4 */}
      <Methodology/>
      {/* Tools & Technologies section 5 */}
      <TechStack/>
      {/* Sample Findings section 6 */}
      <SampleFindings/>
      {/* Zero-Day Ethics & Rules section 7 */}
      <EthicsRules/>
      {/* Responsible Disclosure Process  section 8 */}
      <DisclosureProcess/>
      {/* Who Can Use HoyZeroTest section 9 */}
      <TargetAudience/>
      {/* Faq section 10 */}
      <FAQ/>
      {/* CTA (Call to Action) section 11 */}
      <HoyCTA/>
    </div>
  );
}