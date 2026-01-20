import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  GraduationCap, 
  Wallet, 
  Home, 
  FileCheck,
  Users,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "Paid Internships",
    description: "Earn ₹16k–₹22.5k monthly stipend during your training period.",
  },
  {
    icon: Home,
    title: "Accommodation Support",
    description: "Free or subsidized accommodation for outstation students.",
  },
  {
    icon: FileCheck,
    title: "AICTE Credits",
    description: "Earn academic credits recognized by your institution.",
  },
  {
    icon: GraduationCap,
    title: "Industry Certifications",
    description: "Get certified credentials valued by top employers.",
  },
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "1:1 guidance from industry professionals throughout your journey.",
  },
  {
    icon: TrendingUp,
    title: "Placement Guarantee",
    description: "75%+ placement rate with direct industry connections.",
  },
];

const ProgramBenefits = () => {
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
            What You Get
          </span>
          <h2 className="section-heading">
            Program <span className="text-secondary">Benefits</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            More than just training—we invest in your complete career development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <benefit.icon className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramBenefits;
