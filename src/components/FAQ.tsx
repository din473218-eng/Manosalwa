import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-warm-light relative overflow-hidden">
      {/* Decorative Blur elements */}
      <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-golden-beige/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-semibold tracking-widest font-mono text-golden-beige uppercase block">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-warm-dark tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-golden-beige rounded-full mx-auto" />
          <p className="text-sm sm:text-base text-warm-brown/70 font-sans font-light leading-relaxed">
            Can't find what you are looking for? Here is a compiled list of our most common inquiries about baking times, custom orders, and catering.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordion-list">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-cream rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-golden-beige shadow-lg"
                    : "border-golden-beige/15 hover:border-golden-beige/40 shadow-sm"
                }`}
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 text-left transition-colors focus:outline-none focus:bg-golden-beige/5"
                  aria-expanded={isOpen}
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="text-golden-beige shrink-0" size={18} />
                    <span className="font-serif text-base sm:text-lg font-bold text-warm-dark group-hover:text-warm-brown">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Chevron Arrow */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="p-1.5 rounded-full bg-warm-light text-warm-brown shrink-0 border border-golden-beige/10"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 sm:px-8 sm:pb-8 text-left border-t border-dashed border-golden-beige/10">
                        <p className="text-sm sm:text-base text-warm-brown/80 font-sans font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* FAQ Visual footer message */}
        <div className="mt-12 text-center p-6 bg-cream rounded-3xl border border-golden-beige/10">
          <p className="text-sm text-warm-brown/70">
            Still have a custom question about wedding configurations or organic ingredients?
          </p>
          <a
            href="#contact"
            className="text-golden-beige hover:text-warm-brown font-semibold text-sm inline-flex items-center gap-1.5 mt-2 transition-colors hover:underline"
          >
            Ask our baking team directly
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
