import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the duration of the internship programs?",
    answer: "Our internship programs range from 16 to 24 weeks, depending on the specialization. This includes hands-on training, live projects, and placement preparation.",
  },
  {
    question: "How much stipend will I receive during the internship?",
    answer: "Students receive a monthly stipend ranging from ₹16,000 to ₹22,500 depending on the program and performance. Accommodation support is also provided for outstation students.",
  },
  {
    question: "Are the certifications recognized by AICTE?",
    answer: "Yes, all our programs are AICTE-compliant and the certifications are recognized by educational institutions and industry partners across India.",
  },
  {
    question: "What is the placement rate after completing the program?",
    answer: "We maintain a 75%+ placement rate across all our programs. Our dedicated placement team works with 120+ industry partners to ensure maximum placement opportunities.",
  },
  {
    question: "Can I join while still in college?",
    answer: "Absolutely! Our programs are designed for final year and pre-final year students. We coordinate with your institution to ensure the internship aligns with your academic schedule.",
  },
  {
    question: "Is there any fee for the training programs?",
    answer: "Program fees vary based on the course. However, the stipend you receive during internship often covers or exceeds the program cost. Contact us for detailed fee structure.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

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
            Got Questions?
          </span>
          <h2 className="section-heading">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Find answers to common questions about our programs and services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="bg-muted/30 rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="font-medium text-primary">{faq.question}</span>
                </div>
                {expandedIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-secondary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {expandedIndex === index && (
                <div className="px-6 pb-6 ml-9">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
