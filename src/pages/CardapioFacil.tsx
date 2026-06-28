import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/lib/seo-utils";
import { Helmet } from "react-helmet-async";
import { CARDAPIO_URL, publicRoutes } from "@/lib/site-metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { TrackedAnchor, TrackedRouterLink } from "@/components/TrackedLink";

const CardapioFacil = () => {
  const route = publicRoutes.find((item) => item.path === "/cardapio-facil")!;
  const cardapioFacilJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Cardapio Facil como caso de IA aplicada",
    description: "Caso técnico da CraftCode sobre IA aplicada, automação via WhatsApp, dados de uso, recorrência e operação físico-digital.",
    url: "https://craftcode.com.br/cardapio-facil",
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="icon" href="/images/cardapiofacil/favicon.ico" />
      </Helmet>
      <SEO 
        title={route.title}
        description={route.description}
        canonical={route.canonicalPath}
        openGraph={{
          type: 'website',
          images: [{
            url: '/images/og-cardapio.jpg',
            alt: 'Cardápio Fácil - planejamento de refeições com IA pelo WhatsApp',
            width: 1200,
            height: 630
          }]
        }}
        twitter={{
          card: 'summary_large_image',
          imageAlt: 'Cardápio Fácil - planejamento de refeições com IA pelo WhatsApp'
        }}
        jsonLd={cardapioFacilJsonLd}
      />
      <Header />
      {/* Cover Image */}
      <div className="relative w-full h-[56vh] overflow-hidden pt-14 md:pt-16">
        <img 
          src="/images/cardapiofacil/mothers-meal-planning.jpg" 
          alt="Planejamento de refeições para famílias" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4 lg:px-8 pt-24">
            <p className="text-secondary font-semibold mb-4">Caso de IA aplicada</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cardápio Fácil: IA, WhatsApp e automação conectados a uma rotina real.
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Um caso técnico da CraftCode sobre personalização assistida por IA, recorrência, comunicação por WhatsApp e operação digital.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 mt-8">
        {/* Navigation */}
        <div className="mb-8">
          <Button variant="ghost" className="group" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={18} />
              Voltar para a pagina inicial
            </Link>
          </Button>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          
          <div className="bg-muted/30 rounded-xl p-8 mb-12">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              O Cardápio Fácil é um serviço digital que entrega planejamento de refeições por WhatsApp. Para a CraftCode, ele funciona como prova concreta de IA aplicada: entendimento de contexto, geração assistida de conteúdo, automação recorrente, entrega em canal simples e leitura de feedbacks de uso.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              O ponto central não é vender IA como magia. É conectar tecnologia a uma dor específica, reduzir fricção para o usuário 
              e criar uma operação digital que consiga evoluir com dados, feedback e automação.
            </p>
          </div>
        </div>

        {/* How it started */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">O problema operacional</h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-6">
            O desafio era transformar uma rotina cansativa em uma experiência simples: coletar preferências declaradas, restrições informadas pelo usuário, frequência, mensagens, lista de compras e recorrência sem exigir a instalação de mais um aplicativo.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            A resposta foi combinar IA generativa, automação de mensagens, regras de negócio e uma interface familiar: o WhatsApp.
            Esse mesmo raciocínio se aplica a empresas que precisam modernizar atendimento, vendas, operação e dados.
          </p>
        </div>

        {/* Architecture */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Arquitetura do caso</h2>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            O aprendizado principal está na combinação de peças técnicas, não em uma promessa isolada de IA.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              ["Canal", "WhatsApp como interface de entrega, feedback e comunicação recorrente."],
              ["Backend e regras", "Cadastro de preferências, recorrência, estados do fluxo e tratamento de exceções."],
              ["Conteudo assistido por IA", "Geracao e variacao de textos apoiadas por regras editoriais e limites do produto."],
              ["Dados e evolução", "Histórico, feedbacks e eventos de uso para ajustar experiência, conteúdo e operação."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-lg border border-border bg-white p-6 shadow-soft">
                <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Integration */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Inteligencia artificial dentro de um fluxo operacional</h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-8">
            A IA foi usada como parte de um fluxo operacional, não como um recurso isolado:
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Pesquisa guiada por dados reais</h3>
              <p className="text-foreground leading-relaxed">
                A IA apoia a organização de respostas, preferências declaradas e histórico de interações para orientar combinações de conteúdo. A decisão de produto considera dados de uso, feedbacks e revisão das regras do serviço.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Personalizacao assistida, com limites claros</h3>
              <p className="text-foreground leading-relaxed mb-4">
                O fluxo considera informações fornecidas pelo usuário, como:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Preferências, ingredientes evitados e restrições declaradas</li>
                <li>Quantidade de pessoas, frequencia e rotina de preparo</li>
                <li>Preferencias culturais, praticidade e disponibilidade de ingredientes</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                O serviço não substitui nutricionista, médico ou orientação profissional. Restrições clínicas, alergias e necessidades específicas exigem avaliação especializada.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Textos e mensagens naturais</h3>
              <p className="text-foreground leading-relaxed">
                Os conteúdos enviados por WhatsApp, de receitas a listas de compras, são elaborados com auxílio de IA generativa e regras do produto para manter clareza, consistência e linguagem acessível.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Automatização e escuta ativa</h3>
              <p className="text-foreground leading-relaxed">
                A entrega semanal, lembretes e coleta de feedbacks podem ser automatizados conforme as permissões e recursos técnicos disponíveis no canal. Os dados de uso ajudam a ajustar regras, conteúdo e experiência sem prometer adaptação automática irrestrita.
              </p>
            </div>
          </div>
        </div>

        {/* Limits */}
        <div className="max-w-4xl mx-auto mb-16 rounded-lg border border-border bg-muted/30 p-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Limites e governança</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              ["Conteúdo sensível", "O caso não substitui nutricionista, médico ou orientação profissional. Alergias, restrições clínicas e necessidades individuais exigem especialista."],
              ["Revisão e regras", "A IA apoia geração de conteúdo, mas consistência depende de regras editoriais, curadoria, feedback e tratamento de exceções."],
              ["Automação com dependência", "Envios, pagamentos, histórico e métricas dependem de APIs, permissões do canal, configuração técnica e monitoramento."],
              ["Aprendizado transferível", "O mesmo desenho pode apoiar atendimento, cobrança, onboarding, comunicação recorrente e operações físico-digitais."],
            ].map(([title, description]) => (
              <div key={title}>
                <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">O que o caso prova tecnicamente</h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-8">
            Mais do que vender um produto, o caso mostra como tecnologia pode conectar canal, dados, recorrência e operação:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Recorrencia operacional</h3>
              <p className="text-muted-foreground">
                Fluxos semanais, mensagens e entregas organizadas com regras de negócio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Personalizacao controlada</h3>
              <p className="text-muted-foreground">
                Conteúdo ajustado por contexto declarado, com limites para temas sensíveis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Canal simples</h3>
              <p className="text-muted-foreground">
                WhatsApp como interface familiar para reduzir barreira de uso.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Dados para evolução</h3>
              <p className="text-muted-foreground">
                Feedbacks e histórico apoiam melhorias de produto, conteúdo e automação.
              </p>
            </div>
          </div>
        </div>

        {/* CraftCode */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">O que esse caso demonstra</h2>
          
          <p className="text-lg text-foreground leading-relaxed">
            O Cardápio Fácil demonstra capacidade de traduzir um problema concreto em produto digital, automação, IA aplicada, 
            mensageria, dados de uso e evolução contínua. Para empresas, o mesmo princípio vale: antes da ferramenta, vem o 
            diagnóstico da operação.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Quer aplicar tecnologia e IA na sua operação?</h2>
          <p className="text-xl mb-8">
            Comece pelo diagnóstico para entender processos, dados, gargalos e oportunidades de automação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <TrackedRouterLink to="/diagnostico-tecnologia-ia" eventLabel="Agendar diagnóstico" eventLocation="cardapio_case">
                Agendar diagnóstico
              </TrackedRouterLink>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary group" asChild>
              <TrackedAnchor href={CARDAPIO_URL} target="_blank" rel="noopener noreferrer" eventName="content_click" eventLabel="Ver site CardapioFacil" eventLocation="cardapio_case">
                Ver site do caso
                <ExternalLink className="ml-2 group-hover:scale-110 transition-transform" size={18} />
              </TrackedAnchor>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CardapioFacil;
