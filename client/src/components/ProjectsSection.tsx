import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import chatappImg from './images/chatapp3.png';
import resumeAnalyzer from './images/resume-analyzer.png';
// import gs from './images/Gs.png';
import antman from './images/antman.png';
import ug from './images/ug.png';
import HPP from './images/HPP.png';
import sahakar from './images/sahakar.png';


export default function ProjectsSection() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const projects = [
  {
    title: "Full-stack Chat-App",
    description: "Full-stack chat web app with React.js frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and real-time inventory management.",
    image: chatappImg,
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe API"],
    liveDemo: "https://fullstack-chat-app-7ll9.onrender.com/",
    github: "https://github.com/shubhamp-2905/fullstack-chat-app"
  },
  {
    title: "UniGold",
    description: "Interactive dashboard for business analytics with real-time data visualization, custom charts, and comprehensive reporting features using D3.js and modern web technologies.",
    image: ug, // Add this image to your images folder
    technologies: ["D3.js", "React.js", "Python", "PostgreSQL"],
    liveDemo: "https://unigoldpackaging.org/",
    github: "https://github.com/shubhamp-2905/UniGold-Packaging-"
  },
  {
    title: "SahaAakar",
    description: "Real-time messaging application built with React Native and Socket.io. Features include group chats, file sharing, push notifications, and end-to-end encryption for secure communication.",
    image: sahakar, // Add this image to your images folder
    technologies: ["React Native", "Socket.io", "Node.js", "Redis"],
    liveDemo: "https://sahaakar.vercel.app/",
    github: "https://github.com/shubhamp-2905/SahaAakar-"
  },
  {
    title: "Resume-Analyzer",
    description: "Machine learning application for predictive analytics using Python, scikit-learn, and Flask. Includes data preprocessing, model training, and interactive web interface for predictions.",
    image: resumeAnalyzer, // Add this image to your images folder
    technologies: ["Python", "Scikit-learn", "Flask", "Pandas"],
    // liveDemo: "#",
    github: "https://github.com/shubhamp-2905/Resume-Analyzer-"
  },
  {
    title: "Antman AI assistant",
    description: "Collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities built with modern web technologies.",
    image: antman, // Add this image to your images folder
    technologies: ["React.js", "TypeScript", "Firebase", "Material-UI"],
    // liveDemo: "#",
    github: "https://github.com/shubhamp-2905/ANTMAN---AI-Assistant-"
  },
  {
    title: "House Price Prediction Model",
    description: "Intelligent content generation platform using OpenAI API and modern web technologies. Supports multiple content types, custom templates, and automated SEO optimization.",
    image:HPP, // Add this image to your images folder
    technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Prisma"],
    // liveDemo: "#",
    github: "https://github.com/shubhamp-2905/House-Price-Prediction-"
  }
    // {
    //   title: "Blockchain Voting System",
    //   description: "Decentralized voting platform built on Ethereum blockchain ensuring transparency and security. Features smart contracts, voter verification, and immutable vote records.",
    //   image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   technologies: ["Solidity", "Web3.js", "React.js", "Ethereum"],
    //   liveDemo: "#",
    //   github: "#"
    // },
    // {
    //   title: "Cloud Storage Manager",
    //   description: "Enterprise-grade file management system with cloud integration, advanced search capabilities, version control, and collaborative editing features for teams.",
    //   image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   technologies: ["Vue.js", "AWS S3", "Express.js", "PostgreSQL"],
    //   liveDemo: "#",
    //   github: "#"
    // },
    // {
    //   title: "IoT Smart Home Hub",
    //   description: "Comprehensive smart home automation system with IoT device integration, voice control, energy monitoring, and mobile app for remote management and scheduling.",
    //   image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    //   technologies: ["Arduino", "Raspberry Pi", "MQTT", "Flutter"],
    //   liveDemo: "#",
    //   github: "#"
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-effect rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 magnetic-element bg-transparent border-[var(--platinum)]/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-[var(--warm-gold)]">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-[var(--graphite)] text-[var(--platinum)]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        className="px-6 py-3 bg-[var(--warm-gold)] text-[var(--rich-black)] font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        className="px-6 py-3 glass-effect font-semibold rounded-lg hover:bg-[var(--graphite)] transition-colors duration-300 border-[var(--platinum)]/20"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <i className="fab fa-github mr-2"></i>GitHub
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div className="text-center mt-12" variants={itemVariants}>
            <Button
              variant="outline"
              className="magnetic-element px-8 py-4 glass-effect font-semibold rounded-lg hover:bg-[var(--graphite)] transition-all duration-300 transform hover:scale-105 border-[var(--platinum)]/20"
              onClick={() => window.open('https://github.com/shubhamp-2905/', '_blank')}
            >
              <i className="fab fa-github mr-2"></i>View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}