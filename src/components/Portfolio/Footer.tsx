import { Github, Linkedin, X, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Arafath-MSM", label: "GitHub" },
    { icon: Linkedin, href: "www.linkedin.com/in/arafath-msm-44420b247", label: "LinkedIn" },
    { icon: X, href: "https://x.com/MsmArafath", label: "Twitter" },
    { icon: Mail, href: "mailto:msmarafath1@email.com", label: "Email" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent mb-4">
                Arafath MSM
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Creative developer and designer passionate about crafting beautiful digital experiences 
                that make a difference.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                    title={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: "Home", id: "home" },
                  { label: "About", id: "about" },
                  { label: "Skills", id: "skills" },
                  { label: "Portfolio", id: "portfolio" },
                  { label: "Contact", id: "contact" }
                ].map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                {[
                  "Web Development",
                  "UI/UX Design",
                  "Mobile Apps",
                  "Brand Identity",
                  "Consulting"
                ].map((service, index) => (
                  <div key={index} className="text-muted-foreground">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-muted-foreground text-sm mb-4 md:mb-0">
                © 2026 Arafath MSM. All rights reserved.
              </div>
              <div className="flex items-center text-muted-foreground text-sm">
                Made with Arafath <Heart className="h-4 w-4 mx-1 text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;