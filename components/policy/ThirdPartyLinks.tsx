"use client";
import { motion } from 'framer-motion';
import { Link as LinkIcon, ExternalLink, ShieldAlert, Globe, Activity, Zap } from 'lucide-react';

const linkPolicies = [
  {
    title: "External Navigation",
    desc: "Our site may contain links to other research resources or third-party tools. We have no control over the content of those sites.",
    icon: <Globe size={20} />
  },
  {
    title: "User Vigilance",
    desc: "Before accessing another site from our platform, be sure to check the privacy policy and terms of that site at your own risk.",
    icon: <Activity size={20} />
  },
  {
    title: "No Liability",
    desc: "'ZeroDay Test' will not be responsible in any way for any data loss or malware attack resulting from the use of third-party links.",
    icon: <ShieldAlert size={20} />
  }
];

const ThirdPartyLinks = () => {
  return (
    <section className="relative bg-black py-10 lg:py-15 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <LinkIcon size={14} /> [ NETWORK_EGRESS_PROTOCOL ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              External <span className="text-green-500">Nodes</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              When you access an external platform using a link on our site, you move outside our secure perimeter.
            </p>
          </div>
          
          <div className="hidden lg:block">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="p-8 border border-green-500/10 bg-green-500/5 rounded-full"
             >
                <Globe size={40} className="text-green-900 opacity-40" />
             </motion.div>
          </div>
        </div>

        {/* Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {linkPolicies.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/20 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-500/5 text-green-500 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-[9px] font-mono text-gray-700 uppercase">
                 <ExternalLink size={12} /> Outbound_Traffic_Detected
              </div>
            </motion.div>
          ))}
        </div>

        {/* Warning Banner */}
        <div className="mt-12 p-6 bg-green-900/10 border border-green-500/20 rounded-2xl flex items-center justify-between">
           <div className="flex items-center gap-4">
              <Zap size={18} className="text-green-500 animate-pulse" />
              <p className="text-[10px] md:text-xs font-mono text-gray-400 uppercase tracking-widest leading-relaxed">
                 By clicking on any third-party link, you acknowledge the transition to <span className="text-white">non-secured nodes</span>.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ThirdPartyLinks;