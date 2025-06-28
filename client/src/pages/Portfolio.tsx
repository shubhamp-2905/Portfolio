import { useEffect } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  useEffect(() => {
    // Add floating geometric shapes
    const shapes = [
      { size: 'w-32 h-32', color: 'bg-yellow-600', shape: 'rounded-full', position: 'top-20 left-10', delay: '0s' },
      { size: 'w-24 h-24', color: 'bg-blue-800', shape: 'rounded-lg', position: 'top-1/3 right-20', delay: '2s' },
      { size: 'w-16 h-16', color: 'bg-gray-300', shape: 'rounded-full', position: 'bottom-1/4 left-1/4', delay: '4s' },
      { size: 'w-20 h-20', color: 'bg-yellow-600', shape: 'rounded-lg', position: 'bottom-20 right-1/3', delay: '6s' },
    ];

    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'fixed inset-0 pointer-events-none z-0';
    
    shapes.forEach((shape) => {
      const shapeEl = document.createElement('div');
      shapeEl.className = `floating-shape ${shape.size} ${shape.color} ${shape.shape} ${shape.position}`;
      shapeEl.style.animationDelay = shape.delay;
      shapesContainer.appendChild(shapeEl);
    });

    document.body.appendChild(shapesContainer);

    return () => {
      document.body.removeChild(shapesContainer);
    };
  }, []);

  return (
    <div className="bg-[var(--rich-black)] text-[var(--platinum)] font-['Inter'] overflow-x-hidden">
      <CustomCursor />
      <Navigation />
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
