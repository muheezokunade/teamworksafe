'use client';

import { motion } from 'framer-motion';

interface StatItemProps {
  value: string;
  label: string;
  index?: number;
}

export default function StatItem({ value, label, index = 0 }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="font-heading font-bold text-4xl md:text-5xl text-primary mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-muted uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}



