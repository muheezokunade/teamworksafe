import { Metadata } from 'next';
import Image from 'next/image';
import { FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Experts In Construction, Project Management, Renewable Energy, Equipment Leasing & Maintenance. Founded in 2009, incorporated in 2018.',
};

const timeline = [
  {
    year: '2009',
    title: 'Company Founded',
    description: 'Teamwork Safe Operations was established to provide quality construction and engineering services.',
  },
  {
    year: '2018',
    title: 'Official Incorporation',
    description: 'Registered as a limited liability company, expanding our service offerings and client base.',
  },
  {
    year: '2020',
    title: 'Port Harcourt Branch',
    description: 'Opened our Port Harcourt office to better serve clients in the South-South region.',
  },
  {
    year: '2023',
    title: 'Renewable Energy Expansion',
    description: 'Launched dedicated renewable energy division, completing 5MW solar installation.',
  },
];

const leadership = [
  {
    name: 'Engr. Michael Adeyemi',
    role: 'Managing Director',
    bio: 'Over 20 years of experience in construction and project management across Nigeria and West Africa.',
    image: '/images/team/md.jpg',
  },
  {
    name: 'Mrs. Grace Okafor',
    role: 'Director of Operations',
    bio: 'Expert in operational excellence and HSE management with international certifications.',
    image: '/images/team/operations.jpg',
  },
  {
    name: 'Engr. Ibrahim Musa',
    role: 'Technical Director',
    bio: 'Specialized in renewable energy systems and sustainable engineering solutions.',
    image: '/images/team/technical.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-heading">
              Experts In Construction, Project Management, Renewable Energy, Equipment Leasing & Maintenance.
            </h1>
            <p className="text-lg md:text-xl leading-body text-surface/90">
              Teamwork Safe Operations Limited was founded in 2009 and officially incorporated as a 
              limited liability company in 2018. Since then, we have grown into a dynamic and trusted 
              force in Nigeria's engineering and construction industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-office.jpg"
                alt="Teamwork Safe Operations Office"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6 leading-heading">
                Our Story
              </h2>
              <div className="space-y-4 text-muted leading-body">
                <p>
                  Built on the deep expertise of our founder and a team of forward-thinking professionals, 
                  our company is driven by a shared commitment to excellence, innovation, and client success.
                </p>
                <p>
                  With our head office in Lagos and a strategic branch in Port Harcourt, we proudly deliver 
                  a comprehensive suite of high-impact services, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>General Construction (Buildings, Roads, Bridges, etc)</li>
                  <li>Project Management</li>
                  <li>Leasing & Maintenance of Construction Plants and Equipment</li>
                  <li>Renewable Energy Solutions</li>
                </ul>
                <p>
                  We serve a diverse clientele, from government institutions to private corporations, 
                  providing tailored solutions that consistently exceed expectations and meet the highest 
                  industry standards.
                </p>
                <p>
                  As we look ahead, we are actively expanding into major Nigerian cities, broadening our 
                  reach, and reaffirming our position as the partner of choice for dependable, forward-thinking 
                  infrastructure solutions.
                </p>
                <p>
                  At Teamwork Safe Operations Limited, we don't just build infrastructure, we build trust, 
                  partnerships, and a better future by empowering businesses and professionals to thrive in 
                  a technology-driven world through cutting-edge services and transformative training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-bg">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-12 text-center leading-heading">
            Our Journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-surface border border-border rounded-lg p-6 h-full">
                  <div className="text-4xl font-heading font-bold text-accent mb-3">
                    {item.year}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-body">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 leading-heading">
              Our Leadership Team
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-body">
              Experienced professionals driving our vision forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-text mb-1">
                  {leader.name}
                </h3>
                <div className="text-accent font-semibold mb-3">
                  {leader.role}
                </div>
                <p className="text-sm text-muted leading-body">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 leading-heading">
              Certifications & Compliance
            </h2>
            <p className="text-surface/90 text-lg max-w-2xl mx-auto leading-body">
              Our commitment to quality and safety is validated by industry certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-surface/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="font-heading font-bold text-xl mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-surface/80">Quality Management System</p>
            </div>
            <div className="bg-surface/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="font-heading font-bold text-xl mb-2">ISO 45001:2018</h3>
              <p className="text-sm text-surface/80">Occupational Health & Safety</p>
            </div>
            <div className="bg-surface/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="font-heading font-bold text-xl mb-2">ISO 14001:2015</h3>
              <p className="text-sm text-surface/80">Environmental Management</p>
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-2 border-surface text-surface hover:bg-surface hover:text-primary font-semibold">
              <FileDown className="mr-2 h-4 w-4" />
              Download Company Profile
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}



