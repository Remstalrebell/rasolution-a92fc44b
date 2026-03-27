import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-8 border-t border-border/10" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: "hsl(var(--hero-muted))" }}>
      <p>© {new Date().getFullYear()} Ralf Schmidt · Rasolution.io</p>
      <div className="flex items-center gap-6">
        <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
        <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
      </div>
      <p>Fuhrparkmanagement mit System.</p>
    </div>
  </footer>
);

export default Footer;
