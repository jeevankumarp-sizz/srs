"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let animationFrameId: number;

    const init = () => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2.0,
      });

      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

      function raf(time: number) {
        lenis?.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      }

      animationFrameId = requestAnimationFrame(raf);
    };

    // Defer RAF loop by 300ms to keep main thread completely idle for LCP
    const timer = setTimeout(init, 300);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);
      if (lenis) {
        (window as unknown as { __lenis?: Lenis | null }).__lenis = null;
        lenis.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
