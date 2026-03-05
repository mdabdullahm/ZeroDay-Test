"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Star আইকনটি এখানে যুক্ত করা হয়েছে
import { Trophy, User, Zap, Globe, Terminal, Shield, Star } from 'lucide-react';

interface Leader {
  rank: number;
  name: string;
  username: string;
  avatar: string | null;
  country: string | null;
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

  if (loading) return (
    <div className="py-20 text-center font-mono text-green-500 animate-pulse">
      &gt; SYNCHRONIZING_RESEARCHER_DATABASE...
    </div>
  );

  if (leaders.length === 0) return null;

  const topThree = leaders.slice(0, 3);

  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
            <Trophy size={14} /> [ GLOBAL_HALL_OF_FAME ]
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold text-white uppercase tracking-tighter">
            Top <span className="text-green-500 font-mono italic">Researchers</span>
          </h2>
        </div>

        {/* Podium Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {topThree.map((leader, index) => (
            <motion.div
              key={leader.rank}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-[2.5rem] border flex flex-col items-center text-center transition-all duration-500 ${
                index === 0 
                ? 'bg-zinc-900/20 border-green-500/40 shadow-[0_0_40px_rgba(34,197,94,0.05)] md:scale-105' 
                : 'bg-zinc-950/40 border-white/5'
              }`}
            >
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${index === 0 ? 'text-yellow-500' : 'text-gray-500'}`}>
                {index === 0 ? '1ST PLACE' : index === 1 ? '2ND PLACE' : '3RD PLACE'}
              </span>

              <div className="relative mb-6">
                 <div className={`w-24 h-24 rounded-full border-2 p-1 overflow-hidden transition-all duration-500 ${index === 0 ? 'border-yellow-500' : 'border-zinc-800'}`}>
                    <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
                       {leader.avatar ? (
                         <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                       ) : (
                         <User size={40} className="text-gray-800" />
                       )}
                    </div>
                 </div>
                 {index === 0 && <div className="absolute -top-2 -right-2 text-yellow-500"><Star size={24} fill="currentColor" className="animate-pulse" /></div>}
              </div>

              <div className="mb-4">
                 <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-sm">🇧🇩</span>
                    <span className="text-gray-500 text-[10px] font-mono uppercase tracking-widest">{leader.country || "Bangladesh"}</span>
                 </div>
                 <h3 className="text-xl font-bold text-white uppercase tracking-tight">@{leader.username}</h3>
              </div>

              <p className="text-green-500 font-black text-3xl tracking-tighter">
                {leader.points} <span className="text-xs font-bold uppercase opacity-60">pts</span>
              </p>

              {index === 0 && (
                <div className="mt-6 text-yellow-500 drop-shadow-[0_0_10px_#eab30866]">
                   <Trophy size={48} strokeWidth={1.5} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Ranking List Table */}
        <div className="bg-[#050505] border border-white/5 rounded-3xl overflow-hidden shadow-2xl relative">
           <div className="p-6 md:px-10 border-b border-white/5 flex justify-between items-end">
              <div>
                 <h2 className="text-white text-lg md:text-xl font-black uppercase tracking-wider">Ranking</h2>
                 <p className="text-gray-600 text-[10px] md:text-xs mt-1">
                    Hunters ranked by points in Q1 2026 — {leaders.length} total
                 </p>
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                 Points
              </div>
           </div>

           <div className="p-4 md:p-6 space-y-3">
              {leaders.map((leader) => (
                <div
                  key={leader.rank}
                  className="flex items-center justify-between p-4 md:px-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:border-green-500/20 transition-all group"
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-gray-700 font-mono text-xs w-6">#{leader.rank}</span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-zinc-900 border border-white/10 overflow-hidden flex items-center justify-center">
                       {leader.avatar ? (
                         <img src={leader.avatar} alt={leader.name} className="w-full h-full object-cover" />
                       ) : (
                         <User size={20} className="text-gray-700" />
                       )}
                    </div>
                    <span className="text-gray-300 font-bold text-sm md:text-base group-hover:text-green-500 transition-colors">
                      @{leader.username}
                    </span>
                  </div>

                  <div className="hidden lg:flex items-center gap-3">
                     <span className="text-lg">🇧🇩</span>
                     <span className="text-gray-500 text-[10px] font-medium uppercase tracking-widest">{leader.country || "Bangladesh"}</span>
                  </div>

                  <div className="text-right">
                    <span className="text-green-500 font-black text-sm md:text-lg tracking-tighter">
                      {leader.points} pts
                    </span>
                  </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Leaderboard;