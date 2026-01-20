import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Star, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "AICTE Compliant",
    description: "All programs meet AICTE standards for quality education and industry relevance.",
  },
  {
    icon: Award,
    title: "TBI Incubated",
    description: "Incubated at Technology Business Incubator, Padmavathi Mahila University.",
  },
  {
    icon: Star,
    title: "75%+ Placement Rate",
    description: "Consistently achieving high placement rates across all training programs.",
  },
  {
    icon: Medal,
    title: "120+ Industry Partners",
    description: "Strong network of companies providing internships and job opportunities.",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Recognition
          </span>
          <h2 className="section-heading">
            Our <span className="text-secondary">Achievements</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Milestones and recognitions that reflect our commitment to excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-background rounded-2xl p-6 shadow-soft border border-border hover:border-secondary/30 hover:shadow-medium transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
