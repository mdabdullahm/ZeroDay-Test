"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, ExternalLink, ShieldAlert, Terminal, Cpu, ArrowLeft, Activity } from 'lucide-react';
import Link from 'next/link';

const protocolNodes = [
  {
    id: "web",
    title: "Web Infiltration Methodology",
    desc: "Comprehensive breakdown of our web application testing phases—from reconnaissance to final exploitation.",
    icon: <Activity size={24} />,
    driveLink: "https://drive.google.com/drive/folders/1YWukqsC066baB9hBRUCnZ_dfk7ngQdUb?usp=sharing"
  },
  {
    id: "network",
    title: "Network Breaching Standards",
    desc: "Internal network assessment protocols including lateral movement and privilege escalation strategies.",
    icon: <Terminal size={24} />,
    driveLink: "https://drive.google.com/drive/folders/1YWukqsC066baB9hBRUCnZ_dfk7ngQdUb?usp=sharing"
  },
  {
    id: "cloud",
    title: "Cloud Hardening Framework",
    desc: "Standard procedures for auditing IAM policies, container security, and serverless infrastructure.",
    icon: <Cpu size={24} />,
    driveLink: "https://drive.google.com/drive/folders/1YWukqsC066baB9hBRUCnZ_dfk7ngQdUb?usp=sharing"
  }
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black pt-32 pb-20">
      
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-mono text-green-500 mb-12 hover:text-white transition-colors group uppercase tracking-widest">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return_To_Base
        </Link>

        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
            <FileCode size={14} /> [ SECURITY_METHODOLOGY_v1 ]
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
            Tactical <span className="text-green-500 font-black">Methodology</span>
          </h1>
          <p className="mt-8 text-gray-500 max-w-2xl font-mono text-xs uppercase leading-relaxed tracking-widest">
            Standardized technical workflows and reporting frameworks for Byte Capsule security operations. High-level clearance required.
          </p>
        </div>

        {/* Protocol Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {protocolNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-10 hover:border-green-500/30 transition-all duration-500 flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-8 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all">
                  {node.icon}
                </div>
                <h3 className="text-2xl font-bold text-white uppercase italic tracking-tighter mb-4 group-hover:text-green-400 transition-colors">
                  {node.title}
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed font-mono uppercase mb-10 tracking-wider">
                  {node.desc}
                </p>
              </div>

              <a 
                href={node.driveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white hover:bg-green-600 hover:text-black transition-all uppercase tracking-[0.2em]"
              >
                ACCESS_PROTOCOL <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-32 p-10 bg-zinc-900/30 border border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <ShieldAlert size={40} className="text-red-900" />
              <div>
                 <p className="text-white font-bold uppercase tracking-widest italic text-lg">Confidentiality Agreement</p>
                 <p className="text-[10px] font-mono text-gray-500 uppercase mt-1">All downloaded methodologies must not be shared outside of authorized perimeter.</p>
              </div>
           </div>
           <div className="text-[10px] font-mono text-green-900 uppercase bg-green-500/5 px-4 py-2 rounded-full border border-green-500/10">
              System_ID: BC-MET-772
           </div>
        </div>

      </div>
    </div>
  );
}