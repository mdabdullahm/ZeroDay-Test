"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Zap, Code2, Layers, Binary, Box } from 'lucide-react';

const toolCategories = [
  {
    category: "Penetration Testing & Security Research ",
    icon: <Terminal size={20} />,
    tools: [
      { name: "Cobalt Strike (Adversary Simulation)", level: "95%" },
      { name: "BloodHound (Active Directory Mapping)", level: "90%" },
      { name: "Hashcat (Password Cracking)", level: "98%" },
      { name: "Ghidra / IDA Pro (Reverse Engineering)", level: "85%" },
      { name: "Bettercap (Network Security Testing)", level: "85%" },
      { name: "Nuclei (Vulnerability Scanning)", level: "85%" },
    ]
  },
  {
    category: "Detection, Monitoring & Defense",
    icon: <Shield size={20} />,
    tools: [
      { name: "Wazuh (XDR & SIEM) ", level: "92%" },
      { name: "Elastic Stack (ELK) (Log Analysis)", level: "80%" },
      { name: "Suricata (Intrusion Detection/Prevention)", level: "85%" },
      { name: "CrowdStrike Falcon (Endpoint Protection)", level: "95%" },
      { name: "Velociraptor (Digital Forensics & Incident Response)", level: "95%" },
      { name: "Trivy (Container Security)", level: "95%" },
    ]
  },
  {
    category: "DevOps & Automation",
    icon: <Code2 size={20} />,
    tools: [
      { name: "Go (Golang) (Systems Programming)", level: "95%" },
      { name: "Docker & Kubernetes (Containerization & Orchestration)", level: "90%" },
      { name: "Terraform (Infrastructure as Code)", level: "88%" },
      { name: "Ansible (Configuration Management)", level: "94%" },
      { name: "Jenkins / GitHub Actions (CI/CD Pipelines)", level: "94%" },
      { name: "Prometheus & Grafana (Monitoring & Visualization)", level: "94%" },
    ]
  }
];

const Tools = () => {
  return (
    <section className="relative pt-20 pb-0 bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-sm mb-4"
            >
              <Cpu size={16} /> [ TECH_STACK_OVERVIEW ]
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white"
            >
              Our Cyber <span className="text-green-500 underline decoration-green-500/30">Arsenal</span> & Expertise
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 font-mono text-sm max-w-xs border-l border-green-500/30 pl-4"
          >
            From system penetration to high-end development—we use the latest tools everywhere.
          </motion.p>
        </div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {toolCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 hover:border-green-500/20 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">{cat.category}</h3>
              </div>

              <div className="space-y-6">
                {cat.tools.map((tool, tIdx) => (
                  <div key={tIdx} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono text-gray-400 flex items-center gap-2">
                        <Binary size={12} className="text-green-800" /> {tool.name}
                      </span>
                      <span className="text-[10px] font-bold text-green-500">{tool.level}</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: tool.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-green-600 to-green-400 shadow-[0_0_10px_#22c55e]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Tag */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-1">
                   {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-green-500/30 rounded-full"></div>)}
                </div>
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Authorized_Use_Only</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tool Icons Marquee (Optional) */}
        <div className="mt-20 py-10 border-y border-white/5 flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <Zap size={32} />
            <Box size={32} />
            <Layers size={32} />
            <Binary size={32} />
            <Cpu size={32} />
            <Code2 size={32} />
        </div>

      </div>
    </section>
  );
};

export default Tools;