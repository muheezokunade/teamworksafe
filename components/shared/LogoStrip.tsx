'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoStripProps {
  logos: Array<{
    id: string;
    name: string;
    logo: string;
  }>;
}

export default function LogoStrip({ logos }: LogoStripProps) {
  return (
    <div className="overflow-hidden py-8">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {logos.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="relative w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
          >
            <Image
              src={client.logo}
              alt={client.name}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}



