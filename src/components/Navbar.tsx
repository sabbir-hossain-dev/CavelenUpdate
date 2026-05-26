"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Moon, Sun } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(15,23,42,0.7)] backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Brand */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#06B6D4] rounded-lg flex items-center justify-center text-[#020617] font-bold">C</div>
          <span className="text-xl font-bold text-[#E2E8F0]">Cavelen</span>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} 
               className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors relative group">
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#06B6D4] transition-all group-hover:w-full shadow-[0_0_10px_#06B6D4]" />
            </a>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button whileHover={{ scale: 1.05 }} className="border border-[#06B6D4] text-[#06B6D4] px-4 py-2 rounded-full hover:bg-[#06B6D4] hover:text-white transition-all flex items-center gap-2">
            <Download size={16} /> Resume
          </motion.button>
          <button onClick={() => setIsDark(!isDark)} className="text-[#94A3B8]">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-[#E2E8F0]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} 
            className="md:hidden bg-[#020617]/95 border-b border-[rgba(255,255,255,0.08)] flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-[#94A3B8] hover:text-[#06B6D4]">
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}