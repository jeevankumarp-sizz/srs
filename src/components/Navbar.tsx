"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBooking } = useBooking();

  // Listen to scroll to apply glass background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Rooms", id: "rooms" },
    { name: "Amenities", id: "amenities" },
    { name: "Gallery", id: "gallery" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 glass-nav shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Hotel Name */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 cursor-pointer group text-left"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/20 shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.jpeg"
                  alt="Sangam Residency Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <span className="block text-lg font-bold font-playfair tracking-tight text-[#2B2B2B] leading-none group-hover:text-primary transition-colors">
                  Sangam Residency
                </span>
                <span className="block text-[10px] text-primary/80 font-poppins uppercase tracking-wider font-semibold mt-0.5">
                  Sagara
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-poppins font-medium text-[#2B2B2B]/80 hover:text-primary cursor-pointer transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+917676393132"
                className="flex items-center gap-2 text-sm font-poppins font-semibold text-primary hover:text-primary/80 transition-colors py-2 px-3 rounded-full hover:bg-primary/5"
              >
                <Phone size={14} />
                <span>+91 7676393132</span>
              </a>
              <button
                onClick={() => openBooking()}
                className="bg-primary hover:bg-primary/95 text-white text-xs font-poppins font-semibold px-5 py-2.5 rounded-full transition-all shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Book on WhatsApp
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={() => openBooking()}
                className="bg-primary hover:bg-primary/95 text-white text-[11px] font-poppins font-semibold px-3 py-1.5 rounded-full transition-all shadow-md shadow-primary/10 cursor-pointer"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#2B2B2B]/80 hover:text-primary p-1.5 transition-colors cursor-pointer"
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-[#2B2B2B]/20 backdrop-blur-md md:hidden"
            />

            {/* Menu Box */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-[64px] left-4 right-4 z-30 overflow-hidden rounded-3xl border border-glass-border bg-[#FCFAF7]/95 shadow-xl backdrop-blur-xl p-6 md:hidden"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left text-base font-poppins font-semibold text-[#2B2B2B]/80 hover:text-primary py-1 border-b border-[#2B2B2B]/5 cursor-pointer transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-3 mt-6">
                <a
                  href="tel:+917676393132"
                  className="flex items-center justify-center gap-2 font-poppins font-semibold text-primary py-3 rounded-xl border border-primary/20 hover:bg-primary/5 transition-colors"
                >
                  <Phone size={16} />
                  <span>Call +91 7676393132</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openBooking();
                  }}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-poppins font-semibold py-3.5 rounded-xl transition-all shadow-md shadow-primary/10 text-center cursor-pointer"
                >
                  Book on WhatsApp
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
