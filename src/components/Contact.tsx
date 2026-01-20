import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Linkedin,
  Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="section-heading">
            Let's Start a <span className="text-secondary">Conversation</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Ready to enhance your students' career prospects? Contact us to explore 
            partnership opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-background rounded-xl p-6 shadow-soft border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Office Address</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    TBI cubicle-6, TBI centre, CV Raman Engineering Block, 
                    Padmavathi Mahila University, SVU employee's colony, 
                    Tirupati-517502, Andhra Pradesh
                  </p>
                </div>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-soft border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Phone Numbers</h4>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+919492270525" className="hover:text-secondary transition-colors">
                      +91 9492270525
                    </a>
                    <br />
                    <a href="tel:+917673925472" className="hover:text-secondary transition-colors">
                      +91 7673925472
                    </a>
                  </p>
                </div>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-soft border border-border flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email Address</h4>
                  <a 
                    href="mailto:info@skillariondevelopment.in" 
                    className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                  >
                    info@skillariondevelopment.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-semibold text-primary mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/skillarion-development/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-navy-light transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/skillarion_development_25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-soft border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-muted/50 border-border focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-muted/50 border-border focus:border-secondary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-muted/50 border-border focus:border-secondary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Institution/Organization
                  </label>
                  <Input
                    type="text"
                    placeholder="Your institution"
                    className="bg-muted/50 border-border focus:border-secondary"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-primary mb-2">
                  Message *
                </label>
                <Textarea
                  placeholder="How can we help you?"
                  rows={5}
                  required
                  className="bg-muted/50 border-border focus:border-secondary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-secondary text-secondary-foreground hover:bg-gold-dark shadow-gold"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
