import AcademyHero from "@/components/academy/AcademyHero";
import CourseCatalog from "@/components/academy/CourseCatalog";
import LearningPaths from "@/components/academy/LearningPaths";
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
    </div>
  );
}