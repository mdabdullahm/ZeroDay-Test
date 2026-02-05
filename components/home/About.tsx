"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Cpu, ShieldCheck, Fingerprint, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background Decor - হালকা গ্লো শুধু এই সেকশনের জন্য */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Hacker Profile Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* প্রোফাইল কার্ডের বর্ডার গ্লো */}
            <div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-3xl blur-md"></div>
            
            <div className="relative bg-zinc-900/50 border border-green-500/20 rounded-3xl p-8 backdrop-blur-xl">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                   <Fingerprint size={40} className="text-green-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">ZeroDay Researcher</h3>
                  <p className="text-green-500 font-mono text-sm">Clearance Level: OMEGA</p>
                </div>
              </div>

              {/* Skills/Specs */}
              <div className="space-y-4">
                {[
                  { label: 'Penetration Testing', value: '98%' },
                  { label: 'Malware Analysis', value: '92%' },
                  { label: 'Network Security', value: '95%' },
                  { label: 'Reverse Engineering', value: '88%' }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-xs font-mono mb-1 uppercase text-gray-400">
                      <span>{skill.label}</span>
                      <span>{skill.value}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.value }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-green-500 shadow-[0_0_10px_#22c55e]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
                 <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-green-500 font-bold text-xl">100+</p>
                    <p className="text-[10px] text-gray-500 uppercase">Critical Bugs</p>
                 </div>
                 <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                    <p className="text-green-500 font-bold text-xl">50+</p>
                    <p className="text-[10px] text-gray-500 uppercase">Exploits Published</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-green-500 font-mono text-sm mb-4">
              <span className="w-8 h-[1px] bg-green-500"></span>
              IDENTITY_INITIATED
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Who is <span className="text-green-500">ZeroDay Test?</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We are not just a website, we are an advanced cybersecurity research lab. Our mission is to analyze modern threats and provide world-class security solutions. We believe that the best defense is to understand the offense.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-500 mt-1">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Our Mission</h4>
                  <p className="text-sm text-gray-500">Ensuring a safe digital world.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-500 mt-1">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Technology</h4>
                  <p className="text-sm text-gray-500">Using the latest exploits and AI tools.</p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 group text-white font-bold border-b-2 border-green-500 pb-1 hover:text-green-500 transition-all">
              EXPLORE OUR PROTOCOLS
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;