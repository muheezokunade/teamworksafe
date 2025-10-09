'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Briefcase, Clock, ChevronRight } from 'lucide-react';
import FilterChips from '@/components/shared/FilterChips';
import jobsData from '@/data/jobs.json';

const departments = ['All', 'Project Management', 'Engineering', 'Equipment Services', 'HSE', 'Sales & Marketing', 'Administration'];
const locations = ['All', 'Lagos', 'Port Harcourt', 'Lagos / Port Harcourt'];
const types = ['All', 'Full-time', 'Contract', 'Internship'];

export default function CareersPage() {
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredJobs = jobsData.filter((job) => {
    if (job.status === 'Filled') return false;
    if (departmentFilter !== 'All' && job.department !== departmentFilter) return false;
    if (locationFilter !== 'All' && job.location !== locationFilter) return false;
    if (typeFilter !== 'All' && job.type !== typeFilter) return false;
    return true;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-heading">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl leading-body text-surface/90 max-w-2xl">
            Build your career with a dynamic team committed to excellence, safety, and innovation in Nigeria's construction and energy sectors
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl text-text mb-8 text-center leading-heading">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                Career Growth
              </h3>
              <p className="text-sm text-muted leading-body">
                Continuous learning, professional development programs, and clear advancement paths
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                Work-Life Balance
              </h3>
              <p className="text-sm text-muted leading-body">
                Competitive compensation, health insurance, and supportive work environment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                Impactful Projects
              </h3>
              <p className="text-sm text-muted leading-body">
                Work on landmark projects that shape Nigeria's infrastructure and energy future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-bg sticky top-20 z-40 border-b border-border">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-text mb-2">Department</h3>
              <FilterChips
                filters={departments}
                activeFilter={departmentFilter}
                onFilterChange={setDepartmentFilter}
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
                <h3 className="text-sm font-semibold text-text mb-2">Type</h3>
                <FilterChips
                  filters={types}
                  activeFilter={typeFilter}
                  onFilterChange={setTypeFilter}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="mb-6 text-muted">
            {filteredJobs.length} open positions
          </div>

          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Link
                key={job.id}
                href={`/careers/${job.id}`}
                className="block bg-bg border border-border rounded-lg p-6 hover:border-accent transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-text mb-2 group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary text-surface">Open</Badge>
                    <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted text-lg">No open positions matching your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 leading-heading">
            Don't See a Perfect Match?
          </h2>
          <p className="text-lg leading-body text-surface/90 mb-8 max-w-2xl mx-auto">
            Send us your CV anyway! We're always looking for talented individuals to join our growing team.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-text font-semibold">
            <Link href="/contact">Send General Application</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}



