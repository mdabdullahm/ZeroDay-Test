import HoyHeader from "@/components/hoyzerotest/HoyHeader";
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
    </div>
  );
}