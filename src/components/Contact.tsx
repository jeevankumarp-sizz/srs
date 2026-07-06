"use client";

import { useBooking } from "@/context/BookingContext";
import { Phone, MapPin, MessageSquare, Navigation, CalendarDays, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { openBooking } = useBooking();

  const handleDirections = () => {
    // Open Google Maps search for Sangam Residency Sagara
    window.open("https://maps.app.goo.gl/Lz87gK2PjVixfKsw9", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">Contact & Location</h2>
          <p className="text-sm text-[#2B2B2B]/75 mt-2 font-manrope">
            Have questions? Reach us via call or WhatsApp. We respond instantly.
          </p>
          <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            
            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="glass-card rounded-3xl p-6 border border-[#8B5E3C]/5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-poppins text-[#2B2B2B] uppercase tracking-wider mb-1">Our Address</h4>
                  <p className="text-sm text-[#2B2B2B]/75 font-manrope leading-relaxed">
                    Sangam Residency,<br />
                    Behind HP Petrol Bunk,<br />
                    Bangalore–Honnavar Highway,<br />
                    Sagara, Karnataka – 577401
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card rounded-3xl p-6 border border-[#8B5E3C]/5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-poppins text-[#2B2B2B] uppercase tracking-wider mb-1">Phone Enquiries</h4>
                  <a href="tel:+917676393132" className="block text-base font-bold text-primary font-poppins mt-0.5 hover:underline">
                    +91 7676393132
                  </a>
                  <p className="text-xs text-[#2B2B2B]/60 mt-1 font-manrope">Available 24 Hours for urgent lodging assistance.</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="glass-card rounded-3xl p-6 border border-[#8B5E3C]/5 flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                  <MessageSquare size={20} className="fill-current" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold font-poppins text-[#2B2B2B] uppercase tracking-wider mb-1">WhatsApp Bookings</h4>
                  <a href="https://wa.me/919164769438" target="_blank" rel="noopener noreferrer" className="block text-base font-bold text-[#25D366] font-poppins mt-0.5 hover:underline">
                    +91 9164769438
                  </a>
                  <p className="text-xs text-[#2B2B2B]/60 mt-1 font-manrope">Fast replies for availability & custom pricing queries.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Interactive CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 lg:pt-0">
              <button
                onClick={() => openBooking()}
                className="bg-primary hover:bg-primary/95 text-white font-poppins font-semibold py-4 px-6 rounded-2xl transition-all shadow-md shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <CalendarDays size={18} />
                <span>Book Stay Now</span>
              </button>

              <button
                onClick={handleDirections}
                className="bg-white hover:bg-[#F5F1EA] text-[#2B2B2B] border border-[#8B5E3C]/20 font-poppins font-semibold py-4 px-6 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <Navigation size={18} className="text-primary" />
                <span>Get Directions</span>
              </button>
            </div>

          </motion.div>

          {/* Right Side: Map Embed Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden shadow-md border border-[#8B5E3C]/10 min-h-[350px] relative group"
          >
            {/* Interactive Map Overlay */}
            <button
              onClick={handleDirections}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm border border-glass-border hover:bg-white text-xs font-semibold font-poppins px-3.5 py-2.5 rounded-xl shadow-sm hover:shadow flex items-center gap-1.5 transition-all text-[#2B2B2B] cursor-pointer"
            >
              <span>View Larger Map</span>
              <ExternalLink size={12} />
            </button>

            {/* Google Maps Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.108426002972!2d75.0210214!3d14.1610444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbe7a01d0cf8eb%3A0xe6bf448f7ee8eb4d!2sSangam%20Residency!5e0!3m2!1sen!2sin!4v1720270000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sangam Residency Location Map Sagara"
              className="w-full h-full min-h-[350px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
