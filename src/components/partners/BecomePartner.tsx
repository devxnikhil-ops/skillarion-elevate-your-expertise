import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, GraduationCap, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BecomePartner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-navy-light relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
            Join Our Network
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Become a <span className="text-secondary">Partner</span> Today
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Whether you're an educational institution looking to enhance student outcomes 
            or a company seeking skilled talent—we're ready to collaborate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white mb-3">
              For Educational Institutions
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Partner with us to provide your students with industry exposure, 
              internships, and placement opportunities. Boost your institution's 
              reputation and rankings.
            </p>
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-gold-dark"
              onClick={() => {
                navigate('/contact');
                scrollToTop();
              }}
            >
              Partner as Institution
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Building2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white mb-3">
              For Companies
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Access a pipeline of pre-trained, job-ready talent. Reduce hiring 
              costs and time with candidates already skilled in your technology stack.
            </p>
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-gold-dark"
              onClick={() => {
                navigate('/contact');
                scrollToTop();
              }}
            >
              Partner as Company
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60 mt-12"
        >
          <a href="tel:+919492270525" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone className="h-4 w-4" />
            +91 9492270525
          </a>
          <span className="hidden sm:block">|</span>
          <a href="mailto:info@skillariondevelopment.in" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="h-4 w-4" />
            info@skillariondevelopment.in
          </a>
          <span className="hidden sm:block">|</span>
          <a href="mailto:career@skillariondevelopment.in" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail className="h-4 w-4" />
            career@skillariondevelopment.in
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BecomePartner;
