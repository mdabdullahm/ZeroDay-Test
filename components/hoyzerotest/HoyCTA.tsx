"use client";
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap, ChevronRight, Terminal, Globe } from 'lucide-react';

const HoyCTA = () => {
  return (
    <section className="relative py-10 md:py-15 lg:py-20 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* Intense Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/10 rounded-full blur-[160px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 text-center">
        
        {/* Central Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-zinc-900/40 border border-green-500/20 rounded-[3rem] p-12 md:p-20 backdrop-blur-2xl overflow-hidden"
        >
          {/* Decorative Corner Icons */}
          <Terminal size={100} className="absolute -top-10 -left-10 text-green-500 opacity-5 rotate-12" />
          <Globe size={120} className="absolute -bottom-10 -right-10 text-green-500 opacity-5 -rotate-12" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
            <Rocket size={16} className="text-green-500 animate-bounce" />
            <span className="text-[10px] md:text-xs font-mono font-bold text-green-400 uppercase tracking-[0.3em]">Ready_for_Deployment</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Secure Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]">
              Digital Frontier
            </span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Are you concerned about the security of your system? Join our elite team today and protect your assets from zero-day threats.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-10 py-5 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)] hover:-translate-y-1 active:scale-95 text-sm uppercase">
              DEPLOY_NOW <Zap size={18} />
            </button>
            
            <button className="w-full sm:w-auto px-10 py-5 border border-green-500/30 hover:bg-green-500/5 text-green-500 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all backdrop-blur-md text-sm uppercase">
              TALK_TO_A_RESEARCHER <ShieldCheck size={18} />
            </button>
          </div>

          {/* Bottom Security Info */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-white/5 pt-8 opacity-40">
             <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                SERVER_LATENCY: 12ms
             </div>
             <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                PROTOCOL: TLS_1.3_ENCRYPTED
             </div>
             <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                REGION: ASIA_GLOBAL_NODE
             </div>
          </div>
        </motion.div>

        {/* Closing Footnote */}
        <p className="mt-10 text-[9px] font-mono text-gray-700 uppercase tracking-[0.5em]">
           Establish Connection_ | Node Active_ | ZeroDay Test Lab v2.4.0
        </p>

      </div>
    </section>
  );
};

export default HoyCTA;