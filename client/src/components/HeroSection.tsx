import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // TODO: Implement resume download functionality
    console.log('Resume download triggered');
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block gradient-text">Shubham</span>
            <span className="block text-[var(--platinum)]">Paikrao</span>
          </motion.h1>
          
          <motion.div
            className="text-xl md:text-2xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="block">Full-Stack Developer</span>
            <span className="block text-[var(--warm-gold)]">& Data Scientist</span>
          </motion.div>
          
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Computer Science Engineering Student at VIIT Pune specializing in Data Science. 
            Bridging the gap between technical innovation and business solutions.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="magnetic-element px-8 py-4 bg-[var(--warm-gold)] text-[var(--rich-black)] font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              Explore My Work
            </Button>
            <Button
              onClick={downloadResume}
              variant="outline"
              className="magnetic-element px-8 py-4 glass-effect font-semibold rounded-lg hover:bg-[var(--graphite)] transition-all duration-300 transform hover:scale-105 border-[var(--platinum)]/20"
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[var(--warm-gold)] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[var(--warm-gold)] rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
