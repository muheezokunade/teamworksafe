'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus } from 'lucide-react';
import FilterChips from '@/components/shared/FilterChips';
import equipmentData from '@/data/equipment.json';

const categories = ['All', 'Excavators', 'Loaders', 'Generators', 'Bulldozers', 'Compactors', 'Material Handling'];
const locations = ['All', 'Lagos', 'Port Harcourt'];
const availability = ['All', 'Available', 'Rented', 'Maintenance'];

export default function EquipmentPage() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [availabilityFilter, setAvailabilityFilter] = useState('All');
  const [quoteItems, setQuoteItems] = useState<string[]>([]);

  const filteredEquipment = equipmentData.filter((item) => {
    if (categoryFilter !== 'All' && item.category !== categoryFilter) return false;
    if (locationFilter !== 'All' && item.location !== locationFilter) return false;
    if (availabilityFilter !== 'All' && item.availability !== availabilityFilter) return false;
    return true;
  });

  const addToQuote = (id: string) => {
    if (!quoteItems.includes(id)) {
      setQuoteItems([...quoteItems, id]);
    }
  };

  const removeFromQuote = (id: string) => {
    setQuoteItems(quoteItems.filter((item) => item !== id));
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-start">
            <div className="max-w-3xl">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-heading">
                Equipment Catalogue
              </h1>
              <p className="text-lg md:text-xl leading-body text-surface/90">
                Browse our fleet of well-maintained construction and industrial equipment available for lease
              </p>
            </div>
            
            {/* Quote Basket */}
            <Link href="/equipment/quote">
              <Button className="bg-accent hover:bg-accent/90 text-text font-semibold relative">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Quote Basket
                {quoteItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-surface text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                    {quoteItems.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-bg sticky top-20 z-40 border-b border-border">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-text mb-2">Category</h3>
              <FilterChips
                filters={categories}
                activeFilter={categoryFilter}
                onFilterChange={setCategoryFilter}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-text mb-2">Location</h3>
                <FilterChips
                  filters={locations}
                  activeFilter={locationFilter}
                  onFilterChange={setLocationFilter}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text mb-2">Availability</h3>
                <FilterChips
                  filters={availability}
                  activeFilter={availabilityFilter}
                  onFilterChange={setAvailabilityFilter}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="mb-6 text-muted">
            Showing {filteredEquipment.length} equipment
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredEquipment.map((equipment) => (
              <div
                key={equipment.id}
                className="bg-surface border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
              >
                <div className="relative h-56">
                  <Image
                    src={equipment.image}
                    alt={equipment.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${
                        equipment.availability === 'Available'
                          ? 'bg-green-600 text-white'
                          : equipment.availability === 'Rented'
                          ? 'bg-amber-600 text-white'
                          : 'bg-gray-600 text-white'
                      }`}
                    >
                      {equipment.availability}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-text mb-2 leading-heading">
                    {equipment.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {equipment.category}
                    </Badge>
                    <span className="text-xs text-muted">{equipment.location}</span>
                  </div>
                  
                  <div className="space-y-1 text-sm text-muted mb-4">
                    <p><span className="font-semibold text-text">Brand:</span> {equipment.brand}</p>
                    <p><span className="font-semibold text-text">Model:</span> {equipment.model}</p>
                    <p><span className="font-semibold text-text">Capacity:</span> {equipment.capacity}</p>
                  </div>

                  <div className="border-t border-border pt-4 mb-4">
                    <div className="text-xs text-muted mb-2">Rental Rates</div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div>
                        <div className="font-semibold text-text">Daily</div>
                        <div className="text-muted">{equipment.rate.daily}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-text">Weekly</div>
                        <div className="text-muted">{equipment.rate.weekly}</div>
                      </div>
                      <div>
                        <div className="font-semibold text-text">Monthly</div>
                        <div className="text-muted">{equipment.rate.monthly}</div>
                      </div>
                    </div>
                  </div>

                  {quoteItems.includes(equipment.id) ? (
                    <Button
                      onClick={() => removeFromQuote(equipment.id)}
                      variant="outline"
                      className="w-full border-primary text-primary"
                    >
                      Remove from Quote
                    </Button>
                  ) : (
                    <Button
                      onClick={() => addToQuote(equipment.id)}
                      disabled={equipment.availability !== 'Available'}
                      className="w-full bg-primary hover:bg-primary/90 text-surface font-semibold"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add to Quote
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



