import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Atom,
  Brain,
  Cpu,
  Cloud,
  Code2,
  Microchip,
  Radio,
  Zap,
  BatteryCharging,
  Cog,
  Building2,
  Clock,
} from "lucide-react";

const programs = [
  // Quantum (First Priority)
  {
    icon: Atom,
    title: "Quantum Technology",
    duration: "8 Weeks",
    description:
      "Learn quantum computing fundamentals, quantum circuits, and Qiskit with hands-on simulations.",
    color: "from-violet-500/20 to-indigo-500/20",
    borderColor: "border-violet-500/30",
  },

  // CSE / IT
  {
    icon: Brain,
    title: "AI & Machine Learning",
    duration: "16 Weeks",
    description:
      "Master neural networks, deep learning, and AI applications with hands-on projects.",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    duration: "14 Weeks",
    description:
      "Learn AWS, Azure, Docker, and Kubernetes with real-time deployment projects.",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
  },

  // ECE
  {
    icon: Microchip,
    title: "VLSI & Chip Design",
    duration: "12 Weeks",
    description:
      "Explore RTL design, verification basics, and semiconductor industry workflows.",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Radio,
    title: "Embedded Systems & IoT",
    duration: "10 Weeks",
    description:
      "Build smart devices using sensors, microcontrollers, and real IoT applications.",
    color: "from-cyan-500/20 to-sky-500/20",
    borderColor: "border-cyan-500/30",
  },

  // EEE
  {
    icon: Zap,
    title: "Smart Grid & Renewable Energy",
    duration: "10 Weeks",
    description:
      "Learn modern power systems, solar integration, and smart grid technologies.",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
  },
  {
    icon: BatteryCharging,
    title: "EV Technology & Battery Systems",
    duration: "8 Weeks",
    description:
      "Understand EV architecture, battery management systems, and charging tech.",
    color: "from-lime-500/20 to-green-500/20",
    borderColor: "border-lime-500/30",
  },

  // Mechanical
  {
    icon: Cog,
    title: "Robotics & Industrial Automation",
    duration: "12 Weeks",
    description:
      "Learn robotics fundamentals, PLC concepts, and Industry 4.0 automation.",
    color: "from-slate-500/20 to-gray-500/20",
    borderColor: "border-slate-500/30",
  },
  {
    icon: Cpu,
    title: "Digital Twin & Simulation",
    duration: "10 Weeks",
    description:
      "Work with virtual modeling, simulations, and predictive maintenance concepts.",
    color: "from-fuchsia-500/20 to-rose-500/20",
    borderColor: "border-fuchsia-500/30",
  },

  // Civil
  {
    icon: Building2,
    title: "BIM & Smart Construction",
    duration: "8 Weeks",
    description:
      "Learn BIM workflows, planning tools, and modern construction technologies.",
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "border-orange-500/30",
  },
  {
    icon: Code2,
    title: "Smart Cities & Sustainable Design",
    duration: "10 Weeks",
    description:
      "Explore green buildings, urban planning tech, and sustainable infrastructure.",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
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
            Branch-Wise Programs
          </span>
          <h2 className="section-heading">
            Featured <span className="text-secondary">Programs</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Emerging technology courses designed for{" "}
            <span className="text-primary font-medium">
              CSE, ECE, EEE, Mechanical, and Civil
            </span>{" "}
            students to become industry-ready.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * index }}
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
