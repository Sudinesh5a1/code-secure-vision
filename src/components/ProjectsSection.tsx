
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, ExternalLink, Github, Lock, Shield, FileImage, Images } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Password Strength Checker",
    description: 
      "A Python script that analyzes and rates the strength of a given password to help users create secure passwords and reduce vulnerabilities.",
    tech: ["Python", "Security", "CLI"],
    github: "https://github.com/Sudinesh5a1/Sudinesh5a1/blob/main/passwordstengthchecker.py",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    title: "Brute Force Password Cracking",
    description: 
      "A tool designed to demonstrate how brute force attacks work against password systems, useful for educational purposes and security testing.",
    tech: ["Python", "Security", "Cryptography", "Ethical Hacking"],
    github: "https://github.com/Sudinesh5a1",
    image: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

const ProjectsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-cyber-navy/30">
      <div className="cyber-container">
        <h2 className="section-heading flex items-center gap-2">
          <Code className="text-cyber-blue" size={24} />
          Projects
        </h2>
        <p className="text-cyber-slate mb-12 max-w-2xl">
          A selection of my cybersecurity projects, demonstrating my technical skills and 
          approach to solving security challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="cyber-card relative group overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="h-52 relative">
                  <AspectRatio ratio={16/9} className="bg-gradient-to-br from-cyber-dark to-cyber-navy">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FileImage size={64} className="text-cyber-blue opacity-70 group-hover:text-cyber-teal transition-colors" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60"></div>
                  </AspectRatio>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cyber-lightest mb-2 group-hover:text-cyber-teal transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-cyber-slate mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="cyber-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyber-blue hover:text-cyber-teal transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={20} />
                      </a>
                    )}
                    
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyber-blue hover:text-cyber-teal transition-colors"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full bg-cyber-blue transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-[2px] h-0 group-hover:h-full bg-cyber-blue transition-all duration-500 delay-150"></div>
                  <div className="absolute bottom-0 right-0 h-[2px] w-0 group-hover:w-full bg-cyber-blue transition-all duration-500 delay-300"></div>
                  <div className="absolute bottom-0 left-0 w-[2px] h-0 group-hover:h-full bg-cyber-blue transition-all duration-500 delay-450"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-cyber-slate mb-6">
            More projects coming soon! I'm currently working on several new cybersecurity tools and applications.
          </p>
          <a 
            href="https://github.com/Sudinesh5a1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyber-button inline-flex"
          >
            <Github size={18} />
            <span>See More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
