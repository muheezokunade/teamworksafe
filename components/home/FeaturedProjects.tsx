'use client';

import ProjectCard from '@/components/shared/ProjectCard';
import projectsData from '@/data/projects.json';

export default function FeaturedProjects() {
  const featuredProjects = projectsData.slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 leading-heading">
            Featured Projects
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-body">
            Explore our portfolio of successful projects across various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              client={project.client}
              sector={project.sector}
              location={project.location}
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



