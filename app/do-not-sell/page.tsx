"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldOff, ShieldCheck, Lock, Gavel,
    EyeOff, Terminal, UserCheck, Share2,
    Printer, QrCode, Mail, Phone, MapPin,
    Globe, Info, Cpu, Cookie, FileWarning
} from 'lucide-react';

const sections = [
    { id: "nosale", title: "1. No Sale Policy", icon: <ShieldOff size={16} /> },
    { id: "operational", title: "2. Operational Disclosures", icon: <Share2 size={16} /> },
    { id: "cookies", title: "3. Cookies & Tech", icon: <Cookie size={16} /> },
    { id: "compliance", title: "4. Cyber Law Compliance", icon: <Gavel size={16} /> },
    { id: "rights", title: "5. Your Rights & Choices", icon: <UserCheck size={16} /> },
    { id: "updates", title: "6. Updates & Legal Changes", icon: <Info size={16} /> },
];

export default function DoNotSellPage() {
    const handlePrint = () => window.print();

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">

            {/* Background Matrix Decor */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">

                {/* --- ১. অফিশিয়াল লেটারহেড (Page 1 Top) --- */}
                <div className="mb-12 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="flex items-center gap-3 mb-2">
                            <ShieldCheck className="text-green-500" size={32} />
                            <h2 className="text-white font-black text-2xl tracking-widest uppercase">Byte Capsule</h2>
                        </div>
                        <div className="text-[10px] font-mono text-gray-500 space-y-1">
                            <p className="flex items-center gap-2 justify-center md:justify-start font-bold text-gray-400 uppercase tracking-tighter italic">STAY SAFE, STAY SECURE</p>
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

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block sticky top-32 space-y-2">
                        <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Policy_Nodes</p>
                        {sections.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group">
                                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                                <span className="text-[11px] font-bold uppercase tracking-tight">{item.title}</span>
                            </a>
                        ))}
                        <button onClick={handlePrint} className="w-full mt-6 flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black hover:bg-green-600 hover:text-black transition-all uppercase">
                            <Printer size={14} /> PRINT_POLICY_DOC
                        </button>
                    </aside>

                    {/* Main Content Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-950/80 border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                    >
                        {/* Watermark Logo */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                            <ShieldOff size={500} className="text-green-500" />
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <p className="text-gray-500 font-mono text-xs uppercase mb-2">CONFIDENTIAL</p>
                                <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                                    ZeroDay Test – Do Not <br />
                                    <span className="text-green-500 text-2xl md:text-4xl">Sell or Share My Information Policy</span>
                                </h1>
                                <div className="flex flex-col items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                                    <p>Platform: <span className="text-white">ZeroDay Test (Operated by Byte Capsule IT)</span></p>
                                    <p>Last Updated: <span className="text-white">February 09, 2026</span></p>
                                </div>
                            </div>

                            <div className="space-y-16 text-sm md:text-base leading-relaxed font-light text-gray-400">

                                {/* --- SECTION 1: NO SALE (Page 1) --- */}
                                <div id="nosale" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <ShieldOff size={22} className="text-green-500" /> 1. No Sale or Commercial Trading of Personal Information
                                    </h3>
                                    <p className="mb-6">Byte Capsule IT does <span className="text-white font-bold uppercase">not sell, rent, or commercially share</span> personal information of users of the ZeroDay Test platform.</p>
                                    <div className="p-6 bg-zinc-900/50 border border-green-500/10 rounded-2xl">
                                        <p className="text-gray-400 leading-relaxed">
                                            Under the <span className="text-white">Cyber Security Ordinance / Cyber Security Act 2025</span>, <span className="text-white">Digital Security Act 2018</span>, and <span className="text-white">ICT Act 2006</span>, any unauthorized transfer, sale, or misuse of personal information is prohibited and may constitute a cyber offence. Personal data is treated as confidential and is never shared with third parties for advertising, profiling, or commercial purposes.
                                        </p>
                                    </div>
                                </div>

                                {/* --- SECTION 2: DISCLOSURES (Page 1 Middle) --- */}
                                <div id="operational" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Share2 size={22} className="text-green-500" /> 2. Legitimate Operational Disclosures
                                    </h3>
                                    <p className="mb-6">Personal information may be shared <span className="text-white font-bold">only where necessary</span> for the authorized operations of the ZeroDay Test platform, including:</p>
                                    <ul className="space-y-4 pl-4 border-l border-white/5">
                                        <li className="flex gap-4">
                                            <span className="text-green-500 font-bold">•</span>
                                            <span><span className="text-white font-bold uppercase text-xs">Service providers and vendors</span> assisting with hosting, security, analytics, identity verification, and technical support under confidentiality obligations;</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-green-500 font-bold">•</span>
                                            <span><span className="text-white font-bold uppercase text-xs">Clients and program owners</span> for Bug Bounty or vulnerability disclosure programs, strictly for program operations;</span>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-green-500 font-bold">•</span>
                                            <span><span className="text-white font-bold uppercase text-xs">Law enforcement or government authorities</span> when required by lawful request under Bangladesh laws, including Cyber Security Act 2025, Digital Security Act 2018, or ICT Act 2006.</span>
                                        </li>
                                    </ul>
                                    <p className="mt-6 text-sm italic font-mono text-gray-600">All disclosures are minimized to the least amount of information necessary for the specified purpose.</p>
                                </div>

                                {/* --- SECTION 3: COOKIES (Page 1 Bottom) --- */}
                                <div id="cookies" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Cookie size={22} className="text-green-500" /> 3. Limited Use of Cookies and Similar Technologies
                                    </h3>
                                    <p className="mb-4">ZeroDay Test uses cookies, pixel tags, and similar technologies <span className="text-white font-bold">only for:</span></p>
                                    <ul className="space-y-3 pl-6 list-disc text-gray-500">
                                        <li>Secure login and session management;</li>
                                        <li>Monitoring platform performance and detecting fraudulent or abusive behavior;</li>
                                        <li>Security monitoring for protection of data and systems.</li>
                                    </ul>
                                    <div className="mt-8 p-6 bg-black border border-white/10 rounded-2xl">
                                        <p className="text-sm">These technologies are <span className="text-white font-bold uppercase">not used to create advertising profiles</span> or for data resale. Users may manage or disable cookies through browser or device settings; however, certain platform features may not function without them.</p>
                                    </div>
                                </div>

                                {/* --- SECTION 4: LAWS (Page 2 Top) --- */}
                                <div id="laws" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Gavel size={22} className="text-green-500" /> 4. Compliance with Bangladesh Cyber Laws
                                    </h3>
                                    <p className="mb-6">Byte Capsule IT operates ZeroDay Test in compliance with:</p>
                                    <ul className="space-y-6 pl-4">
                                        <li className="flex gap-4">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <p><span className="text-white font-bold">ICT Act 2006</span>, covering electronic communications, cybercrime, and unauthorized access;</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <p><span className="text-white font-bold">Digital Security Act 2018</span>, covering digital data protection, cybercrime, and penalties for unauthorized access or disclosure;</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                            <p><span className="text-white font-bold">Cyber Security Act 2025</span>, establishing modernized governance for cybersecurity, protection of sensitive and personal data, prevention of cybercrime, and accountability of platform operators.</p>
                                        </li>
                                    </ul>
                                    <p className="mt-8 text-sm italic border-l-2 border-green-500/30 pl-4">These laws collectively ensure that personal data is handled securely, with legal protection, and prevent misuse or unauthorized disclosure.</p>
                                </div>

                                {/* --- SECTION 5: RIGHTS (Page 2 Middle) --- */}
                                <div id="rights" className="scroll-mt-32 p-10 bg-green-600 rounded-[1rem] text-black shadow-[0_0_50px_rgba(34,197,94,0.3)]">
                                    <div className="flex items-center gap-4 mb-8">
                                        <UserCheck size={32} />
                                        <h3 className="text-2xl font-black uppercase tracking-tight">5. Your Rights and Choices</h3>
                                    </div>
                                    <p className="font-bold mb-6 italic">Under Bangladesh law, users have the right to:</p>
                                    <ul className="space-y-4 text-sm font-bold uppercase tracking-tight">
                                        <li className="flex gap-3 items-center">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full">
                                            </div> Request access to their personal information held by Byte Capsule IT;</li>
                                        <li className="flex gap-3 items-center">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full">
                                            </div> Request correction of inaccurate or incomplete data;</li>
                                        <li className="flex gap-3 items-center">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full">
                                            </div> Request deletion or restriction of personal information;</li>
                                        <li className="flex gap-3 items-center">
                                            <div className="w-1.5 h-1.5 bg-black rounded-full">
                                            </div> Object to processing operations that are not legally required.</li>
                                    </ul>
                                    <div className="mt-10 pt-8 border-t border-black/10">
                                        <p className="text-xs uppercase font-black mb-2">Data Protection Uplink:</p>
                                        <p className="font-mono text-lg">privacy@bytecapsule.com</p>
                                    </div>
                                </div>

                                {/* --- SECTION 6: UPDATES (Page 2 Middle) --- */}
                                <div id="updates" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">
                                        <Info size={22} className="text-green-500" /> 6. Updates and Legal Changes
                                    </h3>
                                    <p className="text-sm">Byte Capsule IT will update this policy as needed to comply with amendments to the Cyber Security Act 2025, Digital Security Act 2018, ICT Act 2006, or other relevant laws. All updates will be posted on the ZeroDay Test platform and communicated to users as required.</p>
                                </div>

                                {/* --- SIGNATURE SECTION (Page 2 Bottom) --- */}
                                <div className="mt-20 pt-12 border-t border-white/10">
                                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                                        <div className="space-y-6">
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
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Global Footer Meta */}
                <div className="mt-12 text-center opacity-30">
                    <p className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.5em]">CONFIDENTIAL DOCUMENT | IDENTITY_PROTECTION_PROTOCOL | NODE: 0x9AF2</p>
                </div>

            </div>
        </div>
    );
}