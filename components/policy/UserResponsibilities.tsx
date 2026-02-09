"use client";
import { motion } from 'framer-motion';
import { UserCheck, Crosshair, Key, FileLock, Ban, HandMetal, Terminal } from 'lucide-react';

const responsibilities = [
  {
    title: "Account Security",
    desc: "You are responsible for protecting your User ID and Secret Key. Any account sharing is strictly prohibited.",
    icon: <Key size={20} />
  },
  {
    title: "Authorized Targets Only",
    desc: "No attacks or testing may be performed on any live systems outside of our lab or academy modules.",
    icon: <Crosshair size={20} />
  },
  {
    title: "Intellectual Property",
    desc: "No exclusive exploit code or methodology from the Academy may be published anywhere else without permission.",
    icon: <FileLock size={20} />
  },
  {
    title: "Prohibited Content",
    desc: "No discussion of any kind of malicious software, spam, or illegal drugs may be held in the forum or community.",
    icon: <Ban size={20} />
  }
];

const UserResponsibilities = () => {
  return (
    <section className="relative bg-black py-10 lg:py-20 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <UserCheck size={14} /> [ USER_ACCOUNTABILITY_PROTOCOL ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Field <span className="text-green-500">Conduct</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Each member must adhere to the following guidelines when using ZeroDay Test. Your every action is recorded in the system log.
            </p>
          </div>
          
          <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl flex items-center gap-4">
             <div className="text-green-500 animate-bounce">
                <HandMetal size={32} />
             </div>
             <p className="text-[10px] font-mono text-gray-600 leading-tight uppercase">
                Ethical Integrity <br /> is our <span className="text-white">Primary Directive</span>
             </p>
          </div>
        </div>

        {/* Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {responsibilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/20 transition-all duration-300 flex flex-col sm:flex-row gap-6"
            >
              <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl border border-green-500/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Warning Message */}
        <div className="mt-16 p-8 border border-yellow-500/20 bg-yellow-500/5 rounded-3xl">
           <div className="flex items-start gap-4">
              <Terminal size={24} className="text-yellow-600 mt-1" />
              <div>
                 <h4 className="text-yellow-500 font-bold uppercase text-sm mb-2 tracking-widest">Breach of Protocol</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">
                    Violating any of the above rules may result in your account being permanently banned without notice. ZeroDay Test reserves the right to take legal action in case of serious violations.
                 </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default UserResponsibilities;