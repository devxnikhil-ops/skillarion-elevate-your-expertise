import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Briefcase, 
  Users, 
  GraduationCap, 
  ArrowRight,
  Clock,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    title: "Technical Workshops",
    duration: "2–5 Days",
    description: "Hands-on sessions on AI/ML, Automation & Robotics, Quantum Computing, and emerging technologies.",
    features: [
      "Industry-aligned curriculum",
      "Expert-led training",
      "AICTE credits",
      "Certificates included",
    ],
    color: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: Briefcase,
    title: "Internships & Industrial Training",
    duration: "16–24 Weeks",
    description: "Structured placements via 120+ industry partners with stipends and live project exposure.",
    features: [
      "₹16k–₹19k stipends",
      "Accommodation support",
      "Live projects",
      "75%+ placement rate",
    ],
    color: "from-secondary/10 to-amber-500/10",
    borderColor: "border-secondary/30 hover:border-secondary/50",
  },
  {
    icon: Users,
    title: "Industry Expert Sessions",
    duration: "Ongoing",
    description: "Guest lectures and workshops featuring leading industry professionals and entrepreneurs.",
    features: [
      "Real-world insights",
      "Networking opportunities",
      "Career guidance",
      "Industry trends",
    ],
    color: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    icon: GraduationCap,
    title: "Advanced Certification Programs",
    duration: "Flexible",
    description: "Personalized certificates with verified profiles shared across 120+ industry partners.",
    features: [
      "Pre-endorsement access",
      "₹16k–₹22.5k stipends",
      "Direct industry approach",
      "Fast-track placements",
    ],
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Our Programs
          </span>
          <h2 className="section-heading">
            Skill Development <span className="text-secondary">Programs</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Comprehensive training programs designed to bridge the gap between academic 
            knowledge and industry requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group bg-gradient-to-br ${service.color} rounded-2xl p-8 border-2 ${service.borderColor} transition-all duration-300 hover:shadow-medium`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-soft">
                  <service.icon className="h-7 w-7 text-secondary" />
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 px-3 py-1.5 rounded-full">
                  <Clock className="h-4 w-4" />
                  {service.duration}
                </div>
              </div>

              <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant="ghost" 
                className="group/btn text-primary hover:text-secondary hover:bg-transparent p-0"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-primary rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { label: "Placement Support", icon: "🎯" },
              { label: "MoUs for Colleges", icon: "📜" },
              { label: "Faculty Training", icon: "👨‍🏫" },
              { label: "Scholarship Tests", icon: "🏆" },
            ].map((item, index) => (
              <div key={index} className="text-white">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <p className="font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
