"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, RefreshCw, Zap, Cpu, HardDrive } from 'lucide-react';

const securityFeatures = [
  {
    title: "Military-Grade Encryption",
    desc: "AES-256 and RSA-4096 encryption protocols are used for all data storage and transmission.",
    icon: <Lock size={20} />
  },
  {
    title: "Continuous Auditing",
    desc: "Our systems undergo automatic penetration testing and vulnerability scans daily.",
    icon: <RefreshCw size={20} />
  },
  {
    title: "Access Control (MFA)",
    desc: "Only authorized researchers can access the database through multi-factor authentication.",
    icon: <Cpu size={20} />
  },
  {
    title: "Hardware Security",
    desc: "Our servers are stored in Tier-4 data centers where physical security is at the highest level.",
    icon: <HardDrive size={20} />
  }
];

const DataProtection = () => {
  return (
    <section className="relative bg-black py-16 lg:py-24 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Security Visualizer */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Glowing Shield Decoration */}
            <div className="absolute -inset-10 bg-green-500/5 rounded-full blur-[100px]"></div>
            
            <div className="relative bg-zinc-900/40 border border-green-500/20 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                 <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                 </div>
                 <span className="text-[10px] font-mono text-green-700">CORE_SECURITY_MONITOR</span>
              </div>

              {/* Security Health Indicator */}
              <div className="text-center py-10">
                 <motion.div 
                   animate={{ scale: [1, 1.05, 1] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="inline-flex p-6 bg-green-500/10 rounded-full border border-green-500/30 text-green-500 mb-6"
                 >
                    <ShieldCheck size={64} />
                 </motion.div>
                 <h3 className="text-2xl font-black text-white uppercase tracking-tighter">System Hardened</h3>
                 <p className="text-green-500 font-mono text-xs mt-2 animate-pulse">FIREWALL_ACTIVE: 100% SECURE</p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                 <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                    <p className="text-[10px] text-gray-500 font-mono">ENCRYPTION</p>
                    <p className="text-white font-bold">AES-256</p>
                 </div>
                 <div className="p-3 bg-black/40 border border-white/5 rounded-xl">
                    <p className="text-[10px] text-gray-500 font-mono">UPTIME</p>
                    <p className="text-white font-bold">99.99%</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Features Content */}
          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
                <Server size={14} /> [ DATA_PROTECTION_FRAMEWORK ]
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Hardened <br /> <span className="text-green-500">Security</span>
              </h2>
              <p className="text-gray-400 mb-10 text-sm md:text-base leading-relaxed">
                Your data protection is not an option for us, but rather the foundation of our systems. We use a multi-layered security architecture to prevent any unauthorized access.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {securityFeatures.map((feature, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="text-green-500 group-hover:scale-110 transition-transform">
                          {feature.icon}
                       </div>
                       <h4 className="text-white font-bold text-sm">{feature.title}</h4>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-relaxed pl-8 group-hover:text-gray-400 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

        {/* Global Certification Badge - Footer of this section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 border border-green-500/10 bg-green-500/5 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
           <div className="flex items-center gap-4">
              <Zap size={32} className="text-green-500" />
              <p className="text-sm font-mono text-gray-400">
                Our security protocols <span className="text-white">ISO/IEC 27001</span> and <span className="text-white">SOC 2 Type II</span> Designed according to standards.
              </p>
           </div>
           <button className="px-6 py-2 bg-green-600 hover:bg-green-500 text-black font-black rounded-lg text-xs transition-all uppercase">
             Download Security Audit
           </button>
        </motion.div>

      </div>
    </section>
  );
};

export default DataProtection;