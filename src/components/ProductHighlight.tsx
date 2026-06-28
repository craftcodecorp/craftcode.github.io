import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, CreditCard, MessageCircle, Workflow } from "lucide-react";
import { TrackedRouterLink } from "@/components/TrackedLink";

const proofItems = [
  [MessageCircle, "WhatsApp", "Interface simples para o usuário."],
  [Bot, "IA aplicada", "Personalização ligada a uma dor real."],
  [Workflow, "Automação", "Rotina recorrente com regras claras."],
  [CreditCard, "Físico-digital", "Software, pagamento e operação conectados."],
];

const ProductHighlight = () => {
  return (
    <section id="proof" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-secondary font-semibold mb-3">Prova de aplicação</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              IA aplicada fora do discurso.
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              O CardapioFacil mostra tecnologia conectada a uma operação real: WhatsApp, automação, dados e produto digital.
            </p>

            <Button variant="outline" size="lg" className="group" asChild>
              <TrackedRouterLink to="/cardapio-facil" eventLabel="Ver caso CardapioFacil" eventLocation="proof">
                Ver caso
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </TrackedRouterLink>
            </Button>
          </div>

          <Card className="shadow-large border-border bg-white rounded-lg">
            <CardContent className="p-6 lg:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {proofItems.map(([Icon, title, description]) => (
                  <div key={String(title)} className="border border-border rounded-lg p-5">
                    <div className="w-11 h-11 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-secondary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{title as string}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description as string}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
