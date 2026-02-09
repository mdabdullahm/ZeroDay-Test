"use client";
import { motion } from 'framer-motion';
import { Terminal, ShieldAlert, Zap, ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-black text-white">
      
      {/* Background Decor - Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 mb-6">
            <ShieldAlert size={14} className="text-green-500" />
            <span className="text-[10px] font-mono font-bold text-green-500 uppercase tracking-widest">System Status: Secure</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-semibold leading-tight mb-6">
            Master the Art<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Cyber Warfare
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-xl font-light">
            ZeroDay Test provides cutting-edge penetration testing tools and an advanced learning environment for modern security researchers. Stay ahead of threats.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              Get Started <ChevronRight size={18} />
            </button>
            <button className="px-8 py-4 border border-green-500/30 hover:bg-green-500/5 text-green-500 font-bold rounded-xl transition-all">
              View Labs
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 border-t border-green-500/10 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Exploits</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">99%</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Success Rate</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Monitoring</p>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Animated Terminal Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <Terminal size={12} /> bash — 80x24
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <p className="text-green-500 mb-2">root@zeroday:~# <span className="text-white">initializing bypass_protocol...</span></p>
              <p className="text-blue-400 mb-2">[INFO] <span className="text-gray-400">Target identified: 192.168.1.105</span></p>
              <p className="text-yellow-500 mb-2">[WARN] <span className="text-gray-400">Firewall detected. Attempting injection...</span></p>
              <div className="flex gap-2 mb-2">
                <p className="text-green-500">Progress:</p>
                <div className="flex-1 bg-white/5 h-2 self-center rounded-full overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: '85%' }}
                     transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                     className="h-full bg-green-500"
                   ></motion.div>
                </div>
                <p className="text-green-500">85%</p>
              </div>
              <p className="text-green-400 font-bold animate-pulse mt-4">&gt; Access Granted_</p>
            </div>
          </div>

          {/* Decorative Floating Icon */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 p-4 bg-green-600 rounded-2xl shadow-xl z-20"
          >
            <Zap size={24} className="text-black" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;