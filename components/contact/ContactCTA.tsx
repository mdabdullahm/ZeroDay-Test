"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ShieldCheck, Zap, ArrowRight, Terminal, Globe, Lock } from 'lucide-react';

const ContactCTA = () => {
    return (
        <section className="relative py-15 lg:py-20 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">

            {/* Extreme Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-green-500/10 rounded-full blur-[200px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] -z-10"></div>

            <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 text-center">

                {/* Main High-Impact Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-zinc-900/40 border border-green-500/30 rounded-[4rem] p-12 lg:p-24 backdrop-blur-3xl overflow-hidden shadow-[0_0_50px_rgba(34,197,94,0.1)]"
                >
                    {/* Decorative Elements */}
                    <Terminal size={180} className="absolute -top-20 -left-20 text-green-500 opacity-5 rotate-12" />
                    <Lock size={180} className="absolute -bottom-20 -right-20 text-green-500 opacity-5 -rotate-12" />

                    <div className="relative z-10">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-10"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                            <span className="text-[10px] md:text-xs font-mono font-black text-green-500 uppercase tracking-[0.4em]">Uplink_Final_Confirmation</span>
                        </motion.div>

                        {/* Powerful Heading */}
                        <h2 className="text-5xl lg:text-9xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase">
                            Ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-blue-600 drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                                Infiltrate?
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg md:text-2xl mb-16 max-w-3xl mx-auto font-light leading-relaxed">
                            Click the button below to submit your operational request or speak to us directly. We are ready to provide you with a safe and secure session.
                        </p>

                        {/* Tactical Buttons with Blob Style Logic */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            {/* Primary Action Button */}
                            <button className="group relative px-12 py-6 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl transition-all shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)] hover:-translate-y-2 active:scale-95 text-base uppercase tracking-widest overflow-hidden">
                                <div className="relative z-10 flex items-center justify-center gap-3">
                                    INITIATE_DEPLOYMENT <Rocket size={20} className="fill-current group-hover:animate-bounce" />
                                </div>
                                {/* Liquid fill effect mockup */}
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full scale-[2]"></div>
                            </button>

                            {/* Secondary Action Button */}
                            <button className="w-full sm:w-auto px-12 py-6 border-2 border-white/10 hover:border-green-500/50 hover:bg-green-500/5 text-white font-black rounded-2xl transition-all backdrop-blur-md text-base uppercase tracking-widest flex items-center justify-center gap-3 group">
                                LIVE_CHAT_NODE <Globe size={20} className="text-green-900 group-hover:text-green-500 transition-colors" />
                            </button>
                        </div>

                        {/* Operational Meta-data  */}
                        <div className="mt-20 flex flex-wrap justify-center gap-10 border-t border-white/5 pt-12">

                            <div className="flex flex-col items-center gap-3 group/meta cursor-default">
                                <div className="p-3 bg-green-500/5 rounded-full border border-green-500/10 group-hover/meta:border-green-500/30 transition-all">
                                    <ShieldCheck size={28} className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                </div>
                                <span className="text-[10px] md:text-xs font-mono text-gray-300 uppercase tracking-[0.2em] group-hover/meta:text-green-400 transition-colors">
                                    End-to-End Secure
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-3 group/meta cursor-default">
                                <div className="p-3 bg-green-500/5 rounded-full border border-green-500/10 group-hover/meta:border-green-500/30 transition-all">
                                    <Zap size={28} className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                </div>
                                <span className="text-[10px] md:text-xs font-mono text-gray-300 uppercase tracking-[0.2em] group-hover/meta:text-green-400 transition-colors">
                                    Real-time Response
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-3 group/meta cursor-default">
                                <div className="p-3 bg-green-500/5 rounded-full border border-green-500/10 group-hover/meta:border-green-500/30 transition-all">
                                    <Terminal size={28} className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                </div>
                                <span className="text-[10px] md:text-xs font-mono text-gray-300 uppercase tracking-[0.2em] group-hover/meta:text-green-400 transition-colors">
                                    Encoded Logs
                                </span>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* Footer Technical Metadata */}
                <div className="mt-12 flex justify-center items-center gap-6">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-green-900/30"></div>
                    <p className="text-[9px] font-mono text-white uppercase tracking-[0.5em] whitespace-nowrap">
                        Secure_Handshake_Established | Terminal_ID: 0x9AF2 | Protocol: v2.4.0
                    </p>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-green-900/30"></div>
                </div>

            </div>
        </section>
    );
};

export default ContactCTA;