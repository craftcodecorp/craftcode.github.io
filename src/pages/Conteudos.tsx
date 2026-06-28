import PageLayout from "@/components/PageLayout";
import { DiagnosticCta, PageHero, SectionHeader } from "@/components/PageSections";
import { contentTopics } from "@/lib/repositioning-content";

const Conteudos = () => (
  <PageLayout path="/conteudos">
    <PageHero
      eyebrow="Conteúdos"
      title="Ideias práticas sobre IA, automação, dados e operação."
      description="Um hub inicial para educar empresários sobre aplicações reais de tecnologia, sem hype e sem jargão desnecessário."
      primaryLocation="content_page_hero"
      imageSrc="/images/visuals/page-conteudos-insights.png"
    />

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Pautas iniciais de autoridade"
          description="Temas que orientam conversas com empresas sobre IA aplicada, automação, dados, integração e sistemas sob medida."
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
