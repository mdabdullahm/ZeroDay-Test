"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Database, Globe, UserCheck, FileText, Info, Mail, Clock } from 'lucide-react';

const sections = [
  { id: "notice", title: "1. Notice at Collection", icon: <Info size={16} /> },
  { id: "scope", title: "2. Scope of Policy", icon: <Globe size={16} /> },
  { id: "collection", title: "3. Types of Information", icon: <Database size={16} /> },
  { id: "usage", title: "4. How We Use Data", icon: <FileText size={16} /> },
  { id: "disclosure", title: "5. Disclosure", icon: <Lock size={16} /> },
  { id: "transfer", title: "6. Int. Data Transfers", icon: <ShieldCheck size={16} /> },
  { id: "rights", title: "7. Data Subject Rights", icon: <UserCheck size={16} /> },
  { id: "retention", title: "8. Data Retention", icon: <Clock size={16} /> },
];

const PrivacyContent = () => {
  return (
    <section className="relative bg-black pt-32 pb-24 overflow-hidden min-h-screen">
      
      {/* Background Matrix Decor */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 border-b border-green-500/10 pb-12">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
             <ShieldCheck size={14} /> [ SECURITY_DATA_PROTOCOL_v2.4 ]
          </motion.div>
          <h1 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Privacy <span className="text-green-500">Policy</span>
          </h1>
          <div className="flex flex-wrap gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
             <p>Operated by: <span className="text-white">Byte Capsule IT</span></p>
             <p>Last Updated: <span className="text-green-900">February 09, 2026</span></p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          
          {/* Left Side: Sticky Navigation (Desktop Only) */}
          <aside className="hidden lg:block sticky top-32 space-y-2">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Protocol_Index</p>
            {sections.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group"
              >
                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                <span className="text-xs font-bold uppercase tracking-tight">{item.title}</span>
              </a>
            ))}
          </aside>

          {/* Right Side: Detailed Content */}
          <div className="space-y-16 text-gray-400 leading-relaxed font-light">
            
            {/* Introduction */}
            <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-3xl backdrop-blur-sm">
               <p className="text-sm md:text-base italic">
                 This Privacy Policy explains how Byte Capsule IT ("Byte Capsule", "we", "our", or "us") collects, uses, processes, stores, and discloses personal information in connection with ZeroDay Test, our proprietary bug bounty and vulnerability disclosure platform.
               </p>
            </div>

            {/* Section 1 */}
            <div id="notice" className="scroll-mt-32">
               <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-green-500 rounded-full"></div> 1. Notice at Collection
               </h3>
               <p className="text-sm mb-4 font-mono text-green-900 tracking-tighter">PHASE_01: INFORMATION_DISCLOSURE</p>
               <ul className="space-y-3 pl-4 border-l border-green-500/20 ml-1">
                  <li>• Categories of personal information collected</li>
                  <li>• Purposes for which the information is used</li>
                  <li>• Disclosure to third-party entities</li>
                  <li>• Data retention lifecycle</li>
               </ul>
            </div>

            {/* Section 2 */}
            <div id="scope" className="scroll-mt-32">
               <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-green-500 rounded-full"></div> 2. Scope of Policy
               </h3>
               <p className="text-sm mb-4 leading-relaxed">
                 This Privacy Policy applies to personal information processed through the ZeroDay Test platform, including our website, researcher portal, and client dashboards.
               </p>
               <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                  <p className="text-[10px] font-mono text-red-900 uppercase mb-2">Customer Data Disclaimer</p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Data submitted by organizations (Customer Data) are processed strictly on behalf of those organizations. Any requests regarding Customer Data must be directed to the relevant customer.
                  </p>
               </div>
            </div>

            {/* Section 3 */}
            <div id="collection" className="scroll-mt-32">
               <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-green-500 rounded-full"></div> 3. Types of Personal Information
               </h3>
               <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                     <p className="text-xs font-bold text-green-500 uppercase tracking-widest font-mono">3.1 Direct Submissions</p>
                     <p className="text-sm">Account and Profile Info: Name, email, skills, certifications, and research history.</p>
                     <p className="text-sm">Identity Verification: Government-issued ID details (where required).</p>
                  </div>
                  <div className="space-y-4">
                     <p className="text-xs font-bold text-green-500 uppercase tracking-widest font-mono">3.2 Automated Logs</p>
                     <p className="text-sm">IP address, approximate location, browser type, and security log timestamps.</p>
                  </div>
               </div>
            </div>

            {/* Section 4 & 5 (Summarized for design) */}
            <div id="usage" className="scroll-mt-32">
               <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">
                  <div className="w-1 h-6 bg-green-500 rounded-full"></div> 4. How We Use Data
               </h3>
               <p className="text-sm leading-relaxed">
                 We use information to maintain platform security, manage researcher accounts, triage vulnerabilities, and prevent fraud. Byte Capsule IT does not sell personal information.
               </p>
            </div>

            {/* Section 7 - Rights */}
            <div id="rights" className="scroll-mt-32 p-8 bg-zinc-900/50 border border-green-500/10 rounded-[2.5rem] relative overflow-hidden">
               <ShieldCheck size={100} className="absolute -right-10 -bottom-10 text-green-500 opacity-5 -rotate-12" />
               <h3 className="text-xl font-bold text-white uppercase mb-6">7. Data Subject Rights</h3>
               <p className="text-sm mb-6">Subject to applicable Bangladeshi law, you have the right to:</p>
               <div className="grid md:grid-cols-2 gap-4 text-xs font-mono uppercase tracking-widest text-green-800">
                  <div className="flex items-center gap-2"><CheckCircle size={12} /> Request Access</div>
                  <div className="flex items-center gap-2"><CheckCircle size={12} /> Request Correction</div>
                  <div className="flex items-center gap-2"><CheckCircle size={12} /> Request Deletion</div>
                  <div className="flex items-center gap-2"><CheckCircle size={12} /> Object to Processing</div>
               </div>
            </div>

            {/* Contact Section */}
            <div className="pt-16 border-t border-white/5">
               <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-lg mb-2">11. Contact Information</h4>
                    <p className="text-xs text-gray-600 font-mono">Byte Capsule IT | Bangladesh</p>
                  </div>
                  <a href="mailto:mail@bytecapsuleit.com" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] text-xs uppercase tracking-widest">
                     <Mail size={16} /> mail@bytecapsuleit.com
                  </a>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

// ছোট হেল্পার আইকন
const CheckCircle = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

export default PrivacyContent;