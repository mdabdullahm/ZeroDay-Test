"use client";
import { motion } from 'framer-motion';
import { Users, Code, ShieldCheck, GraduationCap, Laptop, Briefcase, Terminal, Target } from 'lucide-react';

const targets = [
  {
    title: "Complete Beginners",
    desc: "Those who have no prior experience with coding or security but have a strong interest in the world of hacking.",
    icon: <GraduationCap size={24} />,
    level: "LVL_01"
  },
  {
    title: "IT Professionals",
    desc: "System admins or network engineers who want to make a career change to the cybersecurity field.",
    icon: <Briefcase size={24} />,
    level: "LVL_02"
  },
  {
    title: "Software Developers",
    desc: "Those who want to ensure the security of the applications they create and are interested in learning secure coding.",
    icon: <Code size={24} />,
    level: "LVL_02"
  },
  {
    title: "Aspiring Bug Hunters",
    desc: "Those who want to start freelance bug bounty hunting and win rewards on a global platform.",
    icon: <ShieldCheck size={24} />,
    level: "LVL_03"
  }
];

const TargetAudience = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
              <Target size={14} /> [ USER_AUTHORIZATION_PROFILES ]
            </div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
              Who Should <br /> <span className="text-green-500">Infiltrate?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-zinc-900/30 border-l-2 border-green-500/30 text-gray-400 text-sm md:text-base leading-relaxed italic"
          >
            Our academy is not restricted to any particular background. We believe that anyone can become a skilled cybersecurity researcher with the right guidelines.
          </motion.div>
        </div>

        {/* Audience Grid - ২ কলামে (মোবাইল) এবং ৪ কলামে (ডেস্কটপ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-500"
            >
              {/* Level Badge */}
              <div className="absolute top-4 right-6 text-[8px] font-mono text-green-800 border border-green-900/20 px-2 py-0.5 rounded group-hover:bg-green-500 group-hover:text-black transition-all">
                {item.level}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl mb-8 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Bottom Decoration */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[9px] font-mono text-gray-700">
                 <Terminal size={10} /> STATUS: AUTHORIZED
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Status Bar */}
        <div className="mt-16 p-4 bg-zinc-900/10 border border-white/5 rounded-xl flex items-center justify-between opacity-40">
           <div className="flex items-center gap-4 text-[10px] font-mono text-white uppercase tracking-widest">
              <span className="flex items-center gap-1"><Users size={12} /> GLOBAL_INTAKE: ACTIVE</span>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:flex items-center gap-1"><ShieldCheck size={12} /> OPEN_ENROLLMENT</span>
           </div>
           <div className="text-[10px] font-mono text-green-900 uppercase">
              Clearance: UNRESTRICTED
           </div>
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;