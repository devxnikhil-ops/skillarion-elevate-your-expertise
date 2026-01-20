import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Brain, 
  Cpu, 
  Cloud, 
  Code2,
  ArrowRight,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    duration: "16 Weeks",
    description: "Master neural networks, deep learning, and AI applications with hands-on projects.",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Cpu,
    title: "Automation & Robotics",
    duration: "12 Weeks",
    description: "Learn industrial automation, PLC programming, and robotics fundamentals.",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    duration: "14 Weeks",
    description: "Get certified in AWS, Azure, Docker, and Kubernetes with real deployments.",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    duration: "20 Weeks",
    description: "Build complete web applications with modern frameworks and databases.",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
  },
];

const FeaturedPrograms = () => {
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
            Popular Courses
          </span>
          <h2 className="section-heading">
            Featured <span className="text-secondary">Programs</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Industry-leading courses designed to make you job-ready in the most 
            in-demand technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group bg-gradient-to-br ${program.color} rounded-2xl p-6 border ${program.borderColor} hover:shadow-medium transition-all duration-300`}
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                <program.icon className="h-6 w-6 text-secondary" />
              </div>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Clock className="h-3 w-3" />
                {program.duration}
              </div>
              
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedPrograms;
