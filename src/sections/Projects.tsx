"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const filters = ["All", "Frontend", "Full Stack", "AI", "UI/UX"];

const projectsData = [
  {
    id: 1,
    title: "Cavelen Appointment System",
    category: "Full Stack",
    description: "A professional platform featuring automated booking and localized timezone conversion for seamless client-admin scheduling.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: ["Timezone Auto-conversion", "Admin Dashboard", "Booking Management"],
    liveLink: "#",
    githubLink: "#",
    gradient: "from-[#06B6D4]/20 to-[#020617]"
  },
  {
    id: 2,
    title: "RMB Financial Dashboard",
    category: "Full Stack",
    description: "A comprehensive dashboard for tracking Chinese Yuan transactions, calculating profits, and generating POS-style receipts.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    features: ["Real-time Tracking", "Profit Calculation", "POS Receipt Generation"],
    liveLink: "#",
    githubLink: "#",
    gradient: "from-[#8B5CF6]/20 to-[#020617]"
  },
  {
    id: 3,
    title: "Cavelen English App",
    category: "Frontend",
    description: "An interactive and engaging English learning application designed for intuitive language acquisition and practice.",
    tech: ["Next.js", "Framer Motion", "DaisyUI"],
    features: ["Interactive Lessons", "Gamified UI", "Progress Tracking"],
    liveLink: "#",
    githubLink: "#",
    gradient: "from-[#06B6D4]/20 to-[#8B5CF6]/20"
  },
  {
    id: 4,
    title: "Premium SaaS Landing",
    category: "UI/UX",
    description: "Dark-themed, futuristic landing page with glassmorphism effects, scroll animations, and responsive bento grids.",
    tech: ["Figma", "React", "Tailwind CSS"],
    features: ["Glassmorphism", "Micro-interactions", "Responsive Design"],
    liveLink: "#",
    githubLink: "#",
    gradient: "from-[#22D3EE]/20 to-[#020617]"
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => 
    activeFilter === "All" ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-[#06B6D4]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#06B6D4] font-medium tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-6">
              Featured Projects
            </h2>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === filter 
                    ? "bg-[#06B6D4]/10 border-[#06B6D4] text-[#06B6D4] shadow-[0_0_15px_rgba(6,182,212,0.2)]" 
                    : "bg-[#0F172A]/50 border-white/5 text-[#94A3B8] hover:border-[#06B6D4]/50 hover:text-[#E2E8F0]"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="group bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] overflow-hidden flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#06B6D4]/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500"
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-56 relative overflow-hidden bg-[#020617]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:scale-110 transition-transform duration-700 ease-in-out flex items-center justify-center`}>
                     <span className="text-[#94A3B8]/50 font-medium tracking-widest uppercase text-sm">Project Preview</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Subtle hover gradient inside card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#22D3EE] transition-colors">{project.title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs font-medium text-[#E2E8F0] bg-[#020617] border border-white/10 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features List */}
                    <ul className="flex flex-col gap-2 mb-8">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                          <CheckCircle2 size={16} className="text-[#8B5CF6]" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                      <a href={project.liveLink} className="flex-1 flex items-center justify-center gap-2 bg-[#06B6D4] hover:bg-[#0891B2] text-white py-3 rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                      <a href={project.githubLink} className="flex items-center justify-center gap-2 bg-[#0F172A] border border-white/10 hover:border-[#06B6D4]/50 text-[#E2E8F0] hover:text-[#06B6D4] py-3 px-6 rounded-xl font-medium transition-all">
                        <FaGithub size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}