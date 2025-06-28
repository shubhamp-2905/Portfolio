import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // TODO: Implement theme switching logic
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 glass-effect transition-all duration-300 ${
        isScrolled ? 'bg-[var(--charcoal)]/95' : 'bg-[var(--charcoal)]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">SP</div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-[var(--warm-gold)] transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-[var(--warm-gold)] transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="hover:text-[var(--warm-gold)] transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-[var(--warm-gold)] transition-colors duration-300"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-[var(--warm-gold)] transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-[var(--warm-gold)] transition-colors duration-300"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-effect hover:bg-[var(--graphite)] transition-colors duration-300"
            >
              <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'} text-[var(--warm-gold)]`}></i>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden p-2 rounded-lg glass-effect"
            >
              <i className="fas fa-bars"></i>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
