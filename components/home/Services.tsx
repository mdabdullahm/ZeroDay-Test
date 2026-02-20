"use client";
import { motion } from 'framer-motion';
import { ShieldAlert, Bug, UserCheck, Activity, Lock, FileText, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Managed Bug Bounty Programs",
        description: "Outcome-driven security testing powered by a vetted global community of ethical hackers. You pay only for verified, impactful vulnerabilities—no noise, no wasted effort.",
        icon: <Bug size={24} />,
        tag: "Outcome-Driven"
    },
    {
        title: "Vulnerability Disclosure Program (VDP)",
        description: "A compliant, secure channel that enables researchers to report vulnerabilities responsibly, protecting your organization while fostering ethical collaboration.",
        icon: <ShieldAlert size={24} />,
        tag: "Responsible Disclosure"
    },
    {
        title: "Expert Triage & Validation",
        description: "Every submission is reviewed by our in-house security specialists to eliminate false positives and deliver clear, reproducible findings to your engineering teams.",
        icon: <UserCheck size={24} />,
        tag: "Zero Noise"
    },
    {
        title: "Continuous Attack Surface Monitoring",
        description: "Ongoing assessment of exposed assets to identify new risks as your infrastructure evolves—beyond one-time audits.",
        icon: <Activity size={24} />,
        tag: "24/7 Monitoring"
    },
    {
        title: "Private & Targeted Testing",
        description: "Invite-only programs tailored to sensitive systems, regulatory environments, or high-risk assets requiring controlled disclosure.",
        icon: <Lock size={24} />,
        tag: "Confidential"
    },
    {
        title: "Compliance-Ready Reporting",
        description: "Executive and technical reports aligned with international standards to support audits, risk management, and remediation tracking.",
        icon: <FileText size={24} />,
        tag: "ISO/GDPR Ready"
    }
];

const Services = () => {
    return (
        <section className="relative py-24 bg-black overflow-hidden border-t border-green-500/5">

            {/* Background Decor - Corner Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-green-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-4"
                    >
                        [ Global_Security_Nodes ]
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter"
                    >
                        Our Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Services</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-green-500/30 mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-10 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500"
                        >
                            {/* Card Hover Background Glow */}
                            <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 rounded-[2.5rem] transition-all duration-500"></div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl mb-8 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(34,197,94,0.05)]">
                                    {service.icon}
                                </div>

                                <span className="text-[9px] font-mono text-green-800 bg-green-500/5 px-2 py-0.5 rounded border border-green-500/10 uppercase mb-4 inline-block tracking-widest">
                                    {service.tag}
                                </span>

                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-2 text-[10px] font-black text-green-600 cursor-pointer group/link uppercase tracking-widest">
                                    Read Protocol
                                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;