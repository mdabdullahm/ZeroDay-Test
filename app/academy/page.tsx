import AcademyCertification from "@/components/academy/AcademyCertification";
import AcademyCTA from "@/components/academy/AcademyCTA";
import AcademyFAQ from "@/components/academy/AcademyFAQ";
import AcademyHero from "@/components/academy/AcademyHero";
import AcademyMentors from "@/components/academy/AcademyMentors";
import CourseCatalog from "@/components/academy/CourseCatalog";
import EthicalGuidelines from "@/components/academy/EthicalGuidelines";
import LearningPaths from "@/components/academy/LearningPaths";
import TargetAudience from "@/components/academy/TargetAudience";
import TeachingMethodology from "@/components/academy/TeachingMethodology";
import ToolsWillLearn from "@/components/academy/ToolsWillLearn";
import WhyAcademy from "@/components/academy/WhyAcademy";

export default function AcademyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <AcademyHero />
      {/* Why This Academy section 2 */}
      <WhyAcademy/>
      {/* Learning Tracks section 3 */}
      <LearningPaths/>
      {/* Courses Modules section 4*/}
      <CourseCatalog/>
      {/*  Teaching Methodology section 5 */}
      <TeachingMethodology/>
      {/* Ethical & Legal Guidelines section 6 */}
      <EthicalGuidelines/>
      {/* Tools Students Will Learn section 7 */}
      <ToolsWillLearn/>
      {/* Who Is This Academy For section 8 */}
      <TargetAudience/>
      {/* Certification section 9 */}
      <AcademyCertification/>
      {/* Instructor/Mentor section 10 */}
      <AcademyMentors/>
      {/* FAQ (Frequently Asked Questions) section 11 */}
      <AcademyFAQ/>
      {/* Academy CTA section 12 */}
      <AcademyCTA/>
    </div>
  );
}