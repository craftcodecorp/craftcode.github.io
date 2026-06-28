import PageLayout from "@/components/PageLayout";
import { DiagnosticCta, PageHero, SectionHeader } from "@/components/PageSections";
import { sectors } from "@/lib/repositioning-content";

const Setores = () => (
  <PageLayout path="/setores">
    <PageHero
      eyebrow="Setores"
      title="Tecnologia para empresas com operação real."
      description="Serviços, indústrias, varejo, franquias e operações físico-digitais que precisam reduzir retrabalho, integrar sistemas e decidir com dados."
      primaryLocation="sectors_page_hero"
      imageSrc="/images/visuals/page-setores-operacoes.png"
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Cada setor tem dores diferentes, mas o ponto de partida é o mesmo: entender a operação."
          description="A CraftCode aproxima IA, automação, dados e sistemas da rotina concreta de cada empresa."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <article key={sector.title} className="border border-border rounded-lg bg-white p-6 shadow-soft">
                <Icon className="w-8 h-8 text-secondary mb-5" />
                <h2 className="text-2xl font-bold text-primary mb-3">{sector.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{sector.description}</p>
                <div className="space-y-2">
                  {sector.pains.map((pain) => (
                    <p key={pain} className="text-foreground/80">• {pain}</p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    <DiagnosticCta location="sectors_page_cta" />
  </PageLayout>
);

export default Setores;
