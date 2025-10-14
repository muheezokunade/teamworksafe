'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

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
      {/* Animated Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        {/* Animated Background Elements */}
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
              Explore our portfolio of completed construction projects across Nigeria. From residential buildings to infrastructure development, see the quality and excellence we deliver.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery with Staggered Animation */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Bento-style Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
            {galleryImages.map((image, index) => {
              // Create varied grid patterns for Bento-style layout
              const getBentoStyle = (idx: number) => {
                const patterns = [
                  'col-span-2 row-span-2',  // Large square
                  'col-span-1 row-span-1',  // Small
                  'col-span-1 row-span-2',  // Tall
                  'col-span-2 row-span-1',  // Wide
                  'col-span-1 row-span-1',  // Small
                  'col-span-1 row-span-1',  // Small
                  'col-span-2 row-span-1',  // Wide
                  'col-span-1 row-span-2',  // Tall
                  'col-span-1 row-span-1',  // Small
                  'col-span-2 row-span-2',  // Large square
                ];
                return patterns[idx % patterns.length];
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative ${getBentoStyle(index)} overflow-hidden rounded-xl cursor-pointer group bg-gray-200 shadow-lg`}
                  style={{ minHeight: '200px' }}
                  onClick={() => setSelectedImage(image.url)}
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </motion.div>
                  
                  {/* Animated Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Hover Content */}
                  <motion.div
                    className="absolute inset-0 flex items-end p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="text-white">
                      <motion.p 
                        className="text-sm font-bold mb-1"
                        initial={{ x: -20 }}
                        whileHover={{ x: 0 }}
                      >
                        Project Gallery
                      </motion.p>
                      <motion.p 
                        className="text-xs opacity-90"
                        initial={{ x: -20 }}
                        whileHover={{ x: 0 }}
                        transition={{ delay: 0.05 }}
                      >
                        Click to view
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-3 right-3 w-2 h-2 bg-white rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Animated Stats */}
          <motion.div 
            className="mt-16 pt-16 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '30+', label: 'Gallery Images' },
                { number: '236+', label: 'Projects Completed' },
                { number: '15+', label: 'Years Experience' },
                { number: '100%', label: 'Client Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="text-4xl font-bold text-blue-600 mb-2"
                    whileHover={{ scale: 1.2, color: '#1e40af' }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-700 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Contact CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-bold text-3xl md:text-4xl mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            Let&apos;s bring your construction vision to life. Contact us today for a free consultation.
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10 shadow-lg"
          >
            Get in Touch →
          </motion.a>
        </div>
      </section>

      {/* Animated Lightbox Modal */}
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
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain drop-shadow-2xl"
              sizes="100vw"
            />
          </motion.div>

          {/* Close hint */}
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

