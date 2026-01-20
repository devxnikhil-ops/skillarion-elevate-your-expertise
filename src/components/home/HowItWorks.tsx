import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  UserPlus, 
  BookOpen, 
  Briefcase, 
  Rocket,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Register & Assess",
    description: "Sign up and take our skill assessment to identify your strengths and areas for growth.",
  },
  {
    icon: BookOpen,
    step: "02",
    title: "Learn & Practice",
    description: "Enroll in industry-aligned programs with hands-on projects and expert mentorship.",
  },
  {
    icon: Briefcase,
    step: "03",
    title: "Intern & Experience",
    description: "Get placed in 16-24 week internships with stipends at our 120+ partner companies.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch Your Career",
    description: "Graduate job-ready with certifications and direct placement opportunities.",
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            From registration to placement—your path to a successful career in just four steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-display font-bold text-white/10">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-secondary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
