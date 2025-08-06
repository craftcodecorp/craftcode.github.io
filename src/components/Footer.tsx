import { Button } from "@/components/ui/button";
import { 
  Linkedin, 
  Mail, 
  MessageSquare,
  ExternalLink 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon_white.ico" alt="CraftCode Logo" className="w-8 h-8" />
              <h3 className="text-2xl font-bold">CraftCode</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Tecnologia com propósito. Soluções com impacto.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <Mail size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                <MessageSquare size={20} />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#solutions" className="hover:text-primary-foreground transition-colors">
                  Sistemas Corporativos
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-primary-foreground transition-colors">
                  Blockchain & Web3
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-primary-foreground transition-colors">
                  Business Intelligence
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-primary-foreground transition-colors">
                  IA Aplicada
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-primary-foreground transition-colors">
                  Modernização
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-primary-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary-foreground transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-foreground transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>contato@craftcode.com.br</p>
              <p>linkedin.com/company/craftcodebr</p>
              <div className="pt-2">
                <Button variant="secondary" size="sm" className="group">
                  WhatsApp
                  <MessageSquare className="group-hover:scale-110 transition-transform" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Highlight */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="font-semibold mb-2">Conheça o CardápioFácil.online</h4>
              <p className="text-primary-foreground/80">
                Planejamento de refeições automatizado via WhatsApp
              </p>
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              className="mt-4 md:mt-0 group"
              onClick={() => window.open('https://cardapiofacil.online', '_blank')}
            >
              Visitar produto
              <ExternalLink className="group-hover:scale-110 transition-transform" size={16} />
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 CraftCode. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-primary-foreground/60 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;