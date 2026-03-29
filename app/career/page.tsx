"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, ArrowRight, Terminal, Zap,
  Trophy, AlertCircle, Loader2, DollarSign
} from 'lucide-react';
import Link from 'next/link';

// ১. এপিআই ইউআরএল ঠিক আছে
const BASE_URL = "https://zero-day-test-nine.vercel.app"; 

export default function OpportunitiesPage() {
  const [careers, setCareers] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        console.log("Fetching data from:", BASE_URL);

        // ২. ডিবাগ করার জন্য আপাতত ফিল্টারগুলো সরিয়ে দিয়ে চেক করুন
        const [careerRes, eventRes] = await Promise.all([
          fetch(`${BASE_URL}/api/public/careers?limit=10`), // featured=true সরিয়ে দেখা
          fetch(`${BASE_URL}/api/public/events?limit=10`)   // upcoming=true সরিয়ে দেখা
        ]);

        if (!careerRes.ok || !eventRes.ok) {
            throw new Error(`Server Response Error: Career(${careerRes.status}) Event(${eventRes.status})`);
        }

        const careerData = await careerRes.json();
        const eventData = await eventRes.json();

        // ৩. কনসোলে চেক করুন ডেটা আসছে কি না
        console.log("Careers API Response:", careerData);
        console.log("Events API Response:", eventData);

        // ৪. ডেটা সেট করার আগে চেক করুন Structure ঠিক আছে কি না
        setCareers(careerData.posts || careerData || []);
        setEvents(eventData.posts || eventData || []);

      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err instanceof Error ? err.message : "Operational error occurred.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error) return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 text-center">
      <div className="border border-red-500/20 bg-red-500/5 p-10 rounded-[3rem] backdrop-blur-xl">
        <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
        <h2 className="text-white font-black uppercase tracking-tighter text-2xl">Access_Denied</h2>
        <p className="text-red-400 font-mono text-[10px] uppercase mt-2">{error}</p>
        <button onClick={() => window.location.reload()} className="mt-6 px-8 py-3 bg-red-500 text-black font-black rounded-full text-[10px] uppercase tracking-widest">Retry_Link</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black pt-32 pb-20">
      
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* HERO */}
        <div className="mb-24 space-y-4">
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                <Terminal size={14} /> Intelligence_Command
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none">
                JOIN THE <span className="text-green-500">CORE</span> <br /> OPERATIONS
            </h1>
        </div>

        {/* --- CAREERS --- */}
        {/* <section className="mb-32">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-8 border-b border-white/5 pb-4">Open_Positions</h2>
            
            {loading ? (
                <div className="grid lg:grid-cols-2 gap-6">
                    {[1,2].map(i => <div key={i} className="h-32 bg-white/5 rounded-[2rem] animate-pulse" />)}
                </div>
            ) : careers.length > 0 ? (
                <div className="grid lg:grid-cols-2 gap-6">
                    {careers.map((job) => (
                        <div key={job.id} className="bg-zinc-950/50 border border-white/5 p-8 rounded-[2.5rem] flex justify-between items-center group hover:border-green-500/30 transition-all">
                            <div>
                                <h3 className="text-xl font-bold text-white uppercase italic group-hover:text-green-400">{job.title}</h3>
                                <p className="text-[10px] font-mono text-gray-500 uppercase mt-2">{job.department} | {job.location}</p>
                            </div>
                            <Link href={`/careers/${job.slug}`} className="p-3 bg-white/5 rounded-full hover:bg-green-500 hover:text-black transition-all">
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 font-mono text-xs uppercase tracking-widest py-10">No career opportunities found at this moment.</p>
            )}
        </section> */}

        {/* --- EVENTS --- */}
        <section>
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-8 border-b border-white/5 pb-4">Upcoming_Events</h2>
            
            {loading ? (
                <div className="grid lg:grid-cols-3 gap-6">
                    {[1,2,3].map(i => <div key={i} className="h-64 bg-white/5 rounded-[2rem] animate-pulse" />)}
                </div>
            ) : events.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div key={event.id} className="bg-zinc-950/50 border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-between h-64 hover:border-green-500/20 transition-all">
                            <div>
                                <div className="text-green-500 text-[10px] font-mono uppercase tracking-widest mb-2">{new Date(event.eventStartDate).toDateString()}</div>
                                <h3 className="text-xl font-bold text-white uppercase italic tracking-tighter">{event.title}</h3>
                            </div>
                            <Link href={`/events/${event.slug}`} className="text-[10px] font-black text-green-500 flex items-center gap-2 hover:gap-4 transition-all">
                                VIEW_DETAILS <ArrowRight size={14} />
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 font-mono text-xs uppercase tracking-widest py-10">No upcoming events scheduled.</p>
            )}
        </section>

      </div>
    </div>
  );
}