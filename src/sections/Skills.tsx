"use client";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaGithub, FaFigma, FaHtml5, FaCss3Alt, FaGitAlt 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiJavascript, SiDaisyui 
} from "react-icons/si";
import { Code2, Server, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-[#06B6D4] to-[#22D3EE]",
      skills: [
        { name: "React & Next.js", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "Tailwind CSS & DaisyUI", level: 95 },
        { name: "HTML5 & CSS3", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-[#8B5CF6] to-[#A78BFA]",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
    {
      title: "Database & Architecture",
      icon: Database,
      color: "from-[#10B981] to-[#34D399]",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "Data Modeling", level: 80 },
        { name: "System Design", level: 75 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-[#F59E0B] to-[#FCD34D]",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Figma (UI/UX)", level: 80 },
        { name: "VS Code & Terminal", level: 95 },
      ],
    },
  ];

  const techStack = [
    { Icon: FaHtml5, name: "HTML" }, { Icon: FaCss3Alt, name: "CSS" },
    { Icon: SiTailwindcss, name: "Tailwind" }, { Icon: SiDaisyui, name: "DaisyUI" },
    { Icon: SiJavascript, name: "JavaScript" }, { Icon: FaReact, name: "React" },
    { Icon: SiNextdotjs, name: "Next.js" }, { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiExpress, name: "Express" }, { Icon: SiMongodb, name: "MongoDB" },
    { Icon: FaGitAlt, name: "Git" }, { Icon: FaGithub, name: "GitHub" },
    { Icon: FaFigma, name: "Figma" }
  ];

  // Duplicate the array for seamless infinite marquee scrolling
  const marqueeItems = [...techStack, ...techStack];

  return (
    <section id="skills" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 -left-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-1/4 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 z-10 relative">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#06B6D4] font-medium tracking-wider uppercase text-sm mb-2 block">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] font-['Space_Grotesk',sans-serif] mb-4">
              My Skills & Tech Stack
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
              A comprehensive look at the tools and technologies I use to build robust, scalable, and premium web experiences.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid layout for Skills Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#0F172A]/70 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#06B6D4]/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Subtle Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white shadow-lg`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#E2E8F0]">{category.title}</h3>
                </div>

                <div className="flex flex-col gap-6 relative z-10">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[#E2E8F0] font-medium">{skill.name}</span>
                        <span className="text-[#94A3B8] text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#020617] rounded-full h-2.5 border border-white/5 overflow-hidden">
                        <motion.div 
                          className={`h-2.5 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Infinite Scrolling Tech Stack Marquee */}
        <div className="relative w-full overflow-hidden bg-[#0F172A]/40 border-y border-[rgba(255,255,255,0.05)] py-10">
          {/* Gradient Fades for the edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10" />

          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {marqueeItems.map((tech, index) => (
              <div key={index} className="flex items-center gap-3 px-8 group cursor-pointer">
                <tech.Icon className="text-4xl text-[#94A3B8] group-hover:text-[#06B6D4] transition-colors duration-300 drop-shadow-md group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <span className="text-[#94A3B8] group-hover:text-[#E2E8F0] text-xl font-medium transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}