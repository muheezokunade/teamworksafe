import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans text-text antialiased bg-surface">
        <SiteHeader />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
