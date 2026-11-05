"use client";

import dynamic from "next/dynamic";

// Dynamically import heavy client-only interactive components with ssr: false
export const BookingModal = dynamic(() => import("@/components/BookingModal"), {
  ssr: false,
});

export const FloatingCTA = dynamic(() => import("@/components/FloatingCTA"), {
  ssr: false,
});

export const Gallery = dynamic(() => import("@/components/Gallery"), {
  ssr: false,
  loading: () => (
    <section id="gallery" className="py-20 bg-background text-center min-h-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins">Visual Tour</span>
        <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">Explore Sangam Residency</h2>
        <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-4" />
      </div>
    </section>
  ),
});

export const Reviews = dynamic(() => import("@/components/Reviews"), {
  ssr: false,
  loading: () => (
    <section id="reviews" className="py-20 bg-[#FCFAF7] text-center min-h-[300px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins">Guest Testimonials</span>
        <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">What Our Guests Say</h2>
        <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-6" />
      </div>
    </section>
  ),
});
