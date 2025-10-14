'use client';

import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <div className="bg-surface border border-border rounded-lg p-8 h-full">
      <Quote className="w-10 h-10 text-accent mb-6" />
      <p className="text-text leading-body mb-6 italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div>
          <div className="font-heading font-semibold text-text">
            {author}
          </div>
          <div className="text-sm text-muted">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  );
}



