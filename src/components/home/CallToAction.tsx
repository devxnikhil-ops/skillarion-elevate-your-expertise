import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6">
            Start Your Journey Today
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Ready to <span className="text-secondary">Transform</span> Your Career?
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Join 500+ students who have already launched successful careers through 
            SkillArion's industry-aligned programs. Your future starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-gold-dark shadow-gold text-base px-8 py-6"
              asChild
            >
              <a href="https://wa.me/917673925472" target="_blank" rel="noopener noreferrer">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60 text-base px-8 py-6 backdrop-blur-sm"
              asChild
            >
              <a href="tel:+919492270525">
                Schedule a Call
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/60">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
