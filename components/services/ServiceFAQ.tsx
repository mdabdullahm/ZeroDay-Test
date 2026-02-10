"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Terminal, Zap, ShieldQuestion, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "Will my system go down during penetration testing?",
    answer: "No. We follow a 'Non-Disruptive' testing protocol by default. Our simulations are designed to not cause any problems for your live users."
  },
  {
    question: "Do you support cryptocurrency as payment?",
    answer: "Yes, we support Bitcoin (BTC), USDT, along with other secure gateways and standard bank transfers. All transactions are encrypted."
  },
  {
    question: "Is there an opportunity for re-testing after the audit?",
    answer: "Of course. We give developers time to fix after reporting and then re-audit after fixing to ensure that the bugs have been successfully patched."
  },
  {
    question: "Do you sign an NDA to protect the confidentiality of our data?",
    answer: "Yes, we sign a legal Non-Disclosure Agreement (NDA) before we begin work. No information about your system will ever leave our lab."
  },
  {
    question: "Are your service charges fixed or variable?",
    answer: "We have certain tiers, but for custom infrastructure, we provide custom quotes based on scope and complexity."
  }
];

const FAQItem = ({ item, index, isOpen, setIsOpen }: any) => {
  return (
    <div className={`border-b border-white/5 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-green-500/5' : 'bg-transparent'}`}>
      <button 
        onClick={() => setIsOpen(isOpen ? null : index)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-green-900 group-hover:text-green-500 transition-colors">
            {index < 9 ? `0${index + 1}` : index + 1}
          </span>
          <h3 className={`text-sm md:text-base font-bold uppercase tracking-tight transition-all ${isOpen ? 'text-green-500' : 'text-white group-hover:text-green-400'}`}>
            <span className="font-mono mr-2 text-green-800">&gt;</span> {item.question}
          </h3>
        </div>
        <div className={`p-1.5 rounded-md border border-white/5 transition-all ${isOpen ? 'bg-green-500 text-black border-green-500 shadow-[0_0_10px_#22c55e]' : 'group-hover:border-green-500/30'}`}>
           <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-8 pl-14 pr-6 text-xs md:text-sm text-gray-500 leading-relaxed font-light border-l border-green-500/20 ml-[11px]">
               {item.answer}
               <div className="mt-4 flex items-center gap-2 text-[9px] font-mono text-green-900 uppercase">
                  <Zap size={10} /> Query_Resolved_Successfully
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServiceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          
          {/* Left Side: Sidebar Context */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <HelpCircle size={14} /> [ SYSTEM_INTEL_QUERY ]
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
              Decoding <br /> <span className="text-green-500 font-mono italic">Client Needs</span>
            </h2>
            
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              Here are answers to some common questions you may have about our services. Contact us for more information.
            </p>

            {/* Tactical Support Card */}
            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-3xl backdrop-blur-md">
               <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
                    <MessageSquare size={18} />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Support Node</span>
               </div>
               <p className="text-white text-sm font-bold mb-1 underline decoration-green-900">support@zerodaytest.com</p>
               <p className="text-[9px] font-mono text-green-900 uppercase">Response Time: &lt; 2 Hours</p>
            </div>
          </div>

          {/* Right Side: Accordion List */}
          <div className="space-y-2">
            {faqs.map((item, index) => (
              <FAQItem 
                key={index} 
                item={item} 
                index={index} 
                isOpen={openIndex === index}
                setIsOpen={setOpenIndex}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServiceFAQ;