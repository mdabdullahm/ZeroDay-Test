"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Terminal, Zap, ShieldQuestion, Cpu } from 'lucide-react';

const academyFaqs = [
  {
    question: "Do I need a special PC to take the courses?",
    answer: "No, a regular laptop or PC will do. Our labs are browser-based and hosted in the cloud, so your PC configuration doesn't need to be very high."
  },
  {
    question: "Will I receive an internationally valid certificate at the end of the course?",
    answer: "Yes, every certificate from Zeroday Test can be digitally verified and will act as 'offensive security' proof on your global CV."
  },
  {
    question: "What is the support or mentorship process?",
    answer: "Each of our courses has a private Discord channel where our mentors answer your questions directly. There are also live Q&A sessions every week."
  },
  {
    question: "Is it possible to learn hacking from absolutely zero knowledge?",
    answer: "Of course. Our 'Web Infiltration' and 'Beginner Track' are designed from the ground up. We assume you know nothing, and we'll take you from there to become a pro."
  },
  {
    question: "How long will I have access to the course after purchasing it?",
    answer: "You will get lifetime access to all our courses. You will even get all future updates or new modules for free."
  }
];

const FAQItem = ({ item, index }: { item: any, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`border-b border-white/5 overflow-hidden transition-all duration-300 ${isOpen ? 'bg-green-500/5' : 'bg-transparent'}`}
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
        <div className={`p-2 rounded-lg border border-white/5 transition-all ${isOpen ? 'bg-green-500 text-black border-green-500' : 'group-hover:border-green-500/30'}`}>
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
                  <Zap size={10} /> ACCESSING_DATA_COMPLETED
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AcademyFAQ = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-[1.2fr_2fr] gap-16">
          
          {/* Left Side: Header & Tech Status Box */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <HelpCircle size={14} /> [ INTEL_RETRIEVAL_INTERFACE ]
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
              Decoding <br /> <span className="text-green-500 font-mono italic">Queries</span>
            </h2>
            
            {/* System Status Mockup */}
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
                  &gt; Indexing: 100% complete <br />
                  &gt; Encryption: active <br />
                  &gt; Waiting for manual override...
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

          {/* Right Side: FAQ Accordion List */}
          <div className="space-y-2">
            {academyFaqs.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
            
            {/* Final Contact Node CTA */}
            <div className="mt-12 p-8 bg-green-500/5 border border-green-500/10 rounded-[2rem] flex items-center justify-between gap-6">
               <p className="text-xs md:text-sm text-gray-500 font-light">
                  Have any more specific questions? Send us a message at our support node.
               </p>
               <button className="whitespace-nowrap px-6 py-2 bg-zinc-900 border border-white/5 rounded-xl text-[10px] font-black text-green-500 hover:bg-green-600 hover:text-black transition-all uppercase tracking-widest">
                  Contact_Node_01
               </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AcademyFAQ;