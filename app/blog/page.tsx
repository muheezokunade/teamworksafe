import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Construction Industry Blog - Teamwork Safe Operations",
  description: "Expert insights on construction, project management, renewable energy, and equipment leasing in Nigeria. Tips, guides, and industry trends from Lagos and Port Harcourt.",
  keywords: [
    "construction blog Nigeria",
    "construction tips Lagos",
    "project management blog",
    "renewable energy Nigeria",
    "construction industry trends",
    "building construction guide"
  ],
  openGraph: {
    title: "Construction Blog | Teamwork Safe Operations",
    description: "Expert insights on construction and engineering in Nigeria",
    url: "https://teamworksafeoperations.com/blog",
    type: "website",
  },
  alternates: {
    canonical: "https://teamworksafeoperations.com/blog"
  }
};

const blogPosts = [
  {
    title: "Top 10 Construction Companies in Lagos 2024",
    slug: "top-10-construction-companies-lagos-2024",
    excerpt: "Comprehensive guide to the leading construction companies in Lagos, Nigeria. Compare services, expertise, and track records.",
    date: "2024-01-15",
    category: "Industry",
    image: "/images/blog/construction-companies-lagos.jpg",
  },
  {
    title: "How to Choose a Reliable Construction Company in Nigeria",
    slug: "how-to-choose-construction-company-nigeria",
    excerpt: "Essential factors to consider when selecting a construction partner for your project in Nigeria.",
    date: "2024-01-10",
    category: "Guide",
    image: "/images/blog/choose-contractor.jpg",
  },
  {
    title: "Construction Costs in Lagos: A Complete 2024 Guide",
    slug: "construction-costs-lagos-guide",
    excerpt: "Detailed breakdown of construction costs in Lagos including materials, labor, and project management fees.",
    date: "2024-01-05",
    category: "Cost Guide",
    image: "/images/blog/construction-costs.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-white">
              Construction Industry Blog
            </h1>
            <p className="text-xl text-white/90">
              Expert insights, industry trends, and practical guides for construction professionals in Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`} className="group">
                <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Image Coming Soon</span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                        {post.category}
                      </span>
                      <time>{new Date(post.date).toLocaleDateString('en-NG', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                    </div>
                    <h2 className="font-bold text-xl text-black mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="text-blue-600 font-semibold group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="font-bold text-3xl text-black mb-8 text-center">
            Browse by Category
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-black mb-2">Construction</h3>
              <p className="text-gray-700 text-sm">Building, infrastructure, and development</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-black mb-2">Project Management</h3>
              <p className="text-gray-700 text-sm">Planning, execution, and delivery</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-black mb-2">Renewable Energy</h3>
              <p className="text-gray-700 text-sm">Solar power and sustainability</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg text-black mb-2">Industry News</h3>
              <p className="text-gray-700 text-sm">Latest trends and updates</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
