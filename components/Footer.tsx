"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, Github, Twitter, Linkedin, Youtube, ShieldCheck, Cpu, Globe, Zap, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerData = {
    products: {
      title: "Products",
      main: [
        { 
          name: "Penetration Testing", 
          subItems: [
            "Pen Test as a Service",
            "Continuous Attack Surface Pen Testing",
            "Web Application Pen Test",
            "Mobile App Pen Test",
            "Network Pen Test",
            "API Pen Test",
            "IoT Pen Test",
            "Cloud Pen Test",
            "Social Engineering Pen Test"
          ]
        },
        { name: "Red Team as a Service", href: "#" },
        { name: "Bug Bounty", href: "#" },
        { name: "Vulnerability Disclosure", href: "#" },
        { name: "Attack Surface Management", href: "#" }
      ]
    },
    industries: [
      "Financial Services", "Healthcare", "Retail", "Automotive", "Technology", "Government", "Security"
    ],
    forHackers: [
      "Programs", "CrowdStream", "Bug Bounty List", "Start Hacking", "FAQs", "Hacker Docs", "Academy", "Leaderboard"
    ],
    company: [
      "About", "Trust & Security", "Career", "Press", "Events", "Contact"
    ]
  };

  return (
    <footer className="relative bg-black border-t border-green-500/10 pt-20 pb-10 overflow-hidden font-sans">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Column 1: Products (Wide) */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm border-b border-green-500/20 pb-2">
               Products
            </h4>
            <ul className="space-y-4">
              {footerData.products.main.map((item, i) => (
                <li key={i} className="group">
                  <span className="text-gray-400 font-bold text-xs uppercase block mb-3">{item.name}</span>
                  {item.subItems && (
                    <ul className="pl-4 space-y-2 border-l border-green-500/10 ml-1">
                      {item.subItems.map((sub, j) => (
                        <li key={j}>
                          <Link href="#" className="text-gray-500 text-[11px] hover:text-green-500 transition-colors block">
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm border-b border-green-500/20 pb-2">
               Industries
            </h4>
            <ul className="space-y-3">
              {footerData.industries.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-500 text-xs hover:text-green-500 transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-green-900 rounded-full group-hover:bg-green-500 transition-all"></div>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: For Hackers wwwwwwwwww*/}
          <div>
            <h4 className="text-[#f97316] font-black mb-6 uppercase tracking-widest text-sm border-b border-orange-500/20 pb-2">
               For Hackers
            </h4>
            <ul className="space-y-3">
              {footerData.forHackers.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-500 text-xs hover:text-orange-500 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={10} className="text-gray-800 group-hover:text-orange-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm border-b border-green-500/20 pb-2">
               Company
            </h4>
            <ul className="space-y-4">
              {footerData.company.map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-gray-300 text-sm font-medium hover:text-green-500 transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Branding & Socials */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
               <h4 className="text-white font-black uppercase tracking-widest text-sm">Follow Us</h4>
               <div className="h-[2px] w-full bg-gradient-to-r from-red-600 to-transparent"></div>
               <div className="flex gap-4">
                  <Link href="#" className="text-gray-400 hover:text-white transition-all"><Linkedin size={22} /></Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-all"><Twitter size={22} /></Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-all"><Youtube size={22} /></Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-all"><Github size={22} /></Link>
               </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <img src="/ZeroDay Test Logo.png" alt="Logo" className='w-8 h-8 filter grayscale hover:grayscale-0 transition-all'/>
                <span className="font-mono font-bold text-sm tracking-tighter">
                  <span className="text-green-500">ZER0DAY</span>
                  <span className="text-white ml-1">TEST</span>
                </span>
              </Link>
              <p className="text-[10px] text-gray-200 leading-relaxed font-mono uppercase">
                ZeroDay Test is Bangladesh’s first dedicated bug bounty and crowdsourced security platform, bridging organizations and elite ethical hackers to proactively secure digital assets before breaches occur.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
             <Link href="/policy" className='hover:text-green-500 transition-colors'>Privacy Policy</Link>
             <Link href="/policy" className='hover:text-green-500 transition-colors'>Terms</Link>
             <Link href="/contact" className='hover:text-green-500 transition-colors'>Security</Link>
          </div>
          
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
             © {currentYear} ZeroDay Test Lab | Global Tactical Ops
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;