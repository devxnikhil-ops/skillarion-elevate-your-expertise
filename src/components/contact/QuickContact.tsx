import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 9492270525",
    link: "tel:+919492270525",
    color: "bg-emerald-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@skillariondevelopment.in",
    link: "mailto:info@skillariondevelopment.in",
    color: "bg-blue-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 9492270525",
    link: "https://wa.me/919492270525",
    color: "bg-green-500",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "SkillArion Development",
    link: "https://www.linkedin.com/company/skillarion-development/",
    color: "bg-blue-600",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@skillarion_development",
    link: "https://www.instagram.com/skillarion_development",
    color: "bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400",
  },
];

const QuickContact = () => {
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
            Quick Connect
          </span>
          <h2 className="section-heading">
            Multiple Ways to <span className="text-secondary">Reach Us</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Choose your preferred method of communication. We're always ready to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith("http") ? "_blank" : undefined}
              rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-muted/30 rounded-xl p-5 border border-border hover:border-secondary/30 hover:shadow-medium transition-all duration-300 text-center group"
            >
              <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <method.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-primary text-sm mb-1">{method.title}</h3>
              <p className="text-muted-foreground text-xs truncate group-hover:text-secondary transition-colors">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickContact;
