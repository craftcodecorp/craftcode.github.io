import PageLayout from "@/components/PageLayout";
import { DiagnosticCta, PageHero, SectionHeader } from "@/components/PageSections";
import { solutions } from "@/lib/repositioning-content";
import { Card, CardContent } from "@/components/ui/card";
import { TrackedRouterLink } from "@/components/TrackedLink";

const Solucoes = () => (
  <PageLayout path="/solucoes">
    <PageHero
      eyebrow="Soluções"
      title="Tecnologia aplicada à eficiência, integração e decisão."
      description="IA aplicada, automação, dados, integrações e sistemas sob medida para empresas que precisam operar melhor antes de crescer com mais complexidade."
      primaryLocation="solutions_page_hero"
      imageSrc="/images/visuals/page-solucoes-portfolio.png"
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Frentes de atuacao"
          title="Escolhemos a tecnologia a partir do problema de negócio."
          description="Nem toda empresa precisa de um sistema novo. Muitas precisam integrar melhor o que ja tem, automatizar rotinas ou organizar dados antes de aplicar IA."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const href = solution.slug.includes("#") ? `/${solution.slug}` : `/${solution.slug}`;
            return (
              <Card key={solution.title} id={solution.slug.split("#")[1]} className="bg-white rounded-lg border-border shadow-soft">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">{solution.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">{solution.description}</p>
                  <div className="space-y-2 mb-5">
                    {solution.examples.map((example) => (
                      <p key={example} className="text-sm text-foreground/80">• {example}</p>
                    ))}
                  </div>
                  <TrackedRouterLink to={href} eventLabel={`Detalhe ${solution.title}`} eventLocation="solutions_page" className="text-secondary font-semibold hover:text-primary">
                    Ver detalhes
                  </TrackedRouterLink>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

    <DiagnosticCta location="solutions_page_cta" />
  </PageLayout>
);

export default Solucoes;
