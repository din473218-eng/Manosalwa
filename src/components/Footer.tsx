import React from "react";
import { Instagram, Facebook, Twitter, Wheat, ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollToTop: () => void;
  onOrderClick: () => void;
}

export default function Footer({ onScrollToTop, onOrderClick }: FooterProps) {
  const currentYear = 2026; // Static year representing current local metadata timeline

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const categories = ["Cakes", "Pastries", "Bread", "Cookies", "Desserts"];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-warm-dark text-cream pt-20 pb-8 border-t border-golden-beige/10 relative overflow-hidden" id="footer">
      {/* Decorative Warm Blur Orb */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-golden-beige/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-cream/10 text-left">
          
          {/* Brand Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-golden-beige uppercase">
                MaNoSaLwA
              </span>
              <span className="text-[10px] tracking-[0.25em] font-mono text-cream/60 uppercase font-semibold leading-none mt-1">
                B a k e r y
              </span>
            </div>
            
            <p className="text-sm text-cream/70 font-sans font-light leading-relaxed">
              We are an artisanal boutique bakery dedicated to handcrafted happiness. Our master bakers hand-prepare and bake fresh rustic sourdough, soft laminated pastries, and gorgeous celebration cakes daily.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-golden-beige hover:text-warm-dark rounded-full border border-cream/10 transition-all duration-300 shadow-md"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-golden-beige hover:text-warm-dark rounded-full border border-cream/10 transition-all duration-300 shadow-md"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/5 hover:bg-golden-beige hover:text-warm-dark rounded-full border border-cream/10 transition-all duration-300 shadow-md"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-serif text-sm font-bold text-golden-beige tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-sm text-cream/75 hover:text-golden-beige transition-colors font-sans font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-serif text-sm font-bold text-golden-beige tracking-wider uppercase">
              Categories
            </h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#menu"
                    onClick={(e) => handleScrollTo(e, "#menu")}
                    className="text-sm text-cream/75 hover:text-golden-beige transition-colors font-sans font-light"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-serif text-sm font-bold text-golden-beige tracking-wider uppercase">
              Contact Info
            </h4>
            
            <ul className="space-y-4 text-sm text-cream/75 font-sans font-light">
              <li className="flex gap-3">
                <span className="text-golden-beige shrink-0 mt-0.5">📍</span>
                <span>452 Artisans Boulevard, Pastry District, New York, NY 10001</span>
              </li>
              <li className="flex gap-3">
                <span className="text-golden-beige shrink-0 mt-0.5">📞</span>
                <span>+1 (555) 987-6543</span>
              </li>
              <li className="flex gap-3">
                <span className="text-golden-beige shrink-0 mt-0.5">✉️</span>
                <span>hello@manosalwa-bakery.com</span>
              </li>
              <li className="flex gap-3">
                <span className="text-golden-beige shrink-0 mt-0.5">⏰</span>
                <span className="leading-relaxed">
                  Mon - Sat: 6:00 AM - 8:00 PM <br />
                  Sun: 7:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright bar with Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-cream/50 font-mono">
          <p className="text-center sm:text-left">
            &copy; {currentYear} MaNoSaLwA Bakery. All rights reserved. Crafted with absolute devotion and flour.
          </p>

          <button
            onClick={onScrollToTop}
            className="group bg-white/5 hover:bg-golden-beige hover:text-warm-dark p-3 rounded-full border border-cream/10 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span className="text-[10px] tracking-wider uppercase font-semibold">Back To Top</span>
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
