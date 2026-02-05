import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
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
    </main>
  );
}
