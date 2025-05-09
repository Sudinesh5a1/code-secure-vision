
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyber-blue/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="mb-8">
              <h2 className="section-heading">About Me</h2>
            </div>
            
            <div className="space-y-4 text-cyber-slate">
              <p>
                I am an enthusiastic and detail-oriented BTech Computer Science student with a 
                strong foundation in programming, algorithms, and software development. Passionate 
                about leveraging technology to solve real-world problems, with hands-on experience 
                in Python, Java, C, and Networking.
              </p>
              
              <p>
                Adept at collaborative projects, problem-solving, and continuous learning, 
                I am constantly exploring new technologies and methodologies to enhance my 
                skills and knowledge in the ever-evolving tech landscape.
              </p>
              
              <p>
                My interests include cybersecurity, ethical hacking, and network infrastructure, 
                and I'm committed to developing secure and efficient technological solutions.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="cyber-tag">Python</span>
              <span className="cyber-tag">Linux</span>
              <span className="cyber-tag">Penetration Testing</span>
              <span className="cyber-tag">Network Security</span>
              <span className="cyber-tag">OWASP</span>
              <span className="cyber-tag">Burp Suite</span>
            </div>
          </div>
          
          <div className="md:w-1/2 flex flex-col items-center">
            <div className="relative w-64 h-64 mb-8">
              <div className="absolute inset-0 border-2 border-cyber-teal rounded-lg transform translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-cyber-blue/20 rounded-lg overflow-hidden">
                <AspectRatio ratio={1/1} className="h-full">
                  <img 
                    src="/lovable-uploads/f90c7dbc-2ff6-4f1a-b668-5a5c4c93d944.png"
                    alt="Sudinesh Reddy Vuluvla" 
                    className="w-full h-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
            </div>
            
            <div className="w-full">
              <h3 className="text-xl font-mono text-cyber-teal mb-4">Education</h3>
              
              <div className="space-y-6">
                <Card className="cyber-card">
                  <CardContent className="p-4">
                    <div className="font-mono text-cyber-blue">2022–2026</div>
                    <div className="text-lg font-semibold text-cyber-lightest">BTech in Computer Science and Engineering</div>
                    <div className="text-cyber-slate italic">SVR Engineering College</div>
                  </CardContent>
                </Card>
                
                <Card className="cyber-card">
                  <CardContent className="p-4">
                    <div className="font-mono text-cyber-blue">2020–2022</div>
                    <div className="text-lg font-semibold text-cyber-lightest">12th Education</div>
                    <div className="text-cyber-slate italic">SDR's Akanksha Junior College</div>
                  </CardContent>
                </Card>
                
                <Card className="cyber-card">
                  <CardContent className="p-4">
                    <div className="font-mono text-cyber-blue">2020</div>
                    <div className="text-lg font-semibold text-cyber-lightest">High School</div>
                    <div className="text-cyber-slate italic">Sri Chaitanya EM High School</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
