"use client";
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Binary, Search, Network, Zap, PackageSearch } from 'lucide-react';

const toolsList = [
  {
    category: "Web Infiltration",
    tools: ["Burp Suite Pro", "Nmap", "SQLmap", "Nikto", "GoBuster"],
    icon: <Search size={22} />,
    color: "text-green-500"
  },
  {
    category: "Network & Wireless",
    tools: ["Metasploit", "Wireshark", "Aircrack-ng", "Bettercap"],
    icon: <Network size={22} />,
    color: "text-blue-500"
  },
  {
    category: "Reverse & Exploit",
    tools: ["Ghidra", "OllyDbg", "GDB", "Radare2", "Python"],
    icon: <Binary size={22} />,
    color: "text-purple-500"
  },
  {
    category: "OSINT & Forensic",
    tools: ["Maltego", "Sherlock", "Autopsy", "John The Ripper"],
    icon: <PackageSearch size={22} />,
    color: "text-orange-500"
  }
];

const ToolsWillLearn = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
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
              <Terminal size={14} /> [ TOOL_SYLLABUS_OVERVIEW ]
            </motion.div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
              The Hacker's <span className="text-green-500">Arsenal</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              We don't just teach you theory, but also teach you hands-on, professional use of these industry-standard high-end tools.
            </p>
          </div>
          
          <div className="flex gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
             <Cpu size={40} className="text-green-900" />
             <Shield size={40} className="text-green-900" />
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {toolsList.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/20 transition-all duration-500"
            >
              {/* Floating Decoration */}
              <div className="absolute top-4 right-6 text-green-900/10 group-hover:text-green-500/10 transition-colors">
                <Zap size={40} />
              </div>

              <div className={`w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl mb-8 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 ${cat.color}`}>
                {cat.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest group-hover:text-green-400 transition-colors">
                {cat.category}
              </h3>

              {/* Tools Chips List */}
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-[10px] font-mono px-3 py-1.5 bg-black border border-white/5 text-gray-500 rounded-lg group-hover:border-green-500/30 group-hover:text-gray-300 transition-all"
                  >
                    <span className="text-green-900 mr-1">$</span> {tool}
                  </span>
                ))}
              </div>

              {/* Animated Scan Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Note Bottom */}
        <div className="mt-16 text-center">
           <p className="text-[10px] font-mono text-gray-700 uppercase tracking-[0.3em] flex items-center justify-center gap-4">
              <span className="w-10 h-[1px] bg-gray-900"></span>
              All licenses for premium tools are provided within the <span className="text-green-900">Lab Environment</span>
              <span className="w-10 h-[1px] bg-gray-900"></span>
           </p>
        </div>

      </div>
    </section>
  );
};

export default ToolsWillLearn;