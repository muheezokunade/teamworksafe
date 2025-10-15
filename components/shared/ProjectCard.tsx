'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  client: string;
  sector: string;
  location: string;
  status: string;
  image: string;
  href: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  client,
  sector,
  location,
  status,
  image,
  href,
  tags,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(44, 65, 117, 0.15)' }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <Link href={href} className="block bg-surface border border-border rounded-lg overflow-hidden hover:border-accent transition-colors h-full">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="font-heading font-bold text-lg text-text mb-2 leading-heading line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted mb-4">{client}</p>
          <div className="space-y-1 text-xs text-muted mb-4">
            <p><span className="font-semibold text-text">Sector:</span> {sector}</p>
            <p><span className="font-semibold text-text">Location:</span> {location}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-bg rounded text-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}



