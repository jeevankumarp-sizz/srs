"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { useBooking } from "@/context/BookingContext";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { openBooking } = useBooking();

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-xs font-semibold uppercase tracking-wider font-poppins flex items-center justify-center gap-1.5">
            <HelpCircle size={14} />
            Guest Inquiries & Travel Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#2B2B2B] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#2B2B2B]/75 mt-2 font-manrope">
            Everything you need to know about staying at Sangam Residency in Sagara and visiting Jog Falls.
          </p>
          <div className="w-12 h-[2px] bg-accent-gold mx-auto mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card rounded-2xl border border-primary/10 overflow-hidden transition-all duration-300 hover:border-primary/25 bg-white/70"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-2xl"
                >
                  <h3 className="text-base sm:text-lg font-bold font-playfair text-[#2B2B2B] flex items-center gap-3">
                    <span className="text-primary text-xs font-poppins font-semibold bg-primary/10 px-2.5 py-1 rounded-full">
                      Q{index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <div
                    className={`w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-primary/15" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#2B2B2B]/75 font-manrope leading-relaxed border-t border-primary/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Assistance Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-secondary/80 border border-primary/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold font-playfair text-[#2B2B2B]">
              Have a Specific Question or Requirement?
            </h4>
            <p className="text-xs sm:text-sm text-[#2B2B2B]/70 font-manrope">
              Our front desk is active 24/7. Speak with us directly for instant clarification.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+917676393132"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-primary/20 text-primary text-xs sm:text-sm font-poppins font-semibold hover:bg-primary/5 transition-all"
            >
              <Phone size={14} />
              <span>Call +91 7676393132</span>
            </a>
            <button
              onClick={() => openBooking()}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-xs sm:text-sm font-poppins font-semibold hover:bg-primary/95 transition-all shadow-md shadow-primary/15 cursor-pointer"
            >
              <MessageSquare size={14} className="fill-current" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
