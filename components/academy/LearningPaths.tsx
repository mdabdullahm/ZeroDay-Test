"use client";
import { motion } from 'framer-motion';
import { Globe, ShieldAlert, Smartphone, Binary, ChevronRight, Clock, BookOpen, Target } from 'lucide-react';

const paths = [
  {
    title: "Web Infiltration",
    level: "Beginner to Pro",
    duration: "12 Weeks",
    lessons: "45+",
    icon: <Globe size={24} />,
    color: "from-green-500/20",
    modules: ["HTTP Fundamentals", "OWASP Top 10", "Business Logic Bugs", "API Security"]
  },
  {
    title: "Network Breaching",
    level: "Intermediate",
    duration: "10 Weeks",
    lessons: "38+",
    icon: <Target size={24} />,
    color: "from-blue-500/20",
    modules: ["Active Directory", "Internal Networks", "Pivoting Techniques", "Post-Exploitation"]
  },
  {
    title: "Mobile App Security",
    level: "Intermediate",
    duration: "8 Weeks",
    lessons: "30+",
    icon: <Smartphone size={24} />,
    color: "from-purple-500/20",
    modules: ["Android/iOS Static", "Runtime Manipulation", "Frida & Objection", "Secure Coding"]
  },
  {
    title: "Binary & Malware",
    level: "Advanced",
    duration: "14 Weeks",
    lessons: "55+",
    icon: <Binary size={24} />,
    color: "from-red-500/20",
    modules: ["Buffer Overflows", "Reverse Engineering", "Malware Analysis", "Kernel Exploits"]
  }
];

const LearningPaths = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Matrix Grid Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <Target size={14} /> [ TARGET_LEARNING_TRACKS ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
              Operational <span className="text-green-500">Tracks</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light">
              Choose the right path according to your goals. Each track is designed to take you from zero to hero.
            </p>
          </div>
          
          <div className="hidden lg:block p-4 border border-green-500/10 bg-green-500/5 rounded-2xl">
             <div className="flex items-center gap-2 text-[10px] font-mono text-green-700">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                PATH_GENERATOR: READY
             </div>
          </div>
        </div>

        {/* Tracks Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {paths.map((path, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col bg-zinc-950/40 border border-white/5 rounded-[2rem] p-8 hover:border-green-500/30 transition-all duration-500"
            >
              {/* Floating Path Highlight */}
              <div className={`absolute inset-0 bg-gradient-to-br ${path.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]`}></div>

              {/* Icon & Label */}
              <div className="relative z-10 mb-8 flex justify-between items-start">
                <div className="w-14 h-14 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl border border-green-500/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                  {path.icon}
                </div>
                <span className="text-[8px] font-mono text-gray-600 bg-white/5 px-2 py-1 rounded-lg uppercase tracking-widest border border-white/5 group-hover:text-white transition-colors">
                  {path.level}
                </span>
              </div>

              {/* Title & Stats */}
              <div className="relative z-10 mb-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                  {path.title}
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase">
                   <span className="flex items-center gap-1"><Clock size={10} /> {path.duration}</span>
                   <span className="flex items-center gap-1"><BookOpen size={10} /> {path.lessons} Units</span>
                </div>
              </div>

              {/* Module List Snippet */}
              <div className="relative z-10 flex-1 space-y-3 mb-8">
                 {path.modules.map((mod, midx) => (
                   <div key={midx} className="flex items-center gap-2 text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors">
                      <span className="w-1 h-1 bg-green-500/30 rounded-full"></span>
                      {mod}
                   </div>
                 ))}
              </div>

              {/* CTA Button Inside Card */}
              <div className="relative z-10 pt-6 border-t border-white/5 mt-auto">
                 <button className="w-full flex items-center justify-between group/btn text-xs font-bold text-white hover:text-green-500 transition-all">
                    EXPLORE_TRACK 
                    <div className="p-2 bg-white/5 rounded-lg group-hover/btn:bg-green-500 group-hover/btn:text-black transition-all">
                       <ChevronRight size={14} />
                    </div>
                 </button>
              </div>

              {/* Decorative Scan Line */}
              <div className="absolute top-0 left-0 w-[1px] h-0 bg-green-500/40 group-hover:h-full transition-all duration-1000"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LearningPaths;