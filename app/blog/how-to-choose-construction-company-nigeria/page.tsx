import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose a Reliable Construction Company in Nigeria 2024",
  description: "Essential guide to selecting the right construction partner in Nigeria. Learn key factors, red flags to avoid, and questions to ask before hiring a contractor.",
  keywords: [
    "choose construction company Nigeria",
    "hire contractor Lagos",
    "reliable builder Nigeria",
    "construction company selection",
    "contractor checklist Nigeria"
  ],
  openGraph: {
    title: "How to Choose a Reliable Construction Company in Nigeria",
    description: "Expert guide to selecting the right construction partner",
    url: "https://teamworksafeoperations.com/blog/how-to-choose-construction-company-nigeria",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <main className="pt-20">
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/blog" className="text-blue-600 hover:underline">Blog</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">How to Choose a Construction Company</span>
          </nav>

          <header className="mb-12">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-black">
              How to Choose a Reliable Construction Company in Nigeria
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Selecting the right construction partner can make or break your project. Follow this comprehensive checklist to ensure you choose a reliable, professional contractor.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <h2 className="font-bold text-3xl mt-12 mb-6 text-black">1. Verify Credentials & Certifications</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Always check for ISO certifications (9001, 45001, 14001), COREN registration, and professional memberships.
            </p>

            <h2 className="font-bold text-3xl mt-12 mb-6 text-black">2. Review Past Projects</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ask for a portfolio of completed projects similar to yours. Visit sites if possible and speak with previous clients.
            </p>

            <h2 className="font-bold text-3xl mt-12 mb-6 text-black">3. Check Financial Stability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Ensure the company has the financial capacity to complete your project. Request bank references and financial statements.
            </p>

            <div className="mt-16 p-8 bg-blue-600 rounded-lg text-center">
              <h2 className="font-bold text-3xl text-white mb-4">Ready to Start Your Project?</h2>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

