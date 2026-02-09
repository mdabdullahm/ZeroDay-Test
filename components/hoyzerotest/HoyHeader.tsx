"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Zap, Globe, Terminal, ChevronDown } from 'lucide-react';

const HoyHeader = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black text-white">
      
      {/* Background Decor - Signature Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      {/* Ambient Glows - দুই কোনায় ফিক্সড নিওন আভা */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[130px] -z-10"></div>
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[130px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content: The Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
              <ShieldCheck size={14} className="text-green-500" />
              <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">[ MISSION_BRIEFING_v1.0 ]</span>
            </div>

            <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              Why <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                HoyZeroTest?
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed">
              We don't just test security, we build digital firewalls. Our sole goal is to protect your assets in the modern cyber battlefield.
            </p>

            <div className="flex flex-wrap gap-5">
               <div className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <Zap size={24} className="text-green-500" />
                  <div>
                     <p className="text-white font-bold text-sm">Ultra Fast</p>
                     <p className="text-[10px] text-gray-600 font-mono">Real-time Scanning</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 p-4 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <Globe size={24} className="text-green-500" />
                  <div>
                     <p className="text-white font-bold text-sm">Global Ops</p>
                     <p className="text-[10px] text-gray-600 font-mono">Worldwide Network</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Tactical Visual (Circular Radar/Scanner) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            {/* Rotating Outer Ring */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="w-64 h-64 md:w-96 md:h-96 border-2 border-dashed border-green-500/20 rounded-full absolute"
            ></motion.div>
            
            {/* Spinning Radar Line */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="w-64 h-64 md:w-96 md:h-96 rounded-full absolute border-t-2 border-green-500 shadow-[0_-10px_40px_rgba(34,197,94,0.2)]"
               style={{ background: 'conic-gradient(from 0deg, rgba(34,197,94,0.1), transparent 60%)' }}
            ></motion.div>

            {/* Core Shield Icon */}
            <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 bg-black border border-green-500/30 rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.15)]">
               <Activity size={48} className="text-green-500 animate-pulse mb-2" />
               <p className="text-[10px] font-mono text-green-700 uppercase">System Active</p>
            </div>

            {/* Floating Terminal Snippet */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-10 right-0 bg-zinc-900/80 border border-white/10 p-4 rounded-xl backdrop-blur-md hidden md:block"
            >
               <div className="flex gap-1 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
               </div>
               <p className="text-[9px] font-mono text-green-500 leading-tight">
                  &gt; bypass_status: OK <br />
                  &gt; encryption: ACTIVE <br />
                  &gt; nodes: 104/104
               </p>
            </motion.div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
           <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Scroll_to_Explore</span>
           <ChevronDown size={16} />
        </motion.div>

      </div>
    </section>
  );
};

export default HoyHeader;