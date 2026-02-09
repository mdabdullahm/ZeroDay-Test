"use client";
import { motion } from 'framer-motion';
import { Scale, ShieldAlert, FileWarning, Users, CheckSquare, FileSignature, Zap } from 'lucide-react';

const rules = [
  {
    title: "No Malicious Intent",
    desc: "It is strictly prohibited to harm any person, organization, or state using our tools or methodologies.",
    icon: <ShieldAlert size={22} />,
    tag: "Rule_01"
  },
  {
    title: "Prior Authorization",
    desc: "Before testing on any target, you must have valid and written permission from the system owner.",
    icon: <CheckSquare size={22} />,
    tag: "Rule_02"
  },
  {
    title: "Responsible Disclosure",
    desc: "If you find a bug, it is a moral responsibility to first inform the vendor and give them time to fix it, rather than making it public directly.",
    icon: <Scale size={22} />,
    tag: "Rule_03"
  },
  {
    title: "Community Growth",
    desc: "Share what you are learning with others and help build a safer cyber ecosystem.",
    icon: <Users size={22} />,
    tag: "Rule_04"
  }
];

const EthicsRules = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <FileSignature size={14} /> [ ZERO_DAY_ETHICS_DIRECTIVES ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ethical <span className="text-green-500">Directives</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              With powerful knowledge comes great responsibility. Every member of ZeroDay Test must adhere to these 4 basic principles.
            </p>
          </div>
          
          <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl flex items-center gap-4 group hover:bg-red-500/10 transition-all">
             <FileWarning size={32} className="text-red-500 animate-pulse" />
             <p className="text-[10px] font-mono text-gray-500 uppercase leading-tight">
                Violation of Ethics <br /> leads to <span className="text-red-500 font-bold">Permanent Ban</span>
             </p>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/20 transition-all duration-300 flex flex-col sm:flex-row gap-6 relative overflow-hidden"
            >
              {/* Subtle Animated Background Pulse */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-700"></div>

              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl border border-green-500/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 relative z-10">
                {rule.icon}
              </div>

              <div className="relative z-10">
                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mb-2 block">{rule.tag}</span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                  {rule.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Commitment Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 bg-zinc-900/50 border border-white/5 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
           <div className="flex items-center gap-4">
              <Zap size={24} className="text-green-500" />
              <p className="text-xs md:text-sm font-mono text-gray-400">
                Are you committed to following these protocols?
              </p>
           </div>
           <button className="px-8 py-3 bg-green-600 hover:bg-green-500 text-black font-black rounded-xl text-xs transition-all uppercase shadow-[0_0_20px_rgba(34,197,94,0.3)]">
             I_AGREE_TO_PROTOCOLS
           </button>
        </motion.div>

      </div>
    </section>
  );
};

export default EthicsRules;