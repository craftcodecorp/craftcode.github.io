import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Brain, 
  Blocks, 
  TrendingUp 
} from "lucide-react";
import { LazyLoad } from "@/components/ui/lazy-load";

const solutions = [
  {
    icon: Code2,
    title: "Sistemas Corporativos",
    description: "Plataformas web, integrações e APIs para empresas que precisam operar com performance, segurança e previsibilidade.",
    features: ["Arquitetura escalável", "APIs modernas", "Processos críticos"]
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    description: "Projetos Web3, pagamentos digitais e contratos inteligentes com foco em viabilidade técnica e segurança.",
    features: ["Smart contracts", "Pagamentos digitais", "Tokenização"]
  },
  {
    icon: Brain,
    title: "IA Aplicada",
    description: "Automações, assistentes e análises preditivas que reduzem trabalho manual e aceleram decisões.",
    features: ["Machine Learning", "Automação inteligente", "Análise preditiva"]
  },
  {
    icon: TrendingUp,
    title: "Modernização de Sistemas",
    description: "Evolução de sistemas legados com menor risco, arquitetura atualizada e experiência mais simples para usuários.",
    features: ["Migração segura", "APIs RESTful", "UX moderna"]
  },
  {
    icon: Database,
    title: "Business Intelligence",
    description: "Dashboards e pipelines de dados para transformar operação, vendas e produto em indicadores acionáveis.",
    features: ["Dashboards em tempo real", "Data visualization", "Analytics avançados"]
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossas Soluções
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Planejamos, construímos e modernizamos produtos digitais com foco em impacto mensurável, manutenção simples e evolução contínua.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <LazyLoad 
                key={index} 
                className="h-full"
                threshold={0.1}
                rootMargin="200px"
              >
                <Card 
                  className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-border bg-white shadow-medium h-full"
                >
                  <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col h-full">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-secondary/90 transition-colors shadow-md">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 sm:mb-4">
                      {solution.title}
                    </h3>
                    
                    <p className="text-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {solution.description}
                    </p>
                    
                    <ul className="space-y-2 mt-auto">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs sm:text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </LazyLoad>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 max-w-xl mx-auto">
          <div className="bg-gradient-to-r from-background to-muted p-6 md:p-8 rounded-xl border border-border/50 shadow-md">
            <p className="text-lg md:text-xl text-foreground font-medium mb-4 md:mb-6">
              Precisa de uma solução personalizada?
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact" aria-label="Vamos conversar sobre seu projeto - Ir para formulário de contato">
                Vamos conversar sobre seu projeto
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
