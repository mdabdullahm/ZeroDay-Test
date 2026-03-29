"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, MapPin, Clock, DollarSign, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

const BASE_URL = "https://zero-day-test-nine.vercel.app";

export default function CareerListPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/api/public/careers?limit=10`)
      .then(res => res.json())
      .then(data => {
        setJobs(data.posts || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center"><Loader2 className="text-green-500 animate-spin" /></div>;

  return (
    <div className="min-h-screen bg-black text-gray-300 pt-32 pb-20 px-6 lg:px-20 font-sans">
      <div className="max-w-full mx-auto">
        <div className="mb-16">
          <p className="text-green-500 font-mono text-xs tracking-widest uppercase mb-2">● Recruitment_Module</p>
          <h1 className="text-6xl font-black text-white italic uppercase tracking-tighter">Open_Positions</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-zinc-950/50 border border-white/5 p-10 rounded-[3rem] group hover:border-green-500/30 transition-all">
              <h2 className="text-3xl font-bold text-white uppercase italic group-hover:text-green-400 mb-4">{job.title}</h2>
              
              <div className="flex flex-wrap gap-6 mb-10 font-mono text-[10px] text-gray-500 uppercase">
                <span className="flex items-center gap-2"><MapPin size={14}/> {job.location}</span>
                <span className="flex items-center gap-2"><Clock size={14}/> {job.workplaceType}</span>
                <span className="flex items-center gap-2 text-green-500 font-bold"><DollarSign size={14}/> {job.salaryMin}-{job.salaryMax} {job.salaryCurrency}</span>
              </div>

              <Link href={`/careers/${job.slug}`} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl group-hover:bg-green-500 group-hover:text-black transition-all font-black uppercase text-[10px]">
                Access_Full_Specs <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}