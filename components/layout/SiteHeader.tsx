'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import servicesData from '@/data/services.json';

const navItems = [
  { label: 'Home', href: '/' },
  { 
    label: 'Company', 
    href: '/about',
    hasDropdown: true,
    subItems: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Clients', href: '/clients' },
      { label: 'HSE Policy', href: '/hse' },
    ]
  },
  { label: 'Services', href: '/services', hasMenu: true },
  { label: 'Projects', href: '/projects' },
  { label: 'Equipment', href: '/equipment' },
  { 
    label: 'Resources', 
    href: '/blog',
    hasDropdown: true,
    subItems: [
      { label: 'Careers', href: '/careers' },
      { label: 'Blog & News', href: '/blog' },
    ]
  },
  { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-lg border-b border-border/50'
          : 'bg-surface/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative h-10 w-10 group-hover:scale-105 transition-transform duration-200">
              <Image
                src="/logo.png"
                alt="Teamwork Safe Operations Limited"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="block">
              <div className="font-heading font-bold text-primary text-sm lg:text-base leading-tight group-hover:text-accent transition-colors duration-200">
                Teamwork Safe Operations
              </div>
              <div className="text-xs text-muted hidden lg:block">Experts You Can Trust</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (item.hasMenu) setShowMegaMenu(true);
                  if (item.hasDropdown) setActiveDropdown(item.label);
                }}
                onMouseLeave={() => {
                  if (item.hasMenu) setShowMegaMenu(false);
                  if (item.hasDropdown) setActiveDropdown(null);
                }}
              >
                {item.hasMenu || item.hasDropdown ? (
                  <button
                    className="px-4 py-2 text-sm font-medium text-text hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 flex items-center gap-1 group"
                    aria-expanded={item.hasMenu ? showMegaMenu : activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-text hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu for Services */}
                {item.hasMenu && (
                  <AnimatePresence>
                    {showMegaMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[600px]"
                      >
                        <div className="bg-surface border border-border rounded-xl shadow-2xl p-6 backdrop-blur-sm">
                          <div className="grid grid-cols-2 gap-4">
                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.slug}`}
                                className="flex items-start gap-3 p-3 rounded-md hover:bg-bg transition-colors group"
                              >
                                <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                  <span className="text-primary text-sm">
                                    {service.icon.slice(0, 2)}
                                  </span>
                                </div>
                                <div>
                                  <h3 className="font-heading font-semibold text-sm text-text group-hover:text-primary transition-colors">
                                    {service.title}
                                  </h3>
                                  <p className="text-xs text-muted mt-1 line-clamp-2">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Regular Dropdown for Company & Resources */}
                {item.hasDropdown && item.subItems && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-6 w-52"
                      >
                        <div className="bg-surface border border-border rounded-xl shadow-xl py-2 backdrop-blur-sm">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-text hover:bg-bg hover:text-primary transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-accent hover:bg-accent/90 text-text font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
              <Link href="/contact?type=quote">Request a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate to different sections of the website
              </SheetDescription>
              <nav className="flex flex-col space-y-4 mt-8" role="navigation" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block py-2 text-base font-medium text-text hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.hasMenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {servicesData.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="block py-1 text-sm text-muted hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                    {item.hasDropdown && item.subItems && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-1 text-sm text-muted hover:text-primary transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Button asChild className="bg-accent hover:bg-accent/90 text-text font-semibold mt-4">
                  <Link href="/contact?type=quote" onClick={() => setMobileMenuOpen(false)}>
                    Request a Quote
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

