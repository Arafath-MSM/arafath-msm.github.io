import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Globe, Database, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: ["React", "TypeScript","Laravel", "Next.js", "Vue.js", "Tailwind CSS", "SCSS"],
      color: "text-blue-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs",
      skills: ["Laravel", "Spring Boot", "PHP", "Node.js", "Python", "MySQL", "REST APIs"],
      color: "text-green-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful and user-centered experiences",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Design Systems"],
      color: "text-purple-500"
    },
    {
      icon: Zap,
      title: "Tools & Workflow",
      description: "Optimizing development process and deployment",
      skills: ["Git", "Docker", "AWS", "Vercel", "Webpack", "Jest"],
      color: "text-orange-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Leveraging modern web standards and best practices",
      skills: ["HTML5", "CSS3", "JavaScript", "Wordpress","Shopify", "Progressive Web Apps", "SEO"],
      color: "text-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications",
      skills: ["React Native", "Flutter", "Mobile UI", "App Store", "Play Store"],
      color: "text-pink-500"
    }
  ];

  const proficiencyLevels = [
    { skill: "JavaScript/TypeScript", level: 95 },
    { skill: "React/Next.js", level: 90 },
    { skill: "Java/Spring Boot", level: 80 },
    { skill: "PHP/Laravel", level: 95 },
    { skill: "UI/UX Design", level: 85 },
    { skill: "Node.js", level: 80 },
    { skill: "Python", level: 80 },
    { skill: "Flutter /Mobile Development", level: 85 },
    { skill: "Wordpress", level: 95 },
    { skill: "Shopify", level: 95 }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="bg-hero-gradient bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building exceptional digital experiences
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card-gradient backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-muted group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs border-border/50 hover:bg-primary/10 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Proficiency Levels */}
          <Card className="p-8 bg-card-gradient backdrop-blur-sm border-border/50 shadow-medium">
            <h3 className="text-2xl font-semibold mb-8 text-center">Proficiency Levels</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {proficiencyLevels.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-sm text-muted-foreground">{item.level}%</span>
                  </div>
                  <Progress 
                    value={item.level} 
                    className="h-2 bg-muted"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;