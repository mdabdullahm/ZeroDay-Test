import CoreServices from "@/components/services/CoreServices";
import HowItWorks from "@/components/services/HowItWorks";
import Industries from "@/components/services/Industries";
import SampleReports from "@/components/services/SampleReports";
import ServiceCTA from "@/components/services/ServiceCTA";
import ServiceEthics from "@/components/services/ServiceEthics";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import ServicePricing from "@/components/services/ServicePricing";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesOverview from "@/components/services/ServicesOverview";
import WhyChooseUs from "@/components/services/WhyChooseUs";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <ServicesHero />
      {/* Services Overview section 2 */}
      <ServicesOverview/>
      {/* Core Services section 3 */}
      <CoreServices/>
      {/* How Our Services Work section 4 */}
      <HowItWorks/>
      {/* Industries We Serve section 5 */}
      <Industries/>
      {/* Value Proposition section 6 */}
      <WhyChooseUs/>
      {/* Trust Protocol section 7 */}
      <ServiceEthics/>
      {/* Encrypted Deliverables section 8 */}
      <SampleReports/>
      {/* Pricing Model section 9 */}
      <ServicePricing/>
      {/* faq section 10*/}
      <ServiceFAQ/>
      {/* Strong CTA section 11 */}
      <ServiceCTA/>
    </div>
  );
}