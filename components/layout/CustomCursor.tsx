"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // মোবাইলে টাচ না করলে হাইড থাকবে
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // মাউস মুভমেন্ট (ডেস্কটপ)
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    // টাচ মুভমেন্ট (মোবাইল)
    const moveTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX.set(e.touches[0].clientX);
        mouseY.set(e.touches[0].clientY);
        setIsVisible(true);
      }
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);
    const handleMouseLeave = () => setIsVisible(false);

    // ইভেন্ট লিসেনার যোগ করা
    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("touchmove", moveTouch);
    window.addEventListener("touchstart", moveTouch);
    window.addEventListener("mouseleave", handleMouseLeave);
    
    const targets = document.querySelectorAll("button, a, .cursor-pointer");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", handleHoverStart);
      target.addEventListener("mouseleave", handleHoverEnd);
      // মোবাইলে টাচ করলে বড় হওয়ার জন্য
      target.addEventListener("touchstart", handleHoverStart);
      target.addEventListener("touchend", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("touchmove", moveTouch);
      window.removeEventListener("touchstart", moveTouch);
      window.removeEventListener("mouseleave", handleMouseLeave);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleHoverStart);
        target.removeEventListener("mouseleave", handleHoverEnd);
        target.removeEventListener("touchstart", handleHoverStart);
        target.removeEventListener("touchend", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* ১. মাঝখানের ডট */}
      <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>

      {/* ২. বাইরের গ্লোয়িং সার্কেল */}
      <motion.div
        className="absolute border border-green-500/50 rounded-full"
        animate={{
          width: isHovered ? 60 : 30,
          height: isHovered ? 60 : 30,
          backgroundColor: isHovered ? "rgba(34, 197, 94, 0.15)" : "rgba(34, 197, 94, 0)",
          borderWidth: isHovered ? "2px" : "1px",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        {/* সার্কেলের ভেতর সেই স্ক্যান লাইন */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
           <motion.div 
             animate={{ top: ['-100%', '100%'] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="w-full h-[1px] bg-green-500 absolute"
           />
        </div>
      </motion.div>

      {/* ৩. চারপাশের ছোট টেকনিক্যাল ফ্রেম (হ্যাকার লুকের জন্য) */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className={`absolute border-2 border-t-green-500/30 border-r-transparent border-b-green-500/30 border-l-transparent rounded-full ${isHovered ? 'w-20 h-20' : 'w-12 h-12'}`}
      />
    </motion.div>
  );
};

export default CustomCursor;