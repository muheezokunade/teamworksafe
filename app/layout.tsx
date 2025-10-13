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
    default: "Teamwork Safe Operations Limited - Experts You Can Trust",
    template: "%s | Teamwork Safe Operations Limited",
  },
  description: "Leading provider of General Construction, Project Management, Renewable Energy Solutions, and Equipment Leasing in Nigeria. Established 2009.",
  keywords: ["construction", "project management", "renewable energy", "equipment leasing", "Nigeria", "Lagos", "Port Harcourt"],
  authors: [{ name: "Teamwork Safe Operations Limited" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://teamworksafeoperations.com",
    siteName: "Teamwork Safe Operations Limited",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teamwork Safe Operations Limited",
      },
    ],
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
      "telephone": "+234-XXX-XXXX-XXX",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": ["en", "yo", "ig", "ha"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/teamwork-safe-operations",
      "https://www.facebook.com/teamworksafeoperations",
      "https://www.instagram.com/teamworksafeoperations"
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
    "telephone": "+234-XXX-XXXX-XXX",
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
    "telephone": "+234-XXX-XXXX-XXX",
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
