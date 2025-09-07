import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior UI Designer",
    company: "Uber Hub - Bangladesh",
    duration: "1 YEAR",
    period: "2022 - Present",
    type: "FULL TIME"
  },
  {
    role: "Product Design",
    company: "Zoom3x Digital Agency - Italy",
    duration: "2 YEARS",
    period: "2020 - 2022",
    type: "FULL TIME"
  },
  {
    role: "Webflow Team Manager",
    company: "Google Team - UK",
    duration: "2 YEARS",
    period: "2018 - 2020",
    type: "FULL TIME"
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Experience Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                EXPERIENCE
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the 
                majority have suffered alteration in some form.
              </p>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="group hover:shadow-hover transition-all duration-300 bg-gradient-card border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">{exp.role}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                      </div>
                      <div className="text-right space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {exp.type}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{exp.duration}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        {exp.period}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Case Study Section */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                CASE STUDY
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                There are many variations of passages of Lorem Ipsum available, but the 
                majority have suffered alteration in some form.
              </p>
            </div>
            
            <div className="space-y-8">
              <Card className="group hover:shadow-hover transition-all duration-500 bg-gradient-card border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-accent opacity-20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-primary/20 font-bold text-2xl">PROJECT IMAGE</div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">WEB DESIGN</Badge>
                    </div>
                    <h3 className="text-xl font-bold leading-tight">
                      Web Design for fintech payment solutions.
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A comprehensive design system for a modern fintech platform focusing 
                      on user experience and conversion optimization.
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <button className="text-sm font-medium text-accent hover:underline">
                        See Details →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-hover transition-all duration-500 bg-gradient-card border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-orange-400/40 font-bold text-2xl">MOBILE APP</div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs">MOBILE DESIGN</Badge>
                    </div>
                    <h3 className="text-xl font-bold leading-tight">
                      How to run a successful business with your partner (and stay together)
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A mobile application design focusing on partnership management 
                      and business collaboration tools.
                    </p>
                    <div className="flex justify-between items-center pt-2">
                      <button className="text-sm font-medium text-accent hover:underline">
                        See Details →
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;