import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import karUIImage from "@/assets/kar_ui.png";
import resturentUIImage from "@/assets/restaurant .png";
import ecommerUIImage from "@/assets/e-commerce-franco.png";
import UEMSUIImage from "@/assets/UEMS.png";
import travelUIImage from "@/assets/Travel-app.png";
import foodDUIImage from "@/assets/foodD.png";
import resturentUIUXUIImage from "@/assets/restarrent-ui-ux.png";
import textofiaUIImage from "@/assets/textofia.png";
import bmiCalculatorUIImage from "@/assets/BMI calculator.png";
import mojoHomesUIImage from "@/assets/mojo-homes.png";
import chenaiHolisticHomeCareUIImage from "@/assets/chennai.png";
import mojoHomeUIUXUIImage from "@/assets/mojo-ui-ux.png";
import ecommasUIImgage from "@/assets/ecomaas.png";
import NemraUIImage from "@/assets/Nemra.png";
import ilfordUIImage from "@/assets/ilford.png";
import uniqgoldUIImage from "@/assets/uniqgold.png";
import gchErpUIImage from "@/assets/gch-erp.png";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const INITIAL_COUNT = 6;
  const LOAD_STEP = 6;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const isLinkAvailable = (url: string) => Boolean(url && url.trim() !== "" && url !== "#");

  const projects = [
    
    {
      id: 1,
      title: "Karstation Web App",
      description: "Full-stack vehicle service and invoice management system",
      image: karUIImage,
      category: "web",
      technologies: ["React.js", "Spring Boot", "MySQL", "AWS"],
      liveUrl: "https://qakarvendor.itaffix.com/login",
      githubUrl: "https://github.com/Arafath-MSM/kar_ui",
      featured: false
    },
    {
      id: 2,
      title: "Food Delivery App",
      description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
      image: foodDUIImage,
      category: "mobile",
      technologies: ["Flutter", "Dart", "Firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/Arafath-MSM/foodD_User",
      featured: true
    },
    {
      id: 3,
      title: "Restaurant-UI-UX-Light-Dark-Theme ",
      description: "Restaurant UI/UX with light and dark theme.",
      image: resturentUIUXUIImage,
      category: "design",
      technologies: ["Figma", "Adobe CC", "Brand Strategy"],
      liveUrl: "#",
      githubUrl: "https://github.com/Arafath-MSM/Restaurant-UI-UX-Light-Dark-Theme",
      featured: false
    },
    {
      id: 4,
      title: "Restaurant Website",
      description: "Elegant restaurant website with online reservations, menu management, and customer reviews.",
      image: resturentUIImage,
      category: "web",
      technologies: ["React.js", "Dot Net", "SQL Server"],
      liveUrl: "#",
      githubUrl: "https://github.com/Arafath-MSM/Yarl-Vide-ui",
      featured: false
    },
    {
      id: 5,
      title: "University Event Management System",
      description: "Secure university event management system with event creation, registration, and management features.",
      image: UEMSUIImage,
      category: "web",
      technologies: ["React", "TypeScript", "php", "MySQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/Arafath-MSM/University-Event-Management-system",
      featured: true
    },
    {
      id: 6,
      title: "Travel App",
      description: "Travel app with booking and payment integration.",
      image: travelUIImage,
      category: "mobile",
      technologies: ["Flutter", "Dart", "Firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/Arafath-MSM/Travel-App",
      featured: true
    },
    {
      id: 7,
      title: "Textofia Web",
      description: "Textofia platform consists core text analytics, a digital content conversion pipeline and domain specific solutions with generative AI.",
      image: textofiaUIImage,
      category: "web",
      technologies: ["React.js", "Laravel", "MySQL"],
      liveUrl: "https://textofia.com/",
      githubUrl: "https://github.com/Arafath-MSM/textofia",
      featured: true
    },
    {
      id: 8,
      title: "BMI calculator app",
      description: "BMI calculator app with BMI calculation and BMI category.",
      image: bmiCalculatorUIImage,
      category: "mobile",
      technologies: ["Flutter", "Dart", "Firebase"],
      liveUrl: "#",
      githubUrl: "https://github.com/Arafath-MSM/BMI-Calculator",
      featured: true
    },
    {
      id: 9,
      title: "Mojo Homes ",
      description: "Mojo Homes is a real estate company that provides a platform for buying and selling properties.",
      image: mojoHomesUIImage,
      category: "web",
      technologies: ["PHP", "Octobercms", "MySQL"],
      liveUrl: "https://dev.mojohomes.com.au/",
      githubUrl: "#",
      featured: false
    },
    {
      id: 10,
      title: "Chenai Holistic Home Care ",
      description: "Chenai Holistic Home Care is a home care company that provides a platform for hiring home care services.",
      image: chenaiHolisticHomeCareUIImage,
      category: "web",
      technologies: ["PHP", "wordpress", "HTML", "CSS", "JavaScript" , "mysql"],
      liveUrl: "https://www.chhca.co.uk/",
      githubUrl: "#",
      featured: false
    },
    {
      id: 11,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with advanced filtering, payment integration, and admin dashboard.",
      image: ecommerUIImage,
      category: "web",
      technologies: ["PHP", "Wordpress", "MySQL", "Stripe"],
      liveUrl: "https://www.franco.lk/",
      githubUrl: "#",
      featured: true
    },
    {
      id: 12,
      title: "Mojo Home UI Design",
      description: "Mojo Home UI Design is a UI design for a home care company.",
      image: mojoHomeUIUXUIImage,
      category: "design",
      technologies: ["Figma", "UI/UX", "user Experience"],
      liveUrl: "https://dev.mojohomes.com.au/",
      githubUrl: "#",
      featured: false
    },
    {
      id: 13,
      title: "Ecomaas Web",
      description: "Marketing site for a multichannel e-commerce platform",
      image: ecommasUIImgage,
      category: "web",
      technologies: ["React", "Laravel", "SCSS", "MySQL"],
      liveUrl: "https://www.ecomaas.co.uk/",
      githubUrl: "#",
      featured: false
    },
    {
      id: 14,
      title: "Nemra Properties",
      description: "FULLY FLEDGED property development and construction firm",
      image: NemraUIImage,
      category: "web",
      technologies: ["PHP", "Wordpress", "MySQL", "Elementor"],
      liveUrl: "https://www.nemra.lk/",
      githubUrl: "#",
      featured: false
    },
    {
      id: 15,
      title: "Ilforbid uk ",
      description: "Ilford is a lively, vibrant town centre offering a mix of shopping, dining, entertainment, and unique independent stores",
      image: ilfordUIImage,
      category: "web",
      technologies: ["PHP", "Wordpress", "MySQL", "Custom Themes"],
      liveUrl: "https://www.ilfordbid.com/",
      githubUrl: "#",
      featured: false
    },
    {
      id: 16,
      title: "Uniqgold UAE ",
      description: "Uniqgold is a multi-brand eCommerce platform managing five different websites across categories such as gold & jewelry, bags, and perfumes. The system delivers seamless shopping experiences with centralized management across all brands.",
      image: uniqgoldUIImage,
      category: "web",
      technologies: ["PHP", "Wordpress","Shopify", "MySQL", "Custom Themes & Plugins"],
      liveUrl: "https://uniqgold.ae/",
      githubUrl: "#",
      featured: false
    },
    {
      id: 17,
      title: "GCH ERP ",
      description: "Currently working on an ERP system built using the Frappe Framework, focused on streamlining business operations and improving data management across departments. The system integrates key modules such as sales, inventory, customer management, reporting, and property management to ensure efficient workflow automation.",
      image: gchErpUIImage,
      category: "web",
      technologies: ["Python", "Django","React", "MySQL", "Akamai Cloud"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },

  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "UI/UX Design" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  useEffect(() => {
    setVisibleCount(INITIAL_COUNT);
  }, [filter]);

  return (
    <section id="portfolio" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="bg-hero-gradient bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A showcase of projects that demonstrate my skills and passion for creating exceptional digital experiences
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={filter === category.id ? "default" : "outline"}
                  onClick={() => setFilter(category.id)}
                  className="transition-all duration-300 hover:scale-105"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden bg-card-gradient backdrop-blur-sm border-border/50 shadow-soft hover:shadow-strong transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      {isLinkAvailable(project.liveUrl) ? (
                        <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform duration-200" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Open live preview">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary" className="transition-transform duration-200 opacity-60" disabled title="Preview link not available">
                          <Eye className="h-4 w-4 mr-2" />
                          Preview
                        </Button>
                      )}
                      {isLinkAvailable(project.githubUrl) ? (
                        <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:scale-110 transition-all duration-200" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View source code">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="border-white/20 text-white transition-all duration-200 opacity-60" disabled title="Code link not available">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-border/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    {isLinkAvailable(project.liveUrl) ? (
                      <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Open live preview">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" className="p-2 opacity-50" disabled title="Preview link not available">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                    {isLinkAvailable(project.githubUrl) ? (
                      <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/10" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View source code">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" variant="ghost" className="p-2 opacity-50" disabled title="Code link not available">
                        <Github className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            {hasMore ? (
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all duration-300"
                onClick={() => setVisibleCount((c) => Math.min(c + LOAD_STEP, filteredProjects.length))}
              >
                View More Projects
              </Button>
            ) : (
              filteredProjects.length > INITIAL_COUNT && (
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-all duration-300"
                  onClick={() => setVisibleCount(INITIAL_COUNT)}
                >
                  Show Less
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;