/**
 * Centralized Site and SEO Configuration for Sangam Residency
 * Strictly verified business information from actual hotel records.
 */

// Production URL resolution logic for Vercel and custom domains
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://sangamresidency.com";
}

export const siteConfig = {
  name: "Sangam Residency",
  legalName: "Sangam Residency Hotel",
  tagline: "A Peaceful Stay for Families and Travellers",
  description:
    "Experience comfortable, hygienic, and affordable lodging at Sangam Residency in Sagara, Karnataka. Featuring Non-AC & AC Deluxe Rooms, Executive AC Suite Rooms, and Spacious AC/Non AC Dormitory with 24-hour check-in/out, free Wi-Fi, and secured parking. Just 40 minutes from Jog Falls and 55 minutes from Sigandur Temple.",
  url: getBaseUrl(),
  ogImage: "/images/home/Home Section.webp",
  logo: "/images/logo.jpeg",
  rating: {
    score: 4.5,
    reviewCount: 148,
    bestRating: 5,
  },
  contact: {
    phone: "+919164769438",
    displayPhone: "+91 9164769438",
    whatsapp: "919164769438",
    displayWhatsapp: "+91 9164769438",
    whatsappBookingLink: "https://wa.me/919164769438",
  },
  address: {
    streetAddress: "Behind HP Petrol Bunk, Bangalore–Honnavar Highway",
    addressLocality: "Sagara",
    addressRegion: "Karnataka",
    postalCode: "577401",
    addressCountry: "IN",
    countryName: "India",
  },
  geo: {
    latitude: 14.1610444,
    longitude: 75.0210214,
  },
  googleMapsUrl: "https://maps.app.goo.gl/sozRuPa4E7yKx6zz6",
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.108426002972!2d75.0210214!3d14.1610444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbbe7a01d0cf8eb%3A0xe6bf448f7ee8eb4d!2sSangam%20Residency!5e0!3m2!1sen!2sin!4v1720270000000!5m2!1sen!2sin",
  
  checkinTime: "00:00",
  checkoutTime: "23:59",
  openingHours: "Mo-Su 00:00-23:59",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  priceRange: "₹499 - ₹3,999",

  // Verification IDs (Populated via environment variables)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bing: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },

  // Room Offerings for Schema and On-Page SEO
  rooms: [
    {
      id: "non-ac-deluxe",
      name: "Non AC Deluxe Room",
      description: "Clean, airy and well-ventilated deluxe accommodation with double bed, ambient lighting, work desk, and 24-hour hot water.",
      price: 1199,
      currency: "INR",
      occupancy: 2,
      bedType: "Double Bed",
      hasAC: false,
      image: "/images/rooms/non-ac-deluxe/1_result.webp",
    },
    {
      id: "ac-deluxe",
      name: "AC Deluxe Room",
      description: "Modern air-conditioned room crafted with warm lighting, superior mattress, study desk, and pristine attached bath.",
      price: 1999,
      currency: "INR",
      occupancy: 2,
      bedType: "Queen/Double Bed",
      hasAC: true,
      image: "/images/rooms/ac-deluxe/1_result.webp",
    },
    {
      id: "executive-suite",
      name: "Executive AC Suite Room",
      description: "Expansive luxury suite ideal for large families or groups of 6, featuring wooden ceiling accents, ample space, and premium comfort.",
      price: 3999,
      currency: "INR",
      occupancy: 6,
      bedType: "Multiple Beds Setup",
      hasAC: true,
      image: "/images/rooms/executive-suite/1_result.webp",
    },
    {
      id: "dormitory",
      name: "Spacious AC/Non AC Dormitory",
      description: "Clean, well-maintained shared dormitory with comfortable individual beds and dedicated lockers. AC and Non-AC options available for tour groups and pilgrims.",
      price: 499,
      priceUnit: "per person",
      currency: "INR",
      occupancy: 15,
      bedType: "Single Bunk/Individual Beds",
      hasAC: true,
      image: "/images/rooms/dormitory/1_result.webp",
    },
  ],

  // Verified Amenities
  amenities: [
    "24-Hour Check-In and Check-Out",
    "Split Air Conditioning",
    "Free High-Speed Wi-Fi",
    "Free Secured On-Site Parking",
    "24×7 Hot Water",
    "Elevator / Lift Access",
    "In-Room Service",
    "Function & Party Hall",
    "Extra Bed Facility Available",
    "Daily Housekeeping",
  ],

  // Nearby Tourist Attractions
  nearbyAttractions: [
    { name: "Jog Falls (Gerosoppa)", distance: "30 km", duration: "40 mins" },
    { name: "Keladi Rameshwara Temple & Museum", distance: "8 km", duration: "15 mins" },
    { name: "Ikkeri Aghoreshwara Temple", distance: "6 km", duration: "12 mins" },
    { name: "Varadamoola (Source of River Varada)", distance: "6 km", duration: "12 mins" },
    { name: "Sigandur Chowdeshwari Temple", distance: "42 km", duration: "55 mins" },
    { name: "Sagara Railway Station (SRF)", distance: "2 km", duration: "5 mins" },
    { name: "Sagara KSRTC Bus Stand", distance: "1.5 km", duration: "4 mins" },
  ],

  // Local Search & FAQ Data (used in UI and Schema)
  faqs: [
    {
      question: "How far is Sangam Residency from Jog Falls?",
      answer: "Sangam Residency is situated in Sagara, Karnataka, which is approximately 30 kilometers (about 40 to 45 minutes by car or bus) from the famous Jog Falls. Sagara is the primary transit and lodging hub for visitors traveling to Jog Falls.",
    },
    {
      question: "What are the room tariffs at Sangam Residency Sagara?",
      answer: "Our room tariffs are: Non AC Deluxe Room at ₹1,199/night (2 guests), AC Deluxe Room at ₹1,999/night (2 guests), Executive AC Suite Room at ₹3,999/night (up to 6 guests), and Spacious AC/Non AC Dormitory beds at ₹499/person per night (ideal for 10–15 guests). An extra bed is also available for ₹299.",
    },
    {
      question: "What are the check-in and check-out timings?",
      answer: "Sangam Residency offers full 24-hour check-in and 24-hour check-out flexibility, making it extremely convenient for guests arriving late by train or traveling on customized sightseeing itineraries.",
    },
    {
      question: "Is vehicle parking available at the hotel?",
      answer: "Yes, we provide free secured on-site parking for all our guests with 24/7 security monitoring. There is ample parking space for cars, traveler vans, and tourist buses.",
    },
    {
      question: "How do I book a room at Sangam Residency?",
      answer: "You can book directly via WhatsApp at +91 9164769438 or by calling our 24/7 reservation desk at +91 9164769438. You can also click the 'Book on WhatsApp' buttons throughout this website to instantly enquire about availability.",
    },
    {
      question: "Are there group stay options available for pilgrimages and tours?",
      answer: "Yes! We offer a spacious AC/Non AC Dormitory for ₹499 per person (accommodating 10 to 15 people) and Executive AC Suite Rooms for up to 6 persons. Both are ideal for pilgrimage groups visiting Sigandur, Keladi, and Ikkeri.",
    },
    {
      question: "Is hot water available in all rooms?",
      answer: "Yes, 24×7 running hot water is available in all attached bathrooms across all room categories.",
    },
  ],
};
