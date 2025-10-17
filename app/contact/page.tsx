import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Building2, Users } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Teamwork Safe Operations Limited. Offices in Lagos and Port Harcourt.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight">
              Let's Build Together
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Get in touch with our expert team. We're ready to bring your construction and engineering projects to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Mon-Fri: 8AM-5PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-medium">08037264745</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-medium">info@teamworksafeoperations.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Email Card */}
            <a 
              href="mailto:info@teamworksafeoperations.com"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Email Us</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                info@teamworksafeoperations.com
              </p>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+2348037264745"
              className="group bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl p-6 hover:border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Call Us</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                08037264745<br />
                08074389216
              </p>
            </a>

            {/* Lagos Office Card */}
            <div className="group bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-6 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Lagos Office</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Suite C10 Betto Mall Abijo GRA<br />
                Km 43 Lekki Epe Expressway, Lekki
              </p>
            </div>

            {/* Port Harcourt Office Card */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-6 hover:border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Port Harcourt</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                75, Shell Location Road<br />
                Oyigbo, Rivers State
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-3xl text-gray-900">Send Us a Message</h2>
                    <p className="text-gray-600 mt-1">Fill out the form and we'll get back to you within 24 hours</p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar - Office Info & Hours */}
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-100">
                    <div className="font-semibold text-gray-900 mb-1">Monday - Friday</div>
                    <div className="text-gray-600">8:00 AM - 5:00 PM</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Saturday</div>
                    <div className="text-gray-600">9:00 AM - 2:00 PM</div>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl shadow-lg p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-xl">Why Contact Us?</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Send className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Free consultation and project estimates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Send className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Expert advice from certified professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Send className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Send className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Serving Lagos, Port Harcourt & Nigeria</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-6 h-6 text-red-600" />
                  <h3 className="font-bold text-lg text-gray-900">Emergency Contact</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  For urgent matters outside office hours
                </p>
                <a href="tel:+2348037264745" className="text-red-600 font-bold text-lg hover:underline">
                  08037264745
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations with Maps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl text-gray-900 mb-4">
              Visit Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We have offices in Lagos and Port Harcourt to serve you better across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Lagos Office */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6" />
                  <h3 className="font-bold text-2xl">Lagos Office</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Suite C10 Betto Mall Abijo GRA<br />
                        Km 43 Lekki Epe Expressway<br />
                        Lekki, Lagos State, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+2348037264745" className="text-gray-600 hover:text-orange-600">
                        08037264745
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 8AM-5PM, Sat: 9AM-2PM</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden h-64 border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6579!2d3.5641!3d6.4318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNTQuNSJOIDPCsDMzJzUwLjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lagos Office Map"
                  />
                </div>
              </div>
            </div>

            {/* Port Harcourt Office */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-3">
                  <Building2 className="w-6 h-6" />
                  <h3 className="font-bold text-2xl">Port Harcourt Office</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        75, Shell Location Road<br />
                        Oyigbo<br />
                        Rivers State, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:+2348074389216" className="text-gray-600 hover:text-purple-600">
                        08074389216
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 8AM-5PM, Sat: 9AM-2PM</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden h-64 border border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6579!2d7.0641!3d4.8318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDknNTQuNSJOIDfCsDAzJzUwLjgiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Port Harcourt Office Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Contact us today for a free consultation and quote. Our expert team is ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2348037264745"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href="mailto:info@teamworksafeoperations.com"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-900 transition-colors shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
