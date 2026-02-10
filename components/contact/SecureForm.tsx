"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal, ShieldCheck, Lock, Cpu, Globe, Zap, AlertCircle } from 'lucide-react';

const SecureForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // সিমুলেশন: ৩ সেকেন্ড পর সাবমিট হবে
    setTimeout(() => setIsSubmitting(false), 3000);
  };

  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* Left Side: Encryption Status & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
              <Lock size={14} /> [ ENCRYPTION_LAYER_v2.4 ]
            </div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
              Secure <br /> <span className="text-green-500">Uplink</span>
            </h2>
            
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-sm font-light">
              Each of your messages is encrypted client-side before being sent. We value your privacy.
            </p>

            {/* System Specs Visual */}
            <div className="space-y-4">
               <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center gap-4">
                  <div className="text-green-900"><Cpu size={24} /></div>
                  <div>
                     <p className="text-[10px] font-mono text-gray-500 uppercase">Hashing Algorithm</p>
                     <p className="text-white text-xs font-bold font-mono">SHA-512 / BLAKE3</p>
                  </div>
               </div>
               <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center gap-4">
                  <div className="text-green-900"><Globe size={24} /></div>
                  <div>
                     <p className="text-[10px] font-mono text-gray-500 uppercase">Transmission</p>
                     <p className="text-white text-xs font-bold font-mono">END-TO-END ENCRYPTED</p>
                  </div>
               </div>
            </div>

            {/* Safety Indicator */}
            <div className="mt-10 flex items-center gap-3 text-green-900 font-mono text-[10px] uppercase">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
               Connection_Secure: ZeroDay_Nodes_Active
            </div>
          </motion.div>

          {/* Right Side: The Terminal Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950/50 border border-green-500/20 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
             {/* Terminal Top Bar */}
             <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                <div className="flex items-center gap-3">
                   <Terminal size={20} className="text-green-700" />
                   <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">establish_secure_session.exe</span>
                </div>
                <div className="flex gap-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                </div>
             </div>

             {/* The Form */}
             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-mono text-green-800 uppercase ml-1 tracking-widest">Operator Alias</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Ghost_Unit" 
                        className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 focus:bg-green-500/5 outline-none transition-all font-mono"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-mono text-green-800 uppercase ml-1 tracking-widest">Relay Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="operator@secure.com" 
                        className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 focus:bg-green-500/5 outline-none transition-all font-mono"
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-mono text-green-800 uppercase ml-1 tracking-widest">Operational Subject</label>
                   <select className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 outline-none transition-all font-mono appearance-none">
                      <option>Vulnerability Reporting</option>
                      <option>Enterprise Audit Inquiry</option>
                      <option>Academy & Training Support</option>
                      <option>Partnership & Collaboration</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-mono text-green-800 uppercase ml-1 tracking-widest">Encrypted Payload (Message)</label>
                   <textarea 
                     required
                     rows={5} 
                     placeholder="Type your message here..." 
                     className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 focus:bg-green-500/5 outline-none transition-all font-mono resize-none"
                   ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  disabled={isSubmitting}
                  className="group relative w-full py-5 bg-green-600 hover:bg-green-500 disabled:bg-zinc-800 text-black font-black rounded-2xl transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] overflow-hidden"
                >
                   <div className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest text-sm">
                      {isSubmitting ? (
                        <>
                          <Zap size={18} className="animate-spin" /> ENCRYPTING_AND_SENDING...
                        </>
                      ) : (
                        <>
                          ESTABLISH_UPLINK <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                   </div>
                   {/* Button Loading Progress Overlay */}
                   {isSubmitting && (
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: "100%" }}
                       transition={{ duration: 3 }}
                       className="absolute top-0 left-0 h-full bg-green-400 -z-0"
                     />
                   )}
                </button>
             </form>

             {/* Footer Note Inside Card */}
             <div className="mt-8 flex items-center gap-3 p-4 bg-red-500/5 border border-red-500/10 rounded-2xl">
                <AlertCircle size={18} className="text-red-900" />
                <p className="text-[9px] font-mono text-gray-600 uppercase leading-relaxed">
                   Warning: Any type of spam or illegal data transmission may result in direct IP bans and blacklisting.
                </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SecureForm;