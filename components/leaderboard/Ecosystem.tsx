"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Globe, Zap, Terminal } from 'lucide-react';

const partners = [
  { name: "Bugcrowd", icon: <ShieldCheck size={32} /> },
  { name: "HackerOne", icon: <Cpu size={32} /> },
  { name: "Kali Linux", icon: <Terminal size={32} /> },
  { name: "OWASP", icon: <Globe size={32} /> },
  { name: "Cloudflare", icon: <Zap size={32} /> },
  { name: "MetaRed", icon: <ShieldCheck size={32} /> },
];

const Ecosystem = () => {
  // অসীম লুপের জন্য ডাটা ডাবল করা
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative py-16 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <ShieldCheck size={12} /> [ STRATEGIC_ECOSYSTEM_NODES ]
          </motion.div>
          <h2 className="text-2xl lg:text-4xl font-bold text-white uppercase tracking-tighter">
            Our <span className="text-green-500">Network</span>
          </h2>
        </div>

        {/* --- INFINITE LOGO MARQUEE --- */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap gap-12 md:gap-20 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              ease: "linear", 
              duration: 20, 
              repeat: Infinity 
            }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 text-gray-600 hover:text-green-500 transition-all duration-300 group cursor-default"
              >
                <div className="p-3 bg-zinc-900/50 border border-white/5 rounded-xl group-hover:border-green-500/20 group-hover:bg-green-500/5 transition-all">
                   {partner.icon}
                </div>
                <span className="text-sm font-black font-mono uppercase tracking-widest group-hover:text-white transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Side Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Status Line */}
        <div className="mt-16 flex justify-center opacity-20">
           <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;