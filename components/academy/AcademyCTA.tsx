"use client";
import { motion } from 'framer-motion';
import { Rocket, Zap, ShieldCheck, ChevronRight, Terminal, Globe, Users } from 'lucide-react';

const AcademyCTA = () => {
  return (
    <section className="relative py-10 md:py-20 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* Intense Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/10 rounded-full blur-[160px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 text-center">
        
        {/* Central Mission Control Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900/40 border border-green-500/20 rounded-[3rem] p-12 md:p-20 backdrop-blur-2xl overflow-hidden"
        >
          {/* Background Decorative Icons */}
          <Terminal size={150} className="absolute -top-10 -left-10 text-green-500 opacity-5 rotate-12" />
          <Users size={150} className="absolute -bottom-10 -right-10 text-green-500 opacity-5 -rotate-12" />

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
            <Zap size={16} className="text-green-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono font-bold text-green-400 uppercase tracking-[0.3em]">Recruitment_Phase: Active</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Join The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
              Elite 1%
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            The journey from an ordinary user to a professional cybersecurity researcher begins here. Are you ready to find the next 'Zero-Day'?
          </p>

          {/* Tactical Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group w-full sm:w-auto px-10 py-5 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] hover:-translate-y-1 active:scale-95 text-sm uppercase">
              ENROLL_IN_ACADEMY <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all backdrop-blur-md text-sm uppercase">
              ACCESS_FREE_INTEL <ShieldCheck size={18} />
            </button>
          </div>

          {/* Dynamic Metadata Footer */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-white/5 pt-8 opacity-40">
             <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                ACTIVE_SLOTS: 14/100
             </div>
             <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase">
                <Globe size={12} className="text-green-900" /> REGION: GLOBAL_ACCESS
             </div>
             <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase">
                <Terminal size={12} className="text-green-900" /> AUTH_LEVEL: 0 (PUBLIC)
             </div>
          </div>
        </motion.div>

        {/* Closing Security Tagline */}
        <p className="mt-10 text-[9px] font-mono text-white uppercase tracking-[0.5em]">
           Establish Link_ | Encrypting Session_ | ZeroDay Academy v2.4
        </p>

      </div>
    </section>
  );
};

export default AcademyCTA;