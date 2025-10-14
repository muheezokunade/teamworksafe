import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Teamwork Safe Operations Limited. Offices in Lagos and Port Harcourt.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-heading">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl leading-body text-surface/90 max-w-2xl">
            Get in touch with our team. We're here to answer your questions and discuss your project needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Email Card */}
            <div className="group relative bg-white border-2 border-blue-100 rounded-xl p-8 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  Email
                </h3>
                <a
                  href="mailto:info@teamworksafeoperations.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium break-all leading-relaxed"
                >
                  info@teamworksafeoperations.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group relative bg-white border-2 border-green-100 rounded-xl p-8 hover:border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  Phone
                </h3>
                <div className="space-y-2">
                  <a href="tel:+2348037264745" className="block text-gray-600 hover:text-green-600 transition-colors font-medium">
                    08037264745
                  </a>
                  <a href="tel:+2348074389216" className="block text-gray-600 hover:text-green-600 transition-colors font-medium">
                    08074389216
                  </a>
                </div>
              </div>
            </div>

            {/* Lagos Office Card */}
            <div className="group relative bg-white border-2 border-orange-100 rounded-xl p-8 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  Lagos Office
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  Suite C10 Betto Mall Abijo GRA, Km 43 Lekki Epe Expressway, Lekki, Lagos State
                </p>
              </div>
            </div>

            {/* Port Harcourt Office Card */}
            <div className="group relative bg-white border-2 border-purple-100 rounded-xl p-8 hover:border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">
                  Port Harcourt Office
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                  75, Shell Location Road, Oyigbo, Rivers State
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-3xl text-text mb-6 leading-heading">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Office Hours and Map */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-bold text-2xl text-text mb-4 leading-heading">
                  Office Hours
                </h3>
                <div className="bg-bg border border-border rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-text mb-1">Monday - Friday</div>
                      <div className="text-muted">8:00 AM - 5:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-text mb-1">Saturday</div>
                      <div className="text-muted">9:00 AM - 2:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lagos Map */}
              <div id="lagos-office">
                <h3 className="font-heading font-bold text-xl text-text mb-4 leading-heading">
                  Lagos Office Location
                </h3>
                <div className="bg-bg border border-border rounded-lg overflow-hidden h-64">
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

              {/* Port Harcourt Map */}
              <div id="ph-office">
                <h3 className="font-heading font-bold text-xl text-text mb-4 leading-heading">
                  Port Harcourt Office Location
                </h3>
                <div className="bg-bg border border-border rounded-lg overflow-hidden h-64">
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
    </div>
  );
}



