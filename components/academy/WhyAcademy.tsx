"use client";
import { motion } from 'framer-motion';
import { Database, Cpu, Users, Award, ShieldAlert, Zap, Binary, Monitor } from 'lucide-react';

const advantages = [
  {
    title: "Real-World Labs",
    desc: "Not boring theory, we have a 100% hands-on simulation environment where you will practice attacks on real systems.",
    icon: <Monitor size={24} />,
    tag: "Simulation_Active"
  },
  {
    title: "Zero-Day Content",
    desc: "We will teach you not old bugs, but the latest zero-day exploits and techniques that hit the market yesterday.",
    icon: <Zap size={24} />,
    tag: "Intel_Current"
  },
  {
    title: "Elite Mentorship",
    desc: "Our trainers are not just teachers, they are professional bug-bounty hunters and security researchers.",
    icon: <Users size={24} />,
    tag: "Pro_Directives"
  },
  {
    title: "Valid Credentials",
    desc: "At the end of each lab and course, we will provide you with an industry-standard digital certificate that is verified.",
    icon: <Award size={24} />,
    tag: "Authenticated"
  },
  {
    title: "Arsenal Access",
    desc: "We have a huge collection or arsenal of custom hacking tools and paid software for our members.",
    icon: <Binary size={24} />,
    tag: "Toolbox_Unlocked"
  },
  {
    title: "24/7 Intel Support",
    desc: "You can get direct help from experts on our Discord and forum for any problem, anytime.",
    icon: <Database size={24} />,
    tag: "Node_Support"
  }
];

const WhyAcademy = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <ShieldAlert size={14} /> [ WHY_TRAIN_WITH_US? ]
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Operational <span className="text-green-500 font-mono italic">Advantages</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            We don't believe in rigid syllabus. Each of our modules is designed with the goal of creating a skilled cybersecurity specialist.
          </p>
        </div>

        {/* Advantages Grid - ৩ কলামে চমৎকারভাবে সাজানো */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Animated Glow on Hover */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-700 pointer-events-none"></div>

              {/* Tag Badge */}
              <div className="mb-6 flex justify-between items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 text-green-500 rounded-xl group-hover:bg-green-500 group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <span className="text-[8px] font-mono text-gray-600 border border-white/10 px-2 py-1 rounded uppercase group-hover:border-green-500/30 transition-all">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-green-500/10 group-hover:border-green-500/40 transition-all rounded-br-xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Global Network Visual (Bottom) */}
        <div className="mt-20 py-8 border-y border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 text-xs font-mono text-gray-500"><Zap size={14}/> HIGH_SPEED_LABS</div>
           <div className="flex items-center gap-2 text-xs font-mono text-gray-500"><Cpu size={14}/> DISTRIBUTED_NODES</div>
           <div className="flex items-center gap-2 text-xs font-mono text-gray-500"><Database size={14}/> SECURE_REPO</div>
           <div className="flex items-center gap-2 text-xs font-mono text-gray-500"><Users size={14}/> GLOBAL_COMMUNITY</div>
        </div>

      </div>
    </section>
  );
};

export default WhyAcademy;