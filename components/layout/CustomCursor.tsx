"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // মাউস মুভমেন্ট
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // মোবাইল টাচ মুভমেন্ট
    const moveTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX.set(e.touches[0].clientX);
        mouseY.set(e.touches[0].clientY);
        if (!isVisible) setIsVisible(true);
      }
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("touchstart", moveTouch, { passive: true }); // passive: true স্ক্রলিং ঠিক রাখে
    window.addEventListener("touchmove", moveTouch, { passive: true });

    // ইন্টারঅ্যাক্টিভ এলিমেন্টগুলো সিলেক্ট করা
    const updateTargets = () => {
      const targets = document.querySelectorAll("button, a, .cursor-pointer");
      targets.forEach((target) => {
        target.addEventListener("mouseenter", handleHoverStart);
        target.addEventListener("mouseleave", handleHoverEnd);
        target.addEventListener("touchstart", handleHoverStart, { passive: true });
        target.addEventListener("touchend", handleHoverEnd);
      });
    };

    updateTargets();

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("touchstart", moveTouch);
      window.removeEventListener("touchmove", moveTouch);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    // মোবাইলে আঙুলের নিচেই যেন সার্কেল থাকে তাই z-index ঠিক রাখা হয়েছে
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* মেইন নিওন ডট */}
      <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_12px_#22c55e]"></div>

      {/* গ্লোয়িং রিং */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          width: isHovered ? 60 : 30,
          height: isHovered ? 60 : 30,
        }}
      >
        <div className="w-full h-full border border-green-500/40 rounded-full bg-green-500/5 backdrop-blur-[1px]"></div>
        
        {/* সার্কেলের ভেতরে ছোট স্ক্যান লাইন */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
           <motion.div 
             animate={{ top: ['-100%', '100%'] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="w-full h-[1px] bg-green-500 absolute"
           />
        </div>
      </motion.div>

      {/* বাইরের রোটেটিং ফ্রেম */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className={`absolute border border-t-green-500/20 border-r-transparent border-b-green-500/20 border-l-transparent rounded-full ${isHovered ? 'w-20 h-20' : 'w-10 h-10'}`}
      />
    </motion.div>
  );
};

export default CustomCursor;