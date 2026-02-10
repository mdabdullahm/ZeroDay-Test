"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight, Terminal, Globe, Lock, Cpu } from 'lucide-react';

const ServiceCTA = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      {/* Extreme Ambient Glows*/}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-green-500/10 rounded-full blur-[180px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Main Tactical Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900/40 border border-green-500/30 rounded-[3.5rem] p-12 lg:p-24 backdrop-blur-3xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.1)]"
        >
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-green-500/30 rounded-tl-[3.5rem]"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-green-500/30 rounded-br-[3.5rem]"></div>
          
          <Terminal size={200} className="absolute -top-20 -right-20 text-green-500 opacity-[0.03] -rotate-12" />

          <div className="text-center relative z-10">
            {/* Pulsing Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              <span className="text-[10px] md:text-xs font-mono font-black text-green-500 uppercase tracking-[0.4em]">Node_Ready_for_Deployment</span>
            </motion.div>

            {/* Powerful Heading */}
            <h2 className="text-5xl lg:text-8xl font-black text-white mb-10 leading-[0.95] tracking-tighter uppercase">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 drop-shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                Hardened
              </span> Your Core?
            </h2>

            <p className="text-gray-400 text-lg md:text-2xl mb-14 max-w-3xl mx-auto font-light leading-relaxed">
               Don't compromise on the security of your system. Book a secure session with our elite offensive researchers today.
            </p>

            {/* High-Impact CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {/* Primary Action */}
              <button className="group relative w-full sm:w-auto px-12 py-6 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl transition-all shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] hover:-translate-y-2 active:scale-95 text-base uppercase tracking-widest overflow-hidden">
                 <div className="relative z-10 flex items-center justify-center gap-3">
                    INFILTRATE_NOW <Zap size={20} className="fill-current" />
                 </div>
                 {/* Shine Effect */}
                 <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700"></div>
              </button>

              {/* Secondary Action */}
              <button className="w-full sm:w-auto px-12 py-6 border-2 border-white/10 hover:border-green-500/50 hover:bg-green-500/5 text-white font-black rounded-2xl transition-all backdrop-blur-md text-base uppercase tracking-widest flex items-center justify-center gap-3">
                 REQUEST_A_QUOTE <Lock size={20} className="text-green-900" />
              </button>
            </div>

            {/* Trust Markers */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 border-t border-white/5 pt-12">
               <div className="flex flex-col items-center gap-2">
                  <ShieldCheck size={24} className="text-green-800" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">100% Confidential</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Globe size={24} className="text-green-800" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Global Operation</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Cpu size={24} className="text-green-800" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">AI-Powered Audit</span>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Zap size={24} className="text-green-800" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">Rapid Response</span>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Technical Metadata */}
        <div className="mt-12 flex justify-center items-center gap-6">
           <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-green-900/30"></div>
           <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.5em] whitespace-nowrap">
              Secure_Handshake_Active | Node: 0x9AF2 | Protocol: v2.4.0
           </p>
           <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-green-900/30"></div>
        </div>

      </div>
    </section>
  );
};

export default ServiceCTA;