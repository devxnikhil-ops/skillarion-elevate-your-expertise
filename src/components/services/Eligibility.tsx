import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const eligibleFor = [
  "Engineering students (B.Tech/B.E.) in any branch",
  "Polytechnic/Diploma students",
  "Final year and pre-final year students",
  "Recent graduates seeking industry experience",
  "Students looking for AICTE-compliant internships",
];

const requirements = [
  "Basic programming knowledge (for technical programs)",
  "Good communication skills",
  "Commitment to complete the program duration",
  "Willingness to relocate for internship (if required)",
];

const Eligibility = () => {
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
            Who Can Apply
          </span>
          <h2 className="section-heading">
            Eligibility <span className="text-secondary">Criteria</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Check if you're eligible for our programs and start your journey today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl p-8 shadow-soft border border-border"
          >
            <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-emerald-500" />
              Eligible Candidates
            </h3>
            <ul className="space-y-4">
              {eligibleFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background rounded-2xl p-8 shadow-soft border border-border"
          >
            <h3 className="font-display text-xl font-semibold text-primary mb-6 flex items-center gap-2">
              <span className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-primary text-sm font-bold">!</span>
              Requirements
            </h3>
            <ul className="space-y-4">
              {requirements.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-gold-dark shadow-gold"
          >
            Check Your Eligibility
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Eligibility;
