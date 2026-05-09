// "use client";

// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Trophy, User, Loader2, AlertCircle, 
//   Terminal, Zap, Globe, Search 
// } from 'lucide-react';

// // ১. এপিআই ডেটা ইন্টারফেস (ডকুমেন্টেশন অনুযায়ী)
// interface Leader {
//   rank: number;
//   name: string;
//   username: string;
//   avatar: string | null;
//   country: string | null;
//   points: number;
// }

// const Leaderboard = () => {
//   const [leaders, setLeaders] = useState<Leader[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // ২. ফিল্টার স্টেট (overall, current_year, history)
//   const [mode, setMode] = useState<'overall' | 'current_year' | 'history'>('overall');
//   const [year] = useState(2026); 
//   const [quarter, setQuarter] = useState(1);

//   // ৩. হেল্পার ফাংশনসমূহ
//   const getFlagURL = (code: string | null) => {
//     const countryCode = code ? code.toLowerCase() : "bd";
//     return `https://flagcdn.com/w40/${countryCode}.png`;
//   };

//   const getCountryName = (code: string | null) => {
//     const countries: { [key: string]: string } = { 
//       "BD": "Bangladesh", "US": "United States", "IN": "India", 
//       "GB": "United Kingdom", "CA": "Canada", "DE": "Germany" 
//     };
//     return code ? (countries[code.toUpperCase()] || "International") : "Bangladesh";
//   };

//   // ৪. ডাইনামিক এপিআই ফেচিং
//   useEffect(() => {
//     const fetchLeaderboard = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // এপিআই কুয়েরি প্যারামিটার তৈরি
//         const queryParams = new URLSearchParams({
//           mode: mode,
//           limit: "20"
//         });

//         // যদি মোড 'overall' না হয়, তবেই বছর এবং কোয়ার্টার পাঠানো হবে
//         if (mode !== 'overall') {
//           queryParams.append('year', year.toString());
//           if (mode === 'current_year') {
//             queryParams.append('quarter', quarter.toString());
//           }
//         }

//         const response = await fetch(`/api/public/leaderboard?${queryParams.toString()}`, {
//           cache: 'no-store'
//         });

//         if (!response.ok) {
//           const errBody = await response.json();
//           throw new Error(errBody.error || "Mainframe_Sync_Error");
//         }

//         const data = await response.json();
//         if (data && Array.isArray(data.leaders)) {
//           setLeaders(data.leaders);
//         }
//       } catch (err: any) {
//         console.error("API_UPLINK_FAILURE:", err);
//         setError(err.message || "Establishing link failed.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchLeaderboard();
//   }, [mode, quarter, year]);

//   return (
//     <section className="relative py-16 bg-black overflow-hidden border-t border-green-500/5 min-h-screen selection:bg-green-500 selection:text-black font-sans">

//       {/* Background Matrix Decor */}
//       <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
//            style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
//       </div>

//       <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 w-full">

//         {/* --- HEADER --- */}
//         <div className="flex flex-col items-center text-center mb-16 relative">
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
//             <Trophy size={14} /> [ GLOBAL_HALL_OF_FAME ]
//           </motion.div>
//           <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-white">
//             TOP <span className="text-green-500 italic">RESEARCHERS</span>
//           </h2>
//         </div>

//         {/* --- CONTROL PANEL (ফিল্টারসমূহ) --- */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
//            {/* Mode Tabs */}
//            <div className="bg-zinc-900/50 p-1 rounded-2xl border border-white/5 flex flex-wrap gap-2 backdrop-blur-xl">
//               {(['overall', 'current_year', 'history'] as const).map((m) => (
//                 <button 
//                   key={m}
//                   onClick={() => setMode(m)}
//                   className={`px-6 py-2.5 rounded-xl font-mono text-[10px] uppercase transition-all duration-300 ${mode === m ? 'bg-green-600 text-black font-black' : 'text-gray-500 hover:text-white'}`}
//                 >
//                   {m === 'overall' ? 'All_Time' : m === 'current_year' ? 'Quarterly' : 'Yearly_History'}
//                 </button>
//               ))}
//            </div>

//            {/* Quarter Selector (শুধুমাত্র quarterly মোডে দেখাবে) */}
//            {mode === 'current_year' && (
//              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="bg-zinc-900/50 p-1 rounded-2xl border border-white/5 flex gap-1 backdrop-blur-xl">
//                 {[1, 2, 3, 4].map((q) => (
//                   <button 
//                     key={q}
//                     onClick={() => setQuarter(q)}
//                     className={`w-11 h-11 rounded-xl font-mono text-[10px] transition-all flex items-center justify-center ${quarter === q ? 'text-green-500 border border-green-500/30 bg-green-500/5 font-black' : 'text-gray-600 hover:text-gray-300'}`}
//                   >
//                     Q{q}
//                   </button>
//                 ))}
//              </motion.div>
//            )}
//         </div>

//         {/* --- DATA DISPLAY --- */}
//         <AnimatePresence mode="wait">
//           {loading ? (
//             <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-40 flex flex-col items-center">
//               <Loader2 className="text-green-500 animate-spin mb-4" size={40} />
//               <p className="font-mono text-green-900 text-[10px] uppercase tracking-[0.5em] animate-pulse">Establishing_Link...</p>
//             </motion.div>
//           ) : error ? (
//             <motion.div key="error" className="py-20 text-center flex flex-col items-center gap-4">
//                <AlertCircle className="text-red-500/50" size={48} />
//                <p className="text-red-500 font-mono text-xs uppercase tracking-widest italic">{error}</p>
//             </motion.div>
//           ) : leaders.length > 0 ? (
//             <motion.div key="data" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-16">

//               {/* Podium Section (Rank 1-3) */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto px-4">
//                 {/* 2nd Place */}
//                 {leaders[1] && (
//                   <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[3rem] text-center order-2 md:order-1 relative group hover:border-green-500/20 transition-all">
//                      <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6 block italic">RANK_02</span>
//                      <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-zinc-800 p-1 overflow-hidden">
//                         {leaders[1].avatar ? <img src={leaders[1].avatar} className="w-full h-full object-cover" alt="" /> : <User size={30} className="mx-auto mt-4 text-gray-700" />}
//                      </div>
//                      <h3 className="text-white font-bold uppercase text-sm mb-2">@{leaders[1].username}</h3>
//                      <p className="text-green-500 font-black text-2xl tracking-tighter">{leaders[1].points} PTS</p>
//                   </div>
//                 )}

//                 {/* 1st Place */}
//                 {leaders[0] && (
//                   <div className="bg-zinc-900/20 border border-green-500/30 p-10 rounded-[3.5rem] text-center order-1 md:order-2 relative z-10 scale-110 shadow-2xl">
//                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-black px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Global_Master</div>
//                      <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-6 block italic">RANK_01</span>
//                      <div className="w-28 h-28 mx-auto mb-6 rounded-full border-2 border-yellow-500 p-1">
//                         {leaders[0].avatar ? <img src={leaders[0].avatar} className="w-full h-full object-cover rounded-full" alt="" /> : <User size={40} className="mx-auto mt-6 text-gray-700" />}
//                      </div>
//                      <h3 className="text-white font-black uppercase text-lg mb-2">@{leaders[0].username}</h3>
//                      <p className="text-green-500 font-black text-4xl tracking-tighter">{leaders[0].points} PTS</p>
//                   </div>
//                 )}

//                 {/* 3rd Place */}
//                 {leaders[2] && (
//                   <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[3rem] text-center order-3 relative group hover:border-green-500/20 transition-all">
//                      <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6 block italic">RANK_03</span>
//                      <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-zinc-800 p-1 overflow-hidden">
//                         {leaders[2].avatar ? <img src={leaders[2].avatar} className="w-full h-full object-cover" alt="" /> : <User size={30} className="mx-auto mt-4 text-gray-700" />}
//                      </div>
//                      <h3 className="text-white font-bold uppercase text-sm mb-2">@{leaders[2].username}</h3>
//                      <p className="text-green-500 font-black text-2xl tracking-tighter">{leaders[2].points} PTS</p>
//                   </div>
//                 )}
//               </div>

//               {/* --- Full Ranking List (#4+) --- */}
//               <div className="bg-zinc-950/30 border border-white/5 rounded-[3rem] overflow-hidden max-w-5xl mx-auto backdrop-blur-sm shadow-2xl">
//                  <div className="p-4 md:p-8 space-y-3">
//                     {leaders.slice(3).map((leader) => (
//                       <div key={leader.username} className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-green-500/20 transition-all group">
//                         <div className="flex items-center gap-4 md:gap-6">
//                           <span className="text-zinc-600 font-mono text-xs w-6 italic">#{leader.rank < 10 ? `0${leader.rank}` : leader.rank}</span>
//                           <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-zinc-900 border border-white/5 shadow-inner">
//                              {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" alt="" /> : <User size={18} className="text-gray-700" />}
//                           </div>
//                           <div className="flex flex-col">
//                              <span className="text-gray-300 font-bold text-sm md:text-base uppercase group-hover:text-green-500 transition-colors">@{leader.username}</span>
//                              <span className="text-[8px] font-mono text-gray-600 uppercase tracking-tighter font-black italic">{leader.name}</span>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-4 md:gap-10">
//                            <div className="flex items-center gap-3 px-3 py-1.5 bg-white/5 rounded-full border border-white/5">
//                               <img src={getFlagURL(leader.country)} alt="" className="w-4 h-2.5 object-cover rounded-sm shadow-sm" />
//                               <span className="hidden sm:block text-[9px] font-mono text-gray-500 uppercase tracking-widest">{getCountryName(leader.country)}</span>
//                            </div>
//                            <div className="text-right min-w-[80px]">
//                               <span className="text-green-500 font-black text-lg md:text-xl tabular-nums tracking-tighter">{leader.points}</span>
//                               <span className="text-[8px] text-green-900 font-black ml-1 uppercase">pts</span>
//                            </div>
//                         </div>
//                       </div>
//                     ))}
//                  </div>
//               </div>
//             </motion.div>
//           ) : (
//             /* Empty State */
//             <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-40 text-center border border-dashed border-white/10 rounded-[4rem] bg-white/5 mx-auto max-w-3xl">
//                 <Terminal size={40} className="mx-auto text-green-900 mb-4" />
//                 <h3 className="text-white font-black uppercase tracking-widest text-lg italic">Node Activity: Empty</h3>
//                 <p className="text-gray-600 font-mono text-[10px] uppercase mt-2">
//                    Target: {mode === 'overall' ? 'Global_History' : mode === 'current_year' ? `2026_Q${quarter}` : 'Year_2026'} // Status: No_Transmission
//                 </p>
//                 <div className="mt-8 px-6 py-2 bg-green-500/10 border border-green-500/20 rounded-full inline-block">
//                    <span className="text-[9px] text-green-500 font-bold uppercase animate-pulse">Waiting for synchronization...</span>
//                 </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Footer Status Bar */}
//         <div className="mt-20 py-6 border-y border-white/5 flex justify-center items-center gap-8 group opacity-40">
//            <div className="flex items-center gap-2 text-[9px] font-mono text-gray-500 uppercase">
//               <Zap size={12} className="text-green-500" /> Latency: 14ms
//            </div>
//            <div className="w-1 h-1 rounded-full bg-green-900"></div>
//            <div className="flex items-center gap-2 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
//               <Globe size={12} className="text-green-500" /> Global Nodes Active
//            </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Leaderboard;






"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy, User, Loader2, AlertCircle,
  Terminal, Zap, Globe, Search
} from 'lucide-react';

// ১. এপিআই ডেটা ইন্টারফেস
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
  const [error, setError] = useState<string | null>(null);

  // ২. ফিল্টার স্টেট - ডিফল্ট 'overall' সেট করা হয়েছে
  const [mode, setMode] = useState<'overall' | 'current_year' | 'history'>('overall');
  const [year] = useState(2026);
  const [quarter, setQuarter] = useState(1);

  // ৩. হেল্পার ফাংশনসমূহ
  const getFlagURL = (code: string | null) => {
    const countryCode = code ? code.toLowerCase() : "bd";
    return `https://flagcdn.com/w40/${countryCode}.png`;
  };

  const getCountryName = (code: string | null) => {
    const countries: { [key: string]: string } = {
      "BD": "Bangladesh", "US": "United States", "IN": "India",
      "GB": "United Kingdom", "CA": "Canada", "DE": "Germany"
    };
    return code ? (countries[code.toUpperCase()] || "International") : "Bangladesh";
  };

  // ৪. ডাইনামিক এপিআই ফেচিং (নতুুন কন্ট্রাক্ট অনুযায়ী)
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        setLoading(true);
        setError(null);

        // কুয়েরি প্যারামিটার সেটআপ
        const queryParams = new URLSearchParams({
          mode: mode,
          limit: "20"
        });

        // যদি 'overall' না হয় তবেই বছর এবং কোয়ার্টার পাঠানো হবে
        if (mode !== 'overall') {
          queryParams.append('year', year.toString());
          if (mode === 'current_year') {
            queryParams.append('quarter', quarter.toString());
          }
        }

        const response = await fetch(`/api/public/leaderboard?${queryParams.toString()}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: 'no-store' // ব্যাকএন্ড রিকোয়ারমেন্ট অনুযায়ী fresh data নিশ্চিত করা হয়েছে
        });

        if (!response.ok) {
          const errBody = await response.json();
          throw new Error(errBody.error || "Mainframe_Sync_Error");
        }

        const data = await response.json();
        if (data && Array.isArray(data.leaders)) {
          setLeaders(data.leaders);
        }
      } catch (err: any) {
        console.error("API_UPLINK_FAILURE:", err);
        setError(err.message || "Establishing link failed.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [mode, quarter, year]);

  return (
    <section className="relative py-16 bg-black overflow-hidden border-t border-green-500/5 min-h-screen selection:bg-green-500 selection:text-black font-sans">

      {/* Background Matrix Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10 w-full">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16 relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
            <Trophy size={14} /> [ GLOBAL_HALL_OF_FAME ]
          </motion.div>
          <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-white italic">
            TOP <span className="text-green-500">RESEARCHERS</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm font-mono mt-4 uppercase tracking-widest opacity-60">
            Authorized Rankings // Points are computed via Shared Backend Protocol
          </p>
        </div>

        {/* --- CONTROL PANEL (ফিল্টারসমূহ) --- */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <div className="bg-zinc-900/50 p-1 rounded-2xl border border-white/5 flex flex-wrap gap-2 backdrop-blur-xl">
            {(['overall', 'current_year', 'history'] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-6 py-2.5 rounded-xl font-mono text-[10px] uppercase transition-all duration-300 ${mode === m ? 'bg-green-600 text-black font-black shadow-[0_0_20px_rgba(34,197,94,0.3)]' : 'text-gray-500 hover:text-white'}`}
              >
                {m === 'overall' ? 'All_Time' : m === 'current_year' ? 'Quarterly' : 'History'}
              </button>
            ))}
          </div>

          {mode === 'current_year' && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="bg-zinc-900/50 p-1 rounded-2xl border border-white/5 flex gap-1 backdrop-blur-xl">
              {[1, 2, 3, 4].map((q) => (
                <button
                  key={q}
                  onClick={() => setQuarter(q)}
                  className={`w-11 h-11 rounded-xl font-mono text-[10px] transition-all flex items-center justify-center ${quarter === q ? 'text-green-500 border border-green-500/30 bg-green-500/5 font-black' : 'text-gray-600 hover:text-gray-300'}`}
                >
                  Q{q}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* --- DATA DISPLAY --- */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="py-40 flex flex-col items-center">
              <Loader2 className="text-green-500 animate-spin mb-4" size={40} />
              <p className="font-mono text-green-900 text-[10px] uppercase tracking-[0.5em] animate-pulse">Syncing_Mainframe_Data...</p>
            </motion.div>
          ) : error ? (
            <motion.div key="error" className="py-20 text-center flex flex-col items-center gap-4">
              <AlertCircle className="text-red-500/50" size={48} />
              <p className="text-red-500 font-mono text-xs uppercase tracking-widest italic">{error}</p>
            </motion.div>
          ) : leaders.length > 0 ? (
            <motion.div key="data" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-16">

              {/* Podium (Top 3) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto px-4">
                {/* 2nd Place */}
                {leaders[1] && (
                  <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[3rem] text-center order-2 md:order-1 relative group hover:border-green-500/20 transition-all">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6 block italic">RANK_02</span>
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-zinc-800 p-1 overflow-hidden">
                      {leaders[1].avatar ? <img src={leaders[1].avatar} className="w-full h-full object-cover" alt="" /> : <User size={30} className="mx-auto mt-4 text-gray-700" />}
                    </div>
                    <h3 className="text-white font-bold uppercase text-sm mb-2">@{leaders[1].username}</h3>
                    <p className="text-green-500 font-black text-2xl tracking-tighter">{leaders[1].points} PTS</p>
                  </div>
                )}

                {/* 1st Place */}
                {leaders[0] && (
                  <div className="bg-zinc-900/20 border border-green-500/30 p-10 rounded-[3.5rem] text-center order-1 md:order-2 relative z-10 scale-110 shadow-2xl">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-black px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Global_Master</div>
                    <span className="text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-6 block italic">RANK_01</span>
                    <div className="w-28 h-28 mx-auto mb-6 rounded-full border-2 border-yellow-500 p-1">
                      {leaders[0].avatar ? <img src={leaders[0].avatar} className="w-full h-full object-cover rounded-full" alt="" /> : <User size={40} className="mx-auto mt-6 text-gray-700" />}
                    </div>
                    <h3 className="text-white font-black uppercase text-lg mb-2">@{leaders[0].username}</h3>
                    <p className="text-green-500 font-black text-4xl tracking-tighter">{leaders[0].points} PTS</p>
                  </div>
                )}

                {/* 3rd Place */}
                {leaders[2] && (
                  <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[3rem] text-center order-3 relative group hover:border-green-500/20 transition-all">
                    <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6 block italic">RANK_03</span>
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full border border-zinc-800 p-1 overflow-hidden">
                      {leaders[2].avatar ? <img src={leaders[2].avatar} className="w-full h-full object-cover" alt="" /> : <User size={30} className="mx-auto mt-4 text-gray-700" />}
                    </div>
                    <h3 className="text-white font-bold uppercase text-sm mb-2">@{leaders[2].username}</h3>
                    <p className="text-green-500 font-black text-2xl tracking-tighter">{leaders[2].points} PTS</p>
                  </div>
                )}
              </div>

              {/* --- Full Ranking List (#4+) --- */}
              <div className="bg-zinc-950/30 border border-white/5 rounded-[3rem] overflow-hidden max-w-5xl mx-auto backdrop-blur-sm shadow-2xl">
                <div className="p-4 md:p-8 space-y-3">
                  {leaders.slice(3).map((leader) => (
                    <div key={leader.username} className="flex items-center justify-between p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-green-500/20 transition-all group">
                      <div className="flex items-center gap-4 md:gap-6">
                        <span className="text-zinc-600 font-mono text-xs w-6 italic">#{leader.rank < 10 ? `0${leader.rank}` : leader.rank}</span>
                        <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center bg-zinc-900 border border-white/5 shadow-inner">
                          {leader.avatar ? <img src={leader.avatar} className="w-full h-full object-cover" alt="" /> : <User size={18} className="text-gray-700" />}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-gray-300 font-bold text-sm md:text-base uppercase group-hover:text-green-500 transition-colors">@{leader.username}</span>
                          <span className="text-[8px] font-mono text-gray-600 uppercase tracking-tighter font-black italic">{leader.name}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 md:gap-10">
                        <div className="flex items-center gap-3 px-3 py-1.5 bg-white/5 rounded-full border border-white/5">
                          <img src={getFlagURL(leader.country)} alt="" className="w-6 h-4 object-cover rounded-sm shadow-sm" />
                          <span className="hidden sm:block text-[9px] font-mono text-gray-500 uppercase tracking-widest">{getCountryName(leader.country)}</span>
                        </div>
                        {/* pts */}

                        <div className="text-right min-w-[80px]">
                          <span className="text-green-500 font-black text-lg md:text-xl tabular-nums tracking-tighter">{leader.points}</span>
                          <span className="text-[8px] text-green-900 font-black ml-1 uppercase">pts</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-40 text-center border border-dashed border-white/10 rounded-[4rem] bg-white/5 mx-auto max-w-3xl">
              <Terminal size={40} className="mx-auto text-green-900 mb-4" />
              <h3 className="text-white font-black uppercase tracking-widest text-lg italic">Node Activity: Empty</h3>
              <p className="text-gray-600 font-mono text-[10px] uppercase mt-2">
                Target: {mode === 'overall' ? 'Global_History' : mode === 'current_year' ? `2026_Q${quarter}` : 'Year_2026'} // Status: No_Transmission
              </p>
              <div className="mt-8 px-6 py-2 bg-green-500/10 border border-green-500/20 rounded-full inline-block">
                <span className="text-[9px] text-green-500 font-bold uppercase animate-pulse">Waiting for synchronization...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- SYSTEM FOOTER --- */}
        <div className="mt-20 py-6 border-y border-white/5 flex justify-center items-center gap-8 group opacity-40">
          <div className="flex items-center gap-2 text-[9px] font-mono text-gray-500 uppercase">
            <Zap size={12} className="text-green-500" /> Latency: 24ms
          </div>
          <div className="w-1 h-1 rounded-full bg-green-500"></div>
          <div className="flex items-center gap-2 text-[9px] font-mono text-gray-200 uppercase tracking-widest">
            <Globe size={12} className="text-green-500" /> Global Nodes Active
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;