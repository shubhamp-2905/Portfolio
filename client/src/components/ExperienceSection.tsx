import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ExperienceSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const experiences = [
    {
      title: "Full-Stack Web Developer Intern",
      company: "Sumago Infotech Pvt. Ltd",
      period: "2023",
      icon: "fas fa-code",
      responsibilities: [
        "Developed responsive web applications using React.js and Node.js",
        "Collaborated with design teams to implement user interfaces",
        "Optimized application performance and user experience",
        "Participated in code reviews and agile development processes"
      ],
      technologies: ["React.js", "Node.js", "JavaScript", "MongoDB", "Express.js", "CSS3"]
    },
    {
      title: "Data Science Intern",
      company: "Ediglobe",
      period: "2023",
      icon: "fas fa-chart-bar",
      responsibilities: [
        "Analyzed large datasets to extract meaningful insights",
        "Developed machine learning models for predictive analytics",
        "Created data visualizations and reports for stakeholders",
        "Collaborated with cross-functional teams on data-driven solutions"
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "SQL"]
    },
    {
      title: "Computer Science Engineering (Data Science)",
      company: "VIIT Pune",
      period: "2023 - 2027",
      icon: "fas fa-graduation-cap",
      responsibilities: [
        "Advanced Data Structures and Algorithms",
        "Machine Learning and Artificial Intelligence",
        "Database Management Systems",
        "Software Engineering Principles"
      ],
      technologies: ["Dean's List Scholar", "Technical Clubs", "Project Innovation Awards", "Research Papers"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            variants={itemVariants}
          >
            Professional Experience
          </motion.h2>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-effect p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent border-[var(--platinum)]/10">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-[var(--warm-gold)] mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-xl text-[var(--platinum)] mb-2">{experience.company}</p>
                      <p className="text-gray-400">{experience.period}</p>
                    </div>
                    <div className="text-5xl text-[var(--warm-gold)] lg:ml-8 mt-4 lg:mt-0">
                      <i className={experience.icon}></i>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-[var(--platinum)]">
                        {index === 2 ? "Key Focus Areas" : "Key Responsibilities"}
                      </h4>
                      <ul className="space-y-2 text-gray-300">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-center">
                            <i className="fas fa-check text-[var(--warm-gold)] mr-2"></i>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-[var(--platinum)]">
                        {index === 2 ? "Academic Achievements" : "Technologies Used"}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-[var(--graphite)] text-[var(--platinum)] hover:bg-[var(--slate-custom)]"
                          >
                            {index === 2 && techIndex < 4 ? (
                              <><i className="fas fa-award text-[var(--warm-gold)] mr-1"></i>{tech}</>
                            ) : (
                              tech
                            )}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
