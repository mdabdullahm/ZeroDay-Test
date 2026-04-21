"use client";
import React, { useState } from 'react'; // useState যোগ করা হয়েছে
import {
  BookText, Terminal, Code, FileCode, Shield,
  Building2, Users, Activity, ArrowUpRight, Cpu, X, // X আইকন যোগ করা হয়েছে
  Gavel
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // AnimatePresence যোগ করা হয়েছে
import Link from 'next/link';

export default function HackerDocsPage() {
  // ড্রাইভ ওপেন করার জন্য একটি স্টেট
  const [openDrive, setOpenDrive] = useState<string | null>(null);

  // card data (আগের মতোই আছে)
  const docCards = [
    {
      title: "Customer Doc",
      desc: "Enterprise solutions, organization setup, and program management protocols.",
      icon: <Building2 className="text-green-500" size={32} />,
      status: "SECURE",
      color: "from-blue-500/10",
      link: "/customerdoc"
    },
    {
      title: "User Doc",
      desc: "Researcher onboarding, vulnerability reporting, and wallet connection guide.",
      icon: <Users className="text-green-500" size={32} />,
      status: "ENCRYPTED",
      color: "from-green-500/10",
      link: "https://drive.google.com/file/d/1G-xm6qydX4naengUq25EAsG8fwfuUI7N/preview" 
    },
    {
      title: "SOP Protocol",
      desc: "Standard Operating Procedures for ethical disclosure and engagement rules.",
      icon: <Activity className="text-green-500" size={32} />,
      status: "ACTIVE",
      color: "from-red-500/10",
      link: "/sop"
    },
    {
      title: "GCU Protocol",
      desc: "General Conditions of Use, legal frameworks, and governing platform terms.",
      icon: <Gavel className="text-green-500" size={32} />,
      status: "LEGAL",
      color: "from-purple-500/10",
      link: "/customerdoc" 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-20 selection:bg-green-500 selection:text-black font-sans">
      <div className="max-w-full mx-auto px-6 lg:px-20">

        {/* Breadcrumb Header */}
        <div className="flex items-center gap-3 text-green-500 font-mono text-xs mb-8 uppercase tracking-widest opacity-60">
          <Terminal size={14} /> <span>/root/docs/central_intelligence.sh</span>
        </div>

        <h1 className="text-4xl lg:text-7xl font-black uppercase mb-16 tracking-tighter leading-none">
          HACKER <span className="text-green-500 italic">DOCUMENTATION</span>
        </h1>

        {/* --- ৩টি কার্ড ডিজাইন শুরু --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {docCards.map((card, index) => {
            // চেক করা হচ্ছে এটা কি ড্রাইভ লিঙ্ক কি না
            const isDrive = card.link.startsWith('http');

            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: "rgba(34, 197, 94, 0.4)" }}
                onClick={() => isDrive && setOpenDrive(card.link)} // ড্রাইভ হলে স্টেট সেট করবে
                className="group relative p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-xl transition-all cursor-pointer h-full"
              >
                <div className={`absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br ${card.color} to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="p-4 bg-zinc-900 rounded-3xl border border-white/5 shadow-inner group-hover:border-green-500/50 transition-all">
                      {card.icon}
                    </div>
                    <span className="text-[9px] font-mono font-black px-3 py-1 bg-green-500/10 text-green-500 rounded-full border border-green-500/20 uppercase tracking-[0.2em]">
                      {card.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-3 italic group-hover:text-green-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] font-black uppercase tracking-widest pt-4 group-hover:translate-x-2 transition-transform duration-300">
                    Initialize_Access <ArrowUpRight size={14} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
              </motion.div>
            );

            return isDrive ? (
              <div key={index}>{content}</div>
            ) : (
              <Link href={card.link} key={index}>{content}</Link>
            );
          })}
        </div>

        {/* ড্রাইভ ভিউয়ার মোডাল (এটি আপনার সাইটের ভেতরেই ড্রাইভ ওপেন করবে) */}
        <AnimatePresence>
          {openDrive && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setOpenDrive(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-6xl h-[85vh] bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden z-10 shadow-2xl"
              >
                <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-white/5">
                  <span className="text-[10px] font-mono text-green-500 uppercase tracking-widest">Secure_Document_Viewer</span>
                  <button onClick={() => setOpenDrive(null)} className="text-white hover:text-red-500 transition-colors">
                    <X size={24} />
                  </button>
                </div>
                <iframe src={openDrive} className="w-full h-full" allow="autoplay"></iframe>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16">
          {/* Sidebar Navigation (আগের মতোই আছে) */}
          <div className="space-y-4">
            <p className="text-[10px] font-mono text-green-600 uppercase tracking-[0.4em] mb-6">Documentation_Index</p>
            {['Getting Started', 'Reporting Rules', 'Bounty Tiers', 'Hall of Fame Info'].map((t) => (
              <div key={t} className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl text-gray-400 hover:text-green-500 hover:bg-green-500/5 hover:border-green-500/20 cursor-pointer transition-all text-xs font-bold uppercase tracking-wider">
                {t}
              </div>
            ))}
          </div>

          {/* Main Documentation Content (আগের মতোই আছে) */}
          <div className="bg-zinc-950/50 border border-white/5 p-8 md:p-16 rounded-[3rem] space-y-10 font-light text-gray-400 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            <Shield size={200} className="absolute -right-20 -bottom-20 text-green-500 opacity-[0.02] -rotate-12" />
            <div className="space-y-6 relative z-10">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase flex items-center gap-3 tracking-tight">
                <Shield size={24} className="text-green-500" /> Researcher Code of Conduct
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                All researchers participating on the ZeroDay Test platform must strictly adhere to our ethical guidelines and the established 'Rules of Engagement'. Integrity is our primary directive.
              </p>
            </div>
            <div className="space-y-4 relative z-10">
              <h3 className="text-white font-bold uppercase text-xs tracking-widest">Standard Operating Procedure</h3>
              <div className="p-8 bg-black/80 rounded-3xl border border-white/5 font-mono text-xs leading-relaxed text-green-600/90 shadow-2xl">
                <span className="text-green-600 font-bold"># protocol_execution_flow</span> <br /><br />
                <span className="text-gray-500">01.</span> Always maintain strict adherence to program scope. <br />
                <span className="text-gray-500">02.</span> Do not perform tests that could disrupt service availability. <br />
                <span className="text-gray-500">03.</span> Submit vulnerability reports immediately upon Proof-of-Concept. <br />
                <span className="text-gray-500">04.</span> Maintain confidentiality until coordinated disclosure is authorized.
              </div>
            </div>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] pt-8 border-t border-white/5">
              Version: 1.0.0-stable | Last_Updated: 2026.03.09
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
