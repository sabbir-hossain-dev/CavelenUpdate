"use client";
import { motion } from "framer-motion";
import { Terminal, LayoutTemplate, Database, Briefcase, Rocket } from "lucide-react";

export default function LearningJourney() {
  const journey = [
    {
      year: "2022",
      title: "Started Coding",
      description: "Wrote my first lines of code. Discovered the logic of programming and built a solid foundation in core concepts.",
      icon: Terminal,
    },
    {
      year: "2023",
      title: "Learned Frontend",
      description: "Mastered HTML, CSS, JavaScript, and React. Began crafting responsive, interactive, and modern web layouts.",
      icon: LayoutTemplate,
    },
    {
      year: "2024",
      title: "Built MERN Projects",
      description: "Transitioned to full-stack development. Created RESTful APIs, managed databases with MongoDB, and built dynamic applications.",
      icon: Database,
    },
    {
      year: "2025",
      title: "Started Freelancing",
      description: "Took on client projects and founded Cavelen. Delivered professional, premium digital solutions and appointment systems.",
      icon: Briefcase,
    },
    {
      year: "2026",
      title: "Advanced Full Stack",
      description: "Mastering Next.js, TypeScript, and modern scalable architectures to build high-performance SaaS products.",
      icon: Rocket,
    },
  ];

  return (
    <section id="journey" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Subtle Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#06B6D4]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#06B6D4] font-medium tracking-wider uppercase text-sm mb-2 block">My Evolution</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif]">
              Learning Journey
            </h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Cyan Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-[#06B6D4]/30 md:-translate-x-1/2 shadow-[0_0_15px_rgba(6,182,212,0.5)] rounded-full"
          >
            {/* Animated glowing progress dot moving down */}
            <motion.div 
              animate={{ y: [0, 800, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-16 bg-[#06B6D4] rounded-full blur-[2px]"
            />
          </motion.div>

          <div className="flex flex-col gap-12 md:gap-20">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={item.year} className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Glowing Node */}
                  <div className="absolute left-6 md:left-1/2 w-14 h-14 rounded-full bg-[#020617] border border-[#06B6D4]/50 -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center text-[#06B6D4]"
                    >
                      <Icon size={18} />
                    </motion.div>
                  </div>

                  {/* Empty space for desktop alternating layout */}
                  <div className="hidden md:block w-5/12" />

                  {/* Journey Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.03 }}
                    className="w-[calc(100%-4rem)] md:w-5/12 ml-auto md:ml-0 bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#06B6D4]/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)] transition-all duration-300 relative group overflow-hidden"
                  >
                    {/* Hover Glow Inside Card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#E2E8F0]/20 to-transparent absolute -top-2 -right-2">
                        {item.year}
                      </span>
                      
                      <div className="inline-block px-4 py-1.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] text-sm font-bold mb-4">
                        {item.year}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#22D3EE] transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-[#94A3B8] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}