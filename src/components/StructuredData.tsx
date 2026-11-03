import { siteConfig } from "@/config/site";

export default function StructuredData() {
  const baseUrl = siteConfig.url;

  // 1. Hotel / LodgingBusiness Schema
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${baseUrl}/#hotel`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: baseUrl,
    logo: `${baseUrl}${siteConfig.logo}`,
    image: [
      `${baseUrl}${siteConfig.ogImage}`,
      `${baseUrl}/images/about.jpg`,
      `${baseUrl}/images/rooms/ac-deluxe/1_result.webp`,
      `${baseUrl}/images/rooms/non-ac-deluxe/1_result.webp`,
      `${baseUrl}/images/rooms/executive-suite/1_result.webp`,
      `${baseUrl}/images/rooms/dormitory/1_result.webp`,
    ],
    telephone: siteConfig.contact.phone,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: siteConfig.currenciesAccepted,
    paymentAccepted: siteConfig.paymentAccepted,
    checkinTime: siteConfig.checkinTime,
    checkoutTime: siteConfig.checkoutTime,
    openingHours: siteConfig.openingHours,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.googleMapsUrl,
    amenityFeature: siteConfig.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.score,
      reviewCount: siteConfig.rating.reviewCount,
      bestRating: siteConfig.rating.bestRating,
      worstRating: 1,
    },
    containsPlace: siteConfig.rooms.map((room) => ({
      "@type": "HotelRoom",
      name: room.name,
      description: room.description,
      bed: {
        "@type": "BedDetails",
        typeOfBed: room.bedType,
      },
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: room.occupancy,
      },
      offers: {
        "@type": "Offer",
        price: room.price,
        priceCurrency: room.currency,
        availability: "https://schema.org/InStock",
        url: `${baseUrl}/#rooms`,
      },
    })),
  };

  // 2. WebSite Schema (Enables Sitelinks Search Box and Brand Authority)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${baseUrl}/#hotel`,
    },
    inLanguage: "en-IN",
  };

  // 3. WebPage & Breadcrumb Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: `${siteConfig.name} | Best Hotel in Sagara Karnataka | Near Jog Falls`,
    isPartOf: {
      "@id": `${baseUrl}/#website`,
    },
    about: {
      "@id": `${baseUrl}/#hotel`,
    },
    description: siteConfig.description,
    inLanguage: "en-IN",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
      ],
    },
  };

  // 4. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
