"use client";
import { motion } from 'framer-motion';
import { Bell, History, RefreshCcw, FileClock, Rss, Terminal } from 'lucide-react';

const updateLogs = [
  { version: "v2.4.0", date: "FEB 2024", change: "Responsible Disclosure Bounty updated." },
  { version: "v2.3.1", date: "DEC 2023", change: "Privacy encryption upgraded to RSA-4096." },
  { version: "v2.2.0", date: "OCT 2023", change: "Cookies and Tracking Beacon policy refined." }
];

const PolicyUpdates = () => {
  return (
    <section className="relative bg-black py-10 lg:py-15 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Policy Update Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
              <RefreshCcw size={14} className="animate-spin-slow" /> [ PROTOCOL_REVISION_LOG ]
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Policy <br /> <span className="text-green-500">Updates</span>
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed font-light">
              As technology changes, our security protocols and policies are updated. In case of any major changes, we inform users through notifications on our homepage or via email.
            </p>

            <div className="space-y-4">
               <div className="flex items-start gap-4 p-4 bg-zinc-900/30 border border-white/5 rounded-2xl">
                  <Bell size={20} className="text-green-500 mt-1" />
                  <div>
                     <h4 className="text-white font-bold text-sm">Notification System</h4>
                     <p className="text-xs text-gray-500">In case of important changes, alerts are given on our dashboard or newsletter 7 days in advance.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 p-4 bg-zinc-900/30 border border-white/5 rounded-2xl">
                  <Rss size={20} className="text-green-500 mt-1" />
                  <div>
                     <h4 className="text-white font-bold text-sm">Automated Feed</h4>
                     <p className="text-xs text-gray-500">Developers can track policy updates by subscribing to our API or RSS feed.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Version History Log (Hacker Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-zinc-900/20 border border-green-500/10 rounded-3xl p-8 backdrop-blur-md relative"
          >
             {/* Header of the Log Box */}
             <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 text-green-700 font-mono text-[10px]">
                <span className="flex items-center gap-2"><History size={12} /> COMMIT_HISTORY</span>
                <span>TOTAL_REVISIONS: 24</span>
             </div>

             <div className="space-y-8 relative">
                {/* Vertical Line for Timeline */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-green-500/20"></div>

                {updateLogs.map((log, index) => (
                   <div key={index} className="relative pl-8 group">
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-black border-2 border-green-500/40 group-hover:border-green-500 transition-colors z-10"></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                         <span className="text-green-500 font-mono text-xs font-bold">{log.version}</span>
                         <span className="text-gray-600 font-mono text-[10px] uppercase flex items-center gap-1">
                            <FileClock size={10} /> {log.date}
                         </span>
                      </div>
                      <p className="text-gray-500 text-xs font-light group-hover:text-gray-300 transition-colors">
                         {log.change}
                      </p>
                   </div>
                ))}
             </div>

             {/* Terminal Input Decoration */}
             <div className="mt-10 p-3 bg-black/50 rounded-lg border border-white/5 font-mono text-[10px] text-green-900 flex items-center gap-2">
                <span className="animate-pulse">_</span> root@z-test:~$ tail -f /var/log/policy_updates
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PolicyUpdates;