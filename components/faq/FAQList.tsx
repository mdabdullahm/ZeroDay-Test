"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Zap, ShieldCheck, Database, Lock, Cpu, Globe } from 'lucide-react';

const faqCategories = [
  { id: 'general', name: 'General', icon: <Globe size={16} /> },
  { id: 'academy', name: 'Academy', icon: <Cpu size={16} /> },
  { id: 'services', name: 'Services', icon: <ShieldCheck size={16} /> },
  { id: 'security', name: 'Security', icon: <Lock size={16} /> }
];

const allFaqs = [
  { cat: 'general', q: "What is ZeroDay Test?", a: "It is an advanced cybersecurity ecosystem that simultaneously provides offensive security services and a high-tech training academy." },
  { cat: 'academy', q: "Are the courses open to everyone?", a: "Many of our open-source labs and basic modules are free for everyone, but advanced certified modules require a membership." },
  { cat: 'services', q: "Will support be available after the penetration test?", a: "Of course. We provide fixing and re-audit support for up to 30 days after the report is submitted." },
  { cat: 'security', q: "Do you support crypto as payment?", a: "Yes, we support Bitcoin (BTC) and USDT payment gateways to protect privacy." },
  // আরও প্রশ্ন যোগ করা যাবে...
];

const FAQList = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = allFaqs.filter(f => f.cat === activeTab);

  return (
    <section className="relative pb-24 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-20">
          
          {/* 1. Category Sidebar */}
          <div className="space-y-4">
            <p className="text-[10px] font-mono text-gray-700 uppercase tracking-[0.4em] mb-6">Directory_Path</p>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveTab(cat.id); setOpenIndex(0); }}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-500 group ${
                  activeTab === cat.id 
                  ? 'bg-green-600 text-black border-green-600 shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
                  : 'bg-zinc-900/30 border-white/5 text-gray-500 hover:border-green-500/30'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${activeTab === cat.id ? 'bg-black/10' : 'bg-white/5'}`}>
                     {cat.icon}
                  </div>
                  <span className="font-bold text-sm uppercase tracking-widest">{cat.name}</span>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full ${activeTab === cat.id ? 'bg-black animate-pulse' : 'bg-zinc-800'}`}></div>
              </button>
            ))}

            {/* Sidebar System Status Visual */}
            <div className="mt-12 p-6 bg-zinc-900/10 border border-green-900/20 rounded-3xl hidden lg:block">
               <p className="text-[10px] font-mono text-green-900 uppercase leading-relaxed">
                  &gt; SERVER: ONLINE <br />
                  &gt; DB_LATENCY: 14MS <br />
                  &gt; ENCRYPTION: ACTIVE
               </p>
               <div className="mt-4 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="w-1/2 h-full bg-green-500/20" />
               </div>
            </div>
          </div>

          {/* 2. Questions Accordion */}
          <div className="space-y-4">
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredFaqs.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`group rounded-3xl border transition-all duration-500 ${
                      openIndex === idx 
                      ? 'bg-zinc-900/50 border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.05)]' 
                      : 'bg-zinc-950/40 border-white/5 hover:border-green-500/20'
                    }`}
                  >
                    <button 
                      onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                      className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left"
                    >
                      <div className="flex items-center gap-6">
                        <span className={`font-mono text-xs ${openIndex === idx ? 'text-green-500' : 'text-gray-700'}`}>
                          [ 0x0{idx+1} ]
                        </span>
                        <h3 className={`text-sm md:text-lg font-bold uppercase tracking-tight transition-colors ${openIndex === idx ? 'text-green-400' : 'text-white'}`}>
                          {item.q}
                        </h3>
                      </div>
                      <ChevronDown size={20} className={`text-gray-600 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-green-500' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-8 pb-8 md:px-20 text-gray-500 text-sm md:text-base leading-relaxed font-light border-t border-white/5 pt-6">
                             <p className="relative">
                               <span className="absolute -left-6 top-1 w-1 h-1 bg-green-500 rounded-full"></span>
                               {item.answer}
                             </p>
                             <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-green-900 uppercase">
                                <Zap size={12} className="fill-current" /> data_decryption_successful
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQList;