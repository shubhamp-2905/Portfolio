import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user-astronaut' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-code-branch' },
    { id: 'experience', label: 'Experience', icon: 'fas fa-rocket' },
    { id: 'projects', label: 'Projects', icon: 'fas fa-cube' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-satellite-dish' }
  ];

  useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add('dark');
    
    const handleScroll = () => {
      const sections = menuItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      
      // Update navbar background on scroll
      setIsScrolled(window.scrollY > 50);

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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl' 
            : 'bg-transparent'
        }`}
        style={{
          background: isScrolled 
            ? 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.9) 50%, rgba(88, 28, 135, 0.95) 100%)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
                  onClick={() => scrollToSection('home')}>
                Shubham Paikrao
              </h2>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${item.icon} mr-2 text-xs`}></i>
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex space-x-2">
                <motion.a
                  href="https://www.linkedin.com/in/shubham-paikrao-7848162a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-linkedin text-white text-sm"></i>
                </motion.a>
                <motion.a
                  href="https://github.com/shubhamp-2905/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center hover:from-gray-600 hover:to-gray-800 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fab fa-github text-white text-sm"></i>
                </motion.a>
              </div>

              {/* Theme Toggle */}
              {/* <motion.button
                onClick={toggleDarkMode}
                className="w-10 h-10 rounded-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`${isDarkMode ? 'fas fa-sun' : 'fas fa-moon'} text-sm`}></i>
              </motion.button> */}

              {/* Resume Download */}
              <motion.button
              onClick={() => window.open('https://drive.google.com/file/d/1RXISupbwCQrIew0ESbacpBa9GG9cce78/view?usp=sharing', '_blank')}
               className="px-4 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
               whileHover={{ scale: 1.05, y: -2 }}
               whileTap={{ scale: 0.95 }}
              >
               <i className="fas fa-eye mr-2 text-xs"></i>
              Resume
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 hover:from-blue-500 hover:via-purple-500 hover:to-blue-700 flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="w-5 h-5 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 5 }
                    }}
                    className="w-5 h-0.5 bg-white block transform origin-center transition-all duration-300"
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className="w-5 h-0.5 bg-white block mt-1 transform origin-center transition-all duration-300"
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -5 }
                    }}
                    className="w-5 h-0.5 bg-white block mt-1 transform origin-center transition-all duration-300"
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden bg-slate-900/98 backdrop-blur-xl border-t border-blue-500/20"
              style={{
                background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 58, 138, 0.95) 50%, rgba(88, 28, 135, 0.98) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              <div className="px-4 pt-4 pb-6 space-y-3">
                {/* Mobile Navigation Items */}
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    custom={index}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-blue-500/30'
                        : 'text-blue-100 hover:bg-white/5'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center">
                      <i className={`${item.icon} mr-3 text-sm`}></i>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </motion.button>
                ))}

                {/* Mobile Actions */}
                <div className="pt-4 border-t border-blue-500/20 space-y-3">
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href="https://www.linkedin.com/in/shubham-paikrao-7848162a7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-linkedin text-white"></i>
                    </motion.a>
                    <motion.a
                      href="https://github.com/shubhamp-2905/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github text-white"></i>
                    </motion.a>
                  </div>

                  {/* Theme Toggle */}
                  {/* <motion.button
                    onClick={toggleDarkMode}
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-lg py-3 font-medium transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className={`${isDarkMode ? 'fas fa-sun' : 'fas fa-moon'} mr-2`}></i>
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                  </motion.button> */}

                  {/* Resume Download */}
                  <motion.button
                    onClick={() => console.log('Resume download')}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-500 hover:via-purple-500 hover:to-blue-500 text-white rounded-lg py-3 font-medium transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <i className="fas fa-eye mr-2"></i>
                    view Resume
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
     
    </>
  );
}