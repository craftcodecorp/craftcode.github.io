import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MessageCircle, Smartphone, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { CARDAPIO_URL } from "@/lib/site-metadata";

const ProductHighlight = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Produto CraftCode
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              CardápioFácil.online
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Produto próprio da CraftCode que demonstra nossa capacidade de transformar IA, 
              automação e WhatsApp em uma experiência simples para famílias brasileiras.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 text-secondary mr-3" />
                <span className="text-foreground">Cardápios personalizados via WhatsApp</span>
              </div>
              <div className="flex items-center">
                <Smartphone className="w-5 h-5 text-secondary mr-3" />
                <span className="text-foreground">Sem necessidade de instalar aplicativo</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-secondary mr-3" />
                <span className="text-foreground">IA personalizada com foco regional</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="group"
                onClick={() => window.open(CARDAPIO_URL, '_blank', 'noopener,noreferrer')}
              >
                Visitar CardápioFácil
                <ExternalLink className="group-hover:scale-110 transition-transform" size={20} />
              </Button>
              <Link to="/cardapio-facil">
                <Button 
                  variant="outline" 
                  size="lg"
                >
                  Saber mais
                </Button>
              </Link>
            </div>
          </div>

          {/* Product Demo/Visual */}
          <div className="relative">
            <Card className="shadow-large border-border/50 bg-gradient-card overflow-hidden">
              <CardContent className="p-0">
                {/* Header mockup */}
                <div className="bg-gradient-primary p-6 text-white">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">CardápioFácil</h3>
                      <p className="text-white/80 text-sm">Online agora</p>
                    </div>
                  </div>
                </div>

                {/* Chat mockup */}
                <div className="p-6 space-y-4 bg-white min-h-[300px]">
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-foreground">
                        Olá! Sou o CardápioFácil. Vou te ajudar a planejar refeições deliciosas para sua família!
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-secondary rounded-2xl rounded-br-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-white">
                        Quero um cardápio para 4 pessoas, sem glúten
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 max-w-xs">
                      <p className="text-sm text-foreground">
                        Perfeito! Preparei um cardápio sem glúten para 4 pessoas, com lista de compras organizada.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium shadow-medium">
              100% no WhatsApp
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-medium">
              IA Brasileira
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
