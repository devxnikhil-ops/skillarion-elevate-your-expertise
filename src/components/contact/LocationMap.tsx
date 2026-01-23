import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationMap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Find Us
          </span>
          <h2 className="section-heading">
            Our <span className="text-secondary">Location</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Visit us at our office in Tirupati, Andhra Pradesh.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-medium border border-border"
        >
          <div className="aspect-video bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.0!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQzLjciTiA3OcKwMjUnMDkuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-muted/80">
              <div className="text-center p-8">
                <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  SkillArion Development Pvt. Ltd.
                </h3>
                <p className="text-muted-foreground text-sm mb-4 max-w-md">
                  TBI cubicle-6, TBI centre, CV Raman Engineering Block,
                  Near Padmavathi Mahila University, SVU employee's colony,
                  Tirupati-517502, Andhra Pradesh
                </p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-primary"
                  onClick={() => window.open("https://maps.google.com/?q=Padmavathi+Mahila+University+Tirupati", "_blank")}
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
