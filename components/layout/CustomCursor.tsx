"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // মাউসের পজিশন ট্র্যাক করার জন্য
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // এনিমেশনটাকে স্মুথ করার জন্য Spring ব্যবহার করা হয়েছে
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // কোন বাটন বা লিংকের ওপর মাউস নিলে সার্কেল বড় হবে
    const handleHoverStart = () => setIsHovered(true);
    const handleHoverEnd = () => setIsHovered(false);

    window.addEventListener("mousemove", moveMouse);
    
    // সব বাটন এবং লিংকের ওপর ইভেন্ট লিসেনার যোগ করা
    const targets = document.querySelectorAll("button, a, .cursor-pointer");
    targets.forEach((target) => {
      target.addEventListener("mouseenter", handleHoverStart);
      target.addEventListener("mouseleave", handleHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleHoverStart);
        target.removeEventListener("mouseleave", handleHoverEnd);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* ১. মেইন কার্সর ডট */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-green-500 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* ২. বাইরের গ্লোয়িং সার্কেল */}
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
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      >
        {/* সার্কেলের ভেতর একটা ছোট স্ক্যান লাইন (ঐচ্ছিক) */}
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