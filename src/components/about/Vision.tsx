import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Rocket } from "lucide-react";

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-secondary/10 to-amber-500/10 rounded-2xl p-8 border border-secondary/20"
          >
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To become India's leading platform for skill development, creating 
              a seamless bridge between academic learning and industry requirements, 
              ensuring every student has access to quality training and career opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20"
          >
            <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering institutions and learners through outcome-based learning, 
              fostering industry collaborations that turn academic potential into 
              professional success, and achieving 84%+ placement rates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-8 border border-emerald-500/20"
          >
            <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="h-7 w-7 text-white" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Our Goal
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To train and place 9,547+ students by 2027, partner with 613+ 
              industries, and establish SkillArion as the gold standard for 
              industry-academia collaboration in India.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
