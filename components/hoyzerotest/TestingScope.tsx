// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Globe, Smartphone, Network, Server, Cpu, Layers, Target, Terminal } from 'lucide-react';

// const scopes = [
//   {
//     title: "Web Applications",
//     desc: "Custom business logic and API endpoint audit with OWASP Top 10 vulnerabilities.",
//     icon: <Globe size={22} />,
//     tag: "External Scope"
//   },
//   {
//     title: "Mobile Ecosystem",
//     desc: "Source code analysis and runtime manipulation testing of Android and iOS applications.",
//     icon: <Smartphone size={22} />,
//     tag: "Application Lab"
//   },
//   {
//     title: "Cloud Infrastructure",
//     desc: "AWS, Azure and GCP configuration audits and cloud-native security assessments.",
//     icon: <Layers size={22} />,
//     tag: "Cloud Perimeter"
//   },
//   {
//     title: "Network Nodes",
//     desc: "Internal and external network scanning, router, switch and firewall bypass tests.",
//     icon: <Network size={22} />,
//     tag: "Infra Audit"
//   },
//   {
//     title: "IoT & Hardware",
//     desc: "Firmware analysis and hardware hacking of smart devices and embedded systems.",
//     icon: <Cpu size={22} />,
//     tag: "Hardware Lab"
//   },
//   {
//     title: "Database Integrity",
//     desc: "Database injection protection and sensitive data encryption layer verification.",
//     icon: <Server size={22} />,
//     tag: "Data Vault"
//   }
// ];

// const TestingScope = () => {
//   return (
//     <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
//       {/* Background Matrix Grid */}
//       <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
//            style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
//       </div>

//       <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
//           <div className="max-w-2xl">
//             <motion.div 
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
//             >
//               <Target size={14} /> [ TARGET_PERIMETER_SCOPE ]
//             </motion.div>
//             <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
//               Our Elite <span className="text-green-500">Services</span>
//             </h2>
//             <p className="text-gray-500 text-sm md:text-base font-light">
//               Our penetration testing modules are designed to cover every inch of your digital ecosystem.
//             </p>
//           </div>
          
//           <div className="hidden lg:block">
//              <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-2xl flex items-center gap-3">
//                 <Terminal size={20} className="text-green-900" />
//                 <span className="text-[10px] font-mono text-green-700 uppercase">Audit Depth: Maximum</span>
//              </div>
//           </div>
//         </div>

//         {/* Scope Cards Grid - ৩ কলামে প্রফেশনাল এলাইনমেন্ট */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {scopes.map((scope, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               className="group p-8 bg-zinc-900/20 border border-white/5 rounded-3xl hover:border-green-500/30 transition-all duration-300 relative"
//             >
//               {/* Tactical ID Background */}
//               <div className="absolute top-6 right-8 text-green-500/5 font-mono text-4xl font-black group-hover:opacity-20 transition-opacity">
//                 0{idx + 1}
//               </div>

//               <div className="w-12 h-12 flex items-center justify-center bg-green-500/10 text-green-500 rounded-xl mb-6 group-hover:bg-green-500 group-hover:text-black transition-all">
//                 {scope.icon}
//               </div>

//               <span className="text-[9px] font-mono text-green-800 bg-green-500/5 px-2 py-0.5 rounded border border-green-500/10 uppercase mb-4 inline-block">
//                 {scope.tag}
//               </span>

//               <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors uppercase tracking-tight">
//                 {scope.title}
//               </h3>

//               <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
//                 {scope.desc}
//               </p>

//               {/* Decorative Scan Animation Bar */}
//               <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Tactical Footer Message */}
//         <div className="mt-16 flex justify-center">
//            <motion.div 
//              initial={{ opacity: 0 }}
//              whileInView={{ opacity: 1 }}
//              className="inline-flex items-center gap-4 px-6 py-3 bg-zinc-900/50 border border-white/5 rounded-full"
//            >
//               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
//               <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
//                 All testing is conducted within <span className="text-green-600">Authorized Boundaries</span> only.
//               </p>
//            </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default TestingScope;



"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Bug, ShieldCheck, UserCheck, Activity, Lock, FileText, Target, Terminal } from 'lucide-react';

const services = [
  {
    title: "Managed Bug Bounty Programs",
    desc: "Outcome-driven security testing powered by a vetted global community of ethical hackers. You pay only for verified, impactful vulnerabilities—no noise, no wasted effort.",
    icon: <Bug size={24} />,
    tag: "Outcome-Driven"
  },
  {
    title: "Vulnerability Disclosure Program (VDP)",
    desc: "A compliant, secure channel that enables researchers to report vulnerabilities responsibly, protecting your organization while fostering ethical collaboration.",
    icon: <ShieldCheck size={24} />,
    tag: "Responsible Disclosure"
  },
  {
    title: "Expert Triage & Validation",
    desc: "Every submission is reviewed by our in-house security specialists to eliminate false positives and deliver clear, reproducible findings to your engineering teams.",
    icon: <UserCheck size={24} />,
    tag: "Zero Noise"
  },
  {
    title: "Continuous Attack Surface Monitoring",
    desc: "Ongoing assessment of exposed assets to identify new risks as your infrastructure evolves—beyond one-time audits.",
    icon: <Activity size={24} />,
    tag: "24/7 Monitoring"
  },
  {
    title: "Private & Targeted Testing",
    desc: "Invite-only programs tailored to sensitive systems, regulatory environments, or high-risk assets requiring controlled disclosure.",
    icon: <Lock size={24} />,
    tag: "Confidential Ops"
  },
  {
    title: "Compliance-Ready Reporting",
    desc: "Executive and technical reports aligned with international standards to support audits, risk management, and remediation tracking.",
    icon: <FileText size={24} />,
    tag: "Audit-Ready"
  }
];

const TestingScope = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
            >
              <Target size={14} /> [ STRATEGIC_SECURITY_MODUELS ]
            </motion.div>
            <h2 className="text-4xl lg:text-7xl font-bold text-white mb-4">
              Our Elite <span className="text-green-500">Services</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-light">
              We provide world-class offensive security solutions to protect your organization from modern cyber threats.
            </p>
          </div>
          
          <div className="hidden lg:block">
             <div className="p-4 bg-zinc-900/30 border border-green-500/20 rounded-2xl flex items-center gap-3 backdrop-blur-md">
                <Terminal size={20} className="text-green-900" />
                <span className="text-[10px] font-mono text-green-700 uppercase">Operational Status: Optimal</span>
             </div>
          </div>
        </div>

        {/* Services Grid - ৩ কলামে চমৎকার কার্ড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] hover:border-green-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Tactical ID Background */}
              <div className="absolute top-6 right-8 text-green-500/5 font-mono text-5xl font-black group-hover:opacity-10 transition-opacity">
                0{idx + 1}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 flex items-center justify-center bg-green-500/5 text-green-500 rounded-2xl mb-8 group-hover:bg-green-500 group-hover:text-black transition-all duration-500">
                {item.icon}
              </div>

              {/* Tag Badge */}
              <span className="text-[9px] font-mono text-green-800 bg-green-500/5 px-2.5 py-1 rounded border border-green-500/10 uppercase mb-4 inline-block tracking-widest">
                {item.tag}
              </span>

              {/* Title & Description */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors uppercase tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {item.desc}
              </p>

              {/* Bottom Decorative Scan Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-green-500/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Global Compliance Footer Message */}
        <div className="mt-16 flex justify-center">
           <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="inline-flex items-center gap-4 px-8 py-3 bg-zinc-900/50 border border-white/5 rounded-full"
           >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
              <p className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase tracking-[0.3em]">
                All operations are <span className="text-green-700">ISO 27001</span> and <span className="text-green-700">SOC 2</span> Compliant
              </p>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default TestingScope;