
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <AnimatedSection delay={100}>
            <p className="text-primary font-medium mb-2">Hi, my name is</p>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
              <span className="gradient-text">Imalka Lakshitha</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={500}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground/80 mb-6">
              IT Student & Developer
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={700}>
            <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mb-8">
              I'm an undergraduate student at SLIIT, focusing on information technology and software development. 
              Passionate about creating modern, user-friendly applications and exploring new technologies.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={900}>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={1100}>
            <div className="mt-8 flex items-center gap-4">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about"
          className="flex flex-col items-center text-foreground/50 hover:text-primary transition-colors"
          aria-label="Scroll Down"
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
