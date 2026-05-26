import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </main>
  );
}