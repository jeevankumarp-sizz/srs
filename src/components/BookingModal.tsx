"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { X, Calendar, User, Phone, MessageSquare, Users, Hotel } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import { toast } from "sonner";

// Zod Validation Schema
const bookingSchema = zod.object({
  name: zod.string().min(2, "Name must be at least 2 characters"),
  phone: zod.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
  roomType: zod.enum(["Standard Room (Non AC)", "Standard Room (AC)", "Deluxe Room (AC)", "Family Room (AC)", "Family Room (Non AC)", "Suite", "Dormitory (AC)"]),
  checkIn: zod.string().min(1, "Check-in date is required"),
  checkOut: zod.string().min(1, "Check-out date is required"),
  guests: zod.number()
    .min(1, "Minimum 1 guest")
    .max(25, "For larger groups, please contact us directly"),
  specialRequest: zod.string().optional(),
}).refine((data) => {
  const checkInDate = new Date(data.checkIn);
  const checkOutDate = new Date(data.checkOut);
  return checkOutDate >= checkInDate;
}, {
  message: "Check-out date must be on or after check-in date",
  path: ["checkOut"],
});

type BookingFormValues = zod.infer<typeof bookingSchema>;

export default function BookingModal() {
  const { isOpen, selectedRoom, closeBooking } = useBooking();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      roomType: "Standard Room (Non AC)",
      checkIn: "",
      checkOut: "",
      guests: 1,
      specialRequest: "",
    },
  });

  // Pre-fill room type when context state changes
  useEffect(() => {
    if (selectedRoom) {
      // Map simplified room types to form options
      const formatted = selectedRoom.toLowerCase();
      if (formatted.includes("deluxe")) {
        setValue("roomType", "Deluxe Room (AC)");
      } else if (formatted.includes("family")) {
        setValue("roomType", "Family Room (AC)");
      } else if (formatted.includes("suite")) {
        setValue("roomType", "Suite");
      } else if (formatted.includes("dormitory") || formatted.includes("dorm")) {
        setValue("roomType", "Dormitory (AC)");
      } else {
        setValue("roomType", "Standard Room (Non AC)");
      }
    }
  }, [selectedRoom, setValue]);

  // Handle Form Submission
  const onSubmit = (data: BookingFormValues) => {
    const whatsappNum = "919164769438";
    const textMsg = `Hello Sangam Residency,

I would like to enquire about a booking.

Room Type: ${data.roomType}
Check-in: ${data.checkIn}
Check-out: ${data.checkOut}
Guests: ${data.guests}
Name: ${data.name}
Phone: ${data.phone}
Special Request: ${data.specialRequest || "None"}

Please share the room availability and booking details.`;

    const encodedMsg = encodeURIComponent(textMsg);
    const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedMsg}`;

    toast.success("Redirecting to WhatsApp...", {
      description: "Please complete your enquiry on WhatsApp.",
    });

    // Short timeout to let the user see the success message
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      closeBooking();
      reset();
    }, 800);
  };

  // Close modal on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeBooking]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
            className="absolute inset-0 bg-[#2B2B2B]/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-glass-border bg-[#FCFAF7]/95 shadow-2xl backdrop-blur-xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeBooking}
              aria-label="Close Booking Modal"
              className="absolute top-5 right-5 text-[#2B2B2B]/60 hover:text-primary transition-colors p-2 hover:bg-[#F5F1EA] rounded-full"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase font-poppins">Reservation Enquiry</span>
              <h3 className="text-3xl font-playfair text-[#2B2B2B] mt-1 font-bold">Book Your Stay</h3>
              <p className="text-sm text-[#2B2B2B]/70 mt-1">
                Fill details below. We will coordinate details and confirmation via WhatsApp.
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-[#2B2B2B]/80 font-poppins uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User size={14} className="text-primary" /> Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-manrope text-sm"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-[#2B2B2B]/80 font-poppins uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Phone size={14} className="text-primary" /> Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#2B2B2B]/60 font-semibold">+91</span>
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    {...register("phone")}
                    className="w-full pl-14 pr-4 py-3 rounded-xl border border-primary/20 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-manrope text-sm"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>
                )}
              </div>

              {/* Room Type */}
              <div>
                <label className="block text-xs font-semibold text-[#2B2B2B]/80 font-poppins uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Hotel size={14} className="text-primary" /> Room Category
                </label>
                <select
                  {...register("roomType")}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-manrope text-sm appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%238B5E3C%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat"
                >
                  <option value="Standard Room (Non AC)">Standard Room (Non AC) — ₹1,200</option>
                  <option value="Standard Room (AC)">Standard Room (AC) — ₹1,500</option>
                  <option value="Deluxe Room (AC)">Deluxe Room (AC) — ₹2,000</option>
                  <option value="Family Room (Non AC)">Family Room (Non AC)</option>
                  <option value="Family Room (AC)">Family Room (AC)</option>
                  <option value="Suite">Suite — ₹4,000</option>
                  <option value="Dormitory (AC)">Dormitory (AC) — ₹500/person</option>
                </select>
                {errors.roomType && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.roomType.message}</p>
                )}
              </div>

              {/* Dates grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Check In */}
                <div>
                  <label className="block text-xs font-semibold text-[#2B2B2B]/80 font-poppins uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" /> Check-In
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    {...register("checkIn")}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-manrope text-sm"
                  />
                  {errors.checkIn && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.checkIn.message}</p>
                  )}
                </div>

                {/* Check Out */}
                <div>
                  <label className="block text-xs font-semibold text-[#2B2B2B]/80 font-poppins uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" /> Check-Out
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    {...register("checkOut")}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-manrope text-sm"
                  />
                  {errors.checkOut && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.checkOut.message}</p>
                  )}
                </div>
              </div>

              {/* Guests Count */}
              <div>
                <label className="block text-xs font-semibold text-[#2B2B2B]/80 font-poppins uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Users size={14} className="text-primary" /> Guests
                </label>
                <input
                  type="number"
                  min={1}
                  max={25}
                  {...register("guests", { valueAsNumber: true })}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-manrope text-sm"
                />
                {errors.guests && (
                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.guests.message}</p>
                )}
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-[#2B2B2B]/80 font-poppins uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MessageSquare size={14} className="text-primary" /> Special Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="E.g., early check-in, extra bed, etc."
                  {...register("specialRequest")}
                  className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-white/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all font-manrope text-sm resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/95 text-white font-poppins font-semibold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer mt-2 active:scale-[0.99]"
              >
                Send Booking Inquiry on WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
