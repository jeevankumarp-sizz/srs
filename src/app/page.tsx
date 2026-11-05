import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  Gallery,
  Reviews,
  BookingModal,
  FloatingCTA,
} from "@/components/ClientInteractive";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* Hero Banner with Booking Card */}
        <Hero />

        {/* Narrated Property Information */}
        <About />

        {/* Display Rooms Grid */}
        <Rooms />

        {/* Hotel Amenities Grid */}
        <Amenities />

        {/* Filterable Masonry Gallery */}
        <Gallery />

        {/* Carousel Reviews */}
        <Reviews />

        {/* Frequently Asked Questions for Guests & Local SEO */}
        <FAQ />

        {/* Contact Coordinates & Map */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Overlay Booking Form Modal */}
      <BookingModal />

      {/* Floating CTA Widget & Mobile Bottom Bar */}
      <FloatingCTA />
    </>
  );
}
