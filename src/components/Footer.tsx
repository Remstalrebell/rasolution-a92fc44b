const Footer = () => (
  <footer className="py-8 bg-navy border-t border-border/10">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate_light">
      <p>© {new Date().getFullYear()} Ralf Schmidt · Rasolution.io</p>
      <p>Fuhrparkmanagement mit System.</p>
    </div>
  </footer>
);

export default Footer;
