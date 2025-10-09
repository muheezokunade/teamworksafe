import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & News',
  description: 'Latest insights, project updates, and industry news from Teamwork Safe Operations Limited.',
};

// Placeholder blog data
const blogPosts = [
  {
    id: '1',
    title: 'The Future of Renewable Energy in Nigeria: Opportunities and Challenges',
    excerpt: 'Exploring the growing renewable energy sector in Nigeria and how companies can transition to sustainable power solutions.',
    category: 'Renewable Energy',
    author: 'Engr. Ibrahim Musa',
    date: '2024-09-15',
    image: '/images/blog/renewable-energy.jpg',
    slug: 'future-renewable-energy-nigeria',
  },
  {
    id: '2',
    title: 'Best Practices for Construction Site Safety Management',
    excerpt: 'Key strategies and protocols for maintaining world-class safety standards on construction sites.',
    category: 'HSE',
    author: 'Mrs. Grace Okafor',
    date: '2024-09-10',
    image: '/images/blog/safety-management.jpg',
    slug: 'construction-site-safety-best-practices',
  },
  {
    id: '3',
    title: 'Equipment Maintenance: Maximizing ROI and Minimizing Downtime',
    excerpt: 'How proactive maintenance programs extend equipment life and reduce operational costs.',
    category: 'Equipment',
    author: 'Engr. Michael Adeyemi',
    date: '2024-09-05',
    image: '/images/blog/equipment-maintenance.jpg',
    slug: 'equipment-maintenance-roi',
  },
  {
    id: '4',
    title: 'Project Management Excellence: Lessons from Our Recent Projects',
    excerpt: 'Insights and lessons learned from managing complex construction projects across Nigeria.',
    category: 'Project Management',
    author: 'Engr. Michael Adeyemi',
    date: '2024-08-28',
    image: '/images/blog/project-management.jpg',
    slug: 'project-management-lessons',
  },
  {
    id: '5',
    title: 'Sustainable Construction: Building for the Future',
    excerpt: 'How we integrate sustainable practices and green building principles in our construction projects.',
    category: 'Construction',
    author: 'Arch. Funmi Adeleke',
    date: '2024-08-20',
    image: '/images/blog/sustainable-construction.jpg',
    slug: 'sustainable-construction-future',
  },
  {
    id: '6',
    title: 'Understanding ISO Certifications in the Construction Industry',
    excerpt: 'A guide to quality, safety, and environmental management system certifications.',
    category: 'Industry Insights',
    author: 'Mrs. Grace Okafor',
    date: '2024-08-15',
    image: '/images/blog/iso-certifications.jpg',
    slug: 'understanding-iso-certifications',
  },
];

const categories = ['All', 'Renewable Energy', 'HSE', 'Equipment', 'Project Management', 'Construction', 'Industry Insights'];

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-primary text-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 leading-heading">
            Blog & News
          </h1>
          <p className="text-lg md:text-xl leading-body text-surface/90 max-w-2xl">
            Insights, updates, and expert perspectives on construction, energy, and engineering
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-bg">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="cursor-pointer hover:bg-primary hover:text-surface transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-bg border border-border rounded-lg overflow-hidden">
            <div className="relative h-96 lg:h-full">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="mb-4">{blogPosts[0].category}</Badge>
              <h2 className="font-heading font-bold text-3xl text-text mb-4 leading-heading">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted leading-body mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
              >
                Read More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-bg border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">{post.category}</Badge>
                  <h3 className="font-heading font-bold text-lg text-text mb-3 leading-heading line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted leading-body mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-NG', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <span>•</span>
                    <span className="line-clamp-1">{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



