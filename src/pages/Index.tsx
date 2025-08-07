import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { SEO, generateOrganizationJsonLd } from "@/lib/seo-utils";
import { LazyLoad } from "@/components/ui/lazy-load";

// Lazy load non-critical components for better performance
const Solutions = lazy(() => import("@/components/Solutions"));
const ProductHighlight = lazy(() => import("@/components/ProductHighlight"));
const About = lazy(() => import("@/components/About"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  // Organization structured data for SEO
  const organizationJsonLd = generateOrganizationJsonLd();
  
  return (
    <div className="min-h-screen">
      <SEO 
        title="CraftCode Digital Hub | Soluções Digitais para Negócios com Propósito"
        description="Desenvolvemos software robusto, inteligência de dados e soluções inovadoras com excelência técnica para negócios com propósito."
        ogType="website"
        ogImage="/images/og-craftcode-digital-hub.jpg"
        twitterCard="summary_large_image"
        jsonLd={organizationJsonLd}
      />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-primary">Carregando...</div></div>}>
          <Solutions />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-primary">Carregando...</div></div>}>
          <ProductHighlight />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-primary">Carregando...</div></div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-pulse text-primary">Carregando...</div></div>}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<div className="py-8 text-center text-muted-foreground">Carregando rodapé...</div>}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;
