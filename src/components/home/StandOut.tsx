import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StandOut = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border-2 border-secondary/40 shadow-gold"
        >
          <div className="p-8 md:p-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              We Stand Out
            </h2>
            <p className="text-primary/80 text-base md:text-lg leading-relaxed">
              We
              stand out by establishing formal MoUs with educational institutions
              and industry leaders, creating a seamless ecosystem from learning
              to employment. Our offerings include entrepreneur interactions,
              scholarship tests, industry expert guest lectures and workshops, and
              global internship and project collaborations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StandOut;
