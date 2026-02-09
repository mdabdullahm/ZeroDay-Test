"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Terminal, Zap, ShieldQuestion } from 'lucide-react';

const faqs = [
  {
    question: "Is HoyZeroTest really free?",
    answer: "Some of our basic scanning and academy modules are open to everyone. However, advanced enterprise audits and custom exploit labs require a premium subscription."
  },
  {
    question: "Is it legal to use this platform?",
    answer: "Of course. ZeroDay Test is an educational and security auditing platform. Our tools are designed for testing on approved systems only."
  },
  {
    question: "How long does it take to conduct a penetration test?",
    answer: "This depends on the size and scope of the system. Typically, a standard web audit is completed within 3 to 7 business days."
  },
  {
    question: "Can I learn bug bounty hunting here?",
    answer: "Yes, our 'Academy' section provides roadmaps and live labs from the very beginning to advanced levels of bug bounty hunting."
  },
  {
    question: "Are reports provided encrypted?",
    answer: "Yes, all our final audit reports are provided directly to the client via PGP encryption to prevent information leakage in the middle."
  }
];

const FAQItem = ({ item, index }: { item: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`border-b border-white/5 overflow-hidden transition-all ${isOpen ? 'bg-green-500/5' : 'bg-transparent'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
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
        <ChevronDown 
          size={18} 
          className={`text-gray-600 transition-transform duration-300 ${isOpen ? 'rotate-180 text-green-500' : 'group-hover:text-white'}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-8 pl-14 pr-6 text-xs md:text-sm text-gray-500 leading-relaxed font-light border-l border-green-500/30 ml-[11px]">
               {item.answer}
               <div className="mt-4 flex items-center gap-2 text-[9px] font-mono text-green-900 uppercase">
                  <Zap size={10} /> Data_Decoded_Success
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          
          {/* Left Side: Header & Decoration */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <HelpCircle size={14} /> [ DECODING_QUERIES ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Intel <br /> <span className="text-green-500 font-mono italic">Retrieval</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              If you have any further technical questions, you can contact our support node.
            </p>

            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-3xl hidden lg:block">
               <div className="flex items-center gap-3 mb-4">
                  <Terminal size={20} className="text-green-700" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">System Status</span>
               </div>
               <p className="text-[11px] font-mono text-green-900 animate-pulse uppercase">
                  &gt; Waiting for input... <br />
                  &gt; Database: Online <br />
                  &gt; Encrypted: True
               </p>
            </div>
          </div>

          {/* Right Side: Accordion Grid */}
          <div className="space-y-2">
            {faqs.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;