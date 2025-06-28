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
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" variants={itemVariants}>
              <Card className="glass-effect p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent border-[var(--platinum)]/10">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--warm-gold)]">Current Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm currently pursuing Computer Science Engineering with a specialization in Data Science at VIIT Pune, 
                  graduating in 2027. My passion lies in creating innovative solutions that merge cutting-edge technology 
                  with real-world business challenges.
                </p>
              </Card>
              
              <Card className="glass-effect p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent border-[var(--platinum)]/10">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--warm-gold)]">Professional Experience</h3>
                <p className="text-gray-300 leading-relaxed">
                  Former Full-Stack Web Developer Intern at Sumago Infotech Pvt. Ltd and Data Science Intern at Ediglobe. 
                  I bring hands-on industry experience to complement my academic foundation.
                </p>
              </Card>
              
              <Card className="glass-effect p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent border-[var(--platinum)]/10">
                <h3 className="text-2xl font-semibold mb-4 text-[var(--warm-gold)]">Philosophy</h3>
                <p className="text-gray-300 leading-relaxed">
                  I believe in continuous learning, elegant code architecture, and creating digital experiences 
                  that not only function beautifully but also solve meaningful problems.
                </p>
              </Card>
            </motion.div>
            
            <motion.div className="space-y-8" variants={itemVariants}>
              <Card className="glass-effect p-8 rounded-2xl bg-transparent border-[var(--platinum)]/10">
                <h3 className="text-2xl font-semibold mb-6 text-[var(--warm-gold)]">Professional Timeline</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-4 h-4 bg-[var(--warm-gold)] rounded-full mt-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div>
                      <h4 className="font-semibold text-[var(--platinum)]">Data Science Intern</h4>
                      <p className="text-gray-400">Ediglobe</p>
                      <p className="text-sm text-gray-500">2023</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-4 h-4 bg-[var(--warm-gold)] rounded-full mt-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <div>
                      <h4 className="font-semibold text-[var(--platinum)]">Full-Stack Developer Intern</h4>
                      <p className="text-gray-400">Sumago Infotech Pvt. Ltd</p>
                      <p className="text-sm text-gray-500">2023</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="w-4 h-4 bg-[var(--deep-blue)] rounded-full mt-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    />
                    <div>
                      <h4 className="font-semibold text-[var(--platinum)]">CSE Student</h4>
                      <p className="text-gray-400">VIIT Pune</p>
                      <p className="text-sm text-gray-500">2023 - 2027</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="glass-effect p-6 rounded-xl text-center bg-transparent border-[var(--platinum)]/10">
                  <div className="text-3xl font-bold text-[var(--warm-gold)] mb-2">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </Card>
                <Card className="glass-effect p-6 rounded-xl text-center bg-transparent border-[var(--platinum)]/10">
                  <div className="text-3xl font-bold text-[var(--warm-gold)] mb-2">15+</div>
                  <div className="text-gray-400">Projects Built</div>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
