import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Heart, Coffee, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: User, label: "Years Experience", value: "4+" },
    { icon: Award, label: "Projects Completed", value: "10+" },
    { icon: Heart, label: "Happy Clients", value: "5+" },
  ];

  const values = [
    "Clean & Modern Design",
    "User-Centered Approach",
    "API Integration",
    "Cloud Services",
    "DevOps Practices",
    "Performance Optimization",
    "Responsive Development",
    "Continuous Learning"
  ];

  return (
    <section id="about" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating impactful digital solutions that blend functionality and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">My Story</h3>
                <p className="text-muted-foreground leading-relaxed">
                I’m a detail-oriented software engineer with hands-on experience in full-stack development, Web development, and DevOps practices. I’ve built scalable applications using React.js, Laravel, Django, FastAPI, Spring Boot, Wordpress ,and Shopify with strong foundations in databases like MySQL, PostgreSQL, and SQL Server.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                My journey includes collaborating with startups and companies to develop real-world solutions—from full-stack service systems and ERP tools to research projects in AI, NLP, and computer vision. I believe in clean code, scalable design, and continuous learning to deliver high-quality solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">What I Value</h4>
                <div className="flex flex-wrap gap-2">
                  {values.map((value, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card-gradient backdrop-blur-sm border-border/50 shadow-medium">
                <h4 className="text-lg font-semibold mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                    <span className="text-muted-foreground">Location</span>
                    <span className="sm:text-right break-words">Colombo, Sri Lanka</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                    <span className="text-muted-foreground">Education</span>
                    <span className="sm:text-right break-words">BSC.Eng(Hons) in Computer Engineering</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                    <span className="text-muted-foreground">Languages</span>
                    <span className="sm:text-right break-words">English, Tamil, Sinhala</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1 sm:grid-cols-[120px_1fr] sm:gap-4">
                    <span className="text-muted-foreground">Interests</span>
                    <span className="sm:text-right break-words">Design, Travel, Photography</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-card-gradient backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105">
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
