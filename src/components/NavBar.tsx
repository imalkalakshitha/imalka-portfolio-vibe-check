
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold gradient-text">
          Imalka<span className="text-foreground">.dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button asChild size="sm" variant="outline" className="ml-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={16} /> GitHub
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact" className="flex items-center gap-2">
              <Mail size={16} /> Contact Me
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-foreground p-2 rounded-md hover:bg-secondary/50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[62px] bg-background/95 backdrop-blur-lg shadow-xl md:hidden transition-transform duration-300 ease-in-out z-50",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary py-2 transition-colors text-sm font-medium"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button asChild variant="outline" size="sm">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                <Github size={16} /> GitHub
              </a>
            </Button>
            <Button asChild size="sm">
              <a href="#contact" className="flex items-center justify-center gap-2 w-full" onClick={toggleMenu}>
                <Mail size={16} /> Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
