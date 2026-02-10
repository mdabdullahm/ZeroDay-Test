"use client";
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, ShieldCheck, Terminal, Award, Cpu, User } from 'lucide-react';

const mentors = [
  {
    alias: "Null_Pointer",
    role: "Lead Offensive Researcher",
    bio: "Over 10 years of experience in penetration testing and malware analysis. OSCP and OSCE certified.",
    certifications: ["OSCP", "OSCE", "CISSP"],
    expertise: ["Binary Exploitation", "Kernel Hacking"],
    color: "text-green-500"
  },
  {
    alias: "Ghost_In_Stack",
    role: "Senior Bug Hunter",
    bio: "Top 1% researcher on global bug bounty platforms. Experienced in finding bugs at companies like Google and Microsoft.",
    certifications: ["CEH Master", "OSWP"],
    expertise: ["Web Security", "API Pentesting"],
    color: "text-blue-500"
  },
  {
    alias: "Kernel_Panic",
    role: "Network Security Architect",
    bio: "Expert in large enterprise network security and cloud hardening. Works with cyber forensics.",
    certifications: ["CISM", "CompTIA Security+"],
    expertise: ["Network Forensics", "Cloud Security"],
    color: "text-purple-500"
  }
];

const AcademyMentors = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <ShieldCheck size={14} /> [ AUTHORIZED_INSTRUCTORS_LIST ]
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
            Elite <span className="text-green-500">Commanders</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-sm md:text-base font-light">
            Our mentors don't just impart theoretical knowledge, they also lead directly in real-world cyber operations.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-zinc-950/40 border border-white/5 rounded-[2.5rem] p-8 hover:border-green-500/20 transition-all duration-500 overflow-hidden"
            >
              {/* Personnel ID Header */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-mono text-green-800 uppercase">Status: Active</span>
                 </div>
                 <span className="text-[9px] font-mono text-gray-700 tracking-tighter">NODE_ID: 0x0{idx+1}</span>
              </div>

              {/* Avatar Placeholder/Visual */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                 <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 <div className="relative w-full h-full rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-green-500 group-hover:border-green-500/30 transition-all overflow-hidden">
                    <User size={48} />
                    {/* Holographic lines overlay on avatar */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #22c55e 3px)', backgroundSize: '100% 4px' }}></div>
                 </div>
              </div>

              {/* Mentor Identity */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors uppercase tracking-tight">
                  {mentor.alias}
                </h3>
                <p className={`text-[10px] font-mono font-bold uppercase tracking-widest mt-1 ${mentor.color}`}>
                  {mentor.role}
                </p>
              </div>

              <p className="text-gray-500 text-xs text-center leading-relaxed mb-6">
                {mentor.bio}
              </p>

              {/* Expertise Tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                 {mentor.expertise.map((exp, eidx) => (
                   <span key={eidx} className="text-[8px] font-mono px-2 py-0.5 bg-white/5 border border-white/10 text-gray-400 rounded uppercase">
                      #{exp}
                   </span>
                 ))}
              </div>

              {/* Certifications Row */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-center gap-6">
                 <div className="flex gap-4">
                    <Github size={18} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
                    <Linkedin size={18} className="text-gray-600 hover:text-blue-500 cursor-pointer transition-colors" />
                    <Globe size={18} className="text-gray-600 hover:text-green-500 cursor-pointer transition-colors" />
                 </div>
              </div>

              {/* Professional Badges (Certification Icons) */}
              <div className="absolute -bottom-2 -right-2 opacity-5 group-hover:opacity-10 transition-opacity">
                 <Terminal size={100} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats Bar */}
        <div className="mt-16 p-8 border border-white/5 bg-zinc-900/10 rounded-3xl flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40">
           <div className="flex items-center gap-3">
              <Award size={24} className="text-green-900" />
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Global Combined Certifications: <span className="text-white">50+</span></p>
           </div>
           <div className="flex items-center gap-3">
              <Cpu size={24} className="text-green-900" />
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">Industry Experience: <span className="text-white">25+ Years</span></p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AcademyMentors;