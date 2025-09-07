import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Monitor, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "CONTENT CREATION & PHOTOGRAPHY",
    description: "Creating authentic content and visuals that connect with people and strengthen brand presence across platforms.",
    features: ["Social Media Content", "Video Editing & Storytelling", "Photography & Visuals", "Creative Campaigns"]
  },
  {
    icon: Monitor,
    title: "TECH & DIGITAL SOLUTIONS",
    description: "Blending business and technology to design solutions that solve real world problems.",
    features: ["Website Concepts & Prototyping", "System Analysis & Documentation", "Digital Workflows & Productivity Tools", "Educational Platforms"]
  },
  {
    icon: TrendingUp,
    title: "COACHING & EDUCATION",
    description: "Guiding students and individuals toward growth through both learning and lifestyle. I focus on building knowledge, discipline, and confidence in academics and fitness.",
    features: ["Fitness Training & Workout Routines", "Motivation, Discipline & Habit Building", "Individual & Group Lessons", "Balance between Fitness, Studies & Career"]
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            WHAT I'M
            <br />
            <span className="text-accent">OFFERING</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            There are many variations of services available, but the majority focus on delivering 
            exceptional value through innovative solutions.
          </p>
          <Button className="mt-8 group">
            ALL SERVICES
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-hover transition-all duration-500 bg-gradient-card border-0">
              <CardContent className="p-8 h-full">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-between group/btn">
                    READ MORE
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;