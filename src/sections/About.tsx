"use client";
import { motion } from "framer-motion";
import { FolderKanban, Code2, BrainCircuit, Users } from "lucide-react";

export default function About() {
  const cards = [
    { title: "Projects Completed", value: "15+", icon: FolderKanban },
    { title: "Technologies Learned", value: "10+", icon: Code2 },
    { title: "Problem Solving", value: "Daily", icon: BrainCircuit },
    { title: "Team Collaboration", value: "Active", icon: Users },
  ];

  return (
    <section id="about" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center z-10 relative">
        
        {/* Left Side: Profile Image & Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-start"
        >
          {/* Image Container */}
          <div className="relative w-72 h-[400px] md:w-96 md:h-[500px] rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0F172A]/50 backdrop-blur-sm shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/20 to-[#020617] flex items-center justify-center"
            >
              <span className="text-[#94A3B8] font-medium">Profile Image Here</span>
            </motion.div>
          </div>

          {/* Floating Experience Badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-[#0F172A]/90 border border-[rgba(255,255,255,0.08)] backdrop-blur-xl p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center gap-1"
          >
            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]">2+</span>
            <span className="text-[#94A3B8] text-sm font-medium tracking-wide">Years Experience</span>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[#06B6D4] font-medium tracking-wider uppercase text-sm">Discover</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] font-['Space_Grotesk',sans-serif]">
              About Me
            </h2>
          </div>

          <p className="text-[#94A3B8] text-lg leading-relaxed">
            I am a passionate Full Stack Developer and a Computer Engineering student bridging the gap between hardware architecture and modern web experiences. My focus lies in building scalable, user-centric applications with clean code.
          </p>

          <p className="text-[#94A3B8] text-lg leading-relaxed mb-4">
            Through my journey building <span className="text-[#E2E8F0] font-semibold">Cavelen</span> and various academic projects, I've developed a deep appreciation for the entire development lifecycle—from conceptualization and system design to deployment and performance optimization.
          </p>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#0F172A]/70 border border-[rgba(255,255,255,0.08)] rounded-xl p-5 flex flex-col gap-3 transition-all duration-300 hover:border-[#06B6D4]/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group"
                >
                  <Icon className="text-[#06B6D4] group-hover:text-[#22D3EE] transition-colors" size={24} />
                  <div>
                    <h4 className="text-2xl font-bold text-[#E2E8F0] mb-1">{card.value}</h4>
                    <p className="text-[#94A3B8] text-sm font-medium">{card.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}