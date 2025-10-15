// Type definitions for the application

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  fullDescription: string;
  scope: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  sector: string;
  service: string;
  location: string;
  status: string;
  duration: string;
  image: string;
  gallery: string[];
  overview: string;
  objectives: string[];
  scopeAndApproach: string;
  outcomes: {
    metrics: {
      label: string;
      value: string;
    }[];
  };
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  tags: string[];
}

export interface Equipment {
  id: string;
  name: string;
  category: string;
  brand: string;
  model: string;
  capacity: string;
  location: string;
  availability: string;
  image: string;
  specs: Record<string, string>;
  rate: {
    daily: string;
    weekly: string;
    monthly: string;
  };
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  logo: string;
  image?: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
  sector: string;
  description: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  status: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}



