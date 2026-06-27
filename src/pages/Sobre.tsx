import PageLayout from "@/components/PageLayout";
import About from "@/components/About";
import { DiagnosticCta, PageHero } from "@/components/PageSections";

const Sobre = () => (
  <PageLayout path="/sobre">
    <PageHero
      eyebrow="Sobre"
      title="Consultoria tecnica com responsabilidade de negocio."
      description="A CraftCode conecta experiencia em sistemas criticos, dados, integracoes, produtos digitais e lideranca tecnica aos desafios de empresas do Vale do Paraiba."
      primaryLocation="about_page_hero"
    />
    <About ctaHref="/diagnostico-tecnologia-ia" ctaLocation="about_page" />
    <DiagnosticCta location="about_page_cta" />
  </PageLayout>
);

export default Sobre;
