"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldAlert, Cpu, Network, Zap, Binary } from 'lucide-react';

const features = [
  {
    title: "AI-Driven Auditing",
    desc: "Our custom AI engine is capable of automatically finding zero-day flaws.",
    icon: <Cpu size={22} />
  },
  {
    title: "Real-time Threat Intel",
    desc: "We analyze data in real-time from the latest cyber attacks happening around the world.",
    icon: <Activity size={22} />
  },
  {
    title: "Red Team Simulation",
    desc: "We test your system's resilience by simulating attacks like real hackers.",
    icon: <Binary size={22} />
  },
  {
    title: "Hyper-Secure Infrastructure",
    desc: "Our platform itself is a decentralized and encrypted node network.",
    icon: <Network size={22} />
  }
];

const WhatIsHoy = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid - শুধু বাম পাশে হালকা করে */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Technical Concept Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900/20 border border-green-500/20 rounded-[2rem] p-8 md:p-12 backdrop-blur-md relative group"
          >
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
               <Zap size={24} className="text-green-500" />
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20">
                   <ShieldAlert size={24} />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Next-Gen Ecosystem</h3>
                   <p className="text-[10px] font-mono text-green-700 uppercase">Status: Fully Operational</p>
                </div>
              </div>

              <div className="p-6 bg-black/50 border border-white/5 rounded-2xl">
                 <p className="text-gray-400 text-sm leading-relaxed italic">
                   HoyZeroTest is an advanced cybersecurity framework that combines automated penetration testing and offensive security research. We believe in an 'offense-first' defense model, changing the traditional concept of security.
                 </p>
              </div>

              {/* Progress/Metric Bars */}
              <div className="space-y-4">
                 {[
                   { label: "Scanning Precision", value: "99.8%" },
                   { label: "AI Response Rate", value: "95.2%" }
                 ].map((stat, i) => (
                   <div key={i}>
                      <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-1 uppercase">
                         <span>{stat.label}</span>
                         <span>{stat.value}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: stat.value }}
                           transition={{ duration: 1.5, delay: 0.5 }}
                           className="h-full bg-green-500 shadow-[0_0_10px_#22c55e]"
                         />
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
               [ DEFINING_THE_ENGINE ]
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              A Borderless <br /> <span className="text-green-500">Security Ecosystem</span>
            </h2>
            
            {/* Features Grid - ২ কলামে ছোট কার্ড */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="text-green-500 group-hover:scale-110 transition-transform">
                        {f.icon}
                     </div>
                     <h4 className="text-white font-bold text-sm uppercase tracking-tight">{f.title}</h4>
                  </div>
                  <p className="text-[11px] text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 border-l-2 border-green-500/30 bg-white/5 font-mono text-[11px] text-gray-400">
               &gt; HoyZeroTest utilizes decentralized computing to analyze exploits across distributed networks.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsHoy;