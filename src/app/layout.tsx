import type { Metadata } from "next";
import { Playfair_Display, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { BookingProvider } from "@/context/BookingContext";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sangam Residency | Best Hotel in Sagara Karnataka | Nearby Jog Falls",
  description: "Welcome to Sangam Residency in Sagara, Karnataka. Enjoy a peaceful and comfortable stay with clean family rooms, deluxe AC rooms, party hall, and 24-hour check-in/out. Perfect for families, tourists, and business travelers visiting Jog Falls, Keladi, and Ikkeri. Contact us for direct booking.",
  keywords: "Sangam Residency Sagara, hotels in Sagara, lodging in Sagara, budget hotels Sagara Karnataka, family hotel Sagara, luxury rooms Sagara, hotels near Jog Falls, hotels near Sagara railway station, Jog Falls accommodation, Keladi temple stay",
  openGraph: {
    title: "Sangam Residency | Premium Hotel Stay in Sagara, Karnataka",
    description: "Enjoy a peaceful and comfortable stay at Sangam Residency, Sagara. Clean rooms, modern reception, and warm service. Book via WhatsApp or call us directly.",
    url: "https://sangamresidency.com",
    siteName: "Sangam Residency",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${manrope.variable} ${poppins.variable} font-manrope antialiased bg-background text-foreground pb-[76px] md:pb-0`}
      >
        <BookingProvider>
          <ScrollProgress />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </BookingProvider>
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
