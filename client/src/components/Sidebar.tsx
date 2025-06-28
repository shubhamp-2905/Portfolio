import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user-astronaut' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code-branch' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-rocket' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-cube' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-satellite-dish' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const sidebarVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const itemVariants = {
    closed: { x: -50, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    })
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <motion.div
        className="fixed top-6 left-6 z-[1001]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 hover:from-blue-500 hover:via-purple-500 hover:to-blue-700 border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="w-6 h-6 flex flex-col justify-center items-center"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              className="w-6 h-0.5 bg-white block transform origin-center transition-all duration-300"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="w-6 h-0.5 bg-white block mt-1.5 transform origin-center transition-all duration-300"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              className="w-6 h-0.5 bg-white block mt-1.5 transform origin-center transition-all duration-300"
            />
          </motion.div>
        </Button>
      </motion.div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.nav
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed top-0 left-0 h-full w-80 z-[1000] sidebar-glass"
      >
        <div className="flex flex-col h-full p-8">
          {/* Logo/Brand */}
          <motion.div
            variants={itemVariants}
            custom={0}
            className="mb-12 mt-16"
          >
            <h2 className="text-3xl font-bold ultra-gradient mb-2">
              Shubham Paikrao
            </h2>
            <p className="text-sm text-blue-300">Full-Stack Developer & Data Scientist</p>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex-1 space-y-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                custom={index + 1}
                className={`nav-item cursor-pointer rounded-xl p-4 transition-all duration-300 ${
                  activeSection === item.id
                    ? 'cyber-card neon-border'
                    : 'hover:bg-white/5'
                }`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25'
                      : 'bg-white/10'
                  }`}>
                    <i className={`${item.icon} text-white text-sm`}></i>
                  </div>
                  <span className={`font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white holographic-text'
                      : 'text-blue-100'
                  }`}>
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            custom={menuItems.length + 1}
            className="mt-8"
          >
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/shubham-paikrao-7848162a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center hover:from-blue-500 hover:to-blue-700 transition-all duration-300 magnetic-element"
              >
                <i className="fab fa-linkedin text-white"></i>
              </a>
              <a
                href="https://github.com/shubhamp-2905/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center hover:from-gray-600 hover:to-gray-800 transition-all duration-300 magnetic-element"
              >
                <i className="fab fa-github text-white"></i>
              </a>
            </div>
          </motion.div>

          {/* Download Resume */}
          <motion.div
            variants={itemVariants}
            custom={menuItems.length + 2}
            className="mt-6"
          >
            <Button
              onClick={() => console.log('Resume download')}
              className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white border-0 rounded-xl py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </Button>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}