import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TrackedRouterLink } from "@/components/TrackedLink";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Soluções", href: "/solucoes" },
  { label: "Integração", href: "/integracao-sistemas" },
  { label: "Setores", href: "/setores" },
  { label: "Diagnóstico", href: "/diagnostico-tecnologia-ia" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-lg border-b border-border z-50 h-14 md:h-16">
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-2" aria-label="CraftCode - página inicial">
            <img
              src="/favicon.ico"
              alt="CraftCode Logo"
              width={28}
              height={28}
              className="w-6 h-6 md:w-8 md:h-8"
              loading="eager"
            />
            <span className="text-lg md:text-2xl font-bold text-primary">CraftCode</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6" aria-label="Menu principal">
            {navItems.map((item) => (
              <TrackedRouterLink
                key={item.href}
                to={item.href}
                eventName="navigation_click"
                eventLabel={item.label}
                eventLocation="header_nav"
                className="text-sm text-foreground hover:text-secondary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
              >
                {item.label}
              </TrackedRouterLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="cta" size="lg" asChild>
              <TrackedRouterLink
                to="/diagnostico-tecnologia-ia"
                eventLabel="Solicitar diagnóstico"
                eventLocation="header"
              >
                Solicitar diagnóstico
              </TrackedRouterLink>
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen((value) => !value)}
            className="lg:hidden min-h-11 min-w-11 p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`lg:hidden py-2 border-t border-border bg-background transform transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
          aria-label="Menu movel"
          aria-hidden={!isMenuOpen}
          hidden={!isMenuOpen}
        >
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <TrackedRouterLink
                key={item.href}
                to={item.href}
                eventName="navigation_click"
                eventLabel={item.label}
                eventLocation="mobile_header_nav"
                className="text-foreground hover:text-secondary transition-colors py-3 px-2 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-base font-medium">{item.label}</span>
                <span className="text-secondary text-sm">→</span>
              </TrackedRouterLink>
            ))}
            <div className="p-2">
              <Button variant="cta" size="sm" className="w-full justify-center" asChild>
                <TrackedRouterLink
                  to="/diagnostico-tecnologia-ia"
                  eventLabel="Solicitar diagnóstico"
                  eventLocation="mobile_header"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solicitar diagnóstico
                </TrackedRouterLink>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
