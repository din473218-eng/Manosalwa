import { motion } from "motion/react";
import { WHY_CHOOSE_US } from "../data";
import * as Icons from "lucide-react";

export default function WhyChooseUs() {
  // Dynamically resolve lucide icons
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-warm-brown" />;
    }
    return <Icons.HelpCircle className="w-6 h-6 text-warm-brown" />;
  };

  return (
    <section id="why-choose-us" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-golden-beige/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-warm-brown/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest font-mono text-golden-beige uppercase block">
            The MaNoSaLwA Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-dark tracking-tight leading-tight">
            Why Choose Us
          </h2>
          <div className="h-1 w-20 bg-golden-beige rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-warm-brown/70 font-sans font-light leading-relaxed">
            We hold ourselves to a standard of excellence that reflects in every single grain of flour, golden flake of pastry, and warm smile.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="why-choose-us-grid">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white rounded-3xl p-8 border border-golden-beige/10 hover:border-golden-beige/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start space-y-4 text-left"
            >
              {/* Icon Container with gold ring */}
              <div className="p-4 rounded-2xl bg-cream border border-golden-beige/10 group-hover:bg-golden-beige/20 group-hover:scale-110 transition-all duration-300 relative">
                {renderIcon(item.iconName)}
                <div className="absolute -inset-1 rounded-2xl border border-dashed border-golden-beige/0 group-hover:border-golden-beige/30 group-hover:animate-[spin_20s_linear_infinite] transition-colors duration-300" />
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-warm-dark group-hover:text-warm-brown transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-warm-brown/70 font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Little custom bottom detail */}
              <div className="h-1 w-0 bg-golden-beige group-hover:w-10 rounded-full transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Fun Stats Row to add visual luxury and interest */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-golden-beige/10 text-center">
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown">100%</p>
            <p className="text-[10px] tracking-widest font-mono text-golden-beige uppercase">Organic Grain</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown">36 Hrs</p>
            <p className="text-[10px] tracking-widest font-mono text-golden-beige uppercase">Slow Fermentation</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown">2,500+</p>
            <p className="text-[10px] tracking-widest font-mono text-golden-beige uppercase">Happy Families</p>
          </div>
          <div className="space-y-1">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-warm-brown">15+</p>
            <p className="text-[10px] tracking-widest font-mono text-golden-beige uppercase">Artisan Chefs</p>
          </div>
        </div>

      </div>
    </section>
  );
}
