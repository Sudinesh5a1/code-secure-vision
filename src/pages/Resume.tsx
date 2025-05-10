
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Calendar, MapPin, Briefcase, Award, Languages, Code, Mail, Phone, Linkedin, Github } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-lightest">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="cyber-card max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[1fr_2fr] gap-8">
              {/* Left Column */}
              <div className="bg-cyber-navy p-8 rounded-l-lg">
                <div className="flex flex-col items-center mb-8">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-cyber-blue/30 mb-4">
                    <img 
                      src="/lovable-uploads/522de71e-206f-42b4-a9e4-d486f93800bd.png" 
                      alt="Sudinesh Reddy Vuluvala" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-cyber-teal">
                      <FileText size={18} className="text-cyber-blue" />
                      CONTACT
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Phone size={16} className="mt-1 text-cyber-blue" />
                        <span>7661020602</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Mail size={16} className="mt-1 text-cyber-blue" />
                        <span>sudineshreddy@gmail.com</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin size={16} className="mt-1 text-cyber-blue" />
                        <span>Nandyal, Andhra Pradesh</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Linkedin size={16} className="mt-1 text-cyber-blue" />
                        <a 
                          href="https://linkedin.com/in/sudinesh-reddy-vuluvala-43972327a" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-cyber-blue transition-colors"
                        >
                          LinkedIn Profile
                        </a>
                      </li>
                      <li className="flex items-start gap-2">
                        <Github size={16} className="mt-1 text-cyber-blue" />
                        <a 
                          href="https://github.com/Sudinesh5a1" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyber-blue transition-colors"
                        >
                          GitHub Profile
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-cyber-teal">
                      <Calendar size={18} className="text-cyber-blue" />
                      EDUCATION
                    </h3>
                    <ul className="space-y-4">
                      <li>
                        <p className="font-bold">2022-2026</p>
                        <p>SVR ENGINEERING COLLEGE</p>
                        <p className="text-sm text-cyber-slate">Bachelor of Technology in Computer Science and Engineering</p>
                      </li>
                      <li>
                        <p className="font-bold">2020-2022</p>
                        <p>SDR's Akanksha Junior College</p>
                        <p className="text-sm text-cyber-slate">12th Education</p>
                      </li>
                      <li>
                        <p className="font-bold">2020</p>
                        <p>Sri Chaitanya EM High School</p>
                        <p className="text-sm text-cyber-slate">High School</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-cyber-teal">
                      <Code size={18} className="text-cyber-blue" />
                      SKILLS
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Teamwork</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Time Management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Leadership</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Critical Thinking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Linux</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Networking</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Python</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Ethical Hacking</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="flex items-center gap-2 text-xl font-bold mb-4 text-cyber-teal">
                      <Languages size={18} className="text-cyber-blue" />
                      LANGUAGES
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>English</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Telugu</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-cyber-blue">•</span>
                        <span>Hindi</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Right Column */}
              <div className="p-8">
                <h1 className="text-4xl font-bold mb-1 text-cyber-blue">SUDINESH REDDY VULUVALA</h1>
                <h2 className="text-xl mb-6 text-cyber-teal">CYBER SECURITY ANALYST</h2>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 border-b border-cyber-blue/30 pb-2">ABOUT ME</h3>
                  <p className="text-cyber-slate">
                    Enthusiastic and detail-oriented BTech Computer Science student with a strong foundation in programming, algorithms, and software development. Passionate about leveraging technology to solve real-world problems, with hands-on experience in Python, Java, C, and Networking. Adept at collaborative projects, problem-solving, and continuous learning.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 border-b border-cyber-blue/30 pb-2 flex items-center gap-2">
                    <Briefcase size={20} className="text-cyber-blue" />
                    INTERN WORK EXPERIENCE
                  </h3>
                  <ol className="list-decimal pl-5 space-y-4">
                    <li>
                      <p className="font-bold">Google Cybersecurity Internship, Coursera</p>
                      <p>Completed a comprehensive internship program in Google Cybersecurity.</p>
                    </li>
                    <li>
                      <p>Gained hands-on experience in cybersecurity practices and tools.</p>
                    </li>
                    <li>
                      <p className="font-bold">Ethical Hacking Internship, EduSkills Academy</p>
                      <p>Completed an intensive internship program in Ethical Hacking.</p>
                    </li>
                    <li>
                      <p>Developed skills in identifying vulnerabilities and securing systems.</p>
                    </li>
                  </ol>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 border-b border-cyber-blue/30 pb-2 flex items-center gap-2">
                    <Award size={20} className="text-cyber-blue" />
                    ACHIEVEMENT
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold">Industry-Recognized Badges, Google Cybersecurity</p>
                      <p>Earned badges in Google Cybersecurity, demonstrating expertise in security fundamentals.</p>
                    </div>
                    <div>
                      <p className="font-bold">Industry-Recognized Badges, Palo Alto Networks</p>
                      <p>Earned badges in Palo Alto Networks, showcasing knowledge of network security solutions.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm italic border-t border-cyber-blue/30 pt-4 mt-8 text-cyber-slate">
                    Declaration: I here by declare that the information provided above is true to the best of my knowledge and belief.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <a 
              href="/Sudinesh_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-button"
            >
              <FileText size={18} />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
