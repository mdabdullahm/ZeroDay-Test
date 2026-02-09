"use client";
import { motion } from 'framer-motion';
import { Lock, EyeOff, Server, ShieldCheck, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Zero-Log Policy",
      desc: "We do not keep any personally identifiable logs on our servers. Your IP and browser history are not saved in our system.",
      icon: <EyeOff size={22} />
    },
    {
      title: "End-to-End Encryption",
      desc: "Every bug report and message you send is protected with AES-256 bit encryption.",
      icon: <Lock size={22} />
    },
    {
      title: "Data Retention",
      desc: "All temporary data is permanently deleted from our secure dustbin within 24 hours of the operation being completed.",
      icon: <Database size={22} />
    },
    {
      title: "No Third-party Sharing",
      desc: "None of your information is shared with third-parties or any other agencies. Your identity is top-secret to us.",
      icon: <Server size={22} />
    }
  ];

  return (
    <section className="relative bg-black py-16 lg:py-24 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Header & Context */}
          <div className="lg:w-1/3">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <ShieldCheck size={14} /> [ PRIVACY_ENCRYPTION_PROTOCOL ]
            </motion.div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Privacy <br /> <span className="text-green-500">Protocols</span>
            </h2>
            <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-2xl">
               <div className="flex items-center gap-2 text-green-500 mb-2 font-mono text-xs">
                  <UserCheck size={14} /> PRIVACY_STATUS: MAXIMUM
               </div>
               <p className="text-gray-500 text-xs leading-relaxed">
                 We protect your privacy through a 'zero-trust' model. Every node in the system is designed to keep your identity private.
               </p>
            </div>
          </div>

          {/* Right Side: Policy Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-green-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-green-500/10 text-green-500 rounded-lg mb-4 group-hover:bg-green-500 group-hover:text-black transition-all">
                   {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Technical Footer of this Section */}
        <div className="mt-20 py-6 border-y border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-30">
           <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Encryption: AES-256-GCM</div>
           <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Protocol: TLS 1.3</div>
           <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Log_Status: Disabled</div>
           <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Node: Decentralized</div>
        </div>

      </div>
    </section>
  );
};

export default PrivacyPolicy;