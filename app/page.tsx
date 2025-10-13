import type { Metadata } from "next";
import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import StatsBand from '@/components/home/StatsBand';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import HSETeaser from '@/components/home/HSETeaser';
import Testimonials from '@/components/home/Testimonials';
import PartnerLogos from '@/components/home/PartnerLogos';
import ContactStrip from '@/components/home/ContactStrip';

export const metadata: Metadata = {
  title: "Construction Company Lagos & Port Harcourt | Teamwork Safe Operations",
  description: "Leading construction, project management, equipment leasing & renewable energy company in Nigeria. ISO certified. Serving Lagos, Port Harcourt since 2009. Get free quote today.",
  keywords: [
    "construction company Lagos",
    "construction company Port Harcourt",
    "project management Nigeria",
    "equipment leasing Lagos",
    "solar installation Nigeria",
    "renewable energy Lagos",
    "building construction Lagos",
    "road construction Nigeria",
    "ISO certified contractor Lagos",
    "professional construction services Nigeria"
  ],
  openGraph: {
    title: "Construction Company Lagos & Port Harcourt | Teamwork Safe Operations",
    description: "ISO certified construction, project management & renewable energy services across Nigeria since 2009",
    url: "https://teamworksafeoperations.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Teamwork Safe Operations - Construction Excellence",
      },
    ],
  },
  alternates: {
    canonical: "https://teamworksafeoperations.com"
  }
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Teamwork Safe Operations provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide General Construction (Buildings, Roads, Bridges), Project Management, Equipment Leasing & Maintenance, and Renewable Energy Solutions across Lagos, Port Harcourt, and Nigeria."
        }
      },
      {
        "@type": "Question",
        "name": "Where are you located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have our head office in Lagos and a branch office in Port Harcourt, Rivers State, Nigeria. We serve clients across all Nigerian states."
        }
      },
      {
        "@type": "Question",
        "name": "Are you ISO certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are ISO certified with ISO 9001:2015 (Quality Management), ISO 45001:2018 (Occupational Health & Safety), and ISO 14001:2015 (Environmental Management)."
        }
      },
      {
        "@type": "Question",
        "name": "How long have you been in business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teamwork Safe Operations was founded in 2009 and officially incorporated in 2018, giving us over 15 years of experience in the Nigerian construction industry."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ServicesPreview />
      <StatsBand />
      <WhyChooseUs />
      <FeaturedProjects />
      <HSETeaser />
      <Testimonials />
      <PartnerLogos />
      <ContactStrip />
    </>
  );
}
