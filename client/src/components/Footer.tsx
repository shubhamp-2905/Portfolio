import { Button } from "@/components/ui/button";

export default function Footer() {
  const downloadResume = () => {
    // TODO: Implement resume download functionality
    console.log('Resume download triggered');
  };

  return (
    <footer className="py-12 border-t border-[var(--graphite)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">Shubham Paikrao</div>
            <p className="text-gray-400">Full-Stack Developer & Data Scientist</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <Button
              onClick={downloadResume}
              className="magnetic-element px-6 py-3 bg-[var(--warm-gold)] text-[var(--rich-black)] font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-download mr-2"></i>Download Resume
            </Button>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/shubham-paikrao-7848162a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--warm-gold)] transition-colors duration-300"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://github.com/shubhamp-2905/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[var(--warm-gold)] transition-colors duration-300"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-[var(--graphite)] text-center text-gray-400">
          <p>&copy; 2024 Shubham Paikrao. All rights reserved. | Designed with <i className="fas fa-heart text-[var(--warm-gold)]"></i> and precision.</p>
        </div>
      </div>
    </footer>
  );
}
