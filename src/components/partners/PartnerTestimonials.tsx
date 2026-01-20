import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    quote: "SkillArion has been instrumental in providing us with well-trained interns who contribute from day one. Their industry-aligned curriculum ensures students are job-ready.",
    company: "Tech Solutions Partner",
    role: "HR Director",
  },
  {
    quote: "The MoU with SkillArion has significantly improved our placement statistics and NAAC rankings. Their professional approach makes collaboration seamless.",
    company: "Engineering College Partner",
    role: "Principal",
  },
  {
    quote: "We've hired multiple candidates through SkillArion's placement drives. The quality of talent and their technical skills are consistently impressive.",
    company: "Manufacturing Industry Partner",
    role: "Talent Acquisition Lead",
  },
];

const PartnerTestimonials = () => {
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
            Partner Feedback
          </span>
          <h2 className="section-heading">
            What Our <span className="text-secondary">Partners Say</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Hear from institutions and companies who have partnered with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-background rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-secondary/10" />
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.company}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerTestimonials;
