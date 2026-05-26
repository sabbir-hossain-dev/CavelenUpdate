"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, MessageSquare, Code2, Database, Layout } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  // 1. Mouse Follow Glow Effect Variables
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // 2. Setup Mouse Listener & Particles on Client Mount
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Generate random subtle particles
    const generatedParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
    }));
    setParticles(generatedParticles);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20 bg-[#020617] font-['Inter',sans-serif]">
      
      {/* --- EFFECTS --- */}
      {/* Mouse Follow Glow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] bg-[rgba(34,211,238,0.08)] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block"
        style={{ x: springX, y: springY }}
      />

      {/* Abstract Background Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Animated Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bg-white/20 rounded-full"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center z-10 w-full">
        
        {/* Left Side: Texts & Buttons */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F172A] border border-[#06B6D4]/30 text-[#06B6D4] text-sm mb-8 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
            Available for Freelance
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-[#F8FAFC] mb-6 tracking-tight font-['Space_Grotesk',sans-serif]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#22D3EE]">Sabbir</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#94A3B8] mb-6 font-medium">
            Full Stack Web Developer & Computer Engineering Student
          </p>
          
          <p className="text-[#94A3B8] mb-10 leading-relaxed max-w-lg text-lg">
            Building digital experiences with a focus on performance, scalability, and premium UI design. Currently crafting the future of web at <span className="text-white font-semibold">Cavelen</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-[#06B6D4] hover:bg-[#0891B2] text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1">
              View Projects
            </button>
            <button className="bg-[#0F172A] border border-[#06B6D4]/30 text-[#06B6D4] hover:bg-[#06B6D4]/10 px-8 py-3.5 rounded-xl font-medium transition-all hover:-translate-y-1">
              Download Resume
            </button>
          </div>

          {/* Social Icons Row */}
          <div className="flex gap-4 text-[#94A3B8]">
            {[FaGithub, FaLinkedin, Mail, MessageSquare].map((Icon, index) => (
              <motion.a 
                key={index}
                href="#" 
                whileHover={{ scale: 1.15, y: -5 }}
                className="p-3.5 bg-[#0F172A] rounded-full border border-white/5 hover:border-[#06B6D4]/50 hover:text-[#06B6D4] transition-colors shadow-lg flex items-center justify-center"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Developer Illustration / Bento Card & Floating Tech */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative h-[500px] hidden lg:flex items-center justify-center">
          
          {/* Main Glassmorphism Profile Card */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-80 h-80 bg-[#0F172A]/70 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.1)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/10 to-[#8B5CF6]/10 z-0" />
            
            <div className="w-28 h-28 bg-gradient-to-tr from-[#06B6D4] to-[#8B5CF6] rounded-full mb-6 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center text-5xl font-black text-white z-10">
              C
            </div>
            <h3 className="text-2xl font-bold text-white z-10 tracking-wider">CAVELEN</h3>
            <p className="text-[#22D3EE] text-sm z-10 mt-2 font-medium">Premium Web Studio</p>
          </motion.div>

          {/* Floating Tech Stack Icon 1 */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-8 right-12 bg-[#0F172A]/90 border border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-2xl z-20 text-[#06B6D4]"
          >
            <Code2 size={32} />
          </motion.div>

          {/* Floating Tech Stack Icon 2 */}
          <motion.div 
            animate={{ y: [0, 25, 0], x: [0, -10, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-12 left-8 bg-[#0F172A]/90 border border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-2xl z-20 text-[#8B5CF6]"
          >
            <Database size={32} />
          </motion.div>

          {/* Floating Tech Stack Icon 3 */}
          <motion.div 
            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }} 
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-1/2 -left-8 bg-[#0F172A]/90 border border-white/10 p-4 rounded-2xl backdrop-blur-md shadow-2xl z-20 text-[#22D3EE]"
          >
            <Layout size={32} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}