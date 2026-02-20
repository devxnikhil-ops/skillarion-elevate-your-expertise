import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "Services", href: "/services" },
  { name: "Partners", href: "/partners" },
  { name: "About", href: "/about" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden">
                <img src="/logo.png" alt="SkillArion Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-primary text-lg md:text-xl leading-tight">
                  Skill<span className="text-secondary">A</span>rion Development
                </span>
                <span className="text-xs text-muted-foreground hidden sm:block">Bridging Academia to Industry Excellence</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={scrollToTop}
                  className="text-foreground font-medium gold-underline hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {/* CTA Button */}
              <div className="hidden lg:block">
              <Button 
                variant="default" 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-gold-dark shadow-gold"
                onClick={() => {
                  navigate('/contact');
                  scrollToTop();
                }}
              >
                Contact Us
              </Button>
            </div>
            </nav>            

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
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground font-medium py-2 hover:text-secondary transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      scrollToTop();
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button 
                  variant="default" 
                  className="bg-secondary text-secondary-foreground hover:bg-gold-dark mt-2 w-full"
                  onClick={() => {
                    navigate('/contact');
                    scrollToTop();
                    setIsOpen(false);
                  }}
                >
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
