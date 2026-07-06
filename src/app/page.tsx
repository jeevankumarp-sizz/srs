import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingCTA from "@/components/FloatingCTA";

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
