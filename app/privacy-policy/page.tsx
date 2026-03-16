"use client";

import React, { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation'; 
import { 
  ShieldCheck, Lock, Eye, Database, 
  Globe, UserCheck, FileText, Info, 
  Mail, Clock, AlertTriangle, Terminal,
  Fingerprint, Scale, Users, ShieldAlert,
  Cookie, Share2, Gavel, Printer, QrCode, MapPin, Phone,
  Cpu, CheckCircle2, History,
  Menu, X, ArrowLeft, ChevronRight 
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
  const router = useRouter(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black scroll-smooth">
      
      {/* Background Matrix Decor */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* --- মোবাইল ফ্লোটিং বাটন (Back & Menu) --- */}
      <div className="lg:hidden fixed bottom-24 right-6 z-[100] flex flex-col gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => router.back()}
            className="w-12 h-12 bg-zinc-900 border border-white/10 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md"
          >
            <ArrowLeft size={20} />
          </motion.button>

          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-14 h-14 bg-green-600 text-black rounded-full flex items-center justify-center shadow-[0_0_20px_#22c55e66]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
      </div>

      {/* --- মোবাইল মেনু ড্রয়ার --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
            />
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              className="lg:hidden fixed top-0 right-0 h-full w-[280px] bg-zinc-950 border-l border-green-500/20 z-[95] p-6 shadow-2xl overflow-y-auto"
            >
              <p className="text-[10px] font-mono text-green-500 uppercase tracking-widest mb-6">Protocol_Index</p>
              <div className="space-y-2">
                {sections.map((item) => (
                  <a 
                    key={item.id} href={`#${item.id}`} 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-gray-400 active:bg-green-500/10 active:text-green-500 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-green-800">{item.icon}</span>
                      <span className="text-[10px] font-bold uppercase">{item.title}</span>
                    </div>
                    <ChevronRight size={14} className="opacity-30" />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">
        
        {/* --- ১. অফিশিয়াল লেটারহেড --- */}
        <div className="mb-12 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-3 mb-2">
                 <img src="/Artboard.png" alt="artboard" className='w-10 h-10' />
                 <h2 className="text-green-500 font-black text-2xl tracking-widest uppercase">Byte Capsule</h2>
              </div>
              <div className="text-[10px] font-mono text-gray-500 space-y-1">
                 <p className="font-bold text-gray-400 uppercase tracking-tighter italic">STAY SAFE, STAY SECURE</p>
                 <p className="flex items-center gap-2"><MapPin size={10} /> Level-4, Byte Capsule, 15 Indira Road, Farmgate, Dhaka-1215</p>
                 <p className="flex items-center gap-2"><Mail size={10} /> mail@bytecapsuleit.com | <Phone size={10} /> +8801796934898</p>
                 <p className="flex items-center gap-2"><Globe size={10} /> bytecapsuleit.com</p>
              </div>
           </div>
           <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl">
                 {/* <QrCode size={70} className="text-black" /> */}
                 <img src="/qrcode.png" alt="" className='w-32 h-32' />
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
            {/* আপনার কন্টেন্ট এখানে হবে */}
            {/* Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
               <ShieldCheck size={600} className="text-green-500" />
            </div>

            <div className="relative z-10 space-y-16">
               
               <div className="text-center">
                  <p className="text-gray-500 font-mono text-xs uppercase mb-2">CONFIDENTIAL</p>
                  <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                     ZeroDay Test <br />
                     <span className="text-green-500 underline decoration-green-900">Privacy</span> Policy
                  </h1>
                  <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                     <p>Operated by: <span className="text-white">Byte Capsule IT</span></p>
                     <p>Last Updated: <span className="text-green-900 font-bold">February 09, 2026</span></p>
                  </div>
               </div>

               <div className="space-y-12 text-sm md:text-base leading-relaxed font-light text-gray-400">
                  
                  <p className="p-8 bg-zinc-900/50 border-l-4 border-green-500 rounded-r-3xl italic">
                    This Privacy Policy explains how Byte Capsule IT ("Byte Capsule", "we", "our", or "us") collects, uses, processes, stores, and discloses personal information in connection with ZeroDay Test, our proprietary bug bounty and vulnerability disclosure platform. Prepared in accordance with the laws of Bangladesh: <span className="text-white">ICT Act 2006</span> and <span className="text-white">Digital Security Act 2018</span>.
                  </p>

                  {/* 1. Notice at Collection */}
                  <div id="notice" className="scroll-mt-32">
                     <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">1. Notice at Collection</h3>
                     <p className="mb-4 text-xs font-mono text-green-700 uppercase tracking-widest tracking-tighter">At or before the time of collecting personal information, we inform individuals about:</p>
                     <ul className="space-y-3 list-none pl-4">
                        {["The categories of personal information collected", "The purposes for which the information is used", "Whether the information will be shared with third parties", "The retention period of the information", "The rights available to individuals and how to exercise them"].map((li, i) => (
                           <li key={i} className="flex gap-4"><span className="text-green-900 font-mono text-xs mt-1">0x0{i+1}</span> {li}</li>
                        ))}
                     </ul>
                  </div>

                  {/* 2. Scope */}
                  <div id="scope" className="scroll-mt-32">
                     <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3 border-b border-white/5 pb-4">2. Scope of This Policy</h3>
                     <p className="mb-6">This Privacy Policy applies to personal information processed through the ZeroDay Test platform, including our website, researcher portal, client dashboards, training modules, and related online or offline services (collectively, the "Services").</p>
                     <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-[2rem]">
                        <h4 className="text-red-500 font-bold uppercase text-xs mb-4 flex items-center gap-2"><AlertTriangle size={16} /> Customer Data Disclaimer:</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-light italic">
                           Personal information and data submitted by organizations using ZeroDay Test for bug bounty programs, vulnerability disclosure, penetration testing, or security assessments ("Customer Data") are processed strictly on behalf of those organizations. The collection and use of Customer Data are governed by the respective customer agreements and privacy policies. Any requests regarding Customer Data must be directed to the relevant customer.
                        </p>
                     </div>
                  </div>

                  {/* 3. Types of Information */}
                  <div id="collection" className="scroll-mt-32 space-y-10">
                     <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">3. Types of Personal Information We Collect</h3>
                     
                     <div className="pl-4 space-y-8">
                        <div className="space-y-4">
                           <h4 className="text-green-500 font-bold uppercase text-xs tracking-widest">3.1 Information You Provide Directly</h4>
                           <p className="text-xs italic text-gray-600 mb-4">We may collect personal information when you register, participate, or communicate with us, including:</p>
                           <ul className="space-y-4 list-none pl-0">
                              <li className="flex gap-3"><span className="text-white font-bold text-xs font-mono uppercase mt-1 shrink-0">Account:</span> Name, username, email address, profile details, skills, certifications, portfolio links, and vulnerability research history</li>
                              <li className="flex gap-3"><span className="text-white font-bold text-xs font-mono uppercase mt-1 shrink-0">Researcher:</span> Proof of skills, prior work samples, reputation scores, and platform activity</li>
                              <li className="flex gap-3"><span className="text-white font-bold text-xs font-mono uppercase mt-1 shrink-0">Identity:</span> (if required): Full name, contact details, government-issued identification details (where legally permissible), and verification status</li>
                              <li className="flex gap-3"><span className="text-white font-bold text-xs font-mono uppercase mt-1 shrink-0">Comms:</span> Emails, support tickets, feedback, reports, and other correspondence</li>
                              <li className="flex gap-3"><span className="text-white font-bold text-xs font-mono uppercase mt-1 shrink-0">Jobs:</span> CVs, applications, and related materials</li>
                           </ul>
                           <p className="text-[11px] text-gray-500 bg-zinc-900 p-4 border border-white/5 rounded-xl">Any information included in public profiles or publicly submitted vulnerability reports may be visible to program owners and, where applicable, other users.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 pt-8">
                           <div className="space-y-4">
                              <h4 className="text-green-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2"><Cpu size={14} /> 3.2 Collected Automatically</h4>
                              <ul className="text-xs space-y-2 text-gray-500 list-disc pl-4">
                                 <li>IP address and approximate location</li>
                                 <li>Browser type, operating system, and device information</li>
                                 <li>Log data, timestamps, access records, and usage activity</li>
                                 <li>Security logs for fraud prevention and abuse detection</li>
                              </ul>
                           </div>
                           <div className="space-y-4">
                              <h4 className="text-green-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2"><Cookie size={14} /> 3.3 Cookies and Similar Technologies</h4>
                              <ul className="text-xs space-y-2 text-gray-500 list-disc pl-4">
                                 <li>Ensure core platform functionality</li>
                                 <li>Improve performance and user experience</li>
                                 <li>Monitor security events and suspicious activity</li>
                              </ul>
                           </div>
                        </div>
                        <p className="text-[10px] font-mono text-gray-200 italic uppercase">You may disable cookies through your browser settings; however, certain features of ZeroDay Test may not function properly as a result. </p>
                     </div>
                  </div>

                  {/* 4. Use of Info */}
                  <div id="usage" className="scroll-mt-32">
                     <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">4. How We Use Personal Information</h3>
                     <p className="mb-6">We use personal information for legitimate business and security purposes:</p>
                     <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4 list-none pl-4">
                        {[
                           "Operating and maintaining the ZeroDay Test platform", "Managing researcher and client accounts",
                           "Facilitating vulnerability submission, triage, validation, and remediation workflows ", "Verifying researcher identity and preventing fraud or abuse",
                           "Communicating platform updates, security notices, and operational messages", "Conducting internal research, analytics, and service improvement ",
                           " Complying with legal obligations and lawful requests "
                        ].map((item, i) => (
                           <li key={i} className="flex gap-3 text-xs md:text-sm"><CheckCircle2 className="text-green-900 mt-1 shrink-0" size={14} /> {item}</li>
                        ))}
                     </ul>
                     <p className="mt-8 text-green-700 font-black text-xs uppercase tracking-tighter italic">We do not use vulnerability data or personal information for unrelated commercial exploitation.</p>
                  </div>

                  {/* 5. Disclosure */}
                  <div id="disclosure" className="scroll-mt-32">
                     <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">5. Disclosure of Personal Information</h3>
                     <div className="space-y-6 pl-4 text-xs md:text-sm">
                        <div className="space-y-3">
                           <p className="text-white font-bold uppercase text-xs mb-2">We may disclose personal information only in the following circumstances:</p>
                           <ul className="space-y-4">
                              <li className="flex gap-4"><span className="text-white font-mono font-black">A. Service Providers:</span> Trusted vendors providing hosting, security monitoring, email, ID verification, or payment services, under strict confidentiality obligations.</li>
                              <li className="flex gap-4"><span className="text-white font-mono font-black">B. Program Owners(Clients):</span> Vulnerability reports and associated researcher identifiers shared as part of programs.</li>
                              <li className="flex gap-4"><span className="text-white font-mono font-black">C. Legal and Regulatory Requirements:</span>  Where disclosure is required by law, court order, or lawful request from authorities in Bangladesh or other applicable jurisdictions </li>
                              <li className="flex gap-4"><span className="text-white font-mono font-black">D. Security and Rights Protection:</span> To investigate suspected fraud, abuse, or violations of platform terms.</li>
                           </ul>
                        </div>
                        <p className="p-4 bg-green-900/10 border border-green-500/30 rounded-xl text-green-500 font-black uppercase text-xs text-center tracking-widest">Byte Capsule IT does not sell personal information.</p>
                     </div>
                  </div>

                  {/* 6. International Transfers */}
                  <div id="transfer" className="scroll-mt-32 p-8 bg-zinc-900 border border-white/5 rounded-3xl relative">
                     <div className="flex items-center gap-3 mb-4 text-white">
                        <Globe size={20} className="text-green-500" />
                        <h3 className="text-lg font-bold uppercase">6. International Data Transfers</h3>
                     </div>
                     <p className="text-sm text-gray-500 pl-8 leading-relaxed">To operate ZeroDay Test efficiently, personal information may be processed or stored on secure servers located outside Bangladesh, including cloud infrastructure. We implement reasonable technical and organizational safeguards to ensure data protection consistent with applicable laws.</p>
                  </div>

                  {/* 7. Subject Rights */}
                  <div id="rights" className="scroll-mt-32 p-10 bg-green-600 rounded-[3rem] text-black shadow-[0_0_50px_rgba(22,163,74,0.3)]">
                     <h3 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 mb-8">
                        <UserCheck size={28} /> 7. Data Subject Rights
                     </h3>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                           <p className="font-bold text-sm uppercase italic underline decoration-black/20">Under applicable Bangladeshi law, you may have the right to:</p>
                           <ul className="space-y-3 font-mono text-[11px] font-black uppercase list-none pl-0">
                              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Request access to information</li>
                              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Request correction of data</li>
                              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Request deletion of info</li>
                              <li className="flex gap-3 items-center"><div className="w-1.5 h-1.5 bg-black rounded-full"></div> Object to processing</li>
                           </ul>
                        </div>
                        <div className="p-6 bg-black/10 border-2 border-black/20 rounded-2xl flex flex-col justify-center text-center">
                           <p className="text-[10px] font-mono font-black mb-2 tracking-widest">SUBMIT REQUESTS TO:</p>
                           <p className="text-lg font-black underline">mail@bytecapsuleit.com</p>
                           <p className="text-[9px] mt-4 opacity-70">Identity verification may be required before processing requests.</p>
                        </div>
                     </div>
                  </div>

                  {/* 8, 9, 10 */}
                  <div className="grid md:grid-cols-3 gap-8">
                     <div id="retention" className="scroll-mt-32 p-6 bg-zinc-900 border border-white/5 rounded-3xl group hover:border-green-500/20 transition-all">
                        <h4 className="text-green-500 font-bold uppercase text-[10px] mb-3 flex items-center gap-2"><Clock size={14} /> 8. Data Retention</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-light">Retained only for as long as necessary to provide services, maintain security, resolve disputes, and comply with legal obligations. Securely deleted once no longer required.</p>
                     </div>
                     <div id="children" className="scroll-mt-32 p-6 bg-zinc-900 border border-white/5 rounded-3xl group hover:border-green-500/20 transition-all">
                        <h4 className="text-green-500 font-bold uppercase text-[10px] mb-3 flex items-center gap-2"><Users size={14} /> 9. Children’s Privacy</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-light">ZeroDay Test is not intended for individuals under 13. We do not knowingly collect personal information from minors.</p>
                     </div>
                     <div id="changes" className="scroll-mt-32 p-6 bg-zinc-900 border border-white/5 rounded-3xl group hover:border-green-500/20 transition-all">
                        <h4 className="text-green-500 font-bold uppercase text-[10px] mb-3 flex items-center gap-2"><History size={14} /> 10. Policy Changes</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-light">Updated periodically. New versions posted on the platform become effective immediately upon publication.</p>
                     </div>
                  </div>

                  {/* --- ১১. কন্টাক্ট এবং অ্যাপ্রুভাল এরিয়া (ছবির ফিনিশিং অংশ) --- */}
                  <div id="contact" className="mt-20 pt-16 border-t border-white/10 relative">
                     <div className="flex flex-col md:flex-row justify-between items-end gap-12 relative">
                        
                        <div className="space-y-8 w-full md:w-auto">
                           <div className="space-y-4">
                              <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3"><Mail className="text-green-500" /> 11. Contact Information</h3>
                              <div className="space-y-1 pl-4 border-l border-green-900">
                                 <p className="text-white font-bold text-lg leading-none uppercase tracking-tighter">Byte Capsule IT</p>
                                 <p className="text-green-700 font-mono text-xs">Email: <span className="text-gray-400 underline">mail@bytecapsuleit.com</span></p>
                                 <p className="text-gray-500 text-[10px] font-mono">Location: DHAKA, BANGLADESH</p>
                              </div>
                           </div>
                           
                           <p className="text-xs text-gray-300 font-light max-w-sm">
                              This Privacy Policy is specifically designed for the ZeroDay Test platform and reflects Byte Capsule IT’s commitment to lawful, ethical, and security-focused data handling.
                           </p>

                           <div className="space-y-1">
                              <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Authorization: Verified</p>
                              <p className="text-[9px] font-mono text-red-900 uppercase font-black">CONFIDENTIAL INTERNAL RECORD</p>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
          </motion.div>
        </div>

        {/* Global Footer Meta */}
        <div className="mt-12 text-center opacity-50 flex flex-col md:flex-row justify-center items-center gap-6">
           <p className="text-gray-100 font-mono text-[9px] uppercase tracking-[0.5em]">PRIVACY PROTOCOL DOCUMENT | ZERODAY TEST | NODE: 0x9AF2</p>
           <div className="w-1.5 h-1.5 rounded-full bg-green-900 hidden md:block"></div>
           <p className="text-green-900 font-black text-[10px] uppercase">Stay Safe, Stay Secure</p>
        </div>

      </div>
    </div>
  );
}