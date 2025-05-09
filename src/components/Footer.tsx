
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-cyber-dark border-t border-cyber-blue/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-mono font-bold text-cyber-teal flex items-center gap-2">
              <span className="text-2xl text-cyber-blue">{"{"}</span>
              SR
              <span className="text-2xl text-cyber-blue">{"}"}</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Sudinesh5a1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyber-slate hover:text-cyber-blue transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/sudinesh-reddy-vuluvala-43972327a" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyber-slate hover:text-cyber-blue transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sudineshreddy@gmail.com" 
              className="text-cyber-slate hover:text-cyber-blue transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-cyber-navy text-center">
          <p className="text-sm text-cyber-slate">
            &copy; {new Date().getFullYear()} Sudinesh Reddy Vuluvla. All rights reserved.
          </p>
          <p className="text-xs text-cyber-slate/60 mt-2">
            Designed &amp; Built with 
            <span className="text-cyber-blue mx-1">♥</span>
            and secure code practices
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
