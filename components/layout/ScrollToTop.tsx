"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Terminal } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // স্ক্রল পজিশন এবং প্রগ্রেস ট্র্যাক করা
  useEffect(() => {
    const handleScroll = () => {
      // ২০০ পিক্সেল নিচে নামলে বাটন দেখাবে
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // কত পার্সেন্ট স্ক্রল হয়েছে তা ক্যালকুলেট করা
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[40] cursor-pointer group"
        >
          {/* ১. প্রগ্রেস রিং (SVG) */}
          <svg className="w-14 h-14 md:w-16 md:h-16 transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="24"
              className="stroke-zinc-900 fill-none"
              strokeWidth="4"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="24"
              className="stroke-green-500 fill-none"
              strokeWidth="4"
              strokeDasharray="150.8" // 2 * PI * r (2 * 3.14 * 24)
              strokeDashoffset={150.8 - (150.8 * scrollProgress) / 100}
              strokeLinecap="round"
            />
          </svg>

          {/* ২. মেইন বাটন বডি */}
          <div className="absolute inset-0 m-auto w-10 h-10 md:w-12 md:h-12 bg-zinc-900 border border-green-500/30 rounded-full flex items-center justify-center backdrop-blur-md group-hover:bg-green-600 group-hover:border-green-600 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <ChevronUp size={24} className="text-green-500 group-hover:text-black transition-colors" />
            
            {/* ৩. ছোট টেকনিক্যাল ডেকোরেশন (Hover করলে দেখা যাবে) */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-green-500/30 px-2 py-1 rounded text-[8px] font-mono text-green-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
               GOTO_ROOT_NODE
            </div>
          </div>

          {/* ৪. গ্লোয়িং পালস (ব্যাকগ্রাউন্ডে) */}
          <div className="absolute inset-0 bg-green-500/5 rounded-full blur-xl group-hover:bg-green-500/20 transition-all"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;