"use client";

import React, { useState } from 'react'; // ১. useState যুক্ত
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation'; // ২. useRouter যুক্ত
import {
    ShieldCheck, FileSignature, Gavel, Ban,
    Target, CheckSquare, Fingerprint, Globe,
    Clock, AlertCircle, Terminal, Printer,
    QrCode, MapPin, Mail, Phone, Handshake,
    Zap, CheckCircle, Scale, Lock, AlertTriangle,
    Menu, X, ArrowLeft, ChevronRight // ৩. নতুন আইকন যুক্ত
} from 'lucide-react';

const sections = [
    { id: "purpose", title: "1. Purpose", icon: <Target size={16} /> },
    { id: "scope", title: "2. Scope of Auth", icon: <Globe size={16} /> },
    { id: "permitted", title: "3. Permitted Acts", icon: <CheckSquare size={16} /> },
    { id: "prohibited", title: "4. Prohibited Acts", icon: <Ban size={16} /> },
    { id: "safeharbor", title: "5. Legal Safe Harbor", icon: <Gavel size={16} /> },
    { id: "confidentiality", title: "6. Confidentiality", icon: <Fingerprint size={16} /> },
    { id: "duration", title: "7. Duration", icon: <Clock size={16} /> },
    { id: "liability", title: "8. Liability Limits", icon: <AlertCircle size={16} /> },
    { id: "governing", title: "9. Governing Law", icon: <Handshake size={16} /> },
    { id: "acceptance", title: "10. Acceptance", icon: <CheckCircle size={16} /> },
];

export default function NOCPage() {
    const handlePrint = () => window.print();
    const router = useRouter(); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black scroll-smooth">
            
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            {/* --- মোবাইল ফ্লোটিং একশন বাটন --- */}
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
                            <p className="text-[10px] font-mono text-green-500 uppercase tracking-widest mb-6">NOC_Protocol_Index</p>
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
                            <Printer size={12} /> Print_Document
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">

                    {/* --- SIDEBAR NAVIGATION (Desktop) --- */}
                    <aside className="hidden lg:block sticky top-32 space-y-2 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-900">
                        <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">NOC_Module_Index</p>
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

                    {/* --- MAIN DOCUMENT CONTENT --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-950/80 border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                        {/* Watermark Logo */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                            <ShieldCheck size={600} className="text-green-500" />
                        </div>

                        <div className="relative z-10 space-y-16">

                            {/* Document Main Title */}
                            <div className="text-center">
                                <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                                    No Objection <br />
                                    <span className="text-green-500 underline decoration-green-900">Certificate</span> (NOC)
                                </h1>
                                <p className="text-white font-mono text-xs md:text-sm uppercase tracking-[0.4em] mb-4">Authorization for Security Testing</p>
                                <div className="flex flex-col items-center gap-1 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    <p>Platform: <span className="text-white">Zeroday Test – A Platform by Byte Capsule</span></p>
                                    <p>Effective Date: <span className="text-green-900 font-bold">February 09, 2026</span></p>
                                </div>
                            </div>

                            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light text-gray-400">

                                {/* Context Block */}
                                <p className="p-8 bg-zinc-900/50 border-l-4 border-green-500 rounded-r-3xl italic">
                                    This Authorization for Security Testing (“Authorization” or “NOC”) is issued by the organization registering a program on Zeroday Test (“Client”) in favor of Zeroday Test, an asset of Byte Capsule, Dhaka, Bangladesh (“Platform Provider”). By clicking “I Agree” during program creation or activation, the Client grants formal authorization under the terms below.
                                </p>

                                {/* 1. Purpose */}
                                <div id="purpose" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">
                                        <Target className="text-green-500" /> 1. Purpose
                                    </h3>
                                    <p>This Authorization grants Zeroday Test and its approved independent security researchers (“Hunters”) permission to perform controlled security testing activities strictly within the defined scope of the Client’s program. This document serves as formal, documented consent for lawful security testing.</p>
                                </div>

                                {/* 2. Scope */}
                                <div id="scope" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">
                                        <Globe className="text-green-500" /> 2. Scope of Authorization
                                    </h3>
                                    <p className="mb-4 uppercase text-xs font-bold text-green-900 font-mono">Authorization applies only to:</p>
                                    <ul className="space-y-3 list-none pl-1">
                                        {[
                                            "Domains, subdomains, IP addresses, applications, APIs, cloud environments, or digital assets explicitly listed in the approved program scope.",
                                            "Testing activities permitted under the Client’s published program rules.",
                                            "Activities conducted in accordance with Zeroday Test Responsible Disclosure Policy."
                                        ].map((li, i) => (
                                            <li key={i} className="flex gap-4"><span className="text-green-500 font-mono">•</span> {li}</li>
                                        ))}
                                    </ul>
                                    <p className="mt-6 p-4 bg-red-950/20 border border-red-900/30 rounded-xl text-red-500 font-bold text-xs uppercase text-center">
                                        Any activity outside the defined scope is strictly unauthorized.
                                    </p>
                                </div>

                                {/* 3. Permitted Activities */}
                                <div id="permitted" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">
                                        <CheckSquare className="text-green-500" /> 3. Permitted Security Testing Activities
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4 pl-1">
                                        {[
                                            "Vulnerability assessment", "Bug Hunting within scope", "Penetration testing within scope",
                                            "Misconfiguration analysis", "Authentication and authorization testing",
                                            "Non-destructive proof-of-concept exploitation", "Security validation aligned with ethical hacking standards"
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 bg-zinc-900 border border-white/5 rounded-xl text-xs font-mono text-gray-500">
                                                <Zap size={14} className="text-green-700" /> {item}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-4 text-xs italic text-gray-600">Testing must remain controlled, ethical, and non-disruptive.</p>
                                </div>

                                {/* 4. Prohibited Activities */}
                                <div id="prohibited" className="scroll-mt-32 p-8 bg-red-950/10 border border-red-500/20 rounded-[2rem]">
                                    <h3 className="text-xl font-bold text-red-500 uppercase mb-6 flex items-center gap-3">
                                        <Ban /> 4. Prohibited Activities
                                    </h3>
                                    <p className="mb-4 text-sm font-bold opacity-80 uppercase">Unless explicitly permitted, the following are not authorized:</p>
                                    <ul className="grid md:grid-cols-2 gap-3 text-xs text-gray-500 list-none">
                                        {["Denial-of-service (DoS/DDoS) attacks", "Data destruction or alteration", "Accessing personal data beyond PoC", "Physical attacks", "Social engineering", "Testing third-party systems outside scope"].map((item, i) => (
                                            <li key={i} className="flex gap-2"><span>[!]</span> {item}</li>
                                        ))}
                                    </ul>
                                    <p className="mt-6 text-[10px] font-mono text-red-900 uppercase font-black">Activities beyond scope void this Authorization.</p>
                                </div>

                                {/* --- SECTION 5: LEGAL SAFE HARBOR --- */}
                                <div id="safeharbor" className="scroll-mt-32 space-y-8">
                                    <h3 className="text-xl font-bold text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Gavel className="text-green-500" /> 5. Legal Safe Harbor
                                    </h3>

                                    <div className="space-y-6 pl-1 leading-relaxed">
                                        <p className="text-white font-bold text-xs uppercase tracking-widest opacity-80">The Client confirms that:</p>

                                        {/* প্রধান দুটি প্রতিশ্রুতি */}
                                        <ul className="space-y-4 list-none pl-0">
                                            <li className="flex gap-4 items-start group">
                                                <div className="mt-1 p-1 bg-green-500/10 rounded border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all">
                                                    <ShieldCheck size={14} />
                                                </div>
                                                <span className="text-gray-400 text-sm md:text-base">
                                                    Zeroday Test and its authorized Hunters are permitted to conduct testing within approved scope.
                                                </span>
                                            </li>
                                            <li className="flex gap-4 items-start group">
                                                <div className="mt-1 p-1 bg-green-500/10 rounded border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all">
                                                    <ShieldCheck size={14} />
                                                </div>
                                                <span className="text-gray-400 text-sm md:text-base">
                                                    The Client will not initiate legal action against Hunters acting in good faith and within scope.
                                                </span>
                                            </li>
                                        </ul>

                                        {/* আইনি ফ্রেমওয়ার্ক বক্স */}
                                        <div className="p-8 bg-zinc-900/50 border border-green-500/10 rounded-[1rem] relative overflow-hidden group">
                                            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                                className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none"
                                            >
                                                <Scale size={300} className="text-green-500" />
                                            </motion.div>

                                            <div className="relative z-10 space-y-4">
                                                <p className="text-[10px] font-mono text-green-700 uppercase tracking-[0.3em] font-black">
                                                    Formal_Consent_Directives:
                                                </p>
                                                <p className="text-xs text-gray-500 leading-relaxed max-w-2xl font-light italic">
                                                    This Authorization constitutes formal consent under applicable cybersecurity and computer misuse laws, including:
                                                </p>

                                                <div className="flex flex-wrap gap-3 pt-2">
                                                    {[
                                                        "Bangladesh Cyber Security Act 2025",
                                                        "Digital Security Act 2018",
                                                        "ICT Act 2006",
                                                        "Applicable international cybersecurity regulations"
                                                    ].map((law, i) => (
                                                        <span key={i} className="px-4 py-2 bg-black border border-white/5 rounded-xl text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:border-green-500/40 hover:text-green-500 transition-all cursor-default">
                                                            {law}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* কড়া সতর্কবার্তা (Legal Enforcement) */}
                                        <div className="flex items-center gap-4 p-5 bg-red-950/10 border border-red-900/20 rounded-2xl relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-red-600/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 opacity-20"></div>
                                            <AlertCircle size={20} className="text-red-900 shrink-0 relative z-10" />
                                            <p className="text-[10px] md:text-xs font-mono text-red-900 uppercase font-black tracking-tighter relative z-10">
                                                Unauthorized or malicious actions remain subject to legal enforcement.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* --- SECTION 6, 7, 8: LEGAL & OPERATIONAL FRAMEWORK --- */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                                    {/* 6. Confidentiality */}
                                    <div id="confidentiality" className="scroll-mt-32 p-6 bg-zinc-950/40 border border-white/5 rounded-3xl group hover:border-green-500/20 transition-all">
                                        <h4 className="text-white font-bold uppercase text-xs mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                            <Lock size={14} className="text-green-900" /> 6. Confidentiality
                                        </h4>
                                        <div className="space-y-3">
                                            <p className="text-[11px] text-gray-500 leading-relaxed italic">
                                                All vulnerabilities, reports, and related findings:
                                            </p>
                                            <ul className="text-[10px] font-mono text-gray-600 space-y-2 list-none pl-0">
                                                <li className="flex gap-2"><span>•</span> Are confidential</li>
                                                <li className="flex gap-2"><span>•</span> Must not be publicly disclosed without coordinated approval</li>
                                                <li className="flex gap-2"><span>•</span> Are governed by Zeroday Test NDAs and Responsible Disclosure Policy</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* 7. Duration */}
                                    <div id="duration" className="scroll-mt-32 p-6 bg-zinc-950/40 border border-white/5 rounded-3xl group hover:border-green-500/20 transition-all">
                                        <h4 className="text-white font-bold uppercase text-xs mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                            <Clock size={14} className="text-green-900" /> 7. Duration
                                        </h4>
                                        <div className="space-y-3">
                                            <p className="text-[11px] text-gray-500 leading-relaxed italic">This Authorization remains valid:</p>
                                            <ul className="text-[10px] font-mono text-gray-600 space-y-2 list-none pl-0">
                                                <li className="flex gap-2"><span className="text-green-900">»</span> From the date of program activation</li>
                                                <li className="flex gap-2"><span className="text-green-900">»</span> Until the program is terminated or suspended by the Client</li>
                                                <li className="flex gap-2"><span className="text-green-900">»</span> Or until superseded by a written agreement</li>
                                            </ul>
                                            <p className="pt-2 text-[9px] font-bold text-green-900 uppercase leading-tight border-t border-white/5">
                                                Termination does not affect previously submitted vulnerability handling obligations.
                                            </p>
                                        </div>
                                    </div>

                                    {/* 8. Limitation of Liability */}
                                    <div id="liability" className="scroll-mt-32 p-6 bg-zinc-950/40 border border-white/5 rounded-3xl group hover:border-green-500/20 transition-all">
                                        <h4 className="text-white font-bold uppercase text-xs mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                                            <AlertTriangle size={14} className="text-green-900" /> 8. Limitation of Liability
                                        </h4>
                                        <div className="space-y-3">
                                            <p className="text-[11px] text-gray-500 leading-relaxed italic">The Client acknowledges:</p>
                                            <ul className="text-[10px] font-mono text-gray-600 space-y-2 list-none pl-0">
                                                <li className="flex gap-2"><span className="text-red-900">!</span> Authorized testing may involve controlled interaction with live systems.</li>
                                                <li className="flex gap-2"><span className="text-red-900">!</span> Zeroday Test and Hunters will operate professionally and within scope.</li>
                                                <li className="flex gap-2"><span className="text-red-900">!</span> The Client accepts reasonable risks inherent in authorized security testing.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* --- SECTION 9: GOVERNING LAW & DISPUTE RESOLUTION --- */}
                                <div id="governing" className="scroll-mt-32 pt-12 border-t border-white/10">
                                    <h3 className="text-xl font-black text-white uppercase mb-6 flex items-center gap-3">
                                        <Handshake className="text-green-500" /> 9. Governing Law and Dispute Resolution
                                    </h3>
                                    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 pl-1">
                                        <div className="space-y-4">
                                            <p className="text-sm text-gray-400 leading-relaxed">
                                                This Authorization is governed by the laws of the <span className="text-white font-bold">People’s Republic of Bangladesh</span>.
                                            </p>
                                            <p className="text-xs text-gray-500 leading-relaxed italic">
                                                Any dispute arising from this Authorization shall be resolved through binding international arbitration under ICC Rules:
                                            </p>
                                        </div>

                                        {/* Arbitration HUD Box */}
                                        <div className="p-6 bg-zinc-900 border border-green-500/20 rounded-2xl relative overflow-hidden group">
                                            <div className="relative z-10 space-y-3">
                                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                                    <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Seat</span>
                                                    <span className="text-xs text-white font-bold uppercase">Dhaka, Bangladesh</span>
                                                </div>
                                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                                    <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Language</span>
                                                    <span className="text-xs text-white font-bold uppercase">English</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Award</span>
                                                    <span className="text-[10px] font-mono text-green-500 font-black uppercase tracking-tighter">Final & Enforceable</span>
                                                </div>
                                            </div>
                                            {/* Background Decoration */}
                                            <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                <ShieldCheck size={80} className="text-green-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* --- SECTION 10: ELECTRONIC ACCEPTANCE & APPROVAL AREA --- */}
                                <div id="acceptance" className="mt-20 pt-16 border-t border-white/10 relative">
                                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                                        {/* Right Side: Acceptance Card (Section 10 Content) */}
                                        <div className="bg-green-600 p-8 md:p-10 rounded-[1rem] text-black max-w-sm shadow-[0_0_60px_rgba(34,197,94,0.3)] border border-green-400/50">
                                            <div className="flex items-start gap-4 mb-6">
                                                <div className="mt-1">
                                                    <div className="w-6 h-6 border-2 border-black rounded flex items-center justify-center">
                                                        <div className="w-3 h-3 bg-black rounded-sm"></div>
                                                    </div>
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="font-black uppercase text-base tracking-tighter leading-none">10. Electronic Acceptance</h4>
                                                    <p className="text-[9px] font-mono uppercase font-black opacity-60 tracking-widest">NOC_Authorization_Binding</p>
                                                </div>
                                            </div>

                                            <div className="space-y-4 text-[10px] font-bold leading-relaxed mb-6 italic">
                                                <p>By clicking “I Agree” during program activation, the Client:</p>
                                                <ul className="space-y-2 list-none pl-0">
                                                    <li className="flex gap-2"><span>•</span> Confirms authority to legally represent the organization.</li>
                                                    <li className="flex gap-2"><span>•</span> Grants formal permission for security testing within defined scope.</li>
                                                    <li className="flex gap-2"><span>•</span> Accepts that electronic consent constitutes a legally binding NOC.</li>
                                                </ul>
                                                <div className="pt-2 border-t border-black/10">
                                                    "I confirm that I am authorized to represent my organization and I grant Zeroday Test permission to conduct testing within defined scope."
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-tighter border-t border-black/10 pt-4">
                                                <ShieldCheck size={14} /> NOC_AUTHENTICATED_0x9AF2
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
                    <p className="text-gray-200 font-mono text-[9px] uppercase tracking-[0.5em]">ZERODAY TEST | NOC AUTHORIZATION FRAMEWORK | BYTE CAPSULE IT | 0x9AF2</p>
                    <p className="text-[9px] font-mono text-gray-800 uppercase tracking-widest mt-2 font-bold">STAY SAFE, STAY SECURE</p>
                </div>

            </div>
        </div>
    );
}