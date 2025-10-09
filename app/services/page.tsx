import { Metadata } from 'next';
import ServiceCard from '@/components/shared/ServiceCard';
import servicesData from '@/data/services.json';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive construction, project management, renewable energy, equipment leasing, maintenance, and consultation services across Nigeria.',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-heading">
              Our Services
            </h1>
            <p className="text-lg md:text-xl leading-body text-surface/90">
              From construction and project management to renewable energy and equipment services, 
              we provide comprehensive solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



