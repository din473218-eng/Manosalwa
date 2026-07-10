import { motion } from "motion/react";
import { Wheat, Heart, Compass, Star } from "lucide-react";

interface HeroProps {
  onViewMenuClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onViewMenuClick, onContactClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-dark pt-20"
    >
      {/* Background Image with Dark Golden Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80"
          alt="Artisanal Bakery Craft"
          className="w-full h-full object-cover object-center filter scale-105 brightness-[0.35] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-dark/40 via-warm-dark/50 to-cream/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-dark/80 via-warm-dark/40 to-transparent" />
      </div>

      {/* Decorative Warm Particles / Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-golden-beige/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-[400px] h-[400px] rounded-full bg-warm-brown/15 blur-[120px] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-golden-beige/10 border border-golden-beige/30 backdrop-blur-md px-4 py-1.5 rounded-full text-golden-beige text-xs font-mono uppercase tracking-[0.2em]"
            >
              <Wheat size={14} className="animate-pulse" />
              Artisanal Luxury Bakery
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
              >
                Freshly Baked <br />
                <span className="text-golden-beige italic relative inline-block">
                  Happiness
                  <svg className="absolute -bottom-2 left-0 w-full h-2 text-golden-beige/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span> Every Day
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-cream/80 max-w-xl font-sans font-light leading-relaxed"
              >
                Discover handcrafted breads, delicious cakes, buttery pastries, cookies, desserts, and sweet treats made fresh with premium ingredients.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <button
                onClick={onViewMenuClick}
                className="bg-golden-beige hover:bg-white text-warm-dark font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-golden-beige/20 flex items-center justify-center gap-2 group active:scale-95 focus:outline-none focus:ring-2 focus:ring-golden-beige"
                id="hero-view-menu-btn"
              >
                <Compass size={18} className="transition-transform group-hover:rotate-45" />
                View Our Menu
              </button>
              <button
                onClick={onContactClick}
                className="border border-cream/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white text-cream font-medium text-base px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95 focus:outline-none focus:ring-2 focus:ring-cream/50"
                id="hero-contact-btn"
              >
                Contact Us Today
              </button>
            </motion.div>
          </div>

          {/* Floating Badges Right Side */}
          <div className="lg:col-span-5 relative h-[350px] sm:h-[450px] flex items-center justify-center lg:justify-end">
            
            {/* Visual Center Piece (Decorative Glassmorphic Ring or Baker Shield) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-golden-beige/20 bg-gradient-to-tr from-golden-beige/5 to-white/5 backdrop-blur-sm flex items-center justify-center"
            >
              <div className="absolute inset-4 rounded-full border border-dashed border-golden-beige/10 animate-[spin_100s_linear_infinite]" />
              
              <div className="text-center p-8 space-y-4">
                <Wheat size={48} className="text-golden-beige mx-auto opacity-70" />
                <h3 className="font-serif text-2xl text-cream font-bold">MaNoSaLwA</h3>
                <p className="text-xs text-golden-beige font-mono tracking-wider uppercase">Est. 2018 • Family Owned</p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-golden-beige text-golden-beige" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Element 1 - Fresh Out of the Oven */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 left-6 sm:left-12 bg-cream/90 backdrop-blur-md border border-golden-beige/20 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[190px]"
            >
              <div className="p-2.5 rounded-full bg-golden-beige/20 text-warm-brown shrink-0">
                <Wheat size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-warm-dark">Baked Daily</p>
                <p className="text-[10px] text-warm-brown/70">From dawn's first light</p>
              </div>
            </motion.div>

            {/* Floating Element 2 - Pure French Butter */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 right-6 bg-cream/90 backdrop-blur-md border border-golden-beige/20 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[190px]"
            >
              <div className="p-2.5 rounded-full bg-golden-beige/20 text-warm-brown shrink-0">
                <Heart size={20} className="fill-golden-beige text-golden-beige" />
              </div>
              <div>
                <p className="text-xs font-bold text-warm-dark">100% Organic</p>
                <p className="text-[10px] text-warm-brown/70">Hand-selected grains</p>
              </div>
            </motion.div>

            {/* Floating Element 3 - Five Star Award */}
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-2 sm:right-6 bg-cream/90 backdrop-blur-md border border-golden-beige/20 p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[195px] z-10"
            >
              <div className="p-2.5 rounded-full bg-golden-beige/20 text-warm-brown shrink-0">
                <Star className="fill-golden-beige text-golden-beige" size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-warm-dark">Award Winning</p>
                <p className="text-[10px] text-warm-brown/70">Five-star satisfaction</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bottom Wave/Curve Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream pointer-events-none" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }} />
    </section>
  );
}
