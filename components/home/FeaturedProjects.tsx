'use client';

import { useState } from 'react';
import ProjectCard from '@/components/shared/ProjectCard';
import FilterChips from '@/components/shared/FilterChips';
import projectsData from '@/data/projects.json';

const filters = ['All', 'Commercial', 'Energy', 'Residential', 'Oil & Gas'];

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.sector === activeFilter;
  }).slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 leading-heading">
            Featured Projects
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-body mb-8">
            Explore our portfolio of successful projects across various sectors
          </p>
          
          <div className="flex justify-center">
            <FilterChips
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
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
      </div>
    </section>
  );
}



