'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  'https://i.postimg.cc/kgp45hMF/49daa97a-bdd9-4474-b22d-6dbab185794f.jpg',
  'https://i.postimg.cc/MpWRB4Sz/6cd52f7e-6787-429a-927d-f91c4029e9a0.jpg',
  'https://i.postimg.cc/j2tq1pvj/7513a68b-4480-4615-b6f3-3fbd0d60cfae.jpg',
  'https://i.postimg.cc/FKYYgXCM/82b2cf04-4778-4ab5-a268-19425d3ca4a9.jpg',
  'https://i.postimg.cc/QCmNZfn8/87235c92-ad1b-41e7-b0b6-fc2bf39112fc.jpg',
  'https://i.postimg.cc/gJ66dbvd/9b7139d8-8ecf-44e1-b8a7-3cdb9105198e.jpg',
  'https://i.postimg.cc/HsWs9CV4/a5fbe6d2-e46d-486a-8f7e-ccdfb6628eb0.jpg',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = heroImages.map((src) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = src;
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          setImagesLoaded(true);
        })
        .catch((error) => {
          console.error('Error preloading images:', error);
          setImagesLoaded(true); // Still show the slideshow even if some images fail
        });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const goToNext = () => {
    if (!imagesLoaded) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    if (!imagesLoaded) return;
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Images Slideshow */}
      <div className="absolute inset-0 z-0 bg-gray-900">
        {/* Background layer - always visible */}
        <div className="absolute inset-0">
          <Image
            src={heroImages[0]}
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
            unoptimized
          />
        </div>
        
        {/* Crossfade slideshow layer */}
        {imagesLoaded ? (
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[currentImageIndex]}
                alt={`Hero image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
                priority={currentImageIndex === 0}
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          // Show first image while loading
          <div className="absolute inset-0">
            <Image
              src={heroImages[0]}
              alt="Hero image"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        )}
        <div className="absolute inset-0 bg-primary/55 z-10" />
        
        {/* Navigation Arrows - Hidden on mobile for cleaner look */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-200 backdrop-blur-sm hidden sm:block"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-200 backdrop-blur-sm hidden sm:block"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => imagesLoaded && setCurrentImageIndex(index)}
              disabled={!imagesLoaded}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImageIndex
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              } ${!imagesLoaded ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container mx-auto px-4 md:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-surface mb-4 md:mb-6 leading-heading"
          >
            Experts You Can Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-surface/90 mb-6 md:mb-8 leading-body max-w-2xl mx-auto md:mx-0"
          >
            Construction, Project Management, Renewable Energy, Equipment Leasing and Maintenance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-text font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              <Link href="/contact?type=quote">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-surface text-surface hover:bg-surface hover:text-primary font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-transparent backdrop-blur-sm"
            >
              <Link href="/projects">
                See Projects
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}



