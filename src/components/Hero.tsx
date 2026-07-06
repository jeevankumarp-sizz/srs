"use client";

import { useBooking } from "@/context/BookingContext";
import { Phone, Calendar, ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const { openBooking } = useBooking();

  const scrollToRooms = () => {
    const element = document.getElementById("rooms");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#2B2B2B]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B2B2B]/75 via-[#2B2B2B]/60 to-[#2B2B2B]/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF7] via-transparent to-[#2B2B2B]/30 z-10" />
        {/* Actual hotel exterior photograph */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          style={{ backgroundImage: "url('/images/home/Home Section.webp')" }}
          className="w-full h-full bg-cover bg-[center_32%]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Headlines & Core Actions */}
        <div className="lg:col-span-7 text-white space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#FCFAF7]/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-xs sm:text-sm font-poppins font-medium text-accent-gold"
          >
            <span>⭐ 4.5+ Google Rated Family Hotel</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-playfair leading-[1.15] text-[#FCFAF7]"
          >
            Comfortable Stay in the <span className="text-accent-gold">Heart of Sagara</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-[#FCFAF7]/85 font-light max-w-xl mx-auto lg:mx-0 font-manrope leading-relaxed"
          >
            &quot;A Peaceful Stay for Families and Travellers&quot;
          </motion.p>

          {/* Quick CTA Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <button
              onClick={() => openBooking()}
              className="bg-primary hover:bg-primary/95 text-white font-poppins font-semibold px-7 py-4 rounded-2xl transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare size={16} className="fill-current" />
              <span>Book on WhatsApp</span>
            </button>

            <a
              href="tel:+917676393132"
              className="bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-white font-poppins font-semibold px-6 py-4 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>

            <button
              onClick={scrollToRooms}
              className="text-[#FCFAF7]/90 hover:text-white font-poppins font-semibold px-4 py-4 transition-colors flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Explore Rooms</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Quick Enquiry Booking Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="lg:col-span-5 w-full max-w-md mx-auto"
        >
          <div className="glass-card rounded-[2.5rem] p-6 sm:p-8 border border-white/25 shadow-2xl relative overflow-hidden glass-shimmer">
            <h3 className="text-2xl font-bold font-playfair text-[#2B2B2B] text-center mb-6">Plan Your Stay</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B]/70 font-poppins mb-1.5">Check-In Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Select Date"
                    onFocus={(e) => { e.target.type = 'date'; e.target.click(); }}
                    onBlur={(e) => { e.target.type = 'text'; }}
                    onClick={() => openBooking()}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-primary/20 bg-white/60 focus:outline-none font-manrope text-sm text-[#2B2B2B] cursor-pointer"
                    readOnly
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B]/70 font-poppins mb-1.5">Check-Out Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Select Date"
                    onFocus={(e) => { e.target.type = 'date'; e.target.click(); }}
                    onBlur={(e) => { e.target.type = 'text'; }}
                    onClick={() => openBooking()}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-primary/20 bg-white/60 focus:outline-none font-manrope text-sm text-[#2B2B2B] cursor-pointer"
                    readOnly
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B]/70 font-poppins mb-1.5">Guests</label>
                  <button
                    onClick={() => openBooking()}
                    className="w-full px-4 py-3.5 rounded-2xl border border-primary/20 bg-white/60 focus:outline-none font-manrope text-sm text-[#2B2B2B] cursor-pointer text-left appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238B5E3C%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat"
                  >
                    1 Guest
                  </button>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#2B2B2B]/70 font-poppins mb-1.5">Room Type</label>
                  <button
                    onClick={() => openBooking()}
                    className="w-full px-4 py-3.5 rounded-2xl border border-primary/20 bg-white/60 focus:outline-none font-manrope text-sm text-[#2B2B2B] cursor-pointer text-left appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238B5E3C%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat"
                  >
                    Standard Room
                  </button>
                </div>
              </div>

              <button
                onClick={() => openBooking()}
                className="w-full bg-primary hover:bg-primary/95 text-white font-poppins font-semibold py-4 px-6 rounded-2xl transition-all shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 text-sm mt-3 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Check Availability Now</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
