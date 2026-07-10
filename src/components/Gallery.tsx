import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    document.body.classList.add("lightbox-open");
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    document.body.classList.remove("lightbox-open");
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section id="gallery" className="py-24 bg-warm-light relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-golden-beige/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest font-mono text-golden-beige uppercase block">
            A Feast for the Eyes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-dark tracking-tight leading-tight">
            Our Gallery
          </h2>
          <div className="h-1 w-20 bg-golden-beige rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-warm-brown/70 font-sans font-light leading-relaxed">
            Take a visual tour through our daily baking process, sweet dessert creations, and the cozy environment we call home.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="gallery-grid">
          {GALLERY_ITEMS.map((item, index) => {
            // Apply different heights or spans to simulate a balanced masonry feel
            const isWide = index === 2 || index === 5;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-cream border border-golden-beige/10 ${
                  isWide ? "sm:col-span-2" : ""
                }`}
              >
                {/* Image */}
                <div className="aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/80 via-warm-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />
                  
                  {/* Floating Action / Text */}
                  <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left pointer-events-none">
                    <span className="text-[10px] tracking-widest font-mono text-golden-beige font-semibold uppercase">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white line-clamp-1">
                      {item.title}
                    </h3>
                    <span className="text-[10px] text-cream/70 font-sans flex items-center gap-1.5 mt-1">
                      <Maximize2 size={12} className="text-golden-beige" />
                      Click to expand
                    </span>
                  </div>

                  {/* Corner Magnify Badge */}
                  <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-md p-2 rounded-full border border-golden-beige/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={14} className="text-warm-brown" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
            id="gallery-lightbox"
          >
            {/* Upper Bar: Title & Close Button */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
              <div className="text-left max-w-[75%]">
                <span className="text-[10px] tracking-widest font-mono text-golden-beige uppercase font-semibold">
                  {GALLERY_ITEMS[activePhotoIndex].category}
                </span>
                <h4 className="font-serif text-sm sm:text-lg font-bold text-white/90 line-clamp-1 mt-0.5">
                  {GALLERY_ITEMS[activePhotoIndex].title}
                </h4>
              </div>
              
              <button
                onClick={closeLightbox}
                className="bg-white/10 hover:bg-white/25 border border-white/20 hover:border-white p-2.5 rounded-full text-white transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Stage */}
            <div className="relative w-full max-w-5xl max-h-[75vh] flex items-center justify-center">
              {/* Back button */}
              <button
                onClick={showPrev}
                className="absolute left-2 sm:-left-16 bg-white/10 hover:bg-white/25 border border-white/10 hover:border-white p-3 rounded-full text-white transition-colors z-10 focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Central Large Image */}
              <motion.div
                key={activePhotoIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-2xl max-w-full max-h-[70vh] border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={GALLERY_ITEMS[activePhotoIndex].image}
                  alt={GALLERY_ITEMS[activePhotoIndex].title}
                  className="max-w-full max-h-[70vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next button */}
              <button
                onClick={showNext}
                className="absolute right-2 sm:-right-16 bg-white/10 hover:bg-white/25 border border-white/10 hover:border-white p-3 rounded-full text-white transition-colors z-10 focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Lower Counter Indicator */}
            <div className="absolute bottom-6 text-center text-white/60 font-mono text-xs">
              {activePhotoIndex + 1} / {GALLERY_ITEMS.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
