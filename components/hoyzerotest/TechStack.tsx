"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, ShieldCheck, Zap, Code2, Database, Box, Layers } from 'lucide-react';

const techCategories = [
  {
    category: "Offensive Arsenal",
    icon: <Terminal size={20} />,
    tools: ["Metasploit", "Nmap", "Burp Suite", "Ghidra", "SQLmap"]
  },
  {
    category: "Defense Systems",
    icon: <ShieldCheck size={20} />,
    tools: ["Splunk", "Wireshark", "Snort", "Suricata", "Cloudflare"]
  },
  {
    category: "Core Languages",
    icon: <Code2 size={20} />,
    tools: ["Python", "Rust", "Go", "TypeScript", "Bash"]
  },
  {
    category: "Infra & Cloud",
    icon: <Database size={20} />,
    tools: ["Docker", "Kubernetes", "AWS Security", "Terraform"]
  }
];

const TechStack = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <Cpu size={14} /> [ TECHNOLOGY_STACK_OVERVIEW ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Advanced <span className="text-green-500">Arsenal</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light">
              We don't use any generic tools; our lab has the world's best security audit tools and custom-built powerful scripts.
            </p>
          </div>

          <div className="flex gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             <Box size={32} />
             <Layers size={32} />
          </div>
        </div>

        {/* Tech Grid - ২ কলামে (ট্যাব) এবং ৪ কলামে (ডেক্সটপ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/20 transition-all duration-300"
            >
              {/* Category Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-green-500/5 text-green-500 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                {cat.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest group-hover:text-green-400">
                {cat.category}
              </h3>

              {/* Tool Tags List */}
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/10 text-gray-500 rounded-lg group-hover:border-green-500/30 group-hover:text-green-500 transition-all"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Decorative Scan Line */}
              <div className="absolute bottom-4 right-8 opacity-5 group-hover:opacity-20 transition-opacity">
                 <Zap size={24} className="text-green-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Specification Bar */}
        <div className="mt-12 p-6 border border-white/5 bg-zinc-900/10 rounded-2xl flex flex-wrap justify-center md:justify-between items-center gap-6">
           <div className="flex items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              <span className="flex items-center gap-1"><Zap size={10} className="text-green-500" /> AI_ANALYSIS: ENABLED</span>
              <span className="flex items-center gap-1"><Zap size={10} className="text-green-500" /> CLOUD_NODES: 204</span>
           </div>
           <div className="text-[10px] font-mono text-green-900 uppercase">
              System_Version: v2.4.0-Stable
           </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;