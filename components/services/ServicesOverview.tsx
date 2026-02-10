"use client";
import { motion } from 'framer-motion';
import { Globe, ShieldAlert, Smartphone, Database, Search, Binary, Terminal, ArrowUpRight } from 'lucide-react';

const allServices = [
  {
    title: "Web App Pentesting",
    desc: "Advanced Web Application Audit. We protect your portal by detecting SQLi, XSS, and business logic vulnerabilities.",
    icon: <Globe size={24} />,
    unit: "UNIT_01",
    tags: ["OWASP", "APIs", "Cloud"]
  },
  {
    title: "Network Security",
    desc: "Internal and external network scanning. Firewall configuration and router security hardening protocols.",
    icon: <Terminal size={24} />,
    unit: "UNIT_02",
    tags: ["TCP/IP", "VPN", "IDS/IPS"]
  },
  {
    title: "Mobile App Audit",
    desc: "Source code analysis of Android and iOS applications. Runtime manipulation and data leak testing are performed.",
    icon: <Smartphone size={24} />,
    unit: "UNIT_03",
    tags: ["Android", "iOS", "API"]
  },
  {
    title: "Red Team Simulation",
    desc: "Testing your company's defense and response capabilities by simulating a real cyber attack.",
    icon: <Binary size={24} />,
    unit: "UNIT_04",
    tags: ["Stealth", "Social Eng", "OSINT"]
  },
  {
    title: "Cloud Infrastructure",
    desc: "Security audits and misconfiguration checks of AWS, Azure and GCP cloud environments.",
    icon: <Database size={24} />,
    unit: "UNIT_05",
    tags: ["S3 Buckets", "IAM", "VPC"]
  },
  {
    title: "Vulnerability Scan",
    desc: "Identification of all zero-day threats in your infrastructure through automated and manual scanning.",
    icon: <Search size={24} />,
    unit: "UNIT_06",
    tags: ["CVEs", "Zero-Day", "Logging"]
  }
];

const ServicesOverview = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <ShieldAlert size={14} /> [ DEPLOYED_SECURITY_MODUELS ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 uppercase tracking-tighter">
              Operational <span className="text-green-500">Inventory</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light">
              We provide you with a complete ecosystem of modern cybersecurity. Each module works with the utmost precision.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end gap-2 text-[10px] font-mono text-green-900">
             <p>SYSTEM_LOAD: OPTIMAL</p>
             <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                   animate={{ width: ["20%", "80%", "40%"] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="h-full bg-green-500/40"
                />
             </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-[2rem] hover:border-green-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Unit Tag Header */}
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-mono text-gray-700 group-hover:text-green-800 transition-colors uppercase tracking-widest">
                  {service.unit}
                </span>
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-green-500 group-hover:text-black transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Icon & Title */}
              <div className="mb-6">
                <div className="w-14 h-14 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl border border-green-500/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Technical Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {service.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[9px] font-mono px-2 py-1 bg-black border border-white/10 text-gray-600 rounded group-hover:text-green-500 group-hover:border-green-500/20 transition-all"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Background Glow Overlay */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;