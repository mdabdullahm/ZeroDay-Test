"use client";

import React, { useState } from 'react'; // ১. useState যুক্ত করা হয়েছে
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation'; // ২. useRouter যুক্ত করা হয়েছে
import {
    ShieldCheck, Bug, Scale, Gavel,
    Terminal, Lock, Zap, Trophy,
    AlertTriangle, Info, FileText,
    Cpu, Globe, Mail, Phone, MapPin,
    CheckCircle2, AlertCircle, Printer,
    QrCode, Handshake, Users, FileWarning,
    Search, Target, FileSignature,
    Menu, X, ArrowLeft, ChevronRight // ৩. নেভিগেশন আইকন যুক্ত
} from 'lucide-react';

const sections = [
    { id: "scope", title: "1. Scope", icon: <Target size={16} /> },
    { id: "guidelines", title: "2. Reporting Guidelines", icon: <Terminal size={16} /> },
    { id: "safe-testing", title: "3. Safe Testing Rules", icon: <ShieldCheck size={16} /> },
    { id: "confidentiality", title: "4. Confidentiality", icon: <Lock size={16} /> },
    { id: "rewards", title: "5. Rewards & Recognition", icon: <Trophy size={16} /> },
    { id: "legal", title: "6. Legal Protection", icon: <Gavel size={16} /> },
    { id: "coordinated", title: "7. Coordinated Disclosure", icon: <Handshake size={16} /> },
    { id: "channels", title: "8. Reporting Channels", icon: <Globe size={16} /> },
    { id: "changes", title: "9. Policy Changes", icon: <FileWarning size={16} /> },
    { id: "acceptance", title: "10. Acceptance", icon: <CheckCircle2 size={16} /> },
];

export default function DisclosurePolicyPage() {
    const handlePrint = () => window.print();
    const router = useRouter(); // ৪. ব্যাক বাটনের জন্য
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ৫. মোবাইল মেনু স্টেট

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black scroll-smooth">
            
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* --- মোবাইল কন্ট্রোল (ব্যাক বাটন ও মেনু টগল) --- */}
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

            {/* --- মোবাইল ড্রয়ার মেনু --- */}
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
                            <p className="text-[10px] font-mono text-green-500 uppercase tracking-widest mb-6">Disclosure_Index</p>
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

                {/* --- অফিশিয়াল লেটারহেড --- */}
                <div className="mb-12 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3 mb-2">
                            <img src="/Artboard.png" alt="artboard" className='w-10 h-10' />
                            <h2 className="text-green-500 font-black text-2xl tracking-widest uppercase">Byte Capsule</h2>
                        </div>
                        <div className="text-[10px] font-mono text-gray-500 space-y-1">
                            <p className="flex items-center gap-2 justify-center md:justify-start font-bold text-gray-400 uppercase tracking-tighter italic">STAY SAFE, STAY SECURE</p>
                            <p className="flex items-center gap-2"><MapPin size={10} /> Level-4, Byte Capsule, 15 Indira Road, Farmgate, Dhaka-1215</p>
                            <p className="flex items-center gap-2"><Mail size={10} /> mail@bytecapsuleit.com | <Phone size={10} /> +8801796934898</p>
                            <p className="flex items-center gap-2"><Globe size={10} /> bytecapsuleit.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 rounded-xl">
                            <img src="/qrcode.png" alt="" className='w-32 h-32' />
                        </div>
                        <button onClick={handlePrint} className="flex items-center gap-2 text-[10px] font-mono text-green-500 hover:text-white transition-colors uppercase tracking-widest">
                            <Printer size={12} /> PRINT_PROTOCOL
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">

                    {/* Sidebar Navigation (Desktop) */}
                    <aside className="hidden lg:block sticky top-32 space-y-2">
                        <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Policy_Nodes</p>
                        {sections.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group">
                                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                                <span className="text-[11px] font-bold uppercase tracking-tight">{item.title}</span>
                            </a>
                        ))}
                    </aside>

                    {/* Main Content Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-950/80 border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                        {/* Watermark Logo */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                            <ShieldCheck size={500} className="text-green-500" />
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <p className="text-gray-500 font-mono text-xs uppercase mb-2">OFFICIAL DOCUMENT</p>
                                <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                                    Zeroday Test <br />
                                    <span className="text-green-500">Responsible Disclosure</span> Policy
                                </h1>
                                <div className="flex flex-col items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                                    <p>Effective Date: <span className="text-white">February 09, 2026</span></p>
                                    <p>Platform Provider: <span className="text-white">Zeroday Test – Byte Capsule IT</span></p>
                                </div>
                            </div>

                            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light text-gray-400">

                                <p className="p-8 bg-zinc-900/50 border-l-4 border-green-500 rounded-r-3xl italic">
                                    Zeroday Test, an asset of Byte Capsule, is committed to maintaining a safe and secure environment for our clients and security researchers (“Hunters”). This Responsible Disclosure Policy provides guidelines for reporting vulnerabilities ethically and safely.
                                </p>

                                {/* 1. Scope */}
                                <div id="scope" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">1. Scope</h3>
                                    <p className="mb-4">This policy applies to:</p>
                                    <ul className="space-y-3 pl-4 list-disc text-gray-400">
                                        <li>All Hunters participating in programs hosted on Zeroday Test.</li>
                                        <li>Systems, applications, APIs, infrastructure, and services explicitly listed in the approved program scope.</li>
                                    </ul>
                                    <p className="mt-4 p-4 bg-red-950/20 border border-red-900/30 rounded-xl text-red-500 font-bold text-xs uppercase">
                                        Do not test systems outside the approved scope. Unauthorized testing is strictly prohibited.
                                    </p>
                                </div>

                                {/* 2. Reporting Guidelines */}
                                <div id="guidelines" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">2. Reporting Guidelines</h3>
                                    <p className="mb-4 font-bold text-green-700 uppercase text-xs font-mono">Hunters must:</p>
                                    <ul className="space-y-6 list-none pl-0">
                                        <li className="flex gap-4">
                                            <span className="text-green-500 font-mono font-black">1.</span>
                                            <span>Submit reports only via Zeroday Test platform.</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-green-500 font-mono font-black">2.</span>
                                            <div className="space-y-3">
                                                <span>Include sufficient detail for the Client and Platform Provider to reproduce the issue, including:</span>
                                                <ul className="grid md:grid-cols-2 gap-3 text-xs font-mono list-none">
                                                    <li className="flex gap-2"><span>•</span> Steps to reproduce</li>
                                                    <li className="flex gap-2"><span>•</span> Impact assessment (e.g., confidentiality, integrity, availability)</li>
                                                    <li className="flex gap-2"><span>•</span> Proof-of-concept (safe, non-destructive)</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-green-500 font-mono font-black">3.</span>
                                            <div className="space-y-3">
                                                <span>Avoid disruptive activities, including:</span>
                                                <ul className="grid md:grid-cols-2 gap-3 text-xs font-mono text-red-900 list-none">
                                                    <li>- Denial-of-service attacks</li>
                                                    <li>- Data deletion or modification</li>
                                                    <li>- Social engineering attacks unless explicitly allowed</li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-green-500 font-mono font-black">4.</span>
                                            <span>Do not share vulnerabilities publicly before coordinated disclosure and authorization.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* 3. Safe Testing Rules */}
                                <div id="safe-testing" className="scroll-mt-32 p-8 bg-zinc-900 border border-green-500/20 rounded-3xl">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">3. Safe Testing Rules</h3>
                                    <ul className="space-y-4 text-sm list-none pl-0">
                                        <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Test only systems, endpoints, and services in the program scope.</li>
                                        <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Avoid accessing personal data of real users unless explicitly required and approved.</li>
                                        <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Use non-destructive testing methods.</li>
                                        <li className="flex gap-3"><CheckCircle2 className="text-green-500 shrink-0" size={18} /> Document findings carefully and securely.</li>
                                    </ul>
                                </div>

                                {/* 4. Confidentiality */}
                                <div id="confidentiality" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4">4. Confidentiality</h3>
                                    <ul className="space-y-3 text-sm list-disc pl-6">
                                        <li>All vulnerability information is <span className="text-white font-bold underline">confidential</span>.</li>
                                        <li>Hunters <span className="text-white font-bold">must not disclose</span> the vulnerability, client identity, or technical details to third parties.</li>
                                        <li>Violations may result in platform suspension, legal action, and forfeiture of rewards.</li>
                                    </ul>
                                </div>

                                {/* 5. Rewards */}
                                <div id="rewards" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4">5. Rewards & Recognition</h3>
                                    <ul className="space-y-3 text-sm list-disc pl-6">
                                        <li>Valid submissions may be eligible for rewards as defined in the program’s scope.</li>
                                        <li>Rewards are subject to validation by the Client and Zeroday Test.</li>
                                        <li>Platform retains the right to refuse reward if report is unsafe, incomplete, or violates policy.</li>
                                    </ul>
                                </div>

                                {/* 6. Legal Protection */}
                                <div id="legal" className="scroll-mt-32 p-10 bg-green-900/10 border border-green-500/30 rounded-[3rem] relative overflow-hidden">
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 opacity-5">
                                        <ShieldCheck size={200} className="text-green-500" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 relative z-10">6. Legal Protection</h3>
                                    <p className="relative z-10 mb-4">Hunters acting <span className="text-white font-bold">within scope and in good faith</span> are:</p>
                                    <ul className="space-y-4 text-sm relative z-10 list-none pl-0">
                                        <li className="flex gap-3"><Zap className="text-green-500 shrink-0" size={18} /> Protected from legal action by the Client for authorized security testing.</li>
                                        <li className="flex gap-3"><Zap className="text-green-500 shrink-0" size={18} /> Recognized as independent security researchers, not employees.</li>
                                    </ul>
                                    <p className="mt-6 text-xs text-red-500 uppercase font-black relative z-10 italic">Unauthorized activities may result in legal action or reporting to law enforcement.</p>
                                </div>

                                {/* 7, 8, 9 */}
                                <div className="grid md:grid-cols-3 gap-8">
                                    <div id="coordinated" className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
                                        <h4 className="text-white font-bold uppercase text-xs mb-3 border-b border-white/10 pb-2">7. Coordinated Disclosure</h4>
                                        <p className="text-[11px] text-gray-500 leading-relaxed">Hunters must coordinate with Zeroday Test and the Client before public disclosure. Requires written authorization from the Client and Platform Provider.</p>
                                    </div>
                                    <div id="channels" className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
                                        <h4 className="text-white font-bold uppercase text-xs mb-3 border-b border-white/10 pb-2">8. Reporting Channels</h4>
                                        <p className="text-[11px] text-gray-500 leading-relaxed">All submissions must be made through the Zeroday Test platform. Do not email vulnerabilities directly to Clients unless instructed.</p>
                                    </div>
                                    <div id="changes" className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl">
                                        <h4 className="text-white font-bold uppercase text-xs mb-3 border-b border-white/10 pb-2">9. Policy Changes</h4>
                                        <p className="text-[11px] text-gray-500 leading-relaxed">Zeroday Test reserves the right to update this policy at any time. Hunters will be notified via platform announcements.</p>
                                    </div>
                                </div>

                                {/* --- ১০. একসেপ্টেন্স এবং সিগনেচার সেকশন --- */}
                                <div id="acceptance" className="mt-20 pt-16 border-t border-white/10 relative">
                                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                                        <div className="bg-green-600 p-10 rounded-[1rem] text-black max-w-sm shadow-[0_0_60px_rgba(34,197,94,0.3)]">
                                            <div className="flex items-center gap-3 mb-4">
                                                <FileSignature size={24} />
                                                <h4 className="font-black uppercase text-lg tracking-tighter leading-none">Acceptance</h4>
                                            </div>
                                            <p className="text-[10px] font-bold leading-relaxed mb-6 italic opacity-90">
                                                "By participating in Zeroday Test programs, you agree to follow this Responsible Disclosure Policy and acknowledge that out-of-scope testing results in legal liability."
                                            </p>
                                            <div className="flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-tighter border-t border-black/10 pt-4">
                                                <ShieldCheck size={14} /> Protocol_Enforced_Node_0x7
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Global Footer Meta */}
                <div className="mt-12 text-center opacity-30">
                    <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.5em]">ZERODAY TEST | GLOBAL DISCLOSURE FRAMEWORK | BYTE CAPSULE IT</p>
                </div>

            </div>
        </div>
    );
}