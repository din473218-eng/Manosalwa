import { motion } from "motion/react";
import { Sparkles, PhoneCall } from "lucide-react";

interface CTAProps {
  onContactClick: () => void;
}

export default function CTA({ onContactClick }: CTAProps) {
  return (
    <section className="relative py-24 sm:py-32 bg-warm-dark overflow-hidden text-center">
      {/* Background Image with Dark Golden Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1920&q=80"
          alt="Warm Baker Hearth background"
          className="w-full h-full object-cover object-center scale-105 brightness-[0.3] contrast-[1.1]"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-dark/90 via-warm-dark/60 to-warm-dark/90" />
      </div>

      {/* Decorative Blur elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-golden-beige/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Animated Icon badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 bg-golden-beige/10 border border-golden-beige/30 backdrop-blur-md px-4 py-1.5 rounded-full text-golden-beige text-xs font-mono uppercase tracking-[0.2em]"
        >
          <Sparkles size={12} className="animate-pulse text-golden-beige" />
          The Sweet Experience
        </motion.div>

        {/* Text Area */}
        <div className="space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Ready to Enjoy <br className="sm:hidden" />
            <span className="italic text-golden-beige">Freshly Baked Goodness?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cream/75 max-w-2xl mx-auto font-sans font-light leading-relaxed">
            Order a custom birthday cake, secure catering pastries for your next event, or reserve an artisan sourdough loaf for pickup tomorrow morning.
          </p>
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4"
        >
          <button
            onClick={onContactClick}
            className="bg-golden-beige hover:bg-white text-warm-dark font-semibold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-golden-beige/20 inline-flex items-center gap-2 group active:scale-95 focus:outline-none focus:ring-2 focus:ring-golden-beige"
            id="cta-contact-btn"
          >
            <PhoneCall size={18} className="transition-transform group-hover:scale-110" />
            Contact Us Today
          </button>
        </motion.div>

        {/* Under Banner Badges */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-10 border-t border-cream/10 text-cream/60 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-golden-beige" />
            Pick-up Reservations
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-golden-beige" />
            Custom Event Styling
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-golden-beige" />
            Corporate Bulk Catering
          </div>
        </div>

      </div>
    </section>
  );
}
