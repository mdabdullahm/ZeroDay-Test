"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Lock, ShieldCheck, Zap, BookOpen, User, Star, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Web Penetration Testing v3.0",
    level: "Beginner",
    category: "Web",
    lessons: 45,
    students: "1.2k",
    price: "FREE",
    rating: 4.8,
    imgIcon: <ShieldCheck size={40} />
  },
  {
    id: 2,
    title: "Advanced Malware Analysis",
    level: "Expert",
    category: "Binary",
    lessons: 60,
    students: "850",
    price: "$49",
    rating: 4.9,
    imgIcon: <Zap size={40} />
  },
  {
    id: 3,
    title: "Network Security & Hardening",
    level: "Intermediate",
    category: "Network",
    lessons: 32,
    students: "2.1k",
    price: "FREE",
    rating: 4.7,
    imgIcon: <Lock size={40} />
  },
  {
    id: 4,
    title: "SQL Injection Mastery",
    level: "Intermediate",
    category: "Web",
    lessons: 20,
    students: "3k",
    price: "$19",
    rating: 4.6,
    imgIcon: <BookOpen size={40} />
  },
  {
    id: 5,
    title: "iOS App Infiltration",
    level: "Advanced",
    category: "Mobile",
    lessons: 55,
    students: "400",
    price: "$99",
    rating: 5.0,
    imgIcon: <Star size={40} />
  }
];

const categories = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];

const CourseCatalog = () => {
  const [filter, setFilter] = useState("All");

  const filteredCourses = filter === "All" 
    ? courses 
    : courses.filter(c => c.level === filter);

  return (
    <section className="relative py-10 lg:py-15 bg-black overflow-hidden border-t border-green-500/5 mt-[-1px]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-full mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Header & Filter System */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-2">
               Training <span className="text-green-500">Modules</span>
            </h2>
            <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
               [ TOTAL_LAPS_ACTIVE: {courses.length} ]
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 p-2 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  filter === cat 
                  ? "bg-green-600 text-black shadow-[0_0_15px_rgba(34,197,94,0.4)]" 
                  : "text-gray-500 hover:text-green-500"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredCourses.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-zinc-950/40 border border-white/5 rounded-3xl overflow-hidden hover:border-green-500/20 transition-all duration-500"
              >
                {/* Course Image Header Mockup */}
                <div className="h-48 bg-zinc-900 flex items-center justify-center text-green-900 group-hover:text-green-500 transition-colors relative overflow-hidden">
                   <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" 
                        style={{ backgroundImage: 'radial-gradient(#22c55e 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }}></div>
                   {item.imgIcon}
                   <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono text-green-500">
                      {item.category.toUpperCase()}
                   </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1">
                       <Zap size={10} className="text-green-500" /> {item.level}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-500">
                       <Star size={10} fill="currentColor" />
                       <span className="text-[10px] font-bold">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors leading-tight">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-6 mb-8 border-y border-white/5 py-4">
                     <div className="flex items-center gap-2">
                        <BookOpen size={14} className="text-gray-600" />
                        <span className="text-xs text-gray-500">{item.lessons} Units</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <User size={14} className="text-gray-600" />
                        <span className="text-xs text-gray-500">{item.students}</span>
                     </div>
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="text-2xl font-black text-white font-mono">
                        {item.price === "FREE" ? <span className="text-green-500">FREE</span> : item.price}
                     </div>
                     <button className="flex items-center gap-2 px-6 py-2.5 bg-green-500/10 text-green-500 border border-green-500/20 rounded-xl font-bold text-xs hover:bg-green-500 hover:text-black transition-all group/btn">
                        INFILTRATE <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default CourseCatalog;