"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // এনিমেশন স্মুথনেস (তোমার সেই আগের স্প্রিং কনফিগ)
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const moveTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX.set(e.touches[0].clientX);
        mouseY.set(e.touches[0].clientY);
        setIsVisible(true);
      }
    };

    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", moveMouse);
    // passive: true দেওয়ার কারণে এখন মোবাইলে স্ক্রলিং আটকাবে না
    window.addEventListener("touchstart", moveTouch, { passive: true });
    window.addEventListener("touchmove", moveTouch, { passive: true });

    const targets = document.querySelectorAll("button, a, .cursor-pointer");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", handleHoverStart);
      target.addEventListener("mouseleave", handleHoverEnd);
      target.addEventListener("touchstart", handleHoverStart, { passive: true });
      target.addEventListener("touchend", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("touchstart", moveTouch);
      window.removeEventListener("touchmove", moveTouch);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* ১. মেইন কার্সর ডট (তোমার আগের স্টাইল) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-green-500 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* ২. বাইরের গ্লোয়িং সার্কেল (তোমার আগের স্টাইল) */}
      <motion.div
        className="fixed top-0 left-0 border border-green-500/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          width: isHovered ? 60 : 35,
          height: isHovered ? 60 : 35,
          backgroundColor: isHovered ? "rgba(34, 197, 94, 0.1)" : "rgba(34, 197, 94, 0)",
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        {/* সার্কেলের ভেতরে সেই স্ক্যান লাইন */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
           <motion.div 
             animate={{ top: ['-100%', '100%'] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="w-full h-[1px] bg-green-500 absolute"
           />
        </div>
      </motion.div>
    </>
  );
};

export default CustomCursor;