import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BadgeCheck, MapPin, Clock, ArrowRight, BookOpen, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: "aiml",
    title: "AI & ML",
    duration: "4 Months",
    oldPrice: "₹44,999",
    newPrice: "₹34,999",
    discount: "₹10,000 Discount",
    description:
      "Build production-ready AI solutions with Python, neural networks, and real-world case studies.",
    highlights: ["15+ Live Projects", "100% Placement Support", "Industry Capstone"],
    color: "from-blue-500/15 to-indigo-500/10",
    borderColor: "border-blue-500/30",
    accentColor: "bg-blue-500",
    icon: <Star className="w-5 h-5 text-blue-500" />,
  },
  {
    id: "python",
    title: "Python Full Stack",
    duration: "4 Months",
    oldPrice: "₹39,999",
    newPrice: "₹29,999",
    discount: "₹10,000 Discount",
    description:
      "Master backend APIs, responsive UI, and deployment with Django, React, and PostgreSQL.",
    highlights: ["Full Stack Toolkit", "Mock Interviews", "Client Workflows"],
    color: "from-emerald-500/15 to-teal-500/10",
    borderColor: "border-emerald-500/30",
    accentColor: "bg-emerald-500",
    icon: <Trophy className="w-5 h-5 text-emerald-500" />,
  },
  {
    id: "java",
    title: "Java Full Stack",
    duration: "4 Months",
    oldPrice: "₹39,999",
    newPrice: "₹29,999",
    discount: "₹10,000 Discount",
    description:
      "Become job-ready with Spring Boot, microservices, and scalable cloud-ready apps.",
    highlights: ["Enterprise Patterns", "System Design", "Cloud Deployment"],
    color: "from-amber-500/15 to-orange-500/10",
    borderColor: "border-amber-500/30",
    accentColor: "bg-amber-500",
    icon: <BookOpen className="w-5 h-5 text-amber-500" />,
  },
  {
    id: "genai",
    title: "Generative AI",
    duration: "2 Months",
    oldPrice: "₹29,999",
    newPrice: "₹24,999",
    discount: "₹5,000 Discount",
    description:
      "Ship LLM apps with prompt engineering, vector search, and GenAI deployment stacks.",
    highlights: ["LLM Integration", "RAG Pipelines", "Prompt Engineering"],
    color: "from-purple-500/15 to-pink-500/10",
    borderColor: "border-purple-500/30",
    accentColor: "bg-purple-500",
    icon: <Star className="w-5 h-5 text-purple-500" />,
  },
];

const locationImages = [
  {
    src: "/courses/WhatsApp Image 2026-02-20 at 14.37.41.jpeg",
    alt: "Kodryx AI Hyderabad hallway",
  },
  {
    src: "/courses/WhatsApp Image 2026-02-20 at 14.37.46.jpeg",
    alt: "Kodryx AI Hyderabad workspace",
  },
  {
    src: "/courses/WhatsApp Image 2026-02-20 at 14.37.50.jpeg",
    alt: "Kodryx AI Hyderabad conference table",
  },
  {
    src: "/courses/WhatsApp Image 2026-02-20 at 14.37.56.jpeg",
    alt: "Kodryx AI Hyderabad meeting room",
  },
  {
    src: "/courses/WhatsApp Image 2026-02-20 at 14.38.03.jpeg",
    alt: "Kodryx AI Hyderabad training space",
  },
];

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-20 md:py-28 bg-background overflow-hidden" ref={ref}>
      <div className="container mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-1 h-8 bg-secondary rounded-full"></div>
          <h2 className="text-2xl font-bold text-primary">Courses</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
              <BadgeCheck className="h-4 w-4" />
              AICTE Approved
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Corporate Training
            </span>
          </div>
          <h2 className="section-heading">
            Courses in Collaboration with <span className="text-secondary">Kodryx AI</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            Industry-ready programs designed for freshers and working professionals with
            hands-on projects, real-world case studies, and placement-focused mentorship.
          </p>
        </motion.div>
      </div>

      {/* Stylish 16:9 Rolling Carousel */}
      <div className="relative w-full py-8 mb-20 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 w-max hover:[animation-play-state:paused]"
        >
          <div className="flex gap-6">
            {courses.map((course, idx) => (
              <CourseCard key={`${course.id}-1a-${idx}`} course={course} />
            ))}
          </div>
          <div className="flex gap-6">
            {courses.map((course, idx) => (
              <CourseCard key={`${course.id}-1b-${idx}`} course={course} />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container">
        {/* Kodryx AI Corporate Training Location - Blurred Background Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-[2rem] overflow-hidden bg-primary/95 shadow-2xl"
        >
          {/* Blurred Background Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/courses/WhatsApp Image 2026-02-20 at 14.37.50.jpeg" 
              alt="Kodryx AI Background" 
              className="w-full h-full object-cover opacity-40 blur-md scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Content Column */}
            <div className="text-white lg:col-span-5 flex flex-col justify-center h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 w-fit border border-white/20">
                <MapPin className="h-4 w-4 text-secondary" />
                Corporate Training Center
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg border border-white/20">
                  <img src="/logo.png" alt="SkillArion" className="w-full h-full object-contain" />
                </div>
                <div className="text-white/40 text-2xl font-light">X</div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-amber-300">
                  Kodryx AI
                </h3>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Corporate Training Collaboration
              </h3>
              
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Kodryx AI has collaborated for the corporate training. Experience immersive in-person sessions hosted at our state-of-the-art Hyderabad facility. Collaborate in modern workspaces guided by expert mentors.
              </p>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                    <BadgeCheck className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="font-medium text-lg">AICTE Approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/ZCMbxffcpWTbuPgf9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-secondary transition-colors"
                  >
                    Hyderabad, Telangana
                  </a>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-white hover:text-primary transition-all duration-300 w-fit rounded-full px-8 shadow-xl hover:shadow-secondary/50"
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Visit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            {/* Images Grid Column */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-full mt-8 lg:mt-0">
              {locationImages.map((image, index) => (
                <div
                  key={image.src}
                  className={`group relative overflow-hidden rounded-2xl border border-white/20 shadow-xl transition-all duration-500 hover:border-secondary/50 hover:shadow-secondary/20
                    ${index === 0 ? "col-span-2 row-span-2 aspect-video" : "aspect-square"}
                  `}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Course Card Component for Carousel
const CourseCard = ({ course }: { course: any }) => (
  <div className={`
    flex-shrink-0 w-[85vw] sm:w-[450px] lg:w-[500px] aspect-video 
    bg-gradient-to-br ${course.color} rounded-3xl p-6 md:p-8 
    border ${course.borderColor} shadow-soft hover:shadow-medium 
    transition-all duration-300 flex flex-col justify-between relative overflow-hidden group
  `}>
    {/* Decorative background element */}
    <div className={`absolute -right-12 -top-12 w-40 h-40 ${course.accentColor} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`} />
    
    <div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center shadow-sm">
            {course.icon}
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-primary">
            {course.title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
          <Clock className="w-3 h-3" />
          {course.duration}
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm line-clamp-2 mb-4 relative z-10">
        {course.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {course.highlights.slice(0, 2).map((highlight: string) => (
          <span key={highlight} className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 bg-background rounded-md text-primary shadow-sm border border-border/50">
            {highlight}
          </span>
        ))}
      </div>
    </div>

    <div className="flex items-end justify-between relative z-10 mt-auto pt-4 border-t border-border/50">
      <div>
        <p className="text-xs text-muted-foreground mb-1 line-through">{course.oldPrice}</p>
        <div className="flex items-center gap-3">
          <p className="text-2xl md:text-3xl font-bold text-primary">{course.newPrice}</p>
          <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">
            SAVE {course.discount.split(' ')[0]}
          </span>
        </div>
      </div>
      <Button 
        variant="default" 
        className="bg-primary hover:bg-secondary text-primary-foreground hover:text-secondary-foreground rounded-full shadow-md transition-all duration-300"
        onClick={() => window.location.href = '/contact'}
      >
        Enroll <ArrowRight className="w-4 h-4 ml-1.5" />
      </Button>
    </div>
  </div>
);

export default Courses;
