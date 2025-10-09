import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactCards = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'info@teamworksafeoperations.com',
    action: 'Send Email',
    href: 'mailto:info@teamworksafeoperations.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '08037264745 / 08074389216',
    action: 'Call Now',
    href: 'tel:+2348037264745',
  },
  {
    icon: MapPin,
    title: 'Lagos Office',
    content: 'Suite C10 Betto Mall Abijo GRA, Km 43 Lekki Epe Expressway',
    action: 'Get Directions',
    href: '/contact#lagos-office',
  },
  {
    icon: MapPin,
    title: 'Port Harcourt Office',
    content: '75, Shell Location Road, Oyigbo, Rivers State',
    action: 'Get Directions',
    href: '/contact#ph-office',
  },
];

export default function ContactStrip() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 leading-heading">
            Get In Touch
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-body">
            Ready to start your project? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-bg border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-text mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted mb-4 leading-body min-h-[60px]">
                  {card.content}
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={card.href}>{card.action}</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



