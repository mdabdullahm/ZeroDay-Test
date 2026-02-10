"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Terminal, Activity, ChevronRight, Settings, Target } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black text-white">

      {/* Ambient Glows - Emerald & Deep Green */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[130px] -z-10"></div>
      <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
              <Settings size={14} className="text-green-500 animate-spin-slow" />
              <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">[ OPERATIONAL_SERVICES_HUB_v1 ]</span>
            </div>

            <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-[0.95] tracking-tighter uppercase">
              Offensive <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                Solutions
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed">
              We look for loopholes in your system with a hacker's eye. Our advanced penetration testing and offensive security services will keep your business threat-free.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-5 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl flex items-center gap-3 transition-all shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:-translate-y-1 active:scale-95 text-sm uppercase">
                START_SECURITY_AUDIT <ChevronRight size={18} />
              </button>
              <button className="px-10 py-5 border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 text-white font-bold rounded-2xl flex items-center gap-3 transition-all backdrop-blur-md text-sm uppercase">
                CUSTOM_PROPOSAL <Target size={18} className="text-green-500" />
              </button>
            </div>

            {/* Service Pillars */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/5 pt-8">
               <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-green-600" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Pentesting</span>
               </div>
               <div className="flex items-center gap-3">
                  <Activity size={18} className="text-green-600" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Red Teaming</span>
               </div>
               <div className="flex items-center gap-3">
                  <Zap size={18} className="text-green-600" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Bug Bounty</span>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Tactical Service Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-green-500/5 blur-3xl rounded-full"></div>

            <div className="relative z-10 bg-zinc-950/50 border border-green-500/20 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden group">
               
               {/* Animated HUD Grid */}
               <div className="flex items-center justify-between mb-10 text-green-700 font-mono text-[10px]">
                  <span className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></div>
                     SCANNER_ACTIVE
                  </span>
                  <span>NODE: 0x9AF2</span>
               </div>

               <div className="space-y-8">
                  {/* Mock Attack Vector Bars */}
                  {[
                    { label: 'Cloud Audit', value: '100%' },
                    { label: 'Mobile Security', value: '100%' },
                    { label: 'Web Infiltration', value: '100%' }
                  ].map((stat, i) => (
                    <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                          <span>{stat.label}</span>
                          <span className="text-green-500">OPTIMIZED</span>
                       </div>
                       <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: stat.value }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-full bg-green-600 shadow-[0_0_10px_#22c55e]"
                          />
                       </div>
                    </div>
                  ))}
               </div>

               {/* Central Service Pulse Visual */}
               <div className="mt-12 p-8 border border-white/5 bg-black/40 rounded-3xl flex flex-col items-center justify-center text-center">
                  <div className="relative mb-4">
                     <Terminal size={48} className="text-green-500 relative z-10" />
                     <motion.div 
                       animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                       transition={{ duration: 2, repeat: Infinity }}
                       className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"
                     ></motion.div>
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">Global Defense Core</h4>
                  <p className="text-[9px] font-mono text-gray-600 mt-1 uppercase">Ready for manual engagement_</p>
               </div>

            </div>

            {/* Floating Detail Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-zinc-900 border border-white/10 p-5 rounded-2xl shadow-2xl hidden md:block"
            >
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500 text-black rounded-lg font-black text-xs">
                     24/7
                  </div>
                  <div>
                     <p className="text-[10px] font-bold text-white uppercase">Threat Monitoring</p>
                     <p className="text-[8px] font-mono text-green-700">Real-time alerts active</p>
                  </div>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;