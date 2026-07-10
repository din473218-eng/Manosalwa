import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FEATURE_PRODUCTS } from "../data";
import { Sparkles, ArrowRight } from "lucide-react";

interface ProductsProps {
  onOrderClick: () => void;
}

export default function Products({ onOrderClick }: ProductsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Cakes", "Pastries", "Bread", "Cookies", "Desserts"];

  const filteredProducts = selectedCategory === "All"
    ? FEATURE_PRODUCTS
    : FEATURE_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="menu" className="py-24 bg-warm-light relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-golden-beige/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-warm-brown/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest font-mono text-golden-beige uppercase block">
            Crafted with Love & Sugar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-dark tracking-tight leading-tight">
            Our Featured Menu
          </h2>
          <div className="h-1 w-20 bg-golden-beige rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-warm-brown/70 font-sans font-light leading-relaxed">
            Every item in our menu is a testament to traditional baking, handmade with the finest certified ingredients and baked fresh daily.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-golden-beige/30 ${
                selectedCategory === cat
                  ? "bg-warm-brown text-cream shadow-md scale-105"
                  : "bg-cream text-warm-brown hover:bg-golden-beige/10 hover:text-warm-brown"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          id="products-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="group bg-cream rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-golden-beige/10 flex flex-col justify-between"
              >
                {/* Product Image Wrapper */}
                <div className="relative aspect-square overflow-hidden bg-warm-light">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-cream/90 backdrop-blur-md border border-golden-beige/20 text-[10px] tracking-wider font-mono font-semibold uppercase text-warm-brown px-3 py-1 rounded-full shadow-sm">
                    {product.category}
                  </span>

                  {/* Aesthetic Corner Stamp */}
                  <span className="absolute bottom-4 right-4 bg-golden-beige/95 text-warm-dark p-2 rounded-full shadow-md translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <Sparkles size={14} className="animate-spin" style={{ animationDuration: "12s" }} />
                  </span>
                </div>

                {/* Product Details */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-warm-dark group-hover:text-golden-beige transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-brown/70 font-sans font-light leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-golden-beige/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-golden-beige uppercase font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-golden-beige animate-ping" />
                      Handcrafted Daily
                    </span>
                    <button
                      onClick={onOrderClick}
                      className="text-xs font-semibold font-sans text-warm-brown group-hover:text-golden-beige flex items-center gap-1 transition-colors"
                    >
                      Pre-order <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Section Footer Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-warm-brown/60 font-mono tracking-wide">
            * Have dietary requirements or looking for gluten-free options? 
            <button onClick={onOrderClick} className="text-golden-beige hover:underline font-semibold ml-1 inline-block">
              Consult with our bakers
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
