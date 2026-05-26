import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}