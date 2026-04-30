import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const titles = [
    "Software Engineer",
    "Full Stack Developer",
    "Web Developer",
    "Computer Engineer"
  ];

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const isComplete = displayText === currentTitle;
    const isEmpty = displayText === "";

    let delay = isDeleting ? 60 : 120;
    if (!isDeleting && isComplete) delay = 1600; // pause at full text
    if (isDeleting && isEmpty) delay = 400; // brief pause before next word

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentTitle.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentTitle) {
          setIsDeleting(true);
        }
      } else {
        const next = currentTitle.slice(0, Math.max(0, displayText.length - 1));
        setDisplayText(next);
        if (next === "") {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-5"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-16 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I'm{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Arafath MSM
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
            <span>{displayText}</span>
            <span className="border-r-2 border-muted-foreground ml-1 animate-pulse">&nbsp;</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          I build scalable web & Mobile applications with clean code and modern design, turning ideas into seamless digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection("experience")}
            >
              <Briefcase className="mr-2 h-4 w-4" />
              Work Experience
            </Button>
          </div>
          
          <div className="animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
