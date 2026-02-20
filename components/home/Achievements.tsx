// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Award, BadgeCheck, Trophy, FileCheck, ShieldCheck, Zap } from 'lucide-react';

// const achievements = [
//   {
//     title: "OSCP Certified",
//     issuer: "Offensive Security",
//     id: "ID: OSCP-88291",
//     date: "2023",
//     icon: <ShieldCheck size={28} />,
//     color: "from-green-500/20"
//   },
//   {
//     title: "CEH Master",
//     issuer: "EC-Council",
//     id: "ID: CEH-V12-990",
//     date: "2022",
//     icon: <BadgeCheck size={28} />,
//     color: "from-blue-500/20"
//   },
//   {
//     title: "Bug Bounty Hunter",
//     issuer: "HackerOne / Bugcrowd",
//     id: "Top 1% Global",
//     date: "Active",
//     icon: <Trophy size={28} />,
//     color: "from-purple-500/20"
//   },
//   {
//     title: "Security+ Professional",
//     issuer: "CompTIA",
//     id: "ID: SEC-PL-552",
//     date: "2021",
//     icon: <FileCheck size={28} />,
//     color: "from-emerald-500/20"
//   }
// ];

// const Achievements = () => {
//   return (
//     <section className="relative bg-black py-12 lg:py-16 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
//       <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
//            style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
//       </div>

//       <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-12">
//           <motion.div 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-3 uppercase tracking-[0.5em]"
//           >
//             <Award size={14} /> [ Credentials_Authenticated ]
//           </motion.div>
//           <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
//             Accredited <span className="text-green-500">by</span>
//           </h2>
//           <div className="w-20 h-1 bg-green-500 mx-auto rounded-full opacity-30"></div>
//         </div>

//         {/* Achievements Grid - mobile 1grid, tablet 2grid, laptop 4grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {achievements.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="group relative p-8 bg-zinc-950/50 border border-white/5 rounded-2xl overflow-hidden hover:border-green-500/30 transition-all duration-500"
//             >
//               {/* Card Background Gradient Glow */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
//               {/* Holographic Verification Line */}
//               <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

//               <div className="relative z-10">
//                 <div className="w-14 h-14 flex items-center justify-center bg-green-500/10 text-green-500 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.1)]">
//                   {item.icon}
//                 </div>

//                 <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
//                   {item.title}
//                 </h3>

//                 <p className="text-gray-400 text-xs font-mono mb-4">
//                   {item.issuer}
//                 </p>

//                 <div className="space-y-2">
//                   <div className="flex justify-between items-center text-[10px] font-mono">
//                     <span className="text-gray-600 uppercase">Status</span>
//                     <span className="text-green-500 flex items-center gap-1">
//                       <Zap size={10} /> VERIFIED
//                     </span>
//                   </div>
//                   <div className="flex justify-between items-center text-[10px] font-mono">
//                     <span className="text-gray-600 uppercase">Year</span>
//                     <span className="text-gray-400">{item.date}</span>
//                   </div>
//                 </div>

//                 {/* Credential ID - Hacker Style */}
//                 <div className="mt-6 pt-4 border-t border-white/5">
//                    <p className="text-[9px] font-mono text-gray-700 tracking-tighter truncate">
//                      {item.id}
//                    </p>
//                 </div>
//               </div>

//               {/* Verified Stamp Effect */}
//               <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity rotate-[-15deg]">
//                  <Award size={100} className="text-white" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Achievements;


"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap } from 'lucide-react';

const accreditationData = [
  {
    name: "Global Inter Certification",
    logo: "/gic-logo.png", 
    id: "REG-0992-GIC"
  },
  {
    name: "IAS Accredited",
    logo: "/ias-logo.png", 
    id: "ACC-8812-IAS"
  },
  {
    name: "International Accreditation Forum",
    logo: "/iaf-logo.png", 
    id: "IAF-GLOBAL-007"
  }
];

const Achievements = () => {
  return (
    <section className="relative bg-black py-20 lg:py-28 overflow-hidden border-t border-green-500/10">
      
      {/* ১. ব্যাকগ্রাউন্ড ম্যাট্রিক্স গ্রিড (সাইটের সিগনেচার) */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* ২. হালকা নিওন আভা */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-green-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* ৩. টেকটিক্যাল হেডার */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-green-500/30 bg-green-500/5 mb-6"
          >
            <ShieldCheck size={14} className="text-green-500 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-[0.3em]">Validation_Nodes: ONLINE</span>
          </motion.div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter">
            Accredited <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">By</span>
          </h2>
          <p className="mt-4 text-gray-500 font-mono text-xs uppercase tracking-widest opacity-60">Verified Global Recognition Protocols</p>
        </div>

        {/* ৪. লোগো কার্ড গ্রিড (ছবির ডিজাইনে কিন্তু হ্যাকিং লুকে) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accreditationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* মেইন সাদা কার্ড (ছবির মতো) */}
              <div className="bg-white rounded-[2rem] p-10 h-72 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:-translate-y-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_20px_50px_rgba(34,197,94,0.2)]">
                
                {/* কার্ডের পেছনে হালকা হ্যাকার টেক্সচার */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[8px] p-4 break-all text-black leading-tight">
                  {Array(20).fill("SYSTEM_AUTH_0x99281_VERIFIED_PROTOCOL_").join(" ")}
                </div>

                {/* লোগো এরিয়া */}
                <div className="relative z-10 flex-1 flex items-center justify-center mb-6">
                  {/* লোগো না থাকলে আইকন দেখাবে */}
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="max-h-24 w-auto object-contain group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100"
                    onError={(e) => (e.currentTarget.style.display = 'none')}
                  />
                  {/* img na thakly icon dakaby */}
                  {/* <Award size={64} className="text-zinc-100 group-hover:text-green-500 transition-colors absolute -z-10 opacity-20" /> */}
                </div>

                {/* টাইটেল এরিয়া (ছবির মতো বোল্ড কালো টেক্সট) */}
                <div className="relative z-10 text-center border-t border-zinc-600 pt-6 w-full">
                  <h3 className="text-black font-black text-sm md:text-base leading-tight uppercase tracking-tight group-hover:text-green-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[9px] font-mono text-zinc-400 mt-2 tracking-widest">{item.id}</p>
                </div>
              </div>

              {/* কার্ডের নিচে নিওন গ্লো বার */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-green-500 rounded-full blur-[2px] transition-all duration-500 group-hover:w-2/3"></div>
            </motion.div>
          ))}
        </div>

        {/* ৫. সিকিউরিটি স্ট্যাটাস বার */}
        <div className="mt-20 py-6 border-y border-white/5 flex justify-center items-center gap-8 opacity-20 group">
           <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              <Zap size={12} className="text-green-500" /> Secure_Link_Established
           </div>
           <div className="w-1.5 h-1.5 rounded-full bg-green-900"></div>
           <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              <ShieldCheck size={12} className="text-green-500" /> Authentication: Level_4
           </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;