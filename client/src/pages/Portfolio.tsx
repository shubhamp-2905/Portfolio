import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  useEffect(() => {
    // Add small floating cyber orbs with minimal glow
    const orbs = [
      { size: 'w-8 h-8', position: 'top-20 left-20', delay: '0s' },
      { size: 'w-6 h-6', position: 'top-1/3 right-32', delay: '4s' },
      { size: 'w-4 h-4', position: 'bottom-1/4 left-1/3', delay: '8s' },
      { size: 'w-5 h-5', position: 'bottom-32 right-20', delay: '12s' },
    ];

    const orbContainer = document.createElement('div');
    orbContainer.className = 'fixed inset-0 pointer-events-none z-0 overflow-hidden';
    
    orbs.forEach((orb) => {
      const orbEl = document.createElement('div');
      orbEl.className = `floating-orb ${orb.size} ${orb.position}`;
      orbEl.style.animationDelay = orb.delay;
      orbContainer.appendChild(orbEl);
    });

    document.body.appendChild(orbContainer);

    // Add matrix rain effect (optional cyber background)
    const createMatrixEffect = () => {
      const matrixContainer = document.createElement('div');
      matrixContainer.className = 'fixed inset-0 pointer-events-none z-0 opacity-10';
      
      for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.className = 'absolute w-px h-20 bg-gradient-to-b from-transparent via-blue-400 to-transparent';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationName = 'matrix-rain';
        drop.style.animationDuration = `${Math.random() * 3 + 2}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        drop.style.animationIterationCount = 'infinite';
        drop.style.animationTimingFunction = 'linear';
        matrixContainer.appendChild(drop);
      }
      
      document.body.appendChild(matrixContainer);
      
      return matrixContainer;
    };

    const matrixContainer = createMatrixEffect();

    return () => {
      if (document.body.contains(orbContainer)) {
        document.body.removeChild(orbContainer);
      }
      if (document.body.contains(matrixContainer)) {
        document.body.removeChild(matrixContainer);
      }
    };
  }, []);

  return (
    <div className="bg-[var(--deep-void)] text-[var(--ice-white)] font-['Inter'] overflow-x-hidden min-h-screen">
      <CustomCursor />
      <Sidebar />
      {/* Main content container with automatic sidebar offset */}
      <div className="ml-80 transition-all duration-500 ease-in-out">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
