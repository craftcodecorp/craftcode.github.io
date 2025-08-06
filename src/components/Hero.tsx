import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27 width=%2732%27 height=%2732%27 fill=%27none%27%3e%3cpath stroke=%27%23ffffff10%27 stroke-width=%271%27 d=%27m0 .5 32 0%27/%3e%3c/svg%3e')] opacity-20"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white/90 text-sm font-medium backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
            Tecnologia com propósito
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Soluções digitais para
            <span className="block text-transparent bg-gradient-to-r from-white to-secondary bg-clip-text">
              negócios com propósito
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Da arquitetura ao resultado: desenvolvemos software robusto, 
            inteligência de dados e soluções inovadoras com excelência técnica.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="cta" size="lg" className="group">
              Fale com nossa equipe
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Play size={20} />
              Conheça o CardápioFácil
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white/90">
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <div className="text-white/70">Anos de experiência</div>
            </div>
            <div className="text-white/90">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-white/70">Foco em resultados</div>
            </div>
            <div className="text-white/90">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-white/70">Suporte dedicado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-white/50 to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;