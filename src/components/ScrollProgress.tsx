"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[5px] z-[100] pointer-events-none bg-white/10 backdrop-blur-[2px] border-b border-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-accent-gold via-primary to-forest-accent origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
