import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShoppingBag } from "lucide-react";

interface NavbarProps {
  onOrderClick: () => void;
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active link detection based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const element = document.querySelector(link.href);
        if (element) {
          const top = (element as HTMLElement).offsetTop;
          const height = (element as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href.slice(1));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/90 backdrop-blur-md shadow-lg border-b border-golden-beige/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2 group focus:outline-none"
            id="nav-logo"
          >
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-warm-brown transition-colors group-hover:text-golden-beige uppercase">
                MaNoSaLwA
              </span>
              <span className="text-[10px] tracking-[0.25em] font-mono text-golden-beige uppercase font-semibold leading-none">
                B a k e r y
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 focus:outline-none ${
                  activeSection === link.href.slice(1)
                    ? "text-warm-brown font-semibold"
                    : "text-warm-brown/70 hover:text-warm-brown"
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-golden-beige rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOrderClick}
              className="bg-warm-brown text-cream hover:bg-golden-beige hover:text-warm-dark font-medium text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group active:scale-95 focus:outline-none"
              id="desktop-order-btn"
            >
              <ShoppingBag size={16} className="transition-transform group-hover:rotate-12" />
              Order Now
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOrderClick}
              className="bg-warm-brown text-cream p-2 rounded-full transition-colors hover:bg-golden-beige hover:text-warm-dark focus:outline-none focus:ring-2 focus:ring-golden-beige/50"
              aria-label="Order Now"
              id="mobile-quick-order"
            >
              <ShoppingBag size={16} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-brown p-2 hover:text-golden-beige focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] max-w-full bg-cream shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden border-l border-golden-beige/10"
              id="mobile-drawer"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-golden-beige/10">
                  <div className="flex flex-col">
                    <span className="font-serif text-xl font-bold tracking-wider text-warm-brown uppercase">
                      MaNoSaLwA
                    </span>
                    <span className="text-[9px] tracking-[0.25em] font-mono text-golden-beige uppercase font-semibold leading-none">
                      B a k e r y
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-warm-brown p-1 hover:text-golden-beige focus:outline-none"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-4 mt-8" id="mobile-nav-links">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`text-base font-medium tracking-wide py-1.5 transition-all border-l-2 pl-3 ${
                        activeSection === link.href.slice(1)
                          ? "text-warm-brown border-golden-beige font-semibold bg-golden-beige/5"
                          : "text-warm-brown/70 border-transparent hover:text-warm-brown hover:border-golden-beige/30 hover:pl-4"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-golden-beige/10">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOrderClick();
                  }}
                  className="w-full bg-warm-brown text-cream hover:bg-golden-beige hover:text-warm-dark font-medium text-base py-3 rounded-full transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                >
                  <ShoppingBag size={18} />
                  Order Now
                </button>
                <p className="text-center text-[10px] text-warm-brown/40 font-mono mt-4">
                  Freshly Baked Happiness • Daily
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
