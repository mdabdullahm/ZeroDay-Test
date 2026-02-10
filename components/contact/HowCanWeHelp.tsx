"use client";
import { motion } from 'framer-motion';
import { Bug, ShieldAlert, Laptop, Briefcase, MessageSquare, ArrowRight, Terminal, Cpu } from 'lucide-react';

const helpCategories = [
  {
    title: "Vulnerability Disclosure",
    desc: "Have you found a bug in a system? Report bugs responsibly in our secure channel.",
    icon: <Bug size={24} />,
    tag: "Priority: High",
    id: "NODE_VULN_01"
  },
  {
    title: "Enterprise Solutions",
    desc: "Does your company need custom penetration testing or red teaming services? Start a project with us.",
    icon: <ShieldAlert size={24} />,
    tag: "Priority: Medium",
    id: "NODE_ENT_02"
  },
  {
    title: "Academy Support",
    desc: "Get assistance directly from the helpline for any issues related to our lab, course enrollment, or payment.",
    icon: <Laptop size={24} />,
    tag: "Priority: Normal",
    id: "NODE_ACAD_03"
  },
  {
    title: "Career & Collab",
    desc: "Want to join the ZeroDay Test team as a researcher or collaborate? Send us your CV.",
    icon: <Briefcase size={24} />,
    tag: "Priority: Low",
    id: "NODE_HR_04"
  }
];

const HowCanWeHelp = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <Cpu size={14} /> [ SUPPORT_VECTORS_IDENTIFIED ]
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
              How Can We <br /> <span className="text-green-500 font-mono italic">Support?</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light">
             Select the correct support node so our team can process your request quickly and encrypted. 
            </p>
          </div>
          
          <div className="hidden lg:block">
             <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center gap-3">
                <Terminal size={18} className="text-green-900" />
                <span className="text-[10px] font-mono text-gray-600 uppercase">Input_Method: Authorized</span>
             </div>
          </div>
        </div>

        {/* Categories Grid - ৪ কলামে চমৎকার কার্ড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {helpCategories.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500"
            >
              {/* ID Header */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-[9px] font-mono text-gray-700 group-hover:text-green-800 transition-colors uppercase tracking-widest">
                  {item.id}
                </span>
                <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-red-500 animate-pulse' : 'bg-green-900'}`}></div>
              </div>

              {/* Icon & Content */}
              <div className="mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-white/5 text-gray-500 rounded-2xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Action/Link */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-green-900 uppercase">{item.tag}</span>
                <button className="p-2 bg-white/5 rounded-lg group-hover:bg-green-500 group-hover:text-black transition-all">
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Decorative Glow */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-700 pointer-events-none rounded-[2.5rem]"></div>
            </motion.div>
          ))}
        </div>

        {/* Global Support Status Footer */}
        <div className="mt-16 text-center">
           <motion.div 
             animate={{ opacity: [0.3, 0.6, 0.3] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="inline-flex items-center gap-3 px-6 py-2 border border-white/5 bg-zinc-900/30 rounded-full"
           >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-[9px] font-mono text-white uppercase tracking-[0.4em]">
                All transmissions are <span className="text-green-800">TLS 1.3</span> Encrypted
              </p>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HowCanWeHelp;