import { motion } from "motion/react";
import { TESTIMONIALS } from "../data";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-cream relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-warm-brown/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-golden-beige/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest font-mono text-golden-beige uppercase block">
            Loved by Locals
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-dark tracking-tight leading-tight">
            Customer Testimonials
          </h2>
          <div className="h-1 w-20 bg-golden-beige rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-warm-brown/70 font-sans font-light leading-relaxed">
            Don't just take our word for it—read the thoughts and sweet notes left by our regular clients and food critics.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="testimonials-grid">
          {TESTIMONIALS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-8 sm:p-10 border border-golden-beige/10 hover:border-golden-beige/30 hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Giant elegant background quotation mark */}
              <div className="absolute top-6 right-8 text-golden-beige/10 group-hover:text-golden-beige/15 transition-colors duration-300 pointer-events-none">
                <Quote size={80} className="stroke-[1]" />
              </div>

              <div className="space-y-6 relative z-10">
                {/* Stars Row */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-golden-beige text-golden-beige" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="font-serif text-base sm:text-lg italic text-warm-dark font-medium leading-relaxed text-left">
                  "{review.comment}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-golden-beige/10 relative z-10 text-left">
                {/* Profile Photo */}
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-golden-beige shadow-inner shrink-0 bg-warm-light">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-warm-dark">
                    {review.name}
                  </h4>
                  <p className="font-mono text-[10px] tracking-wider text-golden-beige uppercase mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
