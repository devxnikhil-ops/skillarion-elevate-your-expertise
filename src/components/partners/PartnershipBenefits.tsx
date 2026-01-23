import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  Users, 
  Award, 
  FileCheck,
  Briefcase,
  GraduationCap
} from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Boost NAAC/NIRF Rankings",
    description: "Enhance your institution's rankings through industry collaborations and placement records.",
  },
  {
    icon: Users,
    title: "Access to Skilled Talent",
    description: "Companies get pre-trained, job-ready candidates aligned with their technology stack.",
  },
  {
  icon: Award,
  title: "Quality-Assured Programs",
  description: "All programs follow high education standards to ensure quality learning and industry relevance.",
},
  {
    icon: FileCheck,
    title: "MoU Support",
    description: "We facilitate formal partnerships with proper documentation and agreements.",
  },
  {
    icon: Briefcase,
    title: "Internship Pipeline",
    description: "Continuous flow of talented interns for your projects and teams.",
  },
  {
    icon: GraduationCap,
    title: "Faculty Development",
    description: "Training programs for faculty to stay updated with industry trends.",
  },
];

const PartnershipBenefits = () => {
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
            Why Partner With Us
          </span>
          <h2 className="section-heading">
            Partnership <span className="text-secondary">Benefits</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Mutual growth through strategic collaboration—benefits for institutions and companies alike.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-background rounded-xl p-6 shadow-soft border border-border hover:border-secondary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipBenefits;
