import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="about" className="py-20 relative">
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
            About Me
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8" variants={itemVariants}>
              <Card className="cyber-card p-10 rounded-3xl magnetic-element bg-transparent">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                    <i className="fas fa-graduation-cap text-white text-lg"></i>
                  </div>
                  <h3 className="text-2xl font-bold holographic-text">Current Journey</h3>
                </div>
                <p className="text-blue-100/90 leading-relaxed text-lg">
                  I'm currently pursuing Computer Science Engineering with a specialization in Data Science at VIIT Pune, 
                  graduating in 2027. My passion lies in creating innovative solutions that merge cutting-edge technology 
                  with real-world business challenges.
                </p>
              </Card>
              
              <Card className="cyber-card p-10 rounded-3xl magnetic-element bg-transparent">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4">
                    <i className="fas fa-briefcase text-white text-lg"></i>
                  </div>
                  <h3 className="text-2xl font-bold holographic-text">Professional Experience</h3>
                </div>
                <p className="text-blue-100/90 leading-relaxed text-lg">
                  Former Full-Stack Web Developer Intern at Sumago Infotech Pvt. Ltd and Data Science Intern at Ediglobe. 
                  I bring hands-on industry experience to complement my academic foundation.
                </p>
              </Card>
              
              <Card className="cyber-card p-10 rounded-3xl magnetic-element bg-transparent">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mr-4">
                    <i className="fas fa-lightbulb text-white text-lg"></i>
                  </div>
                  <h3 className="text-2xl font-bold holographic-text">Philosophy</h3>
                </div>
                <p className="text-blue-100/90 leading-relaxed text-lg">
                  I believe in continuous learning, elegant code architecture, and creating digital experiences 
                  that not only function beautifully but also solve meaningful problems.
                </p>
              </Card>
            </motion.div>
            
            <motion.div className="space-y-8" variants={itemVariants}>
              <Card className="cyber-card p-10 rounded-3xl bg-transparent">
                <h3 className="text-3xl font-bold mb-8 holographic-text">Professional Timeline</h3>
                <div className="space-y-8 relative">
                  {/* Timeline Line */}
                  <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>
                  
                  <div className="flex items-start space-x-6 relative">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center z-10 shadow-xl shadow-blue-500/30"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <i className="fas fa-chart-line text-white"></i>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-xl text-white">Full-Stack Developer Intern</h4>
                      <p className="text-blue-300 font-semibold">Sumago Infotech Pvt. Ltd</p>
                      <p className="text-sm text-blue-200/70">2024</p>
                      
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 relative">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center z-10 shadow-xl shadow-cyan-500/30"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    >
                      <i className="fas fa-code text-white"></i>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-xl text-white">Data Science Intern</h4>
                      <p className="text-blue-300 font-semibold">Ediglobe</p>
                      <p className="text-sm text-blue-200/70">2024</p>
                      
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6 relative">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center z-10 shadow-xl shadow-purple-500/30"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    >
                      <i className="fas fa-graduation-cap text-white"></i>
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-xl text-white">CSE Student</h4>
                      <p className="text-blue-300 font-semibold">VIIT Pune</p>
                      <p className="text-sm text-blue-200/70">2024 - 2027</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="cyber-card p-8 rounded-2xl text-center bg-transparent magnetic-element">
                  <div className="text-4xl font-bold ultra-gradient mb-3">2x</div>
                  <div className="text-blue-200">Internships</div>
                </Card>
                <Card className="cyber-card p-8 rounded-2xl text-center bg-transparent magnetic-element">
                  <div className="text-4xl font-bold ultra-gradient mb-3">15+</div>
                  <div className="text-blue-200">Projects Built</div>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
