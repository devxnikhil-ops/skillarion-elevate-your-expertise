import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Zap, 
  Users, 
  Trophy,
  CheckCircle2
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Industry-Backed Curriculum",
    description: "Our programs are designed in collaboration with 120+ industry partners, ensuring you learn skills that employers actually need.",
    highlights: ["Real-world projects", "Updated content", "Expert mentors"],
  },
  {
    icon: Zap,
    title: "Fast-Track to Employment",
    description: "With 75%+ placement rate and direct industry connections, we accelerate your journey from student to professional.",
    highlights: ["Direct placements", "Interview prep", "Resume building"],
  },
  {
    icon: Users,
    title: "Personalized Mentorship",
    description: "Get one-on-one guidance from industry professionals who understand your career goals and help you achieve them.",
    highlights: ["1:1 sessions", "Career guidance", "Skill assessment"],
  },
  {
    icon: Trophy,
    title: "Recognized Certifications",
    description: "Earn AICTE-compliant certifications that are valued by employers and boost your professional credibility.",
    highlights: ["AICTE approved", "Industry recognized", "Verified profiles"],
  },
];

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="section-heading">
            Why <span className="text-secondary">SkillArion?</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            We don't just teach skills—we build careers. Here's what sets us apart 
            from traditional education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-muted/30 rounded-2xl p-8 border border-border hover:border-secondary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <reason.icon className="h-7 w-7 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-primary mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {reason.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 text-xs bg-secondary/10 text-secondary px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle2 className="h-3 w-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
