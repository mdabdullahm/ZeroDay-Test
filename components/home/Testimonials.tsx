// "use client";

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Star, Terminal, ShieldCheck } from 'lucide-react';

// // ১. ব্যাকএন্ড ডকুমেন্টেশন অনুযায়ী ইন্টারফেস
// interface Review {
//   id: string;
//   content: string;
//   rating: number | null;
//   createdAt: string;
//   organization: {
//     name: string;
//     logo: string | null;
//   };
// }

// const Testimonials = () => {
//   const [reviews, setReviews] = useState<Review[]>([]);
//   const [loading, setLoading] = useState(true);

//   // ২. সরাসরি আপনার ড্যাশবোর্ড এপিআই থেকে ডেটা ফেচ করা
//   useEffect(() => {
//     const fetchPublicReviews = async () => {
//       try {
//         // এই লিঙ্কটি সরাসরি ড্যাশবোর্ড থেকে রিভিউ নিয়ে আসবে
//         const response = await fetch('https://zt.zerodaytest.com/api/public/reviews');
//         const data = await response.json();

//         if (data && Array.isArray(data.reviews)) {
//           setReviews(data.reviews);
//         }
//       } catch (error) {
//         console.error("API Uplink Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPublicReviews();
//   }, []);

//   // ৩. এনিমেশনের জন্য ডাটা ডাবল করা (যদি ডাটা থাকে)
//   const duplicatedReviews = reviews.length > 0 ? [...reviews, ...reviews] : [];

//   if (loading) return (
//     <div className="py-20 text-center font-mono text-green-500 animate-pulse">
//       &gt; INFILTRATING_REVIEW_DATABASE...
//     </div>
//   );

//   // যদি কোনো অ্যাপ্রুভড রিভিউ না থাকে তবে এই সেকশন দেখাবে না
//   if (reviews.length === 0) return null;

//   return (
//     <section className="relative bg-black py-16 lg:py-24 overflow-hidden border-t border-green-500/5 mt-[-1px]">
//       {/* Background Decor */}
//       <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
//            style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
//       </div>

//       <div className="relative z-10">
//         <div className="max-w-full mx-auto px-6 lg:px-20 text-center mb-16">
//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]">
//             <ShieldCheck size={14} /> [ Verified_Client_Logs ]
//           </motion.div>
//           <h2 className="text-4xl lg:text-7xl font-bold text-white uppercase tracking-tighter">
//             System <span className="text-green-500 font-mono italic">Reviews</span>
//           </h2>
//         </div>

//         {/* INFINITE MARQUEE */}
//         <div className="relative flex overflow-hidden group">
//           <motion.div 
//             className="flex whitespace-nowrap gap-6"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{ ease: "linear", duration: 30, repeat: Infinity }}
//           >
//             {duplicatedReviews.map((review, index) => (
//               <div
//                 key={`${review.id}-${index}`}
//                 className="w-[350px] md:w-[450px] flex-shrink-0 bg-zinc-950/40 border border-white/5 rounded-[2.5rem] p-8 hover:border-green-500/30 transition-all duration-500"
//               >
//                 <div className="flex justify-between items-center mb-6 text-[9px] font-mono text-gray-600 border-b border-white/5 pb-4">
//                   <span className="flex items-center gap-1 uppercase">
//                      <Terminal size={10} /> STATUS: APPROVED
//                   </span>
//                   <span className="text-green-900 font-bold uppercase">
//                     {new Date(review.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>

//                 <div className="relative">
//                   <div className="flex gap-1 mb-4">
//                      {[...Array(5)].map((_, i) => (
//                        <Star key={i} size={12} className={`${i < (review.rating || 0) ? 'text-green-500 fill-green-500' : 'text-gray-800'}`} />
//                      ))}
//                   </div>

//                   <p className="text-gray-400 text-sm leading-relaxed mb-8 italic whitespace-normal font-light">
//                     "{review.content}"
//                   </p>

//                   <div className="flex items-center gap-4 border-t border-white/5 pt-6">
//                     <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
//                       {review.organization.logo ? (
//                         <img src={review.organization.logo} alt={review.organization.name} className="w-full h-full object-cover" />
//                       ) : (
//                         <span className="text-green-500 font-black text-lg">{review.organization.name.charAt(0)}</span>
//                       )}
//                     </div>
//                     <div>
//                       <h4 className="text-white font-bold text-sm uppercase tracking-tight">
//                         {review.organization.name}
//                       </h4>
//                       <p className="text-[9px] text-green-900 font-mono uppercase tracking-[0.2em]">Verified Partner</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
          
//           <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
//           <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;









"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Terminal, ShieldCheck, Loader2 } from 'lucide-react';

// ১. ডাটা ইন্টারফেস
interface Review {
  id: string;
  content: string;
  rating: number | null;
  createdAt: string;
  organization: {
    name: string;
    logo: string | null;
  };
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // ২. এপিআই ফেচ ফাংশন
  useEffect(() => {
    const fetchPublicReviews = async () => {
      try {
        // কোনো ডোমেইন নাম লাগবে না, রিরাইট পাথ ব্যবহার করুন
        const response = await fetch('/api/public/reviews', {
          cache: 'no-store' // ক্যাশ থেকে পুরনো ডাটা দেখাবে না
        });
        
        if (!response.ok) throw new Error("Connection failed");

        const data = await response.json();

        if (data && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        }
      } catch (error) {
        console.error("API Uplink Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPublicReviews();
  }, []);

  // ৩. এনিমেশনের জন্য ডাটা ডাবল করা
  const duplicatedReviews = reviews.length > 0 ? [...reviews, ...reviews] : [];

  // লোডিং স্টেট
  if (loading) return (
    <div className="py-32 flex flex-col items-center justify-center bg-black text-green-500 font-mono">
       <Loader2 className="animate-spin mb-4" size={32} />
       <p className="text-[10px] uppercase tracking-[0.5em]">Establishing_Secure_Link...</p>
    </div>
  );

  // ডাটা না থাকলে সেকশন দেখাবে না
  if (reviews.length === 0) return null;

  return (
    <section className="relative bg-black py-16 lg:py-24 overflow-hidden border-t border-green-500/5 mt-[-1px] selection:bg-green-500 selection:text-black">
      
      {/* Background Decor - Matrix Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '45px 45px' }}>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-full mx-auto px-6 lg:px-20 text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="flex items-center justify-center gap-2 text-green-500 font-mono text-[10px] mb-4 uppercase tracking-[0.4em]"
          >
            <ShieldCheck size={14} /> [ Verified_Intelligence_Logs ]
          </motion.div>
          <h2 className="text-4xl lg:text-7xl font-black text-white uppercase tracking-tighter">
            Core <span className="text-green-500 font-mono italic">Feedback</span>
          </h2>
        </div>

        {/* INFINITE MARQUEE CONTAINER */}
        <div className="relative flex overflow-hidden group">
          <motion.div 
            className="flex whitespace-nowrap gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {duplicatedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="w-[350px] md:w-[450px] flex-shrink-0 bg-zinc-950/50 border border-white/5 rounded-[2.5rem] p-8 backdrop-blur-xl hover:border-green-500/30 transition-all duration-500"
              >
                {/* Header Info */}
                <div className="flex justify-between items-center mb-6 text-[9px] font-mono text-gray-600 border-b border-white/5 pb-4">
                  <span className="flex items-center gap-1 uppercase">
                     <Terminal size={10} className="text-green-900" /> SOURCE: VERIFIED_PARTNER
                  </span>
                  <span className="text-green-900 font-bold uppercase">
                    {new Date(review.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="relative">
                  {/* Ratings */}
                  <div className="flex gap-1 mb-4">
                     {[...Array(5)].map((_, i) => (
                       <Star 
                        key={i} 
                        size={12} 
                        className={`${i < (review.rating || 0) ? 'text-green-500 fill-green-500' : 'text-zinc-800'}`} 
                       />
                     ))}
                  </div>

                  {/* Review Content */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 italic whitespace-normal font-light">
                    "{review.content}"
                  </p>

                  {/* Organization Info */}
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden">
                      {review.organization.logo ? (
                        <img 
                          src={review.organization.logo} 
                          alt={review.organization.name} 
                          className="w-full h-full object-cover opacity-80" 
                        />
                      ) : (
                        <span className="text-green-500 font-black text-lg">{review.organization.name.charAt(0)}</span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm uppercase tracking-tighter">
                        {review.organization.name}
                      </h4>
                      <p className="text-[9px] text-green-900 font-mono uppercase tracking-[0.2em]">Authorized Entity</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Edge Blur Faders */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;