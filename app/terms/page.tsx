"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation'; // ব্যাক বাটনের জন্য
import { 
  FileText, ShieldCheck, Gavel, UserCog, 
  Lock, Globe, Info, Scale, Fingerprint, 
  Terminal, AlertTriangle, Printer, QrCode,
  MapPin, Mail, Phone, CheckCircle2, Ban,
  ExternalLink, Zap, Menu, X, ArrowLeft, ChevronRight
} from 'lucide-react';

const sections = [
  { id: "definitions", title: "1. Definitions", icon: <Info size={16} /> },
  { id: "license", title: "2. Limited License", icon: <FileText size={16} /> },
  { id: "compliance", title: "3. Legal Compliance", icon: <Gavel size={16} /> },
  { id: "property", title: "4. Intellectual Property", icon: <Fingerprint size={16} /> },
  { id: "security", title: "5. Account Security", icon: <Lock size={16} /> },
  { id: "platform", title: "6. Use of Platform", icon: <Terminal size={16} /> },
  { id: "liability", title: "7. Liability Limits", icon: <AlertTriangle size={16} /> },
  { id: "eligibility", title: "8. Eligibility", icon: <UserCog size={16} /> },
  { id: "copyright", title: "9. Copyright Complaints", icon: <ShieldCheck size={16} /> },
  { id: "links", title: "10. Third-Party Links", icon: <ExternalLink size={16} /> },
  { id: "general", title: "11. General Terms", icon: <Globe size={16} /> },
];

export default function TermsAndConditionsPage() {
  const handlePrint = () => window.print();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black scroll-smooth">
      
      {/* --- মোবাইল ফ্লোটিং মেনু এবং ব্যাক বাটন (ডেক্সটপে হাইড) --- */}
      <div className="lg:hidden fixed bottom-24 right-6 z-[100] flex flex-col gap-4">
        <motion.button
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          onClick={() => router.back()}
          className="w-12 h-12 bg-zinc-900 border border-white/10 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md"
        >
          <ArrowLeft size={20} />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-14 h-14 bg-green-600 text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? <X size={24} key="x" /> : <Menu size={24} key="m" />}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* --- মোবাইল মেনু ড্রয়ার --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25 }} className="lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-zinc-950 border-l border-green-500/20 z-[95] p-6 shadow-2xl flex flex-col">
              <div className="mb-8 mt-10">
                <p className="text-[10px] font-mono text-green-900 uppercase tracking-[0.4em] mb-2">Tactical_Nav</p>
                <h4 className="text-white font-black uppercase text-lg border-b border-white/5 pb-2">Terms Index</h4>
              </div>
              <div className="flex-1 overflow-y-auto space-y-2">
                {sections.map((item) => (
                  <a key={item.id} href={`#${item.id}`} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-gray-400 active:bg-green-500/10 active:text-green-500 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-green-900">{item.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-tight">{item.title}</span>
                    </div>
                    <ChevronRight size={14} className="opacity-20" />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Background Decor */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">
        
        {/* অফিশিয়াল লেটারহেড */}
        <div className="mb-12 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-2">
                 <ShieldCheck className="text-green-500" size={32} />
                 <h2 className="text-white font-black text-2xl tracking-widest uppercase">Byte Capsule</h2>
              </div>
              <div className="text-[10px] font-mono text-gray-500 space-y-1">
                 <p className="font-bold text-gray-400 uppercase italic">STAY SAFE, STAY SECURE</p>
                 <p className="flex items-center gap-2"><MapPin size={10} /> Level-4, Byte Capsule, 15 Indira Road, Farmgate, Dhaka-1215</p>
                 <p className="flex items-center gap-2"><Mail size={10} /> mail@bytecapsuleit.com | <Phone size={10} /> +8801796934898</p>
              </div>
           </div>
           <div className="flex flex-col items-center gap-3">
              <div className="p-3 bg-white rounded-xl">
                 <QrCode size={70} className="text-black" />
              </div>
              <button onClick={handlePrint} className="flex items-center gap-2 text-[10px] font-mono text-green-500 hover:text-white transition-colors uppercase tracking-widest">
                 <Printer size={12} /> PRINT_FULL_TERMS
              </button>
           </div>
        </div>

        {/* ওস্তাদ, এখানে items-start যোগ করা হয়েছে যাতে সাইডবার স্থির দাঁড়িয়ে থাকে */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          
          {/* --- ১. ফিক্সড সাইডবার (Desktop) --- */}
          <aside className="hidden lg:block sticky top-32 space-y-2 max-h-[75vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-900">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Terms_Structure</p>
            {sections.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group">
                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                <span className="text-[11px] font-bold uppercase tracking-tight">{item.title}</span>
              </a>
            ))}
          </aside>

          {/* --- ২. মেইন কন্টেন্ট (প্রতিটি শব্দ ইনপুট করা হয়েছে) --- */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-950/80 border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-20 leading-relaxed">
              
              {/* Header Title */}
              <div className="text-center space-y-4">
                  <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                     ZeroDay Test <br />
                     <span className="text-green-500 underline decoration-green-900">Terms & Conditions</span>
                  </h1>
                  <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Effective Date: February 09, 2026</p>
              </div>

              <p className="p-8 bg-zinc-900/50 border-l-4 border-green-500 rounded-r-3xl italic font-light text-gray-400">
                These Terms & Conditions govern your use of Byte Capsule IT’s Bug Bounty Platform, “ZeroDay Test” (the “Website”), including all associated sub-domains and applications, in accordance with Bangladesh cyber laws, including the <span className="text-white font-bold">Cyber Security Act 2025</span>, <span className="text-white font-bold">Digital Security Act 2018</span>, and <span className="text-white font-bold">ICT Act 2006</span>.
              </p>

              {/* 1. Definitions */}
              <div id="definitions" className="scroll-mt-32">
                <h3 className="text-xl font-bold text-white uppercase mb-6 border-b border-white/5 pb-4 flex items-center gap-3">
                  <Info className="text-green-500" size={20} /> 1. Definitions
                </h3>
                <ul className="space-y-4 text-sm font-light text-gray-400 list-none pl-4">
                  <li>• <span className="text-white font-bold">Byte Capsule IT, we, us, our:</span> Refers to the owner and operator of the Website.</li>
                  <li>• <span className="text-white font-bold">Visitor:</span> Anyone browsing the Website without a registered account.</li>
                  <li>• <span className="text-white font-bold">Member:</span> A registered user of the Website who participates in Bug Bounty programs.</li>
                  <li>• <span className="text-white font-bold">Researcher:</span> A Member authorized to perform security testing through the ZeroDay Test platform.</li>
                  <li>• <span className="text-white font-bold">Customer:</span> Any organization or individual that engages ZeroDay Test services.</li>
                  <li>• <span className="text-white font-bold">Content:</span> All text, images, videos, graphics, data, or other materials accessible on the Website.</li>
                  <li>• <span className="text-white font-bold">Program Brief / Bounty Brief:</span> Documentation describing the scope, requirements, and rewards of a specific ZeroDay Test program.</li>
                </ul>
              </div>

              {/* 2. Limited License */}
              <div id="license" className="scroll-mt-32">
                <h3 className="text-xl font-bold text-white uppercase mb-4 border-b border-white/5 pb-4">2. Limited License</h3>
                <p className="text-sm font-light text-gray-400">Byte Capsule IT grants a <span className="text-white font-bold underline">non-exclusive, non-transferable, revocable license</span> to access the Website solely for participating in ZeroDay Test programs, in compliance with applicable Bangladesh cyber laws. Any other use is prohibited.</p>
              </div>

              {/* 3. Legal Compliance */}
              <div id="compliance" className="scroll-mt-32">
                <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                  <Gavel className="text-green-500" /> 3. Legal Compliance
                </h3>
                <div className="space-y-6">
                  <p className="text-sm text-gray-400">You agree to comply with all applicable Bangladesh laws, including:</p>
                  <ul className="space-y-4 text-xs md:text-sm pl-4">
                    <li className="flex gap-4"><span className="text-green-500 font-mono">●</span> <span><span className="text-white font-bold uppercase">Cyber Security Act 2025</span> – ensuring lawful use of cyberspace and secure handling of sensitive information.</span></li>
                    <li className="flex gap-4"><span className="text-green-500 font-mono">●</span> <span><span className="text-white font-bold uppercase">Digital Security Act 2018</span> – prohibiting unauthorized digital activities, hacking, or distribution of harmful content.</span></li>
                    <li className="flex gap-4"><span className="text-green-500 font-mono">●</span> <span><span className="text-white font-bold uppercase">ICT Act 2006</span> – governing electronic transactions and lawful use of digital communication tools.</span></li>
                  </ul>
                  <p className="text-xs italic text-gray-600 border-l-2 border-green-900/30 pl-4">Byte Capsule IT may investigate violations and report unlawful activities to law enforcement authorities as required.</p>
                </div>
              </div>

              {/* 4. Intellectual Property */}
              <div id="property" className="scroll-mt-32">
                <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">4. Intellectual Property</h3>
                <p className="text-sm text-gray-400">All website content, logos, and trademarks are owned by Byte Capsule IT. Unauthorized copying, distribution, or commercial use is prohibited. Researchers and Members may only use the materials in accordance with Program Briefs.</p>
              </div>

              {/* 5. Account Security */}
              <div id="security" className="scroll-mt-32 p-8 bg-zinc-900 border border-green-500/20 rounded-3xl">
                <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">5. Account Security</h3>
                <ul className="space-y-4 text-xs md:text-sm list-none">
                  <li className="flex gap-4"><span className="text-green-500">✔</span> Each Member must provide accurate information and may only hold one account.</li>
                  <li className="flex gap-4"><span className="text-green-500">✔</span> <span className="text-white font-black underline">Two-Factor Authentication (2FA) is strongly recommended.</span></li>
                  <li className="flex gap-4"><span className="text-green-500">✔</span> You are responsible for all activity under your account. Unauthorized use must be reported immediately.</li>
                  <li className="flex gap-4"><span className="text-green-500">✔</span> Byte Capsule IT may suspend or terminate accounts involved in policy violations.</li>
                </ul>
              </div>

              {/* 6. Use of the Platform */}
              <div id="platform" className="scroll-mt-32">
                <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">6. Use of the Platform</h3>
                <ul className="space-y-3 pl-6 list-disc text-gray-400 text-sm">
                  <li>Participation in ZeroDay Test programs is limited to Members authorized under each Bounty Brief.</li>
                  <li>All testing must comply with the defined scope, rules, and applicable laws.</li>
                  <li>Members <span className="text-red-900 font-bold underline">must not</span> access systems outside the authorized scope.</li>
                </ul>
              </div>

              {/* 7. Limitation of Liability */}
              <div id="liability" className="scroll-mt-32 p-10 bg-red-950/10 border border-red-500/30 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10"><AlertTriangle size={80} className="text-red-500" /></div>
                <h3 className="text-xl font-bold text-red-500 uppercase mb-6">7. Limitation of Liability</h3>
                <div className="space-y-4 text-sm text-gray-400">
                  <p>Byte Capsule IT provides the Website and services <span className="text-white font-bold">“as-is”</span>, without warranty of any kind. Participation is at your own risk. We are not liable for:</p>
                  <ul className="grid md:grid-cols-2 gap-3 text-xs font-mono">
                    <li>- Technical malfunctions or downtime</li>
                    <li>- Loss, damage, or unauthorized access of data</li>
                    <li>- Any indirect or consequential damages</li>
                  </ul>
                  <p className="pt-4 border-t border-red-900/20 text-[10px] uppercase font-bold text-red-800">Liability is limited to the cessation of access to the Website or the program in question.</p>
                </div>
              </div>

              {/* 8, 9, 10 Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                <div id="eligibility" className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <h4 className="text-white font-bold uppercase text-[10px] mb-3 flex items-center gap-2"><UserCog size={14} /> 8. Eligibility</h4>
                  <p className="text-[11px] text-gray-500">Users must comply with BD law. Under 18 requires parental consent. Researchers must meet additional Program Brief criteria.</p>
                </div>
                <div id="copyright" className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <h4 className="text-white font-bold uppercase text-[10px] mb-3 flex items-center gap-2"><Mail size={14} /> 9. Copyright</h4>
                  <p className="text-[11px] text-gray-500">Reports should be sent to <span className="text-white">support@bytecapsule.com</span> with sufficient details for investigation.</p>
                </div>
                <div id="links" className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
                  <h4 className="text-white font-bold uppercase text-[10px] mb-3 flex items-center gap-2"><ExternalLink size={14} /> 10. Links</h4>
                  <p className="text-[11px] text-gray-500">ZeroDay Test may contain links to third-party sites for convenience. Byte Capsule IT does not endorse or control such sites and is not responsible for their content or practices. </p>
                </div>
              </div>

              {/* 11. General Terms */}
              <div id="general" className="scroll-mt-32 pt-12 border-t border-white/10">
                <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3"><Globe className="text-green-500" /> 11. General Terms</h3>
                <ul className="space-y-4 text-xs md:text-sm font-light italic text-gray-500">
                  <li>• These Terms are governed by Bangladesh law, including CSA 2025, DSA 2018, and ICT Act 2006.</li>
                  <li>• Any dispute arising must be submitted to the <span className="text-white font-bold underline decoration-green-900">competent courts of Bangladesh</span>.</li>
                  <li>• If any part is held invalid, the remaining provisions remain in effect.</li>
                  <li>• Users agree to periodically review these Terms to remain compliant.</li>
                </ul>
                <p className='font-bold py-5'>By using ZeroDay Test, you acknowledge that you have read, understood, and agree to these Terms & Conditions and all applicable laws of Bangladesh.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Footer Meta */}
        <div className="mt-12 text-center opacity-30">
           <p className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.5em]">ZERODAY TEST | TERMS & CONDITIONS v2.4 | BYTE CAPSULE IT | NODE: 0x9AF2</p>
        </div>

      </div>
    </div>
  );
}