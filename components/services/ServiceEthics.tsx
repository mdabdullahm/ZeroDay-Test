"use client";
import { motion } from 'framer-motion';
import { Scale, ShieldCheck, FileLock, UserCheck, Gavel, CheckCircle, Zap, Terminal } from 'lucide-react';

const ethicsList = [
  {
    title: "Strict Confidentiality",
    desc: "We sign a strict Non-Disclosure Agreement (NDA) before the operation. No information about your system will leave our lab.",
    icon: <FileLock size={22} />,
    code: "NDA_PROTOCOL_ACTIVE"
  },
  {
    title: "Authorized Engagement",
    desc: "We only test on targets for which we have written permission or authorization from the client.",
    icon: <ShieldCheck size={22} />,
    code: "AUTH_VERIFIED"
  },
  {
    title: "Conflict of Interest",
    desc: "We believe in transparency. If there is a conflict of interest in a project, we inform the client in advance and ensure an impartial audit.",
    icon: <Scale size={22} />,
    code: "NEUTRAL_OPS"
  },
  {
    title: "Legal Safe Harbor",
    desc: "All of our methodologies are designed in compliance with international cyber law and your local legal framework.",
    icon: <Gavel size={22} />,
    code: "JURISDICTION_OK"
  }
];

const ServiceEthics = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
              <ShieldCheck size={14} /> [ COMPLIANCE_AND_ETHICS_DIRECTIVE ]
            </div>
            
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
              The Ethical <br /> <span className="text-green-500 font-mono italic">Boundary</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-light">
              With the use of powerful security tools comes great responsibility. We don't just look for vulnerabilities in your system, but we take every step with respect for your business.
            </p>

            {/* Verification Badge Visual */}
            <div className="inline-flex items-center gap-4 p-5 bg-green-500/5 border border-green-500/20 rounded-3xl">
               <div className="w-12 h-12 bg-green-500 text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <UserCheck size={24} />
               </div>
               <div>
                  <p className="text-white font-bold text-sm uppercase tracking-widest">Certified Operatives</p>
                  <p className="text-[10px] font-mono text-gray-600 uppercase italic">All members are background checked_</p>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Ethics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ethicsList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/20 transition-all duration-500"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-green-500/5 text-green-500 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Status Code Bottom */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[8px] font-mono text-gray-700 uppercase tracking-[0.2em]">{item.code}</span>
                   <CheckCircle size={10} className="text-green-900 group-hover:text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Global Compliance Footer */}
        <div className="mt-20 p-6 bg-zinc-900/10 border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
           <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
              <span className="flex items-center gap-1"><Zap size={10} className="text-green-500" /> ISO_27001_COMPLIANT</span>
              <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
              <span className="flex items-center gap-1"><Zap size={10} className="text-green-500" /> GDPR_DATA_PROTECTION</span>
           </div>
           <div className="text-[10px] font-mono text-green-900">
              [ SECURE_LOG_PROTOCOL: v2.4.0 ]
           </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceEthics;