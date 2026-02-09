"use client";
import { motion } from 'framer-motion';
import { Bug, ShieldCheck, Gift, AlertCircle, Terminal, Send, Lock } from 'lucide-react';

const rules = [
  {
    title: "Safe Harbor",
    desc: "If you comply with this policy, we will not take any legal action against you.",
    icon: <ShieldCheck size={20} />
  },
  {
    title: "Scope of Testing",
    desc: "Only *.zerodaytest.com domains and our public API are allowed for testing.",
    icon: <Bug size={20} />
  },
  {
    title: "No Disruption",
    desc: "Damaging systems through DDoS or social engineering attacks is strictly prohibited.",
    icon: <AlertCircle size={20} />
  },
  {
    title: "Reward System",
    desc: "We offer a 'Hall of Fame' and exclusive swag for valid critical reports.",
    icon: <Gift size={20} />
  }
];

const ResponsibleDisclosure = () => {
  return (
    <section className="relative bg-black py-10 lg:py-20 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Area */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <Bug size={14} /> [ DISCLOSURE_PROTOCOL_INITIATED ]
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Responsible <span className="text-green-500">Disclosure</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base leading-relaxed">
            We value the cooperation of security researchers. If you find a flaw in our systems, please let us know by following the protocol below. Together, we will keep the internet safe.
          </p>
        </div>

        {/* Steps/Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {rules.map((rule, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group p-8 bg-zinc-900/20 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-green-500/10 text-green-500 rounded-xl group-hover:bg-green-500 group-hover:text-black transition-all">
                  {rule.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {rule.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reporting Process Banner */}
        <div className="relative bg-green-500/5 border border-green-500/10 rounded-3xl p-8 md:p-12 overflow-hidden">
           {/* Decorative Background Icon */}
           <Lock size={150} className="absolute -right-10 -bottom-10 text-green-500 opacity-5 rotate-12" />
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                 <h4 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <Terminal size={24} className="text-green-500" /> Reporting Process
                 </h4>
                 <ul className="space-y-4 text-sm text-gray-400 font-mono">
                    <li className="flex items-center gap-3">
                       <span className="w-5 h-5 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-[10px]">1</span>
                       Send the bug report to secure@zerodaytest.com.
                    </li>
                    <li className="flex items-center gap-3">
                       <span className="w-5 h-5 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-[10px]">2</span>
                       We will acknowledge the report within 24 hours.
                    </li>
                    <li className="flex items-center gap-3">
                       <span className="w-5 h-5 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-[10px]">3</span>
                       Do not make the report public until the bug is fixed.
                    </li>
                 </ul>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-4">
                 <p className="text-[10px] font-mono text-gray-600 uppercase">Secure Communication Active</p>
                 <button className="px-10 py-4 bg-green-600 hover:bg-green-500 text-black font-black rounded-xl flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    SEND ENCRYPTED REPORT <Send size={18} />
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ResponsibleDisclosure;