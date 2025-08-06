import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Target, Users, Zap } from "lucide-react";

import { LazyLoad } from "@/components/ui/lazy-load";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden" 
      style={{ 
        backgroundImage: 'url("/leftbg.jpg")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center left' 
      }}
      data-webp-bg="/images/webp/leftbg.webp"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-muted/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div className="flex items-start bg-background/50 p-3 rounded-lg border border-border/30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <Target className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Foco em Resultado</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Cada linha de código tem propósito</p>
                </div>
              </div>
              
              <div className="flex items-start bg-background/50 p-3 rounded-lg border border-border/30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Excelência Técnica</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Qualidade nunca é negociável</p>
                </div>
              </div>
              
              <div className="flex items-start bg-background/50 p-3 rounded-lg border border-border/30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Colaboração</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Seu sucesso é nosso sucesso</p>
                </div>
              </div>
              
              <div className="flex items-start bg-background/50 p-3 rounded-lg border border-border/30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Inovação</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Sempre um passo à frente</p>
                </div>
              </div>
            </div>

            <Button variant="default" size="lg">
              Conheça nossa história
            </Button>
          </div>

          {/* Founder Highlight */}
          <div>
            <Card className="shadow-large border-border bg-white">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="text-center">
                  {/* Avatar placeholder - we could generate this */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-primary rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-white">IC</span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">
                    Ítalo Castilho
                  </h3>
                  <p className="text-secondary font-medium mb-3 sm:mb-4">
                    Fundador & CTO
                  </p>
                  
                  <p className="text-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Mais de 20+ anos de experiência em fintechs, blockchain e sistemas críticos. 
                    Especialista em arquitetura de software e Business Intelligence, 
                    com paixão por transformar ideias em soluções robustas e escaláveis.
                  </p>
                  
                  {/* Expertise badges */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-2 sm:px-3 py-1 bg-secondary/20 text-secondary font-medium rounded-full text-xs sm:text-sm">
                      Fintech
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-secondary/20 text-secondary font-medium rounded-full text-xs sm:text-sm">
                      Blockchain
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-secondary/20 text-secondary font-medium rounded-full text-xs sm:text-sm">
                      BI & Analytics
                    </span>
                    <span className="px-2 sm:px-3 py-1 bg-secondary/20 text-secondary font-medium rounded-full text-xs sm:text-sm">
                      Sistemas Críticos
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-12 sm:mt-16 lg:mt-24 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-primary rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-lg" role="region" aria-labelledby="mission-heading">
            <h3 id="mission-heading" className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Nossa Missão</h3>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-white">
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