// "use client";

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion"; // Variants টাইপ যুক্ত করা হয়েছে
// import {
//   X, Lock, Zap, Terminal, ArrowLeft, FileText, Download, ShieldCheck, FileLock, Loader2
// } from "lucide-react";

// interface ReportModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const reports = [
//   { name: "Client Non-Disclosure", id: "115_V1GBa4FWnbq_usT7sW7GEckGFyjhN", code: "NDA_CLN_01" },
//   { name: "General Conditions", id: "1t-0c5JnfUwo4VdzBdO578IGWR9qpj6HZ", code: "GTC_GEN_02" },
//   { name: "Hunter Non-Disclosure", id: "1mvbjSwbeWDJ-dXySFbqJN4rMEdVv2mmn", code: "NDA_HNT_03" },
//   { name: "No Objection Certificate", id: "1f5w8oly8o8fKYktDR57InSqS-8yL0FaG", code: "NOC_AUTH_04" },
//   { name: "Payment Services", id: "1WXTeYiufhC0v-Jak2L212WVRL2gKDec-", code: "PAY_SRV_05" },
//   { name: "Standard Operations", id: "1u3fu4mfh0-1P7H9Fe654Tg62SOEObH0Z", code: "SOP_SEC_06" },
//   { name: "Trust & Security Policy", id: "1ENcaiDIdlRq2Ba66tpeZ-2wxGxvLCVTe", code: "TSP_POL_07" },
//   { name: "Vulnerability Disclosure", id: "1eitmtujPfNukZU1nEGVk_QH3C_HTcR5L", code: "VDP_PROC_08" },
//   { name: "ZeroDay Test Policy", id: "1TdQ5_oCR_WvbxCofPtR1F6OHkYsPzfyR", code: "ZDT_POL_09" },
//   { name: "Do Not Sell or Share Info", id: "1r0xQFMDhNNSoI0U3BPQJArKfs1mELGT4", code: "DNS_PRIV_10" },
// ];

// // এনিমেশন ভেরিয়েন্টগুলোতে টাইপ সেট করা হয়েছে যাতে এরর না আসে
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 } 
//   }
// };

// const cardVariants: Variants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { 
//     y: 0, 
//     opacity: 1, 
//     transition: { duration: 0.5, ease: "easeOut" } 
//   }
// };

// const ReportModal = ({ isOpen, onClose }: ReportModalProps) => {
//   const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
//   const [pdfLoading, setPdfLoading] = useState(true);

//   useEffect(() => {
//     if (isOpen) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "unset";
//     return () => { document.body.style.overflow = "unset"; };
//   }, [isOpen]);

//   const handleClose = () => {
//     setSelectedFileId(null);
//     onClose();
//   };

//   const getPreviewLink = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
//   const getDownloadLink = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 pt-14 md:pt-20 md:pb-10 overflow-hidden">
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="absolute inset-0 bg-black/98 backdrop-blur-2xl" />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 50 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 50 }}
//             className="relative bg-[#050505] border border-green-500/20 w-full max-w-7xl h-full rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col z-10"
//           >
//             {/* হেডার */}
//             <div className="p-5 md:p-8 border-b border-white/5 bg-black flex items-center justify-between sticky top-0 z-50">
//                 <div className="flex items-center gap-4">
//                     <div className="p-2.5 bg-green-500 text-black rounded-xl shadow-[0_0_15px_#22c55e]">
//                         <FileLock size={22} />
//                     </div>
//                     <h3 className="text-white font-black uppercase tracking-tight text-base md:text-xl">Secure Document Vault</h3>
//                 </div>
//                 <div className="flex items-center gap-2 md:gap-4">
//                     {selectedFileId && (
//                         <button onClick={() => {setSelectedFileId(null); setPdfLoading(true);}} className="text-gray-400 hover:text-green-500 text-[10px] font-black uppercase pr-4 border-r border-white/10 flex items-center gap-1"><ArrowLeft size={14}/> Back_to_Grid</button>
//                     )}
//                     <button onClick={handleClose} className="p-2 bg-white/5 hover:bg-red-500/20 text-gray-500 hover:text-red-500 rounded-xl border border-white/5 transition-all flex items-center gap-2"><span className="text-[10px] font-black uppercase hidden md:block">Terminate</span><X size={20}/></button>
//                 </div>
//             </div>

//             {/* কন্টেন্ট এরিয়া */}
//             <div className="flex-1 overflow-y-auto bg-black scrollbar-thin scrollbar-thumb-green-900">
//                 {selectedFileId ? (
//                     <div className="w-full h-full relative bg-zinc-900">
//                       {pdfLoading && (
//                         <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-green-500 font-mono bg-black z-10">
//                           <Loader2 size={32} className="animate-spin" />
//                           <span className="text-[10px] uppercase tracking-widest">Decoding_Stream...</span>
//                         </div>
//                       )}
//                       <iframe src={getPreviewLink(selectedFileId)} className="w-full h-full border-none opacity-90" onLoad={() => setPdfLoading(false)} allow="autoplay"></iframe>
//                     </div>
//                 ) : (
//                     <motion.div 
//                       variants={containerVariants}
//                       initial="hidden"
//                       animate="visible"
//                       className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//                     >
//                         {reports.map((report, idx) => (
//                             <motion.div 
//                               key={idx}
//                               variants={cardVariants}
//                               whileHover={{ y: -8, transition: { duration: 0.3 } }}
//                               className="group relative bg-zinc-950 border border-white/5 rounded-[2.2rem] p-8 flex flex-col items-center text-center hover:border-green-500/40 transition-all duration-500 overflow-hidden"
//                             >
//                                 {/* ১. মুভিং স্ক্যান লাইন এনিমেশন */}
//                                 <motion.div 
//                                   animate={{ top: ["-10%", "110%"] }}
//                                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//                                   className="absolute left-0 w-full h-[2px] bg-green-500/10 z-0 pointer-events-none"
//                                 />

//                                 <div className="relative z-10 w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center text-gray-700 group-hover:text-green-500 group-hover:bg-green-500/5 transition-all mb-6 border border-white/5 group-hover:border-green-500/20">
//                                   <FileText size={40} />
//                                   <div className="absolute top-1 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-950 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
//                                 </div>

//                                 <div className="relative z-10 text-center border-t border-white/5 pt-6 w-full space-y-5">
//                                   <h4 className="text-white font-bold text-[11px] md:text-xs leading-tight uppercase tracking-widest h-8 line-clamp-2">{report.name}</h4>
                                  
//                                   <div className="flex flex-col gap-2">
//                                      <button onClick={() => setSelectedFileId(report.id)} className="w-full py-2.5 bg-zinc-900 text-gray-400 font-bold text-[9px] rounded-xl uppercase hover:bg-zinc-800 hover:text-white transition-all border border-white/5">View_Internal</button>
//                                      <a href={getDownloadLink(report.id)} target="_blank" className="w-full py-2.5 bg-green-600 text-black font-black text-[9px] rounded-xl uppercase flex items-center justify-center gap-1 hover:bg-green-400 transition-all shadow-lg shadow-green-500/10">Download <Download size={12}/></a>
//                                   </div>
//                                 </div>

//                                 {/* কার্ডের নিচের নিওন বার */}
//                                 <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-green-500 rounded-full blur-[2px] transition-all duration-500 group-hover:w-2/3"></div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 )}
//             </div>

//             {/* ফুটার */}
//             <div className="p-4 bg-black border-t border-white/5 flex justify-center items-center gap-6 opacity-40">
//                <div className="flex items-center gap-2 text-[9px] font-mono text-gray-500"><Zap size={12} className="text-green-500" /> AES_ENCRYPTED</div>
//                <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
//                <div className="text-[9px] font-mono text-gray-500 uppercase">Vault_Status: Verified</div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ReportModal;






"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  X, Lock, Zap, Terminal, ArrowLeft, FileText, Download, ShieldCheck, FileLock, Loader2
} from "lucide-react";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// আপনার দেওয়া নতুন ফাইলের লিঙ্কটি এখানে সেট করা হয়েছে
const reports = [
  { 
    name: "Operational Policy Document", 
    id: "14nECSaQH_baLrwOv1nGQiDEOana4QRWV", 
    code: "OPD_GEN_01" 
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 } 
  }
};

const cardVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const ReportModal = ({ isOpen, onClose }: ReportModalProps) => {
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(true);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleClose = () => {
    setSelectedFileId(null);
    onClose();
  };

  const getPreviewLink = (id: string) => `https://drive.google.com/file/d/${id}/preview`;
  const getDownloadLink = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 pt-14 md:pt-20 md:pb-10 overflow-hidden">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={handleClose} className="absolute inset-0 bg-black/98 backdrop-blur-2xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="relative bg-[#050505] border border-green-500/20 w-full max-w-7xl h-full rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] flex flex-col z-10"
          >
            {/* হেডার */}
            <div className="p-5 md:p-8 border-b border-white/5 bg-black flex items-center justify-between sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-green-500 text-black rounded-xl shadow-[0_0_15px_#22c55e]">
                        <FileLock size={22} />
                    </div>
                    <h3 className="text-white font-black uppercase tracking-tight text-base md:text-xl">Secure Document Vault</h3>
                </div>
                <div className="flex items-center gap-2 md:gap-4">
                    {selectedFileId && (
                        <button onClick={() => {setSelectedFileId(null); setPdfLoading(true);}} className="text-gray-400 hover:text-green-500 text-[10px] font-black uppercase pr-4 border-r border-white/10 flex items-center gap-1"><ArrowLeft size={14}/> Back_to_Grid</button>
                    )}
                    <button onClick={handleClose} className="p-2 bg-white/5 hover:bg-red-500/20 text-gray-500 hover:text-red-500 rounded-xl border border-white/5 transition-all flex items-center gap-2"><span className="text-[10px] font-black uppercase hidden md:block">Terminate</span><X size={20}/></button>
                </div>
            </div>

            {/* কন্টেন্ট এরিয়া */}
            <div className="flex-1 overflow-y-auto bg-black scrollbar-thin scrollbar-thumb-green-900">
                {selectedFileId ? (
                    <div className="w-full h-full relative bg-zinc-900">
                      {pdfLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-green-500 font-mono bg-black z-10">
                          <Loader2 size={32} className="animate-spin" />
                          <span className="text-[10px] uppercase tracking-widest">Decoding_Stream...</span>
                        </div>
                      )}
                      <iframe src={getPreviewLink(selectedFileId)} className="w-full h-full border-none opacity-90" onLoad={() => setPdfLoading(false)} allow="autoplay"></iframe>
                    </div>
                ) : (
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="p-6 md:p-12 flex justify-center" // একটি ফাইল তাই মাঝখানে দেখাবে
                    >
                        {reports.map((report, idx) => (
                            <motion.div 
                              key={idx}
                              variants={cardVariants}
                              whileHover={{ y: -8, transition: { duration: 0.3 } }}
                              className="max-w-sm w-full group relative bg-zinc-950 border border-white/5 rounded-[2.2rem] p-8 flex flex-col items-center text-center hover:border-green-500/40 transition-all duration-500 overflow-hidden"
                            >
                                <motion.div 
                                  animate={{ top: ["-10%", "110%"] }}
                                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                  className="absolute left-0 w-full h-[2px] bg-green-500/10 z-0 pointer-events-none"
                                />

                                <div className="relative z-10 w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center text-gray-700 group-hover:text-green-500 group-hover:bg-green-500/5 transition-all mb-6 border border-white/5 group-hover:border-green-500/20">
                                  <FileText size={40} />
                                  <div className="absolute top-1 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-950 animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                                </div>

                                <div className="relative z-10 text-center border-t border-white/5 pt-6 w-full space-y-5">
                                  <h4 className="text-white font-bold text-[11px] md:text-xs leading-tight uppercase tracking-widest h-8 line-clamp-2">{report.name}</h4>
                                  
                                  <div className="flex flex-col gap-2">
                                     <button onClick={() => setSelectedFileId(report.id)} className="w-full py-2.5 bg-zinc-900 text-gray-400 font-bold text-[9px] rounded-xl uppercase hover:bg-zinc-800 hover:text-white transition-all border border-white/5">View_Internal</button>
                                     <a href={getDownloadLink(report.id)} target="_blank" className="w-full py-2.5 bg-green-600 text-black font-black text-[9px] rounded-xl uppercase flex items-center justify-center gap-1 hover:bg-green-400 transition-all shadow-lg shadow-green-500/10">Download <Download size={12}/></a>
                                  </div>
                                </div>

                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-green-500 rounded-full blur-[2px] transition-all duration-500 group-hover:w-2/3"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>

            {/* ফুটার */}
            <div className="p-4 bg-black border-t border-white/5 flex justify-center items-center gap-6 opacity-70">
               <div className="flex items-center gap-2 text-[9px] font-mono text-gray-200"><Zap size={12} className="text-green-500" /> AES_ENCRYPTED</div>
               <div className="w-1 h-1 bg-zinc-800 rounded-full"></div>
               <div className="text-[9px] font-mono text-gray-200 uppercase">Vault_Status: Verified</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReportModal;