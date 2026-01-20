import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Calendar, Phone, MessageCircle } from "lucide-react";

const schedules = [
  {
    icon: Clock,
    title: "Office Hours",
    details: [
      { label: "Monday - Friday", value: "9:00 AM - 6:00 PM" },
      { label: "Saturday", value: "10:00 AM - 4:00 PM" },
      { label: "Sunday", value: "Closed" },
    ],
  },
  {
    icon: Phone,
    title: "Phone Support",
    details: [
      { label: "General Inquiries", value: "+91 9492270525" },
      { label: "Admissions", value: "+91 7673925472" },
      { label: "Response Time", value: "Within 2 hours" },
    ],
  },
  {
    icon: MessageCircle,
    title: "Online Support",
    details: [
      { label: "Email Response", value: "Within 24 hours" },
      { label: "WhatsApp", value: "Available" },
      { label: "Social Media", value: "Active daily" },
    ],
  },
];

const OfficeHours = () => {
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
            Availability
          </span>
          <h2 className="section-heading">
            When to <span className="text-secondary">Reach Us</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            We're here to help during these hours. Choose the best way to connect with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {schedules.map((schedule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-background rounded-2xl p-8 shadow-soft border border-border hover:shadow-medium transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <schedule.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-6">
                {schedule.title}
              </h3>
              <div className="space-y-4">
                {schedule.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">{detail.label}</span>
                    <span className="font-medium text-primary text-sm">{detail.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeHours;
