import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Code, Briefcase, Award } from "lucide-react";

const curriculumPhases = [
  {
    icon: BookOpen,
    phase: "Phase 1",
    title: "Foundation & Theory",
    duration: "Weeks 1-4",
    topics: [
      "Core concepts and fundamentals",
      "Industry overview and trends",
      "Tools and environment setup",
      "Basic project implementation",
    ],
  },
  {
    icon: Code,
    phase: "Phase 2",
    title: "Hands-On Development",
    duration: "Weeks 5-10",
    topics: [
      "Advanced technical skills",
      "Real-world project work",
      "Code reviews and best practices",
      "Collaborative development",
    ],
  },
  {
    icon: Briefcase,
    phase: "Phase 3",
    title: "Industry Exposure",
    duration: "Weeks 11-16",
    topics: [
      "Live industry projects",
      "Client interaction experience",
      "Professional communication",
      "Agile methodologies",
    ],
  },
  {
    icon: Award,
    phase: "Phase 4",
    title: "Career Preparation",
    duration: "Weeks 17-24",
    topics: [
      "Resume building and optimization",
      "Interview preparation",
      "Mock interviews with experts",
      "Placement drives and support",
    ],
  },
];

const Curriculum = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-primary" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            Learning Path
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Structured <span className="text-secondary">Curriculum</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A comprehensive learning journey designed to take you from beginner to job-ready professional.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {curriculumPhases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <phase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-secondary text-sm font-medium">{phase.phase}</span>
                    <h3 className="text-white font-semibold text-lg">{phase.title}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  
                  {expandedIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-secondary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-white/50" />
                  )}
                </div>
              </button>
              
              {expandedIndex === index && (
                <div className="px-6 pb-6">
                  <ul className="space-y-2 ml-16">
                    {phase.topics.map((topic, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
