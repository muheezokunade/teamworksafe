'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

const galleryData = {
  hero: {
    url: 'https://i.postimg.cc/FKYYgXCM/82b2cf04-4778-4ab5-a268-19425d3ca4a9.jpg',
    alt: 'Modern residential façade – completed exterior',
    caption: 'Modern Residential Façade – Lagos – Completed 2024',
    category: 'Residential',
  },
  features: [
    {
      url: 'https://i.postimg.cc/g2YRh5Pg/6f968d22-2aaa-45af-90fc-7b944de80549.jpg',
      alt: 'High-rise structure – completed exterior',
      caption: 'High-Rise Development – Lagos – Completed 2024',
      category: 'Commercial',
    },
    {
      url: 'https://i.postimg.cc/15R5rZfY/79069670-6ba3-436f-bbc1-b62aa07d68a2.jpg',
      alt: 'Residential bungalow under construction',
      caption: 'Residential bungalow, Lagos, 2023',
      category: 'Residential',
    },
  ],
  grid: [
    {
      url: 'https://i.postimg.cc/J43ZG8Sz/1e5be2fb-3a49-49d6-89a3-a980a7df55f1.jpg',
      alt: 'Office complex under construction',
      caption: 'Office Complex – Lagos – Completed 2022',
      category: 'Commercial',
    },
    {
      url: 'https://i.postimg.cc/25nDfH1R/d49ea030-b211-426a-91ed-cd31b0cff84b.jpg',
      alt: 'Residential apartment buildings',
      caption: 'Residential apartment 2021',
      category: 'Residential',
    },
    {
      url: 'https://i.postimg.cc/d18t4s2G/929fb0ca-b46d-4811-88e5-4f7f6fd8710a.jpg',
      alt: 'Educational institution under construction',
      caption: 'Educational institution – Port Harcourt – In Progress',
      category: 'In-Progress',
    },
    {
      url: 'https://i.postimg.cc/GhpdsJ5B/c07ac774-cc11-411f-9dd3-dad09880cd5f.jpg',
      alt: 'Mid-rise apartments under construction',
      caption: 'Mid-Rise Apartments – Lagos – Ongoing',
      category: 'In-Progress',
    },
    {
      url: 'https://i.postimg.cc/0jP54Tnh/92db97dc-a4e3-41d9-9124-bd80a0ae4b60.jpg',
      alt: 'Foundation works',
      caption: 'foundation works lekki 2024',
      category: 'In-Progress',
    },
    {
      url: 'https://i.postimg.cc/6QCXNH8B/d55a2aa4-e6f7-4517-8de4-5e68fe5d32fb.jpg',
      alt: 'Structural frame',
      caption: 'Structural Frame & Formwork – Lagos – In Progress 2024',
      category: 'In-Progress',
    },
    {
      url: 'https://i.postimg.cc/k4xXfJQx/655f194f-1071-400d-b7f3-f2f33affb533.jpg',
      alt: 'Low-rise residential exterior',
      caption: 'Low-Rise Residential – Lagos – Completed 2024',
      category: 'Residential',
    },
    {
      url: 'https://i.postimg.cc/m2Z2yGtd/ac9dcb76-783c-4934-b79f-b178361c89d7.jpg',
      alt: 'Interior concrete finish',
      caption: 'Interior Concrete Finishing – Lekki – 2024',
      category: 'Interiors',
    },
    {
      url: 'https://i.postimg.cc/8Pykyn6d/b406c64e-9757-4be2-8c82-c0739e04ecd7.jpg',
      alt: 'Masonry & scaffolding',
      caption: 'Masonry & Scaffolding Works – Lagos – In Progress 2024',
      category: 'In-Progress',
    },
    {
      url: 'https://i.postimg.cc/TwGX2rbt/e6dea671-de68-4ac3-9f72-15834cf3184d.jpg',
      alt: 'Completed exterior – apartments',
      caption: 'Apartment Complex – Lekki – Completed 2024',
      category: 'Residential',
    },
    {
      url: 'https://i.postimg.cc/kGTCpBBx/b0034052-ddb0-4942-9266-6af5f13e7fb6.jpg',
      alt: 'Interior grey box',
      caption: 'Interior Grey Box Stage – Lagos – 2024',
      category: 'Interiors',
    },
    {
      url: 'https://i.postimg.cc/Y9kw21Fz/c2432567-a8d3-47fe-96a5-267c7a4c3c61.jpg',
      alt: 'Swimming pool construction',
      caption: 'swimming pool portharcourt 2024 completed',
      category: 'Pools/Features',
    },
    {
      url: 'https://i.postimg.cc/Cxzh9HCn/bcbdd9d8-1007-4bf9-b69f-640bfca23a38.jpg',
      alt: 'Completed exterior – mid-rise',
      caption: 'Mid-Rise Development – Lagos – Completed 2024',
      category: 'Commercial',
    },
    {
      url: 'https://i.postimg.cc/gJ66dbvd/9b7139d8-8ecf-44e1-b8a7-3cdb9105198e.jpg',
      alt: 'Façade detail',
      caption: 'Façade Detail & Finishing – Lekki – Completed 2024',
      category: 'Residential',
    },
    {
      url: 'https://i.postimg.cc/kgp45hMF/49daa97a-bdd9-4474-b22d-6dbab185794f.jpg',
      alt: 'Site works',
      caption: 'Site Works & Infrastructure – Lagos – In Progress 2024',
      category: 'In-Progress',
    },
  ],
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string>('');

  const openLightbox = (url: string, caption: string) => {
    setSelectedImage(url);
    setSelectedCaption(caption);
  };

  return (
    <div className="pt-20">
      {/* Animated Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-bold text-4xl md:text-5xl mb-6 text-white leading-tight"
            >
              Project Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Showcasing our finest construction projects across Lagos, Port Harcourt, and Nigeria
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Hero Image */}
          <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mb-4 md:mb-6 overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            onClick={() => openLightbox(galleryData.hero.url, galleryData.hero.caption)}
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={galleryData.hero.url}
                alt={galleryData.hero.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
            <figcaption className="absolute left-0 right-0 bottom-0 p-4 md:p-6 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm md:text-base font-semibold">{galleryData.hero.caption}</p>
            </figcaption>
          </motion.figure>

          {/* Feature Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
            {galleryData.features.map((feature, index) => (
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => openLightbox(feature.url, feature.caption)}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={feature.url}
                    alt={feature.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className="absolute left-0 right-0 bottom-0 p-4 md:p-5 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm md:text-base font-semibold">{feature.caption}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {galleryData.grid.map((item, index) => (
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                onClick={() => openLightbox(item.url, item.caption)}
              >
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={item.url}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <figcaption className="absolute left-0 right-0 bottom-0 p-3 md:p-4 text-white bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs md:text-sm font-semibold">{item.caption}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Stats */}
          <motion.div 
            className="mt-16 pt-16 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '18', label: 'Featured Projects' },
                { number: '236+', label: 'Total Projects' },
                { number: '15+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-3xl md:text-4xl mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Let&apos;s bring your construction vision to life. Contact us today for a free consultation.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-blue-800 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 shadow-lg transition-colors"
          >
            Get in Touch →
          </motion.a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors z-10 bg-white/10 rounded-full p-2"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </motion.button>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Gallery image"
                fill
                className="object-contain drop-shadow-2xl"
                sizes="100vw"
              />
            </div>
            {selectedCaption && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
              >
                <p className="text-white text-center text-lg font-semibold">{selectedCaption}</p>
              </motion.div>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 text-white/60 text-sm"
          >
            Click anywhere to close
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
