"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation'; // ব্যাক বাটনের জন্য
import {
    ShieldCheck, Terminal, FileSignature, Target,
    Layers, Zap, Users, BarChart3, Gavel,
    Database, History, Printer, QrCode, MapPin,
    Mail, Phone, Globe, CheckCircle2, AlertCircle,
    TrendingUp, Settings, Briefcase, Lock,
    Wallet,
    Search,
    Rocket,
    AlertTriangle,
    ShieldAlert,
    Fingerprint,
    Scale,
    Info,
    Building,
    Handshake,
    Cpu,
    Menu, // মেনু আইকন
    X,    // ক্লোজ আইকন
    ArrowLeft, // ব্যাক আইকন
    ChevronRight
} from 'lucide-react';

const sopSections = [
    { id: "purpose", title: "1. Purpose & Scope", icon: <Target size={16} /> },
    { id: "overview", title: "2. Platform Overview", icon: <Layers size={16} /> },
    { id: "tier1", title: "3. Tier 1 - Cyber Care", icon: <Zap size={16} /> },
    { id: "tier2", title: "4. Tier 2 - VDP", icon: <ShieldCheck size={16} /> },
    { id: "tier3", title: "5. Tier 3 - Bug Bounty", icon: <Trophy size={16} /> },
    { id: "community", title: "6. Hunter Management", icon: <Users size={16} /> },
    { id: "sla", title: "7. Service SLAs", icon: <Clock size={16} /> },
    { id: "legal", title: "8. Legal & Ethics", icon: <Gavel size={16} /> },
    { id: "revenue", title: "9. Revenue Model", icon: <TrendingUp size={16} /> },
    { id: "roles", title: "10. Roles & Responsibilities", icon: <Briefcase size={16} /> },
];

export default function SOPPage() {
    const handlePrint = () => window.print();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // মোবাইল মেনু কন্ট্রোল

    const Trophy = ({ size, className }: { size: number, className?: string }) => <Zap size={size} className={className} />;
    const Clock = ({ size, className }: { size: number, className?: string }) => <History size={size} className={className} />;

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">

            {/* --- মোবাইল ফ্লোটিং একশন বাটনসমূহ (lg:hidden) --- */}
            <div className="lg:hidden fixed bottom-8 right-6 z-[100] flex flex-col gap-4">
                
                {/* ১. ব্যাক বাটন */}
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => router.back()}
                    className="w-12 h-12 bg-zinc-900 border border-white/10 text-white rounded-full flex items-center justify-center shadow-2xl backdrop-blur-md"
                >
                    <ArrowLeft size={20} />
                </motion.button>

                {/* ২. মেনু টগল বাটন */}
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

            {/* --- মোবাইল মেনু ড্রয়ার (AnimatePresence) --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* ব্লার ওভারলে */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
                        />

                        {/* মেনু কার্ড */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="lg:hidden fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-zinc-950 border-l border-green-500/20 z-[95] p-6 shadow-2xl flex flex-col"
                        >
                            <div className="mb-8 mt-10">
                                <p className="text-[10px] font-mono text-green-900 uppercase tracking-[0.4em] mb-2">Tactical_Nav</p>
                                <h4 className="text-white font-black uppercase text-lg border-b border-white/5 pb-2">SOP Index</h4>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-2 scrollbar-none">
                                {sopSections.map((item) => (
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

                            <div className="mt-6 pt-6 border-t border-white/5 text-[9px] font-mono text-gray-700 text-center uppercase tracking-widest">
                                Zeroday_Manual_v1.0
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Background Decor */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">

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
                    <div className="flex flex-col items-center gap-3">
                        <div className="p-3 bg-white rounded-xl">
                            <QrCode size={70} className="text-black" />
                        </div>
                        <button onClick={handlePrint} className="flex items-center gap-2 text-[10px] font-mono text-green-500 hover:text-white transition-colors uppercase tracking-widest">
                            <Printer size={12} /> PRINT_FULL_SOP
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">

                    {/* --- SIDEBAR NAVIGATION (Desktop) --- */}
                    <aside className="hidden lg:block sticky top-32 space-y-2 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-900">
                        <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Operational_Manual</p>
                        {sopSections.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group">
                                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                                <span className="text-[11px] font-bold uppercase tracking-tight">{item.title}</span>
                            </a>
                        ))}
                    </aside>

                    {/* --- MAIN DOCUMENT CONTENT --- */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-950/80 border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative">
                        <div className="relative z-10 space-y-24">

                            {/* --- 00 TITLE PAGE MOCKUP --- */}
                            <div className="text-center space-y-8 py-10 border-b border-white/5 relative overflow-hidden">
                                {/* Background Glow for Title */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-red-500/5 blur-[100px] -z-10"></div>

                                {/* Main Titles */}
                                <div className="space-y-2">
                                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight">ZeroDay Test</h1>
                                    <p className="text-gray-400 font-mono text-xs md:text-sm tracking-[0.4em] uppercase">Bug Hunting & Vulnerability Disclosure Platform</p>
                                </div>

                                {/* SOP Highlight Box */}
                                <div className="py-4 px-8 bg-zinc-900 border-y border-red-500/50 inline-block">
                                    <h2 className="text-red-500 font-black text-xl md:text-2xl uppercase tracking-widest animate-pulse">STANDARD OPERATING PROCEDURE (SOP)</h2>
                                </div>

                                <p className="text-white font-bold tracking-widest uppercase text-xs">Securing the Cyber Space of Bangladesh</p>

                                {/* --- FULL DOCUMENT DATA GRID (৮টি পয়েন্টই এখানে দেওয়া হয়েছে) --- */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-[10px] font-mono text-gray-500 uppercase text-left border border-white/10 p-8 rounded-[2.5rem] bg-zinc-950/50 backdrop-blur-sm">

                                    {/* Row 1 */}
                                    <div className="space-y-1 border-l border-white/5 pl-4">
                                        <p className="text-green-900 font-black">Document Ref:</p>
                                        <p className="text-white">BC-ZDT-SOP-2026-001</p>
                                    </div>
                                    <div className="space-y-1 border-l border-white/5 pl-4">
                                        <p className="text-green-900 font-black">Version:</p>
                                        <p className="text-white">1.0</p>
                                    </div>
                                    <div className="space-y-1 border-l border-white/5 pl-4">
                                        <p className="text-green-900 font-black">Issued By:</p>
                                        <p className="text-white uppercase">Byte Capsule</p>
                                    </div>
                                    <div className="space-y-1 border-l border-white/5 pl-4">
                                        <p className="text-green-900 font-black">Effective Date:</p>
                                        <p className="text-white">23/02/2026</p>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="space-y-1 border-l border-white/5 pl-4 md:mt-4">
                                        <p className="text-green-900 font-black">Campaign:</p>
                                        <p className="text-blue-500">Cyber Care</p>
                                    </div>
                                    <div className="space-y-1 border-l border-white/5 pl-4 md:mt-4">
                                        <p className="text-green-900 font-black">Classification:</p>
                                        <p className="text-red-500">Internal – Confidential</p>
                                    </div>
                                    <div className="space-y-1 border-l border-white/5 pl-4 md:mt-4">
                                        <p className="text-green-900 font-black">Department:</p>
                                        <p className="text-white">Off Sec (Offensive Security)</p>
                                    </div>
                                    <div className="space-y-1 border-l border-white/5 pl-4 md:mt-4">
                                        <p className="text-green-900 font-black">Contract:</p>
                                        <p className="text-white lowercase">pentest@bytecapsuleit.com</p>
                                    </div>

                                </div>

                                {/* Subtle Bottom Metadata */}
                                <div className="pt-6 flex justify-center gap-10 opacity-20 text-[8px] font-mono uppercase tracking-[0.5em]">
                                    <span>Authenticity: Verified</span>
                                    <span>Integrity: Secured</span>
                                </div>
                            </div>

                            {/* --- SECTION 1: PURPOSE & SCOPE --- */}
                            <section id="purpose" className="scroll-mt-32 space-y-8">
                                <h3 className="text-xl font-black bg-zinc-900 text-white px-6 py-3 border-l-4 border-blue-800 uppercase flex items-center justify-between">
                                    <span>01 PURPOSE & SCOPE</span>
                                    <span className="text-[10px] font-mono text-gray-600">MOD_01</span>
                                </h3>
                                <div className="pl-4 space-y-8">
                                    <div>
                                        <h4 className="text-white font-bold mb-4">1.1 Purpose</h4>
                                        <p className="text-sm font-light leading-relaxed">This Standard Operating Procedure (SOP) defines the end-to-end operational framework for <span className="text-white font-bold">ZeroDay Test</span> — Bangladesh’s dedicated bug hunting and vulnerability disclosure platform, operated by Byte Capsule IT. The document establishes standardized processes, responsibilities, and quality benchmarks to ensure consistent, transparent, and legally compliant security operations across all client engagements.</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-4">1.2 Scope</h4>
                                        <p className="text-sm mb-4">This SOP applies to all operational activities of the <span className="text-white font-bold">ZeroDay Test</span> platform, including:</p>
                                        <ul className="grid md:grid-cols-2 gap-4 list-none text-xs text-gray-400 font-light">
                                            {[
                                                "Client onboarding through the Cyber Care campaign",
                                                "Vulnerability Disclosure Program (VDP) management",
                                                "Bug Bounty Program (BBP) setup and financial settlement",
                                                "Hunter community management and report triage",
                                                "Communication protocols between Byte Capsule and clients",
                                                "Revenue operations and subscription billing"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3"><span className="text-green-900">•</span> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-8 bg-zinc-900/50 border border-green-500/20 rounded-[2.5rem] italic text-center">
                                        <p className="text-xs md:text-sm text-gray-400">"To proactively identify and eliminate cyber vulnerabilities across Bangladesh's public and private digital infrastructure by bridging the gap between ethical security researchers (hunters) and organizations — building a safer, more resilient cyberspace for the nation."</p>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 2: PLATFORM OVERVIEW --- */}
                            <section id="overview" className="scroll-mt-32 space-y-8">
                                <h3 className="text-xl font-black bg-zinc-900 text-white px-6 py-3 border-l-4 border-red-800 uppercase flex items-center justify-between">
                                    <span>02 PLATFORM OVERVIEW — ZERODAY TEST</span>
                                    <span className="text-[10px] font-mono text-gray-600">MOD_02</span>
                                </h3>
                                <div className="pl-4 space-y-10">
                                    <p className="text-sm">ZeroDay Test is a structured cybersecurity platform built and operated by Byte Capsule IT. It bridges two groups:</p>
                                    <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                                        <div className="bg-zinc-900 p-8">
                                            <h5 className="text-blue-500 font-bold uppercase text-xs mb-4 tracking-widest border-b border-blue-900/30 pb-2">Clients</h5>
                                            <p className="text-xs text-gray-500">Government agencies, public sector bodies, private corporations, financial institutions, startups, and any organization with a digital presence in Bangladesh.</p>
                                        </div>
                                        <div className="bg-zinc-900 p-8">
                                            <h5 className="text-red-500 font-bold uppercase text-xs mb-4 tracking-widest border-b border-red-900/30 pb-2">Hunters</h5>
                                            <p className="text-xs text-gray-500">Vetted ethical hackers, cybersecurity researchers, and bug bounty hunters operating within defined legal and ethical boundaries set by Byte Capsule.</p>
                                        </div>
                                    </div>

                                    {/* 2.1 Three-Tier Service Model */}
                                    <div className="space-y-6">
                                        <h4 className="text-center text-white font-bold uppercase text-sm tracking-widest">2.1 Three-Tier Service Model</h4>
                                        <div className="overflow-x-auto rounded-3xl border border-white/5 pl-4">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-zinc-900 text-green-700 font-mono text-[10px] uppercase">
                                                        <th className="p-5 border-b border-white/5">TIER</th>
                                                        <th className="p-5 border-b border-white/5">SERVICE</th>
                                                        <th className="p-5 border-b border-white/5">DESCRIPTION</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs font-light text-gray-400">
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 font-bold text-white">Tier 1</td>
                                                        <td className="p-5 text-blue-500 font-bold">Cyber Care (Free Pentest)</td>
                                                        <td className="p-5">Entry-level engagement via campaign. Free penetration testing with no subscription required.</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 font-bold text-white">Tier 2</td>
                                                        <td className="p-5 text-green-500 font-bold">VDP Program (Subscription)</td>
                                                        <td className="p-5">Structured Vulnerability Disclosure Program. Monthly subscription-based. No hunter payment obligation.</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 font-bold text-white">Tier 3</td>
                                                        <td className="p-5 text-red-500 font-bold">Bug Bounty Program (Pay-per-bug)</td>
                                                        <td className="p-5">Advanced program with financial incentives. Client pays bounties per valid bug. ZeroDay Test charges 15% platform fee.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 3: TIER 1 - CYBER CARE --- */}
                            <section id="tier1" className="scroll-mt-32 space-y-10">
                                <h3 className="text-xl font-black bg-zinc-900 text-white px-6 py-3 border-l-4 border-blue-500 uppercase flex items-center justify-between">
                                    <span>03 TIER 1 — CYBER CARE CAMPAIGN</span>
                                    <span className="text-[10px] font-mono text-gray-600">MOD_03</span>
                                </h3>
                                <div className="pl-4 space-y-10">
                                    <p className="text-sm italic">The Cyber Care campaign (cybercare.bytecapsuleit.com) serves as the primary client acquisition channel for <span className='font-bold'>ZeroDay Test</span> It provides free penetration testing services to organizations across Bangladesh — public, private, and government — demonstrating value and creating a pathway to the <span className='font-bold'>ZeroDay Test</span> platform. </p>

                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <h4 className="text-white font-bold text-xs uppercase tracking-widest">3.1 Campaign Objectives</h4>
                                            <ul className="space-y-2 text-xs text-gray-500 list-none">
                                                {["Build awareness of ZeroDay Test among organizations", "Deliver genuine, actionable security value through free pentesting", "Generate a qualified pipeline of clients for VDP and Bug Bounty", "Establish Byte Capsule’s credibility as trusted partner"].map((obj, i) => (
                                                    <li key={i} className="flex gap-3"><span>•</span> {obj}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-white font-bold text-xs uppercase tracking-widest">3.2 Eligible Organizations</h4>
                                            <ul className="space-y-2 text-xs text-gray-500 list-none italic">
                                                {["Government websites and portals (.gov.bd)", "Public sector agencies and municipalities", "Private sector companies (Corporations, SMEs, Startups)", "Financial institutions, e-commerce, NGOs", "Any BD organization with public web presence"].map((org, i) => (
                                                    <li key={i} className="flex gap-3"><span>&gt;</span> {org}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* 3.3 Steps Table */}
                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold uppercase text-center text-xs tracking-widest">3.3 Cyber Care Pentest — Standard Operating Steps</h4>
                                        <div className="space-y-4">
                                            {[
                                                { s: "Step 1", t: "Client Identification & Outreach", d: "Byte Capsule's team identifies target organizations through research, referrals, or inbound inquiries via the Cyber Care campaign portal. " },
                                                { s: "Step 2", t: "Initial Contact & Consent", d: "A formal outreach communication is sent explaining the Cyber Care campaign, scope, and intent. Written consent is obtained before any testing begins." },
                                                { s: "Step 3", t: "Scope Definition", d: "A scoping call/meeting is held to define which assets (websites, APIs, subdomains) are in scope. A Scope Agreement Document is signed. " },
                                                { s: "Step 4", t: "Penetration Testing Execution", d: "Byte Capsule's authorized pentesters conduct OWASP Top 10 aligned testing, identifying vulnerabilities within the agreed scope. " },
                                                { s: "Step 5", t: "Report Generation", d: "A structured vulnerability report is prepared: Executive Summary, Finding Details (with severity ratings), CVSS scores, PoC, and Remediation Recommendations. " },
                                                { s: "Step 6", t: "Report Delivery & Debrief", d: "The report is delivered with a debrief session explaining findings, risks, and remediation steps." },
                                                { s: "Step 7", t: "Proposal & Pathway", d: " A formal proposal is presented offering enrollment into ZeroDay Test VDP or Bug Bounty Program for ongoing security coverage. " }
                                            ].map((step, i) => (
                                                <div key={i} className="flex flex-col md:flex-row bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden group">
                                                    <div className="bg-blue-900 p-4 md:w-24 flex items-center justify-center font-black text-black text-xs uppercase">{step.s}</div>
                                                    <div className="p-5 flex-1">
                                                        <h5 className="text-white font-bold text-xs uppercase mb-1">{step.t}</h5>
                                                        <p className="text-[11px] text-gray-500">{step.d}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">3.4 Key Documents Required (Cyber Care) </h3>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex gap-3">• Cyber Care Engagement Letter (signed by client) Or Registration Complete through the <span className='font-bold'>Cyber Care Digital Form</span> </li>
                                            <li className="flex gap-3">• Scope Agreement Document </li>
                                            <li className="flex gap-3">• Non-Disclosure Agreement (NDA) — mutual </li>
                                            <li className="flex gap-3">• Penetration Test Report (delivered post-assessment)  </li>
                                            <li className="flex gap-3">• <span className='font-bold'>ZeroDay Test</span> Platform Proposal Document</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 4: TIER 2 - VDP --- */}
                            <section id="tier2" className="scroll-mt-32 space-y-10">
                                <h3 className="text-xl font-black bg-zinc-900 text-white px-6 py-3 border-l-4 border-green-500 uppercase flex items-center justify-between">
                                    <span>04 TIER 2 — VULNERABILITY DISCLOSURE PROGRAM (VDP)</span>
                                    <span className="text-[10px] font-mono text-gray-600">MOD_04</span>
                                </h3>
                                <div className="pl-4 space-y-12">
                                    <p className="text-sm leading-relaxed">The VDP is a structured, subscription-based program hosted on ZeroDay Test. It provides a formal channel for vetted researchers (hunters) to responsibly disclose vulnerabilities. Unlike Bug Bounty, VDP does not require client payment to hunters — making it an affordable entry point for structured, ongoing security monitoring. .</p>
                                    {/* 41 */}
                                    <div>
                                        <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">4.1 VDP Program Structure  </h3>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex gap-3">• First month: FREE for all clients onboarded through Cyber Care.</li>
                                            <li className="flex gap-3">• Subsequent months: Subscription fee based on company size (see Fee Table below) </li>
                                            <li className="flex gap-3">• No hunter payment obligation — hunters contribute on goodwill / reputation basis  </li>
                                            <li className="flex gap-3">• Byte Capsule manages hunter submissions, triages reports, and communicates with clients </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest">4.2 Subscription Fee Structure</h4>
                                        <div className="overflow-x-auto rounded-3xl border border-white/5">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-zinc-900 text-green-700 font-mono text-[10px] uppercase">
                                                        <th className="p-5 border-b border-white/5">CLIENT CATEGORY</th>
                                                        <th className="p-5 border-b border-white/5">MONTHLY FEE</th>
                                                        <th className="p-5 border-b border-white/5">REMARKS</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs font-light">
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-white font-bold">SME / Startup (Small Companies)</td>
                                                        <td className="p-5 text-red-500 font-black">BDT 10,000 / Month</td>
                                                        <td className="p-5 text-gray-500">Companies with limited digital presence, early-stage startups, small organizations with fewer customers </td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-white font-bold">Mid-size Companies</td>
                                                        <td className="p-5 text-red-500 font-black">BDT 15,000 / Month</td>
                                                        <td className="p-5 text-gray-500">Medium-sized companies with moderate web presence and customer base </td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-white font-bold">Large / Enterprise (Big & Giant)</td>
                                                        <td className="p-5 text-red-500 font-black">BDT 20,000 – 25,000 / Month</td>
                                                        <td className="p-5 text-gray-500">Large corporations, major financial institutions, enterprise level organizations with extensive digital assets </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="p-6 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl">
                                            <p className="text-[10px] text-blue-400 font-mono uppercase tracking-widest mb-1">NOTE:</p>
                                            <p className="text-xs text-gray-400">Clients who upgrade to the Bug Bounty Program are NOT required to maintain a VDP subscription. Bug Bounty clients operate on a pay-per-valid-bug model only, with the 15% <span className='font-bold'>ZeroDay Test</span> platform commission. </p>
                                        </div>
                                    </div>

                                    {/* VDP Onboarding 4.3*/}
                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest text-center">4.3 VDP Onboarding Process</h4>
                                        <div className="grid gap-3">
                                            {[
                                                "Proposal Acceptance — Client formally accepts the ZeroDay Test VDP proposal. A VDP Participation Agreement is signed.",
                                                "Asset Registration — Client declares all in-scope assets (domains, subdomains, APIs) to be listed on ZeroDay Test. Out-of-scope assets are also clearly defined.",
                                                "Program Listing — ZeroDay Test team creates the client's VDP program page with defined scope, rules of engagement, disclosure policy, and contact information.",
                                                "First Month Free Activation — Client's VDP program goes live. First 30 days are completely free. Hunters begin reviewing in-scope assets.",
                                                "Hunter Submission Management — Hunters submit vulnerability reports through the platform. Byte Capsule's triage team reviews each submission for validity, severity, and duplication.",
                                                "Client Notification & Reporting — Valid reports are forwarded to the client's security or IT team with full details: description, PoC, CVSS score, and remediation guidance.",
                                                "Monthly Review & Billing — At end of month 1 (free), client is presented with subscription options. Billing commences from month 2 per the applicable tier.",
                                                "Ongoing Program Management — Byte Capsule continues managing hunter submissions, monthly reporting, and quarterly program health reviews."
                                            ].map((step, i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 bg-zinc-900 border border-white/5 rounded-2xl group hover:border-green-500/20 transition-all">
                                                    <span className="text-[10px] font-mono text-green-900 group-hover:text-green-500">STEP_0{i + 1}</span>
                                                    <p className="text-xs text-gray-500 group-hover:text-gray-300">{step}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">4.4 VDP Report Triage Standards</h3>
                                        <ul className="space-y-3 text-sm">
                                            <li className="flex gap-3">• Reproducibility: The vulnerability must be consistently reproducible using the provided PoC</li>
                                            <li className="flex gap-3">• Scope Compliance: The affected asset must be within the defined program scope </li>
                                            <li className="flex gap-3">• Validity: The finding must represent a genuine security risk (not informational or out of-context) </li>
                                            <li className="flex gap-3">• Severity Assessment: CVSS v3.1 scoring applied — Critical, High, Medium, Low, or Informational </li>
                                            <li className="flex gap-3">• Duplication Check: Duplicate reports are flagged and the original hunter is credited </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 5: TIER 3 - BUG BOUNTY --- */}
                            <section id="tier3" className="scroll-mt-32 space-y-10">
                                <h3 className="text-xl font-black bg-zinc-900 text-white px-6 py-3 border-l-4 border-red-600 uppercase flex items-center justify-between">
                                    <span>05 TIER 3 — BUG BOUNTY PROGRAM (BBP)</span>
                                    <span className="text-[10px] font-mono text-gray-600">MOD_05</span>
                                </h3>
                                <div className="pl-4 space-y-12">
                                    <p className="text-sm">The Bug Bounty Program is the most advanced service tier on ZeroDay Test. Clients offer financial rewards (bounties) to hunters for valid, in-scope vulnerability reports. Bounty amounts are determined by severity, with ranges set by ZeroDay Test at program setup. Byte Capsule charges a 15% platform commission on all bounties paid. </p>

                                    {/* --- SECTION 5.1: VDP VS BUG BOUNTY COMPARISON (বাদ পড়া অংশ) --- */}
                                    <div className="space-y-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                                            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">5.1 VDP vs Bug Bounty — Key Distinctions</h4>
                                        </div>

                                        <div className="relative group">
                                            {/* মেইন কম্পারিশন গ্রিড */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">

                                                {/* --- LEFT SIDE: VDP (The Standard Node) --- */}
                                                <div className="bg-zinc-950 p-8 md:p-12 relative overflow-hidden group/vdp">
                                                    <div className="absolute top-0 left-0 w-1 h-full bg-green-500 opacity-20"></div>
                                                    <div className="flex items-center gap-4 mb-10">
                                                        <div className="p-3 bg-green-500/10 text-green-500 rounded-xl">
                                                            <ShieldCheck size={24} />
                                                        </div>
                                                        <h5 className="text-3xl font-black text-white uppercase tracking-tighter">VDP</h5>
                                                    </div>

                                                    <ul className="space-y-6">
                                                        {[
                                                            { t: "Subscription", d: "Monthly subscription fee applies" },
                                                            { t: "Reward", d: "No financial reward for hunters" },
                                                            { t: "Target", d: "Best for entry-level security coverage" },
                                                            { t: "Motivation", d: "Hunters contribute voluntarily" },
                                                            { t: "Commission", d: "No platform commission" }
                                                        ].map((item, i) => (
                                                            <li key={i} className="space-y-1">
                                                                <p className="text-[10px] font-mono text-green-900 uppercase tracking-widest">{item.t}</p>
                                                                <p className="text-sm text-gray-400 font-light group-hover/vdp:text-gray-200 transition-colors italic">
                                                                    &gt; {item.d}
                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* --- RIGHT SIDE: BUG BOUNTY (The Offensive Node) --- */}
                                                <div className="bg-zinc-950 p-8 md:p-12 relative overflow-hidden group/bbp">
                                                    <div className="absolute top-0 right-0 w-1 h-full bg-red-500 opacity-20"></div>
                                                    <div className="flex items-center gap-4 mb-10">
                                                        <div className="p-3 bg-red-500/10 text-red-500 rounded-xl">
                                                            <Zap size={24} />
                                                        </div>
                                                        <h5 className="text-3xl font-black text-white uppercase tracking-tighter">BUG BOUNTY</h5>
                                                    </div>

                                                    <ul className="space-y-6">
                                                        {[
                                                            { t: "Subscription", d: "No monthly subscription — pay per bug only" },
                                                            { t: "Reward", d: "Hunters receive financial bounties for valid reports" },
                                                            { t: "Target", d: "Best for aggressive, motivated security testing" },
                                                            { t: "Motivation", d: "Hunters are financially motivated — higher engagement" },
                                                            { t: "Commission", d: "15% platform commission on each bounties paid" }
                                                        ].map((item, i) => (
                                                            <li key={i} className="space-y-1">
                                                                <p className="text-[10px] font-mono text-red-900 uppercase tracking-widest">{item.t}</p>
                                                                <p className="text-sm text-gray-400 font-light group-hover/bbp:text-gray-200 transition-colors italic">
                                                                    [!] {item.d}
                                                                </p>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* "VS" Center Badge (ডেস্কটপে মাঝখানে ভাসবে) */}
                                                <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black border border-white/10 rounded-full items-center justify-center z-20 shadow-[0_0_30px_rgba(0,0,0,1)]">
                                                    <span className="text-gray-500 font-black italic text-xl tracking-tighter">VS</span>
                                                </div>
                                            </div>

                                            {/* Tactical Footnote */}
                                            <div className="mt-6 flex justify-between items-center px-4">
                                                <div className="flex gap-1">
                                                    {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-green-900 rounded-full"></div>)}
                                                </div>
                                                <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.4em]">Comparison_Protocol_Active</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 5.2 */}
                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest">5.2 Severity-Based Bounty Range (Estimated)</h4>
                                        <p>At Bug Bounty program setup, ZeroDay Test defines estimated bounty ranges per severity level, agreed with the client and published on the program page. </p>
                                        <div className="overflow-x-auto rounded-3xl border border-white/5">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-zinc-900 text-red-700 font-mono text-[10px] uppercase">
                                                        <th className="p-5 border-b border-white/5">SEVERITY</th>
                                                        <th className="p-5 border-b border-white/5">CVSS</th>
                                                        <th className="p-5 border-b border-white/5">BOUNTY RANGE (BDT)</th>
                                                        <th className="p-5 border-b border-white/5">EXAMPLE VULNS</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs font-light">
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-red-600 font-black">CRITICAL</td>
                                                        <td className="p-5 font-mono text-gray-500">9.0–10.0</td>
                                                        <td className="p-5 text-white font-bold">BDT 50,000 – 1,00,000+</td>
                                                        <td className="p-5 text-gray-600 italic">Remote Code Execution, SQL Injection (full DB), Authentication Bypass </td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-orange-500 font-black">HIGH</td>
                                                        <td className="p-5 font-mono text-gray-500">7.0–8.9</td>
                                                        <td className="p-5 text-white font-bold">BDT 15,000 – 50,000</td>
                                                        <td className="p-5 text-gray-600 italic">Stored XSS, IDOR (sensitive data), SSRF, Privilege Escalation </td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-yellow-500 font-black">MEDIUM</td>
                                                        <td className="p-5 font-mono text-gray-500">4.0–6.9</td>
                                                        <td className="p-5 text-white font-bold">5,000 – 15,000</td>
                                                        <td className="p-5 text-gray-600 italic">Reflected XSS, CSRF, Open Redirect, Information Disclosure </td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-blue-500 font-black">LOW</td>
                                                        <td className="p-5 font-mono text-gray-500">0.1–3.9</td>
                                                        <td className="p-5 text-white font-bold">BDT 1,000 – 5,000</td>
                                                        <td className="p-5 text-gray-600 italic">Open Redirect (Non-OAuth, Non-Chained), Zone Transfer </td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-blue-500 font-black">INFO </td>
                                                        <td className="p-5 font-mono text-gray-500">N/A </td>
                                                        <td className="p-5 text-white font-bold">N/A</td>
                                                        <td className="p-5 text-gray-600 italic">Best practice gaps, non exploitable misconfigurations</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* --- SECTION 5.3: BUG BOUNTY SETUP & COMMISSION --- */}
                                <div className="space-y-16 mt-16">

                                    {/* --- PLATFORM COMMISSION HIGHLIGHT --- */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        className="p-8 bg-red-950/10 border border-red-500/20 rounded-[2.5rem] relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <TrendingUp size={100} className="text-red-500" />
                                        </div>
                                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                            <div className="w-20 h-20 bg-red-500 text-black rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                                                <Zap size={40} fill="currentColor" />
                                            </div>
                                            <div className="space-y-3 text-center md:text-left">
                                                <h4 className="text-red-500 font-black uppercase text-sm tracking-[0.3em]">Platform Commission Node</h4>
                                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                    ZeroDay Test charges <span className="text-white font-bold">15%</span> of every bounty paid by the client.
                                                </p>
                                                <div className="p-4 bg-black/40 rounded-xl border border-white/5 inline-block">
                                                    <p className="text-[11px] font-mono text-gray-500 uppercase">
                                                        <span className="text-green-500">Example:</span> BDT 50,000 (High Bug) ➔ <span className="text-red-500">BDT 7,500</span> (ZDT Fee) + <span className="text-green-500">BDT 42,500</span> (Hunter Pay)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* --- 5.3 SETUP PROCESS GRID --- */}
                                    <div className="space-y-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">5.3 Bug Bounty Program Setup Process</h4>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {[
                                                { s: "Step 1", t: "Client Referral", d: "VDP clients are formally referred or may directly request enrollment after Cyber Care.", i: <Users /> },
                                                { s: "Step 2", t: "Requirements Gathering", d: "Detailed scoping: assets, rules, bounty ranges, duration, and total budget definition.", i: <Target /> },
                                                { s: "Step 3", t: "Legal & Financial", d: "Agreement signed: terms, liability, payment obligations, and 15% commission structure.", i: <FileSignature /> },
                                                { s: "Step 4", t: "Bounty Configuration", d: "Admins configure estimated bounty ranges per severity, visible to all hunters.", i: <Settings /> },
                                                { s: "Step 5", t: "Program Launch", d: "BBP goes live. Community notified via dashboard and email. Targeted specialist reach.", i: <Rocket /> },
                                                { s: "Step 6", t: "Submission & Triage", d: "Hunters submit reports. Triage team reviews within SLA and escalates valid findings.", i: <Search /> },
                                                { s: "Step 7", t: "Bounty Approval", d: "Client confirms validity and severity. Upon approval, final bounty amount is locked.", i: <CheckCircle2 /> },
                                                { s: "Step 8", t: "Payment Processing", d: "Client transfers funds. ZDT deducts 15% and disburses 85% to the hunter's account.", i: <Wallet /> },
                                                { s: "Step 9", t: "Closure & Archive", d: "Vulnerability marked resolved. Documentation archived. Hunter reputation updated.", i: <History /> }
                                            ].map((step, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.05 }}
                                                    className="group bg-zinc-950 border border-white/5 p-8 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500 relative overflow-hidden"
                                                >
                                                    {/* Step Number Tag */}
                                                    <div className="absolute top-0 right-0 px-4 py-1 bg-white/5 text-[9px] font-mono text-gray-600 uppercase tracking-widest rounded-bl-xl group-hover:bg-green-500 group-hover:text-black transition-all">
                                                        {step.s}
                                                    </div>

                                                    <div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                                                        {React.cloneElement(step.i as React.ReactElement<any>, { size: 20 })}
                                                    </div>

                                                    <h5 className="text-white font-bold text-sm uppercase mb-3 tracking-tight group-hover:text-green-400 transition-colors">
                                                        {step.t}
                                                    </h5>
                                                    <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-3 group-hover:text-gray-300 transition-colors">
                                                        {step.d}
                                                    </p>

                                                    {/* Connecting Line Decoration */}
                                                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-green-500/20 group-hover:w-full transition-all duration-700"></div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Section 5.3 Tactical Meta-data */}
                                    <div className="p-4 bg-zinc-900/10 border border-white/5 rounded-xl flex items-center justify-between opacity-30">
                                        <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.4em]">Setup_Pipeline_Authorized</p>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-green-900 rounded-full"></div>)}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 06: HUNTER COMMUNITY MANAGEMENT --- */}
                            <section id="community" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Users className="text-green-500" /> 06. Hunter Community Management
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-4xl italic pl-4">
                                        The effectiveness of ZeroDay Test depends on the quality, ethics, and engagement of its hunter community. Byte Capsule maintains a rigorous hunter onboarding, verification, and management process.
                                    </p>
                                </div>

                                {/* 6.1 Hunter Onboarding & Verification - Security ID Style */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        6.1 Hunter Onboarding & Verification
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { t: "Identity Verification", d: "Mandatory registration with NID / Passport.", i: <Fingerprint /> },
                                                { t: "Background Check", d: "Comprehensive form covering skills and intent.", i: <Search /> },
                                                { t: "Legal Binding", d: "Agreement to Code of Conduct & Disclosure Policy.", i: <FileSignature /> },
                                                { t: "Fast-Track Protocol", d: "Priority for OSCP, CEH, or top bug bounty reps.", i: <Zap /> }
                                            ].map((item, i) => (
                                                <div key={i} className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-green-500/20 transition-all">
                                                    <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:text-black transition-all">
                                                        {React.cloneElement(item.i as React.ReactElement<any>, { size: 18 })}
                                                    </div>
                                                    <div>
                                                        <h5 className="text-white font-bold text-xs uppercase tracking-tight">{item.t}</h5>
                                                        <p className="text-[11px] text-gray-500">{item.d}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Probationary Period Highlight */}
                                        <div className="p-8 bg-zinc-950 border border-yellow-500/20 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-center">
                                            <div className="absolute top-0 right-0 p-4 opacity-5">
                                                <ShieldAlert size={80} className="text-yellow-500" />
                                            </div>
                                            <h5 className="text-yellow-500 font-black uppercase text-xs mb-4 tracking-widest flex items-center gap-2">
                                                <Clock size={14} /> Probationary Phase
                                            </h5>
                                            <p className="text-xs text-gray-400 leading-relaxed italic">
                                                New hunters undergo a mandatory probationary period where the <span className="text-white font-bold">first 3 submissions</span> are reviewed with heightened scrutiny to ensure quality.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 6.2 Hunter Code of Conduct - Rules List */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-red-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                                        6.2 Hunter Code of Conduct
                                    </h4>

                                    <div className="bg-[#050505] border border-white/5 rounded-[3rem] p-8 md:p-12 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-10 opacity-[0.02]">
                                            <Gavel size={200} className="text-white" />
                                        </div>

                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                                            {[
                                                { t: "Scope Integrity", d: "Test ONLY within defined program scope. Out-of-scope = Disqualification." },
                                                { t: "Minimal Exploit", d: "Never exploit beyond what is necessary to confirm existence." },
                                                { t: "Data Sanctity", d: "Never access, store, share, or use any user data discovered." },
                                                { t: "Safe Methods", d: "No DoS/DDoS, destructive testing, or social engineering." },
                                                { t: "Strict Secrecy", d: "Maintain absolute confidentiality until authorized disclosure." },
                                                { t: "Official Uplink", d: "Submit reports ONLY through the official ZeroDay platform." }
                                            ].map((rule, i) => (
                                                <li key={i} className="flex gap-4 group">
                                                    <div className="w-2 h-2 bg-red-900 rounded-full mt-1.5 shrink-0 group-hover:bg-red-500 transition-all shadow-[0_0_8px_rgba(239,68,68,0.2)]"></div>
                                                    <div>
                                                        <p className="text-xs font-black text-white uppercase mb-1">{rule.t}</p>
                                                        <p className="text-xs text-gray-500 font-light leading-relaxed">{rule.d}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 6.3 Hunter Reputation System - Dashboard Style */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-blue-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                                        6.3 Hunter Reputation System
                                    </h4>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* Scoring Points Box */}
                                        <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] space-y-8">
                                            <div className="flex items-center justify-between">
                                                <h5 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                                    <BarChart3 size={16} className="text-blue-500" /> Reputation Scoring
                                                </h5>
                                                <span className="text-[10px] font-mono text-blue-900">SYSTEM_v2.4</span>
                                            </div>
                                            <div className="space-y-4">
                                                {[
                                                    { t: "Valid Reports", d: "Points awarded based on severity (Critical = Highest)", i: <ShieldCheck /> },
                                                    { t: "Documentation Bonus", d: "Extra points for clear PoC and remediation guides", i: <Zap /> },
                                                    { t: "Penalty Protocol", d: "Deductions for invalid or out-of-scope submissions", i: <AlertTriangle />, alert: true }
                                                ].map((row, i) => (
                                                    <div key={i} className="flex items-center gap-4 p-4 bg-black/40 rounded-2xl border border-white/5 group hover:border-blue-500/20 transition-all">
                                                        <div className={`p-2 rounded-lg ${row.alert ? 'bg-red-950 text-red-500' : 'bg-blue-950 text-blue-500'} transition-all`}>
                                                            {React.cloneElement(row.i as React.ReactElement<any>, {size: 14 })}
                                                        </div>
                                                        <div>
                                                            <p className="text-xs font-bold text-gray-200 uppercase">{row.t}</p>
                                                            <p className="text-[10px] text-gray-500">{row.d}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Perks & Benefits Box */}
                                        <div className="p-8 bg-zinc-950 border border-blue-500/10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between">
                                            <div className="absolute -bottom-10 -right-10 opacity-[0.03]">
                                                <Trophy size={180} className="text-white" />
                                            </div>

                                            <div className="space-y-6">
                                                <h5 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                                    <Trophy size={16} className="text-blue-500" /> Elite Benefits
                                                </h5>
                                                <ul className="space-y-4">
                                                    <li className="flex items-center gap-4 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl group hover:bg-blue-500/10 transition-all">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></div>
                                                        <p className="text-xs text-gray-400">Featured on the <span className="text-white font-bold">Public Leaderboard</span> for visibility.</p>
                                                    </li>
                                                    <li className="flex items-center gap-4 p-4 bg-blue-500/5 border border-blue-500/10 rounded-2xl group hover:bg-blue-500/10 transition-all">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                                        <p className="text-xs text-gray-400">Priority access to <span className="text-white font-bold">Private & Invitation-only</span> programs.</p>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="mt-8 pt-6 border-t border-white/5">
                                                <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.4em]">Researcher_Prestige_Protocol: Active</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 6 Footer Meta */}
                                <div className="pl-4">
                                    <div className="p-4 bg-zinc-900/20 border border-white/5 rounded-xl flex items-center justify-between opacity-30">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-green-900" />
                                            <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.2em]">
                                                Node: <span className="text-white">Community_Intel_Relay</span> | Status: <span className="text-green-700">Online</span>
                                            </p>
                                        </div>
                                        <div className="text-[10px] font-mono text-gray-800">0x9AF2_RECOGNITION</div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 7: SLAs --- */}
                            <section id="sla" className="scroll-mt-32 space-y-10">
                                <h3 className="text-xl font-black bg-zinc-900 text-white px-6 py-3 border-l-4 border-yellow-600 uppercase flex items-center justify-between">
                                    <span>07 SERVICE LEVEL AGREEMENTS (SLAs)</span>
                                    <span className="text-[10px] font-mono text-gray-600">MOD_07</span>
                                </h3>
                                <div className="pl-4">
                                    <div className="overflow-x-auto rounded-3xl border border-white/5">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-zinc-900 text-yellow-700 font-mono text-[10px] uppercase">
                                                    <th className="p-5 border-b border-white/5">ACTIVITY</th>
                                                    <th className="p-5 border-b border-white/5">TARGET SLA</th>
                                                    <th className="p-5 border-b border-white/5">RESPONSIBLE PARTY</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-xs font-light text-gray-400">
                                                {[
                                                    { a: "Initial hunter report acknowledgement", t: "Within 24 hours", r: "ZeroDay Test Triage Team" },
                                                    { a: "Report triage & validity assessment", t: "3–5 business days", r: "ZeroDay Test Triage Team" },
                                                    { a: "Valid report notification to client", t: "Within 24 hours of triage", r: "ZeroDay Test Account Manager" },
                                                    { a: "Client confirmation of valid bug", t: "7 business days", r: "Client Security Team" },
                                                    { a: "Bounty payment to hunter (BBP)", t: "10 business days post-approval", r: "Client + ZeroDay Test Finance" },
                                                    { a: "Critical vulnerability escalation", t: "Immediate (within 4 hours)", r: "ZeroDay Test + Client" },
                                                    { a: "Monthly VDP/BBP report to client", t: "By 5th of each month", r: "ZeroDay Test Account Manager" },
                                                    { a: "Cyber Care report delivery", t: "5–7 business days post-testing", r: "Byte Capsule Pentest Team" }
                                                ].map((row, i) => (
                                                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-all">
                                                        <td className="p-5 uppercase font-mono tracking-tighter text-[10px]">{row.a}</td>
                                                        <td className="p-5 text-blue-400 font-black">{row.t}</td>
                                                        <td className="p-5">{row.r}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </section>
                            {/* --- SECTION 08: LEGAL, COMPLIANCE & ETHICS --- */}
                            <section id="legal" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Scale className="text-green-500" /> 08. Legal, Compliance & Ethics
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        ZeroDay Test is a framework designed to ensure legal protection and ethical testing of the platform.
                                    </p>
                                </div>

                                {/* 8.1 & 8.2: Legal Framework vs Mandatory Documents */}
                                <div className="pl-4 grid grid-cols-1 lg:grid-cols-2 gap-8">

                                    {/* 8.1 Legal Framework - Matrix Card */}
                                    <div className="p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                            <Gavel size={120} className="text-white" />
                                        </div>
                                        <h4 className="text-white font-bold text-xs uppercase mb-8 tracking-widest flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div> 8.1 Legal Framework
                                        </h4>
                                        <p className="text-[11px] font-mono text-green-900 uppercase mb-4 tracking-tighter">Applicable Laws of Bangladesh:</p>
                                        <ul className="space-y-4 text-xs md:text-sm text-gray-500 font-light list-none pl-0">
                                            {[
                                                "Digital Security Act, 2018 (Bangladesh)",
                                                "Cyber Security Act, 2025 (Bangladesh)",
                                                "Information and Communication Technology (ICT) Act, 2006 (as amended)",
                                                "Bangladesh Computer Council Act, 1990",
                                                "Bangladesh Telecommunications Act, 2001",
                                                "General Data Protection principles and privacy best practices"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3 group/item">
                                                    <span className="text-green-900 group-hover/item:text-green-500 transition-colors">#</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 8.2 Mandatory Legal Documents - File Vault Style */}
                                    <div className="p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-blue-500/20 transition-all duration-500">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                            <FileSignature size={120} className="text-white" />
                                        </div>
                                        <h4 className="text-blue-500 font-bold text-xs uppercase mb-8 tracking-widest flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> 8.2 Mandatory Legal Documents
                                        </h4>
                                        <div className="space-y-4">
                                            {[
                                                "Client Engagement Letter / Service Agreement",
                                                "Scope Authorization Document (Written Permission)",
                                                "Non-Disclosure Agreement (NDA) — Multi-party",
                                                "VDP Participation Agreement",
                                                "Bug Bounty Program Agreement (Commission Structure)",
                                                "Hunter Registration & Code of Conduct Acknowledgement",
                                                "Responsible Disclosure Policy (Published per program)"
                                            ].map((doc, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 bg-zinc-900 border border-white/5 rounded-xl group hover:bg-blue-500/5 transition-all">
                                                    <ShieldCheck size={14} className="text-blue-900 group-hover:text-blue-500" />
                                                    <span className="text-[11px] font-mono text-gray-400 group-hover:text-gray-200 transition-colors uppercase">{doc}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 8.3 Ethical Testing Principles - Warning Block */}
                                <div className="pl-4">
                                    <div className="p-8 md:p-12 bg-red-950/5 border border-red-900/20 rounded-[3rem] relative overflow-hidden group">
                                        {/* Background Icon Decoration */}
                                        <ShieldAlert size={250} className="absolute -right-20 -bottom-20 text-red-600 opacity-5 -rotate-12 group-hover:opacity-10 transition-opacity" />

                                        <div className="relative z-10 space-y-8">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-red-900/10 pb-6 gap-4">
                                                <h4 className="text-xl md:text-2xl font-black text-red-500 uppercase tracking-tighter flex items-center gap-3">
                                                    <Zap className="text-red-600" /> 8.3 Ethical Testing Principles
                                                </h4>
                                                <span className="px-4 py-1 bg-red-900/20 border border-red-900/40 rounded-full text-[10px] font-mono text-red-500 uppercase tracking-widest animate-pulse">
                                                    Prohibited_Activities_Node
                                                </span>
                                            </div>

                                            <p className="text-sm text-gray-300 font-bold uppercase tracking-tight italic opacity-80">
                                                No authorized activity may include:
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                {[
                                                    "Physical security testing without explicit written authorization",
                                                    "Social engineering attacks against client employees or customers",
                                                    "Data exfiltration beyond what is necessary to demonstrate vulnerability",
                                                    "Attacks against third-party infrastructure not listed in scope",
                                                    "Disclosure of vulnerabilities to third parties without client consent",
                                                    "Any activity that would violate Bangladeshi law, regardless of consent"
                                                ].map((text, i) => (
                                                    <div key={i} className="flex items-start gap-4 group/box transition-all">
                                                        <div className="w-2 h-2 bg-red-900 rounded-full mt-1.5 shrink-0 group-hover/box:bg-red-500 group-hover/box:shadow-[0_0_8px_#ef4444] transition-all"></div>
                                                        <p className="text-xs md:text-sm text-gray-500 group-hover/box:text-gray-300 transition-colors leading-relaxed font-light">
                                                            {text}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 8.4 Confidentiality & Disclosure Policy - The Heavy Verdict Block */}
                                <div className="pl-4">
                                    <div className="p-10 bg-zinc-950 border border-green-500/20 rounded-[3rem] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-5">
                                            <Lock size={150} className="text-green-500" />
                                        </div>

                                        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                                            <div className="flex-1 space-y-6">
                                                <h4 className="text-2xl font-black text-white uppercase tracking-tight flex items-center gap-3">
                                                    <div className="w-10 h-10 bg-green-500 text-black rounded-xl flex items-center justify-center">
                                                        <Terminal size={24} />
                                                    </div>
                                                    8.4 Confidentiality & Disclosure Policy
                                                </h4>
                                                <div className="space-y-4">
                                                    <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                                                        ZeroDay Test operates on a <span className="text-white font-bold underline decoration-green-900">Coordinated Disclosure model</span>: hunters must not publicly disclose any vulnerability until either:
                                                    </p>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="p-5 bg-black border border-white/5 rounded-2xl flex items-center gap-4">
                                                            <span className="text-green-500 font-mono font-bold text-xl">A</span>
                                                            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Client has confirmed remediation</p>
                                                        </div>
                                                        <div className="p-5 bg-black border border-white/5 rounded-2xl flex items-center gap-4">
                                                            <span className="text-green-500 font-mono font-bold text-xl">B</span>
                                                            <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">90 days have passed since initial report</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:w-1/3 w-full p-8 bg-green-600 rounded-[2.5rem] text-black shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                                                <h5 className="font-black uppercase text-sm mb-4 tracking-tighter">Policy Enforcement</h5>
                                                <p className="text-xs font-bold leading-relaxed mb-6">
                                                    "Whichever comes first. Any breach results in <span className="underline">immediate removal</span> from the platform and may result in <span className="underline">legal action</span>."
                                                </p>
                                                <div className="flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-tighter border-t border-black/10 pt-4">
                                                    <ShieldCheck size={14} /> Protocol_Active_v2.4
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 08 Footer HUD */}
                                <div className="pl-4">
                                    <div className="p-4 bg-zinc-900/10 border border-white/5 rounded-xl flex items-center justify-between opacity-30 group hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-green-900" />
                                            <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.2em]">
                                                Governance_Node: <span className="text-green-700">Legal_Directives_Engaged</span>
                                            </p>
                                        </div>
                                        <div className="text-[10px] font-mono text-gray-800 tracking-tighter">0x9AF2_ETHICS_VERIFIED</div>
                                    </div>
                                </div>
                            </section>
                            {/* --- SECTION 09: REVENUE MODEL SUMMARY --- */}
                            <section id="revenue" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <TrendingUp className="text-green-500" /> 09. Revenue Model Summary
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        ZeroDay Test is a revenue model designed for sustainable operation and commercial expansion of the platform.
                                    </p>
                                </div>

                                {/* Financial Dashboard Table */}
                                <div className="pl-4">
                                    <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-2xl relative">
                                        {/* Background Glow */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-[100px] -z-10"></div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse">
                                                <thead>
                                                    <tr className="bg-zinc-900/80 text-green-700 font-mono text-[10px] uppercase tracking-[0.3em]">
                                                        <th className="p-6 border-b border-white/5">Revenue Stream</th>
                                                        <th className="p-6 border-b border-white/5 text-center">Model</th>
                                                        <th className="p-6 border-b border-white/5 text-right">Rate / Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs md:text-sm">

                                                    {/* 1. Cyber Care */}
                                                    <tr className="border-b border-white/5 hover:bg-blue-500/[0.02] transition-all group">
                                                        <td className="p-6">
                                                            <div className="flex items-center gap-4">
                                                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Zap size={16} /></div>
                                                                <span className="text-white font-bold uppercase tracking-tight">Cyber Care Campaign</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-6 text-center text-gray-500 font-mono">Free service (lead generation)</td>
                                                        <td className="p-6 text-right">
                                                            <span className="text-blue-500 font-black uppercase tracking-tighter">No revenue — client acquisition investment</span>
                                                        </td>
                                                    </tr>

                                                    {/* 2. VDP - SME */}
                                                    <tr className="border-b border-white/5 hover:bg-green-500/[0.02] transition-all group">
                                                        <td className="p-6">
                                                            <div className="flex items-center gap-4">
                                                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><ShieldCheck size={16} /></div>
                                                                <span className="text-white font-bold uppercase tracking-tight">VDP — SME / Startup</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-6 text-center text-gray-500 font-mono">Monthly subscription</td>
                                                        <td className="p-6 text-right">
                                                            <span className="text-green-500 font-black text-lg font-mono">BDT 10,000 <span className="text-[10px] text-gray-600">/ month</span></span>
                                                            <p className="text-[9px] text-gray-500 font-mono mt-1 uppercase">(from month 2)</p>
                                                        </td>
                                                    </tr>

                                                    {/* 3. VDP - Mid size */}
                                                    <tr className="border-b border-white/5 hover:bg-green-500/[0.02] transition-all group">
                                                        <td className="p-6">
                                                            <div className="flex items-center gap-4">
                                                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Database size={16} /></div>
                                                                <span className="text-white font-bold uppercase tracking-tight">VDP — Mid-size Company</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-6 text-center text-gray-500 font-mono">Monthly subscription</td>
                                                        <td className="p-6 text-right">
                                                            <span className="text-green-500 font-black text-lg font-mono">BDT 15,000 <span className="text-[10px] text-gray-600">/ month</span></span>
                                                            <p className="text-[9px] text-gray-500 font-mono mt-1 uppercase">(from month 2)</p>
                                                        </td>
                                                    </tr>

                                                    {/* 4. VDP - Large */}
                                                    <tr className="border-b border-white/5 hover:bg-green-500/[0.02] transition-all group">
                                                        <td className="p-6">
                                                            <div className="flex items-center gap-4">
                                                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500"><Building size={16} /></div>
                                                                <span className="text-white font-bold uppercase tracking-tight">VDP — Large / Enterprise</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-6 text-center text-gray-500 font-mono">Monthly subscription</td>
                                                        <td className="p-6 text-right">
                                                            <span className="text-green-500 font-black text-lg font-mono">BDT 20,000–25,000 <span className="text-[10px] text-gray-600">/ month</span></span>
                                                            <p className="text-[9px] text-gray-500 font-mono mt-1 uppercase">(from month 2)</p>
                                                        </td>
                                                    </tr>

                                                    {/* 5. Bug Bounty Fee */}
                                                    <tr className="border-b border-white/5 hover:bg-red-500/[0.02] transition-all group">
                                                        <td className="p-6">
                                                            <div className="flex items-center gap-4">
                                                                <div className="p-2 bg-red-500/10 rounded-lg text-red-500"><BarChart3 size={16} /></div>
                                                                <span className="text-white font-bold uppercase tracking-tight">Bug Bounty Platform Fee</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-6 text-center text-gray-500 font-mono">Commission on bounties paid</td>
                                                        <td className="p-6 text-right">
                                                            <span className="text-red-500 font-black text-2xl font-mono">15%</span>
                                                            <p className="text-[9px] text-gray-500 font-mono mt-1 uppercase">of each bounties paid by clients</p>
                                                        </td>
                                                    </tr>

                                                    {/* 6. Bug Bounty No Subs */}
                                                    <tr className="hover:bg-zinc-900/50 transition-all group">
                                                        <td className="p-6">
                                                            <div className="flex items-center gap-4">
                                                                <div className="p-2 bg-zinc-800 rounded-lg text-gray-400 group-hover:text-white transition-colors"><Lock size={16} /></div>
                                                                <span className="text-gray-400 font-bold uppercase tracking-tight group-hover:text-white transition-colors">Bug Bounty — No Subscription</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-6 text-center text-gray-500 font-mono italic">Pay-per-bug model</td>
                                                        <td className="p-6 text-right">
                                                            <span className="text-white font-black text-xl font-mono">0 <span className="text-[10px] uppercase font-bold text-gray-600">Monthly Fee</span></span>
                                                            <p className="text-[9px] text-gray-500 font-mono mt-1 uppercase">commission income only</p>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Tactical Ledger Footer */}
                                        <div className="p-5 bg-zinc-900/50 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                                            <div className="flex items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
                                                <Terminal size={12} className="text-green-900" /> [ FINANCIAL_ENGINE: v1.0 ]
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                                                <span className="text-[9px] font-mono text-green-700 uppercase font-bold tracking-widest">Billing_Portal_Secured</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 09 Final Summary Note */}
                                <div className="pl-4">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        className="p-6 border border-white/5 bg-white/[0.01] rounded-2xl flex items-start gap-4"
                                    >
                                        <Info size={18} className="text-gray-700 mt-0.5" />
                                        <p className="text-[11px] text-gray-500 leading-relaxed font-light uppercase tracking-wider">
                                            This revenue model summary provides the standard framework for <span className="text-white">ZeroDay Test</span> operations. Specific customized agreements may apply for Government or high-volume Enterprise contracts as defined in <span className="text-green-900">Section 15.3</span>.
                                        </p>
                                    </motion.div>
                                </div>
                            </section>
                            {/* --- SECTION 10: ROLES & RESPONSIBILITIES --- */}
                            <section id="roles" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Briefcase className="text-green-500" /> 10. Roles & Responsibilities
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        Outlines the responsibilities of the relevant teams and stakeholders for the successful management of each operation on the ZeroDay Test platform.
                                    </p>
                                </div>

                                {/* Operational Responsibility Matrix */}
                                <div className="pl-4">
                                    <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#050505] shadow-2xl relative">
                                        {/* Background HUD Decor */}
                                        <div className="absolute top-0 left-0 p-10 opacity-[0.02] pointer-events-none">
                                            <Settings size={300} className="text-green-500 rotate-12" />
                                        </div>

                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left border-collapse relative z-10">
                                                <thead>
                                                    <tr className="bg-zinc-900/80 text-green-700 font-mono text-[10px] uppercase tracking-[0.3em]">
                                                        <th className="p-6 border-b border-white/5 w-1/3">Role / Team</th>
                                                        <th className="p-6 border-b border-white/5">Key Responsibilities</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-xs md:text-sm">

                                                    {[
                                                        {
                                                            role: "Byte Capsule Management",
                                                            icon: <ShieldAlert size={18} />,
                                                            desc: "Strategic oversight of ZeroDay Test, legal compliance, major client relationship management, revenue planning, policy updates",
                                                            color: "text-white"
                                                        },
                                                        {
                                                            role: "Account Manager",
                                                            icon: <Users size={18} />,
                                                            desc: "Client onboarding coordination, VDP/BBP proposal delivery, ongoing client communication, subscription billing, monthly reporting",
                                                            color: "text-gray-300"
                                                        },
                                                        {
                                                            role: "Pentest Team (Cyber Care)",
                                                            icon: <Zap size={18} />,
                                                            desc: "Execution of free penetration tests under Cyber Care, report writing, client debrief sessions",
                                                            color: "text-blue-400"
                                                        },
                                                        {
                                                            role: "Triage Team",
                                                            icon: <Search size={18} />,
                                                            desc: "Review and validate all hunter-submitted reports, apply CVSS scoring, communicate with hunters, escalate valid findings to clients",
                                                            color: "text-green-500"
                                                        },
                                                        {
                                                            role: "Platform Administrator",
                                                            icon: <Settings size={18} />,
                                                            desc: "ZeroDay Test platform configuration, program setup (scope, bounty ranges, rules), hunter registration, leaderboard maintenance",
                                                            color: "text-gray-300"
                                                        },
                                                        {
                                                            role: "Finance & Operations",
                                                            icon: <Wallet size={18} />,
                                                            desc: "Subscription invoicing, bounty payment processing, 15% commission collection, financial reconciliation",
                                                            color: "text-yellow-500"
                                                        },
                                                        {
                                                            role: "Legal & Compliance",
                                                            icon: <Gavel size={18} />,
                                                            desc: "Drafting all legal agreements, NDA management, regulatory compliance monitoring, dispute resolution",
                                                            color: "text-purple-500"
                                                        },
                                                        {
                                                            role: "Security Hunters",
                                                            icon: <Terminal size={18} />,
                                                            desc: "Independent researchers who submit vulnerability reports within defined scope; responsible for ethical testing and coordinated disclosure",
                                                            color: "text-green-400"
                                                        },
                                                        {
                                                            role: "Client (Organization)",
                                                            icon: <Building size={18} />,
                                                            desc: "Defining scope, reviewing triaged reports, confirming validity, paying bounties (BBP) or subscriptions (VDP), implementing remediation",
                                                            color: "text-blue-500"
                                                        }
                                                    ].map((item, i) => (
                                                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-all group">
                                                            <td className="p-6 align-top">
                                                                <div className="flex items-center gap-4">
                                                                    <div className="p-2 bg-zinc-900 border border-white/5 rounded-lg text-green-900 group-hover:text-green-500 transition-colors">
                                                                        {item.icon}
                                                                    </div>
                                                                    <span className={`font-black uppercase tracking-tight text-xs md:text-sm ${item.color}`}>
                                                                        {item.role}
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td className="p-6">
                                                                <p className="text-gray-500 font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                                                                    {item.desc}
                                                                </p>
                                                                <div className="mt-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                                    <div className="w-10 h-[1px] bg-green-900"></div>
                                                                    <div className="w-2 h-[1px] bg-green-500"></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}

                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Tactical Meta-data Footer */}
                                        <div className="p-4 bg-zinc-900/50 border-t border-white/5 flex justify-between items-center">
                                            <div className="flex items-center gap-3 text-[9px] font-mono text-gray-700 uppercase tracking-widest">
                                                <Cpu size={12} className="text-green-900" /> [ ORG_HIERARCHY_v2.1 ]
                                            </div>
                                            <div className="text-[9px] font-mono text-green-900">
                                                STATUS: ALL_NODES_IDENTIFIED
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Final Directives Note */}
                                <div className="pl-4">
                                    <div className="p-6 bg-green-500/5 border border-green-500/10 rounded-2xl flex items-start gap-4 group">
                                        <div className="p-2 bg-green-500/10 rounded-lg text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                                            <Handshake size={20} />
                                        </div>
                                        <div className="space-y-1">
                                            <h5 className="text-white font-bold text-xs uppercase tracking-widest">Cross-Team Collaboration</h5>
                                            <p className="text-[11px] text-gray-500 font-light leading-relaxed">
                                                The responsibilities and roles of each member on the ZeroDay Test platform are defined through legal agreements<span className="text-green-700 font-mono">Any deviation from any role is reportedt</span> directly to the Byte Capsule Management node.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 11: DOCUMENT CONTROL & FINAL APPROVAL --- */}
                            <section id="roles" className="scroll-mt-32 space-y-12">
                                <h3 className="text-xl font-black bg-zinc-900 text-white px-6 py-3 border-l-4 border-green-900 uppercase flex items-center justify-between">
                                    <span>11 DOCUMENT CONTROL & REVIEW</span>
                                    <span className="text-[10px] font-mono text-gray-600">AUTH_FINAL</span>
                                </h3>

                                <div className="pl-4 space-y-12">
                                    {/* ১. ডকুমেন্ট মেটাডেটা গ্রিড (সবগুলো পয়েন্ট এখানে আছে) */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[11px] font-mono uppercase tracking-widest">
                                        <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl hover:border-green-500/20 transition-all">
                                            <p className="text-green-900 mb-1 font-bold">Document Owner</p>
                                            <p className="text-white">Byte Capsule IT — ZeroDay Test Operations</p>
                                        </div>
                                        <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl hover:border-green-500/20 transition-all">
                                            <p className="text-green-900 mb-1 font-bold">Review Cycle</p>
                                            <p className="text-white leading-relaxed">Every 6 months or upon significant platform/policy change</p>
                                        </div>
                                        <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl hover:border-green-500/20 transition-all">
                                            <p className="text-green-900 mb-1 font-bold">Approval Authority</p>
                                            <p className="text-white">Byte Capsule Management Team</p>
                                        </div>
                                        <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl hover:border-green-500/20 transition-all">
                                            <p className="text-green-900 mb-1 font-bold">Distribution</p>
                                            <p className="text-white">Internal — ZeroDay Test Operations Team</p>
                                        </div>
                                        <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl hover:border-green-500/20 transition-all">
                                            <p className="text-green-900 mb-1 font-bold">Version History</p>
                                            <p className="text-white">v1.0 — Initial Release (2026)</p>
                                        </div>
                                    </div>

                                    {/* ২. অফিসিয়াল সিগনেচার এবং অ্যাপ্রুভাল এরিয়া */}
                                    <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-12 relative">
                                        <div className="space-y-8">
                                            <div className="pt-4 flex justify-center">
                                                <div className="relative h-52 w-auto rounded-md">

                                                    {/* Rotating Border */}
                                                    <div className="absolute inset-0 rounded-md p-[3px] 
                bg-[conic-gradient(#ff0000,#00ff88,#0066ff,#ff0000)] 
                    animate-spin-slow">

                                                    </div>

                                                    {/* Image */}
                                                    <div className="relative bg-white rounded-md p-[3px]">
                                                        <img
                                                            src="/client-nda.jpg"
                                                            alt="Signature"
                                                            className="h-52 rounded-md"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* ৪. এন্ড অফ ডকুমেন্ট নোট */}
                                    <div className="text-center pt-20 pb-10 opacity-20 text-[10px] font-mono uppercase tracking-[0.8em]">
                                        — END OF DOCUMENT — <br />
                                        <span className="text-[8px] mt-2 block tracking-[0.2em]">ZeroDay Test | Operated by Byte Capsule</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

// Custom Icons for table/grid
function Trophy({ className, size }: { className?: string, size?: number }) {
    return <Zap className={className} size={size} />;
}
function Clock({ className, size }: { className?: string, size?: number }) {
    return <History className={className} size={size} />;
}