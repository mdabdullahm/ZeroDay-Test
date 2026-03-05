"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, User, Zap, Terminal } from 'lucide-react';

interface Leader {
  rank: number;
  name: string;
  username: string;
  avatar: string | null;
  country: string | null; // API থেকে আসবে যেমন: "BD", "US"
  points: number;
}

const Leaderboard = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('https://zero-day-test-nine.vercel.app/api/public/leaderboard');
        const data = await response.json();
        if (data && Array.isArray(data.leaders)) {
          setLeaders(data.leaders);
        }
      } catch (error) {
        console.error("Leaderboard Sync Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  // কান্ট্রি কোড থেকে পতাকার ছবি বের করার ফাংশন
  const getFlagURL = (code: string | null) => {
    const countryCode = code ? code.toLowerCase() : "bd"; // ডিফল্ট বাংলাদেশ
    return `https://flagcdn.com/w40/${countryCode}.png`;
  };

  // কান্ট্রি কোড থেকে নাম দেখানোর ফাংশন
  const getCountryName = (code: string | null) => {
    const countries: { [key: string]: string } = {
      "BD": "Bangladesh",
      "US": "United States",
    };
    return code ? (countries[code.toUpperCase()] || "Bangladesh") : "Bangladesh";
  };

  if (loading) return <div className="py-20 text-center font-mono text-green-500 animate-pulse">&gt; SYNCING_GLOBAL_NODES...</div>;
  if (leaders.length === 0) return null;

  const topThree = leaders.slice(0, 3);

  return (
    <section className="relative py-16 bg-black overflow-hidden border-t border-green-500/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* হেডার সেকশন */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
            <Trophy size={14} /> [ GLOBAL_HALL_OF_FAME ]
          </motion.div>
          
          <div className="relative inline-block">
             <div className="absolute -top-6 -left-12 w-10 h-10 border border-green-500/20 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
                <div className="absolute inset-0 border-t border-green-500/40 rounded-full animate-spin"></div>
             </div>
             
             <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                <span className="text-white">TOP</span> <span className="text-green-500 italic">RESEARCHERS</span>
             </h2>
          </div>
          
          <p className="text-gray-500 text-sm md:text-xl font-light mt-6 max-w-2xl">
            We are constantly working to educate the elite researchers on our platform.
          </p>
        </div>

        {/* --- ১. টপ সেকশন: পোডিয়াম কার্ডস (আসল পতাকা সহ) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {topThree.map((leader, index) => (
            <motion.div
              key={leader.rank}
              className={`relative p-8 rounded-[2rem] border flex flex-col items-center text-center transition-all duration-500 ${
                index === 0 ? 'bg-zinc-900/20 border-green-500/40 shadow-2xl scale-105 z-10' : 'bg-zinc-950/40 border-white/5'
              }`}
            >
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${index === 0 ? 'text-yellow-500' : 'text-gray-500'}`}>
                {index === 0 ? '1ST' : index === 1 ? '2ND' : '3RD'}
              </span>

              <div className="relative mb-6">
                 <div className={`w-24 h-24 rounded-full border-2 p-1 overflow-hidden ${index === 0 ? 'border-yellow-500' : 'border-zinc-800'}`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                       {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" /> : <User size={40} className="text-gray-700" />}
                    </div>
                 </div>
                 {index === 0 && <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 rounded-full border-2 border-zinc-900"></div>}
              </div>

              {/* পতাকা এবং নাম - ছবির মতো ডিজাইন */}
              <div className="flex items-center gap-2 mb-2">
                 <img src={getFlagURL(leader.country)} alt="flag" className="w-4 h-3 object-cover rounded-sm shadow-sm" />
                 <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{getCountryName(leader.country)}</span>
              </div>
              
              <h3 className="text-white font-bold text-lg mb-2">@{leader.username}</h3>
              
              <p className="text-green-500 font-black text-3xl tracking-tighter">
                {leader.points} pts
              </p>

              {index === 0 && (
                <div className="mt-4 text-yellow-500">
                   <Trophy size={48} strokeWidth={1.5} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* --- ২. নিচের সেকশন: র‍্যাঙ্কিং লিস্ট (আসল পতাকা সহ) --- */}
        <div className="bg-[#050505] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
           <div className="p-6 md:p-10 border-b border-white/5 flex justify-between items-end">
              <div>
                 <h2 className="text-white text-xl font-black uppercase tracking-wider">Ranking</h2>
                 <p className="text-gray-500 text-[10px] md:text-sm mt-1 font-light">
                    Hunters ranked by points in Q1 2026 — {leaders.length} total
                 </p>
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">Points</div>
           </div>

           <div className="p-4 md:p-6 space-y-3">
              {leaders.map((leader) => (
                <div key={leader.rank} className="flex items-center justify-between p-4 md:px-8 bg-[#0a0a0a] border border-white/5 rounded-xl hover:border-green-500/20 transition-all group">
                  <div className="flex items-center gap-6">
                    <span className="text-gray-700 font-mono text-xs w-6">#{leader.rank}</span>
                    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-zinc-900 border border-white/5">
                       {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" /> : <User size={18} className="text-gray-700" />}
                    </div>
                    <span className="text-gray-300 font-bold text-sm md:text-base">@{leader.username}</span>
                  </div>

                  {/* লিস্টের মাঝখানে পতাকা এবং দেশের নাম */}
                  <div className="hidden md:flex items-center gap-3">
                     <img src={getFlagURL(leader.country)} alt="flag" className="w-5 h-3.5 object-cover rounded-sm" />
                     <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">{getCountryName(leader.country)}</span>
                  </div>

                  <div className="text-right text-green-500 font-black text-sm md:text-lg">{leader.points} pts</div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Leaderboard;