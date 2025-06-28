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
    // Add floating cyber orbs with improved animations
    const orbs = [
      { size: 'w-24 h-24', position: 'top-20 left-20', delay: '0s' },
      { size: 'w-16 h-16', position: 'top-1/3 right-32', delay: '3s' },
      { size: 'w-20 h-20', position: 'bottom-1/4 left-1/3', delay: '6s' },
      { size: 'w-12 h-12', position: 'bottom-32 right-20', delay: '9s' },
      { size: 'w-32 h-32', position: 'top-1/2 left-10', delay: '12s' },
      { size: 'w-14 h-14', position: 'top-3/4 right-1/4', delay: '15s' },
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
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
