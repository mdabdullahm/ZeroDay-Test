// // "use client";

// // import { motion } from 'framer-motion';
// // import { ShieldAlert, Send, Mail, MessageSquare, Key, Terminal } from 'lucide-react';
// // import Link from 'next/link';

// // const Contact = () => {
// //   return (
// //     <section className="relative bg-black py-16 lg:py-24 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
// //       {/* Background Decor - Matrix Grid */}
// //       <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
// //            style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
// //       </div>

// //       <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
// //           {/* Left Side: Secure Channels */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: -30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //           >
// //             <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
// //               <ShieldAlert size={14} /> [ Secure_Communication_Link ]
// //             </div>
            
// //             <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
// //               Report <span className="text-green-500">Threats</span>
// //             </h2>
            
// //             <p className="text-gray-400 text-sm md:text-base mb-10 leading-relaxed max-w-md">
// //               Have you found a vulnerability in our system? Or would you like to discuss a secure project? Send us a message in our encrypted channel.
// //             </p>

// //             {/* Contact Details List */}
// //             <div className="space-y-6">
// //               <div className="flex items-center gap-4 group">
// //                 <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
// //                   <Mail size={20} />
// //                 </div>
// //                 <div>
// //                   <p className="text-[10px] font-mono text-gray-600 uppercase">Encrypted Mail</p>
// //                   <p className="text-white font-bold">secure@zerodaytest.com</p>
// //                 </div>
// //               </div>

// //               <div className="flex items-center gap-4 group">
// //                 <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
// //                   <MessageSquare size={20} />
// //                 </div>
// //                 <div>
// //                   <p className="text-[10px] font-mono text-gray-600 uppercase">Signal / Discord</p>
// //                   <p className="text-white font-bold">@ZeroDay_HQ</p>
// //                 </div>
// //               </div>

// //               {/* PGP Key - Hacker Special */}
// //               <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl mt-8">
// //                  <div className="flex items-center gap-2 text-xs font-mono text-green-700 mb-3">
// //                     <Key size={14} /> PGP_PUBLIC_KEY
// //                  </div>
// //                  <p className="text-[10px] font-mono text-gray-500 break-all leading-tight italic">
// //                    EBAD 4582 9912 001A 772C FD91 2234 8810 ZERO DAY TEST KEY
// //                  </p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Right Side: Reporting Form */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: 30 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             viewport={{ once: true }}
// //             className="bg-zinc-900/20 border border-white/5 p-8 md:p-10 rounded-3xl backdrop-blur-xl relative"
// //           >
// //             {/* Form Header */}
// //             <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
// //                <span className="text-[10px] font-mono text-gray-500 flex items-center gap-2">
// //                  <Terminal size={12} /> reporting_v1.0.exe
// //                </span>
// //                <div className="flex gap-1">
// //                   <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
// //                   <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
// //                </div>
// //             </div>

// //             <form className="space-y-5">
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //                 <div className="space-y-2">
// //                   <label className="text-[10px] font-mono text-green-700 uppercase ml-1">Alias / Name</label>
// //                   <input type="text" placeholder="Ghost_User" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-green-500 outline-none transition-all" />
// //                 </div>
// //                 <div className="space-y-2">
// //                   <label className="text-[10px] font-mono text-green-700 uppercase ml-1">Threat Level</label>
// //                   <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-green-500 outline-none transition-all appearance-none">
// //                     <option>Low (T-1)</option>
// //                     <option>Medium (T-2)</option>
// //                     <option>High (T-3)</option>
// //                     <option className="text-red-500">Critical (ZERO-DAY)</option>
// //                   </select>
// //                 </div>
// //               </div>

// //               <div className="space-y-2">
// //                 <label className="text-[10px] font-mono text-green-700 uppercase ml-1">Vulnerability Subject</label>
// //                 <input type="text" placeholder="SQLi in Auth Module" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-green-500 outline-none transition-all" />
// //               </div>

// //               <div className="space-y-2">
// //                 <label className="text-[10px] font-mono text-green-700 uppercase ml-1">Full Report / Payload</label>
// //                 <textarea rows={4} placeholder="Detailed steps to reproduce..." className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-green-500 outline-none transition-all resize-none"></textarea>
// //               </div>

// //               <button className="w-full py-4 bg-green-600 hover:bg-green-500 text-black font-black rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)] group">
// //                 Book an Appointment <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
// //               </button>
// //             </form>

// //             <p className="mt-6 text-[9px] text-center font-mono text-gray-500 uppercase">
// //               By submitting, you agree to our <Link href="https://zerodaytest.com/privacy-policy" className="text-green-600 underline">Privacy policy</Link>.
// //             </p>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;



// "use client";

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ShieldAlert, Send, Mail, MessageSquare, Key, Terminal, Loader2, CheckCircle2 } from 'lucide-react';
// import Link from 'next/link';

// const Contact = () => {
//   const [status, setStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">("IDLE");

//   // ইমেইল পাঠানোর ফাংশন (Formspree ব্যবহার করে)
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("SENDING");

//     const form = e.currentTarget;
//     const formData = new FormData(form);

//     try {
//       const response = await fetch("https://formspree.io/f/meepdldw", {
//         method: "POST",
//         body: formData,
//         headers: {
//           'Accept': 'application/json'
//         }
//       });

//       if (response.ok) {
//         setStatus("SUCCESS");
//         form.reset();
//         setTimeout(() => setStatus("IDLE"), 5000); // ৫ সেকেন্ড পর আবার নরমাল হবে
//       } else {
//         setStatus("ERROR");
//       }
//     } catch (error) {
//       setStatus("ERROR");
//     }
//   };

//   return (
//     <section className="relative bg-black py-16 lg:py-24 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
//       {/* Background Decor - Matrix Grid */}
//       <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" 
//            style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
//       </div>

//       <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
//           {/* Left Side: Secure Channels */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
//               <ShieldAlert size={14} /> [ Secure_Communication_Link ]
//             </div>
            
//             <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tighter italic">
//               Report <span className="text-green-500 font-black">Threats</span>
//             </h2>
            
//             <p className="text-gray-400 text-sm md:text-base mb-10 leading-relaxed max-w-md font-mono uppercase opacity-70">
//               Found a vulnerability? Establish a secure uplink with our intelligence node. All transmissions are encrypted.
//             </p>

//             {/* Contact Details List */}
//             <div className="space-y-6">
//               <div className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Encrypted Mail</p>
//                   <p className="text-white font-bold text-sm">secure@zerodaytest.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
//                   <MessageSquare size={20} />
//                 </div>
//                 <div>
//                   <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Signal / Discord</p>
//                   <p className="text-white font-bold text-sm">@ZeroDay_HQ</p>
//                 </div>
//               </div>

//               {/* PGP Key - Hacker Special */}
//               <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl mt-8">
//                  <div className="flex items-center gap-2 text-xs font-mono text-green-700 mb-3">
//                     <Key size={14} /> PGP_PUBLIC_KEY
//                  </div>
//                  <p className="text-[10px] font-mono text-gray-500 break-all leading-tight italic">
//                    EBAD 4582 9912 001A 772C FD91 2234 8810 ZERO DAY SECURE KEY
//                  </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Side: Reporting Form */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             className="bg-zinc-950 border border-white/5 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl relative shadow-2xl overflow-hidden"
//           >
//             {/* Success Overlay */}
//             <AnimatePresence>
//               {status === "SUCCESS" && (
//                 <motion.div 
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="absolute inset-0 bg-black/90 z-20 flex flex-col items-center justify-center p-8 text-center"
//                 >
//                   <CheckCircle2 size={64} className="text-green-500 mb-4 animate-bounce" />
//                   <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Payload Sent!</h3>
//                   <p className="text-gray-400 font-mono text-xs mt-2">Uplink established successfully. We will contact you shortly.</p>
//                   <button onClick={() => setStatus("IDLE")} className="mt-8 text-green-500 text-[10px] font-mono underline uppercase tracking-widest">Send Another Report</button>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Form Header */}
//             <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
//                <span className="text-[10px] font-mono text-gray-500 flex items-center gap-2 uppercase tracking-[0.2em]">
//                  <Terminal size={12} /> reporting_v1.0.exe
//                </span>
//                <div className="flex gap-1">
//                   <div className={`w-2 h-2 rounded-full ${status === 'ERROR' ? 'bg-red-500 animate-pulse' : 'bg-red-500/20'}`}></div>
//                   <div className={`w-2 h-2 rounded-full ${status === 'SENDING' ? 'bg-yellow-500 animate-pulse' : 'bg-yellow-500/20'}`}></div>
//                   <div className={`w-2 h-2 rounded-full bg-green-500/20`}></div>
//                </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Operator Alias</label>
//                   <input 
//                     required 
//                     name="name" 
//                     type="text" 
//                     placeholder="Ghost_User" 
//                     className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-green-500 focus:border-green-500 outline-none transition-all font-mono" 
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Threat Level</label>
//                   <select 
//                     name="threat_level" 
//                     className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-green-500 focus:border-green-500 outline-none transition-all appearance-none font-mono"
//                   >
//                     <option>Low (T-1)</option>
//                     <option>Medium (T-2)</option>
//                     <option>High (T-3)</option>
//                     <option className="text-red-500 font-bold">Critical (ZERO-DAY)</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">E-mail Address</label>
//                 <input 
//                   required 
//                   name="email" 
//                   type="email" 
//                   placeholder="operator@secure-relay.net" 
//                   className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-green-500 focus:border-green-500 outline-none transition-all font-mono" 
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Vulnerability Subject</label>
//                 <input 
//                   required 
//                   name="subject" 
//                   type="text" 
//                   placeholder="SQLi in Auth Module" 
//                   className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-green-500 focus:border-green-500 outline-none transition-all font-mono" 
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Full Report / Payload</label>
//                 <textarea 
//                   required 
//                   name="message" 
//                   rows={4} 
//                   placeholder="Detailed steps to reproduce..." 
//                   className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-green-500 focus:border-green-500 outline-none transition-all resize-none font-mono"
//                 ></textarea>
//               </div>

//               <button 
//                 type="submit"
//                 disabled={status === "SENDING"}
//                 className="w-full py-4 bg-green-600 hover:bg-green-500 disabled:bg-zinc-800 text-black font-black rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)] group"
//               >
//                 {status === "SENDING" ? (
//                   <>Encrypting... <Loader2 className="animate-spin" size={18} /></>
//                 ) : (
//                   <>Establish Uplink <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
//                 )}
//               </button>
              
//               {status === "ERROR" && (
//                 <p className="text-red-500 font-mono text-[9px] text-center mt-2 uppercase tracking-widest animate-pulse">
//                   Error: Transmission failed. Try again.
//                 </p>
//               )}
//             </form>

//             <p className="mt-6 text-[9px] text-center font-mono text-gray-500 uppercase tracking-[0.2em]">
//               By submitting, you agree to our <Link href="/privacy-policy" className="text-green-600 underline">Operational Protocols</Link>.
//             </p>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;