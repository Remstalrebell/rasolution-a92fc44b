import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/10" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
    <div className="container flex flex-col gap-5 text-sm" style={{ color: "hsl(var(--hero-muted))" }}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Rasolution</p>
        <div className="flex items-center gap-6">
          <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
          <a
            href="https://www.instagram.com/rasolution.media"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
        <div className="flex items-center gap-2">
          <p>Fuhrparkmanagement mit System.</p>
          <Link to="/admin-control" className="block" style={{ width: "4px", height: "4px", backgroundColor: "currentColor", opacity: 0.1 }} aria-hidden="true" />
        </div>
      </div>
      <div className="text-center text-xs opacity-70">
        <a
          href="https://the-affiliate-code.com"
          target="_blank"
          rel="noopener noreferrer"
          className="italic tracking-wide hover:text-foreground transition-colors"
        >
          Official Partner of The Affiliate-Code
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
