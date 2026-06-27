import PageLayout from "@/components/PageLayout";
import { DiagnosticCta, PageHero, SectionHeader } from "@/components/PageSections";
import { serviceDecisionContent, solutionBySlug } from "@/lib/repositioning-content";

type ServicePageProps = {
  slug: "ia-aplicada" | "automacao-processos" | "dados-bi" | "sistemas-sob-medida" | "integracao-sistemas";
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  premise: string;
};

const ServicePage = ({ slug, path, eyebrow, title, description, premise }: ServicePageProps) => {
  const solution = solutionBySlug(slug)!;
  const decisionContent = serviceDecisionContent[slug];

  return (
    <PageLayout path={path}>
      <PageHero eyebrow={eyebrow} title={title} description={description} primaryLocation={`${slug}_hero`} />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader title={premise} description={solution.description} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-bold text-primary mb-5">Aplicacoes praticas</h2>
              <div className="space-y-3">
                {solution.examples.map((example) => (
                  <p key={example} className="text-foreground/80">• {example}</p>
                ))}
              </div>
            </div>
            <div className="border border-border rounded-lg bg-muted/30 p-6">
              <h2 className="text-2xl font-bold text-primary mb-5">Beneficios esperados</h2>
              <div className="space-y-3">
                {solution.benefits.map((benefit) => (
                  <p key={benefit} className="text-foreground/80">• {benefit}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Quando faz sentido investir nisso"
            description="A decisao fica mais segura quando os sinais, pre-requisitos e impactos esperados estao claros antes da implementacao."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-primary mb-4">Sinais na operacao</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {decisionContent.signals.map((item) => (
                  <li key={item} className="leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-primary mb-4">Pre-requisitos</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {decisionContent.prerequisites.map((item) => (
                  <li key={item} className="leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-primary mb-4">Exemplos por contexto</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {decisionContent.sectors.map((item) => (
                  <li key={item} className="leading-relaxed">• {item}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-foreground/80">
                O diagnostico define escopo, dependencias, riscos tecnicos e caminho de adocao com a equipe.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-background p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Riscos e limites que precisam entrar na decisao</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              {decisionContent.risks.map((item) => (
                <p key={item} className="rounded-lg bg-muted/40 p-4 leading-relaxed">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DiagnosticCta location={`${slug}_cta`} />
    </PageLayout>
  );
};

export default ServicePage;
