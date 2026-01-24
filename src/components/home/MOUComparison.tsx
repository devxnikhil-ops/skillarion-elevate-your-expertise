import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, X, Sparkles, ShieldCheck } from "lucide-react";

const MOUComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const withMou = [
    "Scholarship test for students every year",
    "Parenting (mentoring)",
    "MoU colleges get early updates on upcoming placement drives and hiring priority",
    "Advanced certification programs",
  ];

  const withoutMou = [
    "No scholarship test access",
    "Standard certification",
    "No parenting (mentoring)",
    "Less drive priority updates",
  ];

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            MoU vs Without MoU
          </span>

          <h2 className="section-heading">
            Partnership <span className="text-secondary">Benefits</span> Comparison
          </h2>

          <p className="section-subheading mx-auto mt-4">
            MoU partner colleges receive structured support and priority updates for placements,
            while non-partners receive standard offerings.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* With MoU */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
            className="relative rounded-2xl border border-secondary/30 bg-gradient-to-br from-secondary/10 to-transparent p-8 shadow-soft hover:shadow-medium transition-all"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-6">
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs font-semibold shadow-soft">
                <ShieldCheck className="h-4 w-4" />
                Recommended
              </div>
            </div>

            <div className="flex items-center gap-3 mb-6 mt-2">
              <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary">With MoU</h3>
                <p className="text-xs text-muted-foreground">
                  Full access + priority placement updates
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {withMou.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground bg-background/70 border border-border/60 rounded-xl px-4 py-3"
                >
                  <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Without MoU */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl border border-border bg-muted/30 p-8 shadow-soft hover:shadow-medium transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-primary">Without MoU</h3>
                <p className="text-xs text-muted-foreground">Standard access only</p>
              </div>
            </div>

            <ul className="space-y-3">
              {withoutMou.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground bg-background/60 border border-border/60 rounded-xl px-4 py-3"
                >
                  <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MOUComparison;
