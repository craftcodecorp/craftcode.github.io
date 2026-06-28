import PageLayout from "@/components/PageLayout";
import About from "@/components/About";
import { DiagnosticCta, PageHero } from "@/components/PageSections";

const Sobre = () => (
  <PageLayout path="/sobre">
    <PageHero
      eyebrow="Sobre"
      title="Consultoria técnica com responsabilidade de negócio."
      description="A CraftCode conecta experiência em sistemas críticos, dados, integrações, produtos digitais e liderança técnica aos desafios de empresas do Vale do Paraíba."
      primaryLocation="about_page_hero"
      imageSrc="/images/visuals/page-sobre-autoridade.png"
    />
    <About ctaHref="/diagnostico-tecnologia-ia" ctaLocation="about_page" />
    <DiagnosticCta location="about_page_cta" />
  </PageLayout>
);

export default Sobre;
