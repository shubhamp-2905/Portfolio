import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', hideCursor);

    // Magnetic effect for interactive elements
    const magneticElements = document.querySelectorAll('.magnetic-element');
    
    magneticElements.forEach((element) => {
      const el = element as HTMLElement;
      
      el.addEventListener('mouseenter', () => {
        const cursor = document.querySelector('.custom-cursor') as HTMLElement;
        if (cursor) {
          cursor.style.transform = 'scale(1.5)';
          cursor.style.background = 'var(--warm-gold)';
        }
      });
      
      el.addEventListener('mouseleave', () => {
        const cursor = document.querySelector('.custom-cursor') as HTMLElement;
        if (cursor) {
          cursor.style.transform = 'scale(1)';
          cursor.style.background = 'transparent';
        }
        el.style.transform = 'translateX(0) translateY(0)';
      });
      
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translateX(${x * 0.1}px) translateY(${y * 0.1}px)`;
      });
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="custom-cursor"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
