"use client";

import { useState } from "react";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";
import { Bed, Tv, Snowflake, Wifi, Maximize, MessageSquare, Shield, ChevronLeft, ChevronRight, Users, PlusCircle, Wind } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface Room {
  id: string;
  title: string;
  price: string;
  priceDesc: string;
  capacity: string;
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
            loading="lazy"
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
      id: "non-ac-deluxe",
      title: "Non AC Deluxe Room",
      price: "₹1,199",
      priceDesc: "per night",
      capacity: "2 Guests",
      acOption: "Non-AC Deluxe",
      description: "Clean, airy and well-ventilated deluxe accommodation with plush double bed, ambient lighting, work desk, and 24-hour hot water.",
      images: [
        "/images/rooms/non-ac-deluxe/1_result.webp",
        "/images/rooms/non-ac-deluxe/2_result.webp",
        "/images/rooms/non-ac-deluxe/3_result.webp",
        "/images/rooms/non-ac-deluxe/4_result.webp",
        "/images/rooms/non-ac-deluxe/5_result.webp",
        "/images/rooms/non-ac-deluxe/6_result.webp",
      ],
      badge: "Best Value",
      amenities: [
        { icon: Users, name: "2 Guests Capacity" },
        { icon: Bed, name: "Double Bed" },
        { icon: Wind, name: "Ceiling Fan & Airy" },
        { icon: Wifi, name: "Free High-Speed WiFi" },
        { icon: Tv, name: "LED TV" },
        { icon: Shield, name: "24h Hot Water" },
      ],
    },
    {
      id: "ac-deluxe",
      title: "AC Deluxe Room",
      price: "₹1,999",
      priceDesc: "per night",
      capacity: "2 Guests",
      acOption: "Air Conditioned (AC)",
      description: "Modern air-conditioned room crafted with warm lighting, superior mattress, study desk, and pristine attached bath.",
      images: [
        "/images/rooms/ac-deluxe/1_result.webp",
        "/images/rooms/ac-deluxe/2_result.webp",
        "/images/rooms/ac-deluxe/3_result.webp",
        "/images/rooms/ac-deluxe/4_result.webp",
        "/images/rooms/ac-deluxe/5_result.webp",
        "/images/rooms/ac-deluxe/6_result.webp",
        "/images/rooms/ac-deluxe/7_result.webp",
      ],
      badge: "Most Popular",
      amenities: [
        { icon: Users, name: "2 Guests Capacity" },
        { icon: Snowflake, name: "Split Air Conditioning" },
        { icon: Bed, name: "Queen/Double Bed" },
        { icon: Wifi, name: "Free High-Speed WiFi" },
        { icon: Tv, name: "LED TV" },
        { icon: Shield, name: "24h Hot Water" },
      ],
    },
    {
      id: "executive-suite",
      title: "Executive AC Suite Room",
      price: "₹3,999",
      priceDesc: "per night",
      capacity: "6 Guests",
      acOption: "Premium AC Suite",
      description: "Expansive luxury suite ideal for large families or groups of 6, featuring wooden ceiling accents, ample space, and premium comfort.",
      images: [
        "/images/rooms/executive-suite/1_result.webp",
        "/images/rooms/executive-suite/2_result.webp",
      ],
      badge: "Family & Group Suite",
      amenities: [
        { icon: Users, name: "6 Guests Capacity" },
        { icon: Snowflake, name: "Split AC Cooling" },
        { icon: Bed, name: "Multiple Beds Setup" },
        { icon: Maximize, name: "Spacious Living Area" },
        { icon: Wifi, name: "Free High-Speed WiFi" },
        { icon: Tv, name: "Smart LED TV" },
      ],
    },
    {
      id: "dormitory",
      title: "Spacious AC/Non AC Dormitory",
      price: "₹499",
      priceDesc: "per person / night",
      capacity: "10–15 Guests",
      acOption: "AC / Non-AC Options",
      description: "Clean, well-maintained shared dormitory with comfortable individual beds and dedicated lockers. AC and Non-AC options available for tour groups and pilgrims.",
      images: [
        "/images/rooms/dormitory/1_result.webp",
        "/images/rooms/dormitory/2_result.webp",
        "/images/rooms/dormitory/3_result.webp",
        "/images/rooms/dormitory/4_result.webp",
        "/images/rooms/dormitory/5_result.webp",
        "/images/rooms/dormitory/6_result.webp",
      ],
      badge: "Group Friendly",
      amenities: [
        { icon: Users, name: "10–15 Guests Capacity" },
        { icon: Snowflake, name: "AC Maintained" },
        { icon: Bed, name: "Individual Clean Beds" },
        { icon: Wifi, name: "Free High-Speed WiFi" },
        { icon: Shield, name: "24h Hot Water" },
        { icon: Maximize, name: "Luggage Space" },
      ],
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins">Refined Lodging</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">Our Room Categories</h2>
          <p className="text-sm text-[#2B2B2B]/75 mt-2 font-manrope">
            Spotless cleanliness, warm hospitality, and 24-hour convenience across all rooms.
          </p>
          <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* Extra Bed Highlight Banner */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="glass-card rounded-2xl p-4 sm:p-5 border border-primary/20 bg-white/80 shadow-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <PlusCircle size={22} />
              </div>
              <div>
                <span className="block text-sm font-bold text-[#2B2B2B] font-poppins">Extra Bed Facility</span>
                <span className="block text-xs text-[#2B2B2B]/85 font-manrope">Travelling with additional members? Extra comfortable bed available for any room.</span>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="block text-base font-extrabold text-primary font-manrope">₹299</span>
              <span className="block text-[11px] text-[#2B2B2B]/80 font-semibold">per bed</span>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {roomsData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-primary/10 hover:border-primary/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
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
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full shrink-0 font-poppins">
                      {room.capacity}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-3xl font-extrabold text-primary font-manrope">{room.price}</span>
                    <span className="text-xs text-[#2B2B2B]/80 font-semibold font-manrope">{room.priceDesc}</span>
                  </div>

                  <p className="text-sm text-[#2B2B2B]/85 leading-relaxed font-manrope mb-6">
                    {room.description}
                  </p>

                  {/* Room Amenities Grid */}
                  <div className="grid grid-cols-2 gap-3.5 border-t border-[#8B5E3C]/10 pt-5">
                    {room.amenities.map((amenity, idx) => {
                      const IconComponent = amenity.icon;
                      return (
                        <div key={idx} className="flex items-center gap-2.5 text-[#2B2B2B]/90 font-medium">
                          <IconComponent size={16} className="text-accent-gold shrink-0" />
                          <span className="text-xs font-medium font-manrope">{amenity.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-2">
                <button
                  onClick={() => openBooking(room.title)}
                  data-track="whatsapp-booking-room-card"
                  aria-label={`Book ${room.title} on WhatsApp`}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-poppins font-semibold py-3.5 px-4 rounded-2xl transition-all shadow-md shadow-primary/5 hover:shadow-lg hover:shadow-primary/10 flex items-center justify-center gap-2 cursor-pointer group-hover:scale-[1.01] active:scale-[0.99]"
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
