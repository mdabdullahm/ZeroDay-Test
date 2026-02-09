"use client";
import { motion } from 'framer-motion';
import { Mail, Lock, ShieldCheck, RefreshCw, Trophy, Terminal, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: "Discovery & Identification",
    desc: "Find any vulnerabilities or loopholes within our scope.",
    icon: <Terminal size={20} />,
    status: "STEP_01"
  },
  {
    title: "Secure Submission",
    desc: "Send us detailed reports and PoCs via encrypted mail (PGP Enabled).",
    icon: <Lock size={20} />,
    status: "STEP_02"
  },
  {
    title: "Validation & Triage",
    desc: "Our security team will review the report and determine its severity level.",
    icon: <RefreshCw size={20} />,
    status: "STEP_03"
  },
  {
    title: "Resolution & Reward",
    desc: "You will be notified once the bug is fixed and you will be added to our 'Hall of Fame'.",
    icon: <Trophy size={20} />,
    status: "STEP_04"
  }
];

const DisclosureProcess = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <ShieldCheck size={14} /> [ DISCLOSURE_PIPELINE_STAGES ]
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Disclosure <span className="text-green-500">Workflow</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-light">
            We follow the following 4 steps to ensure professional and secure reporting. Every report is very important to us.
          </p>
        </div>

        {/* Process Steps Loop */}
        <div className="space-y-6">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row items-center gap-6 p-6 md:p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/20 transition-all duration-500 relative"
            >
              {/* Step Number Background */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500/5 text-7xl md:text-9xl font-black font-mono pointer-events-none group-hover:opacity-10 transition-opacity">
                {idx + 1}
              </div>

              {/* Icon Container */}
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl border border-green-500/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 relative z-10">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left relative z-10">
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{item.status}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white mt-1 mb-2 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm max-w-2xl">
                  {item.desc}
                </p>
              </div>

              {/* Arrow Decoration (Only Desktop) */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute -bottom-8 left-1/2 -translate-x-1/2 text-green-900 animate-bounce">
                   <ArrowRight size={24} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Action Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 bg-green-500/5 border border-green-500/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
           <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/10 text-green-500 rounded-full">
                 <Mail size={24} />
              </div>
              <div>
                 <h4 className="text-white font-bold uppercase text-sm tracking-widest">Ready to Report?</h4>
                 <p className="text-[10px] font-mono text-gray-500 mt-1">SECURE_HANDSHAKE: ACTIVE</p>
              </div>
           </div>
           <button className="px-10 py-4 bg-green-600 hover:bg-green-500 text-black font-black rounded-xl text-xs transition-all uppercase shadow-[0_0_25px_rgba(34,197,94,0.3)]">
             SUBMIT_VULNERABILITY_NOW
           </button>
        </motion.div>

      </div>
    </section>
  );
};

export default DisclosureProcess;