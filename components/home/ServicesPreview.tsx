import ServiceCard from '@/components/shared/ServiceCard';
import servicesData from '@/data/services.json';

export default function ServicesPreview() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 leading-heading">
            Our Services
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-body">
            Comprehensive solutions for all your construction, energy, and equipment needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
  );
}



