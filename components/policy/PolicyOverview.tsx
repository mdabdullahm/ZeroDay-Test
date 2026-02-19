"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Scale, Eye, Lock, Zap } from 'lucide-react';

const PolicyOverview = () => {
  const pillars = [
    {
      title: "Responsible Disclosure",
      desc: " All vulnerabilities must be reported ethically, privately, and without causing harm or disruption to systems or users.",
      icon: <Scale size={20} />
    },
    {
      title: "Authorized Testing Only",
      desc: "Security testing is permitted strictly within the defined scope and with explicit permission from the organization.",
      icon: <Lock size={20} />
    },
    {
      title: "Good-Faith Protection",
      desc: "Researchers acting in good faith and following policy guidelines will not face legal action.",
      icon: <Eye size={20} />
    }
  ];

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-black text-white">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Main Introduction Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 mb-6">
              <ShieldCheck size={14} className="text-green-500" />
              <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">Legal_Protocol_v2.1</span>
            </div>

            <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
              Policy <br />
              <span className="text-green-500">Overview</span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl font-light">
              Clear, concise, and legally sound guidelines that enable responsible vulnerability disclosure and safe collaboration between organizations and security researchers. 
            </p>
          </motion.div>

          {/* Right Side - Tactical Directive Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-zinc-900/40 border border-green-500/20 p-8 rounded-3xl backdrop-blur-xl"
          >
             <div className="flex items-center gap-2 mb-6 text-green-500 font-mono text-xs">
                <FileText size={16} /> [ CORE_DIRECTIVES ]
             </div>
             
             <div className="space-y-6">
                {pillars.map((item, index) => (
                   <div key={index} className="flex items-start gap-4 group">
                      <div className="p-3 bg-green-500/10 text-green-500 rounded-xl group-hover:bg-green-500 group-hover:text-black transition-all">
                         {item.icon}
                      </div>
                      <div>
                         <h4 className="text-white font-bold mb-1">{item.title}</h4>
                         <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                ))}
             </div>

             <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-600">
                   <span>LAST_UPDATE: FEB_2024</span>
                   <span className="flex items-center gap-1 text-green-900">
                      <Zap size={10} /> SYSTEM_VERIFIED
                   </span>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Informational Blocks - ৩টি কলামে গ্যাপ ছাড়াই */}
        <div className="grid md:grid-cols-3 gap-8">
           <div className="p-6 border-l-2 border-green-500/30 bg-white/5">
              <h5 className="text-green-500 font-bold mb-2 uppercase text-xs tracking-widest">Compliance</h5>
              <p className="text-gray-400 text-xs">All our research is conducted in compliance with international cyber laws and GDPR standards.</p>
           </div>
           <div className="p-6 border-l-2 border-green-500/30 bg-white/5">
              <h5 className="text-green-500 font-bold mb-2 uppercase text-xs tracking-widest">Responsibility</h5>
              <p className="text-gray-400 text-xs">We do not support any illegal hacking or harmful activities.</p>
           </div>
           <div className="p-6 border-l-2 border-green-500/30 bg-white/5">
              <h5 className="text-green-500 font-bold mb-2 uppercase text-xs tracking-widest">Support</h5>
              <p className="text-gray-400 text-xs">Please contact our legal team for any policy-related inquiries.</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default PolicyOverview;