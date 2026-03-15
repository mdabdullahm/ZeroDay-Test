"use client";

import React, { useState } from 'react'; // ১. useState যুক্ত করা হয়েছে
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation'; // ২. useRouter যুক্ত করা হয়েছে
import {
    FileLock, ShieldCheck, Gavel, EyeOff,
    Terminal, Lock, Fingerprint, Scale,
    Printer, Info, CheckCircle, Ban,
    QrCode, Mail, Phone, MapPin, Globe, Trophy, AlertTriangle, Briefcase,
    Menu, X, ArrowLeft, ChevronRight // ৩. নতুন আইকন যুক্ত করা হয়েছে
} from 'lucide-react';

const sections = [
    { id: "purpose", title: "1. Purpose", icon: <Info size={16} /> },
    { id: "info", title: "2. Confidential Information", icon: <EyeOff size={16} /> },
    { id: "obligations", title: "3. Hunter Obligations", icon: <CheckCircle size={16} /> },
    { id: "prohibited", title: "4. Prohibited Actions", icon: <Ban size={16} /> },
    { id: "disclosure", title: "5. Responsible Disclosure", icon: <Terminal size={16} /> },
    { id: "employment", title: "6. No Employment", icon: <Briefcase size={16} /> },
    { id: "ownership", title: "7. Reward & Ownership", icon: <Trophy size={16} /> },
    { id: "breach", title: "8. Breach & Consequences", icon: <AlertTriangle size={16} /> },
    { id: "governing", title: "9. Governing Law", icon: <Gavel size={16} /> },
];

export default function HunterNDAPage() {
    const handlePrint = () => window.print();
    const router = useRouter(); // ৪. ব্যাক নেভিগেশনের জন্য
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ৫. মোবাইল মেনু স্টেট

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black scroll-smooth">
            
            {/* --- মোবাইল ফ্লোটিং একশন বাটনসমূহ (lg:hidden) --- */}
            <div className="lg:hidden fixed bottom-24 right-6 z-[100] flex flex-col gap-4">
                {/* ব্যাক বাটন */}
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => router.back()}
                    className="w-12 h-12 bg-zinc-900 border border-white/10 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md"
                >
                    <ArrowLeft size={20} />
                </motion.button>

                {/* মেনু টগল বাটন */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-14 h-14 bg-green-600 text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                >
                    <AnimatePresence mode="wait">
                        {isMenuOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* --- মোবাইল ড্রয়ার মেনু --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[320px] bg-zinc-950 border-l border-green-500/20 z-[95] p-6 shadow-2xl flex flex-col"
                        >
                            <div className="mb-8 mt-10">
                                <p className="text-[10px] font-mono text-green-900 uppercase tracking-[0.4em] mb-2">Tactical_Nav</p>
                                <h4 className="text-white font-black uppercase text-lg border-b border-white/5 pb-2">Hunter NDA Index</h4>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-2">
                                {sections.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-gray-400 active:bg-green-500/10 active:text-green-500 transition-all group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-green-900 group-active:text-green-500">{item.icon}</span>
                                            <span className="text-xs font-bold uppercase tracking-tight">{item.title}</span>
                                        </div>
                                        <ChevronRight size={14} className="opacity-20" />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">

                {/* --- ১. অফিশিয়াল লেটারহেড --- */}
                <div className="mb-12 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3 mb-2">
                            <ShieldCheck className="text-green-500" size={32} />
                            <h2 className="text-white font-black text-2xl tracking-widest uppercase">Byte Capsule</h2>
                        </div>
                        <div className="text-[10px] font-mono text-gray-500 space-y-1">
                            <p className="font-bold text-gray-400 uppercase tracking-tighter">STAY SAFE, STAY SECURE</p>
                            <p className="flex items-center gap-2"><MapPin size={10} /> Level-4, Byte Capsule, 15 Indira Road, Farmgate, Dhaka-1215</p>
                            <p className="flex items-center gap-2"><Mail size={10} /> mail@bytecapsuleit.com | <Phone size={10} /> +8801796934898</p>
                            <p className="flex items-center gap-2"><Globe size={10} /> bytecapsuleit.com</p>
                        </div>
                    </div>
                    <div className="p-3 bg-white rounded-xl">
                        <QrCode size={70} className="text-black" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">

                    {/* Sidebar Navigation (ডেস্কটপে স্থির থাকবে) */}
                    <aside className="hidden lg:block sticky top-32 space-y-2">
                        <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Agreement_Nodes</p>
                        {sections.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group">
                                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                                <span className="text-[11px] font-bold uppercase tracking-tight">{item.title}</span>
                            </a>
                        ))}
                        <button onClick={handlePrint} className="w-full mt-6 flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black hover:bg-green-600 hover:text-black transition-all uppercase">
                            <Printer size={14} /> Print_Protocol
                        </button>
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
                                <p className="text-gray-500 font-mono text-xs uppercase mb-2">CONFIDENTIAL</p>
                                <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                                    ZeroDay Test <br />
                                    <span className="text-green-500">Hunter NON-DISCLOSURE</span> & Confidentiality AGREEMENT
                                </h1>
                                <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                                    <p>Effective Date: <span className="text-white">February 09, 2026</span></p>
                                    <p>Version: <span className="text-white">1.0</span></p>
                                </div>
                            </div>

                            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light text-gray-400">

                                {/* Section 1 */}
                                <div id="purpose" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">1. Purpose</h3>
                                    <p>This Agreement governs confidentiality and authorized security testing conducted through Zeroday Test. It establishes the rules for protecting sensitive data during research activities.</p>
                                </div>

                                {/* Section 2 */}
                                <div id="info" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">2. Confidential Information</h3>
                                    <p className="mb-6">Confidential Information includes but is not limited to:</p>
                                    <ul className="grid md:grid-cols-1 gap-3 list-none">
                                        {[
                                            "Client systems, APIs, source code, infrastructure",
                                            "Security configurations and internal documentation",
                                            "User data, customer information, logs",
                                            "Any vulnerability details prior to approved disclosure",
                                            "Platform internal processes"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-white/5 rounded-xl text-xs font-mono">
                                                <Lock size={14} className="text-green-900" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div id="obligations" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">3. Hunter Obligations</h3>
                                    <ul className="space-y-4 text-sm list-none pl-1">
                                        {[
                                            "Conduct testing only within approved scope.",
                                            "Not access, modify, delete, or download data beyond proof-of-concept necessity.",
                                            "Not exploit vulnerabilities for personal gain.",
                                            "Not disclose or sell vulnerabilities to third parties.",
                                            "Report findings exclusively through ZeroDay Test.",
                                            "Maintain confidentiality unless written disclosure approval is granted."
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <span className="text-green-500 font-mono font-black">0{i + 1}.</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Section 4 */}
                                <div id="prohibited" className="scroll-mt-32 p-8 bg-red-950/10 border border-red-500/20 rounded-3xl">
                                    <h3 className="text-xl font-bold text-red-500 uppercase mb-6 flex items-center gap-3">
                                        <Ban size={22} /> 4. Prohibited Actions
                                    </h3>
                                    <ul className="grid md:grid-cols-2 gap-4 text-xs font-mono text-gray-500">
                                        <li className="flex gap-2"><span className="text-red-900">•</span> Perform denial-of-service attacks</li>
                                        <li className="flex gap-2"><span className="text-red-900">•</span> Access personal data beyond minimal proof</li>
                                        <li className="flex gap-2"><span className="text-red-900">•</span> Attempt social engineering unless permitted</li>
                                        <li className="flex gap-2"><span className="text-red-900">•</span> Use banned automated scanning tools</li>
                                    </ul>
                                </div>

                                {/* Section 5 & 6 */}
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div id="disclosure">
                                        <h4 className="text-white font-bold uppercase text-xs mb-3 tracking-widest border-b border-white/10 pb-2">5. Responsible Disclosure</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">Public disclosure is prohibited unless the Client provides written authorization and the coordinated disclosure timeline is completed.</p>
                                    </div>
                                    <div id="employment">
                                        <h4 className="text-white font-bold uppercase text-xs mb-3 tracking-widest border-b border-white/10 pb-2">6. No Employment Relation</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed">Participation does not create employment, partnership, or agency relationship with Zeroday Test or any Client.</p>
                                    </div>
                                </div>

                                {/* Section 7 */}
                                <div id="ownership" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4">7. Reward & Ownership</h3>
                                    <p>The Hunter retains ownership of submitted findings until reward validation. Upon reward payment, remediation rights transfer to the Client. Zeroday Test retains platform ownership rights.</p>
                                </div>

                                {/* Section 8 */}
                                <div id="breach" className="scroll-mt-32 p-8 bg-zinc-900 border border-red-500/10 rounded-3xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5">
                                        <AlertTriangle size={80} className="text-red-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-red-500 uppercase mb-4">8. Breach & Consequences</h3>
                                    <ul className="text-xs space-y-2 font-mono text-gray-400">
                                        <li>- Immediate account termination</li>
                                        <li>- Forfeiture of all pending rewards</li>
                                        <li>- Legal proceedings and criminal liability</li>
                                    </ul>
                                </div>

                                {/* Section 9 */}
                                <div id="governing" className="scroll-mt-32 pt-8 border-t border-white/5">
                                    <h4 className="text-white font-bold uppercase text-xs mb-2">9. Governing Law</h4>
                                    <p className="text-xs font-mono text-gray-600">This Agreement shall be governed by the laws of the People’s Republic of Bangladesh.</p>
                                </div>

                                {/* --- সিগনেচার এবং অ্যাপ্রুভাল এরিয়া (ছবির হুবহু ডিজাইন) --- */}
                                <div className="mt-20 pt-12 border-t border-white/10 relative">
                                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                                        <div className="bg-green-600 p-8 rounded-[2.5rem] text-black max-w-sm shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                                            <h4 className="font-black uppercase text-sm mb-4 tracking-tighter">Electronic Acceptance</h4>
                                            <p className="text-[10px] font-bold leading-relaxed mb-4">
                                                By clicking “I Agree,” you confirm that you have read and understood this Agreement and agree to be legally bound by its terms. Electronic consent constitutes a legally binding signature.
                                            </p>
                                            <div className="flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-tighter">
                                                <CheckCircle size={14} /> HUNTER_PROTOCOL_AUTHENTICATED
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
                    <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.5em]">CONFIDENTIAL DOCUMENT | ZERODAY TEST | BYTE CAPSULE IT</p>
                </div>

            </div>
        </div>
    );
}