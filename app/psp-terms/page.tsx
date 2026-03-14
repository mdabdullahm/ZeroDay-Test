"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Wallet, Landmark, Ban, ShieldCheck,
    History, Gavel, Terminal, FileText,
    CheckCircle2, AlertTriangle, Printer,
    QrCode, MapPin, Mail, Phone, Globe,
    Zap, CreditCard, DollarSign,
    Lock,
    Scale,
    FileSignature,
    X,
    ArrowUpCircle,
    AlertCircle,
    ArrowDownCircle,
    Settings,
    CheckCircle,
    ShieldAlert,
    Fingerprint,
    UserCheck,
    Handshake,
    XCircle,
    FileWarning,
    FileEdit,
    RefreshCw
} from 'lucide-react';

const sections = [
    { id: "intro", title: "1. Intro & Scope", icon: <Info size={16} /> },
    { id: "methods", title: "2. Accepted Methods", icon: <CheckCircle2 size={16} /> },
    { id: "procedure", title: "3. Manual Procedure", icon: <Terminal size={16} /> },
    { id: "bank", title: "4. Bank Terms", icon: <Landmark size={16} /> },
    { id: "payoneer", title: "5. Payoneer Terms", icon: <DollarSign size={16} /> },
    { id: "compliance", title: "7. Compliance", icon: <ShieldCheck size={16} /> },
    { id: "laws", title: "8. Cyber Laws", icon: <Gavel size={16} /> },
    { id: "prohibited", title: "9. Prohibited", icon: <Ban size={16} /> },
    { id: "dispute", title: "11. Disputes", icon: <History size={16} /> },
];

export default function PSPTermsPage() {
    const handlePrint = () => window.print();

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
            <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">

                {/* অফিশিয়াল লেটারহেড */}
                <div className="mb-12 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3 mb-2">
                            <ShieldCheck className="text-green-500" size={32} />
                            <h2 className="text-white font-black text-2xl tracking-widest uppercase">Byte Capsule</h2>
                        </div>
                        <div className="text-[10px] font-mono text-gray-500 space-y-1">
                            <p className="font-bold text-gray-400 uppercase italic">STAY SAFE, STAY SECURE</p>
                            <p className="flex items-center gap-2"><MapPin size={10} /> Level-4, Byte Capsule, 15 Indira Road, Dhaka-1215</p>
                            <p className="flex items-center gap-2"><Mail size={10} /> mail@bytecapsuleit.com | <Phone size={10} /> +8801796934898</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <div className="p-3 bg-white rounded-xl">
                            <QrCode size={70} className="text-black" />
                        </div>
                        <button onClick={handlePrint} className="flex items-center gap-2 text-[10px] font-mono text-green-500 hover:text-white transition-colors uppercase tracking-widest">
                            <Printer size={12} /> PRINT_FINANCIAL_DOC
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block sticky top-32 space-y-2 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-900">
                        <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Financial_Modules</p>
                        {sections.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-2.5 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group">
                                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                                <span className="text-[10px] font-bold uppercase tracking-tight">{item.title}</span>
                            </a>
                        ))}
                    </aside>

                    {/* Main Content Area */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-zinc-950/80 border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                        <div className="relative z-10 space-y-20">

                            <div className="text-center">
                                <p className="text-gray-500 font-mono text-xs uppercase mb-2">PSP PROTOCOL</p>
                                <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                                    Payment Service Provider <br />
                                    <span className="text-green-500">Terms & Conditions</span>
                                </h1>
                                <div className="flex flex-wrap justify-center gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                    <p>Ref: <span className="text-white">ZeroDay Test/PSP/2026</span></p>
                                    <p>Effective: <span className="text-white">February 24, 2026</span></p>
                                    <p className="text-red-500 animate-pulse">[ MANUAL_PROCESSING_ONLY ]</p>
                                </div>
                            </div>

                            {/* IMPORTANT NOTICE */}
                            <div className="p-8 bg-red-950/10 border border-red-500/30 rounded-[2.5rem] space-y-4">
                                <div className="flex items-center gap-3 text-red-500 font-black uppercase text-sm tracking-widest">
                                    <AlertTriangle size={20} /> Important Notice
                                </div>
                                <p className="text-sm md:text-base leading-relaxed text-gray-400 font-light">
                                    At this time, all money deposits and withdrawals on the ZeroDay Test platform are <span className="text-white font-bold">processed manually</span> by our operations team. There is no automated payment gateway. Only <span className="text-green-500 font-bold">Bank Transfer and Payoneer</span> are accepted. No other payment method will be processed.
                                </p>
                            </div>
                            {/* --- SECTION 01: INTRODUCTION AND SCOPE (বাদ পড়া অংশ) --- */}
                            <section id="intro" className="scroll-mt-32 space-y-8">
                                {/* ট্যাকটিক্যাল হেডার */}
                                <h3 className="text-xl font-black bg-zinc-900 text-white px-6 py-3 border-l-4 border-green-500 uppercase flex items-center justify-between">
                                    <span>01 INTRODUCTION AND SCOPE</span>
                                    <span className="text-[10px] font-mono text-gray-600">AUTH_ESTABLISHED</span>
                                </h3>

                                <div className="pl-4">
                                    {/* মেইন কন্টেন্ট কার্ড */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="p-8 md:p-12 bg-zinc-950 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all duration-500"
                                    >
                                        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                            <FileSignature size={150} className="text-white" />
                                        </div>

                                        <div className="relative z-10 space-y-8">
                                            <div className="flex items-center gap-3 text-green-500 font-mono text-[10px] uppercase tracking-[0.4em]">
                                                <ShieldCheck size={14} /> [ BINDING_AGREEMENT_INITIALIZED ]
                                            </div>

                                            <div className="space-y-6 text-sm md:text-base leading-relaxed font-light text-gray-400">
                                                <p>
                                                    These Payment Service Provider Terms and Conditions (<span className="text-white font-bold italic">“PSP Terms”</span>) constitute a <span className="text-white">legally binding agreement</span> between <span className="text-green-500 font-mono font-bold">ZeroDay Test</span> (“Platform”, “We”, “Us”) and any individual or entity (“User”, “Client”) who deposits funds into or withdraws funds from the ZeroDay Test platform.
                                                </p>

                                                {/* হাইলাইট করা লিগ্যাল নোটিশ */}
                                                <div className="p-6 bg-green-500/5 border-l-2 border-green-500 rounded-r-2xl italic shadow-2xl">
                                                    <p className="text-gray-300">
                                                        "By initiating any deposit or withdrawal transaction, the User <span className="text-green-500 font-bold">agrees to be bound</span> by these PSP Terms."
                                                    </p>
                                                </div>

                                                <div className="pt-6 border-t border-white/5">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                                            <Globe size={12} className="text-green-900" />
                                                            Jurisdiction: People’s Republic of Bangladesh
                                                        </div>
                                                        <div className="text-[10px] font-mono text-green-900 uppercase">
                                                            STATUS: ENFORCED_GLOBALLY
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </section>

                            {/* --- SECTION 02: ACCEPTED PAYMENT METHODS --- */}
                            <section id="methods" className="scroll-mt-32 space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <CheckCircle2 className="text-green-500" /> 02. ACCEPTED PAYMENT METHODS
                                    </h3>
                                    <p className="text-gray-400 text-sm font-light pl-4 leading-relaxed">
                                        ZeroDay Test accepts exactly <span className="text-green-500 font-bold underline">two (2) payment methods</span> for all fund deposits and withdrawals. No exceptions will be made for any other payment provider, application, or service.
                                    </p>
                                </div>

                                {/* ২ কলামের গ্রিড (Bank & Payoneer) */}
                                <div className="pl-4 grid grid-cols-1 lg:grid-cols-2 gap-8">

                                    {/* Method 01: Bank Transfer */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative p-8 bg-zinc-950 border border-green-500/10 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500"
                                    >
                                        <div className="absolute top-4 right-8 text-[8px] font-mono text-green-900 uppercase tracking-widest">Protocol: BANK_WIRE</div>
                                        <div className="w-14 h-14 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-500 group-hover:text-black transition-all">
                                            <Landmark size={28} />
                                        </div>

                                        <h4 className="text-xl font-bold text-white uppercase mb-6 tracking-tight">
                                            Method 01 — Bank Transfer <br />
                                            <span className="text-[10px] text-gray-500 font-mono font-normal">(Domestic & International)</span>
                                        </h4>

                                        <ul className="space-y-4 text-xs md:text-sm text-gray-400 font-light">
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-green-900 rounded-full mt-1.5 shrink-0 group-hover:bg-green-500"></div>
                                                <p><span className="text-white font-mono text-xs uppercase mr-2">Transfer Type:</span> Wire Transfer / SWIFT / NPSB / BEFTN</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-green-900 rounded-full mt-1.5 shrink-0 group-hover:bg-green-500"></div>
                                                <p><span className="text-white font-mono text-xs uppercase mr-2">Accepted Currency:</span> BDT (domestic) / USD, EUR (international)</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-green-900 rounded-full mt-1.5 shrink-0 group-hover:bg-green-500"></div>
                                                <p><span className="text-white font-mono text-xs uppercase mr-2">Processing:</span> Manual (1–7 business days after payment confirmation)</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-green-900 rounded-full mt-1.5 shrink-0 group-hover:bg-green-500"></div>
                                                <p><span className="text-white font-mono text-xs uppercase mr-2">Minimum Amount:</span> BDT 5000 (domestic) / USD 50 equivalent (international)</p>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Method 02: Payoneer */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative p-8 bg-zinc-950 border border-blue-500/10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500"
                                    >
                                        <div className="absolute top-4 right-8 text-[8px] font-mono text-blue-900 uppercase tracking-widest">Protocol: PAYONEER_DIRECT</div>
                                        <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500 group-hover:text-black transition-all">
                                            <DollarSign size={28} />
                                        </div>

                                        <h4 className="text-xl font-bold text-white uppercase mb-6 tracking-tight">
                                            Method 02 — Payoneer <br />
                                            <span className="text-[10px] text-gray-500 font-mono font-normal">(International)</span>
                                        </h4>

                                        <ul className="space-y-4 text-xs md:text-sm text-gray-400 font-light">
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5 shrink-0 group-hover:bg-blue-500"></div>
                                                <p><span className="text-white font-mono text-xs uppercase mr-2">Transfer Type:</span> Payoneer-to-Payoneer account transfer only</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5 shrink-0 group-hover:bg-blue-500"></div>
                                                <p><span className="text-white font-mono text-xs uppercase mr-2">Accepted Currency:</span> USD</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5 shrink-0 group-hover:bg-blue-500"></div>
                                                <p><span className="text-white font-mono text-xs uppercase mr-2">Processing:</span> Manual (1–7 business days after payment confirmation)</p>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-1.5 shrink-0 group-hover:bg-blue-500"></div>
                                                <p><span className="text-white font-mono text-xs uppercase mr-2">Minimum Amount:</span> USD 50</p>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>

                                {/* --- 🔴 NOT ACCEPTED SECTION --- */}
                                <div className="pl-4">
                                    <div className="p-8 bg-red-950/5 border border-red-900/20 rounded-[3rem] relative overflow-hidden group">
                                        {/* Background Icon */}
                                        <Ban size={250} className="absolute -right-20 -bottom-20 text-red-600 opacity-5 -rotate-12 group-hover:opacity-10 transition-opacity" />

                                        <div className="relative z-10 space-y-8">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-red-900/10 pb-6 gap-4">
                                                <h4 className="text-xl md:text-2xl font-black text-red-600 uppercase tracking-tighter flex items-center gap-3">
                                                    <Ban className="text-red-600" /> NOT ACCEPTED
                                                </h4>
                                                <span className="px-4 py-1 bg-red-900/20 border border-red-900/40 rounded-full text-[10px] font-mono text-red-500 uppercase tracking-widest animate-pulse">
                                                    Restriction_Enforced
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs font-mono text-gray-500 uppercase tracking-tight">
                                                {[
                                                    "bKash", "Nagad", "Rocket", "Upay", "PayPal", "Stripe",
                                                    "credit/debit cards", "cryptocurrency", "Western Union",
                                                    "MoneyGram", "Wise"
                                                ].map((method, i) => (
                                                    <div key={i} className="flex items-center gap-2 group/item">
                                                        <X size={12} className="text-red-900 group-hover/item:text-red-500 transition-colors" />
                                                        {method}
                                                    </div>
                                                ))}
                                                <p className="col-span-full text-[9px] text-red-900/60 mt-2">...or any other method not listed above.</p>
                                            </div>

                                            {/* Critical Liability Box */}
                                            <div className="p-6 bg-black/60 border-l-4 border-red-600 rounded-r-2xl">
                                                <div className="flex items-start gap-4">
                                                    <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                                                    <p className="text-xs md:text-sm text-gray-400 font-bold leading-relaxed uppercase">
                                                        Funds sent via <span className="text-red-500 underline">any other method</span> will not be credited and may not be recoverable.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 03: MANUAL PROCESSING PROCEDURE --- */}
                            <section id="procedure" className="scroll-mt-32 space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Settings className="text-green-500" /> 03. MANUAL PROCESSING PROCEDURE
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        All transactions are manually verified by our operations team to ensure the security and transparency of the system.
                                    </p>
                                </div>

                                <div className="pl-4 grid grid-cols-1 lg:grid-cols-2 gap-10">

                                    {/* --- 3.1 DEPOSIT PROCESS --- */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500"
                                    >
                                        <div className="flex items-center justify-between mb-10">
                                            <h4 className="text-green-500 font-bold uppercase text-sm tracking-widest flex items-center gap-2">
                                                <ArrowDownCircle size={18} /> 3.1 Deposit Process
                                            </h4>
                                            <span className="text-[9px] font-mono text-gray-700 uppercase tracking-tighter">Node: INBOUND_STATION</span>
                                        </div>

                                        <div className="space-y-8 relative">
                                            {/* Connecting vertical line */}
                                            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-green-500/10"></div>

                                            {[
                                                { id: "(i)", text: "Submit a deposit request through your ZeroDay Test account dashboard or via support." },
                                                { id: "(ii)", text: "ZeroDay Test will provide current bank account details or Payoneer account ID.", warn: "Always request fresh payment details — do not reuse old account numbers." },
                                                { id: "(iii)", text: "Complete the transfer and include your ZeroDay Test User ID in the payment reference." },
                                                { id: "(iv)", text: "Submit proof of payment (bank receipt or Payoneer confirmation screenshot) via the support channel." },
                                                { id: "(v)", text: "Upon manual verification by our team, funds will be credited to your account within 1–3 business days." }
                                            ].map((step, i) => (
                                                <div key={i} className="relative pl-10 group/item">
                                                    <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-900 border border-white/10 rounded flex items-center justify-center z-10 group-hover/item:border-green-500 transition-colors">
                                                        <span className="text-[9px] font-mono text-green-500 font-bold">{step.id}</span>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <p className="text-xs md:text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-200 transition-colors">
                                                            {step.text}
                                                        </p>
                                                        {step.warn && (
                                                            <div className="p-3 bg-red-950/20 border border-red-900/20 rounded-xl flex items-start gap-2">
                                                                <AlertCircle size={12} className="text-red-600 mt-0.5 shrink-0" />
                                                                <p className="text-[10px] text-red-500/80 font-mono uppercase leading-tight">{step.warn}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* --- 3.2 WITHDRAWAL PROCESS --- */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500"
                                    >
                                        <div className="flex items-center justify-between mb-10">
                                            <h4 className="text-blue-500 font-bold uppercase text-sm tracking-widest flex items-center gap-2">
                                                <ArrowUpCircle size={18} /> 3.2 Withdrawal Process
                                            </h4>
                                            <span className="text-[9px] font-mono text-gray-700 uppercase tracking-tighter">Node: OUTBOUND_RELAY</span>
                                        </div>

                                        <div className="space-y-8 relative">
                                            {/* Connecting vertical line */}
                                            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-blue-500/10"></div>

                                            {[
                                                { id: "(i)", text: "Submit a withdrawal request via your ZeroDay Test account dashboard with the amount, preferred method, and your bank/Payoneer account details." },
                                                { id: "(ii)", text: "For first-time withdrawals or amounts above applicable KYC thresholds, identity verification documents may be required." },
                                                { id: "(iii)", text: "Our team will manually review and approve the request. Approval or rejection will be communicated within the processing window." },
                                                { id: "(iv)", text: "Approved withdrawals are dispatched within 2–5 business days via the selected method. Bank transfers may take 1–5 business days; Payoneer transfers 1–5 business days." }
                                            ].map((step, i) => (
                                                <div key={i} className="relative pl-10 group/item">
                                                    <div className="absolute left-0 top-0 w-6 h-6 bg-zinc-900 border border-white/10 rounded flex items-center justify-center z-10 group-hover/item:border-blue-500 transition-colors">
                                                        <span className="text-[9px] font-mono text-blue-500 font-bold">{step.id}</span>
                                                    </div>
                                                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed group-hover/item:text-gray-200 transition-colors pt-0.5">
                                                        {step.text}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Tactical Decor Icon */}
                                        <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                            <ShieldCheck size={150} className="text-white" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Section 03 Tactical Meta-data */}
                                <div className="pl-4">
                                    <div className="p-4 bg-zinc-900/20 border border-white/5 rounded-xl flex items-center justify-between opacity-40">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-green-900" />
                                            <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.2em]">
                                                Manual_Ops_Pipeline: <span className="text-green-700">Sequence_Active</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-[9px] font-mono text-gray-700 uppercase">
                                            <Zap size={10} className="text-green-900" /> Processing_Latency: Standard
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* --- SECTION 04: BANK TRANSFER TERMS --- */}
                            <section id="bank" className="scroll-mt-32 space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Landmark className="text-green-500" /> 04. BANK TRANSFER TERMS
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic leading-relaxed">
                                        The following terms and conditions apply to transactions made via bank transfer. Each transaction must be completed through a verified channel.
                                    </p>
                                </div>

                                <div className="pl-4">
                                    {/* মেইন টার্মস কার্ড */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative p-8 md:p-12 bg-[#050505] border border-white/5 rounded-[2.5rem] hover:border-green-500/20 transition-all duration-500 overflow-hidden"
                                    >
                                        {/* Background Icon Decoration */}
                                        <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                            <ShieldCheck size={200} className="text-white" />
                                        </div>

                                        <div className="relative z-10 space-y-8">
                                            {/* Protocol Header */}
                                            <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-green-500/10 rounded-lg">
                                                        <Terminal size={18} className="text-green-500" />
                                                    </div>
                                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Protocol_ID: BANK_TX_04</span>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-900"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                                </div>
                                            </div>

                                            {/* Terms List (a) to (e) */}
                                            <div className="space-y-8">
                                                {/* (a) Account Details */}
                                                <div className="flex gap-6 group/item">
                                                    <span className="text-green-500 font-mono font-black text-sm pt-1">(a)</span>
                                                    <div className="space-y-3">
                                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                            Bank account details will be provided by ZeroDay Test upon each deposit request. <span className="text-white font-medium">Details are subject to change;</span> always request fresh details before transferring.
                                                        </p>
                                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/20 border border-red-900/20 rounded-lg">
                                                            <AlertTriangle size={12} className="text-red-600" />
                                                            <span className="text-[9px] font-mono text-red-500 uppercase">Warning: Do not reuse old account data</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* (b) Fees & Charges */}
                                                <div className="flex gap-6 group/item">
                                                    <span className="text-green-500 font-mono font-black text-sm pt-1">(b)</span>
                                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                        The User is responsible for <span className="text-white">all bank charges, wire fees, and currency conversion fees</span> from their end. Receiving bank charges may be deducted from the credited amount.
                                                    </p>
                                                </div>

                                                {/* (c) User ID Reference - CRITICAL */}
                                                <div className="flex gap-6 group/item p-6 bg-green-500/5 border border-green-500/10 rounded-2xl">
                                                    <span className="text-green-500 font-mono font-black text-sm pt-1">(c)</span>
                                                    <div className="space-y-2">
                                                        <p className="text-gray-200 text-sm md:text-base leading-relaxed font-bold">
                                                            The User’s ZeroDay Test User ID must be included in the payment reference/narration field.
                                                        </p>
                                                        <p className="text-xs text-gray-500 italic">
                                                            Transfers without a valid reference may experience significant crediting delays.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* (d) International SWIFT/FERA */}
                                                <div className="flex gap-6 group/item">
                                                    <span className="text-green-500 font-mono font-black text-sm pt-1">(d)</span>
                                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                        International wire transfers <span className="text-white font-medium">(SWIFT/IBAN)</span> must comply with the sender’s country regulations and Bangladesh Bank’s <span className="text-green-700 underline decoration-green-900">Foreign Exchange Regulation Act (FERA)</span>.
                                                    </p>
                                                </div>

                                                {/* (e) KYC/AML Rejection */}
                                                <div className="flex gap-6 group/item">
                                                    <span className="text-green-500 font-mono font-black text-sm pt-1">(e)</span>
                                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                        ZeroDay Test reserves the right to <span className="text-red-500 font-bold uppercase text-xs">reject or return</span> transfers that do not meet <span className="text-white">KYC (Know Your Customer)</span> or <span className="text-white">AML (Anti-Money Laundering)</span> requirements.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Bottom Decorative Scan Line */}
                                            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Section 04 Footer Meta */}
                                <div className="pl-4">
                                    <div className="p-4 bg-zinc-900/20 border border-white/5 rounded-xl flex items-center justify-between opacity-70">
                                        <div className="flex items-center gap-3">
                                            <Globe size={14} className="text-green-900" />
                                            <p className="text-[9px] font-mono text-gray-100 uppercase tracking-[0.2em]">
                                                Central_Bank_Compliance: <span className="text-green-700">Verified_by_ZDT</span>
                                            </p>
                                        </div>
                                        <p className="text-[9px] font-mono text-gray-200 uppercase tracking-tighter">Bnk_Node: 0x442A</p>
                                    </div>
                                </div>
                            </section>
                            {/* --- SECTION 05: PAYONEER TRANSFER TERMS --- */}
                            <section id="payoneer" className="scroll-mt-32 space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-blue-500/10 pb-4">
                                        <DollarSign className="text-blue-500" /> 05. PAYONEER TRANSFER TERMS
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic leading-relaxed">
                                        The following protocols are strictly followed when making international transactions through Pioneer.
                                    </p>
                                </div>

                                <div className="pl-4">
                                    {/* মেইন কন্টেইনার কার্ড */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative p-8 md:p-12 bg-[#030303] border border-blue-500/10 rounded-[1rem] hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
                                    >
                                        {/* Background Decor - Payoneer Blue Vibe */}
                                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] -z-10"></div>
                                        <div className="absolute -top-10 -left-10 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                            <Globe size={250} className="text-blue-500" />
                                        </div>

                                        <div className="relative z-10 space-y-10">
                                            {/* Protocol Identity */}
                                            <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-blue-500/10 rounded-lg">
                                                        <Zap size={18} className="text-blue-500" />
                                                    </div>
                                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">Protocol_ID: PAY_INTL_05</span>
                                                </div>
                                                <div className="hidden sm:flex gap-1.5">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                                </div>
                                            </div>

                                            {/* Terms List (a) to (e) */}
                                            <div className="grid grid-cols-1 gap-10">

                                                {/* (a) Account Verification */}
                                                <div className="flex gap-6 group/item">
                                                    <span className="text-blue-500 font-mono font-black text-sm pt-1">(a)</span>
                                                    <div className="space-y-3">
                                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                            The User must hold a <span className="text-white font-bold">valid, verified Payoneer account</span> in good standing.
                                                        </p>
                                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-[9px] font-mono text-blue-400 uppercase tracking-widest">
                                                            <CheckCircle size={10} /> Payoneer-to-Payoneer Direct Only
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* (b) Exact Account Match */}
                                                <div className="flex gap-6 group/item">
                                                    <span className="text-blue-500 font-mono font-black text-sm pt-1">(b)</span>
                                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                        ZeroDay Test’s Payoneer account email or ID will be provided <span className="text-white">upon request per transaction.</span> The User must transfer only to the <span className="text-blue-400 underline decoration-blue-900 underline-offset-4">exact Payoneer account specified.</span>
                                                    </p>
                                                </div>

                                                {/* (c) Fees & Min Amount - Highlight Box */}
                                                <div className="flex gap-6 group/item p-6 bg-zinc-900/50 border border-white/5 rounded-2xl relative">
                                                    <span className="text-blue-500 font-mono font-black text-sm pt-1">(c)</span>
                                                    <div className="space-y-4 w-full">
                                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                            Payoneer’s own transaction fees and currency conversion charges are <span className="text-white">borne by the User.</span>
                                                        </p>
                                                        <div className="flex flex-wrap gap-4">
                                                            <div className="px-4 py-2 bg-black border border-blue-500/20 rounded-xl">
                                                                <p className="text-[9px] font-mono text-gray-500 uppercase mb-1">Minimum Deposit</p>
                                                                <p className="text-white font-black text-lg">USD 50</p>
                                                            </div>
                                                            <div className="px-4 py-2 bg-black border border-blue-500/20 rounded-xl">
                                                                <p className="text-[9px] font-mono text-gray-500 uppercase mb-1">Minimum Withdrawal</p>
                                                                <p className="text-white font-black text-lg">USD 50</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* (d) Third Party Disclaimer */}
                                                <div className="flex gap-6 group/item">
                                                    <span className="text-blue-500 font-mono font-black text-sm pt-1">(d)</span>
                                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                        Payoneer transfers are subject to Payoneer’s own <span className="text-gray-200 italic">Terms of Service</span>, which the User is independently responsible for complying with. <span className="text-gray-500">ZeroDay Test is not a Payoneer agent or affiliate.</span>
                                                    </p>
                                                </div>

                                                {/* (e) Withdrawal Warning - CRITICAL */}
                                                <div className="flex gap-6 group/item">
                                                    <span className="text-blue-500 font-mono font-black text-sm pt-1">(e)</span>
                                                    <div className="space-y-4">
                                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                                            For withdrawals via Payoneer, the User <span className="text-white font-bold">must provide their verified Payoneer account email.</span>
                                                        </p>
                                                        <div className="p-4 bg-red-950/20 border border-red-900/30 rounded-xl flex items-start gap-3">
                                                            <AlertTriangle size={16} className="text-red-600 shrink-0 mt-0.5" />
                                                            <p className="text-[11px] text-red-500/80 font-mono uppercase leading-tight font-bold">
                                                                Notice: ZeroDay Test is not responsible for transfers sent to an incorrect account provided by the User.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        {/* Animated Scan Bar */}
                                        <div className="absolute top-0 right-0 h-full w-[2px] bg-blue-500/10 group-hover:bg-blue-500/30 transition-all"></div>
                                    </motion.div>
                                </div>

                                {/* Section 05 Footer Meta-data */}
                                <div className="pl-4">
                                    <div className="p-4 bg-zinc-900/20 border border-white/5 rounded-xl flex items-center justify-between opacity-30">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-blue-900" />
                                            <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.2em]">
                                                Gateway: <span className="text-blue-700">Payoneer_Global_Relay</span> | Status: <span className="text-green-900">Encrypted</span>
                                            </p>
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-blue-900 rounded-full"></div>)}
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* --- SECTION 06 & 07: FEES AND COMPLIANCE --- */}
                            <section id="compliance" className="scroll-mt-32 space-y-16">

                                {/* --- SECTION 06: FEES AND CHARGES --- */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <CreditCard className="text-green-500" /> 06. FEES AND CHARGES
                                    </h3>
                                    <div className="pl-4">
                                        <motion.div
                                            whileHover={{ scale: 1.01 }}
                                            className="p-6 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center gap-4 group"
                                        >
                                            <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center">
                                                <Zap size={20} />
                                            </div>
                                            <p className="text-sm md:text-base text-gray-400 font-mono uppercase tracking-widest">
                                                • Depends On <span className="text-white font-bold">Transaction Platform Charge.</span>
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* --- SECTION 07: COMPLIANCE & IDENTITY VERIFICATION --- */}
                                <div className="space-y-8">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Fingerprint className="text-green-500" /> 07. COMPLIANCE & IDENTITY VERIFICATION
                                    </h3>

                                    <div className="pl-4 space-y-8">
                                        {/* Platform Integrity Context */}
                                        <div className="p-8 bg-[#050505] border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                                <UserCheck size={180} className="text-white" />
                                            </div>

                                            <div className="relative z-10 space-y-6">
                                                <div className="flex items-center gap-2 text-green-900 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
                                                    [ INTEGRITY_PROTOCOL_v1.0 ]
                                                </div>
                                                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
                                                    ZeroDay Test is a vulnerability disclosure and bug bounty coordination platform. To ensure platform integrity, prevent fraud, and comply with applicable laws, <span className="text-white">ZeroDay Test may require basic identity verification</span> for researchers and clients prior to bounty payout or platform participation.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Accepted Verification Documents Grid */}
                                        <div className="space-y-6">
                                            <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Accepted Verification Documents
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                {[
                                                    { t: "National ID", d: "For Bangladeshi users", i: <ShieldCheck /> },
                                                    { t: "Passport", d: "For foreign users", i: <Globe /> },
                                                    { t: "Payout Details", d: "Bank or Payoneer account", i: <Wallet /> }
                                                ].map((doc, i) => (
                                                    <div key={i} className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl group hover:border-green-500/20 transition-all">
                                                        <div className="text-green-900 group-hover:text-green-500 transition-colors mb-4">
                                                            {React.cloneElement(doc.i as React.ReactElement<any>, { size: 24 })}
                                                        </div>
                                                        <h5 className="text-white font-bold text-sm uppercase mb-1">{doc.t}</h5>
                                                        <p className="text-[10px] text-gray-500 font-mono uppercase tracking-tighter">{doc.d}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Right to Suspend Alert - CRITICAL */}
                                        <div className="p-8 bg-red-950/10 border border-red-900/20 rounded-[2.5rem] relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-red-600/5 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 opacity-20"></div>

                                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                                                <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center text-red-500 shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                                                    <ShieldAlert size={32} />
                                                </div>
                                                <div className="space-y-3">
                                                    <h4 className="text-red-500 font-black uppercase text-xs tracking-widest">Enforcement & Platform Rights</h4>
                                                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed italic">
                                                        "ZeroDay Test reserves the right to <span className="text-red-500 font-bold">suspend accounts, withhold payouts,</span> or take appropriate action if fraudulent activity, false identity information, or abuse of the platform is detected."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 07 Tactical Footer Meta */}
                                <div className="pl-4">
                                    <div className="p-4 bg-zinc-900/20 border border-white/5 rounded-xl flex items-center justify-between opacity-80">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-green-900" />
                                            <p className="text-[9px] font-mono text-gray-200 uppercase tracking-[0.2em]">
                                                Identity_Layer: <span className="text-green-700">Multi_Factor_Verification_Ready</span>
                                            </p>
                                        </div>
                                        <div className="hidden md:block text-[9px] font-mono text-gray-200">AUTH_CORE: 0x77AF</div>
                                    </div>
                                </div>
                            </section>
                            {/* --- SECTION 08: REGULATORY AND CYBER LAW FRAMEWORK --- */}
                            <section id="laws" className="scroll-mt-32 space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Gavel className="text-green-500" /> 08. REGULATORY AND CYBER LAW FRAMEWORK
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic leading-relaxed">
                                        All financial transactions and operations of ZeroDay Test are regulated in accordance with prevailing cyber laws of Bangladesh and international standards.
                                    </p>
                                </div>

                                <div className="pl-4">
                                    {/* মেইন লিগ্যাল বোর্ড */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="group relative p-8 md:p-12 bg-zinc-950 border border-white/5 rounded-[2.5rem] hover:border-green-500/20 transition-all duration-500 overflow-hidden"
                                    >
                                        {/* Background Decorative Icon */}
                                        <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                            <ShieldAlert size={250} className="text-white" />
                                        </div>

                                        <div className="relative z-10 space-y-10">
                                            {/* Protocol Header */}
                                            <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="p-2 bg-green-500/10 rounded-lg">
                                                        <Scale size={18} className="text-green-500" />
                                                    </div>
                                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em]">[ LEGAL_GOVERNANCE_ACTIVE ]</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                                    <span className="text-[9px] font-mono text-green-900 uppercase">Status: Compliant</span>
                                                </div>
                                            </div>

                                            {/* Main Content Text */}
                                            <div className="space-y-8">
                                                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                                                    ZeroDay Test payment operations are <span className="text-white font-bold">governed by:</span>
                                                </p>

                                                {/* আইনগুলোর গ্রিড (Nodes) */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {[
                                                        { title: "Cyber Security Ordinance, 2025", desc: "(CSO 2025 — enacted May 22, 2025, replacing the Cyber Security Act, 2023)" },
                                                        { title: "Money Laundering Prevention Act, 2012", desc: "" },
                                                        { title: "Anti-Terrorism Act, 2009", desc: "(as amended)" },
                                                        { title: "BB Payment & Settlement Regulations, 2014", desc: "" },
                                                        { title: "Foreign Exchange Regulation Act", desc: "(FERA)" },
                                                        { title: "Consumer Rights Protection Act, 2009", desc: "" },
                                                        { title: "ICT Act, 2006", desc: "Information and Communication Technology" },
                                                        { title: "FATF Recommendations", desc: "International AML/CFT Standards" }
                                                    ].map((law, i) => (
                                                        <div key={i} className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl group/item hover:bg-green-500/5 hover:border-green-500/20 transition-all">
                                                            <div className="flex items-start gap-3">
                                                                <div className="mt-1 text-green-900 group-hover/item:text-green-500 transition-colors">
                                                                    <CheckCircle2 size={14} />
                                                                </div>
                                                                <div>
                                                                    <p className="text-xs font-bold text-gray-200 uppercase tracking-tight group-hover/item:text-green-400 transition-colors">{law.title}</p>
                                                                    {law.desc && <p className="text-[10px] text-gray-600 font-mono mt-1">{law.desc}</p>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* NCSA Compliance Box */}
                                                <div className="p-6 bg-black/60 border-l-4 border-green-600 rounded-r-2xl relative group/compliance">
                                                    <div className="flex items-start gap-4">
                                                        <div className="p-2 bg-green-900/20 text-green-500 rounded-lg shrink-0">
                                                            <ShieldCheck size={20} />
                                                        </div>
                                                        <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                                                            All payment operations comply with the <span className="text-white font-bold">National Cyber Security Agency (NCSA)</span> directives issued under <span className="text-green-500 font-mono underline decoration-green-900 underline-offset-4">CSO 2025</span>.
                                                        </p>
                                                    </div>
                                                    {/* Animated HUD corner */}
                                                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-green-900 opacity-20 group-hover/compliance:opacity-100 transition-opacity"></div>
                                                </div>
                                            </div>

                                            {/* Technical HUD Footer */}
                                            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                                                <div className="flex items-center gap-4 text-[9px] font-mono text-gray-600 uppercase tracking-[0.2em]">
                                                    <span>Framework: National_Cyber_Law</span>
                                                    <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
                                                    <span>Revision: 0x2025_B</span>
                                                </div>
                                                <div className="text-[10px] font-mono text-green-900">
                                                    AUTH_VERIFIED: PEOPLE’S_REPUBLIC_OF_BANGLADESH
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </section>

                            {/* SECTION 9: PROHIBITED */}
                            <section id="prohibited" className="scroll-mt-32 space-y-6">
                                <h3 className="text-xl font-bold text-red-500 uppercase flex items-center gap-3">
                                    <Ban /> 9. Prohibited Transactions
                                </h3>
                                <div className="p-6 bg-red-950/10 border border-red-900/20 rounded-2xl">
                                    <p className="text-xs text-gray-500 leading-relaxed italic">
                                        The following are strictly prohibited: transactions involving unlawful goods or services;
                                        money laundering or activities in violation of the Money Laundering Prevention Act, 2012;
                                        financing of terrorism (Anti-Terrorism Act, 2009); any activity constituting a cyber offense
                                        under the Cyber Security Ordinance, 2025; gambling or wagering transactions; providing
                                        false KYC information; circumventing Bangladesh Bank foreign exchange regulations;
                                        structuring transactions to evade AML reporting thresholds; and using another person’s bank
                                        or Payoneer account without explicit consent.
                                    </p>
                                </div>
                            </section>
                            {/* --- SECTION 10 & 11: LIABILITY & DISPUTE RESOLUTION --- */}
                            <section className="scroll-mt-32 space-y-16">

                                {/* --- SECTION 10: LIMITATION OF LIABILITY --- */}
                                <div id="liability" className="space-y-8">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <ShieldAlert className="text-red-500" /> 10. LIMITATION OF LIABILITY
                                    </h3>

                                    <div className="pl-4">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            className="p-8 bg-red-950/5 border border-red-900/20 rounded-[2.5rem] relative overflow-hidden group"
                                        >
                                            {/* Background Decor */}
                                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                                <FileWarning size={150} className="text-red-600" />
                                            </div>

                                            <div className="relative z-10 space-y-6">
                                                <div className="flex items-center gap-2 text-red-900 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
                                                    [ LIABILITY_LIMIT_ENFORCED ]
                                                </div>

                                                {/* মেইন লায়াবিলিটি টেক্সট */}
                                                <p className="text-sm md:text-base text-gray-300 leading-relaxed font-bold border-l-2 border-red-600 pl-6">
                                                    ZeroDay Test’s total liability for any payment-related claim shall not exceed the value of the disputed transaction.
                                                </p>

                                                <div className="space-y-4">
                                                    <p className="text-xs md:text-sm text-gray-500 uppercase font-black tracking-widest">Exclusion Nodes:</p>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {[
                                                            "Delays caused by third-party banks, Payoneer, or correspondent banks",
                                                            "Losses arising from incorrect bank or Payoneer account details provided by the User",
                                                            "Funds sent to payment methods not officially provided by ZeroDay Test",
                                                            "Payoneer’s own fees, processing decisions, or platform limitations",
                                                            "Delays arising from Bangladesh Bank directives or NCSA orders",
                                                            "Banking system outages constituting force majeure"
                                                        ].map((text, i) => (
                                                            <div key={i} className="flex gap-3 p-3 bg-black/40 border border-white/5 rounded-xl group/item hover:border-red-900/30 transition-all">
                                                                <XCircle size={14} className="text-red-900 mt-0.5 shrink-0 group-hover/item:text-red-600" />
                                                                <p className="text-[11px] text-gray-500 leading-tight italic">{text}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* --- SECTION 11: DISPUTE RESOLUTION AND GOVERNING LAW --- */}
                                <div id="dispute" className="space-y-10">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Gavel className="text-green-500" /> 11. DISPUTE RESOLUTION AND GOVERNING LAW
                                    </h3>

                                    <div className="pl-4 space-y-12">
                                        {/* Resolution Process Timeline */}
                                        <div className="relative group">
                                            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-8 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                                Resolution Protocol
                                            </h4>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                                                {/* Connecting line for desktop */}
                                                <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-zinc-900 -z-10"></div>

                                                {[
                                                    {
                                                        s: "Phase 01",
                                                        t: "Initial Submission",
                                                        d: "Payment disputes must be submitted to Support in writing within 30 days, with bank/Payoneer records."
                                                    },
                                                    {
                                                        s: "Phase 02",
                                                        t: "Platform Response",
                                                        d: "ZeroDay Test will respond within 10 business days to all verified written claims."
                                                    },
                                                    {
                                                        s: "Phase 03",
                                                        t: "Legal Escalation",
                                                        d: "Unresolved disputes may be escalated to Bangladesh Bank’s PSD or the DNCRP."
                                                    }
                                                ].map((step, i) => (
                                                    <div key={i} className="p-6 bg-zinc-950 border border-white/5 rounded-3xl hover:border-green-500/20 transition-all text-center relative group/card">
                                                        <span className="text-[9px] font-mono text-green-900 uppercase tracking-[0.3em] mb-3 block">{step.s}</span>
                                                        <h5 className="text-white font-bold text-sm uppercase mb-3">{step.t}</h5>
                                                        <p className="text-xs text-gray-500 font-light leading-relaxed">{step.d}</p>
                                                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-green-500 group-hover/card:w-1/2 transition-all"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Governing Law & Arbitration Box */}
                                        <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] relative overflow-hidden">
                                            <div className="absolute -bottom-4 -right-4 opacity-[0.03]">
                                                <Handshake size={150} className="text-white" />
                                            </div>

                                            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
                                                <div className="space-y-6">
                                                    <div className="flex items-center gap-3 text-green-500">
                                                        <Scale size={20} />
                                                        <h4 className="text-lg font-bold uppercase tracking-tight">Legal Jurisdiction</h4>
                                                    </div>
                                                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                                                        These PSP Terms are governed by the laws of the <span className="text-white font-bold">People’s Republic of Bangladesh.</span> Any dispute not resolved through internal resolution shall be referred to arbitration under the <span className="text-white underline decoration-green-900 underline-offset-4">Arbitration Act, 2001</span>.
                                                    </p>
                                                </div>

                                                <div className="p-6 bg-black border border-green-500/20 rounded-2xl space-y-4">
                                                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                                        <span className="text-[10px] font-mono text-gray-600 uppercase">Seat of Arbitration</span>
                                                        <span className="text-xs text-white font-bold">Dhaka, Bangladesh</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-[10px] font-mono text-gray-600 uppercase">Governing Code</span>
                                                        <span className="text-[10px] font-mono text-green-600 font-black">ACT_2001_ENFORCED</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 11 Final Acceptance Bar */}
                                <div className="pl-4">
                                    <div className="p-6 bg-green-600 rounded-3xl text-black shadow-[0_0_40px_rgba(22,163,74,0.3)] flex flex-col md:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-black rounded-lg text-green-500"><Lock size={20} /></div>
                                            <p className="text-xs md:text-sm font-black uppercase tracking-tight">
                                                By initiating transactions, you agree to these PSP Terms.
                                            </p>
                                        </div>
                                        <div className="text-[9px] font-mono font-black uppercase border-l border-black/20 pl-4 hidden md:block">
                                            Final_Protocol_Auth: v2.0 <br /> Last_Sync: 02/24/2026
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 12: AMENDMENTS & FUTURE METHODS --- */}
                            <section id="amendments" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <RefreshCw className="text-green-500" /> 12. AMENDMENTS AND FUTURE PAYMENT METHODS
                                    </h3>
                                </div>

                                <div className="pl-4 space-y-10">
                                    <div className="p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                            <FileEdit size={120} className="text-white" />
                                        </div>

                                        <div className="relative z-10 space-y-8 text-sm md:text-base leading-relaxed font-light text-gray-400">
                                            <p>
                                                ZeroDay Test reserves the right to amend these PSP Terms at any time with <span className="text-white font-bold">30 days’ notice</span> via email and platform notification. ZeroDay Test may introduce additional payment methods in the future; any new method will be officially announced and these Terms updated accordingly.
                                            </p>

                                            {/* Manual Process Restriction Highlight */}
                                            <div className="p-6 bg-red-950/10 border-l-2 border-red-600 rounded-r-2xl">
                                                <p className="text-xs md:text-sm text-gray-300">
                                                    <span className="text-red-500 font-black uppercase mr-2">[!] Current Restriction:</span>
                                                    Until then, only <span className="text-white font-bold">Bank Transfer and Payoneer</span> are accepted — no exceptions.
                                                </p>
                                            </div>

                                            <p>
                                                ZeroDay Test intends to integrate <span className="text-green-500">automated payment gateway solutions</span> in future versions. Manual processing is the current operational model and is subject to change as the platform scales.
                                            </p>
                                        </div>
                                    </div>

                                    {/* --- FINAL BINDING ACCEPTANCE --- */}
                                    <div className="p-10 bg-green-600 rounded-[1rem] text-black shadow-[0_0_50px_rgba(22,163,74,0.3)] relative overflow-hidden">
                                        <div className="absolute -right-10 -bottom-10 opacity-10">
                                            <ShieldCheck size={200} />
                                        </div>

                                        <div className="relative z-10 space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-black rounded-lg">
                                                    <CheckCircle2 size={24} className="text-green-500" />
                                                </div>
                                                <h4 className="text-xl font-black uppercase tracking-tight leading-none">Binding Confirmation</h4>
                                            </div>
                                            <p className="text-sm md:text-base font-bold leading-relaxed italic">
                                                "By initiating any deposit or withdrawal transaction, the User confirms that they have read, understood, and agree to be bound by these PSP Terms and Conditions."
                                            </p>
                                        </div>
                                    </div>

                                    {/* --- OFFICIAL SIGNATURE & EXECUTION BLOCK --- */}
                                    <div className="mt-20 pt-16 border-t border-white/10 space-y-16">

                                        {/* Phase 1: Interactive Execution Fields */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            <div className="space-y-8">
                                                <div className="group">
                                                    <p className="text-[10px] font-mono text-gray-600 uppercase mb-4 tracking-widest">ZeroDay Test Authorized Signatory</p>
                                                    <div className="w-full h-px bg-zinc-800 relative">
                                                        <div className="absolute bottom-2 left-0 text-[10px] font-mono text-green-900 opacity-50 italic">___________________________</div>
                                                    </div>
                                                </div>
                                                <div className="group">
                                                    <p className="text-[10px] font-mono text-gray-600 uppercase mb-4 tracking-widest">Client Signature</p>
                                                    <div className="w-full h-px bg-zinc-800 relative">
                                                        <div className="absolute bottom-2 left-0 text-[10px] font-mono text-green-900 opacity-50 italic">___________________________</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-8">
                                                <div className="group">
                                                    <p className="text-[10px] font-mono text-gray-600 uppercase mb-4 tracking-widest">Date of Execution</p>
                                                    <div className="w-full h-px bg-zinc-800 relative">
                                                        <div className="absolute bottom-2 left-0 text-[10px] font-mono text-green-900 opacity-50 italic">_______________________</div>
                                                    </div>
                                                </div>
                                                <div className="group">
                                                    <p className="text-[10px] font-mono text-gray-600 uppercase mb-4 tracking-widest">ZeroDay Test User ID</p>
                                                    <div className="w-full h-px bg-zinc-800 relative">
                                                        <div className="absolute bottom-2 left-0 text-[10px] font-mono text-green-900 opacity-50 italic">_______________________</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        
                                    </div>

                                    {/* --- FOOTNOTE --- */}
                                    <div className="text-center pt-20 pb-10 opacity-80 text-[10px] font-mono uppercase tracking-[0.8em]">
                                        — END OF PSP TERMS — <br />
                                        <span className="text-[8px] mt-2 block tracking-[0.2em]">ZeroDay Test | Payment Gateway Module v2.0</span>
                                    </div>

                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>

                {/* Global Footer Meta */}
                <div className="mt-12 text-center opacity-80">
                    <p className="text-gray-200 font-mono text-[9px] uppercase tracking-[0.5em]">ZERODAY TEST | PAYMENT SERVICE PROTOCOL | BYTE CAPSULE IT | NODE: 0x9AF2</p>
                </div>

            </div>
        </div>
    );
}

// Helper Components
function Info({ className, size }: { className?: string, size?: number }) {
    return <FileText className={className} size={size} />;
}
function Trophy({ className, size }: { className?: string, size?: number }) {
    return <Zap className={className} size={size} />;
}
function Clock({ className, size }: { className?: string, size?: number }) {
    return <History className={className} size={size} />;
}