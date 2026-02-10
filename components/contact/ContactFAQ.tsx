"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Terminal, Zap, ShieldQuestion, Cpu } from 'lucide-react';

const faqs = [
  {
    question: "How long is your response time usually?",
    answer: "Our support team is available 24/7. We typically provide an initial response to any secure inquiry within 2 to 4 hours."
  },
  {
    question: "Can I report bugs anonymously?",
    answer: "Of course. If you prefer, you can report bugs using an Alias ​​or Codename without revealing your real name. We will protect your anonymity."
  },
  {
    question: "Do you accept cryptocurrency as payment?",
    answer: "Yes, we support Bitcoin (BTC), Ethereum (ETH) and other major cryptocurrencies. All transactions are encrypted and private."
  },
  {
    question: "How do I get a quotation for an enterprise audit?",
    answer: "Please select 'Enterprise Audit Inquiry' in our contact form and provide a brief description of your infrastructure. Our sales researcher will contact you directly."
  },
  {
    question: "Is it mandatory to send reports through encrypted channels?",
    answer: "We always recommend using encrypted channels or PGP keys to prevent sensitive information from being leaked in transit. However, you can also communicate via regular mail."
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
                  <Zap size={10} /> Query_Decoded_Success
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-10 lg:py-20 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-16">
          
          {/* Left Side: Header & Tech Visual */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <HelpCircle size={14} /> [ INTEL_QUERY_INTERFACE ]
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
              Intelligence <br /> <span className="text-green-500 font-mono italic">Support</span>
            </h2>
            
            {/* Tactical Status Mockup */}
            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-[2rem] hidden lg:block backdrop-blur-sm">
               <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1.5">
                     <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
                     <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                  </div>
                  <Cpu size={18} className="text-green-900" />
               </div>
               <p className="text-[10px] font-mono text-green-800 leading-relaxed uppercase">
                  &gt; Knowledge_Base: Online <br />
                  &gt; Indexing: Active <br />
                  &gt; Security_Layer: TLS 1.3 <br />
                  &gt; Waiting for next command...
               </p>
               <div className="mt-6 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-1/2 h-full bg-green-500/20"
                  />
               </div>
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

export default ContactFAQ;