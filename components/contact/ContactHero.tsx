"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Send, Terminal, Globe, Zap, Satellite, Mail } from 'lucide-react';

const ContactHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black text-white">

      {/* Ambient Glows - Green & Blue Tint */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[130px] -z-10"></div>
      <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Connection Status & Identity */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
              <Satellite size={14} className="text-green-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">[ UPLINK_NODE_07: ACTIVE ]</span>
            </div>

            <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              Establish <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-blue-600 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                Connection
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl font-light leading-relaxed">
              Do you have a bug to report? Or would you like to discuss a secure project with our elite researchers? Send a message to our encrypted Relay channel.
            </p>

            {/* Communication Info Snippets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-white/5 pt-8">
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/10 text-green-500 rounded-xl">
                     <Mail size={20} />
                  </div>
                  <div>
                     <p className="text-[10px] font-mono text-gray-600 uppercase">Secure Relay</p>
                     <p className="text-white font-bold text-sm">secure@zerodaytest.com</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                     <ShieldCheck size={20} />
                  </div>
                  <div>
                     <p className="text-[10px] font-mono text-gray-600 uppercase">PGP Fingerprint</p>
                     <p className="text-white font-bold text-sm font-mono tracking-tighter">0x882A...F12</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Animated Encrypted Signal Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            {/* Pulsing Signal Circles */}
            {[1, 2, 3].map((i) => (
               <motion.div 
                 key={i}
                 animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
                 transition={{ duration: 3, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
                 className="absolute w-40 h-40 md:w-64 md:h-64 border border-green-500/30 rounded-full"
               ></motion.div>
            ))}

            {/* Core Encryption Hub Visual */}
            <div className="relative z-10 bg-zinc-950/80 border border-green-500/20 rounded-[3rem] p-10 backdrop-blur-2xl shadow-[0_0_50px_rgba(34,197,94,0.1)] group">
               <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                     <div className="w-20 h-20 bg-green-600 text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                        <Terminal size={36} />
                     </div>
                     <div className="absolute -top-1 -right-1 w-5 h-5 bg-black border-2 border-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                     </div>
                  </div>
                  <div className="text-center">
                     <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-1">Encrypted Node</h3>
                     <p className="text-[10px] font-mono text-green-900">RSA-4096 / AES-256-GCM</p>
                  </div>
                  {/* Mock Signal Bars */}
                  <div className="flex gap-1 items-end h-8">
                     {[40, 60, 100, 70, 90].map((h, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [`${h-20}%`, `${h}%`, `${h-10}%`] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                          className="w-1.5 bg-green-500/40 rounded-full"
                        ></motion.div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Floating Globe Ornament */}
            <div className="absolute top-0 right-0 opacity-10 blur-sm">
               <Globe size={150} className="text-green-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;