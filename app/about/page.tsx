import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Construction & Engineering Experts in Lagos & Port Harcourt",
  description: "Founded in 2009, Teamwork Safe Operations Limited is a leading construction, project management, equipment leasing and renewable energy company serving Lagos, Port Harcourt and across Nigeria.",
  keywords: [
    "about Teamwork Safe Operations",
    "construction company history Nigeria",
    "engineering company Lagos",
    "Port Harcourt construction",
    "infrastructure development Nigeria",
    "construction expertise Lagos"
  ],
  openGraph: {
    title: "About Teamwork Safe Operations Limited",
    description: "Founded in 2009, serving government and private corporations with construction, project management, and renewable energy solutions across Nigeria.",
    url: "https://teamworksafeoperations.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://teamworksafeoperations.com/about"
  }
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
    description: 'Launched dedicated renewable energy division, completing major solar installations.',
  },
];

const values = [
  {
    title: 'Excellence',
    description: 'We deliver superior quality in every project, exceeding industry standards and client expectations.',
    icon: '⭐',
  },
  {
    title: 'Integrity',
    description: 'Transparency and honesty guide all our business relationships and project execution.',
    icon: '🤝',
  },
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technology and sustainable solutions for modern infrastructure.',
    icon: '💡',
  },
  {
    title: 'Safety',
    description: 'Zero harm is our goal. We prioritize the health and safety of our team and stakeholders.',
    icon: '🛡️',
  },
];

export default function About() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/hero/hero-2.jpg"
            alt="About Teamwork Safe Operations"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 text-white">
              Building Nigeria&apos;s Future Since 2009
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Experts in construction, project management, renewable energy, equipment leasing & maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl mb-6 text-black">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Built on the deep expertise of our founder and a team of forward-thinking professionals, 
                  our company is driven by a shared commitment to excellence, innovation, and client success.
                </p>
                <p>
                  With our head office in <strong className="text-black">Lagos</strong> and a strategic branch 
                  in <strong className="text-black">Port Harcourt</strong>, we proudly deliver a comprehensive 
                  suite of high-impact services across Nigeria.
                </p>
                <p>
                  We serve a diverse clientele, from government institutions to private corporations, providing 
                  tailored solutions that consistently exceed expectations and meet the highest industry standards.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/hero/hero-1.jpg"
                alt="Teamwork Safe Operations projects"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700 font-semibold">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">236+</div>
              <div className="text-gray-700 font-semibold">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-700 font-semibold">Office Locations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700 font-semibold">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-black">
              Meet Our Founder
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Leadership built on expertise and decades of industry experience
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Director Photo */}
                <div className="md:col-span-1">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-200">
                    <Image
                      src="https://i.postimg.cc/pdTkHpcG/Gemini-Generated-Image-muhoo1muhoo1muho.png"
                      alt="Nweke Okechukwu - Managing Director"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                
                {/* Profile content */}
                <div className="md:col-span-2">
                  <h3 className="font-bold text-3xl text-black mb-2">
                    Nweke Okechukwu
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-4">
                    Managing Director
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    <span className="font-semibold">BSc Building, PGD Theology, MBA, MNIOB</span>
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    He holds a degree in Building from University of Lagos, Lagos State. Nweke Okechukwu has practiced Civil and Building Engineering for over 25yrs. His practice cuts across several parts of Nigeria and Africa. He has managed and supervised projects such as:
                  </p>
                  
                  <div className="space-y-2 text-gray-700">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Estate Buildings within Nigeria</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>LNG BASE PROJECT- TSKJ Bonny Island</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Transmission Line foundations and erection in Delta and Bayelsa State</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Lagos state developmental projects</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Jetty design and construction Badagry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Jetty design and construction Eastern Obolo Akwa Ibom</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Council Secretariat Juba city council Southern Sudan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Gas Turbine Foundations- Independent Power Projects, Ikot-Abasi, Akwa Ibom State</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Gas Turbine foundations Aba, Abia State</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Various Common gate estate design and construction works within Lekki</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-black">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Comprehensive solutions for all your construction and engineering needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-black mb-4">General Construction</h3>
              <p className="text-gray-700 mb-4">
                Buildings, roads, bridges, and infrastructure development across Lagos, Port Harcourt, and Nigeria.
              </p>
              <Link href="/services/general-construction" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-black mb-4">Project Management</h3>
              <p className="text-gray-700 mb-4">
                Expert oversight and coordination ensuring projects are delivered on time and within budget.
              </p>
              <Link href="/services/project-management" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-black mb-4">Equipment Leasing & Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Quality construction equipment rental and comprehensive maintenance services.
              </p>
              <Link href="/services/equipment-leasing" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-2xl text-black mb-4">Renewable Energy Solutions</h3>
              <p className="text-gray-700 mb-4">
                Solar power systems and sustainable energy solutions for a cleaner future.
              </p>
              <Link href="/services/renewable-energy" className="text-blue-600 font-semibold hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-black">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700">
              Milestones in our growth and expansion
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-blue-600 mb-4">
                  {item.year}
                </div>
                <h3 className="font-bold text-xl text-black mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-black">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-4">
                  {value.icon}
                </div>
                <h3 className="font-bold text-xl text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white">
              Certifications & Compliance
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Our commitment to quality and safety is validated by industry certifications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
              <h3 className="font-bold text-2xl text-white mb-2">ISO 9001:2015</h3>
              <p className="text-white/80">Quality Management System</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
              <h3 className="font-bold text-2xl text-white mb-2">ISO 45001:2018</h3>
              <p className="text-white/80">Occupational Health & Safety</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center border border-white/20">
              <h3 className="font-bold text-2xl text-white mb-2">ISO 14001:2015</h3>
              <p className="text-white/80">Environmental Management</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/hse" 
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More About Our HSE
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-bold text-3xl md:text-4xl mb-6 text-black">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements. We serve Lagos, Port Harcourt, and all of Nigeria.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
