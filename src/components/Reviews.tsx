"use client";

import { Star } from "lucide-react";

interface Review {
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  color: string;
}

export default function Reviews() {
  const reviewsList: Review[] = [
    {
      name: "Rajesh K.",
      location: "Bengaluru",
      rating: 5,
      date: "2 weeks ago",
      text: "Very neat and clean rooms. Staff were polite and the location was easy to find. Great value for money.",
      color: "bg-amber-600",
    },
    {
      name: "Sneha Murthy",
      location: "Mysuru",
      rating: 5,
      date: "1 month ago",
      text: "Stayed with my family for two nights. Spacious rooms, hot water available throughout the day, and ample parking.",
      color: "bg-emerald-700",
    },
    {
      name: "Amit Patel",
      location: "Mumbai",
      rating: 4,
      date: "3 weeks ago",
      text: "Comfortable stay with clean rooms. WiFi worked well and check-in was quick. Would definitely visit again.",
      color: "bg-blue-600",
    },
    {
      name: "Gururaj Hegde",
      location: "Sirsi",
      rating: 5,
      date: "2 months ago",
      text: "Excellent hospitality and well-maintained property. The reception area looks beautiful and the rooms were spotless.",
      color: "bg-purple-700",
    },
    {
      name: "Vikram Sen",
      location: "Kolkata",
      rating: 5,
      date: "1 month ago",
      text: "One of the best stays in Sagara. Affordable pricing with premium service.",
      color: "bg-rose-600",
    },
    {
      name: "Deepa S.",
      location: "Mangaluru",
      rating: 4,
      date: "2 months ago",
      text: "Peaceful atmosphere, good parking, and friendly staff. Perfect for families.",
      color: "bg-teal-700",
    },
    {
      name: "Dr. Sandeep",
      location: "Shivamogga",
      rating: 5,
      date: "3 months ago",
      text: "Very convenient location near the highway. Comfortable beds and clean bathrooms.",
      color: "bg-indigo-600",
    },
    {
      name: "Christopher D.",
      location: "Goa",
      rating: 5,
      date: "3 months ago",
      text: "Highly recommended for travellers visiting Jog Falls and nearby attractions.",
      color: "bg-amber-700",
    },
    {
      name: "Harish Gowda",
      location: "Bengaluru",
      rating: 5,
      date: "4 months ago",
      text: "Spotless cleanliness, polite staff, and hassle-free 24-hour check-in. Super convenient for late arrivals.",
      color: "bg-cyan-700",
    },
  ];

  // Render a rating in stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={`${
          i < rating ? "text-amber-500 fill-amber-500" : "text-[#2B2B2B]/20"
        }`}
      />
    ));
  };

  // Split reviews into two groups for opposing row animations
  const firstRow = [...reviewsList, ...reviewsList]; // Duplicated for seamless scroll
  const secondRow = [...reviewsList.reverse(), ...reviewsList]; // Duplicated for seamless scroll

  return (
    <section id="reviews" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins">Guest Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">What Our Guests Say</h2>
          
          {/* Google Ratings Summary Box */}
          <div className="flex items-center justify-center gap-2 mt-4 bg-secondary/80 border border-primary/5 w-fit mx-auto px-4 py-2 rounded-2xl shadow-sm">
            <span className="text-[#2B2B2B] font-bold text-sm font-poppins">⭐ 4.5+ Google Rating</span>
            <span className="text-[#2B2B2B]/40 text-xs">|</span>
            <span className="text-[#2B2B2B]/70 text-xs font-medium font-manrope">Based on Verified Guest stays</span>
          </div>
          <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-6" />
        </div>
      </div>

      {/* Auto-Scrolling Marquees */}
      <div className="flex flex-col gap-6 w-full relative">
        
        {/* Row 1: Left scrolling */}
        <div className="flex w-[200%] gap-6 overflow-hidden select-none hover:[animation-play-state:paused]">
          <div className="flex justify-around gap-6 animate-carousel animate-duration-[40s]">
            {firstRow.map((review, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[350px] shrink-0 bg-white rounded-3xl p-6 border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    {/* Initials Avatar */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-poppins font-bold text-sm ${review.color}`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2B2B2B] font-poppins">{review.name}</h4>
                      <p className="text-[10px] text-[#2B2B2B]/60 font-medium font-manrope">{review.location} • {review.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {renderStars(review.rating)}
                  </div>

                  <p className="text-xs sm:text-sm text-[#2B2B2B]/85 font-manrope leading-relaxed italic">
                    &quot;{review.text}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right scrolling */}
        <div className="flex w-[200%] gap-6 overflow-hidden select-none hover:[animation-play-state:paused]">
          <div className="flex justify-around gap-6 animate-carousel animate-duration-[45s] [animation-direction:reverse]">
            {secondRow.map((review, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[350px] shrink-0 bg-white rounded-3xl p-6 border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-poppins font-bold text-sm ${review.color}`}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#2B2B2B] font-poppins">{review.name}</h4>
                      <p className="text-[10px] text-[#2B2B2B]/60 font-medium font-manrope">{review.location} • {review.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {renderStars(review.rating)}
                  </div>

                  <p className="text-xs sm:text-sm text-[#2B2B2B]/85 font-manrope leading-relaxed italic">
                    &quot;{review.text}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
