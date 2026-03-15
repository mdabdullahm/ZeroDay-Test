"use client";
import { motion } from 'framer-motion';
import { Lock, EyeOff, Server, ShieldCheck, Database, UserCheck } from 'lucide-react';
import Link from 'next/link'; 

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Trust & Security",
      desc: "The Cyber Security Act / Cyber Security Ordinance 2025 was introduced to establish a modern legal structure for digital security, cybercrime prevention, prosecution, and national cybersecurity governance in Bangladesh",
      icon: <EyeOff size={22} />,
      href: "/trust-security" 
    },
    {
      title: "HUNTER NON-DISCLOSURE & CONFIDENTIALITY AGREEMENT",
      desc: "This Agreement governs confidentiality and authorized security testing conducted through Zeroday Test. It establishes the rules for protecting sensitive data during research activities.",
      icon: <Lock size={22} />,
      href: "/hunter-nda"
    },
    {
      title: "ZeroDay Test – Do Not Sell or share my information policy",
      desc: "Byte Capsule IT does not sell, rent, or commercially share personal information of users of the ZeroDay Test platform.",
      icon: <Database size={22} />,
      href: "/do-not-sell"
    },
    {
      title: "Client Non-Disclosure & Confidentiality Agreement",
      desc: "By registering as a Client, submitting a program, or clicking “I Agree,” you agree to be legally bound by this Agreement.",
      icon: <Server size={22} />,
      href: "/client-nda" 
    },
    {
      title: "zeroday test Privacy Policy", 
      desc: "This Privacy Policy explains how Byte Capsule IT (Byte Capsule, we, our, or us) collects, uses, processes, stores, and discloses personal information in connection with.",
      icon: <ShieldCheck size={22} />,
      href: "/privacy-policy" 
    }
  ];

  return (
    <section className="relative bg-black py-16 lg:py-24 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
              <ShieldCheck size={14} /> [ PRIVACY_ENCRYPTION_PROTOCOL ]
            </motion.div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Privacy <br /> <span className="text-green-500">Protocols</span></h2>
            <div className="p-4 bg-green-500/5 border border-green-500/10 rounded-2xl">
               <div className="flex items-center gap-2 text-green-500 mb-2 font-mono text-xs">
                  <UserCheck size={14} /> PRIVACY_STATUS: MAXIMUM
               </div>
               <p className="text-gray-500 text-xs leading-relaxed">
                 We protect your privacy through a 'zero-trust' model. Every node in the system is designed to keep your identity private.
               </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((item, index) => (
              <Link href={item.href} key={index}> {/* কার্ডটিকে লিঙ্কে মুড়িয়ে দেওয়া হলো */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group h-full p-8 bg-zinc-950 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-500 relative overflow-hidden cursor-pointer"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 text-green-500 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                     {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  {item.href !== "#" && (
                    <div className="text-[10px] font-mono text-green-900 group-hover:text-green-500 transition-colors">
                      &gt; VIEW_FULL_AGREEMENT
                    </div>
                  )}
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20 py-6 border-y border-white/5 flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-50">
           <div className="text-[10px] font-mono text-gray-100 uppercase tracking-widest">Encryption: AES-256-GCM</div>
           <div className="text-[10px] font-mono text-gray-100 uppercase tracking-widest">Protocol: TLS 1.3</div>
           <div className="text-[10px] font-mono text-gray-100 uppercase tracking-widest">Log_Status: Disabled</div>
           <div className="text-[10px] font-mono text-gray-100 uppercase tracking-widest">Node: Decentralized</div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;