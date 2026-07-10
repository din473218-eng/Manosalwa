import { motion } from "motion/react";
import { CheckCircle, ShieldCheck, Heart, Award } from "lucide-react";

export default function About() {
  const highlights = [
    { title: "Fresh Ingredients", desc: "No artificial additions. We source local organic flour, pure butter, and fresh seasonal fruits." },
    { title: "Daily Baking", desc: "Every loaf of bread and buttery croissant is baked from scratch every morning before sunrise." },
    { title: "Skilled Bakers", desc: "Led by passionate master pastry chefs trained in classic European culinary arts." },
    { title: "Beautiful Presentation", desc: "Crafted with pristine aesthetic detail to look like edible works of high art." },
  ];

  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-golden-beige/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warm-brown/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Images Left/Right Column */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-3xl shadow-xl aspect-square border-4 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80"
                  alt="Dough Kneading and Baking Process"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="overflow-hidden rounded-3xl shadow-xl aspect-[3/4] translate-y-8 border-4 border-white"
              >
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh Baked Pastries and Sourdough"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
            
            {/* Visual Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -bottom-4 -right-2 sm:right-6 bg-warm-brown text-cream p-6 rounded-2xl shadow-2xl border border-golden-beige/20 flex flex-col items-center justify-center text-center max-w-[150px]"
            >
              <span className="font-serif text-3xl font-bold text-golden-beige">8+</span>
              <span className="text-[10px] tracking-widest font-mono text-cream/80 uppercase mt-1">Years of Joy</span>
            </motion.div>
          </div>

          {/* Text Content Right/Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-semibold tracking-widest font-mono text-golden-beige uppercase block">
                Our Heritage & Passion
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-dark tracking-tight leading-tight">
                About MaNoSaLwA
              </h2>
              <div className="h-1 w-20 bg-golden-beige rounded-full" />
            </div>

            <div className="space-y-6 text-warm-brown/80 font-sans font-light leading-relaxed text-base sm:text-lg">
              <p>
                Founded on the pillars of pure passion and deep heritage,{" "}
                <span className="font-semibold text-warm-brown">MaNoSaLwA</span> is a concept high-end bakery designed for those who appreciate the finer tastes in life. We bake because we love—it's that simple.
              </p>
              <p>
                Every morning, our ovens are fired at dawn to provide the local community with an extraordinary selection of wholesome bread, flaky pastries, and stunning custom celebration cakes. We combine generational <span className="italic font-serif text-golden-beige font-normal">homemade taste</span> with modern gourmet baking techniques to deliver an experience of luxury with every bite.
              </p>
              <p>
                For us, <span className="font-semibold text-warm-brown">premium quality</span> is not just a standard—it is our absolute commitment. From the perfect, airy crumb of our baguettes to the pristine frosting on our customized red velvet creations, we ensure <span className="font-semibold text-warm-brown">beautiful presentation</span> and absolute <span className="font-semibold text-warm-brown">customer satisfaction</span> in everything we touch.
              </p>
            </div>

            {/* Icon Grid Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <CheckCircle className="text-golden-beige shrink-0 mt-1" size={18} />
                  <div>
                    <h4 className="text-sm font-semibold text-warm-dark font-sans">{item.title}</h4>
                    <p className="text-xs text-warm-brown/70 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
