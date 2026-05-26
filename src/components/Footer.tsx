"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Download, ArrowUp, Calendar, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] pt-24 pb-8 overflow-hidden font-['Inter',sans-serif]">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-[#06B6D4]/10 rounded-full blur-[150px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Top Glow Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#06B6D4]/50 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.5)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- Top CTA Area --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[rgba(15,23,42,0.6)] backdrop-blur-2xl border border-[rgba(255,255,255,0.08)] rounded-[2.5rem] p-10 md:p-16 text-center mb-20 shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-6 tracking-tight relative z-10">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]">Amazing</span> Together
          </h2>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Available for freelance projects, collaborations, and creative ideas. Let's craft the future of the web.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5 relative z-10">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#06B6D4] hover:bg-[#0891B2] text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] text-lg"
            >
              Hire Me
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0F172A] border border-[#06B6D4]/30 text-[#06B6D4] hover:bg-[#06B6D4]/10 px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] text-lg flex items-center justify-center gap-2"
            >
              <Calendar size={20} /> Schedule Call
            </motion.button>
          </div>
        </motion.div>

        {/* --- Main Footer Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Col 1: Brand Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col gap-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 bg-gradient-to-br from-[#06B6D4] to-[#8B5CF6] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]">C</div>
              <span className="text-2xl font-bold text-[#F8FAFC] tracking-wide font-['Space_Grotesk',sans-serif]">Cavelen</span>
            </div>
            <p className="text-[#94A3B8] leading-relaxed">
              Premium digital solutions crafted with precision, performance, and modern scalable architectures.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A] border border-[#06B6D4]/30 text-[#06B6D4] text-sm w-fit shadow-[0_0_15px_rgba(6,182,212,0.1)]">
              <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
              Available for Freelance
            </div>
          </motion.div>

          {/* Col 2: Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col gap-6">
            <h4 className="text-[#F8FAFC] font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-[#94A3B8] hover:text-[#06B6D4] hover:translate-x-2 transition-all duration-300 w-fit font-medium">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 3: Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col gap-6">
            <h4 className="text-[#F8FAFC] font-semibold text-lg">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:contact@cavelen.com" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#22D3EE] transition-colors group">
                <Mail size={18} className="text-[#06B6D4] group-hover:scale-110 transition-transform" /> contact@cavelen.com
              </a>
              <a href="tel:+8801611651787" className="flex items-center gap-3 text-[#94A3B8] hover:text-[#22D3EE] transition-colors group">
                <Phone size={18} className="text-[#8B5CF6] group-hover:scale-110 transition-transform" /> +880 1611 651787
              </a>
              <div className="flex items-center gap-3 text-[#94A3B8]">
                <MapPin size={18} className="text-[#06B6D4]" /> Worldwide (Remote)
              </div>
              <button className="flex items-center gap-2 text-[#F8FAFC] bg-[rgba(15,23,42,0.7)] border border-white/10 hover:border-[#06B6D4]/50 hover:bg-[#06B6D4]/10 px-4 py-2.5 rounded-lg transition-all duration-300 w-fit mt-2 font-medium">
                <Download size={16} /> Download Resume
              </button>
            </div>
          </motion.div>

          {/* Col 4: Social Glass Cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-col gap-6">
            <h4 className="text-[#F8FAFC] font-semibold text-lg">Socials</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: FaGithub, name: "GitHub" },
                { icon: FaLinkedin, name: "LinkedIn" },
                { icon: FaTwitter, name: "Twitter/X" },
                { icon: FaInstagram, name: "Instagram" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={index} 
                    href="#"
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="flex flex-col items-center justify-center gap-2 bg-[rgba(15,23,42,0.6)] border border-white/5 p-4 rounded-xl hover:border-[#06B6D4]/40 hover:bg-[#0F172A] transition-all group shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  >
                    <Icon size={24} className="text-[#94A3B8] group-hover:text-[#06B6D4] transition-colors" />
                    <span className="text-[#94A3B8] group-hover:text-[#F8FAFC] text-xs font-medium">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <p className="text-[#94A3B8] text-sm text-center md:text-left font-medium">
            © {currentYear} Cavelen. All rights reserved.
          </p>
          
          <p className="text-[#94A3B8] text-sm flex items-center gap-2 font-medium bg-[rgba(15,23,42,0.5)] px-4 py-1.5 rounded-full border border-white/5">
            Built with <span className="text-[#F8FAFC]">Next.js</span> <span className="text-[#06B6D4]">+</span> <span className="text-[#007ACC]">TypeScript</span>
          </p>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#06B6D4] to-[#8B5CF6] flex items-center justify-center text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] transition-all absolute right-0 -top-6 md:relative md:top-0"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.button>
        </div>

      </div>
    </footer>
  );
}