"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bug, ShieldCheck, Terminal, Gavel, 
  Lock, Zap, Trophy, MessageSquare, 
  RefreshCcw, Info, Printer, Target, AlertCircle
} from 'lucide-react';

const policySections = [
  { id: "scope", title: "1. Scope", icon: <Target size={16} /> },
  { id: "reporting", title: "2. Guidelines", icon: <MessageSquare size={16} /> },
  { id: "rules", title: "3. Safe Testing", icon: <ShieldCheck size={16} /> },
  { id: "confidential", title: "4. Confidentiality", icon: <Lock size={16} /> },
  { id: "rewards", title: "5. Rewards", icon: <Trophy size={16} /> },
  { id: "legal", title: "6. Legal Protection", icon: <Gavel size={16} /> },
  { id: "coordinated", title: "7. Coordinated Disclosure", icon: <RefreshCcw size={16} /> },
];

export default function DisclosurePolicyPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
      
      {/* Background Matrix Grid - সাইটের সিগনেচার */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">
        
        {/* Top Header Action Bar */}
        <div className="flex justify-between items-center mb-12 border-b border-green-500/10 pb-6">
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] uppercase tracking-[0.4em]">
              <Bug size={14} /> [ DISCLOSURE_PROTOCOL_v2.1_ENFORCED ]
           </motion.div>
           <button 
             onClick={handlePrint}
             className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-green-600 hover:text-black transition-all group"
           >
              <Printer size={16} className="group-hover:scale-110 transition-transform" /> PRINT_PROTOCOL
           </button>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          
          {/* Sidebar Navigation - Desktop Only */}
          <aside className="hidden lg:block sticky top-32 space-y-2">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Protocol_Index</p>
            {policySections.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group"
              >
                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                <span className="text-[11px] font-bold uppercase tracking-tight">{item.title}</span>
              </a>
            ))}
          </aside>

          {/* Main Document Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl print:bg-white print:text-black print:p-0 print:border-none"
          >
            {/* Main Title Section */}
            <div className="text-center mb-16 space-y-4">
               <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter print:text-black">
                 Responsible <span className="text-green-500 print:text-green-700">Disclosure</span> Policy
               </h1>
               <div className="flex flex-col items-center gap-1 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <p>Asset of: <span className="text-white print:text-black">Byte Capsule IT</span></p>
                  <p>Effective Date: <span className="text-green-900 print:text-black font-bold">February 09, 2026</span></p>
               </div>
            </div>

            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light">
               
               <p className="italic bg-white/5 p-6 rounded-2xl border-l-2 border-green-500 print:bg-gray-100 print:text-black">
                 Zeroday Test is committed to maintaining a safe environment for our clients and security researchers (“Hunters”). This policy provides guidelines for reporting vulnerabilities ethically and safely.
               </p>

               <div id="scope" className="scroll-mt-32">
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 1. Operational Scope
                  </h3>
                  <div className="p-6 bg-zinc-900/50 border border-white/10 rounded-2xl space-y-4">
                     <p className="text-xs font-mono text-green-700 uppercase tracking-widest mb-2">In-Scope Assets:</p>
                     <ul className="text-xs space-y-2 text-gray-400 font-mono">
                        <li>&gt; All programs hosted on Zeroday Test platform.</li>
                        <li>&gt; Systems, APIs, and Services explicitly listed in program scope.</li>
                     </ul>
                     <p className="text-[10px] text-red-500/80 uppercase font-bold mt-4 flex items-center gap-2">
                        <AlertCircle size={14} /> Unauthorized testing outside scope is strictly prohibited.
                     </p>
                  </div>
               </div>

               <div id="reporting" className="scroll-mt-32">
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 2. Reporting Guidelines
                  </h3>
                  <div className="grid md:grid-cols-2 gap-8">
                     <div className="space-y-4">
                        <h4 className="text-green-500 font-bold text-xs uppercase flex items-center gap-2">
                           <Terminal size={14} /> Submission Requirements
                        </h4>
                        <ul className="text-xs space-y-2 text-gray-500 list-disc pl-4">
                           <li>Submit reports only via Zeroday Test platform.</li>
                           <li>Detailed steps to reproduce the issue.</li>
                           <li>Clear impact assessment (CIA Triad).</li>
                           <li>Safe, non-destructive Proof-of-Concept (PoC).</li>
                        </ul>
                     </div>
                     <div className="space-y-4">
                        <h4 className="text-red-500 font-bold text-xs uppercase flex items-center gap-2">
                           <Zap size={14} /> Prohibited Actions
                        </h4>
                        <ul className="text-xs space-y-2 text-gray-500 list-disc pl-4">
                           <li>Denial-of-Service (DoS) attacks.</li>
                           <li>Data deletion or modification.</li>
                           <li>Social engineering of staff or clients.</li>
                           <li>Public sharing before authorization.</li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div id="legal" className="scroll-mt-32 p-8 bg-zinc-900 border border-green-500/20 rounded-[2.5rem] relative overflow-hidden print:bg-white print:border-black">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -right-20 -bottom-20 opacity-5">
                    <ShieldCheck size={250} className="text-green-500" />
                  </motion.div>
                  
                  <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3 print:text-black">
                    <Gavel className="text-green-500" /> 6. Legal Protection (Safe Harbor)
                  </h3>
                  <p className="text-sm mb-4 leading-relaxed relative z-10">
                    Hunters acting in good faith and within scope are protected from legal action by the Client. Researchers are recognized as independent security experts, not employees.
                  </p>
                  <div className="flex items-center gap-3 relative z-10 p-3 bg-green-500/10 rounded-xl border border-green-500/20 w-fit">
                     <Zap size={14} className="text-green-500" />
                     <span className="text-[10px] font-mono text-green-700 uppercase tracking-widest">Safe_Harbor: ACTIVE</span>
                  </div>
               </div>

               <div id="rewards" className="scroll-mt-32">
                  <h3 className="text-xl font-black text-white uppercase mb-4 flex items-center gap-3 print:text-black">
                    <div className="w-1 h-6 bg-green-500 rounded-full"></div> 5. Rewards & Recognition
                  </h3>
                  <p className="text-gray-400 mb-4">Valid submissions may be eligible for rewards and Hall of Fame recognition. Zeroday Test retains the right to validate or refuse rewards based on report quality and policy adherence.</p>
               </div>

               {/* Section 10: Final Acceptance Box */}
               <div className="mt-16 p-8 md:p-12 bg-green-600 rounded-[3rem] text-black shadow-[0_0_50px_rgba(22,163,74,0.3)]">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-black rounded-lg">
                              <ShieldCheck size={24} className="text-green-500" />
                           </div>
                           <h4 className="text-lg font-black uppercase tracking-tight">10. Policy Acceptance</h4>
                        </div>
                        <p className="text-xs md:text-sm font-bold leading-relaxed max-w-xl">
                           By participating in Zeroday Test programs, you agree to follow this Responsible Disclosure Policy. Unsafe or out-of-scope testing results in immediate account suspension and legal liability.
                        </p>
                     </div>
                     <div className="text-right">
                        <div className="p-4 border-2 border-black/20 rounded-2xl flex flex-col items-center">
                           <Trophy size={32} />
                           <p className="text-[9px] font-mono uppercase font-black mt-2">Hacker_Integrity_Seal</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </motion.div>
        </div>

        {/* Global Footer Meta for Policy */}
        <div className="mt-12 text-center opacity-30">
           <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.5em]">
              Security_Audited_Document | Established: 2026 | Node: 0x9AF2
           </p>
        </div>

      </div>
    </div>
  );
}