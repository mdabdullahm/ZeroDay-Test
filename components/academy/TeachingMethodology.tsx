"use client";
import { motion } from 'framer-motion';
import { BookOpen, MonitorPlay, Terminal, ShieldCheck, Zap, ArrowRight, Cpu } from 'lucide-react';

const methods = [
  {
    step: "01",
    title: "Base Intel Gathering",
    desc: "First we clear the deep theoretical concepts of each topic. Hacking is not possible without a strong foundation.",
    icon: <BookOpen size={24} />,
    color: "group-hover:text-blue-500"
  },
  {
    step: "02",
    title: "Visual Infiltration",
    desc: "We demonstrate each attack vector practically through live video demonstrations.",
    icon: <MonitorPlay size={24} />,
    color: "group-hover:text-purple-500"
  },
  {
    step: "03",
    title: "Sandboxed Labs",
    desc: "In our browser-based secure lab, you can simulate attacks yourself without any risk.",
    icon: <Terminal size={24} />,
    color: "group-hover:text-green-500"
  },
  {
    step: "04",
    title: "Final Breach Test",
    desc: "At the end of each module, there will be a real-world challenge or CTF that will test your skills.",
    icon: <ShieldCheck size={24} />,
    color: "group-hover:text-red-500"
  }
];

const TeachingMethodology = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <Cpu size={14} /> [ PEDAGOGICAL_FRAMEWORK_v2 ]
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Deep <span className="text-green-500">Immersion</span> Protocol
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base font-light">
            We don't just show videos; we take you into a professional hacking environment. Our 4-step teaching method will make you an expert.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting Lines (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent -z-10"></div>

          {methods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500 text-center"
            >
              {/* Step Counter */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/10 px-4 py-1 rounded-full text-[10px] font-mono text-gray-500 group-hover:text-green-500 transition-colors">
                PHASE_{method.step}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 mx-auto flex items-center justify-center bg-white/5 rounded-2xl mb-6 transition-all duration-500 group-hover:bg-green-500 group-hover:text-black ${method.color}`}>
                {method.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors uppercase tracking-tight">
                {method.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                {method.desc}
              </p>

              {/* Status Indicator */}
              <div className="flex justify-center items-center gap-2 text-[9px] font-mono text-green-900 opacity-0 group-hover:opacity-100 transition-opacity">
                <Zap size={10} className="fill-current" /> EXECUTION_READY
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA/Note */}
        <div className="mt-20 text-center">
           <motion.div
             animate={{ opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="inline-flex items-center gap-3 px-6 py-3 border border-green-500/20 rounded-2xl bg-green-500/5"
           >
              <ShieldCheck size={18} className="text-green-500" />
              <p className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest">
                Our curriculum is strictly based on <span className="text-white">OSCP & OWASP</span> Standards.
              </p>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TeachingMethodology;