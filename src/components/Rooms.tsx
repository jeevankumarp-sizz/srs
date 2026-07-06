"use client";

import { useState } from "react";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import { Bed, Tv, Snowflake, Wifi, Maximize, MessageSquare, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface Room {
  id: string;
  title: string;
  price: string;
  priceDesc: string;
  description: string;
  images: string[];
  amenities: { icon: React.ComponentType<{ size?: number; className?: string }>; name: string }[];
  badge?: string;
  acOption?: string;
}

function RoomImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden group">
      {/* Slide Container */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} - View ${current + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Glassmorphic Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/25 text-[#FCFAF7] hover:bg-white/40 active:scale-95 transition-all duration-300 opacity-100 sm:opacity-0 group-hover:opacity-100 cursor-pointer shadow-sm z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/25 text-[#FCFAF7] hover:bg-white/40 active:scale-95 transition-all duration-300 opacity-100 sm:opacity-0 group-hover:opacity-100 cursor-pointer shadow-sm z-10"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Glassmorphic Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 px-2.5 py-1.5 rounded-full bg-[#FCFAF7]/15 backdrop-blur-md border border-white/10 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(idx);
              }}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === current ? "bg-accent-gold scale-125 w-3" : "bg-[#FCFAF7]/50 hover:bg-[#FCFAF7]/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Rooms() {
  const { openBooking } = useBooking();

  const roomsData: Room[] = [
    {
      id: "standard",
      title: "Standard Room",
      price: "₹1,200 – ₹1,500",
      priceDesc: "per night",
      acOption: "AC & Non-AC Available",
      description: "A cozy and neat room with essential comforts, ideal for budget-conscious solo travelers and couples.",
      images: [
        "/images/rooms/standard/1.webp",
        "/images/rooms/standard/2.webp",
        "/images/rooms/standard/3.webp",
        "/images/rooms/standard/4.webp",
        "/images/rooms/standard/5.webp"
      ],
      badge: "Best Value",
      amenities: [
        { icon: Bed, name: "Double Bed" },
        { icon: Wifi, name: "Free WiFi" },
        { icon: Tv, name: "LED TV" },
        { icon: Shield, name: "24h Hot Water" },
      ],
    },
    {
      id: "deluxe",
      title: "Deluxe Room",
      price: "₹2,000",
      priceDesc: "per night",
      acOption: "Air Conditioned (AC)",
      description: "Spacious room with modern interiors, warm lighting, study desk, and premium bedding for business & leisure.",
      images: [
        "/images/rooms/deluxe/1.webp",
        "/images/rooms/deluxe/2.webp",
        "/images/rooms/deluxe/3.webp",
        "/images/rooms/deluxe/4.webp",
        "/images/rooms/deluxe/5.webp",
        "/images/rooms/deluxe/6.webp"
      ],
      badge: "Popular",
      amenities: [
        { icon: Bed, name: "Queen Bed" },
        { icon: Snowflake, name: "Split AC" },
        { icon: Wifi, name: "Free WiFi" },
        { icon: Tv, name: "Smart TV" },
      ],
    },
    {
      id: "family",
      title: "Family Room",
      price: "₹2,500 – ₹3,200",
      priceDesc: "per night",
      acOption: "AC & Non-AC Options",
      description: "Designed for families, offering multiple beds, generous layout, and bright ventilation for a homelike stay.",
      images: [
        "/images/rooms/family/1.webp",
        "/images/rooms/family/2.webp"
      ],
      badge: "Family Favorite",
      amenities: [
        { icon: Bed, name: "Multiple Beds" },
        { icon: Maximize, name: "Extra Spacious" },
        { icon: Wifi, name: "Free WiFi" },
        { icon: Tv, name: "Cable TV" },
      ],
    },
    {
      id: "suite",
      title: "Executive Suite",
      price: "₹4,000",
      priceDesc: "per night",
      acOption: "Premium AC Suite",
      description: "Our finest accommodation featuring wooden ceiling accents, an elegant seating lounge, and superior fittings.",
      images: [
        "/images/rooms/deluxe/6.webp",
        "/images/rooms/deluxe/5.webp",
        "/images/rooms/deluxe/3.webp"
      ],
      badge: "Premium Stay",
      amenities: [
        { icon: Bed, name: "King Bed" },
        { icon: Snowflake, name: "Premium AC" },
        { icon: Maximize, name: "Lounge Area" },
        { icon: Tv, name: "50\" Smart TV" },
      ],
    },
    {
      id: "dormitory",
      title: "Spacious Dormitory",
      price: "₹500",
      priceDesc: "per person / night",
      acOption: "Air Conditioned (AC)",
      description: "Clean, air-conditioned shared dormitory beds with personal lockers. Ideal for tourist groups and pilgrims.",
      images: [
        "/images/rooms/standard/4.webp",
        "/images/rooms/standard/5.webp",
        "/images/rooms/standard/2.webp"
      ],
      badge: "Group Friendly",
      amenities: [
        { icon: Bed, name: "Single Bed" },
        { icon: Snowflake, name: "AC Maintained" },
        { icon: Wifi, name: "Free WiFi" },
        { icon: Shield, name: "Lockers" },
      ],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins">Refined Lodging</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">Our Room Categories</h2>
          <p className="text-sm text-[#2B2B2B]/75 mt-2 font-manrope">
            Spotless cleanliness, warm hospitality, and 24-hour convenience across all rooms.
          </p>
          <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-primary/5 hover:border-primary/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              
              {/* Room Card Image Carousel */}
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#2B2B2B]/10">
                  <RoomImageCarousel images={room.images} title={room.title} />
                  
                  {/* Badge */}
                  {room.badge && (
                    <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-poppins uppercase tracking-wider font-bold px-3 py-1.5 rounded-full shadow-sm z-10">
                      {room.badge}
                    </span>
                  )}
                  {/* AC/Non-AC Label */}
                  <span className="absolute bottom-4 right-4 bg-[#FCFAF7]/95 backdrop-blur-md text-[#2B2B2B] text-xs font-semibold px-3 py-1.5 rounded-xl border border-white/20 shadow-sm z-10">
                    {room.acOption}
                  </span>
                </div>

                {/* Room Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="text-2xl font-bold font-playfair text-[#2B2B2B] group-hover:text-primary transition-colors">
                      {room.title}
                    </h3>
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-2xl font-bold text-primary font-manrope">{room.price}</span>
                    <span className="text-xs text-[#2B2B2B]/60 font-medium font-manrope">{room.priceDesc}</span>
                  </div>

                  <p className="text-sm text-[#2B2B2B]/70 leading-relaxed font-manrope mb-6">
                    {room.description}
                  </p>

                  {/* Room Amenities Grid */}
                  <div className="grid grid-cols-2 gap-3.5 border-t border-[#8B5E3C]/10 pt-5">
                    {room.amenities.map((amenity, idx) => {
                      const IconComponent = amenity.icon;
                      return (
                        <div key={idx} className="flex items-center gap-2.5 text-[#2B2B2B]/75">
                          <IconComponent size={16} className="text-accent-gold shrink-0" />
                          <span className="text-xs font-medium font-manrope">{amenity.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-4">
                <button
                  onClick={() => openBooking(room.title)}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-poppins font-semibold py-3 px-4 rounded-2xl transition-all shadow-md shadow-primary/5 hover:shadow-lg hover:shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageSquare size={16} className="fill-current" />
                  <span>Book on WhatsApp</span>
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
