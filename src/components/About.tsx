import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Industry-Aligned Training",
    description: "Curriculum designed with 120+ industry experts for real-world applicability and job readiness.",
  },
  {
    icon: Users,
    title: "Hands-On Experience",
    description: "Live projects, industrial training, and mentorship from industry professionals.",
  },
  {
    icon: TrendingUp,
    title: "Career Advancement",
    description: "Stipend-backed internships (₹16k–₹19k) with accommodation and placement support.",
  },
  {
    icon: Award,
    title: "Recognized Certifications",
    description: "AICTE-compliant programs with verified profiles shared across 120+ partner companies.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-muted/50" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              About SkillArion
            </span>
            <h2 className="section-heading">
              Empowering Students for{" "}
              <span className="text-secondary">Tomorrow's Careers</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SkillArion Development Pvt. Ltd. is an EdTech startup revolutionizing skill 
                development for engineering and polytechnic students in India by bridging 
                the academia-industry divide.
              </p>
              <p>
                With partnerships across 120+ industries, we deliver hands-on technical 
                workshops, internships, and training programs focused on emerging technologies 
                like AI, quantum computing, and DevOps.
              </p>
              <p>
                Our AICTE-compliant initiatives provide live projects, MoUs, and placement 
                support to make students job-ready, achieving 75%+ placement rates and 
                elevating college NAAC/NIRF rankings.
              </p>
            </div>

            {/* Mission Badge */}
            <div className="mt-8 p-6 bg-primary rounded-xl text-white">
              <h3 className="font-display text-xl font-semibold mb-2 flex items-center gap-2">
                <Target className="h-5 w-5 text-secondary" />
                Our Mission
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Empowering institutions and learners through outcome-based learning, 
                fostering collaborations that turn academic potential into professional success.
              </p>
            </div>
          </motion.div>

          {/* Right - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 border border-border"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
