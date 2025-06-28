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
            className="text-5xl md:text-6xl font-bold text-center mb-20 ultra-gradient"
            variants={itemVariants}
          >
            Technical Arsenal
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="cyber-card p-10 rounded-3xl magnetic-element bg-transparent h-full group">
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center mr-4 shadow-xl group-hover:shadow-blue-500/30 transition-all duration-500">
                      <i className={`${skillCategory.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold holographic-text">
                      {skillCategory.category}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between mb-3">
                          <span className="text-blue-100 font-medium">{skill.name}</span>
                          <span className="text-blue-300 font-bold">{skill.level}%</span>
                        </div>
                        <div className="relative">
                          <div className="skill-meter h-3 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                              transition={{ duration: 1.5, delay: index * 0.1 + skillIndex * 0.2 }}
                            />
                          </div>
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-3 rounded-full"
                            initial={{ x: "-100%" }}
                            animate={{ x: isVisible ? "200%" : "-100%" }}
                            transition={{ duration: 2, delay: index * 0.1 + skillIndex * 0.2 + 1 }}
                          />
                        </div>
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
