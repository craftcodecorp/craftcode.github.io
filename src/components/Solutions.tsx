import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Brain, 
  Blocks, 
  TrendingUp 
} from "lucide-react";

const solutions = [
  {
    icon: Code2,
    title: "Sistemas Corporativos",
    description: "Desenvolvimento de plataformas robustas e escaláveis para empresas que precisam de performance e segurança.",
    features: ["Arquitetura escalável", "APIs modernas", "Segurança enterprise"]
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    description: "Soluções em blockchain, criptomoedas, pagamentos digitais e contratos inteligentes.",
    features: ["Smart contracts", "DeFi", "Tokenização"]
  },
  {
    icon: Database,
    title: "Business Intelligence",
    description: "Dashboards inteligentes e análise de dados que geram insights acionáveis para seu negócio.",
    features: ["Dashboards em tempo real", "Data visualization", "Analytics avançados"]
  },
  {
    icon: Brain,
    title: "IA Aplicada",
    description: "Soluções de inteligência artificial para automação, predição e personalização de experiências.",
    features: ["Machine Learning", "Automação inteligente", "Análise preditiva"]
  },
  {
    icon: TrendingUp,
    title: "Modernização de Sistemas",
    description: "Migração e reestruturação de sistemas legados com tecnologias modernas e UX atualizada.",
    features: ["Migração segura", "APIs RESTful", "UX moderna"]
  }
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
            Tecnologia de ponta aplicada aos desafios reais do seu negócio. 
            Cada solução é pensada para gerar valor e impacto mensurável.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-card"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Precisa de uma solução personalizada?
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg">
            <span className="text-primary font-medium">Vamos conversar sobre seu projeto</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;