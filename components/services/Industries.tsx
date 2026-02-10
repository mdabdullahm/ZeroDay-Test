"use client";
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, Building, ShieldAlert, Cpu, Globe, Rocket } from 'lucide-react';

const industrySectors = [
  {
    title: "Finance & Fintech",
    desc: "We have special audit protocols to ensure the security of banking systems and digital payment gateways.",
    icon: <Landmark size={24} />,
    id: "SEC-FIN-01"
  },
  {
    title: "Healthcare",
    desc: "Protecting sensitive patient data and medical infrastructure from ransomware is one of our goals.",
    icon: <HeartPulse size={24} />,
    id: "SEC-MED-02"
  },
  {
    title: "E-Commerce",
    desc: "Protect online shops and customer databases from injection attacks and session hijacking.",
    icon: <ShoppingCart size={24} />,
    id: "SEC-RET-03"
  },
  {
    title: "Government & Defense",
    desc: "We work to ensure national security and the impenetrable security of government portals.",
    icon: <Building size={24} />,
    id: "SEC-GOV-04"
  },
  {
    title: "Tech Startups",
    desc: "We minimize risk by ensuring code audits and cloud security before launching new products.",
    icon: <Rocket size={24} />,
    id: "SEC-TEC-05"
  },
  {
    title: "Critical Infra",
    desc: "Providing security for power grids, IoT networks, and industrial control systems (ICS).",
    icon: <Cpu size={24} />,
    id: "SEC-INF-06"
  }
];

const Industries = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Area */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-end mb-20">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <Globe size={14} /> [ INDUSTRY_VERTICALS_ANALYSIS ]
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter leading-none">
              Sectors of <br /> <span className="text-green-500">Operation</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light max-w-xl">
              We provide our security solutions to various complex sectors. We have different strategic defense mechanisms for each industry.
            </p>
          </div>
          
          <div className="flex justify-start lg:justify-end">
             <div className="p-6 bg-zinc-900/30 border border-green-500/20 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-3 text-green-500 mb-2">
                   <ShieldAlert size={20} className="animate-pulse" />
                   <span className="text-xs font-black uppercase tracking-widest">Global Reach</span>
                </div>
                <p className="text-[10px] font-mono text-gray-600 uppercase">Authorized Operations across 12+ Sectors</p>
             </div>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industrySectors.map((sector, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-500"
            >
              {/* Sector ID Header */}
              <div className="flex justify-between items-center mb-8 text-[9px] font-mono text-gray-700 group-hover:text-green-900 transition-colors">
                 <span>{sector.id}</span>
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors"></div>
              </div>

              <div className="w-14 h-14 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {sector.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {sector.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {sector.desc}
              </p>

              {/* Bottom Decorative Pattern */}
              <div className="mt-8 pt-6 border-t border-white/5 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                 {[1,2,3,4,5].map(i => <div key={i} className="w-3 h-[2px] bg-green-500"></div>)}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;