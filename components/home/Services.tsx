"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Globe, Database, Smartphone, Search, Binary, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Web Infiltration",
    description: "Advanced web application penetration testing and finding complex bugs like SQLi, XSS or SSRF.",
    icon: <Globe size={24} />,
    tag: "OWASP Top 10"
  },
  {
    title: "Network Breaching",
    description: "A protocol for finding loopholes in your local or cloud network and securing it.",
    icon: <Binary size={24} />,
    tag: "Protocol Testing"
  },
  {
    title: "Android/iOS Security",
    description: "Ensuring security through source code analysis and reverse engineering of mobile applications.",
    icon: <Smartphone size={24} />,
    tag: "Mobile Lab"
  },
  {
    title: "Database Hardening",
    description: "Security layers and injection protection to protect the database server from hackers.",
    icon: <Database size={24} />,
    tag: "Data Armor"
  },
  {
    title: "Vulnerability Scan",
    description: "Identify zero-day threats through automated and manual scanning.",
    icon: <Search size={24} />,
    tag: "24/7 Monitoring"
  },
  {
    title: "Red Teaming",
    description: "Testing your company's overall security system by simulating a real cyber attack.",
    icon: <ShieldAlert size={24} />,
    tag: "Full Offensive"
  }
];

const Services = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      
      {/* Background Decor - Corner Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-500 font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            [ Tactical Operations ]
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Our Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Services</span>
          </motion.h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 bg-zinc-900/40 border border-white/5 rounded-2xl hover:border-green-500/30 transition-all duration-300"
            >
              {/* Card Hover Background Glow */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 rounded-2xl transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 text-green-500 rounded-xl mb-6 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                  {service.icon}
                </div>

                <span className="text-[10px] font-mono text-green-700 bg-green-500/5 px-2 py-1 rounded border border-green-500/10 uppercase mb-4 inline-block">
                  {service.tag}
                </span>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-bold text-green-500 cursor-pointer group/link">
                  READ PROTOCOL 
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;