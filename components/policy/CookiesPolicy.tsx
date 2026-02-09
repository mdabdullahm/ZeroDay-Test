"use client";
import { motion } from 'framer-motion';
import { Cookie, Settings, Database, Activity, ShieldCheck, Terminal } from 'lucide-react';

const cookieTypes = [
  {
    title: "Essential Fragments",
    desc: "These cookies are essential for the system's core protocols to function. Without them, login or secure sessions will not work.",
    icon: <Settings size={20} />,
    ttl: "Session Based"
  },
  {
    title: "Security Beacons",
    desc: "These cookies are used to detect bot attacks and unauthorized access. This keeps your account secure.",
    icon: <ShieldCheck size={20} />,
    ttl: "365 Days"
  },
  {
    title: "Preference Nodes",
    desc: "These are stored in local storage to remember your preferred theme (e.g. green or dark) and language settings.",
    icon: <Database size={20} />,
    ttl: "30 Days"
  }
];

const CookiesPolicy = () => {
  return (
    <section className="relative bg-black py-10 lg:py-20 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <Cookie size={14} /> [ COOKIE_MANIFEST_ANALYSIS ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Cookies & <span className="text-green-500">Fragments</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light">
             We place small data fragments, or cookies, in your browser so that our security modules can correctly identify you.
            </p>
          </div>
          
          <div className="hidden lg:block p-4 border border-green-500/10 bg-green-500/5 rounded-xl text-[10px] font-mono text-green-700">
             <p className="flex items-center gap-2"><Activity size={10} /> SCANNING_LOCAL_STORAGE...</p>
             <p className="mt-1">STATUS: OPTIMIZED</p>
          </div>
        </div>

        {/* Cookies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cookieTypes.map((cookie, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-zinc-900/20 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-300 relative"
            >
              {/* Floating Decoration */}
              <div className="absolute top-6 right-8 text-green-900 opacity-20 group-hover:opacity-100 transition-opacity">
                 <Terminal size={16} />
              </div>

              <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 text-green-500 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
                {cookie.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                {cookie.title}
              </h3>

              <p className="text-gray-500 text-xs leading-relaxed mb-8">
                {cookie.desc}
              </p>

              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                 <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest">Expiration (TTL)</span>
                 <span className="text-[10px] font-mono text-green-600">{cookie.ttl}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Control Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-6 bg-zinc-900/50 border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-xs text-gray-400 font-mono">
                You can block all "Fragments" from your browser settings if you wish, but this may interfere with some security protocols.
              </p>
           </div>
           <button className="whitespace-nowrap px-6 py-2 border border-green-500/30 text-green-500 text-xs font-bold rounded-lg hover:bg-green-500 hover:text-black transition-all font-mono uppercase">
             Manage_Preferences
           </button>
        </motion.div>

      </div>
    </section>
  );
};

export default CookiesPolicy;