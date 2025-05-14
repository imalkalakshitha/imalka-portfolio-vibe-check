
import { Project } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects: Project[] = [
  {
    id: 1,
    title: "E-Learning Platform",
    description: "A comprehensive online learning platform developed using React and Node.js. Features include user authentication, course management, interactive quizzes, and progress tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com",
    liveUrl: "https://project.com"
  },
  {
    id: 2,
    title: "Inventory Management System",
    description: "A robust system designed to streamline inventory tracking and management for small businesses. Includes features for stock monitoring, order management, and reporting.",
    tags: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Health Monitoring App",
    description: "A mobile application that helps users track their health metrics, set fitness goals, and monitor progress over time. Includes features for meal planning and workout routines.",
    tags: ["Flutter", "Firebase", "Dart", "RESTful API"],
    githubUrl: "https://github.com",
    liveUrl: "https://project.com"
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A web application for tracking personal finances, including income, expenses, budgeting, and financial goal setting. Visualizes data using interactive charts.",
    tags: ["React", "TypeScript", "Firebase", "ChartJS"],
    githubUrl: "https://github.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/5 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 tracking-tight">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-10" />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-foreground/70 max-w-2xl mb-12">
            Here are some of the projects I've worked on. Each represents different aspects of my skills and interests in software development.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={300 + index * 200}>
              <Card className="h-full backdrop-blur-sm bg-secondary/30 border-secondary/50 card-hover">
                <CardHeader>
                  <h3 className="text-xl font-bold gradient-text">{project.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-accent/10 text-accent-foreground">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  {project.githubUrl && (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild size="sm">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={1100}>
          <div className="flex justify-center mt-12">
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" /> View More on GitHub
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
