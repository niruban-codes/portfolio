import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Facebook, Twitter, Youtube, Mail } from "lucide-react";

const skillTags = [
  "WEB DESIGN", "APP DESIGN", "DEVELOPMENT", "WEB FLOW", "BRANDING"
];

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Skills Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 pb-16 border-b border-primary-foreground/20">
          {skillTags.map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-primary-foreground/20 transition-colors cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Let's work
              <br />
              <span className="text-accent">together</span>
            </h2>
            
            <Card className="bg-primary-foreground/5 border-primary-foreground/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="John"
                        className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe"
                        className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email"
                      placeholder="john@example.com"
                      className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>alex.johnson@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  </div>
                  <span>Available for freelance work</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Follow me</h3>
              <div className="flex gap-4">
                <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/60 text-sm">
                © 2024 Alex Johnson. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;