"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, ShieldCheck, Share2, Printer, Loader2 } from 'lucide-react';

const BASE_URL = "https://zero-day-test-nine.vercel.app";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/public/blogs/${slug}`);
        const data = await res.json();
        setPost(data.post);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchDetail();
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="text-green-500 animate-spin" size={40} />
    </div>
  );

  if (!post) return <div className="text-white text-center pt-40 uppercase font-mono">Protocol Not Found (404)</div>;

  return (
    <div className="min-h-screen bg-black text-gray-300 pb-20 pt-10">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[10px] font-mono text-green-500 mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} /> RETURN_TO_FEED
        </button>

        <article className="space-y-12">
            {/* Meta */}
            <header className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
                    {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-mono text-gray-500 uppercase border-y border-white/10 py-6">
                    <span className="flex items-center gap-2 text-green-500"><ShieldCheck size={14} /> Authored_by_BC_Labs</span>
                    <span className="flex items-center gap-2"><Calendar size={14} /> {new Date(post.publishedAt).toLocaleDateString()}</span>
                    <span className="flex items-center gap-2"><Clock size={14} /> Updated_Live</span>
                </div>
            </header>

            {/* Featured Image */}
            {post.coverImage && (
                <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-video">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                </div>
            )}

            {/* Markdown Content */}
            <div className="prose prose-invert prose-green max-w-none font-mono text-sm leading-relaxed
                prose-headings:uppercase prose-headings:italic prose-headings:font-black prose-headings:tracking-tighter
                prose-p:text-gray-400 prose-strong:text-green-500 prose-code:text-green-400 prose-code:bg-green-500/10 prose-code:px-2 prose-code:rounded">
               <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
            </div>

            {/* Footer Actions */}
            <footer className="pt-20 border-t border-white/5 flex justify-between items-center">
                <div className="text-[9px] font-mono text-gray-600 uppercase">
                    Byte_Capsule_ID: {post.id}
                </div>
                <div className="flex gap-4">
                    <button className="p-3 bg-white/5 rounded-full hover:text-green-500 transition-colors"><Share2 size={16} /></button>
                    <button onClick={() => window.print()} className="p-3 bg-white/5 rounded-full hover:text-green-500 transition-colors"><Printer size={16} /></button>
                </div>
            </footer>
        </article>
      </div>
    </div>
  );
}