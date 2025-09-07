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
              Open to collaborations & opportunities
            </div>
            
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground font-medium">Hello! I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Nallirajah Niruban
              </h1>
              <div className="flex items-center gap-3">
                <div className="h-px bg-gradient-accent flex-1 max-w-20"></div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-accent">
                  IS Undergraduate | Entrepreneurial Thinker 
                </h2>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            I’m a Sri Lanka based undergraduate in Information Systems with experience in the
             banking industry and a passion for technology, entrepreneurship, and content creation. I focus on building meaningful ideas, inspiring people through 
             fitness and creativity, and shaping solutions that bring real impact.
          </p>
          
          <div className="space-y-4">
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
Driven to bridge technology with real world needs              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Skilled in content creation, leadership, and teamwork
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Focused on entrepreneurship & impactful solutions
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
                alt="Nallirajah Niruban - Product Designer"
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