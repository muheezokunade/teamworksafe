'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://i.postimg.cc/k522FPYh/04d572df-d4aa-47d9-b943-94c593556ff6.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/RCKnD9SQ/04f39bf0-98d3-41af-9bfe-4e85eb6a264e.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/J43ZG8Sz/1e5be2fb-3a49-49d6-89a3-a980a7df55f1.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/SszzqbWJ/35bec692-3ab0-4dec-956b-3d955ef6fbcd.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/NfGfkw5X/43113a0f-f449-4a81-ba99-6f70037608fd.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/kgp45hMF/49daa97a-bdd9-4474-b22d-6dbab185794f.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/k4xXfJQx/655f194f-1071-400d-b7f3-f2f33affb533.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/MpWRB4Sz/6cd52f7e-6787-429a-927d-f91c4029e9a0.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/g2YRh5Pg/6f968d22-2aaa-45af-90fc-7b944de80549.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/j2tq1pvj/7513a68b-4480-4615-b6f3-3fbd0d60cfae.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/15R5rZfY/79069670-6ba3-436f-bbc1-b62aa07d68a2.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/FKYYgXCM/82b2cf04-4778-4ab5-a268-19425d3ca4a9.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/QCmNZfn8/87235c92-ad1b-41e7-b0b6-fc2bf39112fc.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/d18t4s2G/929fb0ca-b46d-4811-88e5-4f7f6fd8710a.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/0jP54Tnh/92db97dc-a4e3-41d9-9124-bd80a0ae4b60.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/gJ66dbvd/9b7139d8-8ecf-44e1-b8a7-3cdb9105198e.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/HsWs9CV4/a5fbe6d2-e46d-486a-8f7e-ccdfb6628eb0.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/m2Z2yGtd/ac9dcb76-783c-4934-b79f-b178361c89d7.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/kGTCpBBx/b0034052-ddb0-4942-9266-6af5f13e7fb6.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/8Pykyn6d/b406c64e-9757-4be2-8c82-c0739e04ecd7.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/15zsNcjn/b681faae-1e83-465a-b4f4-3e8a9d434880.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/Cxzh9HCn/bcbdd9d8-1007-4bf9-b69f-640bfca23a38.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/GhpdsJ5B/c07ac774-cc11-411f-9dd3-dad09880cd5f.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/Y9kw21Fz/c2432567-a8d3-47fe-96a5-267c7a4c3c61.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/Z5GS2kKQ/d24d06e8-0492-4288-9aa3-ea65a970f840.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/25nDfH1R/d49ea030-b211-426a-91ed-cd31b0cff84b.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/6QCXNH8B/d55a2aa4-e6f7-4517-8de4-5e68fe5d32fb.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/hjgq49mJ/d97d1509-41f2-4457-bb94-59f82476d98b.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/TwGX2rbt/e6dea671-de68-4ac3-9f72-15834cf3184d.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
  {
    url: 'https://i.postimg.cc/B6gfjX5g/e9602ddf-c217-4b20-97a5-d35aa8afb2de.jpg',
    alt: 'Construction project by Teamwork Safe Operations',
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-bold text-4xl md:text-5xl mb-6 text-white leading-tight">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our portfolio of completed construction projects across Nigeria. From residential buildings to infrastructure development, see the quality and excellence we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Masonry Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Mobile: Simple Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg cursor-pointer group bg-gray-100 ${
                  index % 3 === 0 ? 'aspect-[4/3]' : index % 5 === 0 ? 'aspect-square' : 'aspect-[3/4]'
                }`}
                onClick={() => setSelectedImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Desktop: Creative Masonry Layout */}
          <div className="hidden md:grid grid-cols-12 gap-4 auto-rows-[200px]">
            {galleryImages.map((image, index) => {
              // Create varied spans for creative layout
              const patterns = [
                { col: 'col-span-4', row: 'row-span-2' },    // Medium tall
                { col: 'col-span-3', row: 'row-span-1' },    // Small
                { col: 'col-span-5', row: 'row-span-2' },    // Large
                { col: 'col-span-4', row: 'row-span-1' },    // Medium wide
                { col: 'col-span-3', row: 'row-span-2' },    // Tall narrow
                { col: 'col-span-6', row: 'row-span-1' },    // Wide short
                { col: 'col-span-6', row: 'row-span-2' },    // Large wide
                { col: 'col-span-4', row: 'row-span-2' },    // Medium tall
                { col: 'col-span-3', row: 'row-span-1' },    // Small
                { col: 'col-span-5', row: 'row-span-1' },    // Medium
              ];
              
              const pattern = patterns[index % patterns.length];
              
              return (
                <div
                  key={index}
                  className={`relative ${pattern.col} ${pattern.row} overflow-hidden rounded-lg cursor-pointer group bg-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300`}
                  onClick={() => setSelectedImage(image.url)}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold">Project Image {index + 1}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-700 font-semibold">Gallery Images</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">236+</div>
                <div className="text-gray-700 font-semibold">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700 font-semibold">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-700 font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-bold text-3xl md:text-4xl mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let&apos;s bring your construction vision to life. Contact us today for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-blue-100 md:py-4 md:text-lg md:px-10 transition-colors"
          >
            Get in Touch →
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </div>
  );
}

