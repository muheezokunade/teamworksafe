'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Clock } from 'lucide-react';

const pillars = [
  {
    icon: Award,
    title: 'Expertise',
    description: 'Over 15 years of experience delivering complex projects across Nigeria with proven technical excellence and industry knowledge.',
  },
  {
    icon: Shield,
    title: 'HSE First',
    description: 'Unwavering commitment to Health, Safety, and Environmental standards. Zero-harm culture embedded in everything we do.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Track record of completing projects on schedule and within budget through efficient project management and resource optimization.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4 leading-heading">
            Why Choose Us
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-body">
            We combine technical expertise, safety excellence, and operational efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-surface" />
                </div>
                <h3 className="font-heading font-bold text-xl text-text mb-3 leading-heading">
                  {pillar.title}
                </h3>
                <p className="text-muted leading-body">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



