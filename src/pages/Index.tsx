import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Experience from "@/components/Portfolio/Experience";
import Skills from "@/components/Portfolio/Skills";
import Portfolio from "@/components/Portfolio/Portfolio";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
