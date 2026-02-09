"use client";
import { motion } from 'framer-motion';
import { Quote, Star, MessageSquare, Terminal, ShieldCheck } from 'lucide-react';

const reviews = [
  {
    alias: "Ghost_Kernel",
    role: "Security Lead",
    text: "The ZeroDay Test reports are amazing. They've caught some incredible bugs!",
    rating: 5,
    status: "ENCRYPTED"
  },
  {
    alias: "Binary_Surfer",
    role: "Bug Hunter",
    text: "Their academy modules are just level up! The Linux course turned my career around.",
    rating: 5,
    status: "DECODED"
  },
  {
    alias: "Alpha_Seeker",
    role: "DevSecOps",
    text: "The automated scanners are fast and the results are precise. Highly recommended!",
    rating: 5,
    status: "VERIFIED"
  },
  {
    alias: "Root_Bypass",
    role: "CTF Player",
    text: "Best training environment for advanced exploits. ZeroDay is the real deal.",
    rating: 4,
    status: "AUTHORIZED"
  },
  {
    alias: "Cipher_Null",
    role: "CTO",
    text: "Our payment gateway is now much more secure than before for their hardening services.",
    rating: 5,
    status: "SECURE"
  },
  {
    alias: "Kernel_Panic",
    role: "Researcher",
    text: "Deep analysis and detailed documentation. A must-have for every security team.",
    rating: 5,
    status: "VERIFIED"
  }
];

const Testimonials = () => {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="relative bg-black py-10 lg:py-15 overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      <div className="relative z-10">
        
        {/* Header */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <MessageSquare size={14} /> [ Intercepting_Live_Feedback ]
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            System <span className="text-green-500">Reviews</span>
          </h2>
        </div>

        {/* --- INFINITE SCROLLING MARQUEE --- */}
        <div className="relative flex overflow-hidden group">
          <motion.div 
            className="flex whitespace-nowrap gap-6"
            animate={{ 
              x: ["0%", "-50%"] 
            }}
            transition={{ 
              ease: "linear", 
              duration: 25, 
              repeat: Infinity 
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[400px] flex-shrink-0 bg-zinc-950/40 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-green-500/20 transition-all duration-300"
              >
                {/* Card Header Style */}
                <div className="flex justify-between items-center mb-6 text-[9px] font-mono text-gray-600 border-b border-white/5 pb-4">
                  <span className="flex items-center gap-1 uppercase">
                     <Terminal size={10} /> {review.status}
                  </span>
                  <span className="text-green-900">NODE_0{index + 1}</span>
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="flex gap-1 mb-4">
                     {[...Array(5)].map((_, i) => (
                       <Star 
                         key={i} 
                         size={12} 
                         className={`${i < review.rating ? 'text-green-500 fill-green-500' : 'text-gray-800'}`} 
                       />
                     ))}
                  </div>

                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-8 italic whitespace-normal">
                    "{review.text}"
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                      <span className="text-green-500 font-black text-sm uppercase">
                        {review.alias.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">
                        {review.alias}
                      </h4>
                      <p className="text-[9px] text-gray-600 font-mono uppercase">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* মাউস নিলে যেন হালকা থেমে যায় বা স্লো হয় তার জন্য CSS (Optional) */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;