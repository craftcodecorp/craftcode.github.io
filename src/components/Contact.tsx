import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin 
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Pronto para transformar sua ideia em realidade? Entre em contato e 
            descubra como podemos ajudar sua empresa a alcançar novos patamares.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-large border-border/50 bg-gradient-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Conte-nos sobre seu projeto
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <Input 
                        placeholder="Seu nome completo"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email"
                        placeholder="seu@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input 
                      placeholder="Nome da sua empresa"
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea 
                      placeholder="Conte-nos sobre seu projeto, desafios ou necessidades..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full group">
                    Enviar mensagem
                    <Send className="group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Responderemos em até 24 horas úteis
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Fale diretamente conosco
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 rounded-lg border border-border/50 hover:shadow-soft transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">Resposta rápida e direta</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg border border-border/50 hover:shadow-soft transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contato@craftcode.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg border border-border/50 hover:shadow-soft transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Linkedin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/company/craftcodebr</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Info */}
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-secondary mr-2" />
                <h4 className="font-semibold text-foreground">Base de operações</h4>
              </div>
              <p className="text-muted-foreground mb-2">
                Brasil - Atendimento remoto nacional
              </p>
              <p className="text-sm text-muted-foreground">
                Trabalhamos de forma distribuída para oferecer a melhor experiência 
                aos nossos clientes em todo o território nacional.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-primary rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-4">Próximos passos</h4>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Análise do seu projeto
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Proposta personalizada
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Reunião de alinhamento
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Início do desenvolvimento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;