import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-8 border-t border-border/10" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: "hsl(var(--hero-muted))" }}>
      <p>© {new Date().getFullYear()} Rasolution</p>
      <div className="flex items-center gap-6">
        <Link to="/impressum" className="hover:text-foreground transition-colors">Impressum</Link>
        <Link to="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</Link>
      </div>
      <div className="flex items-center gap-2">
        <p>Fuhrparkmanagement mit System.</p>
        <Link to="/admin-control" className="w-2 h-2 rounded-full opacity-[0.08] hover:opacity-30 transition-opacity" aria-hidden="true" />
      </div>
    </div>
  </footer>
);

export default Footer;
