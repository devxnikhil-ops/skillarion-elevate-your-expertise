import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MessageCircle, 
  FileText, 
  Handshake, 
  Rocket,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Initial Discussion",
    description: "Connect with our team to discuss your requirements and explore collaboration opportunities.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Proposal & MoU",
    description: "We prepare a customized proposal and formal MoU outlining the partnership terms.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Agreement & Onboarding",
    description: "Sign the partnership agreement and complete the onboarding process.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Execute",
    description: "Begin the collaboration with training programs, internships, or recruitment drives.",
  },
];

const PartnershipProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-primary" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Partnership <span className="text-secondary">Process</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A simple, streamlined process to become our partner in just four steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-all duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-display font-bold text-white/10">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-secondary/50" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipProcess;
