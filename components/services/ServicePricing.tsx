"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Target, Terminal, Cpu, ArrowRight } from 'lucide-react';

const pricingModels = [
  {
    name: "Initial Probe",
    level: "Tier_01",
    price: "$499",
    desc: "Basic security scans and audits for small websites or startups.",
    features: ["Vulnerability Assessment", "OWASP Top 10 Mapping", "Automated Scans", "Executive Summary Report"],
    icon: <Shield size={24} />,
  },
  {
    name: "Advanced Breach",
    level: "Tier_02",
    price: "$1,499",
    desc: "Deep penetration testing and manual exploits for medium and large systems.",
    features: ["Full Manual Pentesting", "API & Logic Audit", "Video PoC Demos", "2 Weeks Post-Fix Support", "Technical Vuln Log"],
    icon: <Zap size={24} />,
  },
  {
    name: "Total Infiltration",
    level: "Tier_03",
    price: "Custom",
    desc: "Enterprise level infrastructure and red teaming simulation.",
    features: ["Full Network Breaching", "Cloud Infrastructure Audit", "Social Engineering Test", "24/7 Threat Monitoring", "Incident Response Guide"],
    icon: <Target size={24} />,
  }
];

const ServicePricing = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <Cpu size={14} /> [ DEPLOYMENT_ENGAGEMENT_MODELS ]
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold text-white mb-4 uppercase tracking-tighter">
            Operational <span className="text-green-500">Tiers</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-xs md:text-sm font-light">
            Select the preferred engagement model. The selected node <span className="text-green-500 underline">High Priority</span> It will be considered as.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {pricingModels.map((item, idx) => {
            const isActive = activeIndex === idx;

            return (
              <motion.div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`cursor-pointer group relative p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 border ${
                  isActive 
                  ? 'bg-green-500/5 border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.15)] scale-105 z-20' 
                  : 'bg-zinc-950/40 border-white/5 opacity-60 hover:opacity-100 hover:border-green-500/30'
                }`}
              >
                {/* Active Badge */}
                {isActive && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] tracking-widest uppercase flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full animate-ping"></div>
                    Selected_Node
                  </div>
                )}

                {/* Card Header */}
                <div className="mb-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'bg-green-500 text-black shadow-[0_0_20px_#22c55e]' : 'bg-green-500/10 text-green-500'
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${isActive ? 'text-green-500' : 'text-gray-700'}`}>
                        {item.level}
                    </span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 uppercase tracking-tight transition-colors ${isActive ? 'text-white' : 'text-gray-400'}`}>
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <span className={`text-4xl md:text-5xl font-black font-mono transition-colors ${isActive ? 'text-green-500' : 'text-white'}`}>
                    {item.price}
                  </span>
                  {item.price !== "Custom" && <span className="text-gray-600 text-xs font-mono ml-2">/Eng</span>}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-10">
                  {item.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-3 text-xs transition-colors">
                      <Check size={14} className={`${isActive ? 'text-green-500' : 'text-gray-700'} flex-shrink-0`} />
                      <span className={isActive ? 'text-gray-200' : 'text-gray-500'}>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`w-full py-4 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 uppercase tracking-widest ${
                  isActive 
                  ? 'bg-green-600 text-black shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:bg-green-500' 
                  : 'bg-white/5 text-gray-500 border border-white/10 group-hover:text-white group-hover:border-green-500/30'
                }`}>
                  {isActive ? 'Proceed_to_Ops' : 'Deploy_Mission'} <ArrowRight size={14} />
                </button>

                {/* Background ID Decoration */}
                <div className={`absolute bottom-4 right-8 transition-opacity duration-500 ${isActive ? 'opacity-10' : 'opacity-0'}`}>
                  <Terminal size={80} className="text-green-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global SLA Footer */}
        <div className="mt-16 p-6 border border-white/5 bg-zinc-900/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
           <div className="flex items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              <span>Agreement: 99.9% Success Rate</span>
              <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
              <span>Selected_Node: {pricingModels[activeIndex].level}</span>
           </div>
           <div className="text-[10px] font-mono text-green-900 uppercase">
              Secure_Billing_Portal: Enabled
           </div>
        </div>

      </div>
    </section>
  );
};

export default ServicePricing;