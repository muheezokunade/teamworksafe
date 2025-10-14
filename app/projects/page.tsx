import ProjectCard from '@/components/shared/ProjectCard';
import projectsData from '@/data/projects.json';

export default function ProjectsPage() {

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

      {/* Projects Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="mb-6 text-muted">
            Showing {projectsData.length} projects
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.map((project) => (
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
    </div>
  );
}



