"use client";
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Terminal, ShieldCheck } from 'lucide-react';

const contactNodes = [
  {
    title: "Secure Email",
    value: "secure@zerodaytest.com",
    sub: "PGP Key: 0x882A...F12",
    icon: <Mail size={24} />
  },
  {
    title: "Encrypted Line",
    value: "+1 (555) 000-ZERO",
    sub: "Signal / Session / Telegram",
    icon: <Phone size={24} />
  },
  {
    title: "Base of Ops",
    value: "Virtual Node 0x7",
    sub: "Silicon Valley, CA, USA",
    icon: <MapPin size={24} />
  }
];

const ContactInfo = () => {
  return (
    <section className="relative bg-black py-10 lg:py-15 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <Terminal size={14} /> [ NODE_CONNECTIVITY_ESTABLISHED ]
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Communication <span className="text-green-500">Nodes</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-sm md:text-base font-light">
            Please contact us directly with any policy questions or to discuss our security protocols. Our response team is on standby 24/7.
          </p>
        </div>

        {/* Contact Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactNodes.map((node, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-500"
            >
              {/* Top Right Corner Decoration */}
              <div className="absolute top-4 right-4 text-green-900/20 group-hover:text-green-500/10 transition-colors">
                <ShieldCheck size={40} />
              </div>

              <div className="w-14 h-14 flex items-center justify-center bg-green-500/10 text-green-500 rounded-2xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                {node.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {node.title}
              </h3>
              
              <p className="text-white font-mono text-sm mb-1">{node.value}</p>
              <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">{node.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Response Window Indicator */}
        <div className="p-8 bg-green-500/5 border border-green-500/10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center bg-green-500/20 text-green-500 rounded-full animate-pulse">
                 <Clock size={24} />
              </div>
              <div>
                 <h4 className="text-white font-bold uppercase text-sm tracking-widest">Response Window</h4>
                 <p className="text-xs text-gray-500 font-mono mt-1">AVERAGE_RESPONSE_TIME: &lt; 4 HOURS</p>
              </div>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-green-900/10 border border-green-500/20 rounded-lg text-[10px] font-mono text-green-500">
                 UTC-0:00 (GLOBAL_STANDARD)
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;