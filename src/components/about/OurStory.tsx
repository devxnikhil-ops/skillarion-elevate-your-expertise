import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, Award } from "lucide-react";

const milestones = [
  {
    year: "2025",
    title: "Founded",
    description: "SkillArion was established with a vision to bridge the academia-industry gap.",
  },
  {
    year: "Q1 2025",
    title: "First Partnerships",
    description: "Signed MoUs with 50+ industry partners and educational institutions.",
  },
  {
    year: "Q2 2025",
    title: "Program Launch",
    description: "Launched comprehensive internship and training programs across India.",
  },
  {
    year: "Present",
    title: "Growing Impact",
    description: "120+ partners, 500+ students placed, and expanding nationwide.",
  },
];

const OurStory = () => {
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
            Our Journey
          </span>
          <h2 className="section-heading">
            The <span className="text-secondary">SkillArion</span> Story
          </h2>
          <p className="section-subheading mx-auto mt-4">
            From a vision to revolutionize skill development to becoming a trusted 
            partner for students and institutions across India.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className={`bg-muted/50 rounded-2xl p-6 border border-border inline-block ${
                    index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  }`}>
                    <span className="text-secondary font-semibold text-sm">{milestone.year}</span>
                    <h3 className="font-display text-xl font-semibold text-primary mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg z-10 hidden md:block" />
                
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
