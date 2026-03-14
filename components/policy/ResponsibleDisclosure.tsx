"use client";

import React from 'react';
import Link from 'next/link'; // ১. লিঙ্ক ইমপোর্ট করুন
import { motion } from 'framer-motion';
import { ShieldCheck, Bug, AlertCircle, Gift, ChevronRight } from 'lucide-react';

const ResponsibleDisclosure = () => {
  return (
    <section className="relative py-16 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter">
            Responsible <span className="text-green-500">Disclosure</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl font-light">
            We value the cooperation of security researchers. If you find a flaw in our systems, 
            please let us know by following the protocol below. Together, we will keep the internet safe.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* ১. Safe Harbor কার্ড (নতুন disclosure-policy এর সাথে লিঙ্ক করা হলো) */}
          <Link href="/disclosure-policy" className="block group">
            <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl group-hover:border-green-500/30 transition-all h-full relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 text-green-500 rounded-xl group-hover:bg-green-500 group-hover:text-black transition-all">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Safe Harbor</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    If you comply with this policy, we will not take any legal action against you.
                  </p>
                  {/* নতুন লিঙ্ক ইন্ডিকেটর */}
                  <div className="flex items-center gap-2 text-[10px] font-mono text-green-900 group-hover:text-green-500 transition-colors uppercase tracking-widest">
                    <span>&gt; READ_LEGAL_PROTECTION</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </Link>

          {/* Card 2: Scope of Testing (এটার সাথে আমরা লিঙ্ক করলাম) */}
          <Link href="/vdp-policy" className="block group">
            <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl group-hover:border-green-500/30 transition-all h-full relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 text-green-500 rounded-xl group-hover:bg-green-500 group-hover:text-black transition-all">
                  <Bug size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Scope of Testing</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Only *.zerodaytest.com domains and our public API are allowed for testing.
                  </p>
                  {/* ছোট একটা ইঙ্গিত যা ইউজারকে ক্লিক করতে বলবে */}
                  <div className="flex items-center gap-2 text-[10px] font-mono text-green-900 group-hover:text-green-500 transition-colors uppercase tracking-widest">
                    <span>&gt; View_Full_VDP_Policy</span>
                  </div>
                </div>
              </div>
              {/* কোণায় একটা ছোট শাইন এনিমেশন */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </Link>

          {/* Card 3: No Disruption */}
          {/* ৩. No Disruption (নতুন noc পেজ এর সাথে লিঙ্ক করা হলো) */}
          <Link href="/noc" className="block group">
            <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-3xl group-hover:border-green-500/30 transition-all h-full relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 text-green-500 rounded-xl group-hover:bg-green-500 group-hover:text-black transition-all">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">No Disruption</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    Damaging systems through DDoS or social engineering attacks is strictly prohibited.
                  </p>
                  {/* NOC লিঙ্ক ইন্ডিকেটর */}
                  <div className="flex items-center gap-2 text-[10px] font-mono text-green-900 group-hover:text-green-500 transition-colors uppercase tracking-widest">
                    <span>&gt; READ_AUTHORIZATION_NOC</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </Link>

          {/* Card 4: Reward System */}
          <Link href="/sop">
            <div className="group p-8 bg-zinc-900/40 border border-white/5 rounded-3xl hover:border-green-500/20 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/10 text-green-500 rounded-xl">
                <Gift size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Reward System</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We offer a 'Hall of Fame' and exclusive swag for valid critical reports.
                </p>
                <div className="flex items-center gap-2 text-[10px] font-mono text-green-900 group-hover:text-green-500 transition-colors uppercase tracking-widest">
                    <span>&gt; VIEW</span>
                  </div>
              </div>
            </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ResponsibleDisclosure;