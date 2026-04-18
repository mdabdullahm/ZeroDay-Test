// "use client";
// import React from 'react';
// import { BookText, Terminal, Code, FileCode, Shield } from 'lucide-react';

// export default function HackerDocsPage() {
//   return (
//     <div className="min-h-screen bg-black text-white pt-32 pb-20">
//       <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

//         {/* Breadcrumb Header */}
//         <div className="flex items-center gap-3 text-green-500 font-mono text-xs mb-8 uppercase tracking-widest opacity-60">
//           <Terminal size={14} /> <span>/root/docs/researcher_guidelines.md</span>
//         </div>

//         <h1 className="text-4xl lg:text-7xl font-black uppercase mb-12 tracking-tighter leading-none">
//           Hacker <span className="text-green-500 italic">Documentation</span>
//         </h1>

//         <div className="grid lg:grid-cols-[320px_1fr] gap-16">

//           {/* Sidebar Navigation */}
//           <div className="space-y-4">
//              <p className="text-[10px] font-mono text-green-900 uppercase tracking-[0.4em] mb-6">Documentation_Index</p>
//              {['Getting Started', 'Reporting Rules', 'Bounty Tiers', 'Hall of Fame Info'].map((t) => (
//                <div key={t} className="p-4 bg-zinc-900/30 border border-white/5 rounded-xl text-gray-400 hover:text-green-500 hover:border-green-500/20 cursor-pointer transition-all text-xs font-bold uppercase tracking-wider">
//                  {t}
//                </div>
//              ))}
//           </div>

//           {/* Main Documentation Content */}
//           <div className="bg-zinc-950/50 border border-white/5 p-8 md:p-16 rounded-[3rem] space-y-10 font-light text-gray-400 backdrop-blur-sm relative overflow-hidden">

//              {/* Decorative Background Icon */}
//              <Shield size={200} className="absolute -right-20 -bottom-20 text-green-500 opacity-[0.02] -rotate-12" />

//              <div className="space-y-6 relative z-10">
//                 <h2 className="text-2xl md:text-3xl font-black text-white uppercase flex items-center gap-3 tracking-tight">
//                   <Shield size={24} className="text-green-500" /> Researcher Code of Conduct
//                 </h2>
//                 <p className="text-sm md:text-base leading-relaxed">
//                   All researchers participating on the ZeroDay Test platform must strictly adhere to our ethical guidelines and the established 'Rules of Engagement'. Integrity is our primary directive.
//                 </p>
//              </div>

//              <div className="space-y-4 relative z-10">
//                 <h3 className="text-white font-bold uppercase text-xs tracking-widest">Standard Operating Procedure</h3>
//                 <div className="p-8 bg-black/80 rounded-3xl border border-white/5 font-mono text-xs leading-relaxed text-green-700/80 shadow-2xl">
//                    <span className="text-green-900"># protocol_execution_flow</span> <br /><br />
//                    <span className="text-gray-600">01.</span> Always maintain strict adherence to program scope. <br />
//                    <span className="text-gray-600">02.</span> Do not perform tests that could disrupt service availability. <br />
//                    <span className="text-gray-600">03.</span> Submit vulnerability reports immediately upon Proof-of-Concept. <br />
//                    <span className="text-gray-600">04.</span> Maintain confidentiality until coordinated disclosure is authorized.
//                 </div>
//              </div>

//              <p className="text-[10px] font-mono text-gray-700 uppercase tracking-[0.2em] pt-8 border-t border-white/5">
//                 Version: 1.0.4-stable | Last_Updated: 2026.03.09
//              </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Lock, Eye, Database,
  Globe, UserCheck, FileText, Info,
  Mail, Clock, AlertTriangle, Terminal,
  Fingerprint, Scale, Users, ShieldAlert,
  Cookie, Share2, Gavel, Printer, QrCode, MapPin, Phone,
  Cpu,
  CheckCircle2,
  History,
  FileSignature,
  CreditCard,
  Landmark,
  Smartphone,
  Zap,
  AlertCircle,
  Siren,
  Key,
  Hash,
  Handshake,
  Target,
  X,
  Trophy,
  Search,
  FileWarning,
  Radio,
  Activity,
  Monitor,
  Toolbox,
  RefreshCw,
  XCircle,
  DollarSign,
  Award
} from 'lucide-react';

const sections = [
  { id: "notice", title: "1. Notice at Collection", icon: <Info size={16} /> },
  { id: "scope", title: "2. Scope of Policy", icon: <Globe size={16} /> },
  { id: "collection", title: "3. Info Collection", icon: <Database size={16} /> },
  { id: "usage", title: "4. Data Usage", icon: <FileText size={16} /> },
  { id: "disclosure", title: "5. Data Disclosure", icon: <Share2 size={16} /> },
  { id: "transfer", title: "6. Int. Transfers", icon: <ShieldAlert size={16} /> },
  { id: "rights", title: "7. Subject Rights", icon: <UserCheck size={16} /> },
  { id: "retention", title: "8. Data Retention", icon: <Clock size={16} /> },
  { id: "children", title: "9. Children's Privacy", icon: <Users size={16} /> },
  { id: "changes", title: "10. Policy Changes", icon: <Fingerprint size={16} /> },
  { id: "contact", title: "11. Contact", icon: <Mail size={16} /> },
];

export default function PrivacyPolicyPage() {
  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">

      {/* Background Matrix Decor */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">

        {/* --- ১. অফিশিয়াল লেটারহেড --- */}
        <div className="mb-12 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="text-green-500" size={32} />
              <h2 className="text-white font-black text-2xl tracking-widest uppercase">Byte Capsule</h2>
            </div>
            <div className="text-[10px] font-mono text-gray-500 space-y-1">
              <p className="font-bold text-gray-400 uppercase tracking-tighter italic">STAY SAFE, STAY SECURE</p>
              <p className="flex items-center gap-2"><MapPin size={10} /> Level-4, Byte Capsule, 15 Indira Road, Farmgate, Dhaka-1215</p>
              <p className="flex items-center gap-2"><Mail size={10} /> mail@bytecapsuleit.com | <Phone size={10} /> +8801796934898</p>
              <p className="flex items-center gap-2"><Globe size={10} /> bytecapsuleit.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 bg-white rounded-xl">
              <QrCode size={70} className="text-black" />
            </div>
            <button onClick={handlePrint} className="flex items-center gap-2 text-[10px] font-mono text-green-500 hover:text-white transition-colors uppercase tracking-widest">
              <Printer size={12} /> Print_Protocol
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">

          {/* --- SIDEBAR INDEX --- */}
          <aside className="hidden lg:block sticky top-32 space-y-2 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-900">
            <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Protocol_Modules</p>
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group"
              >
                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-tight">{item.title}</span>
              </a>
            ))}
          </aside>

          {/* --- MAIN CONTENT AREA --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-950/80 border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            {/* Watermark Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none rotate-12">
              <ShieldCheck size={600} className="text-green-500" />
            </div>

            <div className="relative z-10">
              {/* Document Header */}
              <div className="mb-16 border-b border-white/5 pb-10">
                <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
                  <Terminal size={14} /> session_established: GCU_v1.0
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
                  General Conditions <br /> <span className="text-green-500">of Use (GCU)</span>
                </h1>
                <div className="flex flex-wrap gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-2"><History size={12} /> Ref: ByteCapsule/doc/ZT_GCU/001</span>
                  <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 flex items-center gap-2"><Clock size={12} /> Updated: 02/18/2026</span>
                </div>
              </div>

              {/* Company Info */}
              <div className="mb-20 space-y-12">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-8">
                  <Cpu className="text-green-500" size={28} />
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter italic">
                    Company Information
                  </h3>
                </div>

                {/* Identity & Registration Block */}
                <div className="p-8 bg-white/5 border-l-2 border-green-500 rounded-r-3xl backdrop-blur-sm">
                  <p className="leading-relaxed text-gray-400 font-mono text-sm uppercase tracking-tight">
                    These <span className="text-white font-bold">GCU</span> define the terms and conditions which apply between
                    <span className="text-white font-bold underline decoration-green-500/50 underline-offset-4 px-1">ZeroDay Test</span>,
                    a ZeroDay Test with its registered office at
                    <span className="text-gray-200 italic px-1">Level 04 Indira Road, Farmgate, Dhaka 1215, Dhaka, Bangladesh</span>,
                    registered under the <span className="text-white font-bold">Register of Joint Stock Companies and Firms</span>
                    under number <span className="text-green-500 font-bold font-mono">[INSERT REGISTRATION NUMBER]</span> (the "Company")
                    and any individual registering on the Company's platform (the "User") accessible via the address:
                    <a href="https://zerodaytest.com" className="text-green-500 hover:underline px-1">https://zerodaytest.com</a>
                    (the "Platform").
                  </p>
                </div>

                {/* Services Framework Block */}
                <div className="grid md:grid-cols-1 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-green-500 font-mono text-xs font-black uppercase tracking-[0.3em] flex items-center gap-2">
                      <Terminal size={14} /> Operational_Capabilities
                    </h4>
                    <p className="leading-relaxed text-gray-400 font-mono text-sm uppercase">
                      The Platform is intended to support organizations in finding Vulnerabilities in their IT systems and offers five (5) different types of services:
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      {["Bug Bounty", "VDP", "Private Program", "Pentest Management", "Attack Surface Management"].map((service, index) => (
                        <span key={index} className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-500 text-[10px] font-bold rounded-md">
                          {index + 1}. {service}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-500 font-mono text-xs mt-2 italic uppercase">
                      (together, the "Services") to which companies or organizations can subscribe (the "Customer").
                    </p>
                  </div>
                </div>

                {/* User Classification Block */}
                <div className="space-y-4 pt-6 border-t border-white/5">
                  <p className="leading-relaxed text-gray-400 font-mono text-sm uppercase">
                    A User can refer to <span className="text-white font-bold">(i) a Customer User</span> or <span className="text-white font-bold">(ii) a Security Researcher</span>.
                    Certain specific provisions in these GCU will apply either to a Customer User or a Security Researcher and a User should refer to the provisions relevant to them.
                    Any capitalized terms used herein shall have the meaning given to them in <span className="text-green-500 font-bold underline cursor-help">Appendix 1</span>.
                  </p>
                </div>

                {/* Changes & Modification Protocol */}
                <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <ShieldAlert size={40} className="text-red-500" />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <Info size={18} className="text-red-500" />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-bold text-xs uppercase tracking-widest">Modification_Protocol</h4>
                      <p className="leading-relaxed text-gray-400 font-mono text-[11px] uppercase">
                        The Company reserves the right to make any changes at any time to these GCU, the Platform and any of its related Services.
                        Users will be notified upon their next login to their account and asked to accept the new GCU.
                        <span className="text-red-400/80 block mt-2 italic font-bold">
                          CRITICAL: If the User does not agree with the new provisions, the Company shall be entitled to deny the User access to and use of the Platform and its related Services.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Policy Content */}
              <div className="space-y-24">

                {/* 1. Prerequisite */}
                <section id="notice" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                      <Gavel size={20} />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">1. Prerequisite</h2>
                  </div>
                  <div className="space-y-8 pl-6 border-l border-green-500/20 ml-6">
                    <div className="space-y-4">
                      <h4 className="text-green-500 font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <CheckCircle2 size={12} /> 1.1 Acceptance of terms
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Access to and use of the Platform is subject to the prior acceptance of these GCU. The use of
                        the Wallet for the payment of Rewards to Security Researchers, in the context of Bug Bounty
                        Service, is subject to the prior and unconditional acceptance of the Payment Service
                        Provider's (PSP's) Terms and Conditions available at [INSERT PSP TERMS URL] which are
                        hereby incorporated.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-3xl group hover:bg-red-500/10 transition-all">
                        <h4 className="text-red-500 font-black text-xs uppercase mb-3 flex items-center gap-2">
                          <AlertTriangle size={14} /> 1.2 Age requirement
                        </h4>
                        <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                          Access to the Platform is forbidden to minors under 18 years of age as per the laws of
                          Bangladesh. Users must be at least 18 years old to register and use the Platform.
                        </p>
                      </div>
                      <div className="p-6 bg-green-500/5 border border-green-500/10 rounded-3xl">
                        <h4 className="text-green-500 font-black text-xs uppercase mb-3 flex items-center gap-2">
                          <Scale size={14} /> 1.3 Legal Compliance with Bangladesh Laws
                        </h4>
                        <ul className="text-[10px] text-gray-500 font-mono space-y-2 uppercase">
                          <li>• The Information and Communication Technology Act, 2006 (as amended)</li>
                          <li>• The Digital Security Act, 2018</li>
                          <li>• The Bangladesh Telecommunication Regulation Act, 2001</li>
                          <li>• The Bangladesh Computer Security Incident Response Team (BGD e-GOV CIRT)guidelines</li>
                          <li>• Any other relevant laws and regulations of Bangladesh</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                {/* 1.4 */}
                {/* 1.4 Behavior and Proper Use of the Platform */}
                <section id="behavior" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                      <UserCheck size={20} />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">
                      1.4 Behavior and proper use of the Platform
                    </h2>
                  </div>

                  <div className="ml-6 space-y-8 pl-6 border-l border-green-500/20">
                    <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-6">
                      Protocol_Directive: Every User is mandated to adhere to the following conduct standards:
                    </p>

                    {/* Conduct List */}
                    <div className="grid grid-cols-1 gap-4">
                      {[
                        {
                          id: "01",
                          text: "Behave in a professional, respectful, and courteous manner when interacting with the Company and/or each other.",
                          icon: <Users size={16} />
                        },
                        {
                          id: "02",
                          text: "Not make any improper or derivative use of the Platform regarding its purpose as set out in these GCU.",
                          icon: <Terminal size={16} />
                        },
                        {
                          id: "03",
                          text: "Comply with all applicable laws of Bangladesh including but not limited to the Digital Security Act, 2018.",
                          icon: <Scale size={16} />
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-5 bg-white/5 border border-white/5 rounded-2xl group hover:border-green-500/30 transition-all">
                          <div className="text-green-900 group-hover:text-green-500 transition-colors font-mono text-xs pt-1">
                            [{item.id}]
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-300 text-sm leading-relaxed uppercase font-mono text-[13px] tracking-tight">
                              {item.text}
                            </p>
                          </div>
                          <div className="text-green-500 opacity-20 group-hover:opacity-100 transition-opacity">
                            {item.icon}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Enforcement & Sanctions (The serious part) */}
                    <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-[2.5rem] relative overflow-hidden">
                      {/* Background Gavel Watermark */}
                      <div className="absolute top-0 right-0 p-4 opacity-[0.03]">
                        <Gavel size={120} className="text-red-500 -rotate-12" />
                      </div>

                      <div className="flex gap-4 relative z-10">
                        <div className="mt-1">
                          <ShieldAlert size={24} className="text-red-500" />
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-red-500 font-black text-sm uppercase tracking-[0.3em]">
                            Zero_Tolerance_Enforcement
                          </h4>
                          <p className="text-gray-400 font-mono text-[12px] uppercase leading-relaxed max-w-2xl">
                            Any inappropriate or abusive behavior or improper use of the Platform by a User <span className="text-white font-bold italic">will not be tolerated</span> by the Company.
                          </p>

                          <div className="grid md:grid-cols-1 gap-4 pt-2">
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                              <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                <span className="text-red-400 font-bold mr-2">&gt; ACTION:</span>
                                The Company may, at its sole discretion, terminate a User's access and/or use of the Platform temporarily or permanently.
                              </p>
                            </div>
                            <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                              <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                <span className="text-red-400 font-bold mr-2">&gt; AUTHORITY:</span>
                                The Company reserves the right to escalate or de-escalate the severity of enforcement and sanctions in accordance with the nature of the breach and irrespective of previous breaches.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 2. Prohibited Activities */}
                <section id="scope" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-red-500/10 rounded-2xl text-red-500 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                      <ShieldAlert size={20} />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">1.5 Prohibition of Illegal Activities</h2>
                  </div>
                  <div className="p-8 bg-zinc-900/50 rounded-[2.5rem] border border-white/5 space-y-6 ml-6">
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Users must not engage in any activities that violate:</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        "Section 21: (Incitement to commit an offence) of the Digital Security Act, 2018",
                        "Section 25: (Transmission of offensive, false or intimidating information) of the Digital Security Act, 2018",
                        "Section 29: (Publication of defamatory information) of the Digital Security Act, 2018",
                        "Section 31: (Deterioration of law and order) of the Digital Security Act, 2018",
                        "Section 32: (Offense relating to State's security or public safety) of the Digital Security Act, 2018",
                        "Section 35-36: Any provisions of the Information and Communication Technology Act, 2006"
                      ].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-black/50 border border-red-500/10 rounded-xl text-[10px] font-mono text-red-400 uppercase tracking-tighter italic">
                          <XCircleIcon /> {text}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 3. User Status */}
                <section id="collection" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500 border border-blue-500/20">
                      <Users size={20} />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tighter italic">2. User Status</h2>
                  </div>
                  <div className="ml-6 space-y-10 pl-6 border-l border-blue-500/20">
                    {/* 2.1 Independence */}
                    {/* 2.1 Independence of Security Researchers */}
                    <div className="space-y-8">
                      {/* Header & Status Section */}
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <Fingerprint size={16} className="text-green-500" />
                          2.1 Independence of Security Researchers
                        </h4>

                        <div className="p-6 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm relative overflow-hidden group hover:border-green-500/20 transition-all">
                          <p className="text-gray-300 text-sm leading-relaxed font-mono uppercase tracking-tight">
                            The Security Researchers are <span className="text-white font-bold underline decoration-red-500/50">not employees, contractors, or agents</span> of the Company, but independent third parties who wish to participate, on an occasional and non-exclusive basis, in Customers' Programs or penetration tests (in the context of PTM Service).
                          </p>

                          {/* Subordination Disclaimer */}
                          <div className="mt-6 p-4 bg-black/40 rounded-xl border-l-2 border-red-500/30 font-mono italic">
                            <p className="text-[11px] text-gray-500 uppercase leading-relaxed">
                              &gt; PROVISION: Nothing hereunder shall be construed as to create any dependency or subordination, whether direct or indirect, with the Company or a Customer.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Legal Compliance Block (DSA 2018) */}
                      <div className="p-8 bg-zinc-900/50 border border-green-900/20 rounded-[2.5rem] relative">
                        <div className="absolute top-4 right-8">
                          <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[8px] font-mono text-green-500 uppercase font-black">Legal_Enforced</span>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <Scale size={18} className="text-green-500" />
                            <h5 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Bangladesh Digital Security Act, 2018</h5>
                          </div>

                          <p className="text-gray-400 font-mono text-[11px] uppercase leading-relaxed max-w-2xl">
                            Security Researchers acknowledge that they are conducting activities that must strictly comply with the law, particularly regarding:
                          </p>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-5 bg-black/60 rounded-2xl border border-white/5 group hover:border-red-500/30 transition-all">
                              <h6 className="text-red-500 font-black text-[10px] mb-2 uppercase tracking-tighter italic">● Section 35</h6>
                              <p className="text-gray-200 text-xs font-bold uppercase tracking-tight leading-none">Hacking Identity Information</p>
                              <p className="text-[10px] text-gray-500 font-mono mt-2 uppercase">Prohibited: Unauthorized use of personal ID or login credentials.</p>
                            </div>

                            <div className="p-5 bg-black/60 rounded-2xl border border-white/5 group hover:border-red-500/30 transition-all">
                              <h6 className="text-red-500 font-black text-[10px] mb-2 uppercase tracking-tighter italic">● Section 36</h6>
                              <p className="text-gray-200 text-xs font-bold uppercase tracking-tight leading-none">Unauthorized Access</p>
                              <p className="text-[10px] text-gray-500 font-mono mt-2 uppercase">Warning: Illegal trespassing into computer and digital systems is a criminal offense.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 2.2 Authority of Customer Users */}
                    <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <FileSignature size={16} className="text-green-500" />
                          2.2 Authority of Customer Users
                        </h4>

                        <div className="p-8 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all">
                          {/* Background Icon Watermark */}
                          <div className="absolute -bottom-2 -right-2 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                            <ShieldCheck size={120} />
                          </div>

                          <div className="relative z-10 space-y-6">
                            <p className="text-gray-300 text-sm leading-relaxed font-mono uppercase tracking-tight">
                              If access to the Platform is intended for using the Services on behalf of a Customer, the Users <span className="text-white font-bold italic underline decoration-green-500/30">warrant</span> that they have been duly designated to represent the Customer.
                            </p>

                            {/* Legal Liability Indicator */}
                            <div className="flex gap-4 p-5 bg-black/60 rounded-2xl border-l-4 border-green-600 shadow-xl">
                              <div className="mt-1 text-green-500">
                                <Scale size={18} />
                              </div>
                              <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                                <span className="text-white font-black block mb-1">Legal_Presumption:</span>
                                Any action or omission of the Customer User shall be deemed as if such acts and omissions were the <span className="text-green-500 font-bold">Customer's own</span>.
                              </p>
                            </div>

                            {/* Document Verification / Power of Attorney */}
                            <div className="pt-4">
                              <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl flex items-start gap-4">
                                <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                                  <AlertTriangle size={16} />
                                </div>
                                <div className="space-y-2">
                                  <h5 className="text-white font-bold text-[10px] uppercase tracking-widest">Verification_Protocol</h5>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed tracking-tighter">
                                    The Company reserves the right to request, <span className="text-red-400">at any time</span>, additional documents attesting to the <span className="text-white font-bold italic underline decoration-white/20">power of attorney</span> of the person authorized to represent the Customer.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 2.3 Conflict */}
                    {/* 2.3 Conflict of Interest */}
                    <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <ShieldAlert size={16} className="text-blue-500" />
                          2.3 Conflict of Interest
                        </h4>

                        <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-blue-500/20 transition-all">
                          <div className="relative z-10 space-y-6">
                            {/* Intro Directive */}
                            <p className="text-gray-300 text-sm leading-relaxed font-mono uppercase tracking-tight">
                              Security Researchers must <span className="text-white font-bold italic underline decoration-blue-500/30">avoid any situation</span> that could create a conflict of interest with respect to a Customer.
                              Conflicts may arise, without limitation, in the following circumstances or as defined by the Customer in the Program rules:
                            </p>

                            {/* Circumstances Grid */}
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="p-5 bg-black/40 border border-white/5 rounded-2xl group/item hover:border-blue-500/30 transition-all">
                                <div className="flex items-center gap-3 mb-3">
                                  <span className="text-[10px] font-mono text-blue-500">[01]</span>
                                  <h5 className="text-white font-bold text-[11px] uppercase tracking-wider">Dual Registration</h5>
                                </div>
                                <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                  When a Customer User is also registered on the Platform as a Security Researcher.
                                </p>
                              </div>

                              <div className="p-5 bg-black/40 border border-white/5 rounded-2xl group/item hover:border-blue-500/30 transition-all">
                                <div className="flex items-center gap-3 mb-3">
                                  <span className="text-[10px] font-mono text-blue-500">[02]</span>
                                  <h5 className="text-white font-bold text-[11px] uppercase tracking-wider">Internal Relationship</h5>
                                </div>
                                <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                  When the Security Researcher is an employee or contractor of the Customer <span className="text-blue-400 italic">(Except for PTM Service)</span>.
                                </p>
                              </div>
                            </div>

                            {/* Mandatory Protocol Block */}
                            <div className="space-y-4">
                              <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                                <div className="flex items-start gap-4">
                                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                    <Info size={18} />
                                  </div>
                                  <div className="space-y-3">
                                    <h5 className="text-blue-400 font-black text-xs uppercase tracking-[0.2em]">Mandatory_Notification_Protocol</h5>
                                    <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed tracking-tighter">
                                      In such circumstances, the Security Researcher <span className="text-white font-bold underline decoration-white/20">must promptly notify the Customer</span>.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Non-Participation Clause */}
                              <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <div className="flex items-start gap-4">
                                  <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                                    <Lock size={18} />
                                  </div>
                                  <div className="space-y-2">
                                    <h5 className="text-red-500 font-black text-xs uppercase tracking-[0.2em]">Participation_Restriction</h5>
                                    <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                      Unless expressly authorized by the Customer, the Security Researcher undertakes <span className="text-white font-bold italic">not to participate</span> in the Customer's Programs.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Decorative Watermark */}
                          <div className="absolute -bottom-6 -right-6 opacity-[0.02] pointer-events-none">
                            <Scale size={150} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* 3. REGISTRATION PROCESS */}
                <section id="collection" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                      <UserCheck size={24} />
                    </div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                      3. REGISTRATION PROCESS
                    </h2>
                  </div>

                  <div className="ml-6 space-y-12 pl-6 border-l border-green-500/20">

                    {/* 3.1 Account Creation & Information */}
                    <div className="space-y-6">
                      <h4 className="text-white font-bold text-sm uppercase flex items-center gap-2">
                        <Terminal size={16} className="text-green-500" /> 3.1 Creating a User account and accessing the Wallet
                      </h4>
                      <div className="p-8 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] relative overflow-hidden">
                        <p className="text-gray-400 font-mono text-xs uppercase mb-8">Users must provide certain information when filling out the registration form available on the
                          Platform. Users are required to provide:</p>

                        <div className="grid md:grid-cols-2 gap-6">
                          {[
                            { label: "Identity", val: "Valid National ID Card (NID) number or Passport number", icon: <Fingerprint size={16} /> },
                            { label: "Connectivity", val: "Valid mobile number registered in Bangladesh", icon: <Smartphone size={16} /> },
                            { label: "Residence", val: "Proof of address in Bangladesh (if applicable)", icon: <MapPin size={16} /> },
                            { label: "Settlement", val: "Bank account details for Bangladeshi payment processing (for Security Researchers)", icon: <Landmark size={16} /> }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 group hover:border-green-500/30 transition-all">
                              <div className="text-green-500 opacity-40 group-hover:opacity-100">{item.icon}</div>
                              <div>
                                <p className="text-[9px] text-gray-600 uppercase font-mono">{item.label}</p>
                                <p className="text-[11px] text-gray-300 font-bold uppercase">{item.val}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Accountability Note */}
                        <div className="mt-8 p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                          <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                            <span className="text-red-500 font-bold mr-2">Liability_Warning:</span>
                            Additional information will be required to create a Wallet. Users are responsible for updating
                            their personal information and expressly acknowledge that the Company cannot be held liable
                            for any misrepresentation regarding their identity. If any information proves to be false,
                            incomplete, or obsolete, the Company reserves the right to refuse or rescind registration
                            and/or interrupt access to the Platform.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 3.2 & 3.3 Wallet System */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Researcher Wallet */}
                      {/* 3.2 Security Researcher's Wallet */}
                      <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[1.5rem] space-y-6 relative overflow-hidden group hover:border-green-500/20 transition-all">
                        {/* Background Watermark Icon */}
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <CreditCard size={80} />
                        </div>

                        {/* Section Header */}
                        <h4 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                          <Zap size={14} className="text-green-500" /> 3.2 Security Researcher's Wallet
                        </h4>

                        <div className="space-y-5 relative z-10">
                          {/* Main Provision */}
                          <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed tracking-tight">
                            Subject to <span className="text-white font-bold italic underline decoration-white/20 underline-offset-4">providing the required information</span>, Security Researchers will have a Wallet opened in <span className="text-green-500 font-black tracking-widest">BDT (Bangladeshi Taka)</span> currency on the Platform for the settlement of their Rewards.
                          </p>

                          {/* Exchange Rate Protocol Node */}
                          <div className="p-5 bg-black/40 rounded-2xl border border-white/5 border-l-2 border-l-green-600 shadow-xl">
                            <div className="flex items-center gap-2 mb-2">
                              <History size={12} className="text-green-700" />
                              <span className="text-[9px] font-mono text-green-700 uppercase font-black tracking-[0.2em]">Currency_Conversion_v1.0</span>
                            </div>
                            <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                              For each Bug Bounty Program under a different currency, currency conversion will be applied according to the prevailing <span className="text-white font-bold italic border-b border-green-500/30">Bangladesh Bank</span> exchange rate.
                            </p>
                          </div>
                        </div>

                        {/* Bottom Terminal Decoration */}
                        <div className="pt-2">
                          <div className="flex gap-1">
                            {[1, 2, 3].map((dot) => (
                              <div key={dot} className="w-1 h-1 rounded-full bg-green-900"></div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Customer Wallet */}
                      {/* 3.3 Customer's Wallet */}
                      <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[1.5rem] space-y-6 relative overflow-hidden group hover:border-green-500/20 transition-all">
                        {/* Background Watermark Icon */}
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                          <History size={80} />
                        </div>

                        {/* Section Header */}
                        <h4 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                          <ShieldCheck size={14} className="text-green-500" /> 3.3 Customer's Wallet
                        </h4>

                        <div className="space-y-5 relative z-10">
                          {/* Subscription & Balance Info */}
                          <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed tracking-tight">
                            Upon activation of its subscription on the Platform, the Customer is able to consult its <span className="text-white font-bold italic underline decoration-green-500/30 underline-offset-4">balance</span>, and any subsequent payments, through its dedicated account on the Platform.
                          </p>

                          {/* Reward Fulfillment Protocol */}
                          <div className="p-5 bg-black/60 rounded-2xl border border-white/5 border-l-2 border-l-green-600 shadow-xl relative overflow-hidden">
                            {/* Decorative Scanline */}
                            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-20"></div>

                            <div className="flex items-center gap-2 mb-3">
                              <CheckCircle2 size={12} className="text-green-500" />
                              <span className="text-[9px] font-mono text-green-500 font-black uppercase tracking-[0.2em]">Settlement_Protocol_Active</span>
                            </div>

                            <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed relative z-10">
                              To reward a valid <span className="text-white font-bold">Vulnerability Report</span>, the Company shall ensure payments of Rewards to the Security Researchers using the Wallet, <span className="text-green-500 font-bold underline decoration-white/10">after validation</span> by the Customer on its account.
                            </p>
                          </div>
                        </div>

                        {/* Status Indicator */}
                        <div className="pt-2 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                          <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Node_Status: Encrypted_Link</span>
                        </div>
                      </div>
                    </div>

                    {/* 3.4 Management of Wallet */}
                    {/* 3.4 Management of Wallet */}
                    <div className="p-8 bg-white/5 border border-white/5 rounded-[3rem] relative group hover:border-green-500/20 transition-all duration-500 backdrop-blur-sm">
                      {/* Background Decoration */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none font-mono text-[60px] font-black text-green-500 select-none overflow-hidden leading-none">
                        FINANCIAL_CONTROL_COMPLIANCE_PROTOCOL_0x334
                      </div>

                      <div className="flex flex-col md:flex-row justify-between gap-10 items-start relative z-10">
                        <div className="space-y-6 flex-1">
                          {/* Section Header */}
                          <div className="flex items-center gap-3">
                            <Scale size={20} className="text-green-500" />
                            <h4 className="text-white font-black text-sm uppercase tracking-widest italic">
                              3.4 Management of Wallet
                            </h4>
                          </div>

                          {/* Core Provision Text */}
                          <p className="text-gray-300 text-[13px] leading-relaxed font-mono uppercase tracking-tight">
                            Payments for Rewards are <span className="text-green-500 font-bold italic underline decoration-green-500/20">deposited, stored, and paid</span> through the relevant Wallet managed and controlled by the <span className="text-white font-black">PSP</span> in compliance with:
                          </p>

                          {/* Regulatory Compliance List */}
                          <ul className="space-y-3 border-l border-green-900/40 pl-6 ml-2">
                            <li className="flex items-center gap-3 text-[10px] text-green-700 font-mono uppercase tracking-widest font-bold">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                              Bangladesh Bank Regulations
                            </li>
                            <li className="flex items-center gap-3 text-[10px] text-green-700 font-mono uppercase tracking-widest font-bold">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                              Payment and Settlement Systems Regulations, 2014
                            </li>
                          </ul>

                          {/* Transparency / Informed Status Node */}
                          <div className="p-5 bg-black/60 rounded-[2rem] border border-white/5 shadow-2xl">
                            <div className="flex items-start gap-4">
                              <div className="mt-1 text-green-900"><Info size={14} /></div>
                              <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                <span className="text-white font-bold block mb-1">Transparency_Node:</span>
                                The Security Researcher or Customer User is <span className="text-green-500 italic underline decoration-white/10">informed of the balance</span> of the Wallet, through their relevant account on the Platform.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Right Sidebar - Annual Summary Feature */}
                        <div className="w-full md:w-auto space-y-4 self-center">
                          <div className="p-8 bg-green-500/5 border border-green-500/10 rounded-[2.5rem] text-center backdrop-blur-xl relative overflow-hidden group/box">
                            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover/box:opacity-[0.02] transition-opacity"></div>

                            <div className="flex justify-center mb-4">
                              <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 border border-green-500/20">
                                <History size={24} />
                              </div>
                            </div>

                            <p className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-[0.1em] leading-relaxed italic">
                              "Security Researchers will also <br />
                              receive the <span className="text-white underline decoration-green-500/50">summary of amounts</span> <br />
                              paid on an annual basis."
                            </p>

                            <div className="mt-6">
                              <span className="px-3 py-1 bg-black border border-green-900/30 rounded-full text-[8px] font-mono text-green-900 uppercase">
                                System_ID: BC-ANNUAL-REP
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 3.5 Know Your Customer (KYC) Requirements */}
                    <div className="p-10 bg-red-500/5 border border-red-500/20 rounded-[1.5rem] relative overflow-hidden group transition-all duration-700 hover:border-red-500/40">
                      {/* Background Alert Glow */}
                      <div className="absolute -inset-24 bg-red-500/5 blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"></div>

                      <div className="relative z-10 space-y-8">
                        {/* Section Header with Multi-Regulatory Reference */}
                        <div className="flex items-start gap-5">
                          <div className="p-4 bg-red-500/20 rounded-2xl text-red-500 border border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.1)] group-hover:scale-110 transition-transform duration-500">
                            <Scale size={28} />
                          </div>
                          <div className="space-y-2">
                            <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">
                              3.5 Know Your Customer (KYC)
                            </h4>
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                              <p className="text-red-500/80 font-mono text-[9px] uppercase tracking-[0.2em] font-black">
                                Compliance: Money Laundering Prevention Act, 2012
                              </p>
                              <p className="text-red-500/80 font-mono text-[9px] uppercase tracking-[0.2em] font-black border-l border-red-500/20 pl-4">
                                Authority: Bangladesh Bank Regulations
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Requirement Protocol Grid */}
                        <div className="grid md:grid-cols-2 gap-8 pt-4">
                          <div className="space-y-6">
                            <p className="text-gray-300 font-mono text-xs uppercase leading-relaxed tracking-tight border-b border-white/5 pb-4">
                              In compliance with the stated acts and regulations, the following protocols are <span className="text-red-500 font-bold">mandatory</span> for all operators:
                            </p>
                            <ul className="space-y-4">
                              {[
                                "All users must complete KYC verification",
                                "Users must provide valid identification documents"
                              ].map((text, i) => (
                                <li key={i} className="flex items-center gap-4 group/item">
                                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full shadow-[0_0_8px_#dc2626]"></div>
                                  <span className="text-[11px] text-gray-400 font-mono uppercase font-bold group-hover/item:text-white transition-colors tracking-wide">
                                    {text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Company Rights & Enforcement Alert */}
                          <div className="space-y-4">
                            {/* Rights Card */}
                            <div className="p-6 bg-black/60 rounded-3xl border border-white/5 relative overflow-hidden group/rights shadow-2xl">
                              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover/rights:opacity-30 transition-opacity">
                                <ShieldAlert size={30} className="text-red-500" />
                              </div>
                              <h5 className="text-white font-black text-[10px] uppercase flex items-center gap-2 mb-3 tracking-widest">
                                <FileSignature size={12} className="text-red-500" /> Company Authority
                              </h5>
                              <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed italic">
                                "The Company reserves the right to request <span className="text-white font-bold underline decoration-white/20">additional documentation</span> at its discretion to ensure platform integrity and regulatory adherence."
                              </p>
                            </div>

                            {/* Action/Suspension Warning Box */}
                            <div className="p-4 bg-red-600/10 border border-red-600/20 rounded-2xl relative">
                              <div className="flex items-center gap-3">
                                <div className="animate-pulse text-red-500">
                                  <AlertCircle size={16} />
                                </div>
                                <p className="text-[10px] text-red-500 font-mono uppercase leading-relaxed font-black tracking-tighter">
                                  Enforcement: Failure to complete KYC may result in suspension of services.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>

                {/* 4. SERVICES & OPERATIONAL PROTOCOLS */}
                <section id="usage" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                      <Cpu size={24} />
                    </div>
                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                      4. Services & Engagement Rules
                    </h2>
                  </div>

                  <div className="ml-6 space-y-16 pl-6 border-l border-green-500/20">

                    {/* 4.1 Users' Role */}
                    <div className="space-y-8">
                      <h4 className="text-white font-bold text-sm uppercase flex items-center gap-2 tracking-widest">
                        <Users size={16} className="text-green-500" /> 4.1 Users' Role Framework
                      </h4>

                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* 4.1.1 Security Researchers' Participation */}
                        <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[1.5rem] space-y-6 relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
                          {/* Background Decoration */}
                          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <ShieldCheck size={100} />
                          </div>

                          {/* Header */}
                          <div className="relative z-10 border-b border-green-500/10 pb-4">
                            <h5 className="text-green-500 font-black text-sm uppercase tracking-[0.2em] flex items-center gap-2">
                              <Terminal size={16} /> 4.1.1 Security Researchers' Participation
                            </h5>
                          </div>

                          <div className="relative z-10 space-y-6">
                            {/* Paragraph 1: Autonomy */}
                            <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed">
                              When invited to a Program, the Security Researchers are <span className="text-white font-bold italic">free to decide</span> whether they wish to participate and determine at their <span className="text-white font-bold italic">sole discretion</span> the means to be used to conduct Tests, subject to compliance with the rules of the relevant Program.
                            </p>

                            {/* Paragraph 2: Tacit Binding */}
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                              <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed italic">
                                "When performing the Tests, the Security Researchers acknowledge to be <span className="text-green-500 font-bold underline decoration-green-500/30">tacitly bound</span> by the rules of the Program set forth by the Customer without the need to expressly agree to those rules."
                              </p>
                            </div>

                            {/* Critical Legal Warning Block */}
                            <div className="p-6 bg-red-600/10 border border-red-500/30 rounded-3xl space-y-4">
                              <div className="flex items-center gap-3 text-red-500">
                                <AlertTriangle size={20} className="animate-pulse" />
                                <h6 className="font-black text-xs uppercase tracking-widest">IMPORTANT: Legal Compliance Node</h6>
                              </div>

                              <p className="text-[11px] text-gray-300 font-mono uppercase leading-relaxed">
                                Security Researchers must ensure their testing activities comply with the <span className="text-red-400 font-bold">Digital Security Act, 2018</span>:
                              </p>

                              <ul className="grid sm:grid-cols-2 gap-4 pt-2">
                                <li className="p-3 bg-black/40 rounded-xl border border-red-500/10">
                                  <p className="text-red-500 font-bold text-[10px] uppercase mb-1">Section 36</p>
                                  <p className="text-[9px] text-gray-500 font-mono uppercase">Computer and digital system trespassing</p>
                                </li>
                                <li className="p-3 bg-black/40 rounded-xl border border-red-500/10">
                                  <p className="text-red-500 font-bold text-[10px] uppercase mb-1">Section 37</p>
                                  <p className="text-[9px] text-gray-500 font-mono uppercase">Unauthorized copying, transmission of information</p>
                                </li>
                              </ul>
                            </div>

                            {/* Final Contractual Clause */}
                            <div className="pt-4 border-t border-white/5">
                              <div className="flex gap-4 items-start">
                                <div className="mt-1 text-green-900">
                                  <Gavel size={16} />
                                </div>
                                <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed italic">
                                  The Security Researchers accept that the rules of the Program have a <span className="text-white font-bold underline decoration-white/20">contractual value</span> between them and the Customer and may not, therefore, contest the <span className="text-white italic">admissibility, opposability and/or enforceability</span> of these rules.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 4.1.2 Customer Users */}
                        {/* 4.1.2 Customer Users' Program Management */}
                        <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] space-y-6 relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
                          {/* Background Decoration */}
                          <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                            <Database size={100} />
                          </div>

                          {/* Header */}
                          <div className="relative z-10 border-b border-green-500/10 pb-4">
                            <h5 className="text-green-500 font-black text-sm uppercase tracking-[0.2em] flex items-center gap-2">
                              <Users size={16} /> 4.1.2 Customer Users' Program Management
                            </h5>
                          </div>

                          <div className="relative z-10 space-y-6">
                            {/* Authority & Representative Section */}
                            <div className="space-y-4">
                              <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed">
                                Customer Users who have the authority to represent and bind the Customer in the management of the Services (the <span className="text-white font-bold italic underline decoration-green-500/30">"Customer Representative"</span>) designate Customer Users of their choice for the publication and management of the Customer's Program, including the selection of Security Researchers.
                              </p>
                              <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                                <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed italic">
                                  <span className="text-green-500 font-bold mr-2">&gt; ROLE_PROTOCOL:</span>
                                  The Customer Representative will be able to define roles with specific access rights for each User depending on their function and intended involvement.
                                </p>
                              </div>
                            </div>

                            {/* Program Description Parameters Grid */}
                            <div className="space-y-4">
                              <h6 className="text-white font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                                <Terminal size={12} className="text-green-900" /> Mandatory_Program_Parameters
                              </h6>
                              <p className="text-[11px] text-gray-500 font-mono uppercase italic">
                                The Program is described by the Customer User in the dedicated sheet online on the Platform, including:
                              </p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                  "Scope of testing",
                                  "Config: Public/Private Mode (Bug Bounty)",
                                  "Designation of the Systems",
                                  "Type of tests",
                                  "Eligibility criteria",
                                  "Periodicity",
                                  "Exclusions",
                                  "Rewards (for Bug Bounty Programs)"
                                ].map((param, i) => (
                                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 rounded-xl group/item hover:bg-green-500/5 transition-all">
                                    <div className="w-1.5 h-1.5 bg-green-900 group-hover/item:bg-green-500 rounded-full transition-colors"></div>
                                    <span className="text-[10px] text-gray-400 group-hover/item:text-white font-mono uppercase tracking-tighter transition-colors">
                                      {param}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Validation & Rewards Workflow */}
                            <div className="pt-6 border-t border-white/5 space-y-4">
                              <div className="p-5 bg-green-500/5 border border-green-500/10 rounded-[2rem] relative overflow-hidden">
                                <div className="flex gap-4 items-start relative z-10">
                                  <div className="mt-1 text-green-500">
                                    <CheckCircle2 size={16} />
                                  </div>
                                  <div className="space-y-3">
                                    <p className="text-[11px] text-gray-300 font-mono uppercase leading-relaxed">
                                      Once a Program is published and a Vulnerability Report is submitted, the Customer User can <span className="text-white font-bold">validate said report</span> and, where applicable, reward the Security Researcher as described in <span className="text-green-500 underline decoration-white/20">Article 4.3</span>.
                                    </p>
                                    <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed italic border-l border-green-500/30 pl-4">
                                      The Customer User can also attribute points to the Security Researcher according to the criteria defined in the Platform's Help Center.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.2 Tests & Critical Legal Requirement */}
                    <div className="space-y-8">
                      <h4 className="text-white font-bold text-sm uppercase flex items-center gap-2 tracking-widest">
                        <Terminal size={16} className="text-green-500" /> 4.2 Operational Testing Protocols
                      </h4>

                      {/* 4.2.1 Security Researchers' Scope & Critical Legal Requirements */}
                      <div className="space-y-8">
                        <div className="space-y-4">
                          <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            <Target size={16} className="text-green-500" />
                            4.2.1 Security Researchers' Scope
                          </h4>

                          {/* Autonomy & Convenience Block */}
                          <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[1.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all">
                            <div className="relative z-10">
                              <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed">
                                Security Researchers <span className="text-white font-bold italic underline decoration-green-500/30 underline-offset-4">do not need to consult</span> the Customer prior to performing Tests and will act at their convenience to carry these out as long as they are acting within the rules of the Program defined by the Customer.
                              </p>

                              {/* Confidentiality Badge */}
                              <div className="mt-6 flex items-center gap-2">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                <span className="px-4 py-1 bg-zinc-800 text-zinc-500 font-mono text-[9px] uppercase tracking-[0.5em] rounded-md border border-white/5 font-black">
                                  CONFIDENTIAL
                                </span>
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CRITICAL LEGAL REQUIREMENT BLOCK */}
                        <div className="p-10 bg-red-600/10 border-2 border-red-600/30 rounded-[1.5rem] relative overflow-hidden group">
                          {/* Background Gavel Icon Watermark */}
                          <div className="absolute top-0 right-0 p-8 opacity-[0.08] -rotate-12 group-hover:opacity-20 transition-opacity duration-700">
                            <Gavel size={150} className="text-red-500" />
                          </div>

                          <div className="relative z-10 space-y-6">
                            {/* Header Alert */}
                            <div className="flex items-center gap-4">
                              <div className="p-3 bg-red-500 rounded-2xl text-black shadow-[0_0_30px_rgba(239,68,68,0.4)]">
                                <ShieldAlert size={24} />
                              </div>
                              <h5 className="text-red-500 font-black text-lg lg:text-xl uppercase tracking-[0.2em] italic leading-tight">
                                CRITICAL LEGAL REQUIREMENT
                              </h5>
                            </div>

                            {/* Warning Statement */}
                            <div className="space-y-4">
                              <p className="text-gray-200 font-mono text-xs uppercase leading-relaxed max-w-3xl font-black italic">
                                Security Researchers understand and agree that Tests can <span className="text-white underline decoration-red-500 underline-offset-4">ONLY</span> be performed subject to the strict rules of the relevant Customer's Program.
                              </p>
                              <p className="text-gray-400 font-mono text-[11px] uppercase leading-relaxed">
                                Failure to comply with these could trigger their civil and/or criminal liability under Bangladesh law, including but not limited to:
                              </p>
                            </div>

                            {/* Prosecution Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                              {/* Section 36 */}
                              <div className="p-5 bg-black/60 rounded-3xl border border-red-500/20 backdrop-blur-md group/card hover:border-red-500 transition-all">
                                <h6 className="text-red-500 font-black text-[10px] uppercase mb-2 tracking-widest flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> DSA 2018 Sec. 36
                                </h6>
                                <p className="text-white font-bold text-[11px] uppercase leading-tight">Computer and digital system trespassing</p>
                                <p className="text-red-400/70 font-mono text-[9px] mt-3 uppercase font-black italic">Up to 14 Years Imprisonment</p>
                              </div>

                              {/* Section 37 */}
                              <div className="p-5 bg-black/60 rounded-3xl border border-red-500/20 backdrop-blur-md group/card hover:border-red-500 transition-all">
                                <h6 className="text-red-500 font-black text-[10px] uppercase mb-2 tracking-widest flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> DSA 2018 Sec. 37
                                </h6>
                                <p className="text-white font-bold text-[11px] uppercase leading-tight">Unauthorized copying or transmission</p>
                                <p className="text-red-400/70 font-mono text-[9px] mt-3 uppercase font-black italic">Up to 5 Years Imprisonment</p>
                              </div>

                              {/* Other Provisions */}
                              <div className="p-5 bg-black/40 rounded-3xl border border-white/5 flex items-center justify-center text-center">
                                <p className="text-gray-500 font-mono text-[9px] uppercase leading-relaxed tracking-tighter italic">
                                  Prosecution under other relevant provisions of Bangladesh laws
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Bottom Scanline Animation */}
                          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-red-500/50 blur-[2px] animate-pulse"></div>
                        </div>
                      </div>

                      {/* 4.2.2 Researcher Obligations */}
                      {/* 4.2.2 Security Researchers' Obligations */}
                      <div className="p-8 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none font-mono text-[10px] leading-tight select-none">
                          {Array(15).fill("CODE_OF_CONDUCT_OBLIGATION_SECURE_REPORTING_").join(" ")}
                        </div>

                        <div className="relative z-10 space-y-10">
                          <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                            <div className="p-2 bg-green-500/20 rounded-lg text-green-500">
                              <CheckCircle2 size={18} />
                            </div>
                            <div>
                              <h5 className="text-white font-black text-sm uppercase tracking-[0.2em]">
                                4.2.2 Security Researchers' Obligations
                              </h5>
                              <p className="text-gray-500 font-mono text-[10px] uppercase mt-1">Operational Directive: Researchers agree to the following protocols</p>
                            </div>
                          </div>

                          {/* Primary Obligations Grid */}
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* 1. Scope Limitation */}
                            <div className="p-6 bg-white/5 border border-white/5 rounded-3xl group/card hover:border-green-500/30 transition-all">
                              <div className="flex gap-4">
                                <span className="text-green-900 font-mono text-xs font-bold pt-1">01</span>
                                <div className="space-y-2">
                                  <h6 className="text-white font-bold text-[11px] uppercase tracking-wider">Scope Limitation</h6>
                                  <p className="text-gray-500 font-mono text-[10px] uppercase leading-relaxed">
                                    Strictly limit action to the scope defined in the relevant Program.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* 2. No Unauthorized Testing */}
                            <div className="p-6 bg-white/5 border border-white/5 rounded-3xl group/card hover:border-green-500/30 transition-all">
                              <div className="flex gap-4">
                                <span className="text-green-900 font-mono text-xs font-bold pt-1">02</span>
                                <div className="space-y-2">
                                  <h6 className="text-white font-bold text-[11px] uppercase tracking-wider">No Unauthorized Testing</h6>
                                  <p className="text-gray-500 font-mono text-[10px] uppercase leading-relaxed">
                                    Not repeat any Test whatsoever outside the scope strictly defined by a Program, or once a Program is closed.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* 3. Data Privacy Compliance */}
                            <div className="p-6 bg-white/5 border border-white/5 rounded-3xl group/card hover:border-green-500/30 transition-all">
                              <div className="flex gap-4">
                                <span className="text-green-900 font-mono text-xs font-bold pt-1">03</span>
                                <div className="space-y-2">
                                  <h6 className="text-white font-bold text-[11px] uppercase tracking-wider">Data Privacy Compliance</h6>
                                  <p className="text-gray-500 font-mono text-[10px] uppercase leading-relaxed italic">
                                    Comply with any data privacy policy set out in a Program and the applicable provisions of the <span className="text-green-500">Information and Communication Technology Act, 2006</span>.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* 5. Program Eligibility */}
                            <div className="p-6 bg-white/5 border border-white/5 rounded-3xl group/card hover:border-green-500/30 transition-all">
                              <div className="flex gap-4">
                                <span className="text-green-900 font-mono text-xs font-bold pt-1">05</span>
                                <div className="space-y-2">
                                  <h6 className="text-white font-bold text-[11px] uppercase tracking-wider">Program Eligibility</h6>
                                  <p className="text-gray-500 font-mono text-[10px] uppercase leading-relaxed">
                                    Not participate in any private Bug Bounty Program to which
                                    they have not been invited by a Customer or in a Featured VDP Program if they do
                                    not meet the conditions set out in the Program
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 4. Confidentiality (Full Width with Sub-points) */}
                          <div className="p-8 bg-zinc-900 border border-green-900/20 rounded-[1.5rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5"><Lock size={60} /></div>
                            <div className="flex gap-6 relative z-10">
                              <span className="text-green-500 font-mono text-xs font-black">04</span>
                              <div className="space-y-6">
                                <h6 className="text-white font-black text-xs uppercase tracking-[0.2em] border-b border-white/5 pb-2">Strict Confidentiality Protocol</h6>
                                <p className="text-gray-400 font-mono text-[11px] uppercase leading-relaxed">
                                  Keep strictly confidential the Customer's information including Vulnerabilities and Personal Data (together the <span className="text-white font-bold">"Data"</span>). Security Researchers shall:
                                </p>
                                <div className="grid sm:grid-cols-1 gap-3">
                                  {[
                                    "Use Data only for purposes strictly necessary for proper performance of Tests.",
                                    "Not communicate Data to any third-party by any means whatsoever (oral, paper, digital).",
                                    "Report any obvious anomaly to the Company (Platform failures) and the Customer (Test anomalies).",
                                    "Not use Data for development, production or marketing that infringes Customer's rights or competes with it.",
                                    "Warrant to respect Customer's Intellectual Property Rights and operating licenses at all times."
                                  ].map((sub, si) => (
                                    <div key={si} className="flex items-start gap-3 p-3 bg-black/40 rounded-xl border border-white/5">
                                      <div className="w-1 h-1 bg-green-500 rounded-full mt-1.5 shadow-[0_0_5px_#22c55e]"></div>
                                      <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed">{sub}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* 6. No Malicious Activities (Full Width / Alert Style) */}
                          <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-[1.5rem] relative">
                            <div className="flex gap-6">
                              <span className="text-red-500 font-mono text-xs font-black">06</span>
                              <div className="space-y-4">
                                <h6 className="text-red-500 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                  <ShieldAlert size={16} /> No Malicious Activities
                                </h6>
                                <p className="text-gray-400 font-mono text-[11px] uppercase leading-relaxed">
                                  Not engage in any activities that could be construed as violations under <span className="text-red-400 underline underline-offset-4 decoration-red-500/30 font-bold">Bangladesh Laws</span>:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3">
                                  {[
                                    "Creating or distributing malware (Violation of DSA 2018)",
                                    "Unauthorized data extraction or exfiltration",
                                    "Denial of service (DoS) attacks outside approved scope",
                                    "Any activities prohibited under the Digital Security Act, 2018"
                                  ].map((mal, mi) => (
                                    <div key={mi} className="flex items-center gap-3 p-3 bg-black/60 rounded-xl border border-red-500/10 italic">
                                      <X size={12} className="text-red-500" />
                                      <p className="text-[9px] text-red-400 font-mono uppercase">{mal}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 4.2.3 Safe Harbor */}
                      {/* 4.2.3 Legal Protection for Authorized Testing */}
                      <div className="space-y-12">
                        <div className="space-y-6">
                          <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            <ShieldCheck size={16} className="text-green-500" />
                            4.2.3 Legal Protection for Authorized Testing
                          </h4>

                          {/* Intermediary Disclaimer */}
                          <div className="p-6 bg-white/5 border border-white/5 rounded-3xl backdrop-blur-sm relative overflow-hidden group">
                            <div className="relative z-10 space-y-4">
                              <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed">
                                Security Researchers acknowledge and agree that the Company acts as an <span className="text-white font-bold italic">intermediary</span> and does not intervene in any way in the relationship with the Customer.
                              </p>
                              <div className="p-4 bg-black/40 rounded-xl border-l-2 border-green-500/30">
                                <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed italic">
                                  "In case Security Researchers have contact with Customers, they remain <span className="text-red-400 font-bold">solely responsible</span> for the content of their exchanges with the Customer."
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Safe Harbor Provision Node */}
                          <div className="p-10 bg-green-500/5 border border-green-500/20 rounded-[3.5rem] relative overflow-hidden group">
                            <div className="absolute -inset-24 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-[100px] pointer-events-none"></div>

                            <div className="relative z-10 space-y-6">
                              <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-500/20 rounded-2xl text-green-500 border border-green-500/30">
                                  <Zap size={20} className="animate-pulse" />
                                </div>
                                <h5 className="text-green-500 font-black text-sm uppercase tracking-[0.3em]">Safe Harbor Provision</h5>
                              </div>

                              <div className="space-y-4">
                                <p className="text-gray-300 font-mono text-[11px] uppercase leading-relaxed">
                                  When Security Researchers conduct Tests <span className="text-white font-bold underline decoration-green-500/30 underline-offset-4">strictly within the scope</span> of an authorized Program:
                                </p>

                                <ul className="grid md:grid-cols-1 gap-3 ml-4">
                                  {[
                                    "The Customer acknowledges that such testing is conducted with express consent",
                                    "The Customer agrees not to pursue criminal or civil action against Security Researchers for activities conducted in good faith within the Program scope",
                                    "This safe harbor does not extend to activities outside the Program scope or conducted in bad faith"
                                  ].map((text, i) => (
                                    <li key={i} className="flex items-start gap-3 group/item">
                                      <div className="text-green-900 font-mono text-[10px] mt-0.5">&gt;</div>
                                      <span className="text-[10px] text-gray-400 font-mono uppercase font-bold group-hover/item:text-white transition-colors">
                                        {text}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 4.2.4 Security Researchers Collaborative Work */}
                        <div className="space-y-6">
                          <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            <Users size={16} className="text-blue-500" />
                            4.2.4 Security Researchers Collaborative Work
                          </h4>

                          <div className="p-8 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-blue-500/20 transition-all">
                            <div className="relative z-10 space-y-6">
                              <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed">
                                When allowed by the Customer Representative in the Program, the Security Researcher can <span className="text-blue-400 font-bold underline decoration-blue-500/30">collaborate</span> with several Security Researchers to submit a report together and share the Reward.
                              </p>

                              <div className="grid md:grid-cols-2 gap-4">
                                <div className="p-5 bg-black/60 rounded-2xl border border-white/5">
                                  <h6 className="text-white font-bold text-[10px] uppercase mb-2 flex items-center gap-2">
                                    <CheckCircle2 size={12} className="text-blue-500" /> Participation Rule
                                  </h6>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed italic">
                                    Collaboration shall be effective only for Security Researchers using the Platform and accepting these GCU.
                                  </p>
                                </div>
                                <div className="p-5 bg-black/60 rounded-2xl border border-white/5">
                                  <h6 className="text-white font-bold text-[10px] uppercase mb-2 flex items-center gap-2">
                                    <ShieldAlert size={12} className="text-blue-500" /> Compliance Duty
                                  </h6>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed italic">
                                    It is the Security Researcher's responsibility to ensure that any such collaboration is compliant with this section.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* 4.2.5 Customer User's Involvement */}
                        <div className="space-y-6">
                          <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            <Database size={16} className="text-green-500" />
                            4.2.5 Customer User's Involvement
                          </h4>

                          <div className="p-8 bg-zinc-900 border border-white/5 rounded-[3rem] relative overflow-hidden">
                            <div className="relative z-10 space-y-8">
                              {/* Backup Responsibility */}
                              <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                  <p className="text-white font-bold text-xs uppercase tracking-widest">Backup & Data Integrity</p>
                                </div>
                                <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed pl-4 border-l border-green-900/40">
                                  The Customer User shall carry out and maintain the <span className="text-white">backup of its data, files, supports</span> against destruction, loss, or alteration.
                                </p>
                              </div>

                              {/* Non-Consultation Clause */}
                              <div className="p-6 bg-black/40 rounded-2xl border border-white/5 border-l-2 border-l-red-500">
                                <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed italic">
                                  "The Customer User expressly acknowledges that it <span className="text-red-400 font-bold underline decoration-red-500/20">will not be consulted</span> prior to the completion of the Tests during the period defined in the Program. Security Researchers will test the System without consulting the Customer User."
                                </p>
                              </div>

                              {/* Prep Tips & Help Center */}
                              <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5">
                                <div className="space-y-2">
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed max-w-lg">
                                    The Customer User acknowledges having been informed by the Company of the importance of preparing the Tests.
                                  </p>
                                </div>
                                <div className="px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-xl">
                                  <span className="text-[9px] font-mono text-green-500 font-black uppercase tracking-[0.2em]">Platform Help Center Tips Available</span>
                                </div>
                              </div>
                            </div>

                            {/* Background Watermark */}
                            <div className="absolute -bottom-4 -right-4 opacity-[0.02] pointer-events-none">
                              <Info size={180} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.3 & 4.4 Collaboration & Ownership */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* 4.3 Collaboration */}
                      {/* 4.3 Security Researchers and Customer Users' Collaboration */}
                      <div className="space-y-8 pt-10 border-t border-white/5 mt-10">
                        <div className="space-y-6">
                          <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            <Handshake size={16} className="text-green-500" />
                            4.3 Operational Collaboration Framework
                          </h4>

                          <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all">
                            <div className="relative z-10 space-y-8">

                              {/* Good Faith Communication Protocol */}
                              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                                <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed italic">
                                  "Customer Users shall make a <span className="text-white font-bold">good faith effort</span> to remain in a prompt and transparent communication with the Security Researchers and the Security Researchers will make a good faith effort to clarify and substantiate the Vulnerability Reports submitted upon Customer Users' request."
                                </p>
                              </div>

                              {/* Validation & Reward Algorithm */}
                              <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                  <h5 className="text-green-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                                    <Search size={12} /> Validation_Control
                                  </h5>
                                  <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                                    The Customer User will determine whether Vulnerabilities are <span className="text-white">valid</span> and their <span className="text-white">severity level</span>.
                                  </p>
                                </div>
                                <div className="space-y-4">
                                  <h5 className="text-green-500 font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                                    <Trophy size={12} /> Reward_Priority
                                  </h5>
                                  <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                                    Researchers who were <span className="text-green-500 font-bold italic">first to uncover</span> a valid Vulnerability with a clear report will be rewarded in accordance with the relevant Bug Bounty Program.
                                  </p>
                                </div>
                              </div>

                              {/* Liability & Confidentiality Node */}
                              <div className="space-y-4 relative">
                                {/* Confidential Watermark */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
                                  <span className="text-[80px] font-black font-mono tracking-[0.5em] text-white">CONFIDENTIAL</span>
                                </div>

                                <div className="p-5 bg-red-500/5 border border-red-500/20 rounded-2xl relative z-10">
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed">
                                    <span className="text-red-500 font-bold mr-2">System_Notice:</span>
                                    The Company will <span className="text-white">not be liable</span> for any unpaid Rewards to Security Researchers.
                                  </p>
                                </div>

                                {/* Ranking Points Protocol */}
                                <div className="p-5 bg-blue-500/5 border border-blue-500/20 rounded-2xl relative z-10">
                                  <div className="flex items-start gap-3">
                                    <Zap size={14} className="text-blue-500 mt-1" />
                                    <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                                      Researchers gain points in the ranking <span className="text-white font-bold underline decoration-blue-500/30">only for Bug Bounty Programs</span>.
                                      <span className="text-blue-400 italic"> (Note: No ranking points are awarded for participating in a Featured VDP Program).</span>
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* LEGAL ACKNOWLEDGEMENT BLOCK (The Shield) */}
                              <div className="p-8 bg-green-900/10 border border-green-500/20 rounded-[3rem] relative overflow-hidden group/legal">
                                <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover/legal:opacity-100 transition-opacity blur-2xl"></div>

                                <div className="relative z-10 space-y-6">
                                  <h5 className="text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-3">
                                    <ShieldCheck size={18} className="text-green-500" /> Legal_Safe_Harbor_Acknowledgement
                                  </h5>
                                  <p className="text-[11px] text-gray-400 font-mono uppercase">
                                    Subject to Researcher compliance with Program rules and GCUs, the Customer User acknowledges:
                                  </p>

                                  <div className="grid md:grid-cols-1 gap-4 ml-2">
                                    <div className="flex gap-4 p-4 bg-black/60 rounded-2xl border border-white/5">
                                      <div className="text-green-500 font-mono text-[10px] pt-1">01</div>
                                      <p className="text-[11px] text-gray-300 font-mono uppercase leading-relaxed">
                                        Tests conducted by Researchers are <span className="text-white font-bold italic">authorized and operated</span> with the Customer's express consent and under its sole responsibility.
                                      </p>
                                    </div>
                                    <div className="flex gap-4 p-4 bg-black/60 rounded-2xl border border-white/5 border-l-2 border-l-green-600">
                                      <div className="text-green-500 font-mono text-[10px] pt-1">02</div>
                                      <p className="text-[11px] text-gray-300 font-mono uppercase leading-relaxed">
                                        Acts performed within authorized scope <span className="text-green-500 font-black">may not be prosecuted</span> under criminal or civil law of Bangladesh, including the <span className="text-white underline decoration-green-500/30">Digital Security Act, 2018</span>.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 4.4 Ownership */}
                      {/* 4.4 Vulnerability Reports' Ownership */}
                      <div className="space-y-8 pt-10 border-t border-white/5 mt-10">
                        <div className="space-y-6">
                          <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            <FileSignature size={16} className="text-green-500" />
                            4.4 Vulnerability Reports' Ownership Protocol
                          </h4>

                          <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[3rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500">
                            {/* Background Watermark */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
                              <span className="text-[100px] font-black font-mono tracking-tighter text-white">INTEL_PROPERTY</span>
                            </div>

                            <div className="relative z-10 space-y-8">
                              {/* Core Transfer Clause */}
                              <div className="p-6 bg-green-500/5 border border-green-500/20 rounded-3xl relative">
                                <div className="absolute top-0 right-0 p-4">
                                  <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
                                    <div className="w-1.5 h-1.5 bg-green-900 rounded-full"></div>
                                  </div>
                                </div>
                                <p className="text-[13px] text-gray-300 font-mono uppercase leading-relaxed italic">
                                  "Upon submitting Vulnerability Reports to the Customer and receiving payment of the Reward, the Security Researcher <span className="text-white font-bold underline decoration-green-500/50">agrees to transfer full and exclusive ownership</span> of the material property rights in the Vulnerability Reports to the relevant Customer."
                                </p>
                              </div>

                              {/* Scope of Asset Transfer */}
                              <div className="space-y-4">
                                <h5 className="text-green-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                  <Database size={12} /> Asset_Transfer_Scope
                                </h5>
                                <div className="p-5 bg-black/40 rounded-2xl border border-white/5">
                                  <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                                    This transfer includes all <span className="text-white">tangible elements and supporting materials</span> within the Vulnerability Reports necessary for Customer's use, reference and application across all forms, presentations, and processes, both <span className="text-white italic underline decoration-white/20">current and future</span>.
                                  </p>
                                </div>
                              </div>

                              {/* Multi-Researcher Collaboration Logic */}
                              <div className="p-5 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex items-start gap-4">
                                <div className="mt-1 text-blue-500"><Users size={16} /></div>
                                <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                  <span className="text-blue-400 font-black">Collaboration_Clause:</span> If a Vulnerability Report is written by more than one Security Researcher, such a transfer applies <span className="text-white">proportionally to the share</span> of each Security Researcher's contribution.
                                </p>
                              </div>

                              {/* Warranty & Liability Protocol */}
                              <div className="space-y-4">
                                <h5 className="text-red-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                  <ShieldAlert size={12} /> Warranty_&_Liability_Framework
                                </h5>

                                <div className="grid md:grid-cols-2 gap-4">
                                  <div className="p-5 bg-black/60 rounded-2xl border border-white/5 group/node hover:border-green-500/30 transition-all">
                                    <h6 className="text-green-500 font-bold text-[9px] uppercase mb-2 tracking-widest">Researcher_Warranty</h6>
                                    <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed italic">
                                      The Security Researcher warrants to be the <span className="text-white">sole and exclusive editor</span> of whole or part of the Vulnerability Report.
                                    </p>
                                  </div>

                                  <div className="p-5 bg-black/60 rounded-2xl border border-red-500/20 group/node hover:border-red-500/40 transition-all">
                                    <h6 className="text-red-500 font-bold text-[9px] uppercase mb-2 tracking-widest">Breach_Consequences</h6>
                                    <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed italic">
                                      Held liable by the Customer for any breach, including <span className="text-red-400">third-party claims</span> arising from unauthorized use or misrepresentation.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              {/* Final Legal Footer Note */}
                              <div className="pt-4 border-t border-white/5">
                                <p className="text-[9px] text-gray-600 font-mono uppercase leading-relaxed tracking-tighter text-center">
                                  ENFORCED UNDER Bangladesh Intellectual Property Laws and the General Conditions of Use (GCU)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.5 Security & Authentication */}
                    {/* 4.5 Security & Platform Integrity */}
                    <div className="space-y-8 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-6">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <Lock size={16} className="text-green-500" />
                          4.5 Security Protocols
                        </h4>

                        <div className="space-y-6 ml-6 border-l border-green-500/20 pl-8">
                          {/* 4.5.1 Platform's Program */}
                          <div className="space-y-6">
                            <div className="flex items-center gap-3">
                              <Cpu size={14} className="text-green-900" />
                              <h5 className="text-white font-bold text-xs uppercase tracking-widest">4.5.1 Platform's Program</h5>
                            </div>

                            <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed">
                              The Platform is subject to its own Program as displayed on the Platform.
                              <span className="text-white font-black italic underline decoration-green-500/30 ml-1">
                                Users shall inform the Company without delay
                              </span>, by any means, of any error, fault, or irregularity that they find when using the Platform as soon as they become aware of it.
                            </p>

                            {/* Anti-Manipulation Directive */}
                            <div className="p-6 bg-zinc-900 border border-white/5 rounded-3xl relative overflow-hidden group">
                              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <ShieldAlert size={60} />
                              </div>
                              <h6 className="text-green-500 font-black text-[10px] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                <Terminal size={12} /> Anti_Tampering_Directive
                              </h6>
                              <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed relative z-10">
                                Users shall not attempt to <span className="text-white">alter the headers</span> or attempt to <span className="text-white">manipulate the pages</span> of the Platform in such a way as to disguise, hijack, or modify the Platform.
                              </p>
                            </div>

                            {/* Strict Prohibitions Grid */}
                            <div className="space-y-4">
                              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Prohibited_Actions_Enforcement:</p>
                              <div className="grid md:grid-cols-3 gap-4">
                                {[
                                  {
                                    icon: <FileWarning size={14} />,
                                    title: "Derived Works",
                                    desc: "Create a work or site derived from all or part of this Platform."
                                  },
                                  {
                                    icon: <Share2 size={14} />,
                                    title: "Data Reselling",
                                    desc: "Resell or redistribute the Company's data without authorization."
                                  },
                                  {
                                    icon: <Gavel size={14} />,
                                    title: "DSA Compliance",
                                    desc: "Engage in any activity that violates the Digital Security Act, 2018."
                                  }
                                ].map((item, i) => (
                                  <div key={i} className="p-5 bg-black/60 border border-red-500/10 rounded-2xl group/box hover:border-red-500/30 transition-all">
                                    <div className="text-red-500 mb-3 group-hover/box:scale-110 transition-transform">
                                      {item.icon}
                                    </div>
                                    <h6 className="text-white font-bold text-[10px] uppercase mb-2 tracking-tighter">{item.title}</h6>
                                    <p className="text-gray-500 text-[9px] font-mono uppercase leading-relaxed italic">{item.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.5.2 Means of Authentication */}
                    <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <Key size={16} className="text-green-500" />
                          4.5.2 Means of Authentication
                        </h4>

                        <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500">
                          <div className="relative z-10 space-y-8">

                            {/* Secrecy Protocol Card */}
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Lock size={40} className="text-green-500" />
                              </div>
                              <p className="text-[13px] text-gray-300 font-mono uppercase leading-relaxed italic">
                                "The login/password combination allowing Users to access their account is <span className="text-white font-bold underline decoration-green-500/50 underline-offset-4">strictly personal and confidential</span>. Accordingly, they shall be kept secret, and not be communicated to third parties in any form whatsoever."
                              </p>
                            </div>

                            {/* Responsibility & Presumption Node */}
                            <div className="space-y-4">
                              <h5 className="text-green-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                <UserCheck size={14} /> Liability_Presumption_Protocol
                              </h5>
                              <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                                <p className="text-[12px] text-gray-400 font-mono uppercase leading-relaxed">
                                  Users acknowledge that any use of the Platform is made under their <span className="text-white font-black">full and complete responsibility</span>.
                                </p>
                                <div className="p-4 bg-green-500/5 border-l-2 border-green-600 rounded-r-xl">
                                  <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed tracking-tighter">
                                    <span className="text-green-500 font-bold mr-2">&gt; LEGAL_STATUS:</span>
                                    Actions carried out on an account are <span className="text-white">presumed to be made by the User</span> and will be charged to them, it being up to the User to provide proof to the contrary.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Suspension Authority Alert */}
                            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-3xl flex items-start gap-4">
                              <div className="mt-1 text-red-500">
                                <ShieldAlert size={18} />
                              </div>
                              <div className="space-y-2">
                                <h5 className="text-red-500 font-black text-[10px] uppercase tracking-widest">Access_Interruption_Protocol</h5>
                                <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                  The Company reserves the right to <span className="text-red-400 font-bold">suspend access</span> to an account in case of proven compromise or in case of <span className="text-white italic">suspicion of compromise</span> of their means of authentication.
                                </p>
                              </div>
                            </div>

                          </div>

                          {/* Background Watermark */}
                          <div className="absolute -bottom-4 -right-4 opacity-[0.02] pointer-events-none">
                            <Fingerprint size={150} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.5.3 Technical Means to Access the Platform */}
                    <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <Globe size={16} className="text-green-500" />
                          4.5.3 Technical Access & Connectivity
                        </h4>

                        <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500">
                          <div className="relative z-10 space-y-8">

                            {/* User Responsibility Card */}
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Cpu size={40} className="text-green-500" />
                              </div>
                              <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed mb-4">
                                It is the <span className="text-white font-black underline decoration-green-500/50 underline-offset-4">responsibility of Users</span> to equip themselves in an appropriate manner, notably in terms of computer and electronic communications, to access the Platform.
                              </p>
                              <div className="flex items-center gap-3 p-3 bg-green-500/5 border border-green-500/20 rounded-xl">
                                <ShieldCheck size={14} className="text-green-500" />
                                <p className="text-[10px] text-green-400 font-mono uppercase tracking-tighter italic">
                                  Mandatory: Users must take all appropriate measures to protect themselves, the Company, and the tested Systems.
                                </p>
                              </div>
                            </div>

                            {/* Internet Awareness Node */}
                            <div className="space-y-4">
                              <h5 className="text-green-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                <Activity size={14} /> Network_Performance_Awareness
                              </h5>
                              <div className="p-6 bg-black/40 rounded-3xl border border-white/5">
                                <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed mb-4 italic">
                                  "The User acknowledges that it knows and understands the Internet and its limitations, including but not limited to:"
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {[
                                    "Functional characteristics & performance",
                                    "Risks of interruption",
                                    "Response times for querying",
                                    "Inherent risks in data transfer"
                                  ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-[10px] text-gray-500 font-mono uppercase">
                                      <div className="w-1 h-1 bg-green-900 rounded-full"></div>
                                      {item}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Liability Waivers */}
                            <div className="grid md:grid-cols-2 gap-4">
                              {/* Hardware Depreciation */}
                              <div className="p-5 bg-white/5 border border-white/5 rounded-2xl">
                                <h6 className="text-white font-bold text-[10px] uppercase mb-2 flex items-center gap-2">
                                  <Monitor size={12} className="text-gray-500" /> Hardware_Liability
                                </h6>
                                <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed tracking-tighter">
                                  The Company is <span className="text-white font-bold">not responsible</span> for any depreciation or damage of a User's computer media/hardware.
                                </p>
                              </div>

                              {/* External Network Liability */}
                              <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl">
                                <h6 className="text-red-500 font-bold text-[10px] uppercase mb-2 flex items-center gap-2">
                                  <ShieldAlert size={12} /> Network_Boundary
                                </h6>
                                <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed tracking-tighter">
                                  The Company is <span className="text-red-400">not liable</span> for the unavailability of networks that are not entirely under its direct control.
                                </p>
                              </div>
                            </div>

                          </div>

                          {/* Decorative Watermark */}
                          <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none">
                            <Radio size={200} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.5.4 Security Researchers' Responsibility */}
                    <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <ShieldAlert size={16} className="text-red-500" />
                          4.5.4 Security Researchers' Responsibility
                        </h4>

                        <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-red-500/20 transition-all duration-500">
                          {/* Background Icon Watermark */}
                          <div className="absolute -bottom-4 -right-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                            <Siren size={150} className="text-red-500" />
                          </div>

                          <div className="relative z-10 space-y-8">

                            {/* Anti-Sabotage Directive */}
                            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-3xl relative overflow-hidden">
                              <div className="absolute top-0 right-0 p-4 opacity-10">
                                <Zap size={40} className="text-red-500" />
                              </div>
                              <p className="text-[13px] text-gray-300 font-mono uppercase leading-relaxed italic">
                                "Security Researchers shall <span className="text-red-500 font-black">not hinder</span> the proper functioning of the Platform in any way whatsoever, notably by transmitting any element likely to contain a <span className="text-white font-bold underline decoration-red-500/50">virus or malicious program</span>."
                              </p>
                            </div>

                            {/* Impact Scope Node */}
                            <div className="space-y-4">
                              <h5 className="text-green-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                <Terminal size={14} /> Protection_Perimeter_Active
                              </h5>
                              <div className="p-6 bg-black/40 rounded-3xl border border-white/5">
                                <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed mb-4">
                                  The prohibition on damage or interference extends broadly across the entire infrastructure ecosystem:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                  {[
                                    { label: "Platform", icon: <Cpu size={12} /> },
                                    { label: "Customers", icon: <Users size={12} /> },
                                    { label: "Partners", icon: <Globe size={12} /> }
                                  ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/5 group/item hover:border-green-500/30 transition-all">
                                      <div className="text-green-900 group-hover/item:text-green-500 transition-colors">{item.icon}</div>
                                      <span className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">{item.label}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Financial & Access Responsibility */}
                            <div className="p-6 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6">
                              <div className="flex items-start gap-4">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500 mt-1">
                                  <ShieldCheck size={18} />
                                </div>
                                <div className="space-y-1">
                                  <h6 className="text-white font-bold text-[10px] uppercase tracking-widest">Autonomous_Access_Protocol</h6>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed max-w-lg">
                                    All costs and authorizations required to connect, access, and use the Platform are and remain the <span className="text-white italic">Security Researcher's sole responsibility</span>.
                                  </p>
                                </div>
                              </div>
                              <div className="px-4 py-2 bg-black border border-green-900/30 rounded-full">
                                <span className="text-[8px] font-mono text-green-900 uppercase font-black tracking-widest">Self_Funded_Operations</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.6 Availability of Platform */}
                    <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <Activity size={16} className="text-green-500" />
                          4.6 Availability of Platform
                        </h4>

                        <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500">
                          <div className="relative z-10 space-y-8">

                            {/* 4.6.1 Platform Maintenance Header */}
                            <div className="flex items-center gap-3">
                              <RefreshCw size={14} className="text-green-900" />
                              <h5 className="text-white font-bold text-xs uppercase tracking-widest">4.6.1 Platform Maintenance</h5>
                            </div>

                            {/* Core Provision Card */}
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
                              {/* Background Force Majeure Tag */}
                              <div className="absolute top-0 right-0 p-4">
                                <span className="px-3 py-1 bg-zinc-800 text-[8px] font-mono text-zinc-500 uppercase tracking-widest rounded-md border border-white/5">
                                  Exemption: Force Majeure
                                </span>
                              </div>

                              <p className="text-[13px] text-gray-300 font-mono uppercase leading-relaxed italic">
                                "Except in the case of Force Majeure, the Company shall, as part of a <span className="text-green-500 font-bold underline decoration-green-500/30 underline-offset-4">duty of best endeavors</span>, ensure the availability and accessibility of the Platform."
                              </p>
                            </div>

                            {/* Maintenance Protocol Node */}
                            <div className="space-y-4">
                              <h5 className="text-green-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                <Toolbox size={14} /> Maintenance_Execution_Protocol
                              </h5>
                              <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                                <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                                  Control and maintenance operations can be carried out <span className="text-white font-black italic underline decoration-white/20">at any time</span> at the Company's discretion.
                                </p>

                                {/* Liability Waiver Block */}
                                <div className="p-4 bg-red-500/5 border border-red-500/10 rounded-2xl flex items-start gap-4">
                                  <div className="mt-1 text-red-500">
                                    <ShieldAlert size={16} />
                                  </div>
                                  <div className="space-y-1">
                                    <h6 className="text-red-500 font-bold text-[9px] uppercase tracking-widest">Liability_Exclusion_Node</h6>
                                    <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed tracking-tighter">
                                      The Company <span className="text-white">cannot be held liable</span> for any resulting consequences or losses for the User during system maintenance or downtime.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Uptime Visualizer Indicator */}
                            <div className="pt-4 flex items-center justify-between border-t border-white/5">
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-1 h-3 bg-green-900 rounded-full"></div>
                                  ))}
                                  <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                </div>
                                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Target_Accessibility: 24/7/365</span>
                              </div>
                              <div className="text-[8px] font-mono text-green-900 uppercase">Status: System_Optimal</div>
                            </div>

                          </div>

                          {/* Decorative Watermark */}
                          <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none">
                            <Clock size={200} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 4.7 Suspension / Termination */}
                    {/* 4.7 Suspension / Termination */}
                    <div className="space-y-8 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <ShieldAlert size={16} className="text-red-500" />
                          4.7 Suspension & Termination Protocol
                        </h4>

                        <div className="p-10 bg-black border border-red-500/20 rounded-[3.5rem] relative overflow-hidden group">
                          {/* Background Warning Glow */}
                          <div className="absolute -inset-24 bg-red-500/5 blur-[120px] opacity-50 pointer-events-none"></div>

                          <div className="relative z-10 space-y-10">

                            {/* Grounds for Suspension - The 5 Core Reasons */}
                            <div className="space-y-6">
                              <div className="flex flex-col md:flex-row justify-between gap-6 items-center border-b border-white/5 pb-6">
                                <div className="space-y-2 text-center md:text-left">
                                  <h5 className="text-red-500 font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center md:justify-start gap-3">
                                    <Siren size={20} className="animate-pulse" /> Suspension Authority
                                  </h5>
                                  <p className="text-gray-400 text-[11px] leading-relaxed max-w-xl font-mono uppercase italic">
                                    The Company reserves the right to <span className="text-white font-bold underline decoration-red-500/30">temporarily suspend</span> all or part of the Platform and Users' account for the following reasons:
                                  </p>
                                </div>
                                <div className="p-4 bg-red-500/10 rounded-2xl border border-red-500/20 text-center">
                                  <span className="text-[9px] font-mono text-red-500 font-black uppercase tracking-[0.2em]">Protocol: Immediate</span>
                                </div>
                              </div>

                              {/* Grounds Grid */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {[
                                  "Security of the Platform and/or Services",
                                  "Users' security",
                                  "Breach or suspected breach of obligations",
                                  "Violation of Digital Security Act, 2018",
                                  "Order from BTRC or Government Authority"
                                ].map((reason, i) => (
                                  <div key={i} className="flex items-start gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl group/item hover:border-red-500/40 transition-all">
                                    <div className="text-red-900 font-mono text-[10px] pt-0.5">[{i + 1}]</div>
                                    <p className="text-[10px] text-gray-500 font-mono uppercase leading-tight group-hover/item:text-red-400 transition-colors">
                                      {reason}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Unilateral Termination Rights */}
                            <div className="p-6 bg-zinc-900/50 border border-white/5 rounded-3xl space-y-4">
                              <h6 className="text-white font-bold text-xs uppercase flex items-center gap-2">
                                <Gavel size={14} className="text-red-500" /> Unilateral Termination Right
                              </h6>
                              <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed italic">
                                "The Company also reserves the right to <span className="text-white">unilaterally terminate</span> these GCU for any serious and/or repeated breaches. Such termination will be done <span className="text-red-500 font-black">as of right</span>, without delay and without prejudice to the damages that the Company could seek."
                              </p>
                            </div>

                            {/* User Account Deactivation (User's Right) */}
                            <div className="p-8 bg-green-500/5 border border-green-500/10 rounded-[2.5rem] relative overflow-hidden group/user">
                              <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                                <div className="space-y-2">
                                  <h5 className="text-green-500 font-black text-xs uppercase tracking-widest flex items-center gap-2">
                                    <UserCheck size={14} /> User Deactivation Policy
                                  </h5>
                                  <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed max-w-xl">
                                    A User may, <span className="text-white">at any time</span>, without prior notice and without having to justify the reasons, deactivate its account.
                                  </p>
                                </div>
                                <div className="px-6 py-3 bg-black border border-green-900/40 rounded-xl text-center">
                                  <p className="text-[10px] text-green-700 font-mono uppercase leading-none font-black">Immediate Effect</p>
                                  <p className="text-[8px] text-gray-600 mt-1 uppercase">GCU Termination upon deactivation</p>
                                </div>
                              </div>
                              {/* Subtle Green Scanline */}
                              <div className="absolute top-0 left-0 w-full h-[1px] bg-green-500/20 translate-y-[-100%] group-hover/user:animate-scan"></div>
                            </div>

                          </div>

                          {/* Background Watermark */}
                          <div className="absolute -bottom-10 -right-10 opacity-[0.02] pointer-events-none select-none">
                            <XCircle size={250} className="text-red-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. FINANCIAL CONDITIONS */}
                <section id="usage" className="scroll-mt-32 relative">
                  {/* Section Watermark */}
                  <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none select-none font-mono text-[100px] font-black leading-none -rotate-12 translate-x-20">
                    CONFIDENTIAL
                  </div>

                  <div className="flex items-center gap-4 mb-12 relative z-10">
                    <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                      <Cpu size={24} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-white uppercase tracking-tighter italic leading-none">
                        5. Financial Conditions
                      </h2>
                      <p className="text-green-500/60 font-mono text-[9px] uppercase tracking-[0.2em] mt-2 italic">
                        Applicable only to Security Researchers participating in Bug Bounty Programs
                      </p>
                    </div>
                  </div>

                  <div className="ml-6 space-y-16 pl-6 border-l border-green-500/20 relative z-10">

                    {/* 5.1 Invoicing Mandate */}
                    <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <FileText size={16} className="text-green-500" />
                          5.1 Invoicing Mandate Protocol
                        </h4>

                        <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500">
                          {/* Background Watermark */}
                          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <FileSignature size={80} className="text-green-500" />
                          </div>

                          <div className="relative z-10 space-y-6">
                            {/* Core Authorization Clause */}
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden">
                              <p className="text-[13px] text-gray-300 font-mono uppercase leading-relaxed">
                                To allow the Company to <span className="text-white font-bold italic underline decoration-green-500/30">invoice in their name and on their behalf</span> the Rewards awarded to them, Security Researchers <span className="text-white font-black">expressly and unconditionally agree</span> to the terms of the Invoicing Mandate <span className="text-green-500 font-bold">(Appendix 2)</span>.
                              </p>
                            </div>

                            {/* Administrative Requirement Node */}
                            <div className="space-y-4">
                              <h5 className="text-green-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                <Terminal size={14} /> Account_Activation_Requirement
                              </h5>
                              <div className="p-6 bg-black/40 rounded-3xl border border-white/5">
                                <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed italic">
                                  "It is <span className="text-white">expressly agreed</span> that the Invoicing Mandate must be <span className="text-white font-bold underline decoration-white/20">duly completed and accepted</span> by the Security Researchers in their personal account."
                                </p>
                              </div>
                            </div>

                            {/* Critical Failure Consequence (Red Alert Box) */}
                            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-[2rem] relative overflow-hidden group/alert">
                              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover/alert:opacity-100 transition-opacity blur-2xl"></div>

                              <div className="flex items-start gap-4 relative z-10">
                                <div className="mt-1 text-red-500 animate-pulse">
                                  <AlertTriangle size={20} />
                                </div>
                                <div className="space-y-2">
                                  <h5 className="text-red-500 font-black text-[11px] uppercase tracking-widest">CRITICAL_PAYMENT_NOTICE</h5>
                                  <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                    Failing this, any operation initiated by the Security Researchers will <span className="text-red-400 font-black underline decoration-red-500/40 italic">not give rise to payment</span>. Mandatory compliance is required for reward settlement.
                                  </p>
                                </div>
                              </div>
                            </div>

                          </div>

                          {/* Decorative Matrix Bit Stream */}
                          <div className="absolute bottom-4 left-8 right-8 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* 5.2 Know Your Customer (KYC) checks */}
                    <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <UserCheck size={16} className="text-green-500" />
                          5.2 Know Your Customer (KYC) Checks
                        </h4>

                        <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[1.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500">
                          {/* Background Watermark */}
                          <div className="absolute -bottom-4 -right-4 opacity-[0.02] pointer-events-none">
                            <ShieldCheck size={180} className="text-green-500" />
                          </div>

                          <div className="relative z-10 space-y-8">
                            {/* Mandatory Requirement Declaration */}
                            <div className="space-y-4">
                              <p className="text-[13px] text-gray-300 font-mono uppercase leading-relaxed">
                                KYC checks on the Security Researcher are a <span className="text-white font-black italic underline decoration-green-500/30">mandatory requirement</span> and performed by the Company or its <span className="text-white font-bold">PSP</span> for complying with:
                              </p>

                              {/* Regulatory Grid */}
                              <div className="grid md:grid-cols-2 gap-4 pt-2">
                                {[
                                  "The Money Laundering Prevention Act, 2012",
                                  "The Anti Terrorism (Amendment) Act, 2013",
                                  "Bangladesh Bank KYC guidelines",
                                  "Bangladesh Financial Intelligence Unit (BFIU) requirements"
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center gap-3 p-4 bg-black/40 border border-white/5 rounded-2xl group/item hover:border-green-500/30 transition-all">
                                    <div className="w-1.5 h-1.5 bg-green-900 group-hover/item:bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.2)] transition-all"></div>
                                    <span className="text-[10px] text-gray-500 font-mono uppercase font-bold group-hover/item:text-gray-300 transition-colors">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Verification Identity Protocol */}
                            <div className="pt-6 border-t border-white/5">
                              <div className="p-6 bg-green-500/5 border border-green-500/10 rounded-[2rem] relative overflow-hidden">
                                <div className="flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                                  <div className="space-y-2">
                                    <h5 className="text-green-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                      <Zap size={14} /> Verification_Identity_Protocol
                                    </h5>
                                    <p className="text-[12px] text-gray-400 font-mono uppercase leading-relaxed max-w-xl">
                                      Once the KYC process is successfully completed, Security Researchers will be identified as <span className="text-white font-black italic underline decoration-white/20">"KYC Verified"</span> on the Platform.
                                    </p>
                                  </div>

                                  {/* Visual Badge Status */}
                                  <div className="px-6 py-3 bg-black border border-green-900/40 rounded-xl flex items-center gap-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                                    <span className="text-[10px] font-mono text-green-500 font-black uppercase tracking-widest">
                                      Status: KYC_Verified_Tag
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5.3 Rewards & 5.4 Tax Compliance Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* 5.3 Rewards */}
                      {/* 5.3 Rewards */}
                      <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                        <div className="space-y-4">
                          <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            <Trophy size={16} className="text-green-500" />
                            5.3 Rewards Settlement Protocol
                          </h4>

                          <div className="p-8 bg-zinc-950/60 border border-white/5 rounded-[1.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500">
                            {/* Background Icon Watermark */}
                            <div className="absolute -top-4 -right-4 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                              <Landmark size={150} />
                            </div>

                            <div className="relative z-10 space-y-8">

                              {/* Core Provision Card */}
                              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl relative">
                                <div className="flex gap-4 items-start">
                                  <div className="p-2 bg-green-500/10 rounded-lg text-green-500 mt-1">
                                    <CheckCircle2 size={16} />
                                  </div>
                                  <p className="text-[13px] text-gray-300 font-mono uppercase leading-relaxed italic">
                                    "Upon submitting a <span className="text-white font-bold underline decoration-green-500/30">valid Vulnerability Report</span> and subject to the Security Researchers' compliance with their obligations outlined in the relevant Bug Bounty Program, the Customer User will, at its <span className="text-white font-black">sole discretion</span>, determine and issue Rewards which will be paid to the Security Researchers using their Wallet."
                                  </p>
                                </div>
                              </div>

                              {/* Currency & Tax Grid */}
                              <div className="grid md:grid-cols-2 gap-4">
                                {/* Currency and Taxes */}
                                <div className="p-5 bg-black/40 border border-white/5 rounded-2xl group/item hover:border-green-500/30 transition-all">
                                  <h5 className="text-green-500 font-bold text-[10px] uppercase mb-3 tracking-widest">BDT_Settlement_Node</h5>
                                  <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                                    The Rewards are expressed in <span className="text-white font-black">BDT (Bangladeshi Taka)</span>, including <span className="text-white italic">all applicable taxes</span>.
                                  </p>
                                </div>

                                {/* Conversion and Charges */}
                                <div className="p-5 bg-black/40 border border-white/5 rounded-2xl group/item hover:border-green-500/30 transition-all">
                                  <h5 className="text-green-500 font-bold text-[10px] uppercase mb-3 tracking-widest">Conversion_Protocol</h5>
                                  <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                                    Any currency conversion charges shall be <span className="text-red-400 font-black">borne by the Security Researchers</span> according to Bangladesh Bank exchange rates.
                                  </p>
                                </div>
                              </div>

                              {/* Tactical Note: Authority Reference */}
                              <div className="p-4 bg-green-500/5 border-l-2 border-green-600 rounded-r-xl">
                                <div className="flex items-center gap-3">
                                  <Info size={14} className="text-green-900" />
                                  <p className="text-[9px] text-gray-500 font-mono uppercase tracking-widest leading-relaxed">
                                    Legal Ref: Settlement is strictly governed by Bangladesh Bank foreign exchange guidelines and internal triage verification.
                                  </p>
                                </div>
                              </div>

                            </div>

                            {/* Bottom Visual Terminal Stream */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
                          </div>
                        </div>
                      </div>

                      {/* 5.4 Tax Compliance */}
                      {/* 5.4 Tax Compliance */}
                      <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                        <div className="space-y-4">
                          <h4 className="text-red-500 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            <ShieldAlert size={16} />
                            5.4 Tax Compliance Matrix
                          </h4>

                          <div className="p-8 bg-red-600/5 border border-red-500/20 rounded-[3rem] relative overflow-hidden group transition-all duration-500 hover:border-red-500/40">
                            {/* Background Icon Watermark */}
                            <div className="absolute top-0 right-0 p-8 opacity-[0.05] -rotate-12 group-hover:opacity-[0.08] transition-opacity">
                              <Scale size={150} className="text-red-500" />
                            </div>

                            <div className="relative z-10 space-y-8">
                              {/* Intro Directive */}
                              <p className="text-[13px] text-gray-300 font-mono uppercase leading-relaxed font-bold">
                                Security Researchers are <span className="text-red-500 underline decoration-red-500/30 underline-offset-4">solely responsible</span> for the following taxation and regulatory protocols:
                              </p>

                              {/* Requirements Grid */}
                              <div className="grid md:grid-cols-1 gap-4">
                                {[
                                  {
                                    title: "Tax Identification Number (TIN)",
                                    desc: "Obtaining Tax Identification Number (TIN) from the National Board of Revenue (NBR).",
                                    icon: <Fingerprint size={14} />
                                  },
                                  {
                                    title: "Income Tax Returns",
                                    desc: "Filing income tax returns as per the Income Tax Ordinance, 1984.",
                                    icon: <FileText size={14} />
                                  },
                                  {
                                    title: "Reward Taxation",
                                    desc: "Paying all applicable taxes on rewards received through the platform.",
                                    icon: <DollarSign size={14} />
                                  },
                                  {
                                    title: "VAT & Supplementary Duty",
                                    desc: "Complying with Value Added Tax and Supplementary Duty Act, 2012 if applicable.",
                                    icon: <Gavel size={14} />
                                  }
                                ].map((item, i) => (
                                  <div key={i} className="flex items-start gap-4 p-5 bg-black/60 rounded-2xl border border-white/5 group/item hover:border-red-500/30 transition-all">
                                    <div className="mt-1 text-red-500 opacity-50 group-hover/item:opacity-100 transition-opacity">
                                      {item.icon}
                                    </div>
                                    <div className="space-y-1">
                                      <h6 className="text-white font-black text-[10px] uppercase tracking-widest">{item.title}</h6>
                                      <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed italic">
                                        {item.desc}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Critical Legal Disclaimer Box */}
                              <div className="p-4 bg-red-900/10 border-l-2 border-red-600 rounded-r-xl">
                                <div className="flex items-center gap-3">
                                  <AlertCircle size={14} className="text-red-500" />
                                  <p className="text-[9px] text-red-400 font-mono uppercase tracking-tighter leading-relaxed">
                                    <span className="font-black mr-1">System_Disclaimer:</span>
                                    The platform acts as a zero-liability intermediary regarding individual tax filings. Failure to align with NBR directives may result in legal consequences under Bangladesh law.
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Visual Bit Stream */}
                            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5.5 Security Researchers' Status */}
                    {/* 5.5 Security Researchers' Status */}
                    <div className="space-y-6 pt-10 border-t border-white/5 mt-10">
                      <div className="space-y-4">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                          <Fingerprint size={16} className="text-green-500" />
                          5.5 Security Researchers' Status & Affiliation
                        </h4>

                        <div className="p-8 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/10 transition-all duration-500">
                          {/* Background Icon Watermark */}
                          <div className="absolute -top-10 -right-10 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                            <Users size={200} className="text-green-500" />
                          </div>

                          <div className="relative z-10 space-y-8">
                            {/* Legal Affiliation Awareness */}
                            <div className="space-y-4">
                              <p className="text-[13px] text-gray-300 font-mono uppercase leading-relaxed tracking-tight">
                                Security Researchers are informed that their activity on the Platform is likely to be subject to <span className="text-white font-bold italic underline decoration-green-500/30">affiliation to a specific legal status</span> under Bangladesh law.
                              </p>
                              <div className="p-4 bg-black/40 rounded-2xl border border-white/5 italic">
                                <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed">
                                  &gt; Researchers shall make the <span className="text-white">necessary enquiries</span> and carry out the <span className="text-white">required formalities</span> to acquire the legal status relevant to their situation.
                                </p>
                              </div>
                            </div>

                            {/* Sole Responsibility Clause */}
                            <div className="p-6 bg-green-500/5 border-l-2 border-green-600 rounded-r-3xl">
                              <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed italic">
                                "Security Researchers are made aware that the income derived is subject to various <span className="text-white">legal, social, accounting and tax requirements</span>. Researchers acknowledge it is their <span className="text-green-500 font-black underline decoration-white/20">sole responsibility</span> to comply with these parameters."
                              </p>
                            </div>

                            {/* Requirements Grid (Mandatory Actions) */}
                            <div className="space-y-4">
                              <h5 className="text-green-900 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                <Terminal size={12} /> Mandatory_Compliance_Checklist
                              </h5>

                              <div className="grid sm:grid-cols-2 gap-4">
                                {/* 1. NBR Declaration */}
                                <div className="p-5 bg-black/60 rounded-2xl border border-white/5 group/item hover:border-green-500/30 transition-all">
                                  <span className="text-[9px] text-green-700 uppercase font-black block mb-2 tracking-widest">Protocol_01: NBR</span>
                                  <h6 className="text-white font-bold text-[11px] uppercase mb-1">NBR Declarations</h6>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed">Make all declarations required by the National Board of Revenue (NBR).</p>
                                </div>

                                {/* 2. Income Tax Ordinance */}
                                <div className="p-5 bg-black/60 rounded-2xl border border-white/5 group/item hover:border-green-500/30 transition-all">
                                  <span className="text-[9px] text-green-700 uppercase font-black block mb-2 tracking-widest">Protocol_02: TAX_LAW</span>
                                  <h6 className="text-white font-bold text-[11px] uppercase mb-1">Income Tax Compliance</h6>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed">Comply with the provisions of the <span className="text-green-500 italic">Income Tax Ordinance, 1984</span>.</p>
                                </div>

                                {/* 3. Record Keeping */}
                                <div className="p-5 bg-black/60 rounded-2xl border border-white/5 group/item hover:border-green-500/30 transition-all">
                                  <span className="text-[9px] text-green-700 uppercase font-black block mb-2 tracking-widest">Protocol_03: ACCOUNTING</span>
                                  <h6 className="text-white font-bold text-[11px] uppercase mb-1">Book-keeping</h6>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed">Maintain proper books of accounts if required under applicable laws.</p>
                                </div>

                                {/* 4. VAT Registration */}
                                <div className="p-5 bg-black/60 rounded-2xl border border-white/5 group/item hover:border-green-500/30 transition-all">
                                  <span className="text-[9px] text-green-700 uppercase font-black block mb-2 tracking-widest">Protocol_04: VAT</span>
                                  <h6 className="text-white font-bold text-[11px] uppercase mb-1">VAT Registration</h6>
                                  <p className="text-[10px] text-gray-500 font-mono uppercase leading-relaxed">Register for VAT if turnover exceeds the threshold prescribed under VAT laws.</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5.6 Company's Obligations */}
                    <div className="p-8 bg-white/5 border border-white/10 rounded-[1.5rem] relative">
                      <div className="flex flex-col md:flex-row justify-between gap-8 items-start">
                        <div className="space-y-6 flex-1">
                          <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2 italic">
                            <ShieldCheck size={20} className="text-green-500" /> 5.6 Company's obligations towards Security Researchers
                          </h4>
                          <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                            The Company can <span className="text-red-500 font-bold underline decoration-red-500/20">under no circumstances</span> be be involved in any of the above steps and its
                            liability can, under no circumstances and for any reason whatsoever, be sought in relation to
                            any of these legal, social, accounting and tax obligations.
                          </p>
                          <p className='text-sm'>
                            <span className='block md:inline'>The Company's obligations</span>
                            <span className='block md:inline'> are strictly limited to :</span>
                          </p>
                          <div className="grid md:grid-cols-1 gap-2 pt-2">
                            {[
                              "Informing Security Researchers of the existence of such requirements which are to be carried out by the Security Researchers, at their own expense",
                              "Providing them with a document summarizing all transactions made on the Platform",
                              "Withholding tax as required under Bangladesh law (if applicable)"
                            ].map((txt, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-black/60 rounded-xl border border-white/5">
                                <div className="text-green-500 text-[10px] font-mono">0{idx + 1}</div>
                                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-tight italic">{txt}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Summary Sticker */}
                        <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-[1.5rem] text-center backdrop-blur-xl shrink-0 self-center">
                          <History size={32} className="mx-auto text-green-500 mb-4" />
                          <p className="text-[10px] font-mono text-gray-500 uppercase leading-relaxed font-bold italic">
                            "Documenting Financial <br /> Transparency Since 2026"
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>

                {/* 6. INTELLECTUAL PROPERTY */}
                <section id="transfer" className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-green-500/10 rounded-2xl text-green-500 border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                      <Lock size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic">
                      6. Intellectual Property
                    </h2>
                  </div>

                  <div className="ml-0 md:ml-6 space-y-10 pl-0 md:pl-6 border-l-0 md:border-l border-green-500/20">

                    {/* 6.1 Platform IPRs */}
                    {/* 6.1 The Platform IPRs */}
                    <div className="space-y-8">
                      <div className="space-y-6">
                        <h4 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2 px-4 md:px-0">
                          <Cpu size={16} className="text-green-500" />
                          6.1 The Platform IPRs
                        </h4>

                        <div className="p-6 md:p-10 bg-zinc-950/60 border border-white/5 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500">
                          {/* Background Watermark */}
                          <div className="absolute -top-10 -right-10 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                            <Lock size={200} className="text-green-500" />
                          </div>

                          <div className="relative z-10 space-y-8">

                            {/* Core Retention Clause */}
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl relative">
                              <p className="text-[13px] md:text-[14px] text-gray-300 font-mono uppercase leading-relaxed italic">
                                "The Company does and will retain <span className="text-white font-black underline decoration-green-500/50 underline-offset-4">all proprietary and Intellectual Property Rights (IPRs)</span>, title, and interest in and to the Platform and the Materials."
                              </p>
                            </div>

                            {/* Definition of "Material" Node */}
                            <div className="space-y-4">
                              <h5 className="text-green-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                                <Terminal size={12} /> Definition_Protocol: "Material"
                              </h5>
                              <div className="p-6 bg-black/40 rounded-[2rem] border border-white/5 space-y-4">
                                <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                                  For the purpose of this Article, <span className="text-white font-bold">"Material"</span> includes any materials made available to the User by the Company, including but not limited to:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                  {[
                                    "Accessible Information & Text",
                                    "Photos, Images & Sounds",
                                    "Data & Databases",
                                    "Standard Templates of Programs",
                                    "Templates of Vulnerability Reports",
                                    "Underlying Software & Technology"
                                  ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/5">
                                      <div className="w-1 h-1 bg-green-900 rounded-full"></div>
                                      <span className="text-[9px] text-gray-500 font-mono uppercase">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Restrictive Usage Clause (The serious warning part) */}
                            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-[1.5rem] relative overflow-hidden group/warning">
                              <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover/warning:opacity-100 transition-opacity blur-2xl"></div>

                              <div className="relative z-10 space-y-5">
                                <div className="flex items-start md:items-center gap-3 text-red-500">
                                  <div className="shrink-0 -mt-1 md:mt-0">
                                    <ShieldAlert size={20} className="animate-pulse" />
                                  </div>
                                  <h6 className="font-black text-[10px] md:text-xs uppercase tracking-wider md:tracking-widest leading-tight">
                                    CRITICAL_USAGE_RESTRICTION
                                  </h6>
                                </div>

                                <p className="text-[12px] text-gray-300 font-mono uppercase leading-relaxed">
                                  The User may <span className="text-red-400 font-black">not under any circumstances</span> (except under the limited exception of VDP) store, reproduce, represent, modify, transmit, publish, adapt on any medium whatsoever, by any means whatsoever, or use in any way whatsoever, the elements of the Platform and/or the Materials.
                                </p>

                                <div className="p-4 bg-black/60 rounded-xl border-l-2 border-red-600 shadow-xl">
                                  <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed italic">
                                    <span className="text-white font-black mr-2">&gt; REQUIREMENT:</span>
                                    Prior written permission of the Company is <span className="text-white underline underline-offset-2">mandatory</span> for any unauthorized use.
                                  </p>
                                </div>
                              </div>
                            </div>

                          </div>

                          {/* Bottom Status Stream */}
                          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* 6.2 Trademarks & 6.4 Platform Data */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* 6.2 Trademarks */}
                      <div className="p-6 md:p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] space-y-4 relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                          <Award size={120} />
                        </div>
                        <h4 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                          <Fingerprint size={14} className="text-green-500" /> 6.2 Trademarks
                        </h4>
                        <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                          Each party remains the owner of its <span className="text-white font-bold">distinctive signs</span> (trademarks, corporate names, trade names). Reproduction or imitation belonging to the Company is <span className="text-red-500 underline">strictly prohibited</span> without written consent.
                        </p>
                      </div>

                      {/* 6.4 Platform Data */}
                      <div className="p-6 md:p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem] space-y-4 relative overflow-hidden group">
                        <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                          <Database size={120} />
                        </div>
                        <h4 className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">
                          <ShieldCheck size={14} className="text-green-500" /> 6.4 Platform Data
                        </h4>
                        <p className="text-[11px] text-gray-400 font-mono uppercase leading-relaxed">
                          The Company retains <span className="text-white font-bold">exclusive ownership</span> of interactions, stats, and metadata generated within the Platform. Users agree not to extract, use, or replicate part of this data without consent.
                        </p>
                      </div>
                    </div>

                    {/* 6.3 Copyright Protection Laws (The Legal Base) */}
                    <div className="p-8 bg-green-500/5 border border-green-500/20 rounded-[2.5rem] md:rounded-[3rem] relative overflow-hidden">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Gavel size={18} className="text-green-500" />
                            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em]">6.3 Legal Framework</h4>
                          </div>
                          <p className="text-[11px] text-gray-500 font-mono uppercase leading-relaxed max-w-xl">
                            All Intellectual Property rights are protected under the following jurisdictions of Bangladesh:
                          </p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                            {[
                              "The Copyright Act, 2000 (as amended)",
                              "The Patent Design and Trademark Act, 2022",
                              "International Signed Conventions"
                            ].map((law, i) => (
                              <li key={i} className="flex items-center gap-2 text-[10px] text-green-700 font-mono uppercase font-bold italic">
                                <div className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></div> {law}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="hidden md:block">
                          <div className="p-6 bg-black border border-green-900/30 rounded-full">
                            <span className="text-[12px] font-black text-green-500 rotate-12 block uppercase">IPR_PROTECT</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
              </div>

              {/* --- 14. CONTACT INFORMATION (Final Footer) --- */}
              <div id="contact" className="mt-40 p-12 bg-white/5 border border-white/10 rounded-[3.5rem] text-center backdrop-blur-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent"></div>
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-green-500/10 rounded-3xl flex items-center justify-center text-green-500 mx-auto mb-6 border border-green-500/20">
                    <Mail size={32} />
                  </div>
                  <h2 className="text-3xl font-black text-white uppercase italic tracking-widest leading-none">Command Engagement</h2>
                  <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
                    ZeroDay Test Level 04, 15 Indira Road, Farmgate, Dhaka 1215 Bangladesh <br />
                    <span className="text-green-500 mt-4 block">support@zerodaytest.com | 01234555333</span>
                  </p>

                  <div className="pt-8 border-t border-white/5 mt-10">
                    <p className="text-[8px] font-mono text-gray-700 uppercase tracking-[0.5em]">LAST_UPDATED: 02.18.2026 // SYSTEM_STABLE</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #064e3b;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

function XCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle text-red-500"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
  );
}