import About from "@/components/home/About";
import Achievements from "@/components/home/Achievements";
import CaseStudies from "@/components/home/CaseStudies";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import Tools from "@/components/home/Tools";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* hero section 1 */}
      <Hero/>
      {/* about section 2 */}
      <About/>
      {/* services section 3 */}
      <Services/> 
      {/* Skills & Tools section 4 */}
      <Tools/>
      {/* Case Studies section 5 */}
      <CaseStudies/>
      {/* Authenticated Credentials section 6 */}
      <Achievements/>
      {/* ntercepted Feedbac section 7 */}
      <Testimonials/>
      {/*  Contact section 8 */}
      <Contact/>
    </main>
  );
}
