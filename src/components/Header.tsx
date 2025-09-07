import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Discord,Cross, Chess } from "./icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Team", href: "/team" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-full overflow-hidden">
              <img
                src="/assets/images/logo.png"
                alt="En Passant_logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              En Passant
            </span>
          </Link>

          {/* Center: Navigation */}
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right: CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a
                href="https://discord.gg/FJwJJEBaxd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Discord className="w-4 h-4 mr-2" />
                Discord
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="sm"
              className="bg-neon-green hover:bg-neon-green/90 shadow-neon"
            >
              <a
                href="https://www.chess.com/club/en-passant-abesec"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Chess className="w-4 h-4 mr-2" />
                Join on Chess.com
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <Cross className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
