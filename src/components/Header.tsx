import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-lg border-b border-border z-50 h-14 md:h-16">
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-1 md:gap-2">
            <img 
              src="/favicon.ico" 
              alt="CraftCode Logo" 
              width={20} 
              height={20} 
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" 
              loading="eager" 
            />
            <span className="text-lg md:text-2xl font-bold text-primary">CraftCode</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Menu de navegação principal">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Início
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Sobre
            </a>
            <a 
              href="#solutions" 
              className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Soluções
            </a>
            <a 
              href="#products" 
              className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Produtos
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Contato
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="lg"
              asChild
            >
              <a href="#contact">Fale Conosco</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden min-h-11 min-w-11 p-2 rounded-md hover:bg-accent transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`md:hidden py-2 border-t border-border bg-background transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          role="navigation"
          aria-label="Menu de navegação móvel"
        >
          <nav className="flex flex-col">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors py-3 px-2 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-sm sm:text-base md:text-lg font-medium">Início</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors py-3 px-2 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-sm sm:text-base md:text-lg font-medium">Sobre</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <a 
              href="#solutions" 
              className="text-foreground hover:text-primary transition-colors py-3 px-2 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-sm sm:text-base md:text-lg font-medium">Soluções</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <a 
              href="#products" 
              className="text-foreground hover:text-primary transition-colors py-3 px-2 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-sm sm:text-base md:text-lg font-medium">Produtos</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors py-3 px-2 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-sm sm:text-base md:text-lg font-medium">Contato</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <div className="p-2">
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full justify-center text-xs"
                asChild
              >
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Fale Conosco
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
