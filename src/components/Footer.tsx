"use client";

import Image from "next/image";
import { Phone, MapPin, MessageSquare, Clock, Heart, Award } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function Footer() {
  const { openBooking } = useBooking();

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  return (
    <footer className="bg-secondary border-t border-[#8B5E3C]/10 text-[#2B2B2B] pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/20 bg-white">
                <Image
                  src="/images/logo.jpeg"
                  alt="Sangam Residency Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold font-playfair text-[#2B2B2B] leading-none">Sangam Residency</h4>
                <p className="text-[10px] text-primary font-poppins uppercase tracking-wider font-semibold mt-1">Sagara, Karnataka</p>
              </div>
            </div>
            <p className="text-sm text-[#2B2B2B]/70 italic mt-3 font-manrope">
              &quot;A Peaceful Stay for Families and Travellers&quot;
            </p>
            <div className="flex items-center gap-2 text-xs text-forest-accent bg-forest-accent/5 py-1.5 px-3 rounded-full border border-forest-accent/10 w-fit">
              <Award size={14} />
              <span className="font-semibold font-poppins">⭐ 4.5+ Google Rated Stay</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-sm font-semibold font-poppins uppercase tracking-wider text-primary mb-4">Explore</h5>
            <ul className="space-y-2.5">
              {[
                { name: "About Hotel", id: "about" },
                { name: "Our Rooms", id: "rooms" },
                { name: "Amenities", id: "amenities" },
                { name: "Photo Gallery", id: "gallery" },
                { name: "Guest Reviews", id: "reviews" }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="text-sm text-[#2B2B2B]/70 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="text-sm font-semibold font-poppins uppercase tracking-wider text-primary mb-4">Get In Touch</h5>
            <ul className="space-y-3 text-sm text-[#2B2B2B]/80 font-manrope">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span>
                  Behind HP Petrol Bunk,<br />
                  Bangalore–Honnavar Highway,<br />
                  Sagara, Karnataka – 577401
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+917676393132" className="hover:text-primary transition-colors">+91 7676393132</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare size={16} className="text-primary shrink-0" />
                <a href="https://wa.me/919164769438" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+91 9164769438</a>
              </li>
            </ul>
          </div>

          {/* Timing & Actions */}
          <div>
            <h5 className="text-sm font-semibold font-poppins uppercase tracking-wider text-primary mb-4">Operations</h5>
            <ul className="space-y-3.5 text-sm text-[#2B2B2B]/80 font-manrope">
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="text-primary shrink-0" />
                <span>Check-in / Check-out: <strong>24 Hours</strong></span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => openBooking()}
                  className="w-full bg-primary hover:bg-primary/95 text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-sm hover:shadow transition-all cursor-pointer text-center font-poppins uppercase tracking-wider"
                >
                  Book on WhatsApp
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#8B5E3C]/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2B2B2B]/60">
          <p>© {new Date().getFullYear()} Sangam Residency. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={10} className="text-red-500 fill-current" /> for travelers visiting Sagara & Jog Falls
          </p>
        </div>
      </div>
    </footer>
  );
}
