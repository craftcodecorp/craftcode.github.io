import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { LazyLoad } from "@/components/ui/lazy-load";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
      aria-labelledby="hero-heading"
      role="region"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27 width=%2732%27 height=%2732%27 fill=%27none%27%3e%3cpath stroke=%27%23ffffff10%27 stroke-width=%271%27 d=%27m0 .5 32 0%27/%3e%3c/svg%3e')] opacity-20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm mb-8 animate-fade-in"
            role="text"
            aria-label="Tecnologia com propósito"
          >
            <span className="w-2 h-2 bg-secondary rounded-full mr-2" aria-hidden="true"></span>
            Tecnologia com propósito
          </div>

          {/* Main Headline */}
          <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Soluções digitais para
            <span className="block text-transparent bg-gradient-to-r from-white to-secondary bg-clip-text" aria-hidden="false">
              negócios com propósito
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Da arquitetura ao resultado: desenvolvemos software robusto, 
            inteligência de dados e soluções inovadoras com excelência técnica.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-16 w-full sm:w-auto" 
            role="group" 
            aria-label="Ações principais"
          >
            <Button 
              variant="cta" 
              size="lg" 
              className="group w-full sm:w-auto"
              onClick={() => window.location.href = '#contact'}
              aria-label="Fale com nossa equipe - Ir para formulário de contato"
            >
              Fale com nossa equipe
              <ArrowRight className="group-hover:translate-x-1 transition-transform ml-2" size={20} aria-hidden="true" />
            </Button>
            
            <Button 
              variant="default" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              onClick={() => window.location.href = '#products'}
              aria-label="Conheça o CardápioFácil - Ir para seção de produtos"
            >
              <Play size={20} className="text-primary mr-2" aria-hidden="true" />
              Conheça o CardápioFácil
            </Button>
          </div>

          {/* Stats */}
          <LazyLoad 
            className="w-full"
            threshold={0.2}
            rootMargin="100px"
          >
            <div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8 text-center max-w-3xl mx-auto border-t border-white/10 pt-8"
              role="region"
              aria-label="Estatísticas da empresa"
            >
              <div className="text-white/90 p-4 rounded-lg backdrop-blur-sm bg-white/5 shadow-lg transition-all duration-300 hover:bg-white/10">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-2" aria-label="Mais de 20 anos">20+</div>
                <div className="text-white/70 text-sm md:text-base">Anos de experiência</div>
              </div>
              <div className="text-white/90 p-4 rounded-lg backdrop-blur-sm bg-white/5 shadow-lg transition-all duration-300 hover:bg-white/10">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-2" aria-label="100 porcento">100%</div>
                <div className="text-white/70 text-sm md:text-base">Foco em resultados</div>
              </div>
              <div className="text-white/90 p-4 rounded-lg backdrop-blur-sm bg-white/5 col-span-2 sm:col-span-1 shadow-lg transition-all duration-300 hover:bg-white/10">
                <div className="text-2xl md:text-3xl font-bold text-secondary mb-2" aria-label="Desenvolvimento ágil">Ágil</div>
                <div className="text-white/70 text-sm md:text-base">Desenvolvimento</div>
              </div>
            </div>
          </LazyLoad>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <div className="w-1 h-16 bg-gradient-to-b from-white/50 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;