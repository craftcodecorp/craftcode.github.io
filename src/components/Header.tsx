import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <OptimizedImage 
              src="/favicon.ico" 
              webpSrc="/images/webp/favicon.webp"
              alt="CraftCode Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8" 
              loadingStrategy="eager" 
            />
            <h1 className="text-2xl font-bold text-primary">CraftCode</h1>
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
              onClick={() => window.location.href = '#contact'}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`md:hidden py-4 border-t border-border transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
          role="navigation"
          aria-label="Menu de navegação móvel"
        >
          <nav className="flex flex-col">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors py-4 px-4 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-lg font-medium">Início</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-colors py-4 px-4 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-lg font-medium">Sobre</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <a 
              href="#solutions" 
              className="text-foreground hover:text-primary transition-colors py-4 px-4 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-lg font-medium">Soluções</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <a 
              href="#products" 
              className="text-foreground hover:text-primary transition-colors py-4 px-4 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-lg font-medium">Produtos</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors py-4 px-4 border-b border-border/50 flex items-center justify-between focus:outline-none focus:bg-accent/10 active:bg-accent/20 rounded-none"
              onClick={() => setIsMenuOpen(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
            >
              <span className="text-lg font-medium">Contato</span>
              <span className="text-secondary text-sm">→</span>
            </a>
            <div className="p-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full justify-center"
                onClick={() => {
                  window.location.href = '#contact';
                  setIsMenuOpen(false);
                }}
              >
                Fale Conosco
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;