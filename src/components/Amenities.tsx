"use client";

import {
  Snowflake,
  Wind,
  Users,
  Crown,
  Bed,
  Sparkles,
  Wifi,
  Car,
  Bell,
  Flame,
  Clock,
  Key
} from "lucide-react";
import { motion } from "framer-motion";

import React from "react";

interface Amenity {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

export default function Amenities() {
  const amenitiesList: Amenity[] = [
    {
      icon: Snowflake,
      title: "AC Rooms",
      desc: "Individually controlled split air-conditioning in deluxe, suites, and dorms.",
    },
    {
      icon: Wind,
      title: "Non-AC Rooms",
      desc: "Bright, airy rooms with powerful ceiling fans and ample cross ventilation.",
    },
    {
      icon: Users,
      title: "Family Rooms",
      desc: "Multi-bed spacious configurations, perfect for traveling with children.",
    },
    {
      icon: Crown,
      title: "Suites",
      desc: "Luxurious executive suite rooms featuring separate lounges and wooden ceilings.",
    },
    {
      icon: Bed,
      title: "AC Dormitory",
      desc: "Budget-friendly shared bed configurations with lockers and split AC.",
    },
    {
      icon: Sparkles,
      title: "Party Hall",
      desc: "Well-equipped function hall for family gatherings, rituals, and business events.",
    },
    {
      icon: Wifi,
      title: "Free High-Speed WiFi",
      desc: "Stay connected throughout the property with seamless high-speed internet.",
    },
    {
      icon: Car,
      title: "Free Secured Parking",
      desc: "Spacious parking area on-site with secure security monitoring for your vehicles.",
    },
    {
      icon: Bell,
      title: "In-Room Service",
      desc: "Prompt room service for tea, coffee, dining arrangements, and assistance.",
    },
    {
      icon: Flame,
      title: "24×7 Running Hot Water",
      desc: "Geyser and hot water facilities available in all bathrooms throughout the day.",
    },
    {
      icon: Clock,
      title: "24-Hour Check-In",
      desc: "Check in at any time convenient to you. Warm welcome awaits.",
    },
    {
      icon: Key,
      title: "24-Hour Check-Out",
      desc: "Flexible checkout policy tailored to your travel schedules and trains.",
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins">Hotel Comforts</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">Premium Guest Amenities</h2>
          <p className="text-sm text-[#2B2B2B]/75 mt-2 font-manrope">
            Designed to make your stay in Sagara as relaxing, comfortable, and convenient as possible.
          </p>
          <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenitiesList.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-[#8B5E3C]/5 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group flex flex-col items-center text-center sm:items-start sm:text-left"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors flex items-center justify-center text-primary mb-4 shrink-0">
                  <IconComponent size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Text Details */}
                <h3 className="text-base font-bold font-poppins text-[#2B2B2B] group-hover:text-primary transition-colors mb-1.5">
                  {amenity.title}
                </h3>
                <p className="text-xs text-[#2B2B2B]/70 font-manrope leading-relaxed">
                  {amenity.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
