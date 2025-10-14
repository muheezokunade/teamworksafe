import { Metadata } from 'next';
import { Shield, FileText, AlertTriangle, Award, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Health, Safety & Environment (HSE)',
  description: 'Our commitment to zero-harm workplaces, environmental stewardship, and comprehensive HSE management systems.',
};

const policies = [
  {
    title: 'Safety First Culture',
    description: 'Every team member has the right and responsibility to stop work if safety is compromised. We maintain a zero-tolerance policy for unsafe practices.',
  },
  {
    title: 'Continuous Training',
    description: 'Regular HSE training programs, toolbox talks, and competency assessments ensure our workforce stays informed and capable.',
  },
  {
    title: 'Risk Management',
    description: 'Comprehensive risk assessments, Job Safety Analysis (JSA), and hazard identification before commencing any work activity.',
  },
  {
    title: 'Environmental Stewardship',
    description: 'Minimizing environmental impact through waste management, pollution prevention, and sustainable resource use.',
  },
];

const programs = [
  {
    title: 'Incident Reporting',
    description: 'Anonymous and open reporting channels for incidents, near-misses, and safety concerns with rapid investigation and corrective action.',
  },
  {
    title: 'Emergency Response',
    description: 'Trained emergency response teams, regular drills, and comprehensive emergency action plans for all sites.',
  },
  {
    title: 'Health Surveillance',
    description: 'Regular medical examinations, occupational health monitoring, and wellness programs for all personnel.',
  },
  {
    title: 'Contractor Management',
    description: 'Strict pre-qualification, induction, and monitoring of subcontractors to ensure HSE compliance across the supply chain.',
  },
];

const certifications = [
  { name: 'ISO 45001:2018', description: 'Occupational Health and Safety Management' },
  { name: 'ISO 14001:2015', description: 'Environmental Management Systems' },
  { name: 'ISO 9001:2015', description: 'Quality Management Systems' },
  { name: 'NEBOSH IGC', description: 'Team Certifications' },
];

export default function HSEPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-12 h-12 text-accent" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl leading-heading">
                Health, Safety & Environment
              </h1>
            </div>
            <p className="text-lg md:text-xl leading-body text-surface/90">
              Safety is not just a priority—it's our core value. We are committed to creating 
              zero-harm workplaces and protecting the environment in all our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Highlights */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 text-center leading-heading">
            Our HSE Policy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-text mb-2">
                    {policy.title}
                  </h3>
                  <p className="text-muted leading-body">
                    {policy.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 text-center leading-heading">
            HSE Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-surface border border-border rounded-lg p-6">
                <h3 className="font-heading font-semibold text-xl text-text mb-3">
                  {program.title}
                </h3>
                <p className="text-muted leading-body">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Reporting Flow */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 text-center leading-heading">
            Incident Reporting Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-surface" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                1. Report
              </h3>
              <p className="text-sm text-muted leading-body">
                Immediately report any incident, injury, or near-miss to supervisor
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-surface" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                2. Document
              </h3>
              <p className="text-sm text-muted leading-body">
                Complete incident report form with all relevant details
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-surface" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                3. Investigate
              </h3>
              <p className="text-sm text-muted leading-body">
                HSE team conducts thorough investigation to identify root causes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-surface" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                4. Corrective Action
              </h3>
              <p className="text-sm text-muted leading-body">
                Implement preventive measures and share lessons learned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 mx-auto mb-6 text-accent" />
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-heading">
              Certifications & Standards
            </h2>
            <p className="text-surface/90 text-lg max-w-2xl mx-auto leading-body">
              We maintain international HSE certifications and continuously improve our management systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-surface/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="font-heading font-bold text-xl mb-2">{cert.name}</h3>
                <p className="text-sm text-surface/80">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



