import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function SkillsSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const skills = [
    {
      category: "Frontend Development",
      icon: "fab fa-react",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      category: "Backend Development",
      icon: "fas fa-server",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Python", level: 85 },
        { name: "MongoDB/SQL", level: 75 }
      ]
    },
    {
      category: "Data Science",
      icon: "fas fa-chart-line",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Data Analytics", level: 85 },
        { name: "Pandas/NumPy", level: 90 }
      ]
    },
    {
      category: "Tools & Technologies",
      icon: "fas fa-tools",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS/Cloud", level: 65 }
      ]
    },
    {
      category: "Design & UX",
      icon: "fas fa-palette",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Responsive Design", level: 95 }
      ]
    },
    {
      category: "Soft Skills",
      icon: "fas fa-users",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Leadership", level: 85 },
        { name: "Communication", level: 90 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
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
            Technical Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-effect p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 magnetic-element bg-transparent border-[var(--platinum)]/10 h-full">
                  <div className="text-4xl text-[var(--warm-gold)] mb-4">
                    <i className={skillCategory.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-6 text-[var(--platinum)]">
                    {skillCategory.category}
                  </h3>
                  <div className="space-y-4">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <Progress
                          value={isVisible ? skill.level : 0}
                          className="skill-meter h-2 bg-[var(--graphite)]"
                        />
                      </div>
                    ))}
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
