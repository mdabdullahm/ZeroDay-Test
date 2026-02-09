"use client";
import { motion } from 'framer-motion';
import { Building2, Users, Code2, ShieldAlert, UserCheck, Terminal } from 'lucide-react';

const audiences = [
  {
    title: "Enterprises",
    desc: "Large companies that want to secure their digital infrastructure and customer data at the highest level.",
    icon: <Building2 size={24} />,
    access: "Level_3"
  },
  {
    title: "Independent Researchers",
    desc: "Those who are interested in working and learning about offensive security and advanced hacking techniques.",
    icon: <Users size={24} />,
    access: "Level_2"
  },
  {
    title: "Developers & DevOps",
    desc: "Those who want to write secure code and protect their API or cloud system from the start.",
    icon: <Code2 size={24} />,
    access: "Level_1"
  },
  {
    title: "Security Agencies",
    desc: "Government or private security firms that want to use our intelligence data to monitor threats.",
    icon: <ShieldAlert size={24} />,
    access: "Level_4"
  }
];

const TargetAudience = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <UserCheck size={14} /> [ USER_AUTHORIZATION_CRITERIA ]
          </motion.div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Authorized <span className="text-green-500 font-mono italic">Users</span>
          </h2>
          <div className="w-32 h-1 bg-green-500/20 rounded-full"></div>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-3xl overflow-hidden hover:border-green-500/30 transition-all duration-500"
            >
              {/* Access Level Badge */}
              <div className="absolute top-4 right-6 text-[8px] font-mono text-green-800 border border-green-900/30 px-2 py-0.5 rounded uppercase tracking-tighter group-hover:bg-green-500 group-hover:text-black transition-all">
                {item.access}
              </div>

              <div className="w-14 h-14 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl mb-8 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Decorative Console Line */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[9px] font-mono text-gray-700">
                 <Terminal size={10} /> ACCESS: GRANTED
              </div>
              
              {/* Animated Glow on Hover */}
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-colors duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Security Compliance Bar */}
        <div className="mt-16 text-center">
           <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest leading-loose">
             Our system is correct for use. <span className="text-green-700 underline">Authorization</span>and <span className="text-green-700 underline">Ethical Commitment</span> It is mandatory to stay.
           </p>
        </div>

      </div>
    </section>
  );
};

export default TargetAudience;