"use client";
import React, { useState, useMemo } from 'react'; // useMemo যুক্ত করা হয়েছে
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, Zap, ShieldCheck, Lock, Cpu, Globe, 
  Scale, Users, Info, HelpCircle, Terminal, Search, X 
} from 'lucide-react';

const faqCategories = [
  { id: 'general', name: 'General faqs', icon: <Globe size={16} /> },
  { id: 'organizations', name: 'For Organizations', icon: <ShieldCheck size={16} /> },
  { id: 'hackers', name: 'For Ethical Hackers', icon: <Users size={16} /> },
  { id: 'legal', name: 'Policy & Trust', icon: <Scale size={16} /> },
  { id: 'tech', name: 'Platform & Technical', icon: <Cpu size={16} /> }
];

const allFaqs = [
  // --- 1. GENERAL FAQs ---
  { 
    cat: 'general', 
    question: "What is ZeroDay Test?", 
    answer: "ZeroDay Test is Bangladesh’s first dedicated Bug Bounty and Crowdsourced Security Platform that connects organizations with ethical hackers through responsible vulnerability disclosure programs." 
  },
  { 
    cat: 'general', 
    question: "How does ZeroDay Test work", 
    answer: "Organizations list their assets under a defined scope. Ethical hackers test those assets within the allowed scope and report vulnerabilities responsibly through our platform." 
  },
  { 
    cat: 'general', 
    question: " Is ZeroDay Test legal in Bangladesh", 
    answer: "Yes. ZeroDay Test operates under responsible disclosure principles and ensures that all security testing is conducted with proper authorization from participating organizations." 
  },
  { 
    cat: 'general', 
    question: "Who can join ZeroDay Test?", 
    answer: "• Organizations\n• Ethical hackers\n• Security researchers\n• Startups, enterprises, fintech, SaaS companies" 
  },

  // --- 2. FOR ORGANIZATIONS ---
  { 
    cat: 'organizations', 
    question: "Why should my organization run a Bug Bounty program?", 
    answer: "Bug bounty programs help identify vulnerabilities before attackers exploit them, reducing breach risk and financial damage." 
  },
  { 
    cat: 'organizations', 
    question: "How is the testing scope controlled?", 
    answer: "Organizations define clear in-scope and out-of-scope assets. Testing outside scope is strictly prohibited." 
  },
  { 
    cat: 'organizations', 
    question: "How are vulnerabilities validated?", 
    answer: "Our internal triage process (AI-assisted + human review) verifies report quality, severity, and reproducibility before submission to the organization." 
  },
  { 
    cat: 'organizations', 
    question: "How is bounty reward decided?", 
    answer: "Reward amounts depend on vulnerability severity (CVSS score), impact, and organization-defined bounty structure." 
  },
  { 
    cat: 'organizations', 
    question: "Is my company data safe?", 
    answer: "Yes. All researchers must agree to strict responsible disclosure and non-disclosure policies." 
  },

  // --- 3. FOR ETHICAL HACKERS ---
  { 
    cat: 'hackers', 
    question: "How do I become a researcher on ZeroDay Test?", 
    answer: "You can apply through our registration process. Identity verification and skill validation may be required." 
  },
  { 
    cat: 'hackers', 
    question: "Can beginners join?", 
    answer: "Yes, but rewards depend on vulnerability impact and report quality. Learning resources and guidelines will be provided." 
  },
  { 
    cat: 'hackers', 
    question: "How and when do I get paid?", 
    answer: "Payments are processed after vulnerability validation and confirmation by the organization." 
  },
  { 
    cat: 'hackers', 
    question: "What if two researchers report the same vulnerability?", 
    answer: "Bounty is awarded to the first valid and reproducible submission." 
  },
  { 
    cat: 'hackers', 
    question: "What happens if someone discloses a vulnerability publicly before policy timeline?", 
    answer: "This may result in account suspension or permanent ban depending on severity of policy violation." 
  },
  // --- 4. LEGAL & TRUST ---
  { 
    cat: 'legal', 
    question: "What is Responsible Disclosure?", 
    answer: "Researchers must privately report vulnerabilities and allow organizations reasonable time (e.g., 90 days) to fix before public disclosure." 
  },
  { 
    cat: 'legal', 
    question: "Does ZeroDay Test provide legal protection to researchers?", 
    answer: "Yes, researchers operating within defined scope and platform rules are protected under our Safe Harbor policy." 
  },
  { 
    cat: 'legal', 
    question: "Can organizations run private programs?", 
    answer: "Yes. We support both public and private bug bounty programs." 
  },
  { 
    cat: 'legal', 
    question: "Is there a subscription fee for organizations?", 
    answer: "Yes. Pricing depends on program type, asset size, and support level." 
  },

  // --- 5. TECH & PLATFORM ---
  { 
    cat: 'tech', 
    question: "Does ZeroDay Test use AI?", 
    answer: "Yes. AI-assisted triage helps detect duplicate reports, validate submissions, and improve efficiency." 
  },
  { 
    cat: 'tech', 
    question: "Is bug bounty legal in Bangladesh?", 
    answer: "•Yes — when conducted with proper authorization\n• Under Bangladesh law, unauthorized access to computer systems is punishable (ICT Act 2006 & Digital Security Act 2018). However, security testing becomes legal when:\n• The organization gives explicit written authorization\n• Testing is done strictly within defined scope\n• Responsible disclosure policy is followed\n• ZeroDay Test ensures all programs operate under documented authorization agreements." 
  },
  { 
    cat: 'tech', 
    question: "How does ZeroDay Test ensure compliance with Bangladeshi law?", 
    answer: "•We ensure:\n• Written authorization from participating organizations\n• Clearly defined testing scope\n• Safe Harbor protection for in-scope testing\n• Mandatory acceptance of platform Terms & Responsible Disclosure Policy\n• Logging and documentation of all activities• This reduces legal ambiguity for both researchers and organizations" 
  },
  { 
    cat: 'tech', 
    question: "What laws are relevant to cybersecurity testing in Bangladesh?", 
    answer: "•Key legal frameworks include:\n• ICT Act 2006\n• Digital Security Act 2018\n• Penal Code (in cases of fraud or data misuse) •Unauthorized system access, data theft, or service disruption can be criminal offenses if done without permission." 
  },
  { 
    cat: 'tech', 
    question: "What is Safe Harbor Policy?", 
    answer: "•Safe Harbor means:• If a researcher:\n• Tests only within allowed scope\n• Does not exploit beyond proof-of-concept\n• Does not access or leak personal data\n• Follows responsible disclosure timelines Then ZeroDay Test and the participating organization will not initiate legal action. This protection only applies when all rules are followed." 
  },
  { 
    cat: 'tech', 
    question: "What happens if a researcher tests outside the allowed scope?", 
    answer: "•Testing outside scope may:\n• Void Safe Harbor protection\n• Lead to account suspension\n• Result in permanent ban\n• Expose the individual to legal consequences under Bangladesh law •Strict scope adherence is mandatory." 
  },
  { 
    cat: 'tech', 
    question: "Is public disclosure allowed?", 
    answer: "•Public disclosure is only allowed:\n• After the agreed disclosure timeline (e.g., 90 days)\n• With written consent from the organization •Early or unauthorized public disclosure may result in account termination and possible legal action." 
  },
  { 
    cat: 'tech', 
    question: "Can organizations face legal risk by running a bug bounty program?", 
    answer: "•No — when structured properly.•Running a bug bounty program through ZeroDay Test:\n• Demonstrates proactive security practice\n• Reduces regulatory risk\n• Shows due diligence in protecting user data •However, organizations must ensure they legally own the assets listed in scope." 
  },
  { 
    cat: 'tech', 
    question: "Does ZeroDay Test access organization data?", 
    answer: "•No. ZeroDay Test acts as a coordination platform. Vulnerability reports are submitted securely, and sensitive data handling is governed by confidentiality agreements." 
  },
  { 
    cat: 'tech', 
    question: "Are researchers allowed to access user data?", 
    answer: "•No.\n• Researchers must:\n• Avoid accessing personal or sensitive data\n• Stop testing immediately if sensitive data is exposed\n• Report the issue without copying or storing data  •Data misuse is a criminal offense under Bangladeshi law." 
  },
  { 
    cat: 'tech', 
    question: "Can foreign researchers participate?", 
    answer: "•Yes, but:\n• They must comply with platform rules\n• They must follow the organization’s jurisdictional requirements\n• Cross-border payment and compliance rules may apply" 
  },
  { 
    cat: 'tech', 
    question: "Does ZeroDay Test provide legal representation?", 
    answer: "ZeroDay Test provides policy-based Safe Harbor protection.However, individual legal representation is not automatically provided unless stated in specific enterprise agreements." 
  },
  { 
    cat: 'tech', 
    question: "What if a vulnerability affects national critical infrastructure?", 
    answer: "•If a vulnerability impacts:\n• Government systems\n• Banking infrastructure\n• Critical national services• ZeroDay Test may coordinate responsible escalation with appropriate authorities while protecting researcher identity (when policy-compliant)." 
  },
  { 
    cat: 'tech', 
    question: "Is ZeroDay Test compliant with international standards?", 
    answer: "•The platform is being designed aligned with:\n• Responsible Disclosure frameworks\n• ISO 27001 security principles\n• Global bug bounty best practices" 
  },
];

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState(''); // সার্চ স্টেট

  // --- ফিল্টারিং লজিক ---
  const filteredFaqs = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      return allFaqs.filter(f => f.cat === activeTab);
    }
    // সার্চ করলে ক্যাটাগরি ইগনোর করে সব রেজাল্ট দেখাবে
    return allFaqs.filter(f => 
      f.question.toLowerCase().includes(query) || 
      f.answer.toLowerCase().includes(query)
    );
  }, [searchQuery, activeTab]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-green-500 selection:text-black">
      
      {/* --- FAQ HERO SECTION --- */}
      <section className="relative pt-8 pb-6 overflow-hidden bg-black text-white">
        {/* <div className="absolute inset-0 z-0 opacity-15" 
             style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div> */}

        <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 text-center">
          {/* <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 mb-8"
          >
            <HelpCircle size={14} className="text-green-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-[0.3em]">Knowledge_Base_Access: GRANTED</span>
          </motion.div> */}

          {/* <h1 className="text-5xl lg:text-8xl font-black mb-6 uppercase tracking-tighter italic">
            Decoding <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">Intelligence</span>
          </h1>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light leading-relaxed mb-12 italic">
            The answers to all the questions you may have about our platform, security protocols, and academy are decoded here.
          </p> */}

          {/* কার্যকরী সার্চ বার */}
          <div className="max-w-xl mx-auto relative group">
             <div className="absolute inset-0 bg-green-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative flex items-center bg-zinc-900/50 border border-white/5 p-1 rounded-2xl backdrop-blur-xl group-hover:border-green-500/30 transition-all">
                <div className="pl-4 text-green-700">
                   <Terminal size={18} />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="search_knowledge_base..." 
                  className="w-full bg-transparent px-4 py-3 text-sm font-mono text-green-400 outline-none placeholder:text-gray-700"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="pr-2 text-gray-500 hover:text-white">
                    <X size={16} />
                  </button>
                )}
                <button className="px-6 py-3 bg-green-600 text-black font-black rounded-xl text-xs hover:bg-green-400 transition-all uppercase">
                   Execute
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* --- FAQ LIST SECTION --- */}
      <section className="relative pb-24 bg-black overflow-hidden border-t border-green-500/5">
        <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
          
          <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-20 mt-20">
            
            {/* Sidebar Categories (সার্চ করলে এটি আবছা হয়ে যাবে) */}
            <div className={`space-y-4 transition-opacity duration-500 ${searchQuery ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
              <p className="text-[10px] font-mono text-green-600 uppercase tracking-[0.4em] mb-6">Security_Clearance_Level</p>
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveTab(cat.id); setOpenIndex(0); }}
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-500 group ${
                    activeTab === cat.id 
                    ? 'bg-green-600 text-black border-green-600 shadow-[0_0_25px_rgba(34,197,94,0.4)]' 
                    : 'bg-zinc-900/30 border-white/5 text-gray-400 hover:border-green-500/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${activeTab === cat.id ? 'bg-black/10' : 'bg-white/5'}`}>
                       {cat.icon}
                    </div>
                    <span className="font-black text-xs uppercase tracking-widest">{cat.name}</span>
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full ${activeTab === cat.id ? 'bg-black animate-pulse' : 'bg-zinc-800'}`}></div>
                </button>
              ))}

              {/* Platform HUD Status */}
              <div className="mt-12 p-6 bg-zinc-900/10 border border-green-900/20 rounded-3xl hidden lg:block backdrop-blur-sm">
                 <div className="flex items-center gap-3 mb-4">
                    <Cpu size={18} className="text-green-700" />
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Platform_Core</span>
                 </div>
                 <p className="text-[10px] font-mono text-green-700 uppercase leading-relaxed">
                    &gt; AI_TRIAGE: ENABLED <br />
                    &gt; STANDARDS: ISO 27001 <br />
                    &gt; STATUS: ENFORCED
                 </p>
              </div>
            </div>

            {/* Questions Accordion */}
            <div className="space-y-4">
              {searchQuery && (
                <div className="mb-6 text-green-500 font-mono text-xs uppercase tracking-widest">
                  &gt; {filteredFaqs.length} entries decrypted for "{searchQuery}"
                </div>
              )}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeTab + searchQuery}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((item, idx) => (
                      <div 
                        key={idx}
                        className={`group rounded-3xl border transition-all duration-500 ${
                          openIndex === idx 
                          ? 'bg-zinc-900/40 border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.05)]' 
                          : 'bg-zinc-950/20 border-white/5 hover:border-green-500/20'
                        }`}
                      >
                        <button 
                          onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                          className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left"
                        >
                          <div className="flex items-center gap-6">
                            <span className={`font-mono text-[10px] ${openIndex === idx ? 'text-green-500' : 'text-gray-700'}`}>
                              [ 0x{idx < 9 ? `0${idx + 1}` : idx + 1} ]
                            </span>
                            <h3 className={`text-sm md:text-base font-black uppercase tracking-tight transition-colors ${openIndex === idx ? 'text-green-400' : 'text-white'}`}>
                              {item.question}
                            </h3>
                          </div>
                          <div className={`p-1.5 rounded-lg border transition-all ${openIndex === idx ? 'bg-green-500 text-black border-green-500' : 'border-white/5 group-hover:border-green-500/30'}`}>
                            <ChevronDown size={16} className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                          </div>
                        </button>

                        <AnimatePresence>
                          {openIndex === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-8 md:px-20 text-gray-400 text-sm leading-relaxed font-light border-t border-white/5 pt-6">
                                 <div className="relative whitespace-pre-line">
                                   <span className="absolute -left-6 top-1.5 w-1 h-1 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]"></span>
                                   {item.answer}
                                 </div>
                                 <div className="mt-8 flex items-center gap-2 text-[9px] font-mono text-green-900 uppercase tracking-widest border-t border-white/5 pt-4">
                                    <Zap size={10} className="fill-current" /> session_decrypted_successfully
                                 </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))
                  ) : (
                    <div className="py-20 text-center border border-dashed border-white/10 rounded-3xl text-gray-600 font-mono text-sm uppercase">
                      No matching intelligence found. Try different parameters.
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              
              {/* Final CTA */}
              <div className="mt-12 p-8 bg-green-500/5 border border-green-500/10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-zinc-900 rounded-xl text-green-500">
                       <Info size={20} />
                    </div>
                    <p className="text-gray-500 text-sm font-light uppercase tracking-widest leading-relaxed">Still have technical queries <br /> about the platform?</p>
                 </div>
                  <a 
                    href="https://wa.me/8801319919694" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex px-8 py-3 bg-zinc-900 border border-green-500/20 text-green-500 font-black text-[10px] rounded-xl hover:bg-green-600 hover:text-black transition-all uppercase tracking-widest shadow-xl cursor-pointer">Contact_Uplink_Node
                  </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;