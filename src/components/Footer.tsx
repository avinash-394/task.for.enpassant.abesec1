import { Instagram, Whatsapp, Discord, Chess } from "@/components/icons";
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
    {icon: Chess, href: "https://www.chess.com/club/en-passant-abesec", label: "Chess.com" },
    { icon: Instagram, href: "https://www.instagram.com/enpassant.abesec/", label: "Instagram" },
    { icon: Whatsapp, href: "https://chat.whatsapp.com/GacQW0FosO85mOoAsakSCZ", label: "Whatsapp" },
  ];

  return (
    <footer className="bg-darker-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr] gap-y-12 gap-x-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                <img
                  src="/logo.png"
                  alt="En Passant Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-2xl md:text-3xl text-foreground mt-3 md:mt-0">
                En Passant
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              The ABESEC Chess Forum
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/90 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-center md:text-left">
  <h3 className="uppercase tracking-wider text-xs font-semibold text-muted-foreground mb-4">
    Quick Navigation
  </h3>
  <ul className="space-y-3">
    <li>
      <a
        href="#opening-moves"
        className="text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        Opening Moves
      </a>
    </li>
    <li>
      <a
        href="#grandmasters"
        className="text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        Grandmasters
      </a>
    </li>
    <li>
      <a
        href="#events"
        className="text-muted-foreground hover:text-primary transition-colors duration-200"
      >
        Events
      </a>
    </li>
  </ul>
</div>

          {/* Community Links */}
          <div className="text-center md:text-left">
            <h3 className="uppercase tracking-wider text-xs font-semibold text-muted-foreground mb-4">
              Community
            </h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>
            © 2025{" "}
            <span className="font-semibold text-foreground">En Passant Chess Forum</span> • Made
            with ♟️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
