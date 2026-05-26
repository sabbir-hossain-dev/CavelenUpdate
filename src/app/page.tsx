import Hero from "@/sections/Hero";
import About from "@/sections/About";
import LearningJourney from "@/sections/LearningJourney";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Certifications from "@/sections/Certifications";


export default function Home() {
  return (
    <main className="bg-[#020617]">
      <Hero />
      <About />
      <LearningJourney />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
    </main>
  );
}