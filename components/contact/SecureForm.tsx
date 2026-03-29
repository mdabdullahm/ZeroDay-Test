"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Terminal, Lock, Cpu, Globe, 
  Zap, AlertCircle, CheckCircle2, Loader2, 
  ShieldCheck
} from 'lucide-react';

// ১. api base url
const BASE_URL = "https://zero-day-test-nine.vercel.app";

const SecureForm = () => {
  // ২. from state management 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Vulnerability Reporting',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // ৩. input chang handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ৪. api submit handelar 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch(`${BASE_URL}/api/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: typeof window !== 'undefined' ? window.location.href : 'landing_page'
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Transmission failed. Protocol error.");
      }

      // সফল হলে
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', subject: 'Vulnerability Reporting', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || "Failed to establish uplink.");
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          
          {/* Left Side: Encryption Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
              <Lock size={14} /> [ ENCRYPTION_LAYER_v2.4 ]
            </div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter italic">
              Secure <br /> <span className="text-green-500">Uplink</span>
            </h2>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm font-mono uppercase">
              Establish a secure communication channel with Byte Capsule Core. All payloads are end-to-end encrypted.
            </p>

            <div className="space-y-4">
               <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center gap-4 backdrop-blur-sm">
                  <div className="text-green-900"><Cpu size={24} /></div>
                  <div>
                     <p className="text-[10px] font-mono text-gray-500 uppercase">Transmission Hash</p>
                     <p className="text-white text-xs font-bold font-mono">SHA-512 / SECURE_NODE</p>
                  </div>
               </div>
               <div className="p-4 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center gap-4 backdrop-blur-sm">
                  <div className="text-green-900"><Globe size={24} /></div>
                  <div>
                     <p className="text-[10px] font-mono text-gray-500 uppercase">Relay Status</p>
                     <p className="text-white text-xs font-bold font-mono">ACTIVE_UPLINK</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: The Terminal Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-950/50 border border-green-500/20 rounded-[3rem] p-8 md:p-12 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
          >
             {/* Terminal Header */}
             <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                <div className="flex items-center gap-3">
                   <Terminal size={20} className="text-green-700" />
                   <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest italic">Byte_Capsule_Comm_v1.0</span>
                </div>
                <div className="flex gap-2">
                   <div className={`w-2.5 h-2.5 rounded-full ${status === 'error' ? 'bg-red-500 animate-pulse' : 'bg-red-500/20'}`}></div>
                   <div className={`w-2.5 h-2.5 rounded-full ${status === 'loading' ? 'bg-yellow-500 animate-pulse' : 'bg-yellow-500/20'}`}></div>
                   <div className={`w-2.5 h-2.5 rounded-full ${status === 'success' ? 'bg-green-500 animate-pulse' : 'bg-green-500/20'}`}></div>
                </div>
             </div>

             <AnimatePresence mode="wait">
               {status === 'success' ? (
                 <motion.div 
                   key="success"
                   initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                   className="py-20 text-center space-y-6"
                 >
                    <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white uppercase italic">Transmission_Received</h3>
                        <p className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">Your payload has been decrypted and queued for review. Standby for response.</p>
                    </div>
                    <button onClick={() => setStatus('idle')} className="px-8 py-3 bg-white/5 border border-white/10 rounded-xl text-[10px] font-mono hover:bg-green-500 hover:text-black transition-all uppercase">Open_New_Session</button>
                 </motion.div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Operator Name</label>
                          <input 
                            required name="name" value={formData.name} onChange={handleChange}
                            type="text" placeholder="John Doe" 
                            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 focus:bg-green-500/5 outline-none transition-all font-mono"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Uplink Email</label>
                          <input 
                            required name="email" value={formData.email} onChange={handleChange}
                            type="email" placeholder="operator@zero-day.com" 
                            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 focus:bg-green-500/5 outline-none transition-all font-mono"
                          />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Relay Phone (Optional)</label>
                          <input 
                            name="phone" value={formData.phone} onChange={handleChange}
                            type="text" placeholder="+8801..." 
                            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 focus:bg-green-500/5 outline-none transition-all font-mono"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Entity / Company</label>
                          <input 
                            name="company" value={formData.company} onChange={handleChange}
                            type="text" placeholder="Ghost_Unit_Sec" 
                            className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 focus:bg-green-500/5 outline-none transition-all font-mono"
                          />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Operation Subject</label>
                       <select 
                        name="subject" value={formData.subject} onChange={handleChange}
                        className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 outline-none transition-all font-mono appearance-none"
                       >
                          <option value="Enterprise Security Plan">Enterprise Bug Bounty Plan</option>
                          <option value="Vulnerability Reporting">Vulnerability Reporting</option>
                          <option value="Training Inquiry">Academy & Training</option>
                          <option value="General Inquiry">General Intelligence</option>
                       </select>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-mono text-green-500 uppercase ml-1 tracking-widest">Payload Message</label>
                       <textarea 
                         required name="message" value={formData.message} onChange={handleChange}
                         rows={5} placeholder="Encrypted transmission content..." 
                         className="w-full bg-black border border-white/10 rounded-xl px-5 py-4 text-sm text-green-400 focus:border-green-500 focus:bg-green-500/5 outline-none transition-all font-mono resize-none"
                       ></textarea>
                    </div>

                    {/* Error Display */}
                    {status === 'error' && (
                        <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[10px] font-mono uppercase italic">
                           <AlertCircle size={14} /> {errorMsg}
                        </div>
                    )}

                    <button 
                      disabled={status === 'loading'}
                      className="group relative w-full py-5 bg-green-600 hover:bg-green-500 disabled:bg-zinc-900 disabled:text-gray-600 text-black font-black rounded-2xl transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] overflow-hidden"
                    >
                       <div className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-widest text-sm italic font-black">
                          {status === 'loading' ? (
                            <>
                              <Loader2 size={18} className="animate-spin" /> UPLINK_IN_PROGRESS...
                            </>
                          ) : (
                            <>
                              ESTABLISH_UPLINK <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                       </div>
                       {status === 'loading' && (
                         <motion.div 
                           initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 3 }}
                           className="absolute top-0 left-0 h-full bg-green-400 -z-0"
                         />
                       )}
                    </button>
                 </form>
               )}
             </AnimatePresence>

             <div className="mt-8 flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl">
                <ShieldCheck size={18} className="text-green-700" />
                <p className="text-[8px] font-mono text-gray-400 uppercase leading-relaxed tracking-tighter">
                   Your IP and system signature are being hashed for anti-spam protocol. Data is processed via Byte Capsule Secure Gateway.
                </p>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecureForm;