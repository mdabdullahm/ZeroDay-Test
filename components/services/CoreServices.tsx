"use client";
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Terminal, Database, Lock, Search, Cpu, Globe } from 'lucide-react';

const coreServices = [
  {
    title: "Web Infiltration & API Audit",
    desc: "We don't just scan the surface. Our team digs deep into your web applications to find business logic errors and zero-day vulnerabilities.",
    features: ["OWASP Top 10 Mapping", "JWT & OAuth Analysis", "Rate Limiting Bypass Test"],
    icon: <Globe size={32} />,
    stat: "99.9% Detection Rate"
  },
  {
    title: "Infrastructure & Network Breaching",
    desc: "Is your internal network secure? We test your firewall and router security with real-time network penetration testing.",
    features: ["AD Domain Escalation", "VLAN Segregation Test", "Wireless Auditing"],
    icon: <Terminal size={32} />,
    stat: "Zero Downtime Testing"
  },
  {
    title: "Cloud & DevSecOps Hardening",
    desc: "AWS, Azure, or GCP—we protect your cloud infrastructure by ensuring proper policy configuration and container security.",
    features: ["S3 Bucket Misconfig", "IAM Policy Audit", "Kubernetes Security"],
    icon: <Database size={32} />,
    stat: "Multi-Cloud Support"
  }
];

const CoreServices = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="mb-20 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center lg:justify-start gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <Cpu size={14} /> [ PRIMARY_ATTACK_VECTORS ]
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            Core Security <span className="text-green-500">Ops</span>
          </h2>
        </div>

        {/* Core Services List - Alternating Layout */}
        <div className="space-y-12 lg:space-y-24">
          {coreServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-zinc-900/30 border border-green-500/20 rounded-[3rem] p-12 aspect-video flex flex-col items-center justify-center overflow-hidden">
                   <div className="text-green-500 mb-6 group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                   </div>
                   <div className="text-center">
                      <p className="text-green-900 font-mono text-[10px] uppercase mb-2 tracking-[0.3em]">Operational Metrics</p>
                      <p className="text-white font-bold text-xl uppercase tracking-widest">{service.stat}</p>
                   </div>
                   {/* Decorative Scan Animation */}
                   <motion.div 
                     animate={{ y: [-100, 300] }}
                     transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                     className="absolute top-0 left-0 w-full h-[2px] bg-green-500/20 shadow-[0_0_15px_#22c55e]"
                   />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-lg text-[10px] font-mono text-green-500 uppercase">
                  Service_Node_0{idx + 1}
                </div>
                <h3 className="text-3xl lg:text-5xl font-bold text-white uppercase tracking-tight leading-none">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed font-light">
                  {service.desc}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {service.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
                      {feat}
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <button className="flex items-center gap-3 text-xs font-black text-white hover:text-green-500 transition-all group">
                    VIEW_TECHNICAL_SPEC <Zap size={16} className="text-green-900 group-hover:text-green-500 group-hover:animate-pulse" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreServices;