
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-secondary/30 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-2 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mb-10" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <AnimatedSection delay={200}>
              <Card className="backdrop-blur-sm bg-secondary/30 border-secondary/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">My Background</h3>
                  <div className="space-y-4 text-foreground/80">
                    <p>
                      I'm Imalka Lakshitha, an undergraduate student at Sri Lanka Institute of Information Technology (SLIIT), 
                      pursuing my passion in Information Technology and Computer Science.
                    </p>
                    <p>
                      Throughout my academic journey, I've developed a strong foundation in various programming languages,
                      software development methodologies, and problem-solving techniques. My education at SLIIT has equipped me
                      with both theoretical knowledge and practical skills necessary for the ever-evolving tech industry.
                    </p>
                    <p>
                      Beyond academics, I'm passionate about creating innovative solutions that make a positive impact.
                      I enjoy tackling complex challenges and continuously expanding my skill set by exploring new
                      technologies and frameworks.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-2">
            <AnimatedSection delay={400}>
              <Card className="backdrop-blur-sm bg-secondary/30 border-secondary/50 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">BSc (Hons) in Information Technology</h4>
                      <p className="text-primary">Sri Lanka Institute of Information Technology (SLIIT)</p>
                      <p className="text-sm text-foreground/70">2021 - Present</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <Card className="backdrop-blur-sm bg-secondary/30 border-secondary/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Interests</h3>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Web Development</li>
                    <li>Mobile Application Development</li>
                    <li>Software Engineering</li>
                    <li>UI/UX Design</li>
                    <li>Data Science</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
