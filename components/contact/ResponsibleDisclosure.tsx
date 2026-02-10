"use client";
import { motion } from 'framer-motion';
import { Bug, ShieldCheck, Award, Key, Terminal, AlertCircle, FileLock } from 'lucide-react';

const disclosurePoints = [
  {
    title: "Scope of Vulnerability",
    desc: "Only services under the *.zerodaytest.com domain will fall under the testing scope.",
    icon: <Bug size={22} />
  },
  {
    title: "Safe Harbor",
    desc: "If you report a bug in accordance with our policy, we will not take any legal action against you.",
    icon: <ShieldCheck size={22} />
  },
  {
    title: "Hall of Fame",
    desc: "You will be placed in our global 'Hall of Fame' for reporting valid and critical bugs.",
    icon: <Award size={22} />
  }
];

const ResponsibleDisclosure = () => {
  return (
    <section className="relative py-10 lg:py-20 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <AlertCircle size={14} className="animate-pulse" /> [ BUG_BOUNTY_RECEPTION_NODE ]
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
            Responsible <br /> <span className="text-green-500 font-mono italic">Disclosure</span>
          </h2>
          <p className="text-gray-500 max-w-2xl text-sm md:text-base font-light">
            We encourage ethical testing and responsible bug reporting. You can also become our Certified Contributor by following our protocol.
          </p>
        </div>

        {/* Disclosure Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {disclosurePoints.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-zinc-950/40 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-500 relative"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl mb-8 group-hover:bg-green-500 group-hover:text-black transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight group-hover:text-green-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
              
              {/* Corner Tag */}
              <div className="absolute top-4 right-6 text-[8px] font-mono text-gray-700 uppercase tracking-widest">
                Protocol_v2
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Key Section (PGP Key Box) */}
        <div className="mt-16 bg-zinc-900/30 border border-green-500/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-[0.02]">
              <FileLock size={200} />
           </div>

           <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                 <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-500/10 text-green-500 rounded-lg">
                       <Key size={20} />
                    </div>
                    <h4 className="text-white font-bold uppercase tracking-widest text-sm">Security PGP Key</h4>
                 </div>
                 <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed font-mono">
                    Encrypt your messages using our PGP public key for highly sensitive reports.
                 </p>
                 <div className="p-4 bg-black/60 border border-white/5 rounded-xl font-mono text-[10px] text-green-900 break-all select-all cursor-copy hover:border-green-500/30 transition-all">
                    -----BEGIN PGP PUBLIC KEY BLOCK-----<br/>
                    mQINBGN6A...[REDACTED_BY_ZERODAY]...D92AK<br/>
                    Key ID: 0x882AF12 | Fingerprint: EBAD 4582 9912<br/>
                    -----END PGP PUBLIC KEY BLOCK-----
                 </div>
              </div>

              <div className="flex flex-col items-center lg:items-end">
                 <div className="p-6 border border-white/5 bg-zinc-950/50 rounded-2xl text-center lg:text-right w-full lg:w-fit">
                    <p className="text-[10px] font-mono text-gray-600 uppercase mb-2">Bounty Status</p>
                    <p className="text-green-500 font-black text-2xl uppercase tracking-tighter">Open for Reports</p>
                    <div className="mt-4 flex justify-center lg:justify-end gap-2">
                       {[1,2,3,4].map(i => <div key={i} className="w-4 h-1 bg-green-900 rounded-full"></div>)}
                    </div>
                 </div>
                 <button className="mt-8 w-full lg:w-auto px-10 py-4 bg-white/5 hover:bg-green-600 border border-white/10 hover:border-green-600 text-white hover:text-black font-black rounded-xl text-xs transition-all uppercase tracking-widest flex items-center justify-center gap-2">
                    <Terminal size={16} /> READ_FULL_DISCLOSURE_POLICY
                 </button>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ResponsibleDisclosure;