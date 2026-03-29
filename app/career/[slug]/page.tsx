"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Briefcase, Clock, 
  DollarSign, Calendar, ChevronRight, Terminal,
  ShieldCheck, Loader2
} from 'lucide-react';

const BASE_URL = "https://zero-day-test-nine.vercel.app";

export default function CareerDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/public/careers/${slug}`);
        const data = await res.json();
        setJob(data.post);
      } catch (err) {
        console.error("Error fetching job details:", err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchJob();
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Loader2 className="text-green-500 animate-spin" size={40} />
    </div>
  );

  if (!job) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">POSITION_NOT_FOUND (404)</div>;

  return (
    <div className="min-h-screen bg-black text-gray-300 pt-32 pb-20 selection:bg-green-500 selection:text-black">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <button onClick={() => router.back()} className="flex items-center gap-2 text-[10px] font-mono text-green-500 mb-12 hover:text-white transition-colors">
          <ArrowLeft size={14} /> BACK_TO_OPERATIONS
        </button>

        <header className="space-y-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
               <span className="px-4 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase rounded-full border border-green-500/20">{job.jobType}</span>
               <span className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">{job.department}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">{job.title}</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/5">
            <div className="space-y-1">
              <p className="text-[9px] font-mono text-gray-600 uppercase">Location</p>
              <p className="text-xs text-white uppercase flex items-center gap-2"><MapPin size={12} className="text-green-500"/> {job.location}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] font-mono text-gray-600 uppercase">Salary_Range</p>
              <p className="text-xs text-white uppercase flex items-center gap-2"><DollarSign size={12} className="text-green-500"/> {job.salaryMin}-{job.salaryMax} {job.salaryCurrency}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] font-mono text-gray-600 uppercase">Experience</p>
              <p className="text-xs text-white uppercase flex items-center gap-2"><ShieldCheck size={12} className="text-green-500"/> {job.experienceLevel}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] font-mono text-gray-600 uppercase">Deadline</p>
              <p className="text-xs text-white uppercase flex items-center gap-2"><Calendar size={12} className="text-green-500"/> {new Date(job.deadline).toLocaleDateString()}</p>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-[1fr_300px] gap-16">
          <div className="space-y-10">
            <section className="prose prose-invert prose-green max-w-none">
              <h3 className="text-white uppercase font-black italic tracking-widest text-lg mb-6 border-l-4 border-green-500 pl-4">Job_Description</h3>
              <div className="font-mono text-sm leading-relaxed text-gray-400 whitespace-pre-wrap">
                {job.content}
              </div>
            </section>
            
            <section>
               <h3 className="text-white uppercase font-black italic tracking-widest text-lg mb-6 border-l-4 border-green-500 pl-4">Required_Skills</h3>
               <div className="flex flex-wrap gap-2">
                 {job.skills?.map((skill: string) => (
                   <span key={skill} className="px-3 py-1 bg-zinc-900 border border-white/5 rounded-lg text-[10px] font-mono text-gray-500">{skill}</span>
                 ))}
               </div>
            </section>
          </div>

          <aside>
            <div className="sticky top-32 p-8 bg-zinc-950 border border-white/10 rounded-[2.5rem] space-y-6">
              <div className="text-center space-y-2">
                <Terminal size={32} className="mx-auto text-green-500" />
                <p className="text-[9px] font-mono text-gray-500 uppercase">Ready for Deployment?</p>
              </div>
              <a 
                href={job.applyUrl} 
                target="_blank"
                className="block w-full py-4 bg-green-500 text-black text-center font-black text-[10px] uppercase rounded-2xl hover:bg-white transition-all shadow-[0_0_20px_#22c55e33]"
              >
                APPLY_FOR_POSITION
              </a>
              <p className="text-[8px] font-mono text-gray-600 text-center uppercase leading-tight">
                BY CLICKING APPLY, YOU AGREE TO OUR OPERATIONAL PROTOCOLS.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}