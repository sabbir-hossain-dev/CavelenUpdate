"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink, Trophy, Star, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  // Achievement Stats Data
  const stats = [
    { id: 1, label: "Professional Certifications", value: "05+", icon: Award, color: "text-[#06B6D4]" },
    { id: 2, label: "Hackathons Attended", value: "03", icon: Trophy, color: "text-[#8B5CF6]" },
    { id: 3, label: "Open Source Contributions", value: "15+", icon: Star, color: "text-[#22D3EE]" },
  ];

  // Certifications Data
  const certifications = [
    {
      id: 1,
      title: "Full Stack Web Development",
      organization: "Programming Hero",
      date: "December 2023",
      link: "#",
      icon: ShieldCheck,
      gradient: "from-[#06B6D4] to-[#22D3EE]"
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      organization: "Frontend Masters",
      date: "August 2024",
      link: "#",
      icon: Award,
      gradient: "from-[#8B5CF6] to-[#A78BFA]"
    },
    {
      id: 3,
      title: "System Architecture & Design",
      organization: "Coursera",
      date: "March 2024",
      link: "#",
      icon: CheckCircle2,
      gradient: "from-[#10B981] to-[#34D399]"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-1/4 w-[500px] h-[500px] bg-[#06B6D4]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#06B6D4] font-medium tracking-wider uppercase text-sm mb-2 block">Recognition</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif]">
              Certifications & Achievements
            </h2>
          </motion.div>
        </div>

        {/* Achievement Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[rgba(15,23,42,0.4)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex items-center gap-5 hover:border-[#06B6D4]/30 transition-all duration-300"
              >
                <div className={`p-4 rounded-xl bg-[#020617] border border-white/5 shadow-inner ${stat.color}`}>
                  <Icon size={28} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-[#F8FAFC] mb-1">{stat.value}</h4>
                  <p className="text-[#94A3B8] text-sm font-medium">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-[#06B6D4]/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500 relative overflow-hidden flex flex-col h-full"
              >
                {/* Hover Glow Inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col flex-grow">
                  
                  {/* Logo / Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.gradient} bg-opacity-10 flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <Icon size={24} />
                  </div>

                  {/* Certificate Info */}
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#22D3EE] transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[#8B5CF6] font-medium text-sm mb-4">
                    {cert.organization}
                  </p>
                  
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-[#94A3B8] text-sm font-medium">
                      {cert.date}
                    </span>
                    
                    {/* Verification Button */}
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-[#06B6D4] bg-[#06B6D4]/10 hover:bg-[#06B6D4] hover:text-white px-4 py-2 rounded-full transition-all duration-300"
                    >
                      Verify <ExternalLink size={14} />
                    </a>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}