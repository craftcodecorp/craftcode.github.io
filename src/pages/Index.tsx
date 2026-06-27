import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { SEO, generateOrganizationJsonLd, generateWebsiteJsonLd } from "@/lib/seo-utils";
import { publicRoutes } from "@/lib/site-metadata";
import Solutions from "@/components/Solutions";
import ProductHighlight from "@/components/ProductHighlight";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { AuthorityBlock, FinalCtaBlock, MethodBlock, PainBlock, SectorsBlock } from "@/components/HomeNarrative";

const Index = () => {
  // Organization structured data for SEO
  const route = publicRoutes.find((item) => item.path === "/")!;
  const organizationJsonLd = generateOrganizationJsonLd();
  const websiteJsonLd = generateWebsiteJsonLd();
  
  return (
    <div className="min-h-screen">
      <SEO 
        title={route.title}
        description={route.description}
        canonical={route.canonicalPath}
        openGraph={{
          type: 'website',
          images: [{
            url: '/images/og-craftcode.png',
            alt: 'CraftCode - IA aplicada, automacao e sistemas sob medida no Vale do Paraiba',
            width: 1200,
            height: 630
          }]
        }}
        twitter={{
          card: 'summary_large_image',
          imageAlt: 'CraftCode - IA aplicada, automacao e sistemas sob medida no Vale do Paraiba'
        }}
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />
      <Header />
      <main className="pt-14 md:pt-16">
        <Hero />
        <AuthorityBlock />
        <PainBlock />
        <Solutions />
        <MethodBlock />
        <SectorsBlock />
        <About />
        <ProductHighlight />
        <FinalCtaBlock />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
