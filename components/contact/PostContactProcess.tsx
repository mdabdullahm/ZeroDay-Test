"use client";
import { motion } from 'framer-motion';
import { MailCheck, Search, Handshake, Rocket, ArrowRight, Terminal, Cpu } from 'lucide-react';

const steps = [
  {
    title: "Initial Triage",
    time: "T + 02 Hours",
    desc: "Once your message reaches our secure inbox, our team performs an initial review.",
    icon: <MailCheck size={22} />,
    status: "RECEIVED"
  },
  {
    title: "Expert Analysis",
    time: "T + 06 Hours",
    desc: "Our specialized researchers analyze your request in depth according to the content.",
    icon: <Search size={22} />,
    status: "ANALYZING"
  },
  {
    title: "Secure Handshake",
    time: "T + 12 Hours",
    desc: "We set up a secure meeting or encrypted chat session with you to discuss the details.",
    icon: <Handshake size={22} />,
    status: "CONNECTING"
  },
  {
    title: "Ops Deployment",
    time: "T + 24 Hours",
    desc: "If everything is in order, we start working on the project or bug report and move to the operational phase.",
    icon: <Rocket size={22} />,
    status: "LAUNCHED"
  }
];

const PostContactProcess = () => {
  return (
    <section className="relative py-10 lg:py-20 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <Cpu size={14} /> [ POST_UPLINK_PROCEDURE ]
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            What Happens <br /> <span className="text-green-500 font-mono italic">Next?</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-light">
            After establishing the connection, our operational team will process your inquiry in the following 4 steps.
          </p>
        </div>

        {/* Process Steps Loop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500 text-center"
            >
              {/* Animated Progress Arrow (Desktop Only) */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20 text-green-900 group-hover:text-green-500 transition-colors">
                  <ArrowRight size={24} />
                </div>
              )}

              {/* Icon Container */}
              <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center bg-white/5 text-green-500 rounded-2xl border border-white/10 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(34,197,94,0.05)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-[10px] font-mono text-green-800 mb-4 uppercase tracking-widest">{item.time}</p>
              
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Status Badge */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-center gap-2">
                 <div className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? 'bg-green-500 animate-pulse' : 'bg-zinc-800'}`}></div>
                 <span className="text-[9px] font-mono text-gray-700 uppercase tracking-widest group-hover:text-green-900 transition-colors">
                    Protocol_{item.status}
                 </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Info Bar */}
        <div className="mt-16 p-5 border border-green-500/10 bg-green-500/5 rounded-2xl flex items-center justify-center gap-4">
           <Terminal size={18} className="text-green-900" />
           <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
             Our team maintains a <span className="text-green-700">98.2% response rate</span> within the first 24 hours.
           </p>
        </div>

      </div>
    </section>
  );
};

export default PostContactProcess;