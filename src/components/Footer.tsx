import { Phone, Mail, MapPin, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="SkillArion Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white block leading-tight">
                  Skill<span className="text-secondary">A</span>rion Development
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Revolutionizing skill development for engineering and polytechnic 
              students by bridging the academia-industry divide.
            </p>
            <p className="text-secondary font-semibold italic">
              "Bridging Academia to Industry Excellence"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link onClick={scrollToTop} to="/" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/about" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/services" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/partners" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  Partners
                </Link>
              </li>
              <li>
                <Link onClick={scrollToTop} to="/contact" className="text-white/70 hover:text-secondary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {[
                "Technical Workshops",
                "Industrial Training",
                "Internship Programs",
                "Advanced Certification Courses",
                "Entrepreneur Interaction",
                "Industry Expert Sessions",
                "Scholarship Tests",
              ].map((program) => (
                <li key={program}>
                  <Link
                    onClick={scrollToTop}
                    to="/services"
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  TBI Centre, Near Padmavathi Mahila University, Tirupati-517502, Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:+919492270525" className="text-white/70 hover:text-secondary transition-colors">
                  +91 9492270525
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="mailto:info@skillariondevelopment.in" className="text-white/70 hover:text-secondary transition-colors">
                  info@skillariondevelopment.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="mailto:career@skillariondevelopment.in" className="text-white/70 hover:text-secondary transition-colors">
                  career@skillariondevelopment.in
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/skillarion-development/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/skillarion_development"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SkillArion Development. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary hover:bg-gold-light transition-colors shadow-gold"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
