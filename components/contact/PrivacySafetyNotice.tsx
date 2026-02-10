"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, EyeOff, Lock, ServerOff, FileLock, Zap, Terminal } from 'lucide-react';

const notices = [
  {
    title: "Zero-Knowledge Storage",
    desc: "We do not store your personally identifiable information in our main database. Your identity is processed as an encrypted token.",
    icon: <EyeOff size={22} />,
    code: "LOG_LEVEL: NULL"
  },
  {
    title: "Encrypted Transmission",
    desc: "TLS 1.3 and AES-256 bit encryption layers are used when sending your messages, making them impossible to intercept in the middle.",
    icon: <Lock size={22} />,
    code: "PROTO: SECURE_TUNNEL"
  },
  {
    title: "Ephemeral Connection",
    desc: "All your temporary data is permanently erased from our memory within 72 hours of the operation being completed.",
    icon: <ServerOff size={22} />,
    code: "TTL: 72H_EXPIRE"
  },
  {
    title: "Legal Safe Harbor",
    desc: "We strictly adhere to international privacy laws and GDPR standards. No information is shared without your permission.",
    // ২. এখানেও ShieldCheck ব্যবহার করো
    icon: <ShieldCheck size={22} />,
    code: "COMPLIANCE: VERIFIED"
  }
];

const PrivacySafetyNotice = () => {
  return (
    <section className="relative py-10 lg:py-20 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <ShieldCheck size={14} /> [ PRIVACY_AND_SAFETY_PROTOCOL ]
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
              Identity <br /> <span className="text-green-500">Safeguard</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed font-light">
              We know how important privacy is to you. Every member and contact node on ZeroDay Test follows a "Zero-Trust" model to keep your information safe.
            </p>
          </div>

          {/* Status Visualizer */}
          <div className="w-full lg:w-auto">
             <div className="p-6 bg-zinc-900/30 border border-green-500/10 rounded-3xl backdrop-blur-md">
                <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                   <span className="text-[10px] font-mono text-green-700 uppercase tracking-widest">Privacy_Engine: ACTIVE</span>
                </div>
                <div className="space-y-2">
                   <p className="text-[9px] font-mono text-gray-600">&gt; Encrypting_Session_Data...</p>
                   <p className="text-[9px] font-mono text-gray-600">&gt; Bypassing_Standard_Logs...</p>
                   <p className="text-[9px] font-mono text-green-900 font-bold">&gt; ANONYMITY_LEVEL: MAXIMUM</p>
                </div>
             </div>
          </div>
        </div>

        {/* Notice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {notices.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-500"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-500/5 text-green-500 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              <div className="pt-4 border-t border-white/5">
                 <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest group-hover:text-green-900 transition-colors">
                    {item.code}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Security Badge */}
        <div className="mt-20 flex justify-center">
           <motion.div
             animate={{ opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="inline-flex items-center gap-3 px-6 py-3 border border-white/5 bg-zinc-900/20 rounded-2xl"
           >
              <FileLock size={20} className="text-green-900" />
              <p className="text-[10px] font-mono text-gray-700 uppercase tracking-[0.4em]">
                Secure_Handshake_Established | Data_Encapsulation: <span className="text-green-800">Enabled</span>
              </p>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PrivacySafetyNotice;