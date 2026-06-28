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
            Experiência técnica para resolver problema real.
          </h2>
        </div>
        <div>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Mais de 20 anos em sistemas críticos, dados e produtos digitais aplicados a empresas que precisam ganhar controle, reduzir retrabalho e decidir melhor.
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
  <section className="relative overflow-hidden py-20 bg-primary text-primary-foreground">
    <img
      src="/images/visuals/dores-processos-manuais.png"
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/55" />
    <div className="absolute inset-0 bg-primary/35" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="max-w-3xl mb-10">
        <p className="text-secondary font-semibold mb-3">Dores comuns</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Planilhas demais. Sistemas de menos. Decisão no escuro.
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
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Antes da tecnologia, vem o diagnóstico.</h2>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Primeiro entendemos o processo. Depois escolhemos a tecnologia.
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
            Para empresas que operam no mundo real.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Serviços, indústria, varejo e operações físico-digitais com processos, equipe, cliente e pressão por resultado.
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
      <div className="relative overflow-hidden bg-gradient-primary rounded-lg p-8 md:p-12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <img
          src="/images/visuals/diagnostico-plano-acao.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/35" />
        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Onde tecnologia pode gerar impacto agora?
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Comece com um diagnóstico claro: gargalos, prioridades e próximos passos.
          </p>
        </div>
        <Button variant="secondary" size="lg" className="relative z-10" asChild>
          <TrackedRouterLink to="/diagnostico-tecnologia-ia" eventLabel="Agendar diagnóstico" eventLocation="final_cta">
            Agendar diagnóstico
          </TrackedRouterLink>
        </Button>
      </div>
    </div>
  </section>
);
