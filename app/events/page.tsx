"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, MapPin, Users, Zap, Radio, 
  ArrowRight, Terminal, Loader2, AlertCircle,
  Trophy
} from 'lucide-react';
import Link from 'next/link';

const BASE_URL = "https://zero-day-test-nine.vercel.app"; 

export default function EventsListPage() {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        // ডিবাগ করার জন্য আপাতত 'upcoming=true' সরিয়ে সব ইভেন্ট চেক করছি
        const res = await fetch(`${BASE_URL}/api/public/events?limit=10`, { 
          cache: 'no-store' 
        });
        
        if (!res.ok) throw new Error("Failed to reach event nodes.");
        
        const data = await res.json();
        console.log("Events Data:", data); // ব্রাউজার কনসোলে চেক করার জন্য

        // ব্যাকএন্ড যদি সরাসরি অ্যারে পাঠায় বা 'posts' এর ভেতরে পাঠায়
        const fetchedEvents = data.posts || data || [];
        setEvents(Array.isArray(fetchedEvents) ? fetchedEvents : []);
        
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (error) return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 text-center">
       <div className="border border-red-500/20 bg-red-500/5 p-10 rounded-[3rem] backdrop-blur-xl">
          <AlertCircle className="text-red-500 mx-auto mb-4" size={48} />
          <p className="text-red-400 font-mono text-xs uppercase">{error}</p>
          <button onClick={() => window.location.reload()} className="mt-6 px-8 py-2 bg-red-500 text-black font-bold rounded-full text-[10px] uppercase">Retry_Uplink</button>
       </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans selection:bg-green-500 selection:text-black pt-32 pb-20">
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        <div className="mb-20 space-y-4">
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] tracking-[0.4em] uppercase">
                <Radio size={14} className="animate-pulse" /> Live_Engagements
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter italic">
                SECURITY <span className="text-green-500">SUMMITS</span>
            </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
             Array(6).fill(0).map((_, i) => <div key={i} className="h-96 rounded-[3rem] bg-white/5 animate-pulse"></div>)
          ) : events.length > 0 ? (
            events.map((event) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative bg-zinc-950/50 border border-white/5 rounded-[3rem] p-8 flex flex-col justify-between h-[450px] hover:border-green-500/20 transition-all shadow-2xl"
              >
                <div className="space-y-6">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex flex-col items-center justify-center text-black font-black">
                        <span className="text-[10px] uppercase">{new Date(event.eventStartDate).toLocaleString('default', { month: 'short' })}</span>
                        <span className="text-2xl">{new Date(event.eventStartDate).getDate()}</span>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[9px] font-mono text-green-500 uppercase italic">
                            <Zap size={10} /> {event.venueType}
                        </div>
                        <h2 className="text-2xl font-bold text-white uppercase italic tracking-tighter group-hover:text-green-400 transition-colors">
                            {event.title}
                        </h2>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-6 font-mono text-[10px] uppercase text-gray-600">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2"><MapPin size={12} className="text-green-900" /> {event.location}</div>
                        <div className="flex items-center gap-2"><Users size={12} className="text-green-900" /> {event.capacity} Capacity</div>
                    </div>
                    <Link href={`/events/${event.slug}`} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl group-hover:bg-green-500 group-hover:text-black text-white transition-all font-black">
                        View_Briefing <ArrowRight size={18} />
                    </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-40 text-center border border-dashed border-white/10 rounded-[3rem]">
                <p className="text-gray-600 font-mono text-[10px] uppercase tracking-[0.5em]">No data available in command center.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}