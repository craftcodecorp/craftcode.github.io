import PageLayout from "@/components/PageLayout";
import { DiagnosticCta, PageHero, SectionHeader } from "@/components/PageSections";
import { serviceDecisionContent, solutionBySlug } from "@/lib/repositioning-content";

const CheckList = ({ items }: { items: readonly string[] }) => (
  <ul className="space-y-3 text-sm text-muted-foreground">
    {items.map((item) => (
      <li key={item} className="flex gap-3 leading-relaxed">
        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

type ServicePageProps = {
  slug: "ia-aplicada" | "automacao-processos" | "dados-bi" | "sistemas-sob-medida" | "integracao-sistemas";
  path: string;
  eyebrow: string;
  title: string;
  description: string;
  premise: string;
};

const serviceHeroImages: Record<ServicePageProps["slug"], string> = {
  "ia-aplicada": "/images/visuals/service-ia-aplicada.png",
  "automacao-processos": "/images/visuals/service-automacao-processos.png",
  "integracao-sistemas": "/images/visuals/service-integracao-sistemas.png",
  "dados-bi": "/images/visuals/service-dados-bi.png",
  "sistemas-sob-medida": "/images/visuals/service-sistemas-sob-medida.png",
};

const ServicePage = ({ slug, path, eyebrow, title, description, premise }: ServicePageProps) => {
  const solution = solutionBySlug(slug)!;
  const decisionContent = serviceDecisionContent[slug];

  return (
    <PageLayout path={path}>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryLocation={`${slug}_hero`}
        primaryLabel="Agendar diagnóstico da operação"
        imageSrc={serviceHeroImages[slug]}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader title={premise} description={solution.description} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border border-border rounded-lg bg-white p-6 shadow-soft">
              <h3 className="text-2xl font-bold text-primary mb-5">Aplicações práticas</h3>
              <CheckList items={solution.examples} />
            </div>
            <div className="border border-border rounded-lg bg-muted/30 p-6">
              <h3 className="text-2xl font-bold text-primary mb-5">Benefícios esperados</h3>
              <CheckList items={solution.benefits} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeader
            title="Quando faz sentido investir nisso"
            description="A decisão fica mais segura quando os sinais, pré-requisitos e impactos esperados estão claros antes da implementação."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-4">Sinais na operação</h3>
              <CheckList items={decisionContent.signals} />
            </div>
            <div className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-4">Pré-requisitos</h3>
              <CheckList items={decisionContent.prerequisites} />
            </div>
            <div className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-4">Exemplos por contexto</h3>
              <CheckList items={decisionContent.sectors} />
              <p className="mt-5 text-sm text-foreground/80">
                O diagnóstico define escopo, dependências, riscos técnicos e caminho de adoção com a equipe.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-background p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Riscos e limites que precisam entrar na decisão</h2>
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
