import { motion } from "framer-motion";
import { MessageCircle, Phone, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="floating-cta hidden md:flex"
    >
      <Link
        to="/contact"
        className="floating-cta-btn bg-secondary hover:bg-gold-dark"
      >
        <span className="flex items-center gap-2">
          <MessageCircle className="h-4 w-4" />
          Admission Enquiry
        </span>
      </Link>
      <a
        href="tel:+919492270525"
        className="floating-cta-btn bg-primary hover:bg-navy-light"
      >
        <span className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          Contact Us
        </span>
      </a>
      <a
        href="https://wa.me/919492270525"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta-btn bg-emerald-600 hover:bg-emerald-700"
      >
        <span className="flex items-center gap-2">
          <HelpCircle className="h-4 w-4" />
          Chat with Us
        </span>
      </a>
    </motion.div>
  );
};

export default FloatingCTA;
