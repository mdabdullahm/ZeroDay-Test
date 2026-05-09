"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ShieldCheck, Terminal } from 'lucide-react';
import Link from 'next/link';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // চেক করা হচ্ছে ইউজার আগে একসেপ্ট করেছে কি না
    const consent = localStorage.getItem('cookie-consent-protocol');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000); // ২ সেকেন্ড পর দেখাবে
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent-protocol', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[999] max-w-4xl mx-auto"
        >
          <div className="relative bg-zinc-950/90 border border-green-500/20 rounded-3xl p-6 backdrop-blur-xl shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              {/* Icon Section */}
              <div className="shrink-0 w-14 h-14 bg-green-500/10 border border-green-500/20 rounded-2xl flex items-center justify-center text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <Cookie size={28} />
              </div>

              {/* Text Section */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-green-500 font-mono text-[9px] mb-1 uppercase tracking-[0.3em]">
                   <Terminal size={10} /> [ SECURITY_MANIFEST_v1.0 ]
                </div>
                <h4 className="text-white font-bold text-lg uppercase tracking-tight">Deploying Security Fragments?</h4>
                <p className="text-gray-400 text-xs font-mono mt-1 leading-relaxed">
                  We use cookies to optimize your uplink and ensure core security protocols. 
                  By accepting, you authorize the data transmission.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Link 
                  href="/cookies-policy" // তোমার কুকি পলিসি পেজ লিঙ্ক
                  className="flex-1 md:flex-none text-center px-5 py-2.5 text-[10px] font-mono text-gray-500 hover:text-green-500 transition-colors uppercase"
                >
                  View_Specs
                </Link>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-8 py-2.5 bg-green-600 hover:bg-green-500 text-black font-black text-[10px] rounded-xl uppercase transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] active:scale-95"
                >
                  Initialize_Acceptance
                </button>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="hidden md:block p-2 text-zinc-700 hover:text-red-500 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;