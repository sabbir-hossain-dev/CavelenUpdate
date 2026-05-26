"use client";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Award, Target } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#06B6D4]/5 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#06B6D4] font-medium tracking-wider uppercase text-sm mb-2 block">Academics</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif]">
              Education
            </h2>
          </motion.div>
        </div>

        {/* Centered Education Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          whileHover={{ y: -5 }}
          className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#06B6D4]/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500 relative group overflow-hidden"
        >
          {/* Hover Glow Inside Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 md:gap-12">
            
            {/* Left side: Logo & Core Info */}
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#06B6D4]/20 to-[#020617] border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#F8FAFC] group-hover:text-[#22D3EE] transition-colors">University Name</h3>
                  <p className="text-[#06B6D4] font-medium">B.Sc. in Computer Engineering</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-[#94A3B8] text-sm bg-[#020617] px-4 py-2 rounded-full border border-white/5">
                  <Calendar size={16} className="text-[#06B6D4]" />
                  2021 - Present (Expected 2025)
                </div>
                <div className="flex items-center gap-2 text-[#94A3B8] text-sm bg-[#020617] px-4 py-2 rounded-full border border-white/5">
                  <Target size={16} className="text-[#06B6D4]" />
                  CGPA: 3.85 / 4.00
                </div>
              </div>

              <p className="text-[#94A3B8] leading-relaxed">
                Focusing on software architecture, full-stack web development, and algorithms. Actively bridging the gap between hardware functionality and high-level software engineering.
              </p>
            </div>

            {/* Right side: Coursework & Achievements */}
            <div className="flex-1 flex flex-col gap-8 md:border-l border-white/5 md:pl-10">
              
              {/* Coursework */}
              <div>
                <h4 className="flex items-center gap-2 text-[#F8FAFC] font-semibold mb-4">
                  <BookOpen size={18} className="text-[#06B6D4]" />
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "Operating Systems", "Web Engineering", "Database Management", "Computer Networks"].map((course, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs font-medium text-[#E2E8F0] bg-[#0F172A] border border-white/10 rounded-lg hover:border-[#06B6D4]/50 hover:text-[#06B6D4] transition-colors cursor-default">
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="flex items-center gap-2 text-[#F8FAFC] font-semibold mb-4">
                  <Award size={18} className="text-[#06B6D4]" />
                  Academic Achievements
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-[#94A3B8] text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-1.5 shrink-0 shadow-[0_0_8px_#06B6D4]" />
                    Consistently maintaining high academic standing in core engineering modules.
                  </li>
                  <li className="flex items-start gap-3 text-[#94A3B8] text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-1.5 shrink-0 shadow-[0_0_8px_#06B6D4]" />
                    Applying academic problem-solving skills to real-world freelance projects.
                  </li>
                  <li className="flex items-start gap-3 text-[#94A3B8] text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] mt-1.5 shrink-0 shadow-[0_0_8px_#06B6D4]" />
                    Participated in various tech fests and coding bootcamps.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}