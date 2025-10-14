'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Equipment', href: '/equipment' },
  { label: 'HSE Policy', href: '/hse' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { label: 'General Construction', href: '/services/general-construction' },
  { label: 'Project Management', href: '/services/project-management' },
  { label: 'Renewable Energy', href: '/services/renewable-energy' },
  { label: 'Equipment Leasing', href: '/services/equipment-leasing' },
  { label: 'Equipment Maintenance', href: '/services/equipment-maintenance' },
  { label: 'Consultation', href: '/services/consultation' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Footer form submitted:', { email, message });
    setSubmitted(true);
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-text text-surface">
      <div className="max-w-container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="space-y-1">
                <h3 className="font-heading font-bold text-xl text-white">
                  Teamwork Safe Operations
                </h3>
                <p className="text-xs text-muted italic">Experts You Can Trust</p>
              </div>
            </Link>
            <p className="text-sm text-muted leading-body">
              Teamwork Safe Operations Limited was founded in 2009 and officially incorporated as a limited liability company in 2018. We deliver excellence in construction, project management, and renewable energy solutions.
            </p>
            <div className="flex space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-surface/10 hover:bg-accent rounded-md flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-surface/10 hover:bg-accent rounded-md flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-surface/10 hover:bg-accent rounded-md flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-surface/10 hover:bg-accent rounded-md flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-surface mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-surface mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-sm text-muted hover:text-accent transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Mini Form */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-surface mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@teamworksafeoperations.com" className="text-muted hover:text-accent transition-colors">
                  info@teamworksafeoperations.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-muted">
                  <a href="tel:+2348037264745" className="hover:text-accent transition-colors block">08037264745</a>
                  <a href="tel:+2348074389216" className="hover:text-accent transition-colors block">08074389216</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-muted">
                  <p className="mb-2">Lagos: Suite C10 Betto Mall Abijo GRA, Km 43 Lekki Epe Expressway</p>
                  <p>Port Harcourt: 75, Shell Location Road, Oyigbo</p>
                </div>
              </div>
            </div>

            {/* Mini Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-2 mt-4">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-surface/10 border-surface/20 text-surface placeholder:text-muted"
              />
              <Textarea
                placeholder="Quick message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={2}
                className="bg-surface/10 border-surface/20 text-surface placeholder:text-muted"
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-text font-semibold">
                {submitted ? 'Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Teamwork Safe Operations Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted">
            <Link href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
            <Link href="/staff-login" className="hover:text-accent transition-colors">
              Staff Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



