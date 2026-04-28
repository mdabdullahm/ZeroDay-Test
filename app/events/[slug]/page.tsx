"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, Users, Zap, Loader2, Radio, Clock } from 'lucide-react';

const BASE_URL = "";

export default function EventDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventDetail = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${BASE_URL}/api/public/events/${slug}`);
        if (!res.ok) throw new Error("Event node offline.");
        
        const data = await res.json();
        // ডেভেলপার ডক অনুযায়ী ডেটা 'post' অবজেক্টে থাকে
        setEvent(data.post || data);
      } catch (err) {
        console.error("Detail Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchEventDetail();
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="text-green-500 animate-spin" size={40} />
    </div>
  );

  if (!event) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">404: EVENT_NOT_FOUND</div>;

  return (
    <div className="min-h-screen bg-black text-gray-300 pt-32 pb-20 selection:bg-green-500 selection:text-black">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <button onClick={() => router.back()} className="flex items-center gap-2 text-[10px] font-mono text-green-500 mb-12 hover:text-white transition-colors">
          <ArrowLeft size={14} /> BACK_TO_FEED
        </button>

        <header className="space-y-8 mb-16">
            <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] uppercase tracking-widest animate-pulse">
                <Radio size={14} /> Live_Transmission
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
                {event.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/5 font-mono text-[10px] uppercase">
                <div><p className="text-gray-600 mb-1">Date</p><p className="text-white font-bold">{new Date(event.eventStartDate).toDateString()}</p></div>
                <div><p className="text-gray-600 mb-1">Venue</p><p className="text-white font-bold">{event.venueType}</p></div>
                <div><p className="text-gray-600 mb-1">Location</p><p className="text-white font-bold">{event.location}</p></div>
                <div><p className="text-gray-600 mb-1">Access</p><p className="text-green-500 font-bold">{event.ticketPrice === 0 ? "FREE" : "PAID"}</p></div>
            </div>
        </header>

        {event.coverImage && (
            <div className="rounded-[3rem] overflow-hidden border border-white/10 mb-16 aspect-video">
                <img src={event.coverImage} className="w-full h-full object-cover opacity-60" alt="" />
            </div>
        )}

        <div className="grid lg:grid-cols-[1fr_300px] gap-16">
            <section className="prose prose-invert prose-green max-w-none border-l-2 border-green-500/20 pl-8 font-mono text-sm leading-relaxed text-gray-400 whitespace-pre-wrap">
                <h3 className="text-white uppercase font-black italic tracking-widest text-xl mb-8">Intelligence_Briefing</h3>
                {event.content}
            </section>

            <aside className="space-y-6">
                <div className="sticky top-32 p-8 bg-zinc-950 border border-white/10 rounded-[2.5rem] text-center space-y-6">
                    <Zap size={32} className="mx-auto text-green-500" />
                    <h3 className="text-white font-black uppercase italic tracking-widest">Register_Now</h3>
                    <p className="text-[10px] font-mono text-gray-600 uppercase">Initialize registration protocol to join the briefing.</p>
                    <a href={event.registrationUrl} target="_blank" className="block w-full py-4 bg-green-600 text-black font-black uppercase text-[10px] rounded-2xl hover:bg-white transition-all">Establish_Connection</a>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
}