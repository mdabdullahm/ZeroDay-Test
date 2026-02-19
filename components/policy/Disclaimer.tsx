"use client";
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert, Terminal, Info, Zap } from 'lucide-react';

const Disclaimer = () => {
  const warnings = [
    {
      id: "W-01",
      title: "Out-of-Scope Testing Is Strictly Prohibited",
      text: "Any activity beyond the defined scope may result in immediate disqualification and legal action."
    },
    {
      id: "W-02",
      title: "No Data Exploitation or Privacy Violation",
      text: "Accessing, modifying, or disclosing user data is forbidden under all circumstances"
    },
    {
      id: "W-03",
      title: "Do Not Disrupt Services",
      text: " Denial-of-Service (DoS/DDoS), spam, or resource-exhaustion attacks are not allowed."
    },
    {
      id: "W-04",
      title: "No Social Engineering or Physical Attacks",
      text: " Phishing, vishing, impersonation, or on-site testing is strictly prohibited unless explicitly authorized."
    },
    {
      id: "W-05",
      title: "Confidentiality Is Mandatory",
      text: "Vulnerability details must not be shared publicly or with third parties before official disclosure approval."
    },
    {
      id: "W-06",
      title: "Policy Violations May Lead to Permanent Ban",
      text: "Any breach of policy can result in account suspension, reward forfeiture, and legal consequences."
    },
  ];

  return (
    <section className="relative bg-black py-16 overflow-hidden border-t border-red-500/10 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid  */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#ef4444 1px, transparent 1px), linear-gradient(90deg, #ef4444 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* Warning Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 rounded-full blur-[150px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header - Tactical Warning Style */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-red-500 font-mono text-[10px] mb-4 uppercase tracking-[0.5em]"
          >
            <AlertTriangle size={14} className="animate-pulse" /> [ ATTENTION: LEGAL_DISCLAIMER ]
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Critical <span className="text-red-500 underline decoration-red-500/20">Warning</span>
          </h2>
          <p className="text-gray-500 text-sm font-light max-w-2xl">
            To prevent system abuse and avoid legal complications, please read the following terms carefully. ZeroDay Test teaches security, not hacking.
          </p>
        </div>

        {/* Disclaimer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {warnings.map((warn, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-zinc-900/30 border border-red-500/10 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="p-2 bg-red-500/10 text-red-500 rounded-lg group-hover:bg-red-500 group-hover:text-black transition-all">
                    <ShieldAlert size={20} />
                 </div>
                 <span className="text-[9px] font-mono text-gray-700">{warn.id}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {warn.title}
              </h3>
              
              <p className="text-gray-500 text-xs leading-relaxed">
                {warn.text}
              </p>

              {/* Decorative Scan Line */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* Final Acknowledge Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-6 bg-red-500/5 border border-red-500/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4"
        >
           <div className="flex items-center gap-3">
              <div className="p-2 bg-red-500/20 text-red-500 rounded-full">
                 <Info size={18} />
              </div>
              <p className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest text-center md:text-left">
                By accessing this portal, you acknowledge the <span className="text-red-400">risk & responsibility</span>.
              </p>
           </div>
           <div className="flex items-center gap-2 text-[10px] font-mono text-red-900">
              <Zap size={12} /> STATUS: RESTRICTED_ACCESS
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Disclaimer;