import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@/assets/portfolio-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-secondary/30">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Available for new projects
            </div>
            
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground font-medium">Hello! I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Alex Johnson
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-px bg-gradient-accent flex-1 max-w-20"></div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-accent">
                  Product Designer
                </h2>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            I'm a UK-based design thinker, product designer, and creative strategist. 
            I specialize in creating authentic, user-centered experiences that solve real problems.
          </p>
          
          <div className="space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Product must be authentic & user-centered
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Solve pain points elegantly & efficiently
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                User testing, feedback, and validation
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download CV
            </Button>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-accent rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-gradient-card rounded-2xl p-6 shadow-card group-hover:shadow-hover transition-all duration-500">
              <img
                src={heroImage}
                alt="Alex Johnson - Product Designer"
                className="w-full h-auto rounded-xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-accent">
                <span className="text-sm font-medium">Hello</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;