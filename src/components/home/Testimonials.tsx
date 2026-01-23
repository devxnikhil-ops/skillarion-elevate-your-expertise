import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Yugandhar Bandi",
    role: "Software Developer",
    company: "Quadrant Technologies",
    image: null,
    quote: "SkillArion's internship program transformed my career. The hands-on experience and mentorship helped me land my dream job within weeks of completing the program.",
    rating: 5,
  },
  {
    name: "Venu Alluri",
    role: "Data Analyst",
    company: "Analytics Corp",
    image: null,
    quote: "The industry-aligned curriculum and real projects gave me the confidence to excel in interviews. The stipend support during internship was a huge bonus!",
    rating: 5,
  },
  {
    name: "Sudhakar",
    role: "Civil Student",
    company: "SV University",
    image: null,
    quote: "From a Civil Engineering student to working on BIM (Building Information Modeling) projects in a top company SkillArion made it possible. Their training and placement support are truly unmatched.",
    rating: 5,
  },
  {
    name: "Nithya Sree C V",
    role: "EEE Student",
    company: "Annamacharya Institute of Technology and Sciences",
    image: null,
    quote: "Being an EEE student, I always wanted to build a career in modern power technologies. SkillArion helped me gain strong hands-on skills in EV systems and smart grids, and their placement support gave me the confidence to land a great opportunity.",
    rating: 5,
  },
  {
    name: "Gana Yadav",
    role: "ECE Student",
    company: "Dr.SGIT",
    image: null,
    quote: "Being an EEE student, I always wanted to build a career in modern power technologies. SkillArion helped me gain strong hands-on skills in EV systems and smart grids, and their placement support gave me the confidence to land a great opportunity.",
    rating: 5,
  },
  {
    name: "Devendra E",
    role: "Mechanical Student",
    company: "KSRM Institute of Technology",
    image: null,
    quote: "Coming from Mechanical Engineering, I wanted a career that blends core concepts with future tech. SkillArion trained me in Robotics and Industrial Automation with practical projects, and their mentorship plus placement support helped me secure a great job opportunity.",
    rating: 5,
  },
];

const Testimonials = () => {
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
            Success Stories
          </span>
          <h2 className="section-heading">
            What Our <span className="text-secondary">Students Say</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Real stories from real students who transformed their careers with SkillArion.
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
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
