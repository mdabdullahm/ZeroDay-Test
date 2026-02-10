"use client";
import { motion } from 'framer-motion';
import { Compass, Telescope, Zap, FileCheck, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

const steps = [
  {
    title: "Intelligence Gathering",
    desc: "First, we discuss your infrastructure in detail and specify the testing scope or perimeter.",
    icon: <Telescope size={24} />,
    status: "PHASE_01"
  },
  {
    title: "Vulnerability Scan",
    desc: "Our automated and manual hunters identify every loophole and security gap in the system.",
    icon: <Compass size={24} />,
    status: "PHASE_02"
  },
  {
    title: "Tactical Execution",
    desc: "We try to exploit identified vulnerabilities safely, which proves the true resilience of the system.",
    icon: <Zap size={24} />,
    status: "PHASE_03"
  },
  {
    title: "Strategic Reporting",
    desc: "Finally, we provide a detailed encrypted report with a step-by-step guide to the solution.",
    icon: <FileCheck size={24} />,
    status: "PHASE_04"
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <ShieldCheck size={14} /> [ OPERATIONAL_ENGAGEMENT_PROTOCOL ]
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
            How We <span className="text-green-500 font-mono italic">Execute</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-light">
            To ensure a disciplined and professional penetration testing, we follow the following 4-step standard security protocol.
          </p>
        </div>

        {/* Steps Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line (Only Desktop) */}
          <div className="hidden lg:block absolute top-[45%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent -z-10"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500 text-center"
            >
              {/* Phase Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-black font-black text-[9px] px-3 py-1 rounded shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                {step.status}
              </div>

              {/* Icon Node */}
              <div className="relative w-16 h-16 mx-auto mb-8 flex items-center justify-center">
                 <div className="absolute inset-0 bg-green-500/5 rounded-full blur-xl group-hover:bg-green-500/10 transition-all"></div>
                 <div className="relative w-full h-full bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                    {step.icon}
                 </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {step.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              {/* Step Connection Indicator */}
              <div className="flex justify-center items-center gap-2">
                 <div className={`w-1.5 h-1.5 rounded-full ${idx === steps.length - 1 ? 'bg-green-900' : 'bg-green-500 animate-pulse'}`}></div>
                 <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">
                    {idx === steps.length - 1 ? "End_of_Ops" : "Awaiting_Next_Node"}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Compliance Footer */}
        <div className="mt-16 p-6 border border-green-500/10 bg-green-500/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <Terminal size={20} className="text-green-700" />
              <p className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">
                Protocol Standard: <span className="text-white">PTES (Pentesting Execution Standard)</span>
              </p>
           </div>
           <div className="text-[10px] font-mono text-green-900">
              SECURE_HANDSHAKE: SUCCESSFUL
           </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;