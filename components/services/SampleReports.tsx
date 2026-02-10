"use client";
import { motion } from 'framer-motion';
import { FileText, ShieldCheck, EyeOff, Video, Lock, Zap, Terminal, Download } from 'lucide-react';

const deliverables = [
  {
    title: "Executive Summary",
    desc: "A high-level report for non-technical management that highlights the overall security risk of your business.",
    icon: <FileText size={24} />,
    format: "PDF (Encrypted)"
  },
  {
    title: "Technical Vulnerability Log",
    desc: "Detailed reports for developers that include the severity, impact, and technical details of each bug.",
    icon: <Terminal size={24} />,
    format: "JSON / PDF"
  },
  {
    title: "PoC Video Demos",
    desc: "We provide screen-recorded video proof of how to exploit each critical bug.",
    icon: <Video size={24} />,
    format: "MP4 (Secure Link)"
  },
  {
    title: "Remediation Roadmap",
    desc: "A step-by-step guideline and code snippet on how to fix the identified errors.",
    icon: <ShieldCheck size={24} />,
    format: "Interactive Guide"
  }
];

const SampleReports = () => {
  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <EyeOff size={14} /> [ CLASSIFIED_INTELLIGENCE_OUTPUT ]
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tighter">
              Audit <span className="text-green-500">Deliverables</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light">
              At the end of our testing, you will receive a set of professional reports that will help you secure your system to the next level. All files are delivered with PGP encryption.
            </p>
          </div>

          {/* Download Sample Button Visual */}
          <button className="group relative px-8 py-4 bg-zinc-900 border border-green-500/20 rounded-2xl overflow-hidden transition-all hover:border-green-500/50 shadow-2xl">
             <div className="relative z-10 flex items-center gap-3">
                <div className="p-2 bg-green-500 text-black rounded-lg group-hover:scale-110 transition-transform">
                   <Download size={18} />
                </div>
                <span className="text-xs font-black text-white uppercase tracking-widest">Download_Sample_Report</span>
             </div>
             {/* Holographic light effect */}
             <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-green-500/5 to-transparent group-hover:left-[100%] transition-all duration-1000"></div>
          </button>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-[2rem] hover:border-green-500/30 transition-all duration-500 text-center"
            >
              {/* Report Format Badge */}
              <div className="absolute top-4 right-6 text-[8px] font-mono text-gray-700 border border-white/5 px-2 py-0.5 rounded uppercase tracking-tighter group-hover:text-green-500 transition-colors">
                {item.format}
              </div>

              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white/5 text-gray-500 rounded-2xl mb-8 group-hover:bg-green-500 group-hover:text-black group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors uppercase tracking-tight leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Decorative Scan Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-green-500/50 group-hover:w-[70%] transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Tactical Security Notice */}
        <div className="mt-16 p-8 bg-zinc-900/20 border border-green-900/10 rounded-[2.5rem] relative overflow-hidden">
           <div className="absolute top-0 left-0 w-1 h-full bg-green-900/20"></div>
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
              <div className="flex items-center gap-5">
                 <div className="w-14 h-14 bg-black border border-white/5 rounded-2xl flex items-center justify-center text-green-800">
                    <Lock size={28} />
                 </div>
                 <div>
                    <h4 className="text-white font-bold uppercase text-sm tracking-widest">End-to-End Encryption</h4>
                    <p className="text-xs text-gray-600 font-mono mt-1">REPORTS ARE SIGNED WITH RSA-4096 PRIVATE KEY</p>
                 </div>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-mono text-green-900 uppercase">
                 <Zap size={14} className="animate-pulse" /> [ Transmission_Security: MAXIMUM ]
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default SampleReports;