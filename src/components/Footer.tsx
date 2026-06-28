import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site-metadata";
import { TrackedAnchor, TrackedRouterLink } from "@/components/TrackedLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon_white.ico" alt="CraftCode Logo" className="w-8 h-8" />
              <h3 className="text-2xl font-bold">CraftCode</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              IA sem hype. Tecnologia com aplicação real para empresas do Vale do Paraíba.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10" asChild>
                <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Enviar email para a CraftCode">
                  <Mail size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10" asChild>
                <TrackedAnchor
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  eventLabel="WhatsApp footer"
                  eventLocation="footer"
                  aria-label="Conversar com a CraftCode pelo WhatsApp"
                >
                  <MessageSquare size={20} />
                </TrackedAnchor>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {[
                ["IA aplicada", "/ia-aplicada"],
                ["Automação de processos", "/automacao-processos"],
                ["Integração de sistemas", "/integracao-sistemas"],
                ["Dados e BI", "/dados-bi"],
                ["Sistemas sob medida", "/sistemas-sob-medida"],
                ["Consultoria técnica", "/solucoes#consultoria"],
              ].map(([label, href]) => (
                <li key={label}>
                  <TrackedRouterLink to={href} eventName="navigation_click" eventLabel={label} eventLocation="footer" className="hover:text-primary-foreground transition-colors">
                    {label}
                  </TrackedRouterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              {[
                ["Setores", "/setores"],
                ["Método", "/diagnostico-tecnologia-ia"],
                ["Sobre", "/sobre"],
                ["Conteúdos", "/conteudos"],
                ["CardapioFacil como caso", "/cardapio-facil"],
              ].map(([label, href]) => (
                <li key={label}>
                  <TrackedRouterLink to={href} eventName="navigation_click" eventLabel={label} eventLocation="footer" className="hover:text-primary-foreground transition-colors">
                    {label}
                  </TrackedRouterLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Diagnóstico</h4>
            <p className="text-primary-foreground/80 mb-4">
              Analise processos, sistemas, dados e oportunidades praticas de IA antes de investir em tecnologia.
            </p>
            <Button variant="secondary" size="sm" asChild>
              <TrackedRouterLink to="/diagnostico-tecnologia-ia" eventLabel="Agendar diagnóstico" eventLocation="footer">
                Agendar diagnóstico
              </TrackedRouterLink>
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">© 2026 CraftCode. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-primary-foreground/60 text-sm">
              <TrackedRouterLink to="/privacidade" eventName="navigation_click" eventLabel="Privacidade" eventLocation="footer_legal" className="hover:text-primary-foreground transition-colors">
                Privacidade
              </TrackedRouterLink>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Termos%20de%20Uso`} className="hover:text-primary-foreground transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
