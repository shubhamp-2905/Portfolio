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
      {/* Ultra-modern cyber grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight whitespace-nowrap"
            initial={{ opacity: 0, y: 100, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <span className="ultra-gradient">Shubham </span>
            <span className="holographic-text">Paikrao</span>
          </motion.h1>
          
          <motion.div
            className="text-lg sm:text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="block text-blue-300 mb-1">Full-Stack Developer</span>
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text font-semibold">& Data Scientist</span>
          </motion.div>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl text-blue-100/80 max-w-3xl mx-auto mb-10 leading-relaxed px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Computer Science Engineering Student at VIIT Pune specializing in Data Science. 
            Crafting the future through innovative technology and cutting-edge solutions.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Button
              onClick={() => scrollToSection('projects')}
              className="magnetic-element px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white font-bold rounded-xl border-0 shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 text-base neon-border"
            >
              <i className="fas fa-rocket mr-2"></i>
              Explore My Universe
            </Button>
            <Button
              onClick={() => window.open('https://drive.google.com/file/d/1iPWKEzptAaPkW2bWVrox54fpkrOp2rNj/view?usp=sharing', '_blank')}
              variant="outline"
              className="magnetic-element px-8 py-3 glass-effect font-bold rounded-xl hover:bg-white/10 transition-all duration-500 text-base border-blue-400/30 text-blue-100 hover:text-white hover:border-blue-300/50"
            >
              <i className="fas fa-eye mr-2"></i>
              View Resume
            </Button>
          </motion.div>

          {/* Floating tech elements */}
          <motion.div
            className="absolute top-20 left-20 text-4xl md:text-5xl text-blue-500/20 hidden md:block"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity }}
          >
            <i className="fas fa-code"></i>
          </motion.div>
          <motion.div
            className="absolute top-32 right-32 text-3xl md:text-4xl text-purple-500/20 hidden md:block"
            animate={{ rotate: -360, y: [0, -20, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          >
            <i className="fas fa-microchip"></i>
          </motion.div>
          <motion.div
            className="absolute bottom-40 left-32 text-3xl md:text-4xl text-cyan-500/20 hidden md:block"
            animate={{ rotate: 180, scale: [1, 1.3, 1] }}
            transition={{ duration: 25, repeat: Infinity }}
          >
            <i className="fas fa-cube"></i>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Ultra-modern scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-12 border-2 border-blue-400 rounded-full flex justify-center cyber-glow">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <p className="text-blue-300 text-xs mt-2 font-medium">Scroll to explore</p>
      </motion.div>
    </section>
  );
}