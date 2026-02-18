"use client";
import { motion } from 'framer-motion';
import { HelpCircle, Terminal, Cpu, Zap, Search } from 'lucide-react';

const FAQHero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-black text-white">
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-15" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 mb-8"
        >
          <HelpCircle size={14} className="text-green-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-[0.3em]">Knowledge_Base_Access: GRANTED</span>
        </motion.div>

        <h1 className="text-5xl lg:text-8xl font-black mb-6 uppercase tracking-tighter">
          Decoding <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">Intelligence</span>
        </h1>

        <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12">
          The answers to all the questions you may have about our platform, security protocols, and academy are decoded here.
        </p>

        {/* Mock Search Bar - Hacker Style */}
        <div className="max-w-xl mx-auto relative group">
           <div className="absolute inset-0 bg-green-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
           <div className="relative flex items-center bg-zinc-900/50 border border-white/5 p-1 rounded-2xl backdrop-blur-xl group-hover:border-green-500/30 transition-all">
              <div className="pl-4 text-green-700">
                 <Terminal size={18} />
              </div>
              <input 
                type="text" 
                placeholder="search_knowledge_base..." 
                className="w-full bg-transparent px-4 py-3 text-sm font-mono text-green-400 outline-none placeholder:text-gray-700"
              />
              <button className="px-6 py-3 bg-green-600 text-black font-black rounded-xl text-xs hover:bg-green-400 transition-all uppercase">
                 Execute
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;