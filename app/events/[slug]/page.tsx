"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Calendar, Clock, 
  Users, Zap, Globe, Link as LinkIcon,
  Loader2, Radio
} from 'lucide-react';

const BASE_URL = "https://zero-day-test-nine.vercel.app";

export default function EventDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [event, setEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/public/events/${slug}`);
        const data = await res.json();
        setEvent(data.post);
      } catch (err) {
        console.error("Error fetching event details:", err);
      } finally {
        setLoading(false);
      }
    };
    if (slug) fetchEvent();
  }, [slug]);

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <Loader2 className="text-green-500 animate-spin" size={40} />
    </div>
  );

  if (!event) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">EVENT_DATA_CORRUPTED (404)</div>;

  return (
    <div className="min-h-screen bg-black text-gray-300 pt-32 pb-20 selection:bg-green-500 selection:text-black">
      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <button onClick={() => router.back()} className="flex items-center gap-2 text-[10px] font-mono text-green-500 mb-12 hover:text-white transition-colors">
          <ArrowLeft size={14} /> RETURN_TO_SCHEDULE
        </button>

        <header className="mb-16">
           <div className="flex items-center gap-2 text-green-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-6">
              <Radio size={14} className="animate-pulse" /> LIVE_ENGAGEMENT
           </div>
           <h1 className="text-4xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">{event.title}</h1>
           
           <div className="flex flex-wrap gap-8 py-6 border-y border-white/5">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500"><Calendar size={18}/></div>
                 <div>
                    <p className="text-[8px] font-mono text-gray-600 uppercase">Start_Date</p>
                    <p className="text-xs font-bold text-white uppercase">{new Date(event.eventStartDate).toDateString()}</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500"><MapPin size={18}/></div>
                 <div>
                    <p className="text-[8px] font-mono text-gray-600 uppercase">Venue</p>
                    <p className="text-xs font-bold text-white uppercase">{event.location} ({event.venueType})</p>
                 </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500"><Users size={18}/></div>
                 <div>
                    <p className="text-[8px] font-mono text-gray-600 uppercase">Capacity</p>
                    <p className="text-xs font-bold text-white uppercase">{event.capacity} Slots</p>
                 </div>
              </div>
           </div>
        </header>

        {event.coverImage && (
           <div className="w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 mb-16">
              <img src={event.coverImage} className="w-full h-full object-cover opacity-80" alt={event.title} />
           </div>
        )}

        <div className="grid lg:grid-cols-[1fr_300px] gap-16">
           <div className="space-y-12">
              <section>
                 <h3 className="text-white uppercase font-black italic tracking-widest text-lg mb-6 flex items-center gap-3">
                   <Zap size={20} className="text-green-500" /> Event_Brief
                 </h3>
                 <div className="font-mono text-sm leading-relaxed text-gray-400 whitespace-pre-wrap">
                    {event.content}
                 </div>
              </section>

              <section>
                 <h3 className="text-white uppercase font-black italic tracking-widest text-lg mb-6">Confirmed_Speakers</h3>
                 <div className="grid md:grid-cols-2 gap-4">
                    {event.speakers?.map((speaker: string) => (
                      <div key={speaker} className="p-4 bg-zinc-950 border border-white/5 rounded-2xl flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-mono text-[10px]">SC</div>
                         <p className="text-xs font-bold text-white uppercase tracking-tighter">{speaker}</p>
                      </div>
                    ))}
                 </div>
              </section>
           </div>

           <aside className="space-y-6">
              <div className="p-8 bg-zinc-950 border border-white/10 rounded-[2.5rem] text-center space-y-6">
                 <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase mb-1 text-green-500">Ticket_Price</p>
                    <h4 className="text-3xl font-black text-white">{event.ticketPrice === 0 ? "FREE" : `${event.ticketPrice} ${event.ticketCurrency}`}</h4>
                 </div>
                 <a 
                   href={event.registrationUrl} 
                   target="_blank"
                   className="block w-full py-4 bg-white text-black font-black text-[10px] uppercase rounded-2xl hover:bg-green-500 transition-all"
                 >
                   REGISTER_FOR_EVENT
                 </a>
              </div>
           </aside>
        </div>
      </div>
    </div>
  );
}