"use client";

import Image from "next/image";
import { Check, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const highlights = [
    "Spotless, Sanitized, & Well-Maintained Rooms",
    "Peaceful Atmosphere suitable for Families & Groups",
    "24-Hour Check-in / Check-out Flexibility",
    "Convenient Location behind Honnavar-Bangalore Highway",
    "Ample Secured Parking Space",
    "Highly Courteous & Polite Hotel Staff"
  ];

  return (
    <section id="about" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins">Welcome to Sagara</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">About Sangam Residency</h2>
          <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-glass-border zoom-img-container">
              <Image
                src="/images/about.jpg"
                alt="Sangam Residency Room Ambient View"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover zoom-img"
              />
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-[#8B5E3C]/10 shadow-lg flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-forest-accent/10 flex items-center justify-center text-forest-accent shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <span className="block text-xs font-bold text-forest-accent uppercase tracking-wider font-poppins">Trusted Stay</span>
                <span className="block text-sm font-semibold text-[#2B2B2B]">Family Approved</span>
              </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-gold/10 rounded-full blur-xl -z-10" />
          </motion.div>

          {/* Right Side: Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-playfair text-[#2B2B2B] italic leading-snug">
                &quot;A Peaceful Stay for Families and Travellers&quot;
              </h3>
              <p className="text-[#2B2B2B]/75 leading-relaxed font-manrope text-sm sm:text-base">
                Conveniently located behind the Bangalore–Honnavar Highway in Sagara, Karnataka, <strong>Sangam Residency</strong> is the preferred choice for family vacationers, spiritual pilgrims, and business travelers alike. We bridge the gap between premium hospitality and realistic pricing.
              </p>
              <p className="text-[#2B2B2B]/75 leading-relaxed font-manrope text-sm sm:text-base">
                Whether you are visiting the majestic <strong>Jog Falls</strong> (just 45 minutes away), exploring the rich historical heritage of <strong>Keladi</strong> and <strong>Ikkeri</strong> temples, or passing through on business, our bright interiors, warm lighting, and spotless environment ensure a refreshing rest.
              </p>
            </div>

            {/* Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span className="text-sm font-manrope font-medium text-[#2B2B2B]/85">{item}</span>
                </div>
              ))}
            </div>

            {/* Travel Guide Note */}
            <div className="flex gap-3 bg-secondary/80 border border-primary/10 p-4 rounded-2xl items-start">
              <MapPin className="text-primary mt-0.5 shrink-0" size={18} />
              <div className="text-xs sm:text-sm text-[#2B2B2B]/75 font-manrope">
                <strong>Traveler Tip:</strong> Sagara is the gateway to Western Ghats tourist spots. We provide travel guidance and local vehicle bookings on request.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
