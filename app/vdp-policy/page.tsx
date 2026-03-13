"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ShieldCheck, Bug, Scale, Gavel,
    Terminal, Lock, Zap, Trophy,
    AlertTriangle, Info, FileText,
    Cpu, Globe, Mail, Phone, Clock,
    CheckCircle2, AlertCircle, Printer,
    QrCode, MapPin, Handshake, Users,
    History, FileWarning, Search, BarChart3,
    ShieldAlert,
    Ban,
    Copy,
    Award,
    Medal,
    FileBadge,
    Star,
    RefreshCcw,
    X,
    EyeOff,
    BookOpen,
    Database,
    Building,
    XCircle,
    Building2,
    Radio,
    Siren,
    FileSignature
} from 'lucide-react';

const sections = [
    { id: "overview", title: "1. Program Overview", icon: <Info size={16} /> },
    { id: "eligibility", title: "2. Eligibility", icon: <CheckCircle2 size={16} /> },
    { id: "scope", title: "3. Scope Definition", icon: <Target size={16} /> },
    { id: "severity", title: "4. Vulnerability Classification", icon: <AlertTriangle size={16} /> },
    { id: "safeharbor", title: "5. Safe Harbor", icon: <ShieldCheck size={16} /> },
    { id: "testing", title: "6. Rules of Engagement", icon: <Lock size={16} /> },
    { id: "submission", title: "7. Submission Requirements", icon: <Terminal size={16} /> },
    { id: "sla", title: "8. Response & Remediation", icon: <Clock size={16} /> },
    { id: "recognition", title: "9. Recognition & Rewards", icon: <Trophy size={16} /> },
    { id: "disclosure", title: "10. Disclosure Policy", icon: <FileText size={16} /> },
    { id: "dispute", title: "11. Dispute Resolution", icon: <Gavel size={16} /> },
    { id: "modification", title: "12. Program Modifications", icon: <History size={16} /> },
    { id: "responsibilities", title: "13. Platform Responsibilities", icon: <Cpu size={16} /> },
    { id: "compliance", title: "14. Legal Framework", icon: <Scale size={16} /> },
    { id: "special", title: "15. Special Provisions", icon: <Globe size={16} /> },
    { id: "conduct", title: "16. Code of Conduct", icon: <UserCheck size={16} /> },
    { id: "company-obs", title: "17. Company Obligations", icon: <ShieldAlert size={16} /> },
    { id: "emergency", title: "18. Emergency Procedures", icon: <AlertCircle size={16} /> },
    { id: "contact", title: "19. Contact & Support", icon: <Mail size={16} /> },
];

export default function VDPPolicyPage() {
    const handlePrint = () => window.print();

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black">

            

            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 pt-32 pb-20">

                {/* --- অফিশিয়াল লেটারহেড --- */}
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
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-3 bg-white rounded-xl">
                            <QrCode size={70} className="text-black" />
                        </div>
                        <button onClick={handlePrint} className="flex items-center gap-2 text-[10px] font-mono text-green-500 hover:text-white transition-colors uppercase tracking-widest">
                            <Printer size={12} /> Print_Protocol
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">

                    {/* --- SIDEBAR NAVIGATION --- */}
                    <aside className="hidden lg:block sticky top-32 space-y-2 max-h-[70vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-green-900">
                        <p className="text-[10px] font-mono text-green-900 uppercase mb-4 tracking-[0.3em]">Policy_Modules</p>
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

                    {/* --- MAIN POLICY CONTENT --- */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-zinc-950/80 border border-white/5 rounded-[3rem] p-8 md:p-16 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                    >
                        {/* Watermark */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
                            <ShieldCheck size={600} className="text-green-500" />
                        </div>

                        <div className="relative z-10 space-y-20">

                            <div className="text-center">
                                <p className="text-gray-500 font-mono text-xs uppercase mb-2">VDP SECURITY DIRECTIVE</p>
                                <h1 className="text-3xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-tight">
                                    Vulnerability <br />
                                    <span className="text-green-500">Disclosure Program</span> (VDP) Policy
                                </h1>
                                <p className="text-red-500 font-black text-xs uppercase tracking-[0.2em]">[ NON-REWARD DISCLOSURE FRAMEWORK ]</p>
                            </div>

                            {/* --- SECTION 1: OVERVIEW --- */}
                            <section id="overview" className="scroll-mt-32 space-y-6">
                                <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                    <Info className="text-green-500" /> 1. Program Overview
                                </h3>
                                <div className="grid gap-6 pl-4 font-light leading-relaxed">
                                    <p><span className="text-white font-bold uppercase mr-2 text-xs font-mono">Purpose:</span> This VDP provides a clear framework for Security Researcher to report vulnerabilities responsibly to organizations hosted on our platform.</p>
                                    <p><span className="text-white font-bold uppercase mr-2 text-xs font-mono">Scope:</span> Applies to all companies (Bangladeshi and international) launching VDP programs through our platform.</p>
                                    <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl italic text-sm">
                                        <span className="text-red-500 font-bold">Important Note:</span> This is a non-reward vulnerability disclosure program. Researchers participate for recognition and to help improve security, not for monetary compensation.
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 2: ELIGIBILITY --- */}
                            <section id="eligibility" className="scroll-mt-32 space-y-8">
                                <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                    <CheckCircle2 className="text-green-500" /> 2. Eligibility & Researcher Requirements
                                </h3>
                                <div className="grid md:grid-cols-2 gap-8 pl-4">
                                    <div>
                                        <h4 className="text-green-500 font-bold text-xs uppercase mb-4 tracking-widest">2.1 Researcher Qualifications</h4>
                                        <ul className="space-y-3 text-xs md:text-sm list-none pl-0">
                                            {["Must be 18+ years old", "Complete platform registration with verified identity (government ID, email, phone)", "Agree to Code of Conduct and Terms of Service", "Not be a current/former employee or contractor (within last 12 months)", "Not be an immediate family member of company employees/executives", "Comply with all applicable local, national, and international laws"].map((li, i) => (
                                                <li key={i} className="flex gap-3"><span className="text-green-900 font-mono">0{i + 1}.</span> {li}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="p-6 bg-zinc-900 border border-white/5 rounded-3xl">
                                        <h4 className="text-red-500 font-bold text-xs uppercase mb-4 tracking-widest">2.2 Restricted Participants</h4>
                                        <ul className="space-y-3 text-xs list-disc pl-4 text-gray-500">
                                            <li>Persons on terrorism watch lists or criminal databases</li>
                                            <li>Previously banned researchers (platform or company specific)</li>
                                            <li>Individuals with history of malicious hacking or cyber crimes</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 3: SCOPE --- */}
                            <section id="scope" className="scroll-mt-32 space-y-8">
                                <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                    <Target className="text-green-500" /> 3. Scope Definition
                                </h3>
                                <div className="space-y-8 pl-4">
                                    <div>
                                        <h4 className="text-green-500 font-bold text-xs uppercase mb-4 tracking-widest">3.1 In-Scope Assets</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {["Wildcard (*.example.com)", "IP address ranges", "Mobile Apps (iOS/Android)", "API endpoints & versions", "Desktop applications", "AI Model", "Source Code", "Cloud (AWS/AZURE)", "Hardware/IoT devices", "Open source repositories"].map((asset, i) => (
                                                <div key={i} className="p-3 bg-zinc-900 border border-white/10 rounded-xl text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2 hover:bg-green-500/5 transition-all">
                                                    <Zap size={10} className="text-green-800" /> {asset}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-8 bg-red-950/10 border border-red-500/20 rounded-[2.5rem]">
                                        <h4 className="text-red-500 font-bold text-xs uppercase mb-4 tracking-widest flex items-center gap-2"><AlertTriangle size={14} /> 3.2 Out-of-Scope (Default Exclusions)</h4>
                                        <ul className="grid md:grid-cols-2 gap-3 text-xs text-gray-500 list-none font-light">
                                            {[
                                                "Third-party services and integrations", "Assets not explicitly listed", "Social engineering (phishing, vishing, etc.)",
                                                "Physical security testing", "Denial of Service (DoS/DDoS)", "Spam or harassment of staff",
                                                "Outdated browsers/platforms (>2 versions old)", "Vulnerabilities requiring compromised devices"
                                            ].map((out, i) => (
                                                <li key={i} className="flex gap-2"><span>•</span> {out}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 4: SEVERITY RATINGS --- */}
                            <section id="severity" className="scroll-mt-32 space-y-8">
                                <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                    <BarChart3 className="text-green-500" /> 4. Vulnerability Classification & Severity
                                </h3>
                                <div className="pl-4 space-y-10">
                                    <div>
                                        <h4 className="text-white font-bold text-xs uppercase mb-6 tracking-widest">4.1 Severity Ratings (Based on CVSS 3.1)</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                { l: "Critical", s: "9.0-10.0", c: "text-red-600", bg: "bg-red-900/10", details: "RCE, Auth Bypass, SQLi leading to DB compromise, Complete account takeover, Source code disclosure." },
                                                { l: "High", s: "7.0-8.9", c: "text-orange-500", bg: "bg-orange-900/10", details: "Privilege escalation, Sensitive data exposure (PII), SSRF, XXE with exfiltration, Stored XSS on critical pages." },
                                                { l: "Medium", s: "4.0-6.9", c: "text-yellow-500", bg: "bg-yellow-900/10", details: "Reflected XSS, CSRF on sensitive actions, IDOR, Subdomain takeover, JWT weaknesses, Logic flaws." },
                                                { l: "Low", s: "0.1-3.9", c: "text-blue-500", bg: "bg-blue-900/10", details: "HTML Injection, Minor info leakage, Lack of security headers, DNS misconfigurations." },
                                                { l: "Informational", s: "0.0", c: "text-gray-500", bg: "bg-white/5", details: "Best practice recommendations, Verbose error messages, Non-exploitable findings." }
                                            ].map((sev, i) => (
                                                <div key={i} className={`p-6 ${sev.bg} border border-white/5 rounded-3xl group hover:border-white/10 transition-all`}>
                                                    <div className="flex justify-between items-center mb-3">
                                                        <span className={`font-black uppercase text-sm ${sev.c}`}>{sev.l}</span>
                                                        <span className="text-[10px] font-mono text-gray-600">{sev.s}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-500 leading-relaxed italic">{sev.details}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-[2.5rem]">
                                        <h4 className="text-gray-400 font-bold text-xs uppercase mb-4 tracking-widest">4.2 Out-of-Scope Vulnerabilities (NOT Accepted)</h4>
                                        <div className="columns-1 md:columns-2 gap-8 text-[10px] text-gray-600 font-mono space-y-2 uppercase leading-tight">
                                            {[
                                                "Logout CSRF", "Self-XSS without chain", "Missing rate limiting without abuse proof", "Clickjacking on non-sensitive pages",
                                                "Open redirects without exploitation", "Issues requiring compromised accounts", "Already-known issues", "Theoretical vulnerabilities",
                                                "OPTIONS HTTP method enabled", "Missing cookie flags", "Reports from automated scanners without validation"
                                            ].map((v, i) => (
                                                <p key={i}>&gt; {v}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 5: SAFE HARBOR --- */}
                            <section id="safeharbor" className="scroll-mt-32 p-12 bg-zinc-900 border border-green-500/20 rounded-[1rem] relative overflow-hidden">
                                <div className="absolute -top-10 -left-10 opacity-5">
                                    <ShieldCheck size={200} className="text-green-500" />
                                </div>
                                <h3 className="text-2xl font-black text-white uppercase mb-8 relative z-10 flex items-center gap-3">
                                    <Scale className="text-green-500" /> 5. Safe Harbor & Legal Protection
                                </h3>
                                <div className="space-y-8 relative z-10">
                                    <div className="space-y-4">
                                        <h4 className="text-green-500 font-bold text-xs uppercase">5.1 Good Faith Research Protection <span className='text-green-200 font-normal'>Companies participating in our VDP agree NOT to pursue legal action against researchers who: </span></h4>
                                        <div className="columns-1 md:columns-2 gap-8 text-[10px] text-gray-600 font-mono space-y-2 leading-tight">
                                            {[
                                                "Make a good faith effort to comply with this policy ", "Do not intentionally harm the company, its users, or its data", "Do not access, modify, or delete data beyond what is strictly necessary for demonstrating the vulnerability", "Report vulnerabilities promptly and exclusively through our platform",
                                                "Do not publicly disclose vulnerabilities before the agreed-upon disclosure timeline", "Stop testing immediately upon discovering sensitive data or systems", "Act in a professional and ethical manner "
                                            ].map((v, i) => (
                                                <p key={i}>&gt; {v}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-green-500 font-bold text-xs uppercase">5.2 Platform Legal Commitment <span className='text-green-300 font-normal'>We will : </span></h4>
                                        <div className="columns-1 md:columns-2 gap-8 text-[10px] text-gray-600 font-mono space-y-2 leading-tight">
                                            {[
                                                "Actively defend researchers acting in good faith within policy guidelines ", "Work with law enforcement on behalf of researchers if legal issues arise ", "Provide legal guidance through our legal team when needed ", "Maintain researcher anonymity upon request (except where legally required to disclose)",
                                                "Advocate for researchers' rights in case of disputes "
                                            ].map((v, i) => (
                                                <p key={i}>&gt; {v}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-green-500 font-bold text-xs uppercase">5.3 Authorization <span className='text-green-200 font-normal'>This policy constitutes</span> <span className='text-green-500'>ritten authorization </span> <samp className='text-green-200 font-normal'>for security research activities conducted within the defined scope and in accordance with these guidelines. This authorization covers: </samp></h4>
                                        <div className="columns-1 md:columns-2 gap-8 text-[10px] text-gray-600 font-mono space-y-2 leading-tight">
                                            {[
                                                "Accessing systems within defined scope ", "Testing for vulnerabilities using approved methods", "Creating test accounts for security research purposes", "Reporting findings through our platform "
                                            ].map((v, i) => (
                                                <p key={i}>&gt; {v}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-5 border-l-2 border-green-500 bg-black/50 text-[11px] font-mono text-gray-500">
                                        "This policy constitutes written authorization for research activities conducted within scope."
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 6: TESTING GUIDELINES --- */}
                            <section id="testing" className="scroll-mt-32 space-y-10">
                                <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-3 border-b border-white/5 pb-4">
                                    <Lock className="text-green-500" /> 6. Testing Guidelines & Rules of Engagement
                                </h3>
                                <div className="grid md:grid-cols-2 gap-12 pl-4">
                                    <div className="space-y-6">
                                        <h4 className="text-red-500 font-bold text-xs uppercase flex items-center gap-2"><Ban size={14} /> 6.1 Strictly Prohibited Actions</h4>
                                        <ul className="space-y-3 text-[11px] text-gray-500 font-mono list-none">
                                            {[
                                                "Accessing, modifying, exfiltrating, or deleting other users' data", "Executing DoS/DDoS attacks or intentional resource exhaustion", "Social engineering (phishing emails, vishing calls, physical access attempts, impersonation)", "Testing third-party applications or services not explicitly in scope",
                                                "Using automated vulnerability scanners without proper rate limiting and throttling ", "Creating fake accounts using real individuals' personally identifiable information", "Intentionally degrading service quality or availability ", "Accessing or attempting to access accounts you don't own", "Exploiting a vulnerability beyond the minimum necessary to prove its existence ", "Pivoting to other systems, networks, or applications not explicitly in scope ", "Installing backdoors, web shells, cryptocurrency miners, or any malicious code", "Actual data exfiltration (screenshots and minimal samples only for POC) ", "Interacting with other users' accounts or data", "Physical attacks against company facilities, equipment, or staff ", "Demanding compensation or extortion related to vulnerabilities "
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3"><span className="text-red-900">!</span> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-green-500 font-bold text-xs uppercase flex items-center gap-2"><Zap size={14} /> 6.2 Required Best Practices</h4>
                                        <ul className="space-y-3 text-[11px] text-gray-500 font-mono list-none">
                                            {[
                                                "Use dedicated testing accounts whenever possible (never test on other users' accounts)", "Conduct testing during off-peak hours when feasible", "Limit automated testing to reasonable request volumes (max 10 requests/second unless approved)",
                                                "Stop testing immediately if you unintentionally access sensitive data", "Report critical vulnerabilities immediately upon discovery", "Delete any locally stored data obtained during testing after reporting", "Use a VPN or researcher-identified IP address when possible (for security audit trails) ", "Respect robots.txt and security.txt directives", "Keep testing credentials secure and don't share access "
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3"><span className="text-green-900">&gt;</span> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-green-500 font-bold text-xs uppercase flex items-center gap-2"><Zap size={14} /> 6.3 Testing on Production Systems</h4>
                                        <ul className="space-y-3 text-[11px] text-gray-500 font-mono list-none">
                                            {[
                                                "Minimize impact on production system availability and performance ", "Avoid testing payment flows with real financial transactions", "Do not test with volumes that could trigger fraud detection or impact service ", "Use test accounts, sandbox environments, or designated testing environments when available ", "For database testing, use LIMIT clauses to minimize data access ", "Avoid modifying production data - use read-only operations where possible"
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-3"><span className="text-green-900">&gt;</span> {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            {/* --- SECTION 7: SUBMISSION REQUIREMENTS (৬ নম্বর সেকশনের পরে এটি বসান) --- */}
                            <section id="submission" className="scroll-mt-32 space-y-12">
                                <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
                                    <Terminal className="text-green-500" /> 7. Submission Requirements
                                </h3>

                                <div className="pl-4 space-y-10">

                                    {/* 7.1 Minimum Report Requirements */}
                                    <div className="relative group">
                                        <h4 className="text-green-500 font-bold text-xs uppercase mb-6 tracking-[0.2em] flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            7.1 Minimum Report Requirements All vulnerability submissions must include:
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { t: "Clear vulnerability title", e: '(e.g., "SQL Injection in login endpoint")' },
                                                { t: "Detailed description", e: "of the vulnerability and its potential impact" },
                                                { t: "Step-by-step reproduction", e: "instructions (numbered steps)" },
                                                { t: "Proof of concept", e: "(screenshot, video recording, or sample code)" },
                                                { t: "Impact assessment", e: "(what can an attacker achieve?)" },
                                                { t: "Affected asset(s)", e: "(specific URLs, endpoints, app versions)" },
                                                { t: "HTTP requests/responses", e: "(if applicable)" },
                                                { t: "System Versions", e: "Browser/OS/tool versions used during testing (Optional)" },
                                                { t: "Suggested remediation", e: "(optional but highly encouraged)" }
                                            ].map((req, i) => (
                                                <div key={i} className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-start gap-3 hover:border-green-500/20 transition-all group">
                                                    <CheckCircle2 size={16} className="text-green-900 group-hover:text-green-500 mt-0.5 shrink-0" />
                                                    <p className="text-xs leading-relaxed text-gray-400">
                                                        <span className="text-white font-bold block mb-0.5">{req.t}</span>
                                                        {req.e}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 7.2 & 7.3 Grid Layout */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                        {/* 7.2 Report Quality Standards */}
                                        <div className="p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] relative overflow-hidden">
                                            {/* Background Decoration */}
                                            <FileText size={100} className="absolute -right-10 -bottom-10 text-green-500 opacity-5 -rotate-12" />

                                            <h4 className="text-white font-bold text-xs uppercase mb-6 tracking-widest flex items-center gap-2">
                                                <ShieldCheck size={16} className="text-green-500" /> 7.2 Report Quality Standards
                                            </h4>
                                            <ul className="space-y-4 text-xs text-gray-500 font-light list-none pl-0">
                                                <li className="flex gap-3">
                                                    <span className="text-green-700 font-mono">#</span>
                                                    <span>Written in <span className="text-white">English or Bengali</span></span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-green-700 font-mono">#</span>
                                                    <span>Single vulnerability per report (unless chained together)</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-green-700 font-mono">#</span>
                                                    <span><span className="text-white">Original research</span> (not copied from other researchers/sources)</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-green-700 font-mono">#</span>
                                                    <span>Demonstrates <span className="text-green-500 font-bold">actual security impact</span>, not just theoretical possibilities</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-green-700 font-mono">#</span>
                                                    <span>Includes sufficient technical evidence to reproduce the issue</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-green-700 font-mono">#</span>
                                                    <span>Professional tone and clear communication</span>
                                                </li>
                                                <li className="flex gap-3">
                                                    <span className="text-green-700 font-mono">#</span>
                                                    <span><span className="text-red-900">Redaction of any sensitive data</span> discovered (except for POC)</span>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* 7.3 Duplicate Handling */}
                                        <div className="p-8 bg-zinc-950 border border-white/5 rounded-[2.5rem] relative overflow-hidden">
                                            <Copy size={100} className="absolute -right-10 -bottom-10 text-green-500 opacity-5 -rotate-12" />

                                            <h4 className="text-white font-bold text-xs uppercase mb-6 tracking-widest flex items-center gap-2">
                                                <Zap size={16} className="text-green-500" /> 7.3 Duplicate Handling
                                            </h4>
                                            <div className="space-y-6">
                                                <div className="p-4 bg-black/40 border-l-2 border-green-500 rounded-r-xl">
                                                    <p className="text-xs text-gray-400 leading-relaxed italic">
                                                        First valid report receives credit and recognition. Timestamp of report submission determines priority.
                                                    </p>
                                                </div>
                                                <ul className="space-y-3 text-[11px] font-mono text-gray-500 uppercase tracking-tighter">
                                                    <li className="flex items-center gap-3">
                                                        <div className="w-1 h-1 bg-green-900 rounded-full"></div>
                                                        Notification within 5 business days
                                                    </li>
                                                    <li className="flex items-center gap-3">
                                                        <div className="w-1 h-1 bg-green-900 rounded-full"></div>
                                                        Duplicates get acknowledgment but no credit
                                                    </li>
                                                    <li className="flex items-center gap-3">
                                                        <div className="w-1 h-1 bg-green-900 rounded-full"></div>
                                                        Check platform for existing similar subs
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Bottom Status Bar */}
                                            <div className="mt-8 pt-4 border-t border-white/5 text-[9px] font-mono text-gray-700">
                                                LOG_STATUS: DUPLICATE_CHECK_V2.1_ENABLED
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </section>

                            {/* --- SECTION 8: RESPONSE & REMEDIATION SLAs --- */}
                            <section id="sla" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Clock className="text-green-500" /> 8. Response & Remediation SLAs
                                    </h3>
                                </div>

                                {/* 8.1 Company Response Times Table */}
                                <div className="pl-4 space-y-6">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        8.1 Company Response Times <span className='text-green-200 font-normal'>(depending on the specific program's policy)</span>
                                    </h4>
                                    <div className="overflow-x-auto rounded-3xl border border-white/5 bg-zinc-900/20">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-zinc-900 text-green-700 font-mono text-[10px] uppercase tracking-widest">
                                                    <th className="p-5 border-b border-white/5">Severity</th>
                                                    <th className="p-5 border-b border-white/5">First Response</th>
                                                    <th className="p-5 border-b border-white/5">Triage Completion</th>
                                                    <th className="p-5 border-b border-white/5">Resolution Target</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-xs md:text-sm font-light">
                                                {[
                                                    { s: "Critical", r: "24 hours", t: "3 business days", f: "14 days", c: "text-red-500" },
                                                    { s: "High", r: "2 business days", t: "5 business days", f: "30 days", c: "text-orange-500" },
                                                    { s: "Medium", r: "3 business days", t: "7 business days", f: "60 days", c: "text-yellow-500" },
                                                    { s: "Low", r: "5 business days", t: "10 business days", f: "90 days", c: "text-blue-500" }
                                                ].map((row, i) => (
                                                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-all">
                                                        <td className={`p-5 font-black uppercase ${row.c}`}>{row.s}</td>
                                                        <td className="p-5 text-gray-400">{row.r}</td>
                                                        <td className="p-5 text-gray-400">{row.t}</td>
                                                        <td className="p-5 text-gray-400">{row.f}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* 8.2 Response Stages - Tactical Steps Layout */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        8.2 Response Stages
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            { n: "01", t: "Acknowledgment", d: "Company confirms receipt of report", i: <Terminal size={16} /> },
                                            { n: "02", t: "Triage", d: "Company validates and assigns severity rating", i: <Search size={16} /> },
                                            { n: "03", t: "Remediation", d: "Company develops and tests fix", i: <Cpu size={16} /> },
                                            { n: "04", t: "Deployment", d: "Fix is deployed to production", i: <Zap size={16} /> },
                                            { n: "05", t: "Verification", d: "Researcher confirms fix is effective", i: <ShieldCheck size={16} /> },
                                            { n: "06", t: "Closure", d: "Report is closed with final status", i: <Lock size={16} /> }
                                        ].map((stage, i) => (
                                            <div key={i} className="p-5 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center gap-4 group hover:border-green-500/20 transition-all">
                                                <span className="text-lg font-black text-green-900 group-hover:text-green-500 transition-colors font-mono">{stage.n}</span>
                                                <div>
                                                    <h5 className="text-white font-bold text-xs uppercase tracking-tight">{stage.t || stage.d}</h5>
                                                    <p className="text-[11px] text-gray-500">{stage.d || stage.d}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 8.2.1 Duplicate Report Handling - High Detail Hub */}
                                <div className="pl-4 space-y-8">
                                    <div className="p-8 bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-5">
                                            <Copy size={120} className="text-green-500" />
                                        </div>

                                        <h4 className="text-white font-bold uppercase text-xs mb-8 tracking-[0.2em] flex items-center gap-2">
                                            <Zap size={16} className="text-green-500" /> 8.2.1 Duplicate Report Handling
                                        </h4>

                                        <div className="space-y-8">
                                            {/* Definition & Priority */}
                                            <div className="grid lg:grid-cols-2 gap-8">
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-mono text-green-900 uppercase">Duplicate Definition:</p>
                                                    <p className="text-sm text-gray-400 font-light">A report is duplicate if same vulnerability on same asset/endpoint was previously reported by another researcher.</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-[10px] font-mono text-green-900 uppercase">Priority Rule</p>
                                                    <p className="text-sm text-green-500 font-bold italic underline decoration-green-900">First valid submission (earliest UTC timestamp) receives full credit.</p>
                                                </div>
                                            </div>

                                            {/* Timeline Badges */}
                                            <div className="flex flex-wrap gap-4">
                                                <div className="px-4 py-2 bg-zinc-900 rounded-xl border border-white/5 flex items-center gap-3">
                                                    <span className="text-[9px] font-mono text-gray-500 uppercase">Notification Timeline:</span>
                                                    <span className="text-[10px] font-black text-red-500 uppercase tracking-tighter">Crit/High: 3 Days</span>
                                                    <div className="w-px h-3 bg-zinc-800"></div>
                                                    <span className="text-[10px] font-black text-yellow-500 uppercase tracking-tighter">Med/Low: 5 Days</span>
                                                </div>
                                            </div>

                                            {/* Receive vs Not Receive Grid */}
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="p-6 bg-green-500/5 border border-green-500/10 rounded-3xl">
                                                    <h5 className="text-green-500 font-bold text-[10px] uppercase mb-4 tracking-widest">Duplicates Receive:</h5>
                                                    <ul className="space-y-2 text-[11px] text-gray-400 font-mono list-none">
                                                        <li>+ Acknowledgment of receipt</li>
                                                        <li>+ Clear reasoning for duplicate</li>
                                                        <li>+ Remediation status updates</li>
                                                    </ul>
                                                </div>
                                                <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-3xl">
                                                    <h5 className="text-red-900 font-bold text-[10px] uppercase mb-4 tracking-widest">Duplicates Do NOT Receive:</h5>
                                                    <ul className="space-y-2 text-[11px] text-gray-600 font-mono list-none italic">
                                                        <li>- Hall of Fame credit</li>
                                                        <li>- Reputation points or badges</li>
                                                        <li>- Public acknowledgment / Disclosure rights</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Special Cases Info Box */}
                                            <div className="p-5 bg-black border border-white/5 rounded-2xl flex items-start gap-4">
                                                <AlertCircle size={18} className="text-green-800 mt-1" />
                                                <div>
                                                    <h6 className="text-[10px] font-bold text-white uppercase mb-1">Special Handling Cases:</h6>
                                                    <p className="text-[11px] text-gray-500 leading-relaxed">
                                                        Same bug type on different endpoints is <span className="text-white">NOT</span> duplicate. Regression of a fixed bug is treated as a <span className="text-white font-bold">NEW</span> vulnerability. 'Contributor' status (25% points) may be awarded for high-value duplicates.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 8.3 Platform Oversight - Final Monitoring Section */}
                                <div className="pl-4 space-y-6">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        8.3 Platform Oversight
                                    </h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            "We monitor company response times and SLA compliance",
                                            "Escalate to company executives if SLAs are repeatedly missed",
                                            "May suspend programs with consistent non-responsiveness",
                                            "Provide mediation between researchers and companies for disputes ",
                                            "Track and publish company responsiveness metrics"
                                        ].map((text, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/50 border-l-2 border-green-500 rounded-r-xl">
                                                <ShieldCheck size={14} className="text-green-800" />
                                                <p className="text-[11px] text-gray-400 font-light">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 9: RECOGNITION & REWARDS  --- */}
                            <section id="recognition" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Trophy className="text-green-500" /> 9. Recognition & Rewards
                                    </h3>
                                </div>

                                {/* 9.1 Recognition System (Non-Monetary) */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        9.1 Recognition System <span className='text-green-200 font-normal'>(Non-Monetary) Researchers receive: </span>
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            { t: "Hall of Fame", d: "Listing on company security page", i: <Trophy size={18} /> },
                                            { t: "Hall of Shame", d: "Listing on ZeroDay Test’s page [ after submitting 5 consistent invalid bugs ]", i: <ShieldAlert size={18} />, danger: true },
                                            { t: "Official Certificates", d: "Appreciation certificates from companies", i: <FileBadge size={18} /> },
                                            { t: "Public Acknowledgment", d: "In security advisories (with researcher consent)", i: <Users size={18} /> },
                                            { t: "Reputation Points", d: "Platform reputation points and ranking", i: <BarChart3 size={18} /> },
                                            { t: "Digital Badges", d: "For vulnerability categories and severity levels", i: <Medal size={18} /> },
                                            { t: "Priority Consideration", d: "For future bug bounty programs", i: <Zap size={18} /> }
                                        ].map((item, i) => (
                                            <div key={i} className={`p-6 border rounded-[2rem] transition-all duration-500 group relative overflow-hidden ${item.danger
                                                ? 'bg-red-500/5 border-red-900/20 hover:border-red-500/40'
                                                : 'bg-zinc-900/30 border-white/5 hover:border-green-500/30'
                                                }`}>
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all ${item.danger ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-black'
                                                    }`}>
                                                    {item.i}
                                                </div>
                                                <h5 className={`text-sm font-bold uppercase mb-2 ${item.danger ? 'text-red-500' : 'text-white'}`}>{item.t}</h5>
                                                <p className="text-xs text-gray-500 leading-relaxed font-light">{item.d}</p>
                                            </div>
                                        ))}

                                        {/* Annual Awards - Special Large Card */}
                                        <div className="md:col-span-2 lg:col-span-2 p-8 bg-gradient-to-br from-zinc-900 to-black border border-green-500/20 rounded-[2.5rem] relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                                <Award size={120} className="text-green-500" />
                                            </div>
                                            <h5 className="text-green-500 font-bold text-xs uppercase mb-6 tracking-widest">Annual Awards (Platform-Wide)</h5>
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                                {["Top Contributor", "Top Scorer", "Top Critical Hunter", "Hunter of the Year"].map((award, i) => (
                                                    <div key={i} className="text-center space-y-2">
                                                        <p className="text-[10px] font-mono text-white uppercase tracking-tighter">{award}</p>
                                                        <div className="h-0.5 w-full bg-green-900/30 rounded-full overflow-hidden">
                                                            <div className="h-full bg-green-500 w-1/2 group-hover:w-full transition-all duration-1000"></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-[10px] text-gray-600 font-mono mt-6 italic">Categories: Highest Valid Submissions | All Rounder Performance</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 9.2 Reputation Scoring - Technical HUD Layout */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        9.2 Reputation Scoring <span className='text-green-200 font-normal'>Points awarded based on:</span>
                                    </h4>

                                    <div className="p-8 bg-[#070707] border border-white/5 rounded-[2.5rem] relative">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                            {/* Point Distribution */}
                                            <div className="space-y-6">
                                                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Vulnerability Severity Points</p>
                                                <div className="space-y-3">
                                                    {[
                                                        { l: "Critical", p: "100 pts", c: "bg-red-600" },
                                                        { l: "High", p: "50 pts", c: "bg-orange-500" },
                                                        { l: "Medium", p: "25 pts", c: "bg-yellow-500" },
                                                        { l: "Low", p: "10 pts", c: "bg-blue-500" }
                                                    ].map((row, i) => (
                                                        <div key={i} className="flex items-center justify-between p-3 bg-zinc-900/50 rounded-xl border border-white/5">
                                                            <span className="text-xs font-bold text-gray-400">{row.l}</span>
                                                            <span className={`px-3 py-1 rounded-lg text-black font-black text-[10px] ${row.c}`}>{row.p}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Bonus Points */}
                                            <div className="space-y-6">
                                                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Operational Bonus Logic</p>
                                                <div className="grid gap-4">
                                                    {[
                                                        { t: "Report Quality", v: "10-50 pts", d: "Bonus for exceptional reports" },
                                                        { t: "Response Time", v: "Bonus pts", d: "Awarded for quick reporting" },
                                                        { t: "Consistency", v: "Multipliers", d: "Bonus for multiple valid reports" }
                                                    ].map((b, i) => (
                                                        <div key={i} className="flex items-center gap-4 group">
                                                            <div className="p-2 bg-green-900/10 border border-green-900/20 rounded-lg text-green-500">
                                                                <Star size={14} className="group-hover:fill-current transition-all" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-bold text-white uppercase tracking-tight">{b.t} <span className="text-green-500 ml-2">{b.v}</span></p>
                                                                <p className="text-[10px] text-gray-600 italic">{b.d}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 9.3 Top Researcher Benefits */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        9.3 Top Researcher Benefits
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            "Researcher profiles are ranked on the platform leaderboard based on validated submissions",
                                            "Invitation to exclusive security events and webinars",
                                            "Networking opportunities with companies and other researchers",
                                            "Access to Bug Bounty/Private Programs ",
                                            "Recommendation letters for employment (upon request)"
                                        ].map((text, i) => (
                                            <div key={i} className="group p-5 bg-zinc-900/40 border border-white/5 rounded-2xl flex items-center gap-4 hover:bg-green-500/5 hover:border-green-500/20 transition-all">
                                                <div className="p-2 bg-black rounded-lg text-green-900 group-hover:text-green-500 transition-colors">
                                                    <UserCheck size={16} />
                                                </div>
                                                <p className="text-xs text-gray-400 font-light group-hover:text-gray-200 transition-colors">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 10: DISCLOSURE POLICY  --- */}
                            <section id="disclosure" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <FileText className="text-green-500" /> 10. Disclosure Policy
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4">
                                        Bug disclosure policies and deadlines that both researchers and companies must adhere to.
                                    </p>
                                </div>

                                {/* 10.1 Coordinated Disclosure Timeline - Highlight Cards */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        10.1 Coordinated Disclosure Timeline
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[
                                            { t: "Default Timeline", v: "90 Days", d: "From validated report submission", c: "border-green-500/30" },
                                            { t: "Complex Extensions", v: "180 Days", d: "Requires technical justification", c: "border-blue-500/30" },
                                            { t: "Early Disclosure", v: "Authorized", d: "Allowed with explicit company consent", c: "border-purple-500/30" },
                                            { t: "Public Release", v: "Final Node", d: "Only After fix deployment or expiry", c: "border-red-500/30" }
                                        ].map((item, i) => (
                                            <div key={i} className={`p-6 bg-zinc-950 border ${item.c} rounded-3xl relative overflow-hidden group`}>
                                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                    <Clock size={40} className="text-white" />
                                                </div>
                                                <p className="text-[10px] font-mono text-gray-500 uppercase mb-2">{item.t}</p>
                                                <h5 className="text-2xl font-black text-white mb-2">{item.v}</h5>
                                                <p className="text-[11px] text-gray-600 leading-tight">{item.desc || item.d}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 10.2 Disclosure Process - Pipeline Visual */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        10.2 Disclosure Process
                                    </h4>

                                    <div className="relative">
                                        {/* Vertical Line for timeline */}
                                        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>

                                        <div className="space-y-6 relative">
                                            {[
                                                "Researcher submits report privately through platform",
                                                "Company validates and begins remediation",
                                                "Company deploys fix to production",
                                                "Company notifies researcher of fix completion",
                                                "Researcher verifies fix effectiveness",
                                                "After verification, public disclosure allowed"
                                            ].map((step, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-start gap-6 group"
                                                >
                                                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-green-500 transition-all z-10">
                                                        <span className="text-xs font-black text-green-900 group-hover:text-green-500 font-mono">0{i + 1}</span>
                                                    </div>
                                                    <div className="pt-3">
                                                        <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors font-light italic">
                                                            {step}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* 10.3 Disclosure Process - Pipeline Visual */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 whitespace-nowrap">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        10.3 Public Disclosure Rights <span className='text-green-200 font-normal'>Researchers may publicly disclose vulnerability details after:</span>
                                    </h4>

                                    <div className="relative">
                                        {/* Vertical Line for timeline */}
                                        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 hidden md:block"></div>

                                        <div className="space-y-6 relative">
                                            {[
                                                "Company fixes the issue and confirms production deployment, Or",
                                                "Company explicitly approves earlier public disclosure "
                                            ].map((step, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex items-start gap-6 group"
                                                >
                                                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-green-500 transition-all z-10">
                                                        <span className="text-xs font-black text-green-900 group-hover:text-green-500 font-mono">0{i + 1}</span>
                                                    </div>
                                                    <div className="pt-3">
                                                        <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors font-light italic">
                                                            {step}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 10.4 Disclosure Content Guidelines - Checklist Hub */}
                                <div className="pl-4 space-y-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* 10.4 Researcher Side */}
                                        <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] space-y-8 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                                                <Terminal size={100} className="text-green-500" />
                                            </div>

                                            <div className="space-y-2">
                                                <h4 className="text-green-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                                    <Zap size={14} /> 10.4 Disclosure Guidelines
                                                </h4>
                                                <p className="text-[10px] text-gray-600 font-mono uppercase">Hacker Conduct Protocol</p>
                                            </div>

                                            <ul className="space-y-4">
                                                {[
                                                    { t: "Technical Focus", d: "Focus on technical details and educational value" },
                                                    { t: "No Sensationalism", d: "Avoid criticism or sensationalism of the company" },
                                                    { t: "Data Redaction", d: "Redact all PII, credentials, or internal details", alert: true },
                                                    { t: "Timeline Integrity", d: "Include disclosure timeline and remediation efforts" },
                                                    { t: "Proper Credit", d: "Credit the company for cooperation (if applicable)" }
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-4 group">
                                                        <CheckCircle2 size={16} className={`${item.alert ? 'text-red-900' : 'text-green-900'} group-hover:text-green-500 transition-colors mt-0.5`} />
                                                        <div>
                                                            <p className="text-xs font-bold text-white uppercase tracking-tight">{item.t}</p>
                                                            <p className="text-[11px] text-gray-500 leading-relaxed">{item.d}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* 10.5 Company Obligations */}
                                        <div className="p-8 bg-zinc-950 border border-green-500/10 rounded-[2.5rem] space-y-8">
                                            <div className="space-y-2">
                                                <h4 className="text-blue-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                                    <ShieldCheck size={14} /> 10.5 Company Obligations
                                                </h4>
                                                <p className="text-[10px] text-gray-600 font-mono uppercase">Asset Owner Commitment</p>
                                            </div>

                                            <div className="space-y-6">
                                                {[
                                                    "Credit researchers in security advisories",
                                                    "NEVER disclose researcher identity without consent",
                                                    "Publish advisories for Critical/High issues",
                                                    "Update Hall of Fame within 14 days of fix",
                                                    "Notify affected users when appropriate"
                                                ].map((text, i) => (
                                                    <div key={i} className="flex items-center gap-4 p-4 bg-zinc-900 border border-white/5 rounded-2xl group hover:border-blue-500/30 transition-all">
                                                        <div className="p-2 bg-blue-500/10 text-blue-900 rounded-lg group-hover:text-blue-500 transition-all">
                                                            <ShieldCheck size={14} />
                                                        </div>
                                                        <p className="text-xs text-gray-400 font-light group-hover:text-gray-200 transition-colors">{text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Global Disclaimer Footer for Disclosure */}
                                <div className="mt-8 flex justify-center">
                                    <div className="px-6 py-3 border border-red-500/20 bg-red-500/5 rounded-full flex items-center gap-3">
                                        <AlertTriangle size={14} className="text-red-500 animate-pulse" />
                                        <p className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                                            Unauthorized public disclosure violates <span className="text-red-800 font-bold">Platform Safe Harbor</span>.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 11: DISPUTE RESOLUTION  --- */}
                            <section id="dispute" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Gavel className="text-green-500" /> 11. Dispute Resolution
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        We have a "transparent and impartial" arbitration system to resolve any disagreements between researchers and institutions.
                                    </p>
                                </div>

                                {/* 11.1 Escalation Process - Vertical Logic Pipeline */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        11.1 Escalation Process
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
                                        {[
                                            { s: "Initial Review", d: "Researcher submits report → Company reviews & responds.", i: <Terminal size={18} /> },
                                            { s: "Disagreement", d: "If researcher disagrees → Request platform mediation.", i: <AlertCircle size={18} /> },
                                            { s: "Platform Review", d: "Our security team conducts independent technical analysis.", i: <Search size={18} /> },
                                            { s: "Mediation", d: "Platform facilitates discussion between both parties.", i: <Handshake size={18} /> },
                                            { s: "Decision", d: "Binding decision issued within 10 business days.", i: <Scale size={18} /> },
                                            { s: "Appeal", d: "One-time appeal to Chief Security Officer (within 5 days).", i: <ShieldAlert size={18} /> }
                                        ].map((step, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ y: -5 }}
                                                className="p-6 bg-zinc-950 border border-white/5 rounded-[2.5rem] relative group overflow-hidden transition-all hover:border-green-500/30"
                                            >
                                                <div className="absolute top-0 right-0 p-4 text-green-900 font-mono text-xl opacity-20 group-hover:opacity-100 transition-opacity">
                                                    0{i + 1}
                                                </div>
                                                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                                                    {step.i}
                                                </div>
                                                <h5 className="text-sm font-bold text-white uppercase mb-2 tracking-tight">{step.s}</h5>
                                                <p className="text-xs text-gray-500 leading-relaxed font-light">{step.d}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* 11.2 & 11.3 - Dual Dashboard Layout */}
                                <div className="pl-4 grid grid-cols-1 lg:grid-cols-2 gap-8">

                                    {/* 11.2 Mediation Criteria - Technical HUD */}
                                    <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] space-y-8">
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                            <Scale size={16} className="text-green-500" /> 11.2 Mediation Criteria
                                        </h4>
                                        <div className="grid gap-4">
                                            {[
                                                "CVSS score calculations & industry metrics",
                                                "Proof of exploitability & working PoC",
                                                "Business impact & real-world risk",
                                                "Similar vulnerability precedents",
                                                "Industry best practices & standards",
                                                "Both parties' technical evidence"
                                            ].map((text, i) => (
                                                <div key={i} className="flex items-center gap-4 group">
                                                    <div className="w-1 h-1 bg-green-900 group-hover:bg-green-500 rounded-full transition-all"></div>
                                                    <p className="text-xs text-gray-500 group-hover:text-gray-300 font-mono uppercase tracking-tighter transition-colors">{text}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 11.3 Common Dispute Scenarios - Warning HUD */}
                                    <div className="p-8 bg-zinc-950 border border-red-500/10 rounded-[2.5rem] space-y-8 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.02]">
                                            <FileWarning size={100} className="text-red-500" />
                                        </div>
                                        <h4 className="text-red-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                            <AlertCircle size={16} /> 11.3 Common Scenarios
                                        </h4>
                                        <div className="space-y-4">
                                            {[
                                                "Severity rating disagreements",
                                                "Duplicate vs. unique vulnerability claims",
                                                "In-scope vs. out-of-scope determinations",
                                                "Report validity & exploitability questions",
                                                "Remediation verification disputes"
                                            ].map((text, i) => (
                                                <div key={i} className="p-4 bg-zinc-900 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-red-500/20 transition-all">
                                                    <p className="text-xs text-gray-400 font-light italic">{text}</p>
                                                    <span className="text-[10px] font-mono text-red-900 group-hover:text-red-500 uppercase">Detection_Match</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 11.4 Final Decisions - Authoritative Verdict Block */}
                                <div className="pl-4">
                                    <div className="p-8 md:p-12 bg-green-600 rounded-[1rem] text-black shadow-[0_0_50px_rgba(22,163,74,0.3)] relative overflow-hidden">
                                        <ShieldCheck size={200} className="absolute -right-20 -bottom-20 opacity-10 -rotate-12" />
                                        <div className="relative z-10 space-y-8">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-black rounded-lg">
                                                    <Gavel size={24} className="text-green-500" />
                                                </div>
                                                <h4 className="text-xl font-black uppercase tracking-tight">11.4 Final Decisions</h4>
                                            </div>

                                            <div className="grid md:grid-cols-3 gap-8">
                                                {[
                                                    { t: "Binding", d: "Platform decisions are binding for program standing" },
                                                    { t: "Hacker Ban", d: "Repeated frivolous disputes may result in researcher warnings or suspension" },
                                                    { t: "Program Review", d: "Companies with repeated unjustified rejections may face program review" }
                                                ].map((v, i) => (
                                                    <div key={i} className="p-5 border border-black/20 rounded-2xl bg-white/5">
                                                        <h5 className="font-black uppercase text-xs mb-2 tracking-widest">{v.t}</h5>
                                                        <p className="text-[11px] font-bold leading-relaxed opacity-80">{v.d}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-6 border-t border-black/10 text-[9px] font-mono font-black uppercase tracking-[0.4em] text-center md:text-left">
                                                Status: ZeroDay_Test_Arbitration_Enforced
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 12: PROGRAM MODIFICATIONS (১১ নম্বর সেকশনের পরে বসান) --- */}
                            <section id="modification" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <History className="text-green-500" /> 12. Program Modifications
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        Transparency and policy to protect the interests of researchers in changing program rules or scope.
                                    </p>
                                </div>

                                {/* 12.1 Policy Updates - Change Log HUD */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        12.1 Policy Updates
                                    </h4>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] space-y-6 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                                                <RefreshCcw size={100} className="text-green-500" />
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="px-3 py-1 bg-green-600/10 border border-green-500/20 rounded text-[10px] font-mono text-green-500 uppercase">Notice_Period</div>
                                                    <p className="text-sm text-white font-bold">14 Days Advance Notice</p>
                                                </div>
                                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                                    Companies may update scope and rules. However, retroactive changes <span className="text-white">do not affect</span> pending or in-progress reports.
                                                </p>
                                            </div>
                                            <div className="space-y-2 pt-4 border-t border-white/5">
                                                <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Notification Channels:</p>
                                                <div className="flex gap-4">
                                                    <span className="flex items-center gap-2 text-[10px] text-green-900 font-bold uppercase"><Mail size={12} /> Email_Alert</span>
                                                    <span className="flex items-center gap-2 text-[10px] text-green-900 font-bold uppercase"><Terminal size={12} /> Platform_Dashboard</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 bg-zinc-950 border border-red-500/10 rounded-[2.5rem] flex flex-col justify-center space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-red-500/10 text-red-500 rounded-lg">
                                                    <AlertCircle size={20} />
                                                </div>
                                                <h5 className="text-white font-bold uppercase text-sm tracking-tight">Significant Reductions</h5>
                                            </div>
                                            <p className="text-xs text-gray-500 leading-relaxed">
                                                Any significant reduction in testing scope requires a mandatory <span className="text-red-500 font-bold">30 days notice</span>. All changes must receive <span className="text-white">Platform Approval</span> before implementation. Researchers notified via email and platform dashboard
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 12.2 & 12.3 - Allowed vs Restricted Matrix */}
                                <div className="pl-4 grid grid-cols-1 lg:grid-cols-2 gap-8">

                                    {/* 12.2 Acceptable Modifications - Green Hub */}
                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                            <CheckCircle2 size={16} className="text-green-500" /> 12.2 Acceptable Changes
                                        </h4>
                                        <div className="space-y-3">
                                            {[
                                                { t: "Asset Expansion", d: "Adding new assets to scope  (effective immediately) ", s: "Immediate" },
                                                { t: "Guideline Clarity", d: "Clarifying testing guidelines", s: "Verified" },
                                                { t: "Contact Update", d: "Updating contact information", s: "Verified" },
                                                { t: "SLA Adjustment", d: "Adjusting response SLAs (with platform approval) ", s: "Review" }
                                            ].map((item, i) => (
                                                <div key={i} className="p-4 bg-zinc-900/40 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-green-500/20 transition-all">
                                                    <div className="flex items-center gap-4">
                                                        <Zap size={14} className="text-green-900 group-hover:text-green-500" />
                                                        <div>
                                                            <p className="text-xs font-bold text-white uppercase tracking-tight">{item.t}</p>
                                                            <p className="text-[10px] text-gray-500">{item.d}</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-[9px] font-mono text-green-900 uppercase group-hover:text-green-500">{item.s}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 12.3 Restricted Modifications - Red Hub */}
                                    <div className="space-y-6">
                                        <h4 className="text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                            <FileWarning size={16} className="text-red-500" /> 12.3 Restricted Modifications
                                        </h4>
                                        <div className="space-y-3">
                                            {[
                                                "Removing assets from scope (Requires report resolution)",
                                                "Adding retroactive restrictions on vulnerabilities",
                                                "Changing disclosure timelines for pending reports"
                                            ].map((text, i) => (
                                                <div key={i} className="p-5 bg-red-500/5 border border-red-900/20 rounded-2xl flex items-start gap-4 group hover:bg-red-500/10 transition-all">
                                                    <AlertTriangle size={16} className="text-red-900 shrink-0 mt-0.5" />
                                                    <p className="text-xs text-gray-400 font-light italic leading-relaxed">{text}</p>
                                                </div>
                                            ))}
                                            <div className="p-4 bg-black border border-red-900/30 rounded-xl text-center">
                                                <p className="text-[9px] font-mono text-red-900 uppercase animate-pulse">Critical_Restriction_Enforced</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 12.4 Program Suspension/Termination - Heavy Tactical Block */}
                                <div className="pl-4">
                                    <div className="p-8 md:p-12 bg-[#080808] border border-white/10 rounded-[3rem] relative overflow-hidden group">
                                        {/* Background Icon */}
                                        <Ban size={250} className="absolute -right-20 -bottom-20 text-red-600 opacity-5 -rotate-12 group-hover:opacity-10 transition-opacity" />

                                        <div className="relative z-10 space-y-10">
                                            <div className="flex items-center justify-between border-b border-white/5 pb-6">
                                                <h4 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-3">
                                                    <ShieldAlert className="text-red-500" /> 12.4  Program Suspension/Termination
                                                </h4>
                                                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest hidden md:block">Node_Status: Protected</span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                {[
                                                    { t: "Advance Notice", d: "Companies must provide a mandatory 30 days notice.", i: <Clock /> },
                                                    { t: "Report Resolution", d: "All pending reports must be resolved before termination.", i: <CheckCircle2 /> },
                                                    { t: "Permanent Legacy", d: "Hall of Fame listings remain permanently accessible.", i: <Trophy /> },
                                                    { t: "Cool-off Period", d: "Companies cannot rejoin for 6 months after voluntary exit.", i: <History /> },
                                                    { t: "Platform Override", d: "We may terminate programs with 7 days notice for violations.", i: <Zap />, alert: true }
                                                ].map((box, i) => (
                                                    <div key={i} className="space-y-3">
                                                        <div className={`flex items-center gap-3 ${box.alert ? 'text-red-500' : 'text-green-800'}`}>
                                                            {box.i}
                                                            <h5 className="text-[11px] font-bold uppercase tracking-widest">{box.t}</h5>
                                                        </div>
                                                        <p className="text-xs text-gray-500 font-light leading-relaxed pl-8 border-l border-white/5 ml-2">
                                                            {box.d}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-8 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-700 uppercase tracking-[0.3em]">
                                                <span>Authorization_Revocation_Protocol: v1.1</span>
                                                <span className="text-red-900">Risk_Level: Critical</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 13: PLATFORM RESPONSIBILITIES (১২ নম্বর সেকশনের পরে বসান) --- */}
                            <section id="responsibilities" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Cpu className="text-green-500" /> 13. Platform Responsibilities
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        Guidelines regarding operational responsibilities and service limitations of the ZeroDay Test platform.
                                    </p>
                                </div>

                                {/* 13.1 Platform Services - Grid of Nodes */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        13.1 Platform Services We Provide
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            { t: "Triage & Validation", d: "Report triage support and validation assistance", i: <BarChart3 /> },
                                            { t: "Identity Verification", d: "Researcher verification and background checks", i: <ShieldCheck /> },
                                            { t: "Duplicate Detection", d: "Duplicate detection systems and tracking", i: <Copy /> },
                                            { t: "Encrypted Comms", d: "Secure communication channels (encrypted messaging)", i: <Lock /> },
                                            { t: "Vuln Tracking", d: "Vulnerability tracking and status management", i: <Terminal /> },
                                            { t: "Analytics Dashboard", d: "Analytics and reporting dashboards for companies", i: <Database /> },
                                            { t: "Legal Framework", d: "Legal framework and safe harbor protection", i: <Scale /> },
                                            { t: "Mediation Services", i: <Handshake />, d: "Mediation services for disputes" },
                                            { t: "Resource Library", d: "Educational resources for researchers and companies", i: <BookOpen /> },
                                            { t: "24/7 Support", d: "24/7 platform support for critical issues", i: <Zap />, alert: true }
                                        ].map((srv, i) => (
                                            <div key={i} className="group p-5 bg-zinc-950 border border-white/5 rounded-2xl hover:border-green-500/20 transition-all">
                                                <div className="flex items-start gap-4">
                                                    <div className={`p-2 rounded-lg ${srv.alert ? 'bg-green-500 text-black shadow-[0_0_15px_#22c55e]' : 'bg-zinc-900 text-green-500 group-hover:bg-green-500 group-hover:text-black'} transition-all`}>
                                                        {React.cloneElement(srv.i as React.ReactElement, { size: 18 })}
                                                    </div>
                                                    <div>
                                                        <h5 className="text-white font-bold text-xs uppercase tracking-tight mb-1">{srv.t}</h5>
                                                        <p className="text-[10px] text-gray-500 leading-tight">{srv.d}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 13.2 Platform Commitments - Tactical HUD Layout */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-green-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                        13.2 Platform Commitments <span className='text-green-200 font-normal'>We commit to: </span>
                                    </h4>

                                    <div className="p-8 bg-[#070707] border border-green-500/10 rounded-[2.5rem] relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
                                            <ShieldCheck size={150} className="text-green-500" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                                            {[
                                                { t: "99.9% Uptime", d: "We commit to maintaining platform availability.", i: <Globe /> },
                                                { t: "Enterprise Security", d: "Data protected with military-grade encryption.", i: <Lock /> },
                                                { t: "Data Privacy", d: "No personal info sharing without explicit consent.", i: <EyeOff /> },
                                                { t: "Rapid Response", d: "Critical issues addressed within 24 hours.", i: <Zap /> },
                                                { t: "Annual Audits", d: "Regular 3rd-party security audits conducted.", i: <Search /> },
                                                { t: "Transparency", d: "Clear and honest decision-making processes.", i: <Terminal /> }
                                            ].map((item, i) => (
                                                <div key={i} className="space-y-2">
                                                    <div className="flex items-center gap-3 text-green-500">
                                                        {React.cloneElement(item.i as React.ReactElement, { size: 16 })}
                                                        <h5 className="text-xs font-black uppercase tracking-widest">{item.t}</h5>
                                                    </div>
                                                    <p className="text-xs text-gray-500 font-light pl-7">{item.desc || item.d}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 13.3 Platform Limitations - "Restricted Area" Style */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-red-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-red-900 rounded-full animate-pulse"></div>
                                        13.3 Platform Limitations (What we do NOT do)
                                    </h4>

                                    <div className="bg-zinc-950 border border-red-900/20 rounded-[2.5rem] overflow-hidden group">
                                        <div className="grid grid-cols-1 md:grid-cols-2">
                                            {/* Visual Warning Side */}
                                            <div className="p-10 bg-red-950/5 flex flex-col justify-center items-center text-center border-b md:border-b-0 md:border-r border-red-900/10">
                                                <div className="relative mb-4">
                                                    <FileWarning size={48} className="text-red-900" />
                                                    <motion.div
                                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className="absolute inset-0 bg-red-500/10 rounded-full blur-xl"
                                                    />
                                                </div>
                                                <h5 className="text-red-500 font-black uppercase text-xs tracking-[0.3em]">Operational_Boundaries</h5>
                                                <p className="text-[10px] text-gray-600 mt-2 font-mono uppercase">Non-Liability Clauses Enforced</p>
                                            </div>

                                            {/* Limitations List Side */}
                                            <div className="p-8 space-y-4">
                                                {[
                                                    "Guarantee specific results or number of bugs found",
                                                    "Provide direct penetration testing or consulting",
                                                    "Take liability for actions outside policy boundaries",
                                                    "Interfere with legitimate security research",
                                                    "Share details with 3rd parties without authorization",
                                                    "Mediate disputes outside our platform scope"
                                                ].map((text, i) => (
                                                    <div key={i} className="flex items-center gap-3 group/item">
                                                        <X size={14} className="text-red-900 group-hover/item:text-red-500 transition-colors" />
                                                        <p className="text-xs text-gray-500 font-light">{text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 14: COMPLIANCE & LEGAL FRAMEWORK --- */}
                            <section id="legal" className="scroll-mt-32 space-y-12">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Gavel className="text-green-500" /> 14. Compliance & Legal Framework
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        All activities on the ZeroDay Test platform are conducted in accordance with domestic and international cyber laws and security standards.
                                    </p>
                                </div>

                                {/* 14.1 & 14.2: National vs International Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pl-4">

                                    {/* 14.1 Bangladeshi Legal Compliance */}
                                    <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/20 transition-all">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                            <Globe size={100} className="text-white" />
                                        </div>
                                        <h4 className="text-white font-bold text-xs uppercase mb-6 tracking-widest flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div> 14.1 Bangladeshi Legal Compliance
                                        </h4>
                                        <div className="space-y-4 text-[11px] font-mono text-gray-500">
                                            {[
                                                { t: "ICT Act 2006 (Amended 2013)", d: "Computer system access provisions" },
                                                { t: "Digital Security Act 2018", d: "Cybersecurity and lawful access" },
                                                { t: "Cyber Security Act 2025", d: "Cybersecurity and lawful access" },
                                                { t: "Bangladesh Bank Guidelines", d: "For financial institutions compliance" },
                                                { t: "Personal Data Protection Act", d: "Provisions followed (when enacted)" },
                                                { t: "Companies Act 1994", d: "Corporate responsibility standards" }
                                            ].map((law, i) => (
                                                <div key={i} className="flex gap-3 group/item">
                                                    <span className="text-green-900 group-hover/item:text-green-500">[OK]</span>
                                                    <p className="leading-tight"><span className="text-gray-300">{law.t}</span> — {law.d}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* 14.2 International Compliance */}
                                    <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] relative overflow-hidden group hover:border-blue-500/20 transition-all">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-5 transition-opacity">
                                            <ShieldCheck size={100} className="text-white" />
                                        </div>
                                        <h4 className="text-white font-bold text-xs uppercase mb-6 tracking-widest flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> 14.2 International Compliance
                                        </h4>
                                        <div className="space-y-4 text-[11px] font-mono text-gray-500">
                                            {[
                                                { t: "GDPR Compliant", d: "For EU companies and researchers" },
                                                { t: "CFAA Safe Harbor", d: "United States Computer Fraud and Abuse Act" },
                                                { t: "ISO 29147", d: "Vulnerability disclosure standard" },
                                                { t: "ISO 30111", d: "Vulnerability handling processes" },
                                                { t: "ISO 27001", d: "Security controls implementation" },
                                                { t: "Regional Data Laws", d: "CCPA, PIPEDA, and others" }
                                            ].map((law, i) => (
                                                <div key={i} className="flex gap-3 group/item">
                                                    <span className="text-blue-900 group-hover/item:text-blue-500">[OK]</span>
                                                    <p className="leading-tight"><span className="text-gray-300">{law.t}</span> — {law.d}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* 14.3 Data Protection & Privacy - Full Width Tactical Hub */}
                                <div className="pl-4">
                                    <div className="p-8 md:p-12 bg-[#070707] border border-white/5 rounded-[3rem] relative overflow-hidden">
                                        <div className="absolute -right-10 -bottom-10 opacity-[0.03]">
                                            <Lock size={250} className="text-green-500" />
                                        </div>

                                        <div className="relative z-10 space-y-10">
                                            <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-2">
                                                <ShieldAlert size={18} className="text-green-500" /> 14.3 Data Protection & Privacy
                                            </h4>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                {[
                                                    { t: "Military-Grade Encryption", d: "All researcher data encrypted at rest and in transit (AES-256, TLS 1.3)" },
                                                    { t: "PII Minimization", d: "Minimum personally identifiable information collected in vulnerability reports" },
                                                    { t: "Right to Deletion", d: "Right to deletion upon account closure (except legal retention requirements)" },
                                                    { t: "Strict Data Retention", d: "Reports kept for 7 years, personal data for 2 years post-account closure" },
                                                    { t: "Annual Security Audits", d: "Regular audits conducted by independent third-party security firms" },
                                                    { t: "GDPR Rights Enforced", d: "Full support for Access, Rectification, Erasure, and Portability" }
                                                ].map((box, i) => (
                                                    <div key={i} className="space-y-2 group">
                                                        <div className="flex items-center gap-2 text-green-900 group-hover:text-green-500 transition-colors">
                                                            <Zap size={12} />
                                                            <h5 className="text-[11px] font-black uppercase tracking-tighter">{box.t}</h5>
                                                        </div>
                                                        <p className="text-xs text-gray-500 font-light leading-relaxed pl-5">{box.d}</p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-6 border-t border-white/5">
                                                <p className="text-[10px] font-mono text-red-900 uppercase flex items-center gap-2">
                                                    <Ban size={12} /> No data sharing with third parties without explicit consent.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 14.4 Cross-Border Data Transfer */}
                                <div className="pl-4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="p-8 bg-zinc-900/20 border border-white/10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 group"
                                    >
                                        <div className="flex items-center gap-6 text-center md:text-left">
                                            <div className="p-4 bg-zinc-950 border border-white/5 rounded-2xl text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                                                <Globe size={32} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white uppercase tracking-tight">14.4 Cross-Border Data Transfer</h4>
                                                <p className="text-xs text-gray-500 font-light mt-1">Global compliance nodes for data residency and privacy shield frameworks.</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 min-w-[200px]">
                                            <div className="px-4 py-2 bg-black border border-white/5 rounded-xl text-center">
                                                <p className="text-[9px] font-mono text-gray-600 uppercase">Privacy Shield</p>
                                                <p className="text-[10px] text-green-700 font-bold uppercase">Compliant</p>
                                            </div>
                                            <div className="px-4 py-2 bg-black border border-white/5 rounded-xl text-center">
                                                <p className="text-[9px] font-mono text-gray-600 uppercase">Residency Options</p>
                                                <p className="text-[10px] text-green-700 font-bold uppercase">Localized Available</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </section>

                            {/* --- SECTION 15: SPECIAL PROVISIONS (১৪ নম্বর সেকশনের পরে বসান) --- */}
                            <section id="special" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <Globe className="text-green-500" /> 15. Special Provisions
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        Our customized security protocols are based on different sectors and geographic locations.
                                    </p>
                                </div>

                                <div className="pl-4 grid grid-cols-1 lg:grid-cols-3 gap-8">

                                    {/* 15.1 For Bangladeshi Companies - Green Node */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="group relative p-8 bg-zinc-950 border border-green-500/10 rounded-[1rem] hover:border-green-500/30 transition-all duration-500"
                                    >
                                        <div className="absolute top-4 right-6 text-[8px] font-mono text-green-900 uppercase tracking-widest">Region: BD_LOC</div>
                                        <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                                            <Building size={24} />
                                        </div>
                                        <h4 className="text-lg font-bold text-white uppercase mb-6 tracking-tight">15.1 Bangladeshi Companies</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "Bilingual support (Bengali & English)",
                                                "Local payment infrastructure integration",
                                                "Dedicated onboarding for first-time programs",
                                                "Educational workshops on vuln management",
                                                "Compliance assistance with local regulations",
                                                "Government liaison for public sector",
                                                "Custom SLAs for resource-constrained orgs"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                                    <div className="w-1 h-1 bg-green-900 rounded-full mt-1.5 shrink-0 group-hover:bg-green-500"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* 15.2 For International Companies - Blue Node */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="group relative p-8 bg-zinc-950 border border-blue-500/10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500"
                                    >
                                        <div className="absolute top-4 right-6 text-[8px] font-mono text-blue-900 uppercase tracking-widest">Region: INTL_GLB</div>
                                        <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-black transition-all">
                                            <Globe size={24} />
                                        </div>
                                        <h4 className="text-lg font-bold text-white uppercase mb-6 tracking-tight">15.2 International Companies</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "Multi-language platform support",
                                                "24/7 global support across time zones",
                                                "Regional compliance guidance & docs",
                                                "Currency flexibility (Future Bounty)",
                                                "Global researcher network (100+ countries)",
                                                "Enterprise integrations (Jira, Slack, etc.)",
                                                "Custom branding for white-label programs"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                                    <div className="w-1 h-1 bg-blue-900 rounded-full mt-1.5 shrink-0 group-hover:bg-blue-500"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                    {/* 15.3 For Government & Critical Infra - Purple/Red Node */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="group relative p-8 bg-zinc-950 border border-purple-500/10 rounded-[2.5rem] hover:border-purple-500/30 transition-all duration-500"
                                    >
                                        <div className="absolute top-4 right-6 text-[8px] font-mono text-purple-900 uppercase tracking-widest">Clearance: TOP_SECRET</div>
                                        <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-black transition-all">
                                            <ShieldAlert size={24} />
                                        </div>
                                        <h4 className="text-lg font-bold text-white uppercase mb-6 tracking-tight">15.3 Gov & Critical Infra</h4>
                                        <ul className="space-y-3">
                                            {[
                                                "Enhanced vetting of researchers (Background checks)",
                                                "Private programs with invite-only access",
                                                "Extended disclosure (180 days / Non-disclosure)",
                                                "Classified reporting with secure handling",
                                                "Dedicated security team liaisons",
                                                "Sector-specific regulatory compliance"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                                    <div className="w-1 h-1 bg-purple-900 rounded-full mt-1.5 shrink-0 group-hover:bg-purple-500"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>

                                </div>

                                {/* Section 15 Tactical Footer Meta */}
                                <div className="pl-4">
                                    <div className="p-4 bg-zinc-900/10 border border-white/5 rounded-xl flex items-center justify-between opacity-30 group hover:opacity-100 transition-opacity">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-green-900" />
                                            <p className="text-[9px] font-mono text-gray-200 uppercase tracking-[0.2em]">
                                                Provision_Status: <span className="text-green-700">Multi_Node_Support_Active</span>
                                            </p>
                                        </div>
                                        <p className="text-[9px] font-mono text-gray-800 uppercase">Secure_Handshake_v2</p>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 16: RESEARCHER CODE OF CONDUCT --- */}
                            <section id="conduct" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <UserCheck className="text-green-500" /> 16. Researcher Code of Conduct
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        A code of conduct is set to maintain the professionalism and ethics of each researcher on the ZeroDay Test platform.
                                    </p>
                                </div>

                                {/* 16.1 & 16.2: Side-by-Side Contrast Matrix */}
                                <div className="pl-4 grid grid-cols-1 lg:grid-cols-2 gap-8">

                                    {/* 16.1 Professional Standards - Green "Authorized" Node */}
                                    <div className="p-8 bg-green-500/5 border border-green-500/10 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                                            <ShieldCheck size={120} className="text-green-500" />
                                        </div>

                                        <h4 className="text-green-500 font-bold text-xs uppercase mb-8 tracking-widest flex items-center gap-2">
                                            <CheckCircle2 size={16} /> 16.1 Professional Standards (Must Do)
                                        </h4>

                                        <ul className="space-y-4">
                                            {[
                                                "Communicate professionally and respectfully",
                                                "Provide honest and accurate information",
                                                "Respect intellectual property rights",
                                                "Maintain confidentiality of vulnerability details",
                                                "Act ethically and in good faith at all times",
                                                "Continuously improve reporting quality"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-400 group/item">
                                                    <div className="w-5 h-5 rounded-full bg-green-900/20 flex items-center justify-center text-green-500 shrink-0 mt-0.5 group-hover/item:bg-green-500 group-hover/item:text-black transition-all">
                                                        <CheckCircle2 size={12} />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 16.2 Prohibited Behavior - Red "Banned" Node */}
                                    <div className="p-8 bg-red-500/5 border border-red-500/10 rounded-[2.5rem] relative overflow-hidden group hover:border-red-500/30 transition-all duration-500">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                                            <Ban size={120} className="text-red-500" />
                                        </div>

                                        <h4 className="text-red-500 font-bold text-xs uppercase mb-8 tracking-widest flex items-center gap-2">
                                            <AlertTriangle size={16} /> 16.2 Prohibited Behavior (Must NOT Do)
                                        </h4>

                                        <ul className="space-y-4">
                                            {[
                                                "Harassment or threatening behavior",
                                                "Extortion or demanding rewards for VDP",
                                                "Early public disclosure without authorization",
                                                "Sharing access credentials or vuln details",
                                                "Conducting testing outside approved scope",
                                                "Submitting false or fabricated reports",
                                                "Creating multiple accounts to bypass bans"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-500 group/item">
                                                    <div className="w-5 h-5 rounded-full bg-red-900/20 flex items-center justify-center text-red-500 shrink-0 mt-0.5 group-hover/item:bg-red-500 group-hover/item:text-white transition-all">
                                                        <XCircle size={12} />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 16.3 Consequences of Violations - Escalation Ladder */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Zap size={14} className="text-yellow-500" /> 16.3 Consequences of Violations
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {[
                                            { l: "First Offense", t: "Warning", d: "Formal warning and educational guidance.", c: "border-blue-500/20 text-blue-500" },
                                            { l: "Second Offense", t: "Suspension", d: "Temporary platform suspension (30-90 days).", c: "border-yellow-500/20 text-yellow-500" },
                                            { l: "Severe Offense", t: "Permanent Ban", d: "Permanent removal from the ZeroDay Test platform.", c: "border-red-500/20 text-red-500" },
                                            { l: "Criminal Act", t: "Law Enforcement", d: "Full cooperation with authorities and prosecution.", c: "border-red-600 bg-red-600/5 text-red-600" }
                                        ].map((item, i) => (
                                            <div key={i} className={`p-6 border rounded-3xl space-y-3 relative overflow-hidden group hover:scale-[1.02] transition-all ${item.c}`}>
                                                <p className="text-[9px] font-mono uppercase tracking-widest opacity-60">{item.l}</p>
                                                <h5 className="text-lg font-black uppercase tracking-tight">{item.t}</h5>
                                                <p className="text-[11px] leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors">{item.d}</p>
                                                <div className="absolute -bottom-2 -right-2 opacity-5">
                                                    <Terminal size={60} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Section 16 Footer HUD */}
                                <div className="pl-4">
                                    <div className="p-4 bg-zinc-900/20 border border-white/5 rounded-xl flex items-center justify-between opacity-40">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-green-900" />
                                            <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.2em]">
                                                Code_of_Conduct_Revision: <span className="text-white">v1.0.4</span> | Status: <span className="text-green-700">Strict_Enforcement</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 17: COMPANY OBLIGATIONS --- */}
                            <section id="company-obs" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-white/5 pb-4">
                                        <ShieldAlert className="text-green-500" /> 17. Company Obligations
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        Legal and professional responsibilities assigned to companies or asset owners registered on the platform.
                                    </p>
                                </div>

                                {/* 17.1 & 17.2: Requirements vs Recommendations */}
                                <div className="pl-4 grid grid-cols-1 lg:grid-cols-2 gap-8">

                                    {/* 17.1 Minimum Requirements - Green "Compliance" Node */}
                                    <div className="p-8 bg-zinc-950 border border-green-500/10 rounded-[2.5rem] relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                                            <Building2 size={120} className="text-green-500" />
                                        </div>

                                        <h4 className="text-green-500 font-bold text-xs uppercase mb-8 tracking-widest flex items-center gap-2">
                                            <CheckCircle2 size={16} /> 17.1 Minimum Requirements (Mandatory)
                                        </h4>

                                        <ul className="space-y-4">
                                            {[
                                                "Clearly define in-scope assets and testing boundaries",
                                                "Respond to reports within published SLAs",
                                                "Maintain professional communication with researchers",
                                                "Act in good faith on valid vulnerability reports",
                                                "Provide safe harbor protection as outlined in policy",
                                                "Update Hall of Fame with researcher credits",
                                                "Not retaliate against researchers following policy"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-400 group/item">
                                                    <div className="w-5 h-5 rounded-full bg-green-900/20 flex items-center justify-center text-green-500 shrink-0 mt-0.5 group-hover/item:bg-green-500 group-hover/item:text-black transition-all">
                                                        <CheckCircle2 size={12} />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 17.2 Best Practices - Blue "Performance" Node */}
                                    <div className="p-8 bg-zinc-950 border border-blue-500/10 rounded-[2.5rem] relative overflow-hidden group hover:border-blue-500/30 transition-all duration-500">
                                        <div className="absolute top-0 right-0 p-6 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                                            <Zap size={120} className="text-blue-500" />
                                        </div>

                                        <h4 className="text-blue-500 font-bold text-xs uppercase mb-8 tracking-widest flex items-center gap-2">
                                            <Zap size={16} /> 17.2 Best Practices (Recommended)
                                        </h4>

                                        <ul className="space-y-4">
                                            {[
                                                "Provide testing accounts or sandbox environments",
                                                "Offer detailed scope and technical documentation",
                                                "Maintain an updated security.txt file on assets",
                                                "Conduct internal security reviews before VDP launch",
                                                "Assign a dedicated security team point-of-contact",
                                                "Provide technical feedback to help researchers improve"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-500 group/item">
                                                    <div className="w-5 h-5 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0 mt-0.5 group-hover/item:bg-blue-500 group-hover/item:text-black transition-all">
                                                        <Zap size={12} />
                                                    </div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* 17.3 Prohibited Actions - Red "Violation" Alert Block */}
                                <div className="pl-4">
                                    <div className="p-8 md:p-12 bg-red-950/5 border border-red-900/20 rounded-[3rem] relative overflow-hidden group">
                                        {/* Background Icon */}
                                        <FileWarning size={250} className="absolute -right-20 -bottom-20 text-red-600 opacity-5 -rotate-12 group-hover:opacity-10 transition-opacity" />

                                        <div className="relative z-10 space-y-10">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-red-900/10 pb-6 gap-4">
                                                <h4 className="text-xl md:text-2xl font-black text-red-500 uppercase tracking-tighter flex items-center gap-3">
                                                    <Ban className="text-red-600" /> 17.3 Prohibited Actions
                                                </h4>
                                                <span className="px-4 py-1 bg-red-900/20 border border-red-900/40 rounded-full text-[10px] font-mono text-red-500 uppercase tracking-widest animate-pulse">
                                                    Critical_Compliance_Violation
                                                </span>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                {[
                                                    "Threatening legal action against compliant researchers",
                                                    "Ignoring or dismissing valid vulnerability reports",
                                                    "Disclosing researcher identity without explicit consent",
                                                    "Refusing to fix validated critical/high vulnerabilities",
                                                    "Retroactively changing rules to invalidate reports"
                                                ].map((text, i) => (
                                                    <div key={i} className="p-5 bg-black/40 border border-white/5 rounded-2xl flex items-center gap-4 group/box hover:border-red-500/30 transition-all">
                                                        <div className="w-8 h-8 rounded-lg bg-red-900/10 flex items-center justify-center text-red-900 group-hover/box:bg-red-600 group-hover/box:text-white transition-all">
                                                            <AlertTriangle size={16} />
                                                        </div>
                                                        <p className="text-xs text-gray-400 font-light group-hover/box:text-gray-200 transition-colors leading-relaxed">
                                                            {text}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="pt-8 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-700 uppercase tracking-[0.3em]">
                                                <span>Directive_Source: Global_Ethics_Standard</span>
                                                <span className="hidden md:block">Audit_ID: CO-REQ-0x772B</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 17 Footer Metadata */}
                                <div className="pl-4">
                                    <div className="p-4 bg-zinc-900/20 border border-white/5 rounded-xl flex items-center justify-between opacity-30">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-green-900" />
                                            <p className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.2em]">
                                                Node: <span className="text-white">Organization_Integrity_Monitor</span> | Sync: <span className="text-green-700">Verified</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 18: EMERGENCY PROCEDURES --- */}
                            <section id="emergency" className="scroll-mt-32 space-y-16">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-black text-white uppercase flex items-center gap-3 border-b border-red-500/10 pb-4">
                                        <AlertCircle className="text-red-500 animate-pulse" /> 18. Emergency Procedures
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light pl-4 italic">
                                        Our defined emergency response protocols to handle moments of crisis, active cyber attacks, or data breaches.
                                    </p>
                                </div>

                                {/* 18.1 Critical Vulnerability Handling - High Alert Card */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-red-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
                                        18.1 Critical Vulnerability Handling
                                    </h4>

                                    <div className="p-8 bg-red-950/5 border border-red-500/20 rounded-[3rem] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                            <Siren size={150} className="text-red-600" />
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                                            <div className="space-y-6">
                                                <p className="text-sm text-gray-300 leading-relaxed uppercase font-bold tracking-tight">
                                                    For actively exploited or imminent-threat vulnerabilities:
                                                </p>
                                                <ul className="space-y-4">
                                                    {[
                                                        "Researchers should mark report as 'CRITICAL - ACTIVE EXPLOITATION'",
                                                        "Platform security team notified automatically via SMS/call",
                                                        "Company executive team contacted within 1 hour",
                                                        "Emergency remediation procedures activated",
                                                        "Public disclosure delayed until emergency fix deployed"
                                                    ].map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-xs md:text-sm text-gray-400">
                                                            <div className="p-1 bg-red-900/20 rounded text-red-500 mt-0.5">
                                                                <Zap size={12} fill="currentColor" />
                                                            </div>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex flex-col justify-center items-center lg:items-end">
                                                <div className="p-6 bg-black/60 border border-red-500/20 rounded-3xl text-center md:text-right">
                                                    <p className="text-[10px] font-mono text-red-900 uppercase mb-2">Response_SLA</p>
                                                    <p className="text-2xl font-black text-white uppercase tracking-tighter">Under 60 Minutes</p>
                                                    <p className="text-[9px] font-mono text-gray-600 mt-2 uppercase">Executive_Notification_Trigger</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 18.2 Data Breach Incidents - Step-by-Step Containment */}
                                <div className="pl-4 space-y-8">
                                    <h4 className="text-yellow-500 font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></div>
                                        18.2 Data Breach Incidents (Containment Protocol)
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            { n: "1", t: "Stop Testing", d: "Stop testing immediately upon discovering sensitive data." },
                                            { n: "2", t: "No Exfiltration", d: "Do not access further or attempt to download/export data." },
                                            { n: "3", t: "Emergency Report", d: "Report incident through platform emergency channel." },
                                            { n: "4", t: "Local Cleanup", d: "Delete any locally stored data obtained during the session." },
                                            { n: "5", t: "Minimal Docs", d: "Document only minimal details necessary for POC." },
                                            { n: "6", t: "Full Cooperation", d: "Cooperate fully with the company incident response team." }
                                        ].map((step, i) => (
                                            <div key={i} className="p-6 bg-zinc-900/30 border border-white/5 rounded-3xl group hover:border-yellow-500/20 transition-all">
                                                <div className="flex items-center gap-4 mb-3">
                                                    <span className="text-2xl font-black text-zinc-800 group-hover:text-yellow-600 transition-colors font-mono">{step.n}</span>
                                                    <h5 className="text-white font-bold text-xs uppercase tracking-widest">{step.t}</h5>
                                                </div>
                                                <p className="text-xs text-gray-500 font-light leading-relaxed pl-7">{step.d}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 18.3 Platform Security Incidents - Transparency HUD */}
                                <div className="pl-4">
                                    <div className="p-8 bg-[#0a0a0a] border border-blue-500/20 rounded-[3rem] relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/30"></div>

                                        <div className="space-y-8">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl">
                                                    <ShieldAlert size={24} />
                                                </div>
                                                <div>
                                                    <h4 className="text-xl font-bold text-white uppercase tracking-tight">18.3 Platform Security Incidents</h4>
                                                    <p className="text-[10px] font-mono text-gray-600 uppercase">Self-Breach_Recovery_Protocol</p>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-400 font-light max-w-3xl">
                                                If the ZeroDay Test platform itself is the subject of an attack, we take the following steps to ensure transparency and rapid recovery:
                                            </p>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {[
                                                    "Immediate notification to all active users via all channels",
                                                    "Temporary program suspension until system resolution",
                                                    "Mandatory third-party security audit post-incident",
                                                    "Transparent public disclosure of all incident details",
                                                    "Publication of a comprehensive remediation & lessons-learned report"
                                                ].map((text, i) => (
                                                    <div key={i} className="flex gap-4 items-center p-4 bg-zinc-900 border border-white/5 rounded-2xl group hover:bg-blue-500/5 transition-all">
                                                        <Radio size={16} className="text-blue-900 group-hover:text-blue-500 group-hover:animate-pulse shrink-0" />
                                                        <p className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">{text}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 18 Emergency Footer Meta */}
                                <div className="pl-4">
                                    <div className="p-4 bg-red-950/10 border border-red-900/10 rounded-xl flex items-center justify-between opacity-40">
                                        <div className="flex items-center gap-3">
                                            <Terminal size={14} className="text-red-900" />
                                            <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.2em]">
                                                Crisis_Node: <span className="text-white">Active</span> | Hotline_Link: <span className="text-red-700">Established</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* --- SECTION 19: CONTACT & SUPPORT (পলিসির একদম শেষ অংশ) --- */}
                            <section id="contact" className="scroll-mt-32 space-y-12">
                                <div className="p-8 md:p-12 bg-zinc-950 border border-green-500/10 rounded-[3rem] relative overflow-hidden">
                                    <h3 className="text-2xl font-black text-white uppercase mb-10 flex items-center gap-3">
                                        <Mail className="text-green-500" /> 19. Contact & Support
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                        {/* General & Abuse */}
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-[10px] font-mono text-green-700 uppercase mb-3 tracking-widest">General Inquiries</p>
                                                <div className="space-y-1">
                                                    <p className="text-white font-bold text-sm flex items-center gap-2">
                                                        <Mail size={14} className="text-gray-600" /> pentest@bytecapsuleit.com
                                                    </p>
                                                    <p className="text-white font-bold text-sm flex items-center gap-2">
                                                        <Phone size={14} className="text-gray-600" /> +8801319919694
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-mono text-red-900 uppercase mb-3 tracking-widest">Report Abuse</p>
                                                <p className="text-white font-bold text-sm flex items-center gap-2">
                                                    <AlertCircle size={14} className="text-red-900" /> mail@bytecapsuleit.com
                                                </p>
                                            </div>
                                        </div>

                                        {/* Legal & Hours */}
                                        <div className="space-y-6">
                                            <div>
                                                <p className="text-[10px] font-mono text-blue-900 uppercase mb-3 tracking-widest">Legal Inquiries</p>
                                                <p className="text-white font-bold text-sm flex items-center gap-2">
                                                    <ShieldCheck size={14} className="text-blue-900" /> kaniz@bytecapsuleit.com
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-mono text-gray-600 uppercase mb-3 tracking-widest">Support Hours</p>
                                                <ul className="text-xs text-gray-500 space-y-1 font-light list-none">
                                                    <li className="flex items-center gap-2"><Clock size={12} /> BD Time: 10 AM - 5 PM (5 days/week)</li>
                                                    <li className="flex items-center gap-2"><Zap size={12} className="text-green-900" /> Emergency: 24/7/365</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Emergency Hotline - Red Box */}
                                        <div className="p-6 bg-red-900/10 border border-red-500/20 rounded-[2rem] relative group">
                                            <div className="absolute top-2 right-4">
                                                <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                                            </div>
                                            <p className="text-red-500 font-black uppercase text-[10px] mb-4 flex items-center gap-2">
                                                <ShieldAlert size={14} /> 24/7 Emergency Hotline
                                            </p>
                                            <div className="space-y-3">
                                                <div>
                                                    <p className="text-[9px] font-mono text-gray-600 uppercase">Phone (Direct)</p>
                                                    <p className="text-white font-mono text-sm font-bold">+8801319919694</p>
                                                </div>
                                                <div>
                                                    <p className="text-[9px] font-mono text-gray-600 uppercase">Priority Email</p>
                                                    <p className="text-white font-mono text-xs">zisan.ceo@bytecapsuleit.com</p>
                                                </div>
                                            </div>
                                            <p className="mt-4 text-[8px] text-red-900 font-mono italic">** Critical Issues Only</p>
                                        </div>
                                    </div>

                                    {/* Social Media Nodes */}
                                    <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <p className="text-[10px] font-mono text-gray-600 uppercase mb-4 tracking-widest">Social Media Nodes</p>
                                            <div className="flex gap-4">
                                                {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                                                    <div key={social} className="px-4 py-2 bg-zinc-900 border border-white/5 rounded-xl text-[10px] font-mono text-gray-400 hover:text-green-500 hover:border-green-500/20 transition-all cursor-pointer">
                                                        @{social.toLowerCase()}-test
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col md:items-end justify-center">
                                            <p className="text-[10px] font-mono text-gray-700 uppercase">Connection_Protocol: SECURE_UPLINK</p>
                                            <p className="text-[10px] font-mono text-green-900 uppercase">Node_Location: Dhaka_Core</p>
                                        </div>
                                    </div>
                                </div>

                                {/* --- DOCUMENT CONTROL & APPROVAL --- */}
                                <div className="pl-4 pt-12 space-y-12">
                                    {/* Document Metadata Table */}
                                    <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2.5rem]">
                                        <h4 className="text-white font-bold text-xs uppercase mb-6 tracking-widest flex items-center gap-2">
                                            <FileText size={16} className="text-green-800" /> Document Control
                                        </h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                            <div>
                                                <p className="text-[9px] font-mono text-gray-600 uppercase">Version</p>
                                                <p className="text-xs text-white font-bold">1.0 Stable</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-mono text-gray-600 uppercase">Effective Date</p>
                                                <p className="text-xs text-white font-bold">Feb 09, 2026</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-mono text-gray-600 uppercase">Next Review</p>
                                                <p className="text-xs text-green-700 font-bold">Aug 09, 2026</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-mono text-gray-600 uppercase">Policy Owner</p>
                                                <p className="text-xs text-white font-bold">Chief Tech Officer</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Official Approval & Signature (ছবির হুবহু স্টাইল) */}
                                    <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-end gap-12 relative">
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
                                        {/* Final Acceptance Badge */}
                                        <div className="bg-green-600 p-10 rounded-[3.5rem] text-black max-w-sm shadow-[0_0_60px_rgba(34,197,94,0.3)] border border-green-400/50">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 bg-black rounded-lg text-green-500">
                                                    <FileSignature size={24} />
                                                </div>
                                                <h4 className="font-black uppercase text-lg tracking-tighter leading-none">Board Approved</h4>
                                            </div>
                                            <p className="text-[11px] font-bold leading-relaxed mb-6 italic opacity-90">
                                                "This Vulnerability Disclosure Policy has been reviewed and approved by the Executive Board of Byte Capsule IT for immediate enforcement."
                                            </p>
                                            <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase tracking-widest border-t border-black/10 pt-4">
                                                <ShieldCheck size={14} /> VDP_ENFORCED_0x9AF2
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </motion.div>
                </div>

                {/* Global Footer Meta */}
                <div className="mt-12 text-center opacity-30 flex flex-col md:flex-row justify-center items-center gap-6">
                    <p className="text-gray-500 font-mono text-[9px] uppercase tracking-[0.5em]">VDP PROTOCOL DOCUMENT | ZERODAY TEST | BYTE CAPSULE IT | NODE: 0x9AF2</p>
                </div>

            </div>
        </div>
    );
}

// Helper Components for clean code
function Target({ className, size }: { className?: string, size?: number }) {
    return <Globe className={className} size={size} />;
}
function TargetIcon({ className, size }: { className?: string, size?: number }) {
    return <Search className={className} size={size} />;
}
function UserCheck({ className, size }: { className?: string, size?: number }) {
    return <ShieldCheck className={className} size={size} />;
}