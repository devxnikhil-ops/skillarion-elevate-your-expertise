import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";

const team = [
  {
    name: "Leadership Team",
    role: "Founders & Directors",
    description: "Experienced professionals with backgrounds in education, technology, and industry partnerships.",
    initials: "LT",
  },
  {
    name: "Training Team",
    role: "Industry Experts",
    description: "Seasoned professionals from top companies delivering hands-on training and mentorship.",
    initials: "TT",
  },
  {
    name: "Placement Team",
    role: "Career Specialists",
    description: "Dedicated team ensuring students get the best placement opportunities across 120+ partners.",
    initials: "PT",
  },
  {
    name: "Support Team",
    role: "Student Success",
    description: "Always available to assist students with queries, guidance, and administrative support.",
    initials: "ST",
  },
];

const Team = () => {
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
            Meet Our Team
          </span>
          <h2 className="section-heading">
            The People Behind Skill<span className="text-secondary">A</span>rion
          </h2>
          <p className="section-subheading mx-auto mt-4">
            A passionate team dedicated to transforming student careers and 
            building industry-ready professionals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-background rounded-2xl p-6 shadow-soft border border-border hover:shadow-medium transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                {member.initials}
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-secondary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
