// src/components/Header.jsx

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Discord, Chess } from "./icons"; // Assuming these are your custom SVG icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Effect to close the menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Effect to prevent background scrolling when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Opening Moves", href: "/" },
    { name: "Grandmasters", href: "/Grandmasters" },  
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      {/* --- Main Header Bar --- */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/60 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-lg overflow-hidden  shadow-lg transition-transform duration-300 group-hover:rotate-6">
                <img
                  src="/assets/images/logo.png"
                  alt="En Passant Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-montserrat font-extrabold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                En Passant
              </span>
            </Link>

            {/* Desktop Navigation (Centered) */}
            <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="relative font-medium text-foreground/80 hover:text-primary transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right-side Actions: Desktop CTAs + Mobile Menu Toggle */}
            <div className="flex items-center space-x-2">
              <div className="hidden sm:flex items-center space-x-2">
                <Button asChild variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10">
                  <a href="https://discord.gg/FJwJJEBaxd" target="_blank" rel="noopener noreferrer" aria-label="Join our Discord server">
                    <Discord className="w-5 h-5" />
                  </a>
                </Button>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
                  <a href="https://www.chess.com/club/en-passant-abesec" target="_blank" rel="noopener noreferrer">
                    <Chess className="w-4 h-4 mr-2" />
                    Join Club
                  </a>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(true)}
                  aria-label="Open navigation menu"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-nav-panel"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Slide-in Navigation Panel --- */}
      {/* Backdrop */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-[98] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`
        }
      />
      
      {/* Panel */}
      <aside 
        id="mobile-nav-panel"
        className={`fixed top-0 right-0 z-[99] h-full w-4/5 max-w-sm bg-background border-l border-border flex flex-col transition-transform duration-300 ease-in-out lg:hidden
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`
        }
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="font-montserrat font-bold text-lg">Menu</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <nav className="flex-grow p-6">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <li key={link.name}
                  style={{ 
                    animation: isMenuOpen ? `fadeInUp 0.3s ${index * 0.05 + 0.1}s ease-out forwards` : 'none',
                    opacity: 0,
                  }}
              >
                <Link
                  to={link.href}
                  className="block w-full text-lg font-semibold text-foreground/80 rounded-md p-3 hover:bg-muted hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-6 border-t border-border space-y-3 sm:hidden">
  <Button asChild size="lg" className="w-full" variant="outline">
    <a href="https://discord.gg/FJwJJEBaxd" target="_blank" rel="noopener noreferrer">
      <Discord className="w-5 h-5 mr-2" />
      Chat with Fellow Masters
    </a>
  </Button>
  <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
    <a href="https://www.chess.com/club/en-passant-abesec" target="_blank" rel="noopener noreferrer">
      <Chess className="w-5 h-5 mr-2" />
      Challenge the Champions
    </a>
  </Button>
</div>
      </aside>

      {/* Animation keyframes (can be moved to your global CSS file) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Header;