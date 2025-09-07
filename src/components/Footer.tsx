import { Instagram ,Whatsapp,Discord, Chess }  from "@/components/icons";
//import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    QuickNavigation: [
      { name: "Home", href: "/" },
       { name: "Team", href: "/team" },
      
    
    ],
    community: [
      
      { name: "Discord", href: "https://discord.com/invite/Edtgnxnc37" },
      { name: "Instagram", href: "https://www.instagram.com/enpassant.abesec/" },
      { name: "Chess.com", href: "https://www.chess.com/club/en-passant-abesec" },
      { name: "Whatsapp", href: "https://chat.whatsapp.com/GacQW0FosO85mOoAsakSCZ" },
    ],
  };
   
  const socialLinks = [
    { icon: Discord, href: "https://discord.com/invite/Edtgnxnc37", label: "Discord" },
    { icon: Instagram, href: "https://www.instagram.com/enpassant.abesec/", label: "Instagram" },
    { icon: Whatsapp, href: "https://chat.whatsapp.com/GacQW0FosO85mOoAsakSCZ", label: "Whatsapp" },
     ];

  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-x-6 gap-y-6 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 pr-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-11 h-11 rounded-full overflow-hidden">
                <img
                  src="/assets/images/logo.png"
                  alt="En Passant_logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-3xl text-foreground">
              En Passant
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
            The ABESEC Chess Forum
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-9 h-9 bg-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* QuickNavigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.QuickNavigation.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 pb-4">
  <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-4 text-sm">
    <div className="text-muted-foreground">
      
      <p>
        © 2025 <span className="font-semibold text-foreground">
        En Passant
Chess Forum</span>
      </p>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-4">
    
    </div>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
