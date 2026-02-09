"use client";
import { motion } from 'framer-motion';
import { Search, ShieldAlert, Zap, FileText, Crosshair, BarChart3, Binary } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Reconnaissance",
    desc: "Information gathering and footprinting on targets is done using all types of data sources.",
    icon: <Search size={22} />,
    status: "INTEL_GATHERING"
  },
  {
    step: "02",
    title: "Vulnerability Scan",
    desc: "System loopholes are found through advanced automated and manual scanning.",
    icon: <BarChart3 size={22} />,
    status: "ANALYZING"
  },
  {
    step: "03",
    title: "Exploitation",
    desc: "Attempts are made to enter the system using identified flaws (bypassing security).",
    icon: <Binary size={22} />,
    status: "INFILTRATING"
  },
  {
    step: "04",
    title: "Documentation",
    desc: "Finally, a detailed report is created that contains the problem and possible solutions.",
    icon: <FileText size={22} />,
    status: "FINAL_PROTOCOL"
  }
];

const Methodology = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">                                                       
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <Crosshair size={14} /> [ ATTACK_VECTORS_METHODOLOGY ]
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="text-green-500 font-mono">Workflow</span>
          </h2>
          <div className="w-24 h-1 bg-green-500/30 mx-auto rounded-full"></div>
        </div>

        {/* Methodology Timeline/Grid */}
        <div className="relative">
          {/* Vertical/Horizontal Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-500/10 hidden lg:block -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group p-8 bg-zinc-900/20 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-300"
              >
                {/* Step Indicator */}
                <div className="absolute -top-4 left-8 bg-green-600 text-black font-black text-xs px-3 py-1 rounded shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                   STEP_{item.step}
                </div>

                <div className="w-14 h-14 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tighter">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Tactical Status Tag */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[9px] font-mono text-green-800 uppercase tracking-widest">{item.status}</span>
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tactical Message Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 py-8 border-y border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40 hover:opacity-100 transition-opacity"
        >
           <div className="flex items-center gap-4">
              <ShieldAlert size={24} className="text-green-500" />
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                Protocol: <span className="text-white">Full Offensive Simulation</span> | 
                Targeting: <span className="text-white">Authorized Nodes Only</span>
              </p>
           </div>
           <div className="text-[10px] font-mono text-green-700">
              REVISION_DATE: 2024.02.09
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Methodology;