"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion'; 
import { Terminal, Lock, ShieldCheck, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Policy', href: '/policy' },
    { name: 'WhyZeroTest', href: '/hoyzerotest' },
    // { name: 'Academy', href: '/academy' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const getButtonStyles = (path: string) => {
    const isActive = pathname === path;
    return isActive 
      ? "bg-[#00c853] text-black shadow-[0_0_20px_rgba(0,200,83,0.6)] scale-105" 
      : "bg-transparent text-green-500 border border-green-500/50 hover:bg-green-500/10";
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-4 mt-4">
      <div className="max-w-full mx-auto relative p-[1.5px] overflow-hidden rounded-2xl">
        
        {/* --- Rotating Border Animation  --- */}
        <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] opacity-100">
           <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_150deg,#00c853_180deg,transparent_210deg,transparent_360deg)]" />
        </div>

        {/* main navber body */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full border border-white/5 bg-[#0b0f1a]/95 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="px-6 h-16 flex items-center justify-between">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div>
                <img src="/ZeroDay Test Logo.png" alt=""  className='w-10 h-10'/>
              </div>
              <span className="text-xl font-bold font-mono tracking-tighter">
                <span className="text-green-600">ZER0DAY</span>
                <span className="text-white ml-1 underline decoration-green-500 underline-offset-4">TEST</span>
              </span>
            </Link>

            {/* Desktop Links - সাইজ বাড়িয়ে text-sm (14px) করা হয়েছে */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-[14px] font-mono font-bold tracking-wider transition-all ${pathname === link.href ? 'text-green-500' : 'text-white hover:text-green-500'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Login Buttons - সাইজ বাড়িয়ে text-xs (12px) করা হয়েছে */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link href="/hacker-login">
                <motion.button 
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-2 px-5 py-2.5 text-[12px] font-black tracking-widest rounded-xl transition-all duration-300 ${getButtonStyles('/hacker-login')}`}
                >
                  <Lock size={14} /> HUNTER LOGIN
                </motion.button>
              </Link>
              <Link href="/customer-login">
                <motion.button 
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-2 px-5 py-2.5 text-[12px] font-black tracking-widest rounded-xl transition-all duration-300 ${getButtonStyles('/customer-login')}`}
                >
                  <ShieldCheck size={14} /> CUSTOMER LOGIN
                </motion.button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-green-600 p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden bg-[#0b0f1a] border-t border-white/5 overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-mono font-bold tracking-widest ${pathname === link.href ? 'text-green-600' : 'text-gray-300'}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  
                  <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                    <Link href="/hacker-login" onClick={() => setIsOpen(false)}>
                      <button className={`w-full py-4 flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 ${getButtonStyles('/hacker-login')}`}>
                        <Lock size={18} /> HACKER LOGIN
                      </button>
                    </Link>
                    <Link href="/customer-login" onClick={() => setIsOpen(false)}>
                      <button className={`w-full py-4 flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 ${getButtonStyles('/customer-login')}`}>
                        <ShieldCheck size={18} /> CUSTOMER LOGIN
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;