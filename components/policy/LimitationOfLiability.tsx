"use client";
import { motion } from 'framer-motion';
import { ShieldX, AlertCircle, Zap, Terminal, Activity, FileWarning } from 'lucide-react';

const liabilityPoints = [
  {
    title: "For the Organization (ZeroDay Test)",
    desc: "ZeroDay Test acts as a neutral platform facilitating vulnerability reporting and coordination. We are not liable for any direct or indirect damages, data loss, service disruption, or financial impact arising from testing activities, remediation efforts, or the use of information shared through the platform, except where required by applicable law.",
    icon: <Activity size={20} />
  },
  {
    title: "For Clients (Asset Owners)",
    desc: "Clients remain fully responsible for the security, availability, and integrity of their systems. ZeroDay Test shall not be held liable for any damages resulting from vulnerabilities discovered, exploitation risks, remediation delays, or business impact related to participation in bug bounty or VDP programs.",
    icon: <ShieldX size={20} />
  },
  {
    title: "For Hunters (Security Researchers)",
    desc: "Hunters participate at their own risk and are solely responsible for ensuring compliance with program scope, local laws, and platform policies. ZeroDay Test and its clients are not liable for any legal, technical, or financial consequences arising from actions performed outside authorized scope or in violation of policy.",
    icon: <Zap size={20} />
  },
  {
    title: "General Disclaimer",
    desc: "In no event shall any party be liable for indirect, incidental, consequential, or punitive damages. Liability, where applicable, is limited to the extent permitted under governing law.",
    icon: <FileWarning size={20} />
  }
];

const LimitationOfLiability = () => {
  return (
    <section className="relative bg-black py-10 lg:py-15 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
              <AlertCircle size={14} /> [ LIABILITY_CONTAINMENT_PROTOCOL ]
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Liability <br /> <span className="text-green-500">Limits</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-6 bg-zinc-900/30 border-l-4 border-green-500 rounded-r-2xl"
          >
             <p className="text-gray-400 text-sm md:text-base leading-relaxed italic font-light">
               "Legally, 'ZeroDay Test' and its developers will not be liable for any direct or indirect damages resulting from the use of the content of this site. The scope of our services is limited only within legal and ethical boundaries."
             </p>
          </motion.div>
        </div>

        {/* Liability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {liabilityPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-zinc-950/40 border border-white/5 rounded-2xl hover:border-green-500/30 transition-all duration-300 flex items-start gap-6"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-green-500/5 text-green-500 rounded-xl border border-green-500/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {point.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors uppercase tracking-widest">
                  {point.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Disclaimer Footer */}
        <div className="mt-16 p-4 bg-zinc-900/10 border border-white/5 rounded-xl flex items-center justify-between overflow-hidden relative">
            {/* Scan Line Animation */}
            <motion.div 
               animate={{ x: ["-100%", "100%"] }}
               transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-green-500/5 to-transparent skew-x-12"
            />
            
            <div className="flex items-center gap-4 relative z-10">
               <Terminal size={14} className="text-green-900" />
               <p className="text-[9px] font-mono text-gray-700 uppercase tracking-[0.3em]">
                 PROTOCOL_ID: 882-LIMIT-ZERO | STATUS: ENFORCED_GLOBALLY
               </p>
            </div>
            <div className="hidden md:block text-[9px] font-mono text-green-900 uppercase">
               Jurisdiction: Digital Space
            </div>
        </div>

      </div>
    </section>
  );
};

export default LimitationOfLiability;