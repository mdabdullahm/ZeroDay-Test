"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Zap, Globe, Shield, Terminal, Star, User, ChevronRight, Hash } from 'lucide-react';

interface Leader {
  rank: number;
  name: string;
  username: string;
  avatar: string | null;
  country: string | null;
  points: number;
}

const AllTimeLeaderboard = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        // mode=history ব্যবহার করে অল-টাইম ডাটা আনা হচ্ছে
        const response = await fetch('https://zero-day-test-nine.vercel.app/api/public/leaderboard?mode=history&limit=10');
        const data = await response.json();
        
        if (data && Array.isArray(data.leaders)) {
          setLeaders(data.leaders);
        }
      } catch (error) {
        console.error("History Sync Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return (
    <div className="py-20 text-center font-mono text-green-500 animate-pulse">
      &gt; DECRYPTING_ALL_TIME_LEGENDS...
    </div>
  );

  if (leaders.length === 0) return null;

  const topThree = leaders.slice(0, 3);
  const theRest = leaders.slice(3);

  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
            <Hash size={14} /> [ PERSISTENT_RECOGNITION_DATABASE ]
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold text-white uppercase tracking-tighter">
            All Time <span className="text-green-500 font-mono italic">Legends</span>
          </h2>
          <p className="text-gray-500 max-w-xl text-sm font-light mt-4 italic">
            "যাঁরা এই প্ল্যাটফর্মের প্রতিটি বাধার দেয়াল ভেঙে নতুন রেকর্ড গড়েছেন।"
          </p>
        </div>

        {/* --- TOP 3 PODIUM SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-end">
          {topThree.map((leader, index) => (
            <motion.div
              key={leader.rank}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border flex flex-col items-center text-center transition-all duration-500 ${
                index === 0 
                ? 'bg-yellow-500/5 border-yellow-500/30 md:scale-110 md:-translate-y-6 z-20 shadow-[0_0_50px_rgba(234,179,8,0.1)]' 
                : 'bg-zinc-950/40 border-white/5 z-10'
              }`}
            >
              {/* Rank Icon */}
              <div className={`absolute -top-5 w-10 h-10 rounded-full flex items-center justify-center font-black border-2 ${
                 index === 0 ? 'bg-yellow-500 border-yellow-200 text-black shadow-[0_0_15px_#eab308]' :
                 index === 1 ? 'bg-gray-400 border-white text-black' :
                 'bg-orange-700 border-orange-400 text-white'
              }`}>
                {leader.rank}
              </div>

              <div className="relative mb-6">
                 <div className={`w-24 h-24 rounded-full border-2 p-1 overflow-hidden ${index === 0 ? 'border-yellow-500' : 'border-zinc-800'}`}>
                    {leader.avatar ? <img src={leader.avatar} className="w-full h-full rounded-full object-cover" /> : <User size={40} className="w-full h-full text-gray-800" />}
                 </div>
                 {index === 0 && <Star className="absolute -right-2 -top-2 text-yellow-500 fill-current animate-pulse" size={24} />}
              </div>

              <h3 className={`text-xl font-bold uppercase tracking-tight mb-1 ${index === 0 ? 'text-yellow-500' : 'text-white'}`}>
                {leader.name}
              </h3>
              <p className="text-[10px] font-mono text-gray-500 mb-6 italic">@{leader.username}</p>

              <div className="px-6 py-2 bg-black/50 border border-white/5 rounded-full flex items-center gap-3">
                 <div className="flex items-center gap-1">
                    <Globe size={10} className="text-gray-600" />
                    <span className="text-[10px] text-gray-400 font-bold uppercase">{leader.country || "Intl"}</span>
                 </div>
                 <div className="w-[1px] h-3 bg-zinc-800"></div>
                 <div className="flex items-center gap-1">
                    <Zap size={10} className="text-green-500" />
                    <span className="text-[10px] text-white font-black">{leader.points} PTS</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- LIST TABLE SECTION (RANK 4-10) --- */}
        <div className="bg-zinc-950/40 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-sm">
           <div className="p-6 md:px-10 border-b border-white/5 flex justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-white/[0.02]">
              <span>Researcher_Identity</span>
              <div className="flex gap-12 md:gap-24">
                 <span>Location</span>
                 <span>Accumulated_Points</span>
              </div>
           </div>
           
           <div className="divide-y divide-white/5">
              {theRest.map((leader, index) => (
                <div key={leader.rank} className="p-6 md:px-10 flex items-center justify-between group hover:bg-green-500/5 transition-all">
                   <div className="flex items-center gap-6">
                      <span className="text-xs font-mono text-gray-700 group-hover:text-green-900 transition-colors">#{leader.rank}</span>
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center overflow-hidden">
                            {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" /> : <User size={18} className="text-gray-700" />}
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-white group-hover:text-green-400 transition-colors uppercase">{leader.name}</h4>
                            <p className="text-[9px] font-mono text-gray-600 uppercase">@{leader.username}</p>
                         </div>
                      </div>
                   </div>

                   <div className="flex gap-12 md:gap-24 items-center">
                      <div className="text-[10px] font-mono text-gray-500 uppercase flex items-center gap-2">
                         <Globe size={12} className="text-zinc-800" /> {leader.country || "Global"}
                      </div>
                      <div className="text-sm font-black text-green-500 font-mono tracking-tighter flex items-center gap-2">
                         {leader.points} <span className="text-[9px] text-gray-700 group-hover:text-green-900">PTS</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Global Footer Meta */}
        <div className="mt-12 p-5 border-l-2 border-green-500/20 bg-zinc-900/10 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <Terminal size={18} className="text-green-900" />
              <p className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">Database_Revision: v2.4.0-Stable | Last_Sync: JUST_NOW</p>
           </div>
           <button className="flex items-center gap-2 text-[10px] font-black text-white hover:text-green-500 transition-colors uppercase">
              Full_Archive <ChevronRight size={14} />
           </button>
        </div>

      </div>
    </section>
  );
};

export default AllTimeLeaderboard;