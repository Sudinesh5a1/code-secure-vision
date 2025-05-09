
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Briefcase, Calendar, ExternalLink } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    title: "Google Cybersecurity Internship",
    company: "via Coursera",
    period: "2024",
    description: "Hands-on experience in cybersecurity tools and practices. Learned about threat detection, incident response, and security analytics.",
    skills: ["Security Analytics", "Threat Detection", "Incident Response"],
    link: "https://www.coursera.org/professional-certificates/google-cybersecurity"
  },
  {
    title: "Ethical Hacking Internship",
    company: "EduSkills Academy",
    period: "2025",
    description: "Gained skills in identifying vulnerabilities and securing systems. Practiced ethical hacking techniques and penetration testing methods.",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Security Protocols"],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="cyber-container">
        <h2 className="section-heading flex items-center gap-2">
          <Briefcase className="text-cyber-blue" size={24} />
          Experience
        </h2>
        <p className="text-cyber-slate mb-12 max-w-2xl">
          Internships and hands-on experience in the cybersecurity field,
          where I've applied my skills and gained practical knowledge.
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="cyber-card hover:border-cyber-blue/50 overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h3 className="text-xl font-bold text-cyber-lightest">
                    {exp.title}
                    {exp.link && (
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 ml-2 text-cyber-blue hover:text-cyber-teal"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </h3>
                  <div className="md:ml-auto flex items-center text-sm font-mono text-cyber-blue">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-lg text-cyber-slate mb-1">{exp.company}</div>
                  <p className="text-cyber-light">{exp.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="cyber-tag">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="absolute top-0 left-0 w-1 h-full bg-cyber-blue transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-cyber-slate mb-6">
            Always looking for new opportunities to expand my experience in the cybersecurity field.
          </p>
          <a href="#contact" className="cyber-button inline-flex">
            <Shield size={18} />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
