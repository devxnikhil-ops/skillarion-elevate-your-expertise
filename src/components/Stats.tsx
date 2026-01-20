import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "120+", label: "Industry Partners", description: "Global companies collaborating with us" },
  { value: "500+", label: "Students Placed", description: "Total Students Placed" },
  { value: "75%+", label: "Placement Rate", description: "Students placed in top companies" },
  { value: "₹25K+", label: "Internship Stipend", description: "Paid during internship programs" },
  { value: "16-24", label: "Weeks Training", description: "Comprehensive industrial exposure" },
  { value: "AICTE", label: "Compliant", description: "All programs meet standards" },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="section-heading">
            SkillArion <span className="text-secondary">at a Glance</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="stat-card group"
            >
              <p className="stat-number group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="font-semibold text-primary mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground hidden md:block">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
