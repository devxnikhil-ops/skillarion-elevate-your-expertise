import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Handshake, Globe } from "lucide-react";

const partnerCategories = [
  {
    icon: Building2,
    title: "Technology Companies",
    description: "Leading tech firms providing industrial training and placement opportunities.",
  },
  {
    icon: Handshake,
    title: "Educational Institutions",
    description: "Partner colleges and universities for curriculum collaboration.",
  },
  {
    icon: Globe,
    title: "Global Industries",
    description: "International companies offering exposure to global work culture.",
  },
];

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="py-20 md:py-28" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Our Network
          </span>
          <h2 className="section-heading">
            <span className="text-secondary">120+</span> Industry Partners
          </h2>
          <p className="section-subheading mx-auto mt-4">
            We collaborate with leading companies across various industries to provide 
            students with real-world exposure and career opportunities.
          </p>
        </motion.div>
        

        {/* Partner Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {partnerCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="stat-card group text-center p-8 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/10 border border-border hover:shadow-medium transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <category.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-3">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary/5 rounded-2xl p-8 md:p-12 border border-primary/10"
        >
          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold text-primary mb-4">
              Trusted by Leading Companies
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our students have been placed in top companies across India. Partner logos 
              will be displayed here showcasing our industry collaborations.
            </p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <div
                  key={index}
                  className="h-16 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-sm"
                >
                  Partner {index + 1}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
