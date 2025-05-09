
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from "lucide-react";

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ fullName: "", emailAddress: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-cyber-teal/5 rounded-full filter blur-3xl"></div>
      
      <div className="cyber-container">
        <h2 className="section-heading flex items-center gap-2">
          <Mail className="text-cyber-blue" size={24} />
          Contact Me
        </h2>
        <p className="text-cyber-slate mb-12 max-w-2xl">
          Interested in working together or have questions about my services?
          Feel free to reach out through any of the channels below.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-cyber-lightest font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="bg-cyber-navy/70 border-cyber-blue/20 focus:border-cyber-blue focus:ring-cyber-blue/20"
                />
              </div>
              
              <div>
                <label htmlFor="emailAddress" className="block text-cyber-lightest font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="bg-cyber-navy/70 border-cyber-blue/20 focus:border-cyber-blue focus:ring-cyber-blue/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-cyber-lightest font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="bg-cyber-navy/70 border-cyber-blue/20 focus:border-cyber-blue focus:ring-cyber-blue/20"
                />
              </div>
              
              <Button type="submit" disabled={isSubmitting} className="w-full cyber-button">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
          
          <div>
            <Card className="cyber-card mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-mono text-cyber-teal mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-cyber-blue">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-cyber-lightest">Email</p>
                      <a href="mailto:sudineshreddy@gmail.com" className="cyber-link">
                        sudineshreddy@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-cyber-blue">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-cyber-lightest">Phone</p>
                      <a href="tel:7661020602" className="cyber-link">
                        +91 7661020602
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-cyber-blue">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-cyber-lightest">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/sudinesh-reddy-vuluvala-43972327a" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-link break-all"
                      >
                        sudinesh-reddy-vuluvala-43972327a
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-cyber-blue">
                      <Github size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-cyber-lightest">GitHub</p>
                      <a 
                        href="https://github.com/Sudinesh5a1" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cyber-link"
                      >
                        Sudinesh5a1
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-cyber-navy/50 p-6 rounded-lg border border-cyber-blue/20 backdrop-blur-sm">
              <p className="italic text-cyber-slate mb-4">
                "I'm currently open to new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, I'd be happy to hear from you."
              </p>
              <div className="font-mono text-cyber-blue text-right">- Sudinesh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
