"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Globe, Zap, Terminal, ShieldCheck } from 'lucide-react';

const contactNodes = [
  {
    title: "Secure Email Relay",
    value: "secure@zerodaytest.com",
    sub: "Encryption: AES-256 Enabled",
    icon: <Mail size={24} />,
    color: "group-hover:text-green-500"
  },
  {
    title: "Tactical Direct Line",
    value: "+1 (555) ZER0-DAY",
    sub: "Signal / Session / Telegram",
    icon: <Phone size={24} />,
    color: "group-hover:text-blue-500"
  },
  {
    title: "Operational Base",
    value: "Node 0x7, Silicon Valley",
    sub: "California, United States",
    icon: <MapPin size={24} />,
    color: "group-hover:text-purple-500"
  }
];

const ContactMethods = () => {
  return (
    <section className="relative py-10 lg:py-20 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16 items-center">
          
          {/* Left Side: Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {contactNodes.map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 bg-zinc-950/50 border border-white/5 rounded-[2rem] hover:border-green-500/30 transition-all duration-500"
              >
                <div className={`w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl mb-6 transition-all duration-500 group-hover:bg-green-500 group-hover:text-black ${node.color}`}>
                  {node.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-green-400 transition-colors">
                  {node.title}
                </h3>
                
                <p className="text-white font-mono text-sm mb-1">{node.value}</p>
                <p className="text-gray-600 text-[10px] font-mono uppercase tracking-widest">{node.sub}</p>

                {/* Decorative Element */}
                <div className="absolute bottom-4 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                   <ShieldCheck size={40} className="text-green-500" />
                </div>
              </motion.div>
            ))}

            {/* Social Connect Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-green-500/5 border border-green-500/10 rounded-[2rem] flex flex-col justify-center items-center text-center group hover:bg-green-500/10 transition-all"
            >
               <div className="flex gap-4 mb-6">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-gray-500 hover:text-green-500 hover:border-green-500/30 transition-all cursor-pointer">
                       <Globe size={16} />
                    </div>
                  ))}
               </div>
               <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Global Connectivity</h4>
               <p className="text-[10px] font-mono text-green-900 uppercase">Status: All Nodes Online</p>
            </motion.div>
          </div>

          {/* Right Side: Operational Hours / Context */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
              <Terminal size={14} /> [ NODE_AVAILABILITY_SCHEDULE ]
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
              Always <br /> <span className="text-green-500">Standby</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-sm">
              Our command center is active 24/7. For threat reports or emergency audit requests, our response team will establish a connection within just a few hours.
            </p>

            {/* Availability Bars */}
            <div className="space-y-6">
               {[
                 { day: "Mon - Fri", status: "Full Ops", val: "100%" },
                 { day: "Sat - Sun", status: "Emergency Only", val: "40%" }
               ].map((item, i) => (
                 <div key={i}>
                    <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase">
                       <span>{item.day} — {item.status}</span>
                       <span className="text-green-900">{item.val}</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: item.val }}
                         transition={{ duration: 1.5, delay: 0.5 }}
                         className="h-full bg-green-900 shadow-[0_0_10px_#10b98144]"
                       />
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-10 flex items-center gap-2 text-[9px] font-mono text-gray-700 uppercase tracking-widest">
               <Zap size={12} className="text-green-900" /> Average_Response: &lt; 120 Minutes
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ContactMethods;