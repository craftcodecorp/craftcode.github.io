import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tecnologia que 
              <span className="text-secondary"> transforma</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A CraftCode nasceu da paixão por desenvolver soluções tecnológicas que realmente 
              fazem a diferença. Combinamos excelência técnica com visão estratégica para 
              entregar resultados que impactam o crescimento dos nossos parceiros.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Target className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Foco em Resultado</h3>
                  <p className="text-sm text-muted-foreground">Cada linha de código tem propósito</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Award className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Excelência Técnica</h3>
                  <p className="text-sm text-muted-foreground">Qualidade nunca é negociável</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Colaboração</h3>
                  <p className="text-sm text-muted-foreground">Seu sucesso é nosso sucesso</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                  <Zap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Inovação</h3>
                  <p className="text-sm text-muted-foreground">Sempre um passo à frente</p>
                </div>
              </div>
            </div>

            <Button variant="default" size="lg">
              Conheça nossa história
            </Button>
          </div>

          {/* Founder Highlight */}
          <div>
            <Card className="shadow-large border-border/50 bg-gradient-card">
              <CardContent className="p-8">
                <div className="text-center">
                  {/* Avatar placeholder - we could generate this */}
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">IC</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Ítalo Castilho
                  </h3>
                  <p className="text-secondary font-medium mb-4">
                    Fundador & CTO
                  </p>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Mais de 15 anos de experiência em fintechs, blockchain e sistemas críticos. 
                    Especialista em arquitetura de software e Business Intelligence, 
                    com paixão por transformar ideias em soluções robustas e escaláveis.
                  </p>
                  
                  {/* Expertise badges */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Fintech
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Blockchain
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      BI & Analytics
                    </span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      Sistemas Críticos
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-primary rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
            <p className="text-xl leading-relaxed text-white/90">
              "Desenvolver soluções tecnológicas sob medida que gerem valor, 
              inovação e escalabilidade para empresas que querem fazer a diferença no mundo."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;