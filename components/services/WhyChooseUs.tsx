"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, UserCheck, FileText, EyeOff, Cpu, Terminal, TrendingUp } from 'lucide-react';

const reasons = [
  {
    title: "Offensive Mindset",
    desc: "We don't just defend; we think like hackers and find hidden vulnerabilities in your system that others miss.",
    icon: <Zap size={24} />,
    stat: "Elite Operatives"
  },
  {
    title: "Zero-Day Research",
    desc: "We work with the latest zero-day exploits in our own lab, so we know how to survive modern threats.",
    icon: <Cpu size={24} />,
    stat: "Always Updated"
  },
  {
    title: "Actionable Intelligence",
    desc: "We don't just report bugs; we give you step-by-step guides and patching support so you can get to the fix quickly.",
    icon: <FileText size={24} />,
    stat: "Full Remediation"
  },
  {
    title: "Extreme Confidentiality",
    desc: "The confidentiality of your data and projects is sacred to us. We work under strict Non-Disclosure Agreements (NDA).",
    icon: <EyeOff size={24} />,
    stat: "100% Discreet"
  },
  {
    title: "Expert Researchers",
    desc: "Our team includes Global Bug-Bounty Hall of Famers and Certified Penetration Testers (OSCP, CEH).",
    icon: <UserCheck size={24} />,
    stat: "Certified Team"
  },
  {
    title: "Continuous Assurance",
    desc: "Even after the audit is complete, we monitor your system and alert you immediately if any new threats arise.",
    icon: <ShieldCheck size={24} />,
    stat: "24/7 Shield"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <TrendingUp size={14} /> [ TACTICAL_SUPERIORITY_METRICS ]
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            Why Partner <br /> <span className="text-green-500 font-mono italic">With Us?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base font-light">
            Security is not a luxury, it's a protocol. We go beyond traditional penetration testing to give you impenetrable digital protection.
          </p>
        </div>

        {/* Reasons Grid - ৩ কলামে হাই-টেক ডিজাইন */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Vertical Progress Bar Decoration (Left Side) */}
              <div className="absolute left-0 top-0 w-1 h-full bg-green-900/10 group-hover:bg-green-500/20 transition-colors">
                 <motion.div 
                   animate={{ height: ["0%", "100%", "0%"] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="w-full bg-green-500/40 shadow-[0_0_15px_#22c55e]"
                 />
              </div>

              {/* Icon Node */}
              <div className="w-16 h-16 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl mb-8 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8">
                {item.desc}
              </p>

              {/* Bottom Stat Label */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                 <span className="text-[9px] font-mono text-green-900 uppercase tracking-[0.2em]">Capability_Level</span>
                 <span className="text-[10px] font-mono text-gray-400 font-bold uppercase">{item.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Compliance Bar */}
        <div className="mt-16 flex justify-center">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="inline-flex flex-wrap justify-center items-center gap-6 px-8 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-md"
           >
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                 <Terminal size={14} className="text-green-700" /> [ SYSTEM_AUDIT: PASSED ]
              </div>
              <div className="w-1 h-1 bg-green-900 rounded-full"></div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                 <ShieldCheck size={14} className="text-green-700" /> [ GDPR_COMPLIANT ]
              </div>
              <div className="w-1 h-1 bg-green-900 rounded-full"></div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                 <Zap size={14} className="text-green-700" /> [ RESPONSE_TIME: &lt; 24H ]
              </div>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;