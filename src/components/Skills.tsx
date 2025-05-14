
import { Skill } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import AnimatedSection from "./AnimatedSection";

const frontendSkills: Skill[] = [
  { name: "HTML/CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "Tailwind CSS", level: 85 },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 80 },
  { name: "Java", level: 85 },
  { name: "Python", level: 70 },
  { name: "SQL", level: 75 },
  { name: "MongoDB", level: 70 },
];

const otherSkills: Skill[] = [
  { name: "Git & GitHub", level: 85 },
  { name: "Docker", level: 60 },
  { name: "UI/UX Design", level: 75 },
  { name: "Agile Methodologies", level: 70 },
  { name: "Problem Solving", level: 90 },
];

const SkillProgressBar = ({ skill }: { skill: Skill }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="font-medium">{skill.name}</span>
      <span className="text-sm text-foreground/70">{skill.level}%</span>
    </div>
    <Progress value={skill.level} className="h-2 bg-secondary/70" indicatorClassName="bg-gradient-to-r from-primary to-accent" />
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 tracking-tight">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-10" />
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-foreground/70 max-w-2xl mb-12">
            I've developed a diverse set of skills throughout my academic and personal projects. Here's a breakdown of my technical capabilities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedSection delay={300}>
            <Card className="h-full backdrop-blur-sm bg-secondary/30 border-secondary/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Frontend Development</h3>
                {frontendSkills.map((skill, index) => (
                  <SkillProgressBar key={index} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <Card className="h-full backdrop-blur-sm bg-secondary/30 border-secondary/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Backend Development</h3>
                {backendSkills.map((skill, index) => (
                  <SkillProgressBar key={index} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={700}>
            <Card className="h-full backdrop-blur-sm bg-secondary/30 border-secondary/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Other Skills</h3>
                {otherSkills.map((skill, index) => (
                  <SkillProgressBar key={index} skill={skill} />
                ))}
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
