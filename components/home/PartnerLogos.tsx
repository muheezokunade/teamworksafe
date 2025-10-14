import LogoStrip from '@/components/shared/LogoStrip';
import clientsData from '@/data/clients.json';

export default function PartnerLogos() {
  // Display all client logos
  const featuredClients = clientsData;

  return (
    <section className="py-16 md:py-20 bg-bg">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text mb-4 leading-heading">
            Trusted by Leading Organizations
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto leading-body">
            We're proud to work with some of Nigeria's most respected companies
          </p>
        </div>
        
        <LogoStrip logos={featuredClients} />
      </div>
    </section>
  );
}



