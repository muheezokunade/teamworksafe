import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import servicesData from '@/data/services.json';
import projectsData from '@/data/projects.json';
import ProjectCard from '@/components/shared/ProjectCard';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: 'Service Not Found' };
  
  return {
    title: service.title,
    description: service.fullDescription,
  };
}

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. During our initial consultation, we provide detailed schedules with milestones and delivery dates.',
  },
  {
    question: 'Do you provide warranties?',
    answer: 'Yes, we provide comprehensive warranties on all our work. Warranty terms depend on the specific service and are clearly outlined in our contracts.',
  },
  {
    question: 'Can you work with existing contractors or consultants?',
    answer: "Absolutely. We collaborate seamlessly with clients' existing teams, consultants, and contractors to ensure project success.",
  },
  {
    question: 'What safety measures do you implement?',
    answer: 'We maintain strict HSE protocols aligned with ISO 45001 and ISO 14001 standards. All personnel receive regular safety training, and we conduct daily safety briefings on all sites.',
  },
];

export default function ServiceDetailPage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  // Find related projects
  const relatedProjects = projectsData
    .filter((p) => p.service === service.title)
    .slice(0, 2);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary text-surface overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-container mx-auto px-4 md:px-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-heading">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl leading-body text-surface/90 max-w-2xl">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading font-bold text-3xl text-text mb-6 leading-heading">
                What We Do
              </h2>
              <p className="text-muted leading-body mb-8">
                Our {service.title.toLowerCase()} services cover a comprehensive range of 
                activities designed to meet your specific requirements.
              </p>
              <ul className="space-y-3">
                {service.scope.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg rounded-lg p-8">
              <h3 className="font-heading font-bold text-2xl text-text mb-6 leading-heading">
                Our Process
              </h3>
              <div className="space-y-6">
                {service.process.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-surface font-heading font-bold text-lg">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-lg text-text mb-1">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted leading-body">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-bg">
          <div className="max-w-container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 leading-heading">
                Recent Projects
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto leading-body">
                See how we've delivered success for our clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((project) => (
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
      )}

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 text-center leading-heading">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-heading font-semibold text-text hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted leading-body">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 leading-heading">
            Ready to Get Started?
          </h2>
          <p className="text-lg leading-body text-surface/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-text font-semibold">
              <Link href="/contact?type=quote">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-surface text-surface hover:bg-surface hover:text-primary font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

