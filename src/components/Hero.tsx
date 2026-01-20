import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroVideo from "@/assets/Education.mp4";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-6"
          >
            Bridging the Gap Between{" "}
            <span className="text-white">Academia</span> &{" "}
            <span className="text-white">Industry</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl"
          >
            Revolutionizing skill development for engineering and polytechnic students 
            with hands-on technical workshops, internships, and industry-aligned training programs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-gold-dark shadow-gold text-base px-8 py-6"
              asChild
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60 text-base px-8 py-6 backdrop-blur-sm"
              asChild
            >
              <Link to="/services">
                <Play className="mr-2 h-5 w-5" />
                Explore Programs
              </Link>
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10"
          >
            {[
              { value: "120+", label: "Industry Partners" },
              { value: "500+", label: "Students Placed" },
              { value: "75%+", label: "Placement Rate" },
              { value: "₹25K+", label: "Internship Stipend" },
              { value: "2025", label: "Established" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-display font-bold text-secondary">{stat.value}</p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
