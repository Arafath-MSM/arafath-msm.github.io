import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ChevronRight, MapPin } from "lucide-react";

const experiences = [
  {
    id: "grand-compass",
    company: "Grand Compass Holding LLC",
    role: "Software Engineer",
    period: "Nov 2025 - Present",
    location: "Abu Dhabi, UAE",
    stack: ["PHP", "WordPress", "Shopify", "MySQL", "Python", "React.js"],
    highlights: [
      "Designed and maintained a centralized e-commerce ecosystem powering 5+ internal brand websites including UniqGold, UniqWatch, UniqBags, WHIFF, and YAZ & Co.",
      "Built custom themes, plugins, and PHP modules for product catalogs, loyalty features, and gift card workflows across WordPress and Shopify stores.",
      "Automated product, order, and customer sync pipelines with MySQL and CSV/Matrixify processes, cutting manual operations by around 70%.",
      "Improved regional performance by tuning hosting, SSL, CDN, and DNS setups across Hostinger, Bluehost, and UAE-based servers.",
      "Supported ERP modules in Python and React.js, plus CRM workflow automation in Freshworks and Tidio for lead tracking and customer support.",
    ],
  },
  {
    id: "fydblock",
    company: "Fydblock",
    role: "Software Engineer",
    period: "May 2023 - Nov 2025",
    location: "Dubai, UAE",
    stack: ["React.js", "Spring Boot", "Laravel", "October CMS", "WordPress"],
    highlights: [
      "Contributed heavily to Karstation, a vehicle service and invoice platform, across frontend modules and API integration using React, Java, and Spring Boot.",
      "Implemented real-time updates with Kafka and WebSockets, improving system responsiveness and overall day-to-day usability.",
      "Resolved 50+ frontend and backend issues, strengthening stability and improving the product experience for business users.",
      "Built and optimized full-stack features for Mojo Homes and Franco Web, including listings, admin workflows, SEO improvements, and responsive UI behavior.",
      "Worked closely with QA, backend, and UI teams in Agile sprints to deliver production-ready releases on schedule.",
    ],
  },
  {
    id: "codelantic",
    company: "Codelantic (Pvt) Ltd",
    role: "Associate Software Engineer",
    period: "Dec 2022 - May 2023",
    location: "Colombo, Sri Lanka",
    stack: ["Laravel", "PHP", "WordPress", "Bootstrap", "MySQL"],
    highlights: [
      "Contributed to the company's Laravel website with backend logic, API creation, Blade templates, routing, and authentication improvements.",
      "Optimized queries and fixed session-handling issues, improving backend performance and making content workflows more reliable.",
      "Delivered frontend and backend enhancements for CHHCA UK and Ezhuna, including responsiveness, validation, and legacy PHP cleanup.",
      "Reduced crashes and inconsistent page behavior by rewriting unstable PHP scripts and improving form validation logic.",
    ],
  },
  {
    id: "codelantic-intern",
    company: "Codelantic (Pvt) Ltd",
    role: "Intern Software Engineer",
    period: "Jun 2022 - Dec 2022",
    location: "Colombo, Sri Lanka",
    stack: ["PHP", "Laravel", "React", "MySQL"],
    highlights: [
      "Contributed to the Codelantic official website using Laravel and React, supporting UI integration, reusable components, and backend-driven content updates.",
      "Worked on Ilford BID with PHP, Laravel, and MySQL, helping deliver business-focused web features and stable data handling.",
      "Assisted senior engineers with debugging, testing, and feature refinements, improving reliability across internal and client-facing deliverables.",
      "Strengthened my practical foundation in full-stack development by collaborating on production tasks, database work, and day-to-day issue resolution.",
    ],
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);

  const currentExperience =
    experiences.find((item) => item.id === activeExperience) ?? experiences[0];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Briefcase className="h-4 w-4" />
              Work Experience
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Where I&apos;ve <span className="bg-hero-gradient bg-clip-text text-transparent">Worked</span>
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              A snapshot of the teams, products, and platforms I&apos;ve helped build across e-commerce, ERP, and CRM systems.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <div className="flex flex-col gap-2 border-l border-border/60 pl-4">
              {experiences.map((experience) => {
                const isActive = experience.id === currentExperience.id;

                return (
                  <button
                    key={experience.id}
                    onClick={() => setActiveExperience(experience.id)}
                    className={`relative rounded-r-lg px-4 py-4 text-left transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`absolute left-[-17px] top-0 h-full w-1 rounded-full ${
                        isActive ? "bg-primary" : "bg-transparent"
                      }`}
                    />
                    <div className="font-semibold">{experience.company}</div>
                    <div className="mt-1 text-sm">{experience.role}</div>
                  </button>
                );
              })}
            </div>

            <Card className="p-8 bg-card-gradient backdrop-blur-sm border-border/50 shadow-medium">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">
                    {currentExperience.role}{" "}
                    <span className="bg-hero-gradient bg-clip-text text-transparent">
                      @ {currentExperience.company}
                    </span>
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground">{currentExperience.period}</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {currentExperience.location}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {currentExperience.stack.map((item) => (
                  <Badge key={item} variant="outline" className="border-border/50 px-3 py-1">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 space-y-4">
                {currentExperience.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-muted-foreground leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
