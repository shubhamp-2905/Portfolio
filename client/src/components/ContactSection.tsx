import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Shubham Paikrao', // Your name
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY'      // Replace with your EmailJS public key
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 md:mb-16 gradient-text px-4"
            variants={itemVariants}
          >
            Let's Connect
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <motion.div className="space-y-6 sm:space-y-8 order-2 lg:order-1" variants={itemVariants}>
              <Card className="glass-effect p-6 sm:p-8 rounded-2xl bg-transparent border-[var(--platinum)]/10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[var(--warm-gold)]">Get In Touch</h3>
                <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a conversation about technology and innovation. Let's build something amazing together!
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--warm-gold)] rounded-lg flex items-center justify-center text-[var(--rich-black)] flex-shrink-0 mt-1 sm:mt-0">
                      <i className="fas fa-envelope text-sm sm:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-[var(--platinum)] text-sm sm:text-base">Email</h4>
                      <p className="text-gray-400 text-sm sm:text-base break-all sm:break-normal">shubhampaikrao610@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--warm-gold)] rounded-lg flex items-center justify-center text-[var(--rich-black)] flex-shrink-0 mt-1 sm:mt-0">
                      <i className="fas fa-phone text-sm sm:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-[var(--platinum)] text-sm sm:text-base">Phone</h4>
                      <p className="text-gray-400 text-sm sm:text-base">+91 96990 83147</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--warm-gold)] rounded-lg flex items-center justify-center text-[var(--rich-black)] flex-shrink-0 mt-1 sm:mt-0">
                      <i className="fas fa-map-marker-alt text-sm sm:text-base"></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-[var(--platinum)] text-sm sm:text-base">Location</h4>
                      <p className="text-gray-400 text-sm sm:text-base">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Social Links */}
              <Card className="glass-effect p-6 sm:p-8 rounded-2xl bg-transparent border-[var(--platinum)]/10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[var(--warm-gold)]">Follow Me</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    href="https://www.linkedin.com/in/shubham-paikrao-7848162a7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300 magnetic-element"
                  >
                    <i className="fab fa-linkedin text-white text-sm sm:text-base"></i>
                  </a>
                  <a
                    href="https://github.com/shubhamp-2905/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-300 magnetic-element"
                  >
                    <i className="fab fa-github text-white text-sm sm:text-base"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 magnetic-element"
                  >
                    <i className="fab fa-twitter text-white text-sm sm:text-base"></i>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors duration-300 magnetic-element"
                  >
                    <i className="fab fa-instagram text-white text-sm sm:text-base"></i>
                  </a>
                </div>
              </Card>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <Card className="glass-effect p-6 sm:p-8 rounded-2xl bg-transparent border-[var(--platinum)]/10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-[var(--warm-gold)]">Send Message</h3>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="sm:col-span-1">
                      <Label htmlFor="name" className="block text-[var(--platinum)] font-medium mb-2 text-sm sm:text-base">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        {...form.register("name")}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--graphite)] border border-gray-600 rounded-lg focus:outline-none focus:border-[var(--warm-gold)] transition-colors duration-300 text-sm sm:text-base"
                        placeholder="Your Name"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-400 text-xs sm:text-sm mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="sm:col-span-1">
                      <Label htmlFor="email" className="block text-[var(--platinum)] font-medium mb-2 text-sm sm:text-base">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register("email")}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--graphite)] border border-gray-600 rounded-lg focus:outline-none focus:border-[var(--warm-gold)] transition-colors duration-300 text-sm sm:text-base"
                        placeholder="your.email@example.com"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-400 text-xs sm:text-sm mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="block text-[var(--platinum)] font-medium mb-2 text-sm sm:text-base">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      {...form.register("subject")}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--graphite)] border border-gray-600 rounded-lg focus:outline-none focus:border-[var(--warm-gold)] transition-colors duration-300 text-sm sm:text-base"
                      placeholder="Project Discussion"
                    />
                    {form.formState.errors.subject && (
                      <p className="text-red-400 text-xs sm:text-sm mt-1">{form.formState.errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="block text-[var(--platinum)] font-medium mb-2 text-sm sm:text-base">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      {...form.register("message")}
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[var(--graphite)] border border-gray-600 rounded-lg focus:outline-none focus:border-[var(--warm-gold)] transition-colors duration-300 resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project or opportunity..."
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-xs sm:text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[var(--warm-gold)] text-[var(--rich-black)] font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 magnetic-element disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}