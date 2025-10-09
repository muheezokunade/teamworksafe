'use client';

import { motion } from 'framer-motion';

interface FilterChipsProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterChips({
  filters,
  activeFilter,
  onFilterChange,
}: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-3" role="group" aria-label="Filter options">
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
            activeFilter === filter
              ? 'bg-primary text-surface'
              : 'bg-bg text-text hover:bg-border'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-pressed={activeFilter === filter}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
}



