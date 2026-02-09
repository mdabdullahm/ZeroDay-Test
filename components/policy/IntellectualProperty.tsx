"use client";
import { motion } from 'framer-motion';
import { Copyright, CodeXml, BookText, Fingerprint, ShieldAlert, FileSignature } from 'lucide-react';

const ipAssets = [
  {
    title: "Source Code & Exploits",
    desc: "All custom exploits, scripts, and source code created by ZeroDay Test are our intellectual property. Copying or using them for commercial purposes without permission is a punishable offense.",
    icon: <CodeXml size={22} />
  },
  {
    title: "Academy Content",
    desc: "Our academy's video lectures, written guides, and lab architecture are our own property. Redistribution of these is strictly prohibited.",
    icon: <BookText size={22} />
  },
  {
    title: "Brand Assets",
    desc: "Our logo, 'ZeroDay Test' name and trademarks are registered. Our brand identity may not be used in any other project.",
    icon: <Fingerprint size={22} />
  },
  {
    title: "License to Use",
    desc: "Users are granted a limited, non-exclusive license for learning and testing purposes only. This is not a transfer of ownership in any way.",
    icon: <FileSignature size={22} />
  }
];

const IntellectualProperty = () => {
  return (
    <section className="relative bg-black py-10 lg:py-15 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <Copyright size={14} /> [ ASSET_PROTECTION_PROTOCOL ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Intellectual <span className="text-green-500">Property</span>
            </h2>
            <p className="text-gray-500 max-w-xl text-sm md:text-base font-light">
              All our research and technical resources are legally protected. Respecting intellectual property rights is one of our conditions, in accordance with the principles of the cyber world.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-zinc-900/50 border border-white/5 rounded-3xl backdrop-blur-sm">
             <ShieldAlert size={40} className="text-green-900 mb-2 opacity-30" />
             <p className="text-[10px] font-mono text-gray-600 uppercase text-center">Legal Status</p>
             <p className="text-green-500 font-bold text-xs">ENFORCED</p>
          </div>
        </div>

        {/* IP Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ipAssets.map((asset, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-zinc-900/20 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-300 flex items-start gap-6"
            >
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl border border-green-500/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {asset.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                  {asset.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {asset.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legal Disclaimer Footer for IP */}
        <div className="mt-16 text-center">
           <p className="text-[10px] font-mono text-gray-700 uppercase tracking-widest border-t border-white/5 pt-8">
             All Rights Reserved © {new Date().getFullYear()} ZeroDay Test Lab. Un-authorized replication is a violation of Digital Security Act.
           </p>
        </div>

      </div>
    </section>
  );
};

export default IntellectualProperty;