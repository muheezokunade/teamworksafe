'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  href: string;
}

export default function ServiceCard({ title, description, icon, image, href }: ServiceCardProps) {
  // @ts-ignore - Dynamic icon lookup
  const IconComponent = Icons[icon] as LucideIcon || Icons.Box;

  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(44, 65, 117, 0.15)' }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={href} className="block bg-surface border border-border rounded-lg overflow-hidden hover:border-accent transition-colors h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-surface transition-colors">
            <IconComponent className="w-6 h-6 text-primary group-hover:text-surface" />
          </div>
          <h3 className="font-heading font-bold text-lg text-text mb-2 leading-heading">
            {title}
          </h3>
          <p className="text-sm text-muted leading-body mb-4">
            {description}
          </p>
          <div className="flex items-center text-primary font-semibold text-sm group-hover:text-accent">
            Learn more
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}



