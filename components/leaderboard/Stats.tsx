"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Users, Target, Activity } from 'lucide-react';

const statsData = [
  { 
    label: "Vulnerabilities Identified", 
    value: "12,450+", 
    icon: <Target size={24} />,
    desc: "Critical bugs patched" 
  },
  { 
    label: "Total Rewards Paid", 
    value: "$1.2M+", 
    icon: <Zap size={24} />,
    desc: "Distributed to researchers" 
  },
  { 
    label: "Active Researchers", 
    value: "25K+", 
    icon: <Users size={24} />,
    desc: "Global elite hackers" 
  },
  { 
    label: "Global Partnerships", 
    value: "150+", 
    icon: <Globe size={24} />,
    desc: "Trusted by tech giants" 
  }
];

const Stats = () => {
  return (
    <section className="relative py-20 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <Activity size={14} className="animate-pulse" /> [ OPERATIONAL_IMPACT_LOGS ]
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-tighter">
            Platform <span className="text-green-500 font-mono italic">Impact</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-zinc-950/40 border border-white/5 rounded-[2rem] text-center hover:border-green-500/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Corner Badge */}
              <div className="absolute top-4 right-6 text-[8px] font-mono text-gray-700 uppercase tracking-widest group-hover:text-green-900 transition-colors">
                 Verified
              </div>

              {/* Icon */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(34,197,94,0.05)]">
                 {item.icon}
              </div>

              {/* Value */}
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-green-600 font-mono text-[10px] uppercase tracking-widest mb-4">
                {item.label}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-xs font-light leading-relaxed">
                {item.desc}
              </p>

              {/* Animated HUD line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Footer Note */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 text-center opacity-30">
           <div className="h-[1px] w-20 bg-green-900 hidden md:block"></div>
           <p className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">
             Real-time stats synced with <span className="text-white">ZeroDay Core API</span> | Version 2.4.0
           </p>
           <div className="h-[1px] w-20 bg-green-900 hidden md:block"></div>
        </div>

      </div>
    </section>
  );
};

export default Stats;