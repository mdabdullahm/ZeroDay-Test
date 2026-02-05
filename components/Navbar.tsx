"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // এনিমেশনের জন্য
import { Terminal, Lock, ShieldCheck, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Policy', href: '/policy' },
    { name: 'HoyZeroTest', href: '/hoyzerotest' },
    { name: 'Academy', href: '/academy' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 mt-4 perspective-1000">
      <motion.div 
        initial={{ opacity: 0, y: -20, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto border border-green-500/40 bg-white/50 backdrop-blur-md rounded-2xl shadow-[0_10px_30px_rgba(34,197,94,0.2)] overflow-hidden"
      >
        <div className="px-6 h-20 flex items-center justify-between">
          
          {/* Logo Section - Hover করলে হালকা পালস করবে */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/50 group-hover:shadow-[0_0_15px_#22c55e] transition-all">
              <Terminal size={24} className="text-green-500" /> 
            </div>
            <Link href="/" className="text-xl font-bold tracking-tighter font-mono">
              <span className="text-green-500">ZER0DAY</span>
              <span className="text-black ml-1 underline decoration-green-500"></span>
            </Link>
          </motion.div>

          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-black hover:text-green-400 text-sm font-mono font-medium transition-all relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500"
                  whileHover={{ width: '100%' }}
                />
              </Link>
            ))}
          </div>

          {/* Login Buttons - Glowing Effect */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,197,94,0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2 bg-green-600 text-black text-xs font-bold rounded-lg transition-all"
            >
              <Lock size={14} />
              HACKER LOGIN
            </motion.button>
            
            <motion.button 
              whileHover={{ backgroundColor: "rgba(34,197,94,0.1)", scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-2 border border-green-500 text-green-500 text-xs font-bold rounded-lg transition-all"
            >
              <ShieldCheck size={14} />
              CUSTOMER
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-500 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-green-900/50 bg-black/95 px-6 py-6 space-y-4"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="block text-green-500 text-lg font-mono hover:translate-x-2 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  {`> `}{link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <button className="w-full py-3 bg-green-600 text-black font-bold rounded-xl shadow-lg shadow-green-900/20">HACKER LOGIN</button>
                <button className="w-full py-3 border border-green-500 text-green-500 font-bold rounded-xl">CUSTOMER LOGIN</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;