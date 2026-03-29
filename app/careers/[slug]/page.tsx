"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ShieldCheck, Terminal, Loader2, MapPin, DollarSign, Calendar } from 'lucide-react';

const BASE_URL = "https://zero-day-test-nine.vercel.app";

export default function CareerDetailPage() {
  const params = useParams();
  const slug = params?.slug; // URL থেকে স্লাগ নিচ্ছে
  const router = useRouter();
  
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    
    // এপিআই কল: /api/public/careers/[slug]
    fetch(`${BASE_URL}/api/public/careers/${slug}`)
      .then(res => res.json())
      .then(data => {
        // ডিটেইল পেজের ডেটা 'post' এর ভেতর আসে
        setJob(data.post);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center"><Loader2 className="text-green-500 animate-spin" size={40} /></div>;
  if (!job) return <div className="min-h-screen bg-black text-white text-center pt-40 uppercase font-mono">Position_Not_Found (404)</div>;

  return (
    <div className="min-h-screen bg-black text-gray-300 pt-32 pb-20 selection:bg-green-500 selection:text-black">
      <div className="max-w-[1000px] mx-auto px-6">
        
        <button onClick={() => router.back()} className="flex items-center gap-2 text-[10px] font-mono text-green-500 mb-12 hover:text-white transition-colors">
          <ArrowLeft size={14} /> BACK_TO_LIST
        </button>

        <article className="space-y-12">
          <header className="space-y-6">
            <span className="px-4 py-1.5 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase rounded-full border border-green-500/20">{job.jobType}</span>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-[0.85]">{job.title}</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/5 font-mono text-[10px] uppercase text-gray-500">
              <div><p className="text-green-900 mb-1">Dept</p><p className="text-white font-bold">{job.department}</p></div>
              <div><p className="text-green-900 mb-1">Exp</p><p className="text-white font-bold">{job.experienceLevel}</p></div>
              <div><p className="text-green-900 mb-1">Salary</p><p className="text-green-500 font-bold">{job.salaryMin}-{job.salaryMax}</p></div>
              <div><p className="text-green-900 mb-1">Location</p><p className="text-white font-bold">{job.location}</p></div>
            </div>
          </header>

          <section className="prose prose-invert prose-green max-w-none font-mono text-sm border-l border-green-500/20 pl-8">
            <h3 className="text-white uppercase font-black italic tracking-widest text-lg mb-8">Role_Briefing</h3>
            <div className="whitespace-pre-wrap text-gray-400 leading-relaxed">
              {job.content}
            </div>
          </section>

          <section className="pt-12 border-t border-white/5">
            <div className="bg-zinc-950 p-10 rounded-[3rem] border border-green-500/20 text-center space-y-6">
              <ShieldCheck size={48} className="text-green-500 mx-auto" />
              <h3 className="text-2xl font-black text-white uppercase italic">Initialization_Protocol</h3>
              <a href={job.applyUrl} target="_blank" className="inline-block px-12 py-4 bg-green-600 text-black font-black uppercase text-xs rounded-2xl hover:bg-white transition-all shadow-[0_0_20px_#22c55e33]">Apply_Now_Request</a>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}