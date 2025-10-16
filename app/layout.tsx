import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://teamworksafeoperations.com'),
  title: {
    default: "Construction Company Lagos & Port Harcourt | Teamwork Safe Operations",
    template: "%s | Teamwork Safe Operations Limited",
  },
  description: "Leading construction, project management, equipment leasing & renewable energy company in Nigeria. ISO certified. Serving Lagos, Port Harcourt since 2009. Get free quote today.",
  keywords: ["construction company Lagos", "construction company Port Harcourt", "project management Nigeria", "equipment leasing Lagos", "solar installation Nigeria", "renewable energy Lagos", "building construction Lagos", "road construction Nigeria", "ISO certified contractor Lagos", "professional construction services Nigeria"],
  authors: [{ name: "Teamwork Safe Operations Limited" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://teamworksafeoperations.com",
    siteName: "Teamwork Safe Operations Limited",
    title: "Construction Company Lagos & Port Harcourt | Teamwork Safe Operations",
    description: "Leading construction, project management, equipment leasing & renewable energy company in Nigeria. ISO certified. Serving Lagos, Port Harcourt since 2009.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teamwork Safe Operations - Construction Excellence in Lagos & Port Harcourt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Company Lagos & Port Harcourt | Teamwork Safe Operations",
    description: "Leading construction, project management, equipment leasing & renewable energy company in Nigeria. ISO certified since 2009.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Teamwork Safe Operations Limited",
    "alternateName": "Teamwork Safe Operations",
    "url": "https://teamworksafeoperations.com",
    "logo": "https://teamworksafeoperations.com/logo.png",
    "description": "Leading construction, project management, equipment leasing and renewable energy company in Nigeria since 2009",
    "foundingDate": "2009",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-801-234-5678",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": ["en", "yo", "ig", "ha"]
    },
    "sameAs": [
      "https://www.instagram.com/teamworksafeoperationsltd?igsh=MXVlejhqcjE0b2U0Yw=="
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressRegion": "Lagos State",
        "addressCountry": "NG"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Port Harcourt",
        "addressRegion": "Rivers State",
        "addressCountry": "NG"
      }
    ]
  };

  const lagosBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://teamworksafeoperations.com/#lagos-office",
    "name": "Teamwork Safe Operations Limited - Lagos Office",
    "image": "https://teamworksafeoperations.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.5244",
      "longitude": "3.3792"
    },
    "url": "https://teamworksafeoperations.com",
    "telephone": "+234-801-234-5678",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  const phBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://teamworksafeoperations.com/#ph-office",
    "name": "Teamwork Safe Operations Limited - Port Harcourt Office",
    "image": "https://teamworksafeoperations.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Port Harcourt",
      "addressRegion": "Rivers State",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "4.8156",
      "longitude": "7.0498"
    },
    "url": "https://teamworksafeoperations.com",
    "telephone": "+234-803-456-7890",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ]
  };

  return (
        <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
          <head>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />
            {/* Schema Markup */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(lagosBusinessSchema) }}
            />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(phBusinessSchema) }}
            />
          </head>
          <body className="font-sans text-text antialiased bg-surface">
            <SiteHeader />
            <main>{children}</main>
            <Footer />
          </body>
        </html>
  );
}
