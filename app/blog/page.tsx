"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Clock, ArrowRight, BookOpen, 
  Terminal, AlertCircle, Loader2
} from 'lucide-react';
import Link from 'next/link';

export interface IByteCapsuleBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  publishedAt: string | null;
  createdAt: string;
}

const BASE_URL = "https://zero-day-test-nine.vercel.app";

export default function BlogListPage() {
  // ২. এখানেও নতুন ইন্টারফেস নামটি ব্যবহার করুন
  const [blogs, setBlogs] = useState<IByteCapsuleBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/api/public/blogs?page=1&limit=9`, {
          cache: 'no-store'
        });
        
        if (!res.ok) throw new Error("Failed to connect to Byte Capsule Intelligence Feed.");
        
        const data = await res.json();
        setBlogs(data.posts || []);
      } catch (err) {
        // ৩. এখানে explicit type (unknown) সরিয়ে দেওয়া হয়েছে (Catch Error Fix)
        const message = err instanceof Error ? err.message : "An unexpected protocol error occurred.";
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  // --- এরর স্টেট UI ---
  if (error) return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="text-center space-y-4 p-10 border border-red-500/20 bg-red-500/5 rounded-[3rem] backdrop-blur-xl max-w-lg">
        <AlertCircle className="text-red-500 mx-auto" size={48} />
        <h2 className="text-white font-bold uppercase tracking-tighter text-xl">System_Link_Failure</h2>
        <p className="text-red-400 font-mono uppercase tracking-widest text-[10px] leading-relaxed">
          {error}
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-8 py-3 bg-red-500 text-black font-black rounded-full text-[10px] uppercase hover:bg-white transition-colors"
        >
          Re-establish_Link
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black pt-32 pb-20 overflow-x-hidden">
      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="mb-20 space-y-4 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-green-500 font-mono text-[10px] tracking-[0.4em] uppercase"
            >
                <Terminal size={14} /> Intelligence_Feed_v1.0
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-[0.9]"
            >
                OUR <span className="text-green-500">PROTOCOL</span> LOGS
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 max-w-xl font-mono text-[11px] leading-relaxed uppercase pt-4"
            >
                Decrypted security insights, vulnerability research, and technical deployment strategies 
                from the Byte Capsule Core Team.
            </motion.p>
        </div>

        {/* Blog Grid Area */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            // Skeleton Loading UI
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="h-[450px] rounded-[3rem] bg-white/5 border border-white/10 animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            ))
          ) : (
            blogs.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-zinc-950/50 border border-white/5 rounded-[3rem] overflow-hidden hover:border-green-500/40 transition-all duration-500 backdrop-blur-sm"
              >
                {/* Featured Image */}
                <div className="aspect-[16/11] overflow-hidden relative">
                   {post.coverImage ? (
                     <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                      />
                   ) : (
                     <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                        <BookOpen size={48} className="text-zinc-800" />
                     </div>
                   )}
                   
                   {/* Badge */}
                   <div className="absolute top-6 left-6">
                      <div className="px-4 py-1.5 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-mono text-white uppercase tracking-widest">
                          Security_Report
                        </span>
                      </div>
                   </div>
                </div>

                {/* Content Body */}
                <div className="p-10 space-y-5">
                  <div className="flex items-center gap-5 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><Calendar size={12} className="text-green-900" /> {new Date(post.publishedAt || post.createdAt).toLocaleDateString()}</span>
                    <span className="flex items-center gap-2"><Clock size={12} className="text-green-900" /> 5_MIN_READ</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-green-400 transition-colors uppercase tracking-tighter italic">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-3 font-mono uppercase opacity-80">
                    {post.excerpt || "No summary available for this encrypted protocol log. Access full documentation for details."}
                  </p>

                  <div className="pt-4">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center gap-3 text-[10px] font-black text-green-500 uppercase tracking-[0.2em] group/btn"
                    >
                      <span>DECRYPT_LOG</span> 
                      <div className="p-2 rounded-full border border-green-500/20 group-hover/btn:bg-green-500 group-hover/btn:text-black transition-all">
                        <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          )}
        </div>

        {/* Empty State */}
        {!loading && blogs.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-40 text-center border border-dashed border-white/10 rounded-[4rem] bg-white/5"
            >
                <Loader2 className="mx-auto text-green-900 mb-4 animate-spin" size={32} />
                <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em]">Waiting for core data transmission...</p>
            </motion.div>
        )}
      </div>

      {/* Footer System Status */}
      <div className="max-w-full mx-auto px-6 lg:px-20 mt-20">
         <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
         <div className="py-8 flex justify-between items-center text-[9px] font-mono text-gray-600 uppercase tracking-widest">
            <span>Terminal: BC-INTEL-FEED</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> 
              System Online
            </span>
         </div>
      </div>
    </div>
  );
}