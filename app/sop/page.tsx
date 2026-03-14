"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Terminal, FileSignature, Target,
    Layers, Zap, Users, BarChart3, Gavel,
    Database, History, Printer, QrCode, MapPin,
    Mail, Phone, Globe, CheckCircle2, AlertCircle,
    TrendingUp, Settings, Briefcase, Lock
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

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">

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
                            <p className="flex items-center gap-2"><MapPin size={10} /> Level-4, Byte Capsule, 15 Indira Road, Dhaka-1215</p>
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

                    {/* --- SIDEBAR NAVIGATION --- */}
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
                                                        <td className="p-5 text-gray-500">Limited digital presence, early-stage startups, small customer base.</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-white font-bold">Mid-size Companies</td>
                                                        <td className="p-5 text-red-500 font-black">BDT 15,000 / Month</td>
                                                        <td className="p-5 text-gray-500">Moderate web presence and customer base.</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-white font-bold">Large / Enterprise (Big & Giant)</td>
                                                        <td className="p-5 text-red-500 font-black">BDT 20,000 – 25,000 / Month</td>
                                                        <td className="p-5 text-gray-500">Major financial institutions, enterprises with extensive digital assets.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="p-6 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-2xl">
                                            <p className="text-[10px] text-blue-400 font-mono uppercase tracking-widest mb-1">NOTE:</p>
                                            <p className="text-xs text-gray-400">Clients who upgrade to Bug Bounty Program are NOT required to maintain a VDP subscription. BBP operates on a pay-per-valid-bug model with 15% platform commission.</p>
                                        </div>
                                    </div>

                                    {/* VDP Onboarding */}
                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest text-center">4.3 VDP Onboarding Process</h4>
                                        <div className="grid gap-3">
                                            {[
                                                "Proposal Acceptance — Client formally accepts proposal and signs VDP Participation Agreement.",
                                                "Asset Registration — Client declares all in-scope assets (domains, subdomains, APIs). Out-of-scope assets defined.",
                                                "Program Listing — ZeroDay Test team creates client's program page with rules and disclosure policy.",
                                                "First Month Free Activation — Client's VDP program goes live. First 30 days are completely free.",
                                                "Hunter Submission Management — Hunters submit reports. Byte Capsule triage team reviews for validity and severity.",
                                                "Client Notification & Reporting — Valid reports forwarded to client security team with description, PoC, and CVSS.",
                                                "Monthly Review & Billing — At end of month 1, client presented with subscription options. Billing commences month 2.",
                                                "Ongoing Program Management — Byte Capsule continues managing submissions, monthly and quarterly reviews."
                                            ].map((step, i) => (
                                                <div key={i} className="flex items-center gap-4 p-4 bg-zinc-900 border border-white/5 rounded-2xl group hover:border-green-500/20 transition-all">
                                                    <span className="text-[10px] font-mono text-green-900 group-hover:text-green-500">STEP_0{i + 1}</span>
                                                    <p className="text-xs text-gray-500 group-hover:text-gray-300">{step}</p>
                                                </div>
                                            ))}
                                        </div>
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
                                    <p className="text-sm">The BBP is the most advanced tier where clients offer financial rewards (bounties) to hunters for valid, in-scope reports.</p>

                                    <div className="p-8 bg-red-900/10 border-l-4 border-red-500 rounded-r-3xl">
                                        <h4 className="text-red-500 font-black uppercase text-xs mb-2 tracking-widest">Platform Commission</h4>
                                        <p className="text-xs text-gray-400">ZeroDay Test charges 15% of every bounty paid by the client. Example: BDT 50,000 payment = BDT 7,500 platform fee + BDT 42,500 to hunter.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest">5.2 Severity-Based Bounty Range (Estimated)</h4>
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
                                                        <td className="p-5 text-white font-bold">50,000 – 1,00,000+</td>
                                                        <td className="p-5 text-gray-600 italic">RCE, SQL Injection (Full DB), Auth Bypass</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-orange-500 font-black">HIGH</td>
                                                        <td className="p-5 font-mono text-gray-500">7.0–8.9</td>
                                                        <td className="p-5 text-white font-bold">15,000 – 50,000</td>
                                                        <td className="p-5 text-gray-600 italic">Stored XSS, IDOR (Sensitive Data), SSRF</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-yellow-500 font-black">MEDIUM</td>
                                                        <td className="p-5 font-mono text-gray-500">4.0–6.9</td>
                                                        <td className="p-5 text-white font-bold">5,000 – 15,000</td>
                                                        <td className="p-5 text-gray-600 italic">Reflected XSS, CSRF, Info Disclosure</td>
                                                    </tr>
                                                    <tr className="border-b border-white/5">
                                                        <td className="p-5 text-blue-500 font-black">LOW</td>
                                                        <td className="p-5 font-mono text-gray-500">0.1–3.9</td>
                                                        <td className="p-5 text-white font-bold">1,000 – 5,000</td>
                                                        <td className="p-5 text-gray-600 italic">Open Redirect, Zone Transfer</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
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

                            {/* --- SECTION 11: DOCUMENT CONTROL & FINAL APPROVAL --- */}
                            <section id="roles" className="scroll-mt-32 space-y-12">
                                <h3 className="text-xl font-black bg-zinc-900 text-white px-6 py-3 border-l-4 border-green-900 uppercase">11 DOCUMENT CONTROL & REVIEW</h3>
                                <div className="pl-4 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[11px] font-mono uppercase tracking-widest">
                                        <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl"><p className="text-gray-600 mb-1">Document Owner</p><p className="text-white">Byte Capsule IT — ZeroDay Test Ops</p></div>
                                        <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl"><p className="text-gray-600 mb-1">Review Cycle</p><p className="text-white">Every 6 Months</p></div>
                                        <div className="p-4 bg-zinc-900 border border-white/5 rounded-xl"><p className="text-gray-600 mb-1">Approval Authority</p><p className="text-white">Byte Capsule Management Team</p></div>
                                    </div>

                                    <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-12">
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-[10px] font-mono text-gray-600 uppercase mb-3 tracking-widest">Authorized By</p>
                                                <p className="text-white font-bold text-2xl leading-none uppercase tracking-tighter">Sakib Haque Zisan</p>
                                                <p className="text-[10px] font-mono text-green-700 mt-2 uppercase leading-tight font-bold">
                                                    Head Of Operations, ZeroDay Test <br /> CEO, Byte Capsule
                                                </p>
                                            </div>

                                            <div className="pt-4 relative group w-fit">
                                                <p className="text-[10px] font-mono text-gray-600 uppercase mb-2">Signature</p>
                                                <img src="/client-nda.jpg" alt="Signature" className="h-16 w-auto object-contain filter invert brightness-200 contrast-125" />
                                                <div className="absolute inset-0 flex items-center justify-center opacity-10 -z-10 group-hover:opacity-20 transition-opacity">
                                                    <ShieldCheck size={120} className="text-green-500" />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Date: 23/02/2026</p>
                                                <p className="text-[9px] font-mono text-red-900 uppercase font-black tracking-[0.4em]">CONFIDENTIAL INTERNAL DOCUMENT</p>
                                            </div>
                                        </div>

                                        {/* ছবির সেই নীল ডেকোরেশন স্ট্যাম্প */}
                                        <div className="hidden lg:block relative mr-20 mb-12 opacity-30 group hover:opacity-50 transition-all cursor-default">
                                            <div className="w-36 h-28 border-[3px] border-blue-900/40 rounded-2xl flex flex-col items-center justify-center rotate-[-12deg] p-4 text-center">
                                                <div className="font-black text-blue-900 uppercase leading-none">
                                                    <p className="text-base tracking-tighter">Byte Capsule</p>
                                                    <p className="text-[7px] mt-2 tracking-widest border-t border-blue-900/20 pt-2 uppercase">Authorized Seal</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- END OF DOCUMENT FOOTNOTE --- */}
                            <div className="text-center pt-20 pb-10 opacity-20 text-[10px] font-mono uppercase tracking-[0.8em]">
                                — END OF OPERATIONAL DOCUMENT — <br />
                                <span className="text-[8px] mt-2 block tracking-[0.2em]">ZeroDay Test | Operated by Byte Capsule IT</span>
                            </div>

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