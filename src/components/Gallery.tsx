"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  src: string;
  category: "exterior" | "reception" | "lobby" | "rooms" | "corridors" | "partyhall";
  alt: string;
}

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: GalleryImage[] = [
    { src: "/images/gallery/sangam-residency-sagar-sagara-lodging-services-uyqjdkqybo.jpg", category: "exterior", alt: "Sangam Residency Exterior Day View" },
    { src: "/images/gallery/sangam-residency-sagar-sagara-lodging-services-ohazdqy9jt.jpg", category: "exterior", alt: "Sangam Residency Main Signage and Entrance" },
    { src: "/images/gallery/sangam-residency-sagar-sagara-lodging-services-gc23ss1xs7.jpg", category: "reception", alt: "Modern Reception Front Desk" },
    
    // Room Folder Images
    { src: "/images/rooms/standard/1.webp", category: "rooms", alt: "Standard Room - Clean Double Bed Setup" },
    { src: "/images/rooms/standard/2.webp", category: "rooms", alt: "Standard Room - Desk and Wardrobe" },
    { src: "/images/rooms/standard/3.webp", category: "rooms", alt: "Standard Room - Ambient Room Space" },
    { src: "/images/rooms/standard/4.webp", category: "rooms", alt: "Standard Dormitory Style Layout" },
    { src: "/images/rooms/standard/5.webp", category: "rooms", alt: "Standard Room - Bathroom and Wash Area" },
    
    { src: "/images/rooms/deluxe/1.webp", category: "rooms", alt: "Deluxe AC Room - Elegant Queen Bed" },
    { src: "/images/rooms/deluxe/2.webp", category: "rooms", alt: "Deluxe Room - Ambient Bedside Lighting" },
    { src: "/images/rooms/deluxe/3.webp", category: "rooms", alt: "Deluxe Room - Seating Area and Flat TV" },
    { src: "/images/rooms/deluxe/4.webp", category: "rooms", alt: "Deluxe Room - Bathroom Fitted with Modern Geyser" },
    { src: "/images/rooms/deluxe/5.webp", category: "rooms", alt: "Executive Suite Room - Wooden Ceiling Accent" },
    { src: "/images/rooms/deluxe/6.webp", category: "rooms", alt: "Deluxe Room - Large Glass Window View" },

    { src: "/images/rooms/family/1.webp", category: "rooms", alt: "Family Suite Room - Multiple Bed Layout" },
    { src: "/images/rooms/family/2.webp", category: "rooms", alt: "Family Room - Cozy Wooden Headboard Bedding" },

    { src: "/images/gallery/1.jpg", category: "reception", alt: "Cozy Front Office Desk Area" },
    { src: "/images/gallery/2.webp", category: "rooms", alt: "Comfortable Twin Beds Room Layout" },
    { src: "/images/gallery/3.webp", category: "rooms", alt: "Deluxe AC Bedside Setup" },
    { src: "/images/gallery/4.webp", category: "rooms", alt: "Clean Spacious Room Wardrobe" },
    { src: "/images/gallery/5.webp", category: "rooms", alt: "Double Bed Room Cozy Lighting" },
    { src: "/images/gallery/6.webp", category: "corridors", alt: "Wide Main Corridor Passage" },
    { src: "/images/gallery/7.webp", category: "corridors", alt: "Clean Well-Lit Hotel Corridor" },
    { src: "/images/gallery/8.webp", category: "partyhall", alt: "Spacious Party Hall Seating View" },
    { src: "/images/gallery/9.jpg", category: "partyhall", alt: "Modern Function Hall Banquet Stage" },
    
    { src: "/images/gallery/10.jpg", category: "rooms", alt: "Elegant Bed Linen Detail" },
    { src: "/images/gallery/11.jpg", category: "lobby", alt: "Beautiful Wooden Accent Lobby Ceiling" },
    { src: "/images/gallery/12.jpg", category: "corridors", alt: "Elevator Lobby Entrance View" },
    { src: "/images/gallery/unnamed.jpg", category: "reception", alt: "Warm Ambient Reception Seating" },
    { src: "/images/gallery/unnamed.webp", category: "lobby", alt: "Hotel Entrance Lobby Lounge" },
  ];

  const categories = [
    { value: "all", label: "Show All" },
    { value: "exterior", label: "Exterior" },
    { value: "reception", label: "Reception" },
    { value: "lobby", label: "Lobby" },
    { value: "rooms", label: "Rooms" },
    { value: "corridors", label: "Corridors" },
    { value: "partyhall", label: "Party Hall" },
  ];

  const filteredImages = filter === "all"
    ? images
    : images.filter((img) => img.category === filter);

  // Handle lightbox navigation
  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex + 1) % filteredImages.length;
    });
  }, [filteredImages.length]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex - 1 + filteredImages.length) % filteredImages.length;
    });
  }, [filteredImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins">Visual Tour</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">Explore Sangam Residency</h2>
          <p className="text-sm text-[#2B2B2B]/75 mt-2 font-manrope">
            A real-life preview of our rooms, corridors, lobby, and banquet hall.
          </p>
          <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setFilter(cat.value);
                setLightboxIndex(null); // Reset lightbox references on filter change
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer font-poppins border ${
                filter === cat.value
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-white/80 hover:bg-primary/5 text-[#2B2B2B]/70 border-[#8B5E3C]/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-glass-border cursor-pointer group zoom-img-container bg-[#2B2B2B]/5"
                onClick={() => setLightboxIndex(idx)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover zoom-img"
                  loading="lazy"
                />
                
                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-[#2B2B2B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2B2B]/95 p-4 sm:p-8 backdrop-blur-md">
              {/* Close Hotspot */}
              <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxIndex(null)} />

              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-2.5 transition-colors z-10 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={24} />
              </button>

              {/* Navigation Left */}
              <button
                onClick={showPrev}
                className="absolute left-4 sm:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-2.5 transition-colors z-10 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Image View */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl h-[70vh] flex flex-col items-center justify-center z-10"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={filteredImages[lightboxIndex].src}
                    alt={filteredImages[lightboxIndex].alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Description Caption */}
                <div className="mt-4 text-center">
                  <p className="text-white text-sm sm:text-base font-medium font-manrope">
                    {filteredImages[lightboxIndex].alt}
                  </p>
                  <span className="text-xs text-white/50 font-poppins uppercase tracking-wider mt-1 block">
                    Category: {filteredImages[lightboxIndex].category} • {lightboxIndex + 1} of {filteredImages.length}
                  </span>
                </div>
              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={showNext}
                className="absolute right-4 sm:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/25 rounded-full p-2.5 transition-colors z-10 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
