"use client";
import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Founder & Lead Developer",
      company: "Cavelen",
      date: "2023 - Present",
      icon: Briefcase,
      color: "text-[#06B6D4]",
      glow: "shadow-[0_0_15px_rgba(6,182,212,0.5)]",
      description: "Leading the development of premium web applications, appointment systems, and specialized financial dashboards.",
      achievements: [
        "Architected a scalable appointment booking system with auto-timezone conversion.",
        "Developed a complex RMB financial dashboard with real-time POS receipt generation.",
        "Built and launched the Cavelen English App with an interactive UI."
      ]
    },
    {
      id: 2,
      role: "Freelance Full Stack Developer",
      company: "Independent",
      date: "2022 - Present",
      icon: Code,
      color: "text-[#8B5CF6]",
      glow: "shadow-[0_0_15px_rgba(139,92,246,0.5)]",
      description: "Collaborated with various clients to build modern, responsive, and high-performance web applications.",
      achievements: [
        "Designed premium glassmorphism landing pages increasing client conversion rates.",
        "Integrated secure backend APIs and Firebase databases for real-time data handling.",
        "Optimized React/Next.js applications for 90+ Lighthouse performance scores."
      ]
    },
    {
      id: 3,
      role: "Computer Engineering Student",
      company: "University",
      date: "2021 - Present",
      icon: GraduationCap,
      color: "text-[#22D3EE]",
      glow: "shadow-[0_0_15px_rgba(34,211,238,0.5)]",
      description: "Building a strong foundation in software engineering, algorithms, hardware architecture, and system design.",
      achievements: [
        "Mastering C, Python, and Assembly alongside modern web technologies.",
        "Applying academic problem-solving skills to real-world development challenges.",
        "Continuously learning operating systems and advanced networking concepts."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#06B6D4]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#06B6D4] font-medium tracking-wider uppercase text-sm mb-2 block">My Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif]">
              Professional Experience
            </h2>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#06B6D4] via-[#8B5CF6] to-transparent md:-translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.4)]"
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Glowing Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-[#020617] border-2 border-[rgba(255,255,255,0.1)] -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className={`w-8 h-8 rounded-full bg-[#0F172A] flex items-center justify-center border border-white/10 ${exp.glow}`}
                    >
                      <Icon size={14} className={exp.color} />
                    </motion.div>
                  </div>

                  {/* Empty space for desktop layout alignment */}
                  <div className="hidden md:block w-5/12" />

                  {/* Experience Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="w-full md:w-5/12 ml-16 md:ml-0 bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#06B6D4]/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-[#8B5CF6] font-medium text-lg">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#94A3B8] text-sm bg-[#020617] px-3 py-1.5 rounded-full border border-white/5 w-fit">
                        <Calendar size={14} className="text-[#06B6D4]" />
                        {exp.date}
                      </div>
                    </div>

                    <p className="text-[#94A3B8] mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <ChevronRight size={18} className="text-[#06B6D4] mt-0.5 shrink-0" />
                          <p className="text-[#E2E8F0] text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
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