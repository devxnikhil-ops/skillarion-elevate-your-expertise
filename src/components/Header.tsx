import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Partners", href: "#partners" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919492270525" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={14} />
              +91 9492270525
            </a>
            <a href="mailto:info@skillariondevelopment.in" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />
              info@skillariondevelopment.in
            </a>
          </div>
          <p className="text-secondary font-medium">Enhance Your Expertise</p>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-secondary font-display font-bold text-xl md:text-2xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-primary text-lg md:text-xl leading-tight">SkillArion</span>
                <span className="text-xs text-muted-foreground hidden sm:block">Development Pvt. Ltd.</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground font-medium gold-underline hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button variant="default" size="lg" className="bg-secondary text-secondary-foreground hover:bg-gold-dark shadow-gold">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <nav className="container py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-foreground font-medium py-2 hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="default" className="bg-secondary text-secondary-foreground hover:bg-gold-dark mt-2 w-full">
                  Contact Us
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
