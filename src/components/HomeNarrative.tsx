import { Button } from "@/components/ui/button";
import { authorityPillars, methodSteps, painPoints, sectors } from "@/lib/repositioning-content";
import { TrackedRouterLink } from "@/components/TrackedLink";

export const AuthorityBlock = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-10 items-start">
        <div>
          <p className="text-secondary font-semibold mb-3">Autoridade</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experiencia de grandes operacoes aplicada aos desafios da sua empresa.
          </h2>
        </div>
        <div>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            A CraftCode une mais de 20 anos de experiencia em sistemas criticos, dados, produtos digitais, integracoes e lideranca tecnica para criar solucoes praticas para empresas que precisam operar melhor, reduzir retrabalho e crescer com mais inteligencia.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {authorityPillars.map((pillar) => (
              <div key={pillar} className="border border-border bg-muted/30 rounded-lg p-4 font-medium text-foreground">
                {pillar}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const PainBlock = () => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mb-10">
        <p className="text-secondary font-semibold mb-3">Dores comuns</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Sua empresa ainda depende demais de planilhas, controles manuais e sistemas desconectados?
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {painPoints.map((pain) => (
          <div key={pain} className="border border-white/20 bg-white/10 rounded-lg p-5 text-white/80">
            {pain}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const MethodBlock = () => (
  <section id="method" className="py-24 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mb-14">
        <p className="text-secondary font-semibold mb-3">Metodo</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Antes da tecnologia, vem o diagnostico.</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          A melhor tecnologia e aquela que nasce de um processo entendido, prioridades claras e dados suficientes para medir impacto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {methodSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="border border-border rounded-lg p-5 bg-white shadow-soft">
              <div className="flex items-center justify-between mb-5">
                <Icon className="w-6 h-6 text-secondary" />
                <span className="text-sm font-bold text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const SectorsBlock = () => (
  <section id="sectors" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-3xl">
          <p className="text-secondary font-semibold mb-3">Setores</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tecnologia aplicada a realidade de cada operacao.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            O foco esta em empresas com operacao real, processos manuais, dados dispersos e necessidade de crescer com mais controle.
          </p>
        </div>
        <Button variant="outline" asChild>
          <TrackedRouterLink to="/setores" eventLabel="Ver setores" eventLocation="sectors_home">
            Ver setores
          </TrackedRouterLink>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {sectors.map((sector) => {
          const Icon = sector.icon;
          return (
            <div key={sector.title} className="bg-white border border-border rounded-lg p-6 shadow-soft">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{sector.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sector.description}</p>
              <div className="space-y-2">
                {sector.pains.map((pain) => (
                  <div key={pain} className="text-xs font-medium text-foreground/80">
                    {pain}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export const FinalCtaBlock = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="bg-gradient-primary rounded-lg p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quer entender onde a tecnologia e a IA podem gerar mais impacto na sua empresa?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Comece com um diagnostico para identificar gargalos, oportunidades de automacao e aplicacoes praticas de IA no seu negocio.
          </p>
        </div>
        <Button variant="secondary" size="lg" asChild>
          <TrackedRouterLink to="/diagnostico-tecnologia-ia" eventLabel="Agendar diagnostico" eventLocation="final_cta">
            Agendar diagnostico
          </TrackedRouterLink>
        </Button>
      </div>
    </div>
  </section>
);
