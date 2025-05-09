
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Track scroll position to update header styling
  useEffect(() => {
    const handleScroll = () => {
      // Set header background when scrolled
      setIsScrolled(window.scrollY > 50);

      if (isHomePage) {
        // Find which section is currently in view
        const sections = document.querySelectorAll("section[id]");
        let currentSection = "";

        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionId = section.getAttribute("id") || "";

          if (sectionTop <= 100) {
            currentSection = sectionId;
          }
        });

        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${isScrolled ? "bg-cyber-dark/90 backdrop-blur-md shadow-lg shadow-cyber-blue/10 py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-mono font-bold text-cyber-teal flex items-center gap-2">
          <span className="text-2xl text-cyber-blue">{"{"}</span>
          SR
          <span className="text-2xl text-cyber-blue">{"}"}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {isHomePage && navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-mono text-sm tracking-wider transition-colors relative px-1
              ${activeSection === item.href.substring(1) ? "text-cyber-teal" : "text-cyber-light hover:text-cyber-teal"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="text-cyber-blue mr-1">0{index + 1}.</span>
              {item.name}
              {activeSection === item.href.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyber-teal" />
              )}
            </a>
          ))}
          <Button className="cyber-button ml-4" asChild>
            <Link to="/resume">Resume</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-cyber-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyber-navy/95 backdrop-blur-lg py-6 px-6 shadow-lg border-t border-cyber-blue/20">
          <nav className="flex flex-col space-y-4">
            {isHomePage && navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-mono text-sm py-2 ${
                  activeSection === item.href.substring(1) ? "text-cyber-teal" : "text-cyber-light"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-cyber-blue mr-2">0{index + 1}.</span>
                {item.name}
              </a>
            ))}
            <Button className="cyber-button" asChild onClick={() => setMobileMenuOpen(false)}>
              <Link to="/resume">Resume</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
