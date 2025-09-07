import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <h1 className="text-8xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-bold">Page not found</h2>
          <p className="text-muted-foreground leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="group">
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Return Home
              <ArrowLeft className="ml-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
