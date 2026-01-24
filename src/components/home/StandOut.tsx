import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Atom, Handshake, Briefcase, Globe } from "lucide-react";

const StandOut = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: Atom, label: "Quantum-First Learning" },
    { icon: Handshake, label: "MoUs with Colleges & Industry" },
    { icon: Briefcase, label: "Workshops + Internships" },
    { icon: Globe, label: "Global Projects" },
  ];

  return (
    <section className="py-16 md:py-20 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/10 via-background to-background shadow-soft hover:shadow-gold transition-all duration-300 group"
        >
          {/* Glow blobs */}
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl opacity-60 group-hover:opacity-80 transition-opacity" />

          <div className="relative p-8 md:p-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-5">
              <Sparkles className="h-4 w-4" />
              What Makes Us Different
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              We Stand Out
            </h2>

            <p className="text-primary/80 text-base md:text-lg leading-relaxed">
              We stand out by establishing formal MoUs with educational institutions and
              industry leaders, creating a seamless ecosystem from learning to employment.
              Our journey begins with{" "}
              <span className="text-primary font-semibold">
                Quantum Technology-focused learning
              </span>{" "}
              — making us the first EdTech company to prioritize Quantum education — followed by
              entrepreneur interactions, scholarship tests, industry expert guest lectures and
              workshops, and global internship/project collaborations.
            </p>

            {/* Highlight chips */}
            <div className="mt-7 flex flex-wrap gap-3">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-primary shadow-soft hover:border-secondary/40 hover:shadow-medium transition-all"
                >
                  <item.icon className="h-4 w-4 text-secondary" />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StandOut;
