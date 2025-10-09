import Hero from '@/components/home/Hero';
import ServicesPreview from '@/components/home/ServicesPreview';
import StatsBand from '@/components/home/StatsBand';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import HSETeaser from '@/components/home/HSETeaser';
import Testimonials from '@/components/home/Testimonials';
import PartnerLogos from '@/components/home/PartnerLogos';
import ContactStrip from '@/components/home/ContactStrip';

export default function Home() {
  return (
    <>
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
