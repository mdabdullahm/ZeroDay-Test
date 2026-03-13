"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    FileLock, ShieldCheck, Gavel, EyeOff,
    Terminal, Lock, Fingerprint, Scale,
    Printer, Info, CheckCircle, ShieldAlert,
    QrCode, Mail, Phone, MapPin, Globe
} from 'lucide-react';

const sections = [
    { id: "purpose", title: "1. Purpose", icon: <Info size={16} /> },
    { id: "info", title: "2. Confidential Information", icon: <EyeOff size={16} /> },
    { id: "obligations", title: "3. Client Obligations", icon: <Lock size={16} /> },
    { id: "disclosure", title: "4. Responsible Disclosure", icon: <Terminal size={16} /> },
    { id: "compliance", title: "5. Data Compliance", icon: <ShieldAlert size={16} /> },
    { id: "ip", title: "6. Intellectual Property", icon: <Fingerprint size={16} /> },
    { id: "term", title: "7. Term & Survival", icon: <ShieldCheck size={16} /> },
    { id: "breach", title: "8. Breach", icon: <Scale size={16} /> },
    { id: "governing", title: "9. Governing Law", icon: <Gavel size={16} /> },
];

export default function ClientNDAPage() {
    const handlePrint = () => window.print();

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">

                {/* Document Header (Letterhead Style) */}
                <div className="mb-12 bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <img src="/ZeroDay Test Logo (2).png" alt="Byte Capsule" className="h-12 mb-4" />
                        <h2 className="text-white font-black text-xl tracking-widest uppercase">Byte Capsule</h2>
                        <div className="text-[10px] font-mono text-gray-500 space-y-1 mt-2">
                            <p className="flex items-center gap-2"><MapPin size={10} /> Level-4, Byte Capsule, 15 Indira Road, Farmgate, Dhaka-1215</p>
                            <p className="flex items-center gap-2"><Mail size={10} /> mail@bytecapsuleit.com | <Phone size={10} /> +8801796934898</p>
                            <p className="flex items-center gap-2"><Globe size={10} /> bytecapsuleit.com</p>
                        </div>
                    </div>
                    <div className="p-3 bg-white rounded-xl">
                        <QrCode size={60} className="text-black" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">

                    {/* Sidebar Navigation */}
                    <aside className="hidden lg:block sticky top-32 space-y-2">
                        <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Agreement_Nodes</p>
                        {sections.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group">
                                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                                <span className="text-[11px] font-bold uppercase tracking-tight">{item.title}</span>
                            </a>
                        ))}
                        <button onClick={handlePrint} className="w-full mt-6 flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black hover:bg-green-600 hover:text-black transition-all">
                            <Printer size={14} /> PRINT_OFFICIAL_COPY
                        </button>
                    </aside>

                    {/* Main Content Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-950/80 border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                    >
                        {/* Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                            <img src="/ZeroDay Test Logo.png" alt="" className="w-[500px]" />
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                                    Client Non-Disclosure & <br />
                                    <span className="text-green-500">Confidentiality</span> Agreement
                                </h1>
                                <div className="flex flex-col items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                                    <p>Effective Date: <span className="text-white">February 09, 2026</span></p>
                                    <p>Platform Owner: <span className="text-white">Zeroday Test – Byte Capsule IT</span></p>
                                </div>
                            </div>

                            <div className="space-y-12 text-sm md:text-base leading-relaxed font-light text-gray-400">

                                <p className="italic bg-white/5 p-6 rounded-2xl border-l-2 border-green-500">
                                    By registering as a Client, submitting a program, or clicking “I Agree,” you agree to be legally bound by this Agreement.
                                </p>

                                {/* Section 1 */}
                                <div id="purpose" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">1. Purpose</h3>
                                    <p>This Agreement governs the protection of confidential information shared between the Client (Company), security researchers (“Hunters”), and Zeroday Test in connection with vulnerability disclosure and bug bounty programs.</p>
                                </div>

                                {/* Section 2 */}
                                <div id="info" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">2. Confidential Information</h3>
                                    <p className="mb-6">Confidential Information includes but is not limited to:</p>
                                    <ul className="grid md:grid-cols-1 gap-3 list-none">
                                        {[
                                            "Vulnerability reports submitted by Hunters",
                                            "Security findings, exploit details, proof-of-concept data",
                                            "Hunter identity and contact information",
                                            "Platform communications and internal assessments",
                                            "Any non-public technical or business information"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 p-3 bg-zinc-900/50 border border-white/5 rounded-xl text-xs font-mono">
                                                <CheckCircle size={14} className="text-green-500" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Section 3 */}
                                <div id="obligations" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">3. Client Obligations</h3>
                                    <ul className="space-y-4 text-sm font-light list-none">
                                        {[
                                            "Keep all vulnerability reports strictly confidential.",
                                            "Not disclose vulnerability details publicly without written approval from Zeroday Test and the respective Hunter.",
                                            "Not pursue legal action against Hunters acting within authorized scope and platform rules.",
                                            "Not disclose Hunter identity without written consent unless required by law.",
                                            "Use vulnerability information solely for remediation and security improvement purposes."
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-4">
                                                <span className="text-green-500 font-mono font-bold">0{i + 1}.</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Section 4 */}
                                <div id="disclosure" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">4. Responsible Disclosure</h3>
                                    <p>The Client shall follow coordinated disclosure practices. Public disclosure may only occur after remediation and with written consent from Zeroday Test and the Hunter.</p>
                                </div>

                                {/* Section 5 */}
                                <div id="compliance" className="scroll-mt-32 p-8 bg-zinc-900 border border-green-500/20 rounded-3xl">
                                    <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-3">
                                        <ShieldAlert className="text-green-500" /> 5. Data Protection Compliance
                                    </h3>
                                    <p className="mb-6 text-sm">The Client agrees to comply with the following statutory frameworks of Bangladesh:</p>
                                    <div className="flex flex-wrap gap-3">
                                        {["Bangladesh Cyber Security Act 2025", "Digital Security Act 2018", "ICT Act 2006", "International Data Standards"].map((law, i) => (
                                            <span key={i} className="px-3 py-1 bg-black border border-white/10 rounded-lg text-[10px] font-mono text-gray-500 uppercase tracking-widest">{law}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Section 6 */}
                                <div id="ip" className="scroll-mt-32">
                                    <h3 className="text-xl font-bold text-white uppercase mb-4 flex items-center gap-3">6. Intellectual Property</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="flex gap-3">• Vulnerability reports remain the intellectual property of the Hunter until reward payment is completed.</li>
                                        <li className="flex gap-3">• After payment, remediation rights transfer to the Client.</li>
                                        <li className="flex gap-3">• Platform tools and systems remain the property of Zeroday Test.</li>
                                    </ul>
                                </div>

                                {/* Section 7, 8, 9 */}
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div id="term">
                                        <h4 className="text-white font-bold uppercase text-xs mb-3 tracking-widest">7. Term & Survival</h4>
                                        <p className="text-xs text-gray-500">Effective during program participation and for five (5) years after termination. Trade secrets remain protected indefinitely.</p>
                                    </div>
                                    <div id="breach">
                                        <h4 className="text-white font-bold uppercase text-xs mb-3 tracking-widest text-red-500">8. Breach</h4>
                                        <p className="text-xs text-gray-500">Violation may result in suspension from platform, legal proceedings, and financial liability for damages.</p>
                                    </div>
                                </div>

                                {/* Section 9 */}
                                <div id="governing" className="scroll-mt-32 pt-8 border-t border-white/5">
                                    <h4 className="text-white font-bold uppercase text-xs mb-2 tracking-widest">9. Governing Law</h4>
                                    <p className="text-xs font-mono text-gray-600">This Agreement shall be governed by the laws of the People’s Republic of Bangladesh.</p>
                                </div>

                                {/* Signature/Approval Section (Image 2 Style) */}
                                <div className="mt-20 pt-12 border-t border-white/10">
                                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                                        {/* Approval Agent Section */}
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

                                        <div className="bg-green-600 p-8 rounded-[2.5rem] text-black max-w-sm shadow-[0_0_40px_rgba(34,197,94,0.3)]">
                                            <h4 className="font-black uppercase text-sm mb-4">Electronic Acceptance</h4>
                                            <p className="text-[10px] font-bold leading-relaxed mb-4">
                                                By clicking “I Agree,” you confirm that you have read and understood this Agreement and agree to be legally bound by its terms. Electronic consent constitutes a legally binding signature.
                                            </p>
                                            <div className="flex items-center gap-2 font-mono text-[9px] font-black uppercase tracking-tighter">
                                                <CheckCircle size={14} /> Protocol_Authenticated
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
                    <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.5em]">
                        Confidential Document | ZeroDay Test | Node: Dhaka_Core_0x7
                    </p>
                </div>

            </div>
        </div>
    );
}