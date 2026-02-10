"use client";
import { motion } from 'framer-motion';
import { Award, CheckCircle, Hash, ShieldCheck, QrCode, Globe, Zap, FileBadge } from 'lucide-react';

const AcademyCertification = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">

      {/* Blue Ambient Glow (Certifications represent intelligence/trust) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content & Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-blue-400 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
              <Award size={14} /> [ CREDENTIAL_VALIDATION_PROTOCOL ]
            </div>
            
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
              Operational <br /> <span className="text-blue-500">Credentials</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Upon successful completion of each specialized track, you will receive an industry-leading digital badge and certificate that globally validates your offensive security skills.
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {[
                { title: "Cryptographic Verification", desc: "Each certificate will have a unique hash and QR code that can be verified for life.", icon: <Hash size={20} /> },
                { title: "LinkedIn Integrated", desc: "You can easily add the badge to your professional profile with one click.", icon: <Globe size={20} /> },
                { title: "Industry Recognition", desc: "Our curriculum is highly acceptable to employers as it is in line with industry standards.", icon: <ShieldCheck size={20} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl group-hover:bg-blue-500 group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Certificate Mock-up Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Holographic Glowing Certificate Box */}
            <div className="relative z-10 bg-zinc-900/60 border border-blue-500/20 rounded-[2rem] p-8 md:p-12 backdrop-blur-2xl shadow-2xl overflow-hidden group">
               
               {/* Animated Holographic Shine */}
               <motion.div 
                 animate={{ left: ['-100%', '200%'] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                 className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-blue-400/5 to-transparent skew-x-12 pointer-events-none"
               ></motion.div>

               <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                     <FileBadge size={32} />
                  </div>
                  <div className="text-right">
                     <p className="text-[10px] font-mono text-gray-600 uppercase">Verification ID</p>
                     <p className="text-blue-500 font-mono text-xs font-bold">ZD-CERT-0x982A</p>
                  </div>
               </div>

               <div className="mb-12">
                  <h3 className="text-[10px] font-mono text-blue-900 uppercase tracking-[0.5em] mb-2">Completion Certificate</h3>
                  <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Zero-Day Researcher</h4>
                  <div className="w-16 h-1 bg-blue-500 mt-4"></div>
               </div>

               <div className="flex justify-between items-end">
                  <div className="space-y-4">
                     <div>
                        <p className="text-[8px] font-mono text-gray-600 uppercase">Authorized By</p>
                        <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Chief Security Auditor</p>
                     </div>
                     <div className="flex items-center gap-2 text-green-500 font-mono text-[10px]">
                        <CheckCircle size={12} /> IDENTITY_VERIFIED
                     </div>
                  </div>
                  
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                     <QrCode size={40} className="text-gray-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
               </div>
            </div>

            {/* Decorative Pulse Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          </motion.div>

        </div>

        {/* Global Verification Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-6 bg-zinc-900/10 border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
           <div className="flex items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
              <span className="flex items-center gap-1"><Zap size={10} className="text-blue-500" /> SECURE_LEDGER: ENABLED</span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-1"><Zap size={10} className="text-blue-500" /> HASH_ALGO: SHA-256</span>
           </div>
           <button className="text-[10px] font-bold text-blue-500 uppercase border-b border-blue-500/30 hover:text-white hover:border-white transition-all">
              Verify an Existing Certificate
           </button>
        </motion.div>

      </div>
    </section>
  );
};

export default AcademyCertification;