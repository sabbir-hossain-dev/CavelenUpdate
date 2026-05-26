"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "contact@cavelen.com",
      color: "text-[#06B6D4]"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+880 1611 651787",
      color: "text-[#8B5CF6]"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Available for Remote Work Worldwide",
      color: "text-[#22D3EE]"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06B6D4]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-[#06B6D4] font-medium tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] font-['Space_Grotesk',sans-serif] mb-4">
              Let's Work Together
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto text-lg">
              Have a project in mind or want to discuss opportunities? I'm always open to talking about product design, engineering, and new ideas.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-5 p-5 bg-[rgba(15,23,42,0.4)] border border-white/5 rounded-2xl hover:border-[#06B6D4]/30 hover:bg-[rgba(15,23,42,0.7)] transition-all duration-300 group"
                  >
                    <div className={`p-4 rounded-xl bg-[#020617] border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} className={info.color} />
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-sm font-medium mb-1">{info.title}</p>
                      <h4 className="text-[#E2E8F0] font-semibold text-lg">{info.details}</h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-[#94A3B8] font-medium mb-4 ml-1">Connect with me</p>
              <div className="flex gap-4">
                {[FaGithub, FaLinkedin, FaWhatsapp].map((Icon, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-full bg-[rgba(15,23,42,0.4)] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:border-[#06B6D4]/50 hover:text-[#06B6D4] hover:bg-[rgba(15,23,42,0.7)] transition-all shadow-lg"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[#E2E8F0] text-sm font-medium ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Mr. X"
                    className="w-full bg-[#0F172A] text-[#E2E8F0] placeholder-[#64748B] px-5 py-4 rounded-xl border border-white/5 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[#E2E8F0] text-sm font-medium ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="you@email.com"
                    className="w-full bg-[#0F172A] text-[#E2E8F0] placeholder-[#64748B] px-5 py-4 rounded-xl border border-white/5 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[#E2E8F0] text-sm font-medium ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-[#0F172A] text-[#E2E8F0] placeholder-[#64748B] px-5 py-4 rounded-xl border border-white/5 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[#E2E8F0] text-sm font-medium ml-1">Message</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#0F172A] text-[#E2E8F0] placeholder-[#64748B] px-5 py-4 rounded-xl border border-white/5 focus:border-[#06B6D4] focus:ring-2 focus:ring-[#06B6D4]/20 outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button 
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-2 bg-gradient-to-r from-[#06B6D4] to-[#0891B2] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-shadow duration-300"
              >
                Send Message <Send size={18} />
              </motion.button>
              
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}