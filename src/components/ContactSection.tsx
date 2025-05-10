
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyber-teal/5 rounded-full filter blur-3xl"></div>
      
      <div className="cyber-container">
        <h2 className="section-heading flex items-center gap-2">
          <Mail className="text-cyber-blue" size={24} />
          Contact Information
        </h2>
        <p className="text-cyber-slate mb-12 max-w-2xl">
          Interested in working together or have questions about my services?
          Feel free to reach out through any of the channels below.
        </p>

        <div className="max-w-3xl mx-auto">
          <Card className="cyber-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-cyber-blue/30">
                  <AspectRatio ratio={1/1}>
                    <img 
                      src="/lovable-uploads/522de71e-206f-42b4-a9e4-d486f93800bd.png"
                      alt="Sudinesh Reddy Vuluvla" 
                      className="w-full h-full object-cover object-center"
                    />
                  </AspectRatio>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-cyber-blue">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-xl text-cyber-lightest mb-1">Email</p>
                      <a href="mailto:sudineshreddy@gmail.com" className="cyber-link text-lg">
                        sudineshreddy@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-cyber-blue">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-xl text-cyber-lightest mb-1">Phone</p>
                      <a href="tel:7661020602" className="cyber-link text-lg">
                        +91 7661020602
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-cyber-blue">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-xl text-cyber-lightest mb-1">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/sudinesh-reddy-vuluvala-43972327a" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-link break-all text-lg"
                      >
                        sudinesh-reddy-vuluvala-43972327a
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-cyber-blue">
                      <Github size={24} />
                    </div>
                    <div>
                      <p className="font-medium text-xl text-cyber-lightest mb-1">GitHub</p>
                      <a 
                        href="https://github.com/Sudinesh5a1" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-link text-lg"
                      >
                        Sudinesh5a1
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyber-navy/50 p-6 rounded-lg border border-cyber-blue/20 mt-8 backdrop-blur-sm">
                <p className="italic text-cyber-slate mb-4">
                  "I'm currently open to new opportunities and collaborations. 
                  Whether you have a project in mind or just want to connect, I'd be happy to hear from you."
                </p>
                <div className="font-mono text-cyber-blue text-right">- Sudinesh</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
