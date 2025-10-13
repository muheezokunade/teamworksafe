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
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-bg border border-border rounded-lg p-6">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                Email
              </h3>
              <a
                href="mailto:info@teamworksafeoperations.com"
                className="text-muted hover:text-primary transition-colors text-sm break-all"
              >
                info@teamworksafeoperations.com
              </a>
            </div>

            <div className="bg-bg border border-border rounded-lg p-6">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                Phone
              </h3>
              <div className="text-muted space-y-1">
                <a href="tel:+2348037264745" className="block hover:text-primary transition-colors">
                  08037264745
                </a>
                <a href="tel:+2348074389216" className="block hover:text-primary transition-colors">
                  08074389216
                </a>
              </div>
            </div>

            <div className="bg-bg border border-border rounded-lg p-6">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                Lagos Office
              </h3>
              <p className="text-sm text-muted leading-body">
                Suite C10 Betto Mall Abijo GRA, Km 43 Lekki Epe Expressway, Lekki, Lagos State
              </p>
            </div>

            <div className="bg-bg border border-border rounded-lg p-6">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg text-text mb-2">
                Port Harcourt Office
              </h3>
              <p className="text-sm text-muted leading-body">
                75, Shell Location Road, Oyigbo, Rivers State
              </p>
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



