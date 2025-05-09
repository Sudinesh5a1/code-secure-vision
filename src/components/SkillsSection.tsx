
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Shield, Terminal, Globe, Search, Brain, Clock, Users, Lightbulb } from "lucide-react";

interface TechnicalSkill {
  name: string;
  percentage: number;
  icon: React.ReactNode;
}

interface SoftSkill {
  name: string;
  icon: React.ReactNode;
}

const technicalSkills: TechnicalSkill[] = [
  { name: "Python", percentage: 85, icon: <Terminal size={20} /> },
  { name: "Linux", percentage: 80, icon: <Terminal size={20} /> },
  { name: "Networking", percentage: 90, icon: <Globe size={20} /> },
  { name: "Ethical Hacking", percentage: 75, icon: <Shield size={20} /> },
  { name: "Vulnerability Assessment", percentage: 80, icon: <Search size={20} /> },
];

const softSkills: SoftSkill[] = [
  { name: "Teamwork", icon: <Users size={18} /> },
  { name: "Time Management", icon: <Clock size={18} /> },
  { name: "Leadership", icon: <Shield size={18} /> },
  { name: "Critical Thinking", icon: <Brain size={18} /> },
  { name: "Problem Solving", icon: <Lightbulb size={18} /> },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative bg-cyber-navy/50">
      <div className="cyber-container">
        <h2 className="section-heading">Skills & Expertise</h2>
        <p className="text-cyber-slate mb-12 max-w-2xl">
          Technical abilities and soft skills I've developed through education, internships, and personal projects. 
          I'm always expanding my knowledge in cybersecurity and related technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-mono text-cyber-teal mb-8 flex items-center gap-2">
              <Shield className="text-cyber-blue" /> Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-cyber-blue">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm font-mono text-cyber-blue">{skill.percentage}%</span>
                  </div>
                  <div className="relative">
                    <Progress value={skill.percentage} className="h-2 bg-cyber-navy" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="font-mono text-cyber-blue mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                <span className="cyber-tag">Wireshark</span>
                <span className="cyber-tag">Nmap</span>
                <span className="cyber-tag">Metasploit</span>
                <span className="cyber-tag">Burp Suite</span>
                <span className="cyber-tag">Kali Linux</span>
                <span className="cyber-tag">OWASP ZAP</span>
                <span className="cyber-tag">Docker</span>
                <span className="cyber-tag">Git</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-mono text-cyber-teal mb-8 flex items-center gap-2">
              <Brain className="text-cyber-blue" /> Soft Skills
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="cyber-card flex items-center gap-3 p-4 hover:border-cyber-teal/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center text-cyber-blue">
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <div className="cyber-radar">
                <div className="radar-circle w-full h-full"></div>
                <div className="radar-circle w-4/5 h-4/5 top-1/10 left-1/10"></div>
                <div className="radar-circle w-3/5 h-3/5 top-1/5 left-1/5"></div>
                <div className="radar-circle w-2/5 h-2/5 top-[30%] left-[30%]"></div>
                <div className="radar-scanner"></div>
                
                <div className="absolute bottom-[15%] left-[15%] w-3 h-3 rounded-full bg-cyber-teal animate-pulse-glow"></div>
                <div className="absolute top-[35%] right-[20%] w-2 h-2 rounded-full bg-cyber-blue animate-pulse-glow"></div>
                <div className="absolute top-[25%] left-[40%] w-4 h-4 rounded-full bg-cyber-blue animate-pulse-glow"></div>
              </div>
              
              <div className="text-center mt-4 font-mono text-sm text-cyber-slate">
                <p>Constantly scanning for new skills and technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
