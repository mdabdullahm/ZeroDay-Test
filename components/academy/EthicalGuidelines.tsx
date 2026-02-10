"use client";
import { motion } from 'framer-motion';
import { Scale, ShieldAlert, Gavel, FileWarning, Fingerprint, CheckCircle2, AlertCircle } from 'lucide-react';

const guidelines = [
  {
    title: "White-Hat Protocol",
    desc: "All the techniques we teach should only be used to secure the system. Any damage is strictly prohibited.",
    icon: <Scale size={22} />
  },
  {
    title: "Written Authorization",
    desc: "Before testing on any target, written permission (Permission Letter) from the relevant authorities must be obtained.",
    icon: <Fingerprint size={22} />
  },
  {
    title: "No Data Theft",
    desc: "It is completely illegal and unethical to copy, share, or sell any sensitive data obtained during research.",
    icon: <Gavel size={22} />
  },
  {
    title: "Safe Environment",
    desc: "Always practice in the virtual labs we provide or in your own setup. Avoid live networks.",
    icon: <ShieldAlert size={22} />
  }
];

const EthicalGuidelines = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid with Amber tint */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          
          {/* Left Side: Legal Badge & Context */}
          <div className="lg:sticky lg:top-32">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-amber-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <AlertCircle size={14} className="animate-pulse" /> [ LEGAL_DIRECTIVES_v1 ]
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
              Ethical <br /> <span className="text-amber-500 font-mono italic">Conduct</span>
            </h2>
            
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-light">
              Before enrolling in ZeroDay Test Academy, you must pledge to abide by our Code of Ethics. Violation of these rules will result in immediate termination of your membership.
            </p>

            {/* Tactical Warning Box */}
            <div className="p-6 bg-amber-500/5 border border-amber-500/20 rounded-3xl backdrop-blur-sm">
               <div className="flex items-center gap-3 mb-4 text-amber-500">
                  <FileWarning size={24} />
                  <span className="text-xs font-black uppercase tracking-widest">Actionable Warning</span>
               </div>
               <p className="text-[11px] font-mono text-gray-500 leading-relaxed uppercase">
                  Any unauthorized access to remote systems using tools learned here will lead to <span className="text-amber-600">Legal Prosecution</span>.
               </p>
            </div>
          </div>

          {/* Right Side: Guidelines Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {guidelines.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-amber-500/30 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/5 transition-colors duration-700"></div>

                <div className="w-14 h-14 flex items-center justify-center bg-amber-500/10 text-amber-500 rounded-2xl mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all duration-500 relative z-10">
                  {item.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-2 text-[9px] font-mono text-green-900 uppercase">
                     <CheckCircle2 size={10} /> Compliance_Verified
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Global Compliance Footer for Academy */}
        <div className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-30">
           <div className="flex items-center gap-3 text-[10px] font-mono text-gray-100 uppercase tracking-widest">
              <span>Jurisdiction: International Cyber Law</span>
              <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
              <span>Framework: ISO/IEC 27001</span>
           </div>
           <div className="text-[10px] font-mono text-amber-900 uppercase">
              Security_Level: Hardened
           </div>
        </div>

      </div>
    </section>
  );
};

export default EthicalGuidelines;