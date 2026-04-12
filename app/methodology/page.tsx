"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileCode, X, ShieldAlert, Terminal,
    Cpu, ArrowLeft, Activity, Loader2,
    Maximize2, Globe, Lock
} from 'lucide-react';
import Link from 'next/link';

interface ProtocolNode {
    id: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    fileId: string;
}

const protocolNodes: ProtocolNode[] = [
    {
        id: "web",
        title: "Web Infiltration Methodology",
        desc: "Comprehensive breakdown of our web application testing phases—from reconnaissance to final exploitation.",
        icon: <Globe size={24} />,
        fileId: "1HFj5CC0UTWJNg53jPaX_9R6Gm9cwqJFJ"
    },
    {
        id: "network",
        title: "Network Breaching Standards",
        desc: "Internal network assessment protocols including lateral movement and privilege escalation strategies.",
        icon: <Terminal size={24} />,
        fileId: "19sA8lBSv7YzVJuH9vacbFpceqBJonZK4"
    },
    {
        id: "cloud",
        title: "Cloud Hardening Framework",
        desc: "Standard procedures for auditing IAM policies, container security, and serverless infrastructure.",
        icon: <Cpu size={24} />,
        fileId: "1V1C-N5FzmHuI9LefMZo1DX2dVy7NxTtq"
    }
];

export default function MethodologyPage() {
    const [activeFileId, setActiveFileId] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getGoogleDriveLink = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

    // --- ১. ফিক্সড useEffect লজিক ---
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") setActiveFileId(null);
        };

        if (activeFileId) {
            document.body.style.overflow = 'hidden'; // মোডাল খুললে স্ক্রল বন্ধ
        } else {
            document.body.style.overflow = 'unset';  // মোডাল বন্ধ হলে স্ক্রল চালু
        }

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset'; // ক্লিনআপ এখন সঠিক জায়গায়
        };
    }, [activeFileId]); // এখানে [activeFileId] যোগ করা হয়েছে

    return (
        <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black pt-32 pb-20">

            {/* Matrix Background Decor */}
            <div className="fixed inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">

                <Link href="/services" className="inline-flex items-center gap-2 text-[10px] font-mono text-green-500 mb-12 hover:text-white transition-all group uppercase tracking-widest">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return_To_Base
                </Link>

                <div className="mb-24">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
                        <FileCode size={14} /> [ SECURITY_METHODOLOGY_v1 ]
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                        Tactical <span className="text-green-500 font-black">Methodology</span>
                    </motion.h1>
                    <p className="mt-8 text-gray-500 max-w-2xl font-mono text-xs uppercase leading-relaxed tracking-widest opacity-70">
                        Standardized technical workflows and reporting frameworks for Byte Capsule security operations.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {protocolNodes.map((node, index) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-zinc-950/40 border border-white/5 rounded-[2.5rem] p-10 hover:border-green-500/40 transition-all duration-500 flex flex-col justify-between backdrop-blur-md shadow-2xl relative overflow-hidden"
                        >
                            <div>
                                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-8 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                                    {node.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white uppercase italic tracking-tighter mb-4 group-hover:text-green-400 transition-colors">
                                    {node.title}
                                </h3>
                                <p className="text-gray-500 text-[11px] leading-relaxed font-mono uppercase mb-10 tracking-wider">
                                    {node.desc}
                                </p>
                            </div>

                            <button
                                onClick={() => {
                                    setActiveFileId(node.fileId);
                                    setIsLoading(true);
                                }}
                                className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-white hover:bg-green-600 hover:text-black transition-all uppercase tracking-[0.2em]"
                            >
                                INITIALIZE_SECURE_VIEWER
                                <Maximize2 size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {activeFileId && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            // Z-index সবার উপরে রাখা হয়েছে
                            className="fixed inset-0 z-[99999] bg-black flex items-center justify-center p-2 md:p-6 lg:p-12"
                        >
                            <div
                                className="absolute inset-0 bg-black/98 backdrop-blur-3xl"
                                onClick={() => setActiveFileId(null)}
                            ></div>

                            <motion.div
                                initial={{ scale: 0.9, y: 40, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 40, opacity: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative w-full max-w-7xl h-[90vh] bg-zinc-950 border border-green-500/30 rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(34,197,94,0.3)] flex flex-col"
                            >
                                {/* Modal Header - প্রপার প্যাডিং দেওয়া হয়েছে */}
                                <div className="flex items-center justify-between pt-12 pb-8 px-10 md:pt-16 md:pb-10 md:px-12 bg-black/50 border-b border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                                        <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-white">
                                            Encrypted_File_Stream
                                        </span>
                                    </div>

                                    <button
                                        onClick={() => setActiveFileId(null)}
                                        className="flex items-center gap-2 px-6 py-2 bg-red-500/10 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                                    >
                                        <span className="text-[10px] font-black uppercase tracking-widest">Close</span>
                                        <X size={18} />
                                    </button>
                                </div>

                                {/* Viewer Area */}
                                <div className="flex-1 relative bg-[#0a0a0a]">
                                    {isLoading && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 z-20">
                                            <Loader2 size={48} className="animate-spin text-green-500 mb-6" />
                                            <span className="text-[10px] font-mono text-green-500 uppercase tracking-[0.4em] animate-pulse">Establishing_Secure_Link...</span>
                                        </div>
                                    )}

                                    <iframe
                                        src={getGoogleDriveLink(activeFileId)}
                                        width="100%"
                                        height="100%"
                                        className="border-none w-full h-full"
                                        onLoad={() => setIsLoading(false)}
                                    ></iframe>
                                </div>

                                <div className="p-4 bg-black/80 border-t border-white/5 flex justify-center items-center">
                                    <p className="text-[8px] font-mono text-gray-400 uppercase tracking-[0.5em]">
                                        Confidential // Internal Use Only // Byte Capsule IT Security Operations
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-32 p-10 bg-zinc-900/30 border border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <ShieldAlert size={40} className="text-red-800" />
                        <div>
                            <p className="text-white font-bold uppercase tracking-widest italic text-lg">Confidentiality Agreement</p>
                            <p className="text-[10px] font-mono text-gray-400 uppercase mt-1">All downloaded methodologies must not be shared outside of authorized perimeter.</p>
                        </div>
                    </div>
                    <div className="text-[10px] font-mono text-green-500 uppercase bg-green-500/5 px-4 py-2 rounded-full border border-green-500/10">
                        System_ID: BC-MET-772
                    </div>
                </div>

            </div>
        </div>
    );
}