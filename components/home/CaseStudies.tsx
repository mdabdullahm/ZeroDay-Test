"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderLock, Activity, ShieldQuestion, Calendar } from 'lucide-react';

const cases = [
  {
    id: "OP-001",
    title: "Operation: Ghost Protocol",
    category: "Network Pentest",
    status: "Success",
    date: "JAN 2024",
    description: "একটি মাল্টিন্যাশনাল কোম্পানির ইন্টারনাল নেটওয়ার্কের সিকিউরিটি হোল খুঁজে বের করে তা প্যাচ করা হয়েছে।",
    tools: ["Nmap", "Metasploit", "Wireshark"]
  },
  {
    id: "OP-002",
    title: "Project: Titan Breach",
    category: "Web Security",
    status: "Classified",
    date: "MAR 2024",
    description: "একটি ই-কমার্স প্ল্যাটফর্মের পেমেন্ট গেটওয়েতে থাকা ক্রিটিক্যাল ভলনারেবিলিটি শনাক্তকরণ।",
    tools: ["Burp Suite", "SQLMap", "Python"]
  },
  {
    id: "OP-003",
    title: "Malware Analysis: Red-X",
    category: "Forensics",
    status: "Archived",
    date: "MAY 2024",
    description: "নতুন একটি র‍্যানসামওয়্যার স্ট্রেইন বিশ্লেষণ করে তার ডিক্রিপশন মেকানিজম বের করা।",
    tools: ["Ghidra", "OllyDbg", "C++"]
  }
];

const CaseStudies = () => {
  return (
    <section className="relative bg-black pt-0 pb-16 overflow-hidden -mt-5 md:-mt-20 lg:-mt-24 z-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-transparent via-green-500/10 to-transparent"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="mb-10">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-500 font-mono text-xs mb-4 uppercase tracking-[0.4em]"
          >
            <FolderLock size={14} /> [ Accessing_Case_Archives... ]
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-4"
          >
            Recent <span className="text-green-500">Operations</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl font-light">আমাদের সফল কিছু পেনিট্রেশন টেস্টিং এবং সাইবার সিকিউরিটি ইনভেস্টিগেশন রিপোর্ট। (সিকিউরিটি খাতিরে কিছু তথ্য গোপন রাখা হয়েছে)</p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-green-500/40 transition-all duration-500"
            >
              {/* Top Header with ID */}
              <div className="p-4 bg-white/5 border-b border-white/5 flex justify-between items-center">
                <span className="text-[10px] font-mono text-green-700">{item.id}</span>
                <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                   <div className="p-2 bg-green-500/10 text-green-500 rounded-lg group-hover:bg-green-500 group-hover:text-black transition-all">
                      <ShieldQuestion size={20} />
                   </div>
                   <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{item.category}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 h-16 overflow-hidden">
                  {item.description}
                </p>

                {/* Technical Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                   {item.tools.map((tool, tIdx) => (
                     <span key={tIdx} className="text-[9px] font-mono px-2 py-0.5 bg-green-500/5 border border-green-500/20 text-green-600 rounded">
                        #{tool}
                     </span>
                   ))}
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                   <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={12} />
                      {item.date}
                   </div>
                   <motion.button 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-xs font-bold text-green-500 uppercase tracking-tighter"
                   >
                     View File <ExternalLink size={14} />
                   </motion.button>
                </div>
              </div>

              {/* Status Ribbon */}
              <div className="absolute top-12 -right-12 rotate-45 bg-green-600 text-black text-[10px] font-bold py-1 px-12 shadow-lg">
                {item.status}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Success Rate Display */}
        <div className="mt-16 p-8 bg-green-500/5 border border-green-500/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-4">
              <div className="p-4 bg-green-500 text-black rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                 <Activity size={32} />
              </div>
              <div>
                 <h4 className="text-xl font-bold text-white uppercase tracking-tight">System Global Success Rate</h4>
                 <p className="text-sm text-gray-500 font-mono">Real-time stats from all operations.</p>
              </div>
           </div>
           <div className="text-5xl font-black text-green-500 font-mono">98.4%</div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;