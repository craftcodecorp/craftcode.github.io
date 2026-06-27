import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { authorityPillars } from "@/lib/repositioning-content";
import { TrackedRouterLink } from "@/components/TrackedLink";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] flex items-center bg-gradient-hero overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute right-0 top-24 hidden xl:block w-[42rem] h-[42rem] border border-white/10 rounded-full" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm mb-8">
              <MapPin className="w-4 h-4 mr-2 text-secondary" aria-hidden="true" />
              Pindamonhangaba e Vale do Paraiba
            </div>

            <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              IA, automacao e sistemas sob medida para empresas do Vale do Paraiba.
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl leading-relaxed">
              A CraftCode ajuda empresas a modernizar processos, integrar sistemas, automatizar rotinas e transformar dados em decisoes melhores com tecnologia aplicada a operacao real.
            </p>

            <p className="text-lg text-white font-semibold mb-10">
              IA sem hype. Tecnologia com aplicacao real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12" role="group" aria-label="Acoes principais">
              <Button variant="cta" size="lg" className="group w-full sm:w-auto" asChild>
                <TrackedRouterLink to="/diagnostico-tecnologia-ia" eventLabel="Agendar diagnostico" eventLocation="hero">
                  Agendar diagnostico
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} aria-hidden="true" />
                </TrackedRouterLink>
              </Button>

              <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto" asChild>
                <TrackedRouterLink to="/solucoes" eventLabel="Conhecer solucoes" eventLocation="hero">
                  Conhecer solucoes
                </TrackedRouterLink>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
              {authorityPillars.slice(0, 3).map((item) => (
                <div key={item} className="border border-white/20 bg-white/10 rounded-lg p-4 text-white/80 backdrop-blur-sm">
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-xl p-5 md:p-7 backdrop-blur-sm shadow-large">
            <div className="text-white/70 text-sm mb-5">Diagnostico aplicado a operacao</div>
            <div className="space-y-4">
              {[
                ["Processos", "Mapear gargalos, retrabalho e pontos manuais."],
                ["Sistemas", "Identificar integracoes, dados duplicados e riscos."],
                ["IA e automacao", "Priorizar usos praticos por impacto e esforco."],
                ["Plano de acao", "Definir proximos passos tecnicos e comerciais."],
              ].map(([title, description], index) => (
                <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-secondary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <h2 className="text-white font-semibold">{title}</h2>
                    <p className="text-white/70 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/diagnostico-tecnologia-ia" className="inline-flex text-secondary font-semibold mt-6 hover:text-white transition-colors">
              Ver como funciona
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
