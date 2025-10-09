'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import ProjectCard from '@/components/shared/ProjectCard';
import FilterChips from '@/components/shared/FilterChips';
import projectsData from '@/data/projects.json';

const sectors = ['All', 'Commercial', 'Energy', 'Residential', 'Oil & Gas'];
const statuses = ['All', 'Completed', 'In Progress'];
const years = ['All', '2024', '2023', '2022'];

export default function ProjectsPage() {
  const [sectorFilter, setSectorFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');

  const filteredProjects = projectsData.filter((project) => {
    if (sectorFilter !== 'All' && project.sector !== sectorFilter) return false;
    if (statusFilter !== 'All' && project.status !== statusFilter) return false;
    if (yearFilter !== 'All' && project.year !== yearFilter) return false;
    return true;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-heading">
            Our Projects
          </h1>
          <p className="text-lg md:text-xl leading-body text-surface/90 max-w-2xl">
            Explore our portfolio of successful projects across Nigeria's construction, energy, and industrial sectors
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-bg sticky top-20 z-40 border-b border-border">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-text mb-2">Sector</h3>
              <FilterChips
                filters={sectors}
                activeFilter={sectorFilter}
                onFilterChange={setSectorFilter}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-text mb-2">Status</h3>
                <FilterChips
                  filters={statuses}
                  activeFilter={statusFilter}
                  onFilterChange={setStatusFilter}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text mb-2">Year</h3>
                <FilterChips
                  filters={years}
                  activeFilter={yearFilter}
                  onFilterChange={setYearFilter}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="mb-6 text-muted">
            Showing {filteredProjects.length} projects
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                client={project.client}
                sector={project.sector}
                location={project.location}
                year={project.year}
                status={project.status}
                image={project.image}
                href={`/projects/${project.slug}`}
                tags={project.tags}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted text-lg">No projects found matching your filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}



