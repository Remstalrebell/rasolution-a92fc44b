const Footer = () => (
  <footer className="py-8 border-t border-border/10" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm" style={{ color: "hsl(var(--hero-muted))" }}>
      <p>© {new Date().getFullYear()} Ralf Schmidt · Rasolution.io</p>
      <p>Fuhrparkmanagement mit System.</p>
    </div>
  </footer>
);

export default Footer;
