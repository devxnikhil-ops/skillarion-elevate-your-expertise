import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Cpu,
  Cloud,
  Database,
  Code2,
  Smartphone,
  Shield,
  Workflow,
  Microchip,
  Radio,
  Zap,
  BatteryCharging,
  Cog,
  Wrench,
  Building2,
  Map,
} from "lucide-react";

const technologies = [
  // CSE / IT
  { icon: Brain, name: "AI & ML", description: "TensorFlow, PyTorch, Scikit-learn" },
  { icon: Cloud, name: "Cloud Computing", description: "AWS, Azure, GCP" },
  { icon: Workflow, name: "DevOps", description: "Docker, Kubernetes, CI/CD" },
  { icon: Shield, name: "Cybersecurity", description: "Ethical Hacking, SIEM, SOC" },

  // Data & Development
  { icon: Database, name: "Data Science", description: "Python, SQL, Tableau, Power BI" },
  { icon: Code2, name: "Web Development", description: "React, Node.js, Django" },
  { icon: Smartphone, name: "Mobile Apps", description: "Flutter, React Native" },

  // ECE
  { icon: Microchip, name: "VLSI & Chip Design", description: "RTL, Verilog, FPGA basics" },
  { icon: Radio, name: "Embedded Systems & IoT", description: "Arduino, ESP32, Sensors" },

  // EEE
  { icon: Zap, name: "Smart Grid & Power Systems", description: "Renewables, Grid tech, Protection" },
  { icon: BatteryCharging, name: "EV & Battery Tech", description: "BMS, Charging, EV architecture" },

  // Mechanical
  { icon: Cog, name: "Robotics & Automation", description: "Industry 4.0, PLC basics, Robotics" },
  { icon: Wrench, name: "CAD / CAE & Simulation", description: "Design, Analysis, Manufacturing" },

  // Civil
  { icon: Building2, name: "BIM & Smart Construction", description: "Planning, Modeling, Execution" },
  { icon: Map, name: "Smart Cities & Infrastructure", description: "Sustainability, Urban Tech, GIS" },
];

const TechnologyStack = () => {
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
            Technologies We Teach
          </span>
          <h2 className="section-heading">
            Branch-Wise <span className="text-secondary">Technology Stack</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Learn future-ready technologies designed for{" "}
            <span className="text-primary font-medium">
              CSE, ECE, EEE, Mechanical, and Civil
            </span>{" "}
            careers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="bg-background rounded-xl p-5 shadow-soft border border-border hover:border-secondary/30 hover:shadow-medium transition-all duration-300 text-center group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary transition-colors">
                <tech.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />
              </div>
              <h3 className="font-semibold text-primary mb-1">{tech.name}</h3>
              <p className="text-muted-foreground text-xs">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
