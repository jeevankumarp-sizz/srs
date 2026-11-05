import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { BookingProvider } from "@/context/BookingContext";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["600", "700"],
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["500", "600"],
  display: "swap",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#8B5E3C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sangam Residency Sagara | Hotel Near Jog Falls",
    template: "%s | Sangam Residency Sagara",
  },
  description:
    "Hotel in Sagara near Jog Falls & Sigandur. AC/Non-AC rooms, 24/7 hot water, free Wi-Fi & secured parking. 24-hr check-in. Book direct — best rates.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    "hotel in Sagara",
    "hotel near Jog Falls",
    "Sangam Residency Sagara",
    "accommodation Sagara Karnataka",
    "hotel near Sigandur Temple",
    "budget hotel Sagara",
    "family hotel Sagara",
    "hotel near Ikkeri",
    "Sagara Karnataka lodging",
    "affordable stay near Jog Falls",
  ],
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Sangam Residency Sagara | Hotel Near Jog Falls & Sigandur",
    description:
      "Comfortable, affordable hotel in Sagara, Karnataka. AC & Non-AC rooms, Executive Suite, Dormitory. 24/7 hot water, free parking, free Wi-Fi. Near Jog Falls, Sigandur & Ikkeri.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Sangam Residency Hotel Exterior View – Sagara, Karnataka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangam Residency Sagara | Hotel Near Jog Falls",
    description:
      "Comfortable, affordable hotel in Sagara, Karnataka. AC & Non-AC rooms, 24/7 hot water, free parking. Near Jog Falls & Sigandur Temple.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.jpeg",
  },
  verification: {
    google: siteConfig.verification.google || undefined,
    other: siteConfig.verification.bing
      ? { "msvalidate.01": siteConfig.verification.bing }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        {/* Preload primary custom font (Latin WOFF2) to eliminate font latency & render-blocking delay */}
        <link
          rel="preload"
          href="/_next/static/media/f9e1dbe9676d9bb6-s.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/media/f9e1dbe9676d9bb6-s.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload critical LCP Hero Banner image with high priority */}
        <link
          rel="preload"
          as="image"
          href="/images/home/Home Section.webp"
          type="image/webp"
          fetchPriority="high"
        />
        {/* Inline critical CSS for instantaneous above-the-fold first paint */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --background: #FCFAF7;
                --foreground: #2B2B2B;
                --primary: #8B5E3C;
                --accent-gold: #C89B5E;
              }
              html, body {
                background-color: #FCFAF7;
                color: #2B2B2B;
                margin: 0;
                padding: 0;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              }
              #hero {
                background-color: #2B2B2B;
                min-height: 92vh;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              .glass-nav {
                background: rgba(252, 250, 247, 0.85);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border-bottom: 1px solid rgba(139, 94, 60, 0.08);
              }
            `,
          }}
        />
      </head>
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
