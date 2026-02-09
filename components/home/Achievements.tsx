"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, Trophy, FileCheck, ShieldCheck, Zap } from 'lucide-react';

const achievements = [
  {
    title: "OSCP Certified",
    issuer: "Offensive Security",
    id: "ID: OSCP-88291",
    date: "2023",
    icon: <ShieldCheck size={28} />,
    color: "from-green-500/20"
  },
  {
    title: "CEH Master",
    issuer: "EC-Council",
    id: "ID: CEH-V12-990",
    date: "2022",
    icon: <BadgeCheck size={28} />,
    color: "from-blue-500/20"
  },
  {
    title: "Bug Bounty Hunter",
    issuer: "HackerOne / Bugcrowd",
    id: "Top 1% Global",
    date: "Active",
    icon: <Trophy size={28} />,
    color: "from-purple-500/20"
  },
  {
    title: "Security+ Professional",
    issuer: "CompTIA",
    id: "ID: SEC-PL-552",
    date: "2021",
    icon: <FileCheck size={28} />,
    color: "from-emerald-500/20"
  }
];

const Achievements = () => {
  return (
    <section className="relative bg-black py-12 lg:py-16 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-3 uppercase tracking-[0.5em]"
          >
            <Award size={14} /> [ Credentials_Authenticated ]
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Honors & <span className="text-green-500">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full opacity-30"></div>
        </div>

        {/* Achievements Grid - mobile 1grid, tablet 2grid, laptop 4grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-zinc-950/50 border border-white/5 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-500"
            >
              {/* Card Background Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Holographic Verification Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center bg-green-500/10 text-green-500 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs font-mono mb-4">
                  {item.issuer}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-gray-600 uppercase">Status</span>
                    <span className="text-green-500 flex items-center gap-1">
                      <Zap size={10} /> VERIFIED
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-gray-600 uppercase">Year</span>
                    <span className="text-gray-400">{item.date}</span>
                  </div>
                </div>

                {/* Credential ID - Hacker Style */}
                <div className="mt-6 pt-4 border-t border-white/5">
                   <p className="text-[9px] font-mono text-gray-700 tracking-tighter truncate">
                     {item.id}
                   </p>
                </div>
              </div>

              {/* Verified Stamp Effect */}
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-[-15deg]">
                 <Award size={100} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;