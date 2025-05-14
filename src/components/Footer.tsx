
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8 border-t border-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/70">
              © {new Date().getFullYear()} Imalka Lakshitha. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
