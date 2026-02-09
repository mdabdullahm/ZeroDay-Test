"use client";
import { motion } from 'framer-motion';
import { ShieldAlert, Terminal, Eye, Lock, Bug, Activity, FileSearch, ShieldCheck } from 'lucide-react';

const findings = [
  {
    id: "VULN-2024-001",
    title: "SQL Injection (Time-based)",
    severity: "CRITICAL",
    impact: "Database Access",
    desc: "It was possible to dump the entire database through parameter injection in the user authentication module.",
    status: "PATCHED",
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    id: "VULN-2024-002",
    title: "Broken JWT Auth",
    severity: "HIGH",
    impact: "Account Takeover",
    desc: "Due to insecure signature verification, it was possible to forge any user's session token.",
    status: "FIXED",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    id: "VULN-2024-003",
    title: "IDOR Vulnerability",
    severity: "MEDIUM",
    impact: "Data Exposure",
    desc: "Sensitive information of other users was being viewed by changing the ID in the invoice download option.",
    status: "RESOLVED",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10"
  }
];

const SampleFindings = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <FileSearch size={14} /> [ ACCESSING_REDACTED_DATA_LOGS ]
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Sample <span className="text-green-500">Findings</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base font-light italic border-l-2 border-green-500/20 pl-4">
            The reports below are some common bugs from our past testing. The actual domains and sensitive information have been [REDACTED] to protect client privacy.
          </p>
        </div>

        {/* Findings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {findings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-zinc-950/40 border border-white/5 rounded-3xl overflow-hidden hover:border-green-500/30 transition-all duration-500"
            >
              {/* Report Header Bar */}
              <div className="p-4 bg-white/5 border-b border-white/5 flex justify-between items-center text-[10px] font-mono">
                <span className="text-gray-500 tracking-tighter">{item.id}</span>
                <span className={`px-2 py-0.5 rounded ${item.bg} ${item.color} font-bold`}>{item.severity}</span>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>

                <div className="space-y-4">
                   <div className="p-4 bg-black/50 border border-white/5 rounded-xl">
                      <p className="text-[10px] font-mono text-green-800 uppercase mb-1 flex items-center gap-1">
                         <Bug size={10} /> Description
                      </p>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                   </div>

                   <div className="flex justify-between items-center">
                      <div>
                         <p className="text-[9px] font-mono text-gray-700 uppercase">Impact</p>
                         <p className="text-white text-xs font-bold">{item.impact}</p>
                      </div>
                      <div className="text-right">
                         <p className="text-[9px] font-mono text-gray-700 uppercase">Status</p>
                         <p className="text-green-500 text-xs font-bold flex items-center gap-1">
                            <ShieldCheck size={12} /> {item.status}
                         </p>
                      </div>
                   </div>
                </div>

                {/* View Details Ghost Button */}
                <button className="w-full mt-8 py-3 border border-white/10 rounded-xl text-[10px] font-mono text-gray-600 group-hover:text-green-500 group-hover:border-green-500/30 transition-all flex items-center justify-center gap-2">
                  <Eye size={14} /> VIEW_FULL_REDACTED_REPORT
                </button>
              </div>

              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/0 group-hover:bg-green-500/5 transition-all duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Global Stats/Terminal Output */}
        <div className="mt-16 p-6 bg-zinc-900/10 border border-white/5 rounded-2xl">
           <div className="flex items-center gap-3 font-mono text-xs text-green-900">
              <Terminal size={14} className="animate-pulse" />
              <p>root@hoyzerotest:~$ grep -r "critical" /var/log/vuln_scans | tail -n 5</p>
           </div>
           <div className="mt-4 space-y-1 opacity-20">
              <p className="text-[9px] font-mono text-gray-500">[*] [REDACTED] server found with CVE-2023-XXXX</p>
              <p className="text-[9px] font-mono text-gray-500">[*] Injection point detected at /api/v1/secure_auth</p>
              <p className="text-[9px] font-mono text-gray-500">[*] Status: Security Patch Applied Successfully</p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default SampleFindings;