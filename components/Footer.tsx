"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, Github, Twitter, Linkedin, Youtube, ShieldCheck, Cpu, Globe, Zap, ChevronRight, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-green-500 pt-20 pb-10 overflow-hidden font-sans">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* ১. আমাদের সার্ভিস (Products Section) */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm border-b border-green-500/20 pb-2">
               Services
            </h4>
            <ul className="space-y-4">
              <li className="group">
                <Link href="/services" className="text-gray-400 font-bold text-xs uppercase block mb-3 hover:text-green-500 transition-colors">
                  Penetration Testing
                </Link>
                <ul className="pl-4 space-y-2 border-l border-green-500/10 ml-1">
                  <li><Link href="/services" className="text-gray-500 text-[11px] hover:text-green-500 transition-colors block">Web Application Test</Link></li>
                  <li><Link href="/services" className="text-gray-500 text-[11px] hover:text-green-500 transition-colors block">Mobile App Pen Test</Link></li>
                  <li><Link href="/services" className="text-gray-500 text-[11px] hover:text-green-500 transition-colors block">Network & API Audit</Link></li>
                  <li><Link href="/services" className="text-gray-500 text-[11px] hover:text-green-500 transition-colors block">Cloud Infrastructure</Link></li>
                </ul>
              </li>
              <li><Link href="/services" className="text-gray-400 font-bold text-xs uppercase hover:text-green-500 transition-colors">Red Team Ops</Link></li>
              <li><Link href="/services" className="text-gray-400 font-bold text-xs uppercase hover:text-green-500 transition-colors">Bug Bounty Programs</Link></li>
            </ul>
          </div>

          {/* ২. আমাদের একাডেমি (For Hackers Section) */}
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm border-b border-orange-500/20 pb-2">
               Academy
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Learning Tracks", href: "/academy" },
                { name: "Course Modules", href: "/academy" },
                { name: "Live Labs", href: "/academy" },
                { name: "Certifications", href: "/academy" },
                { name: "Hacker Dashboard", href: "/hacker-login" },
                { name: "FAQs", href: "/academy" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-500 text-xs hover:text-green-500 transition-colors flex items-center gap-2 group">
                    <ChevronRight size={10} className="text-gray-800 group-hover:text-green-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৩. কেন আমরা? (HoyZeroTest Section) */}
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm border-b border-green-500/20 pb-2">
               Why ZeroDay?
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Mission Briefing", href: "/hoyzerotest" },
                { name: "Our Methodology", href: "/hoyzerotest" },
                { name: "Testing Scope", href: "/hoyzerotest" },
                { name: "Tech Stack", href: "/hoyzerotest" },
                { name: "Sample Findings", href: "/hoyzerotest" },
                { name: "Zero-Day Ethics", href: "/hoyzerotest" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-500 text-xs hover:text-green-500 transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-green-900 rounded-full group-hover:bg-green-500 transition-all"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৪. কোম্পানি ও পলিসি (Company Section) */}
          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-widest text-sm border-b border-green-500/20 pb-2">
               Company
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Who Am I", href: "/about" },
                { name: "Policy Overview", href: "/policy" },
                { name: "Privacy Protocol", href: "/policy" },
                { name: "Secure Disclosure", href: "/policy" },
                { name: "Contact Nodes", href: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-300 text-sm font-medium hover:text-green-500 transition-colors block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ৫. সোশ্যাল ও লোগো (Socials Section) */}
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
              <div className="text-[10px] text-gray-600 leading-relaxed font-mono uppercase">
                <p className="flex items-center gap-2"><Zap size={10} className="text-green-900" /> All Nodes Online</p>
                <p className="flex items-center gap-2"><ShieldCheck size={10} className="text-green-900" /> Security: Maximum</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-6 text-[10px] font-mono text-gray-700 uppercase tracking-widest">
             <Link href="/policy" className='hover:text-green-500 transition-colors'>Policy</Link>
             <Link href="/contact" className='hover:text-green-500 transition-colors'>Uplink</Link>
             <Link href="mailto:secure@zerodaytest.com" className='hover:text-green-500 transition-colors'>Mail</Link>
          </div>
          
          <div className="text-[10px] font-mono text-gray-800 uppercase tracking-widest">
             © {currentYear} ZeroDay Test Lab | Global Tactical Ops
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;