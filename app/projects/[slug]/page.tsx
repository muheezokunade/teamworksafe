import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Calendar, Building2, CheckCircle } from 'lucide-react';
import projectsData from '@/data/projects.json';
import ProjectCard from '@/components/shared/ProjectCard';
import TestimonialCard from '@/components/shared/TestimonialCard';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  
  return {
    title: project.title,
    description: project.overview,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  // Find related projects
  const relatedProjects = projectsData
    .filter((p) => p.sector === project.sector && p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary text-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-accent text-text">{project.sector}</Badge>
            <Badge className={project.status === 'Completed' ? 'bg-green-600' : 'bg-amber-600'}>
              {project.status}
            </Badge>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-heading">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-surface/90">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading font-bold text-3xl text-text mb-6 leading-heading">
                Project Overview
              </h2>
              <p className="text-muted leading-body text-lg mb-8">
                {project.overview}
              </p>

              <h3 className="font-heading font-bold text-2xl text-text mb-4 leading-heading">
                Objectives
              </h3>
              <ul className="space-y-3 mb-8">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted leading-body">{objective}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-heading font-bold text-2xl text-text mb-4 leading-heading">
                Scope and Approach
              </h3>
              <p className="text-muted leading-body">
                {project.scopeAndApproach}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-bg rounded-lg p-6">
                <h3 className="font-heading font-semibold text-lg text-text mb-4">
                  Project Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-muted mb-1">Service</div>
                    <div className="font-semibold text-text">{project.service}</div>
                  </div>
                  <div>
                    <div className="text-muted mb-1">Duration</div>
                    <div className="font-semibold text-text">{project.duration}</div>
                  </div>
                  <div>
                    <div className="text-muted mb-1">Year</div>
                    <div className="font-semibold text-text">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-muted mb-1">Location</div>
                    <div className="font-semibold text-text">{project.location}</div>
                  </div>
                  <div>
                    <div className="text-muted mb-1">Status</div>
                    <div className="font-semibold text-text">{project.status}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 text-center leading-heading">
            Project Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.outcomes.metrics.map((metric, index) => (
              <div key={index} className="bg-surface border border-border rounded-lg p-6 text-center">
                <div className="font-heading font-bold text-3xl text-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 text-center leading-heading">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 text-center leading-heading">
            Client Feedback
          </h2>
          <TestimonialCard
            quote={project.testimonial.quote}
            author={project.testimonial.author}
            role={project.testimonial.role}
            company={project.client}
          />
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-container mx-auto px-4 md:px-6">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 text-center leading-heading">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard
                  key={relatedProject.id}
                  title={relatedProject.title}
                  client={relatedProject.client}
                  sector={relatedProject.sector}
                  location={relatedProject.location}
                  year={relatedProject.year}
                  status={relatedProject.status}
                  image={relatedProject.image}
                  href={`/projects/${relatedProject.slug}`}
                  tags={relatedProject.tags}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 leading-heading">
            Have a Similar Project in Mind?
          </h2>
          <p className="text-lg leading-body text-surface/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with the same excellence and dedication.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-text font-semibold">
            <Link href="/contact?type=quote">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}



