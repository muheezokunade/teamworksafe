'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import LogoStrip from '@/components/shared/LogoStrip';
import FilterChips from '@/components/shared/FilterChips';
import clientsData from '@/data/clients.json';
import testimonialsData from '@/data/testimonials.json';
import TestimonialCard from '@/components/shared/TestimonialCard';

const sectors = ['All', 'Real Estate', 'Oil & Gas', 'Manufacturing', 'Government', 'Banking', 'Telecommunications'];

export default function ClientsPage() {
  const [sectorFilter, setSectorFilter] = useState('All');

  const filteredClients = clientsData.filter((client) => {
    if (sectorFilter === 'All') return true;
    return client.sector === sectorFilter;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-heading">
            Our Clients
          </h1>
          <p className="text-lg md:text-xl leading-body text-surface/90 max-w-2xl">
            We're proud to partner with leading organizations across Nigeria, delivering excellence in every project
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-bg">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
                62+
              </div>
              <div className="text-muted uppercase tracking-wide">Active Clients</div>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
                98%
              </div>
              <div className="text-muted uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div>
              <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
                85%
              </div>
              <div className="text-muted uppercase tracking-wide">Repeat Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-surface sticky top-20 z-40 border-b border-border">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h3 className="text-sm font-semibold text-text mb-3">Filter by Sector</h3>
          <FilterChips
            filters={sectors}
            activeFilter={sectorFilter}
            onFilterChange={setSectorFilter}
          />
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="mb-6 text-muted text-center">
            Showing {filteredClients.length} clients
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="bg-bg border border-border rounded-lg p-6 hover:border-accent transition-colors group"
              >
                <div className="relative h-24 mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="font-heading font-semibold text-sm text-text text-center mb-2 line-clamp-2">
                  {client.name}
                </h3>
                <p className="text-xs text-muted text-center">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 leading-heading">
              What Our Clients Say
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-body">
              Hear directly from the organizations we've partnered with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.slice(0, 6).map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



