"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Terminal, Github, Twitter, Linkedin, ShieldCheck, Mail, Cpu, Globe, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    operations: [
      { name: 'Terminal Lab', href: '/terminal' },
      { name: 'Exploit DB', href: '/exploits' },
      { name: 'Vulnerability Scan', href: '/services' },
      { name: 'Academy', href: '/academy' },
    ],
    protocols: [
      { name: 'Privacy Policy', href: '/policy' },
      { name: 'Responsible Disclosure', href: '/policy' },
      { name: 'Terms of Service', href: '/policy' },
      { name: 'Disclaimer', href: '/policy' },
    ],
    identity: [
      { name: 'Who Am I', href: '/about' },
      { name: 'HoyZeroTest', href: '/hoyzerotest' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Hacker Login', href: '/hacker-login' },
    ]
  };

  return (
    <footer className="relative bg-black border-t border-green-500/10 pt-16 pb-8 overflow-hidden">
      
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/30 group-hover:bg-green-500 transition-all">
                <Terminal size={20} className="text-green-500 group-hover:text-black" /> 
              </div>
              <span className="text-xl font-bold font-mono tracking-tighter">
                <span className="text-green-500">ZER0DAY</span>
                <span className="text-white ml-1 underline decoration-green-500">TEST</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              We build digital firewalls. Our sole goal is to protect your assets in the modern cyber battlefield.
            </p>
            <div className="flex gap-4">
               {[
                 { icon: <Github size={18} />, href: '#' },
                 { icon: <Twitter size={18} />, href: '#' },
                 { icon: <Linkedin size={18} />, href: '#' },
                 { icon: <Globe size={18} />, href: '#' }
               ].map((social, i) => (
                 <Link key={i} href={social.href} className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-gray-500 hover:text-green-500 hover:border-green-500/30 transition-all">
                   {social.icon}
                 </Link>
               ))}
            </div>
          </div>

          {/* Column 2: Operations */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
               <Cpu size={14} className="text-green-900" /> Operations
            </h4>
            <ul className="space-y-4">
              {footerLinks.operations.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 text-sm hover:text-green-500 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-green-500 transition-all group-hover:w-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Protocols */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
               <ShieldCheck size={14} className="text-green-900" /> Protocols
            </h4>
            <ul className="space-y-4">
              {footerLinks.protocols.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 text-sm hover:text-green-500 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-green-500 transition-all group-hover:w-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/Direct Line */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs flex items-center gap-2">
               <Zap size={14} className="text-green-900" /> Direct Line
            </h4>
            <p className="text-gray-600 text-xs mb-6">
              Subscribe to our secure newsletter to get the latest exploit updates.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="root@email.com" 
                className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-green-500/50 outline-none transition-all"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-green-600 text-black rounded-lg hover:bg-green-500 transition-all">
                <Zap size={16} />
              </button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-[10px] font-mono text-gray-700 uppercase">
               <Mail size={12} /> secure@zerodaytest.com
            </div>
          </div>

        </div>

        {/* Bottom Bar: System Status & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] font-mono text-gray-600">
             <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> SYSTEM: ONLINE</span>
             <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> NODES: 256/256</span>
             <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> SECURE_TUNNEL: ENABLED</span>
          </div>
          
          <div className="text-[10px] font-mono text-gray-700 uppercase tracking-widest text-center">
             All Bytes Reserved © {currentYear} | ZeroDay Test Lab v2.4.0
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;