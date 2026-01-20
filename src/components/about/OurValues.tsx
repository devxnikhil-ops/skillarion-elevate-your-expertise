import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Lightbulb, Target, Handshake, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Student-First Approach",
    description: "Every decision we make prioritizes student success and career growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously evolve our programs to match industry trends and demands.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We maintain the highest standards in training, mentorship, and placements.",
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Transparent partnerships and honest communication with all stakeholders.",
  },
  {
    icon: Sparkles,
    title: "Impact",
    description: "Measurable outcomes that transform careers and elevate institutions.",
  },
];

const OurValues = () => {
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
            What We Stand For
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Our Core <span className="text-secondary">Values</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            The principles that guide everything we do at SkillArion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
