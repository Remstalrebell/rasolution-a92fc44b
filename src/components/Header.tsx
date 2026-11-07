import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, Menu, X } from "lucide-react";
import logoUrl from "@/assets/rasolution-logo.png";

const navLinks: { label: string; href: string; highlight?: boolean }[] = [
  { label: "Leistungen", href: "#services" },
  { label: "Mobilität", href: "/mobilitaetsmanagement" },
  { label: "0,25-%-Rechner", href: "/mobilitaetsmanagement#rechner", highlight: true },
  { label: "Marketing", href: "/marketing" },
  { label: "Ratgeber", href: "/ratgeber" },
  { label: "Über uns", href: "#about" },
  { label: "Warum wir", href: "#why" },
  { label: "Kontakt", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/")) {
      const [path, hash] = href.split("#");
      if (hash && window.location.pathname === path) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
      navigate(href);
      return;
    }
    if (window.location.pathname !== "/") { navigate("/" + href); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-[4.5rem]">
        <a href="/" className="flex items-center" aria-label="Rasolution">
          <img src={logoUrl} alt="Rasolution – Fleetmanagement, E-Mobility, Digital, Security" className="h-10 max-h-10 w-auto object-contain bg-transparent" loading="eager" decoding="async" />
        </a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={l.highlight
                ? "inline-flex items-center gap-1 whitespace-nowrap text-sm font-bold text-primary hover:opacity-80 transition-opacity duration-200"
                : "whitespace-nowrap text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200"}
            >
              {l.highlight && <Calculator size={14} />}
              {l.label}
            </button>
          ))}
          <Button variant="hero" size="lg" className="whitespace-nowrap" onClick={() => handleNav("#contact")}>
            Erstgespräch vereinbaren
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-b border-border">
          <nav className="container flex flex-col gap-4 py-6">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className={`inline-flex items-center gap-2 text-left text-base transition-colors ${l.highlight ? "font-semibold text-primary" : "font-medium text-muted-foreground hover:text-foreground"}`}
              >
                {l.highlight && <Calculator size={16} />}
                {l.label}
              </button>
            ))}
            <Button variant="hero" size="lg" onClick={() => handleNav("#contact")} className="mt-2">
              Erstgespräch vereinbaren
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
