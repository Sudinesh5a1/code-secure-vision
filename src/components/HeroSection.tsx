
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState<boolean>(false);
  
  useEffect(() => {
    // Simulate typing completion after animation
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30"></div>
      
      {/* Glowing orb effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyber-blue/5 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyber-teal/5 filter blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-4 overflow-hidden">
            <span className="font-mono text-cyber-blue block mb-3">
              {"<hello world>"}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="block">I'm</span>
            <span className="text-cyber-blue block">Sudinesh Reddy Vuluvla</span>
          </h1>

          <div className={`h-12 mb-8 overflow-hidden ${typingComplete ? 'border-none' : ''}`}>
            <h2 className={`text-xl md:text-2xl text-cyber-slate font-mono ${typingComplete ? '' : 'typing-effect animate-cursor-blink'}`}>
              Cybersecurity Analyst & Ethical Hacker
            </h2>
          </div>

          <p className="text-lg text-cyber-slate max-w-xl mb-12 leading-relaxed">
            Securing digital landscapes through ethical hacking, vulnerability assessment, 
            and penetration testing. Passionate about building robust security systems for 
            the connected world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="cyber-button" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="cyber-button" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="flex flex-col items-center gap-2 text-cyber-light hover:text-cyber-teal transition-colors">
          <span className="font-mono text-sm">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
