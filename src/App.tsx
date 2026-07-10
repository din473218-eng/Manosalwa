import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Wheat, ChevronUp } from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Elegant luxury initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-cream min-h-screen text-warm-brown font-sans antialiased selection:bg-golden-beige selection:text-white overflow-x-hidden">
      
      {/* Luxury Brand Page Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="page-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-warm-dark z-[9999] flex flex-col items-center justify-center p-4 text-center"
          >
            <div className="space-y-6">
              {/* Spinning Wheat */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 rounded-full bg-golden-beige/10 border border-golden-beige/30 flex items-center justify-center text-golden-beige mx-auto shadow-lg shadow-golden-beige/5"
              >
                <Wheat size={28} />
              </motion.div>

              {/* Brand Reveal */}
              <div className="space-y-1">
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.2em] text-white uppercase"
                >
                  MaNoSaLwA
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-[10px] tracking-[0.35em] font-mono text-golden-beige uppercase font-semibold"
                >
                  A r t i s a n a l   B a k e r y
                </motion.p>
              </div>

              {/* Line Indicator */}
              <div className="w-32 h-0.5 bg-white/10 mx-auto rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-golden-beige rounded-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Container */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col min-h-screen"
        >
          {/* Header & Navigation */}
          <Navbar onOrderClick={() => handleScrollToSection("#contact")} />

          {/* Page Sections */}
          <main className="flex-grow">
            {/* Hero Banner Section */}
            <Hero
              onViewMenuClick={() => handleScrollToSection("#menu")}
              onContactClick={() => handleScrollToSection("#contact")}
            />

            {/* About Narrative Section */}
            <About />

            {/* Categorized Featured Products Grid */}
            <Products onOrderClick={() => handleScrollToSection("#contact")} />

            {/* Why Choose Us Values Grid */}
            <WhyChooseUs />

            {/* Photography Masonry & Lightbox Gallery */}
            <Gallery />

            {/* Client Testimonials Section */}
            <Testimonials />

            {/* Accordion FAQ Grid */}
            <FAQ />

            {/* Wide Call to Action Banner */}
            <CTA onContactClick={() => handleScrollToSection("#contact")} />

            {/* Location Cards, Maps, & Messaging Portal */}
            <Contact />
          </main>

          {/* Footer Navigation & Socials */}
          <Footer
            onScrollToTop={handleScrollToTop}
            onOrderClick={() => handleScrollToSection("#contact")}
          />

          {/* Sticky Floating Scroll to Top button (Quick accessible helper) */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 15 }}
                onClick={handleScrollToTop}
                className="fixed bottom-6 right-6 z-40 bg-warm-brown hover:bg-golden-beige text-cream hover:text-warm-dark p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-golden-beige/20 group focus:outline-none focus:ring-2 focus:ring-golden-beige"
                aria-label="Scroll back to top"
                id="floating-scroll-top"
              >
                <ChevronUp size={20} className="transition-transform group-hover:-translate-y-0.5" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
