import { Button } from "@/components/ui/button";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import profileImage from "@/assets/Arafath-profile.png";
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
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-0">
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

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-10 animate-fade-in lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              I&apos;m{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Arafath MSM
              </span>
            </h1>

            <h2 className="mb-6 text-2xl font-light text-muted-foreground md:text-3xl">
              <span>{displayText}</span>
              <span className="ml-1 border-r-2 border-muted-foreground animate-pulse">&nbsp;</span>
            </h2>

            <p className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0 mx-auto">
              I build scalable web and mobile applications with clean code and modern design, turning ideas into seamless digital experiences.
            </p>

            <div className="mb-16 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
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

            <div className="animate-bounce lg:justify-start flex justify-center">
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

          <div className="relative order-first mx-auto flex w-full justify-center lg:order-last">
            <div className="absolute h-60 w-60 rounded-full bg-hero-gradient opacity-20 blur-3xl sm:h-72 sm:w-72 md:h-[28rem] md:w-[28rem]" />
            <div className="relative rounded-full bg-hero-gradient p-2 shadow-strong animate-photo-drift will-change-transform md:p-3">
              <div className="rounded-full bg-background/80 p-2.5 backdrop-blur-sm sm:p-3 md:p-4">
                <img
                  src={profileImage}
                  alt="Portrait of Arafath MSM"
                  className="h-56 w-56 rounded-full object-cover object-top sm:h-64 sm:w-64 md:h-[26rem] md:w-[26rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
