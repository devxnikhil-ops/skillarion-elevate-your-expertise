import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cpu, 
  Factory, 
  Building2, 
  Stethoscope,
  ShoppingCart,
  Banknote,
  Plane,
  Zap
} from "lucide-react";

const domains = [
  { icon: Cpu, name: "Information Technology", count: "40+" },
  { icon: Factory, name: "Manufacturing", count: "25+" },
  { icon: Building2, name: "Construction & Infra", count: "15+" },
  { icon: Stethoscope, name: "Healthcare", count: "10+" },
  { icon: ShoppingCart, name: "E-Commerce & Retail", count: "12+" },
  { icon: Banknote, name: "Banking & Finance", count: "8+" },
  { icon: Plane, name: "Aerospace & Defense", count: "5+" },
  { icon: Zap, name: "Energy & Utilities", count: "5+" },
];

const IndustryDomains = () => {
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
            Industry Coverage
          </span>
          <h2 className="section-heading">
            Domains We <span className="text-secondary">Cover</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Our partners span across diverse industries, providing students with varied career opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="bg-muted/30 rounded-xl p-6 border border-border hover:border-secondary/30 hover:shadow-medium transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors">
                <domain.icon className="h-7 w-7 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1">{domain.name}</h3>
              <p className="text-secondary font-bold text-lg">{domain.count}</p>
              <p className="text-muted-foreground text-xs">Partners</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryDomains;
