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
    description: "Hands-on sessions on AI/ML, VLSI, Quantum Computing, Embedded Systems, Automation & Robotics, and emerging technologies.",
    features: [
      "Industry-aligned curriculum",
      "Expert-led training",
      "Practical projects",
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
      "₹22k–₹25k stipends",
      "Accommodation support",
      "Live projects",
      "84%+ placement rate",
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
      "₹22k–₹25k stipends",
      "Direct industry approach",
      "Fast-track placements",
      "Global Projects involvement",
    ],
    color: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
  },
  {
  icon: Users,
  title: "Parenting (Mentoring)",
  duration: "Every Semester",
  description:
    "We visit MoU partner colleges each semester to evaluate student performance, identify strengths and gaps, understand interests, and create a personalized improvement plan with guided training.",
  features: [
    "Semester-wise student analysis",
    "Interest & career mapping",
    "Strength & gap identification",
    "Personalized training roadmap",
  ],
  color: "from-rose-500/10 to-red-500/10",
  borderColor: "border-rose-500/20 hover:border-rose-500/40",
},

];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28" ref={ref}>
      <div className="container">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-secondary rounded-full"></div>
          <h2 className="text-2xl font-bold text-primary">Services</h2>
        </div>
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
            Skill<span className="text-secondary">A</span>rion Development Programs
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
            </motion.div>
          ))}
        </div>

        {/* Mentor/Resource Person CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 bg-gradient-to-br from-secondary/10 to-amber-500/10 rounded-2xl p-8 md:p-12 border-2 border-secondary/30"
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold">
              <Users className="h-8 w-8 text-secondary-foreground" />
            </div>
            <h3 className="font-display text-3xl font-bold text-primary mb-4">
              Become a Mentor or Resource Person?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Are you ready to make a difference? We are seeking passionate Professionals to become mentors and resource persons to inspire the next generation of leaders. Join our program to share your experience, expand your network and leave a lasting legacy. Apply now and help shape the future.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-gold-dark shadow-gold text-base px-8 py-6"
              onClick={() => {
                // Navigate to contact page or open application form
                window.location.href = '/contact';
              }}
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

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
              { label: "MoUs for Colleges/Industries", icon: "📜" },
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
