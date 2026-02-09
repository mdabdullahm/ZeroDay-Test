"use client";
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Terminal, Zap, ShieldCheck, PlayCircle, Trophy } from 'lucide-react';

const AcademyHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-black text-white">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* Blue & Green Ambient Glows */}
      <div className="absolute top-0 left-[-5%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 mb-8">
              <GraduationCap size={14} className="text-green-500" />
              <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">[ TRAINING_FACILITY_ACTIVE ]</span>
            </div>

            <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              Master The <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 drop-shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                Cyber Arts
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl font-light leading-relaxed">
             From basic networking to advanced offensive security—learn everything with real-time labs and zero-day exploits. We'll prepare you to be the cyber warrior of tomorrow.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-10 py-5 bg-green-600 hover:bg-green-500 text-black font-black rounded-2xl flex items-center gap-3 transition-all shadow-[0_0_25px_rgba(34,197,94,0.4)] hover:-translate-y-1 active:scale-95 text-sm uppercase">
                START_LEARNING <Zap size={18} />
              </button>
              <button className="px-10 py-5 border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 text-white font-bold rounded-2xl flex items-center gap-3 transition-all backdrop-blur-md text-sm uppercase group">
                VIEW_TRACKS <PlayCircle size={18} className="text-gray-500 group-hover:text-green-500" />
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 flex items-center gap-8 border-t border-white/5 pt-8">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">50+</span>
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Active Labs</span>
               </div>
               <div className="w-[1px] h-10 bg-white/5"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">10k+</span>
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Researchers</span>
               </div>
               <div className="w-[1px] h-10 bg-white/5"></div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">15+</span>
                  <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Master Paths</span>
               </div>
            </div>
          </motion.div>

          {/* Right Side: High-Tech Training Card Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Holographic Box */}
            <div className="relative z-10 bg-zinc-900/40 border border-green-500/20 rounded-[2.5rem] p-8 backdrop-blur-xl shadow-2xl overflow-hidden group">
               
               {/* Animated Scan Line */}
               <motion.div 
                 animate={{ top: ['0%', '100%', '0%'] }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute left-0 w-full h-[2px] bg-green-500/20 z-20 pointer-events-none"
               ></motion.div>

               <div className="flex items-center justify-between mb-10">
                  <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                  </div>
                  <span className="text-[10px] font-mono text-green-700 tracking-tighter">SIMULATION_STATION_01</span>
               </div>

               <div className="space-y-6">
                  {/* Skill Progress Mockup */}
                  {[
                    { name: 'Offensive Security', val: '85%' },
                    { name: 'Reverse Engineering', val: '62%' },
                    { name: 'Network Protocol', val: '94%' }
                  ].map((skill, i) => (
                    <div key={i}>
                       <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-2 uppercase">
                          <span>{skill.name}</span>
                          <span className="text-green-500">{skill.val}</span>
                       </div>
                       <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: skill.val }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-green-600 to-emerald-400 shadow-[0_0_10px_#22c55e]"
                          />
                       </div>
                    </div>
                  ))}
               </div>

               {/* Central Achievement Visual */}
               <div className="mt-12 p-6 bg-black/40 border border-white/5 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-green-500/10 text-green-500 rounded-xl">
                        <Trophy size={24} />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-white">Elite Badge Ready</p>
                        <p className="text-[9px] font-mono text-gray-600 uppercase">Exam status: Authorized</p>
                     </div>
                  </div>
                  <ShieldCheck size={24} className="text-green-900 opacity-30" />
               </div>
            </div>

            {/* Floating Terminal Snippet */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-zinc-900 border border-white/10 p-5 rounded-2xl shadow-2xl hidden md:block"
            >
               <Terminal size={24} className="text-green-500 mb-2" />
               <p className="text-[10px] font-mono text-green-800">
                 $ ./exploit --init <br />
                 $ target: laboratory_node <br />
                 <span className="text-white">Status: Access_Success</span>
               </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AcademyHero;