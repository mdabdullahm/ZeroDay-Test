"use client";
import React from 'react';
import {
  BookText, Terminal, Code, FileCode, Shield,
  Building2, Users, Activity, ArrowUpRight, Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HackerDocsPage() {

  // card data
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
          {docCards.map((card, index) => (
            <Link href={card.link} key={index}> {/* এখানে Link ব্যবহার করা হয়েছে */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: "rgba(34, 197, 94, 0.4)" }}
                className="group relative p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] overflow-hidden backdrop-blur-xl transition-all cursor-pointer h-full"
              >
                {/* কার্ডের পেছনে গ্লো ইফেক্ট */}
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

                  {/* এই বাটনটি শুধু দেখানোর জন্য, পুরো কার্ড এখন লিংক */}
                  <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] font-black uppercase tracking-widest pt-4 group-hover:translate-x-2 transition-transform duration-300">
                    Initialize_Access <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* নিচের ডেকোরেটিভ স্ক্যান লাইন */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
              </motion.div>
            </Link>
          ))}
        </div>
        {/* --- ৩টি কার্ড ডিজাইন শেষ --- */}

        <div className="grid lg:grid-cols-[320px_1fr] gap-16">

          {/* Sidebar Navigation */}
          <div className="space-y-4">
            <p className="text-[10px] font-mono text-green-600 uppercase tracking-[0.4em] mb-6">Documentation_Index</p>
            {['Getting Started', 'Reporting Rules', 'Bounty Tiers', 'Hall of Fame Info'].map((t) => (
              <div key={t} className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl text-gray-400 hover:text-green-500 hover:bg-green-500/5 hover:border-green-500/20 cursor-pointer transition-all text-xs font-bold uppercase tracking-wider">
                {t}
              </div>
            ))}
          </div>

          {/* Main Documentation Content */}
          <div className="bg-zinc-950/50 border border-white/5 p-8 md:p-16 rounded-[3rem] space-y-10 font-light text-gray-400 backdrop-blur-sm relative overflow-hidden shadow-2xl">

            {/* Decorative Background Icon */}
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