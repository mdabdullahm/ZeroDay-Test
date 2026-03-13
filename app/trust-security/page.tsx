"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Gavel, Cpu, Lock,
    Server, Zap, FileSearch, Terminal,
    CheckCircle, Printer, QrCode, Mail,
    Phone, MapPin, Globe, ShieldAlert, Database,
    Search, HardDrive, History, FileWarning
} from 'lucide-react';

const sections = [
    { id: "legal", title: "1. Legal Framework", icon: <Gavel size={16} /> },
    { id: "compliance", title: "2. Compliance by Design", icon: <ShieldCheck size={16} /> },
    { id: "technical", title: "3. Technical Controls", icon: <Cpu size={16} /> },
    { id: "encryption", title: "4. Encryption & Data", icon: <Lock size={16} /> },
    { id: "sdlc", title: "5. Secure Development", icon: <Terminal size={16} /> },
    { id: "incident", title: "6. Incident Response", icon: <Zap size={16} /> },
    { id: "resilience", title: "7. Systems Resilience", icon: <History size={16} /> },
    { id: "ownership", title: "8. Data Ownership", icon: <Database size={16} /> },
];

export default function TrustSecurityPage() {
    const handlePrint = () => window.print();

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">

                {/* --- অফিশিয়াল লেটারহেড (Page 1 Top) --- */}
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
                        <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Security_Nodes</p>
                        {sections.map((item) => (
                            <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 p-3 rounded-xl border border-white/5 text-gray-500 hover:text-green-500 hover:bg-green-500/5 transition-all group">
                                <span className="text-green-900 group-hover:text-green-500 transition-colors">{item.icon}</span>
                                <span className="text-[11px] font-bold uppercase tracking-tight">{item.title}</span>
                            </a>
                        ))}
                        <button onClick={handlePrint} className="w-full mt-6 flex items-center justify-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black hover:bg-green-600 hover:text-black transition-all uppercase">
                            <Printer size={14} /> PRINT_SECURITY_LOG
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
                            <ShieldCheck size={500} className="text-green-500" />
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <p className="text-gray-500 font-mono text-xs uppercase mb-2">CONFIDENTIAL</p>
                                <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                                    Trust & <span className="text-green-500">Security</span>
                                </h1>
                                <p className="text-white font-bold text-sm md:text-lg uppercase tracking-tight max-w-2xl mx-auto">
                                    Security, Legal Compliance & Data Protection are Core to Byte Capsule IT
                                </p>
                            </div>

                            <div className="space-y-16 text-sm md:text-base leading-relaxed font-light text-gray-400">

                                {/* --- SECTION 1: LEGAL FRAMEWORK (Page 1) --- */}
                                <div id="legal" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Gavel size={24} className="text-green-500" /> 1. Legal Framework for Cybersecurity in Bangladesh
                                    </h3>
                                    <div className="space-y-8 pl-4">
                                        <div className="group">
                                            <h4 className="text-green-500 font-bold text-sm uppercase mb-3 flex items-center gap-2">
                                                Cyber Security Act / Ordinance 2025 (CSA 2025)
                                            </h4>
                                            <p className="text-gray-400">The Cyber Security Act / Cyber Security Ordinance 2025 was introduced to establish a modern legal structure for digital security, cybercrime prevention, prosecution, and national cybersecurity governance in Bangladesh. It defines mechanisms for identifying, preventing, suppressing, investigating, and prosecuting offences in cyberspace. The law also provides for the formation of a National Cybersecurity Council and frameworks for regional and international cooperation on cyber issues.</p>
                                        </div>
                                        <div className="group">
                                            <h4 className="text-green-500 font-bold text-sm uppercase mb-3 flex items-center gap-2">
                                                Digital Security Act 2018 (DSA 2018)
                                            </h4>
                                            <p className="text-gray-400">The Digital Security Act 2018 was enacted to regulate digital security and prevent offences committed through digital devices and media. It aimed to curb harmful content, hate speech, cybercrime, and extremist propaganda online. Many provisions were controversial and heavily criticized for broad enforcement powers. Portions of the DSA have been repealed or superseded under newer cybersecurity laws including the CSA 2025.</p>
                                        </div>
                                        <div className="group">
                                            <h4 className="text-green-500 font-bold text-sm uppercase mb-3 flex items-center gap-2">
                                                Information and Communication Technology (ICT) Act 2006
                                            </h4>
                                            <p className="text-gray-400">The ICT Act 2006 was one of the earliest statutory frameworks governing ICT and cyber activities in Bangladesh, including legal recognition of electronic transactions, signatures, and penalties for certain cyber offences. Section 57 of the ICT Act (now repealed) historically influenced later cybersecurity laws due to criticisms around freedom of speech restrictions.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* --- SECTION 2: COMPLIANCE (Page 1 Bottom) --- */}
                                <div id="compliance" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <ShieldCheck size={24} className="text-green-500" /> 2. Compliance & Security by Design
                                    </h3>
                                    <div className="space-y-6 pl-4">
                                        <div className="p-6 bg-zinc-900/50 border border-green-500/10 rounded-2xl">
                                            <h4 className="text-white font-bold text-xs uppercase mb-3 tracking-widest">Law-Aligned Data Protection & Usage</h4>
                                            <p className="text-sm">Byte Capsule IT ensures that all services and platforms comply with applicable provisions of Bangladesh’s cyber laws and international best practices for data protection. This includes lawful handling of user data, prevention of unauthorized access, and adherence to procedural safeguards set by the Cyber Security Act / Ordinance 2025 and related legislation.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-xs uppercase mb-4 tracking-widest">Regulatory & Security Best Practices</h4>
                                            <ul className="space-y-3">
                                                {["Protection of critical data infrastructures under CSA 2025 governance frameworks", "Compliance with lawful request and disclosure procedures under applicable laws", "Respect for rights protected under national law and procedural norms"].map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-xs font-mono text-gray-500 italic">
                                                        <span className="text-green-500">●</span> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* --- SECTION 3: TECHNICAL CONTROLS (Page 2 Top) --- */}
                                <div id="technical" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Cpu size={24} className="text-green-500" /> 3. Technical & Operational Security Controls
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-8 pl-4">
                                        <div className="space-y-4">
                                            <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2"><Server size={14} className="text-green-500" /> Secure Infrastructure</h4>
                                            <ul className="space-y-3 text-xs font-mono text-gray-500">
                                                <li>• Hardened multi-layer firewall and network segmentation</li>
                                                <li>• Default deny-all access when not expressly permitted</li>
                                                <li>• Continuous monitoring, logging, and SIEM-based threat detection</li>
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2"><Lock size={14} className="text-green-500" /> Strong Authentication</h4>
                                            <ul className="space-y-3 text-xs font-mono text-gray-500">
                                                <li>• Two-Factor Authentication (2FA) via TOTP</li>
                                                <li>• Role-Based Access Control (RBAC)</li>
                                                <li>• Principle of Least Privilege enforced for all accounts</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* --- SECTION 4: ENCRYPTION (Page 2 Middle) --- */}
                                <div id="encryption" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Lock size={24} className="text-green-500" /> 4. Encryption & Data Protection
                                    </h3>
                                    <div className="p-8 bg-zinc-900 border border-green-500/20 rounded-[2.5rem]">
                                        <h4 className="text-green-500 font-bold text-xs uppercase mb-6 tracking-widest">State-of-the-Art Encryption</h4>
                                        <div className="grid md:grid-cols-3 gap-8 text-center">
                                            <div className="space-y-2">
                                                <div className="p-3 bg-green-500/10 rounded-xl w-fit mx-auto text-green-500"><Globe size={20} /></div>
                                                <p className="text-[10px] font-mono uppercase">TLS encryption for all platform comms</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="p-3 bg-green-500/10 rounded-xl w-fit mx-auto text-green-500"><HardDrive size={20} /></div>
                                                <p className="text-[10px] font-mono uppercase">AES-256 encryption for stored data</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="p-3 bg-green-500/10 rounded-xl w-fit mx-auto text-green-500"><Search size={20} /></div>
                                                <p className="text-[10px] font-mono uppercase">Salted and hashed password storage</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* --- SECTION 5: SDLC (Page 2 Middle) --- */}
                                <div id="sdlc" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Terminal size={24} className="text-green-500" /> 5. Secure Development Lifecycle
                                    </h3>
                                    <div className="space-y-4 pl-4">
                                        <p className="text-sm">Byte Capsule IT develops all software and platforms with security integrated throughout the development lifecycle:</p>
                                        <div className="flex flex-wrap gap-4">
                                            {["Secure coding standards", "Regular code reviews", "Automated CI/CD pipelines", "Segregated environments (Dev/Stage/Prod)"].map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-lg text-[10px] font-mono text-gray-500 italic"># {tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* --- SECTION 6: INCIDENT RESPONSE (Page 2 Bottom) --- */}
                                <div id="incident" className="scroll-mt-32">
                                    <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Zap size={24} className="text-green-500" /> 6. Incident Response & Transparency
                                    </h3>
                                    <div className="space-y-4 pl-4">
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest">Proactive Protection & Response</h4>
                                        <ul className="space-y-2 text-sm italic font-light list-none">
                                            <li className="flex gap-3"><CheckCircle size={14} className="text-green-900 mt-1" /> 24/7 monitoring and centralized logging</li>
                                            <li className="flex gap-3"><CheckCircle size={14} className="text-green-900 mt-1" /> Rapid assessment and mitigation of incidents</li>
                                            <li className="flex gap-3"><CheckCircle size={14} className="text-green-900 mt-1" /> Timely notifications as required under law</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* --- SECTION 7 & 8: RESILIENCE & OWNERSHIP (Page 3 Top) --- */}
                                <div id="resilience" className="scroll-mt-32 grid md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-white uppercase flex items-center gap-3 tracking-tighter"><FileSearch size={20} className="text-green-500" /> Independent Testing</h3>
                                        <div className="space-y-4 pl-4 text-xs">
                                            <p><span className="text-white font-bold">Security Validation:</span> Scheduled penetration tests by qualified providers and remediation programs.</p>
                                            <p><span className="text-white font-bold">Backup & Recovery:</span> Encrypted backups across multiple locations with regular recovery exercises.</p>
                                        </div>
                                    </div>
                                    <div id="ownership" className="space-y-6">
                                        <h3 className="text-xl font-bold text-white uppercase flex items-center gap-3 tracking-tighter"><Database size={20} className="text-green-500" /> Customer Data Ownership</h3>
                                        <p className="text-xs text-gray-500 pl-4">Clients retain full ownership and control of their data at all times, including permissioned access, role management, and secure storage of sensitive reports with encryption keys protected separately.</p>
                                    </div>
                                </div>



                                {/* --- SIGNATURE SECTION (Page 3 Bottom) --- */}
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

                                        {/* নীল রঙের সেই ডেকোরেশন স্ট্যাম্প */}
                                        {/* --- OUR COMMITMENT (Page 3 Bottom) --- */}
                                        <div className="mt-24 p-12 bg-green-600 rounded-[3rem] text-black shadow-[0_0_50px_rgba(34,197,94,0.3)] relative overflow-hidden">
                                            <div className="relative z-10 text-center space-y-6">
                                                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Our Commitment</h3>
                                                <p className="text-sm md:text-base font-bold max-w-2xl mx-auto leading-relaxed italic">"Byte Capsule IT believes: Security and compliance are fundamental responsibilities."</p>
                                                <p className="text-xs font-bold max-w-xl mx-auto uppercase">We commit to aligning with Bangladesh’s cyber security legal framework and global best practices to deliver trusted services.</p>

                                                <div className="pt-8 border-t border-black/10 flex flex-col items-center">
                                                    <p className="text-[10px] font-black uppercase tracking-widest mb-4">Have questions about our security and legal compliance?</p>
                                                    <a href="mailto:pentest@bytecapsuleit.com" className="flex items-center gap-3 px-10 py-4 bg-black text-white font-black rounded-2xl text-xs tracking-widest hover:bg-zinc-900 transition-all uppercase">
                                                        <Mail size={18} /> Contact Security Team
                                                    </a>
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
                <div className="mt-12 text-center opacity-30 flex flex-col md:flex-row justify-center items-center gap-6">
                    <p className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.5em]">CONFIDENTIAL DOCUMENT | TRUST & SECURITY PROTOCOL | NODE: 0x9AF2</p>
                </div>

            </div>
        </div>
    );
}