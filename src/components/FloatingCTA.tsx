"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

export default function FloatingCTA() {
  const { openBooking } = useBooking();
  const [isVisible, setIsVisible] = useState(false);

  // Only show after scrolling down 100px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* DESKTOP FLOATING BUTTONS (Visible on scroll) */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col gap-3"
          >
            {/* Phone Call Button */}
            <a
              href="tel:+917676393132"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/95 transition-all duration-300 hover:scale-110 group relative"
              aria-label="Call Sangam Residency"
            >
              <Phone size={20} />
              <span className="absolute right-14 bg-[#2B2B2B] text-white text-xs font-poppins px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                Call: +91 7676393132
              </span>
            </a>

            {/* WhatsApp Booking Trigger */}
            <button
              onClick={() => openBooking()}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#25D366]/90 transition-all duration-300 hover:scale-110 group relative cursor-pointer"
              aria-label="Book on WhatsApp"
            >
              <MessageSquare size={20} className="fill-current" />
              <span className="absolute right-14 bg-[#2B2B2B] text-white text-xs font-poppins px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-md">
                Book on WhatsApp
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE STICKY BOTTOM BAR (Always visible on mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FCFAF7]/95 border-t border-[#8B5E3C]/10 px-4 py-3.5 flex gap-3 shadow-[0_-8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md md:hidden">
        {/* Call Now */}
        <a
          href="tel:+917676393132"
          className="flex-1 flex items-center justify-center gap-2 border border-primary/20 hover:bg-primary/5 text-primary font-poppins font-semibold text-sm py-3.5 rounded-2xl active:scale-[0.98] transition-all"
        >
          <Phone size={16} />
          <span>Call Now</span>
        </a>

        {/* Book on WhatsApp */}
        <button
          onClick={() => openBooking()}
          className="flex-[1.5] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-poppins font-semibold text-sm py-3.5 rounded-2xl shadow-sm active:scale-[0.98] transition-all cursor-pointer"
        >
          <MessageSquare size={16} className="fill-current" />
          <span>Book on WhatsApp</span>
        </button>
      </div>
    </>
  );
}
