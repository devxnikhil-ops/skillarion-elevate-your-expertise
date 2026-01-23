import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Users, Building2, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: GraduationCap,
    title: "For Students",
    description: "Looking to kickstart your career with industry training and placements?",
    cta: "Explore Programs",
  },
  {
    icon: Building2,
    title: "For Colleges",
    description: "Want to enhance your students' employability and boost NAAC/NIRF rankings?",
    cta: "Partner With Us",
  },
  {
    icon: Users,
    title: "For Companies",
    description: "Need skilled talent trained on the latest technologies for your team?",
    cta: "Hire From Us",
  },
];

const ContactCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="py-20 md:py-28 bg-primary" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            How Can We Help?
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Choose Your <span className="text-secondary">Path</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Whether you're a student, institution, or company—we have solutions tailored for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-secondary/30 transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <audience.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {audience.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {audience.description}
              </p>
              
              <Button
                variant="outline"
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                onClick={() => {
                  navigate('/contact');
                  scrollToTop();
                }}
              >
                {audience.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
