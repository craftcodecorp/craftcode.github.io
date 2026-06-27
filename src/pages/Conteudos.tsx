import PageLayout from "@/components/PageLayout";
import { DiagnosticCta, PageHero, SectionHeader } from "@/components/PageSections";
import { contentTopics } from "@/lib/repositioning-content";

const Conteudos = () => (
  <PageLayout path="/conteudos">
    <PageHero
      eyebrow="Conteudos"
      title="Ideias praticas sobre IA, automacao, dados e operacao."
      description="Um hub inicial para educar empresarios sobre aplicacoes reais de tecnologia, sem hype e sem jargao desnecessario."
      primaryLocation="content_page_hero"
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Pautas iniciais de autoridade"
          description="Esta area prepara a estrutura editorial. Os artigos completos podem ser publicados em uma proxima etapa sem mudar a arquitetura do site."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contentTopics.map((topic, index) => (
            <article key={topic} className="border border-border rounded-lg bg-white p-6 shadow-soft">
              <span className="text-sm font-bold text-secondary">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="text-xl font-bold text-primary mt-3">{topic}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>

    <DiagnosticCta location="content_page_cta" />
  </PageLayout>
);

export default Conteudos;
