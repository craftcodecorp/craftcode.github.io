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
    description: "Caso tecnico da CraftCode sobre IA aplicada, automacao via WhatsApp, dados de uso, recorrencia e operacao fisico-digital.",
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
              Cardapio Facil: IA, WhatsApp e automacao conectados a uma rotina real.
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Um caso tecnico da CraftCode sobre personalizacao assistida por IA, recorrencia, comunicacao por WhatsApp e operacao digital.
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
              O Cardapio Facil e um servico digital que entrega planejamento de refeicoes por WhatsApp. Para a CraftCode, ele funciona como prova concreta de IA aplicada: entendimento de contexto, geracao assistida de conteudo, automacao recorrente, entrega em canal simples e leitura de feedbacks de uso.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              O ponto central nao e vender IA como magia. E conectar tecnologia a uma dor especifica, reduzir friccao para o usuario 
              e criar uma operacao digital que consiga evoluir com dados, feedback e automacao.
            </p>
          </div>
        </div>

        {/* How it started */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">O problema operacional</h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-6">
            O desafio era transformar uma rotina cansativa em uma experiencia simples: coletar preferencias declaradas, restricoes informadas pelo usuario, frequencia, mensagens, lista de compras e recorrencia sem exigir a instalacao de mais um aplicativo.
          </p>
          
          <p className="text-lg text-foreground leading-relaxed">
            A resposta foi combinar IA generativa, automacao de mensagens, regras de negocio e uma interface familiar: o WhatsApp.
            Esse mesmo raciocinio se aplica a empresas que precisam modernizar atendimento, vendas, operacao e dados.
          </p>
        </div>

        {/* Architecture */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">Arquitetura do caso</h2>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            O aprendizado principal esta na combinacao de pecas tecnicas, nao em uma promessa isolada de IA.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              ["Canal", "WhatsApp como interface de entrega, feedback e comunicacao recorrente."],
              ["Backend e regras", "Cadastro de preferencias, recorrencia, estados do fluxo e tratamento de excecoes."],
              ["Conteudo assistido por IA", "Geracao e variacao de textos apoiadas por regras editoriais e limites do produto."],
              ["Dados e evolucao", "Historico, feedbacks e eventos de uso para ajustar experiencia, conteudo e operacao."],
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
            A IA foi usada como parte de um fluxo operacional, nao como um recurso isolado:
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Pesquisa guiada por dados reais</h3>
              <p className="text-foreground leading-relaxed">
                A IA apoia a organizacao de respostas, preferencias declaradas e historico de interacoes para orientar combinacoes de conteudo. A decisao de produto considera dados de uso, feedbacks e revisao das regras do servico.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Personalizacao assistida, com limites claros</h3>
              <p className="text-foreground leading-relaxed mb-4">
                O fluxo considera informacoes fornecidas pelo usuario, como:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Preferencias, ingredientes evitados e restricoes declaradas</li>
                <li>Quantidade de pessoas, frequencia e rotina de preparo</li>
                <li>Preferencias culturais, praticidade e disponibilidade de ingredientes</li>
              </ul>
              <p className="text-foreground leading-relaxed mt-4">
                O servico nao substitui nutricionista, medico ou orientacao profissional. Restricoes clinicas, alergias e necessidades especificas exigem avaliacao especializada.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Textos e mensagens naturais</h3>
              <p className="text-foreground leading-relaxed">
                Os conteudos enviados por WhatsApp, de receitas a listas de compras, sao elaborados com auxilio de IA generativa e regras do produto para manter clareza, consistencia e linguagem acessivel.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-primary mb-3">Automatização e escuta ativa</h3>
              <p className="text-foreground leading-relaxed">
                A entrega semanal, lembretes e coleta de feedbacks podem ser automatizados conforme as permissoes e recursos tecnicos disponiveis no canal. Os dados de uso ajudam a ajustar regras, conteudo e experiencia sem prometer adaptacao automatica irrestrita.
              </p>
            </div>
          </div>
        </div>

        {/* Limits */}
        <div className="max-w-4xl mx-auto mb-16 rounded-lg border border-border bg-muted/30 p-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">Limites e governanca</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              ["Conteudo sensivel", "O caso nao substitui nutricionista, medico ou orientacao profissional. Alergias, restricoes clinicas e necessidades individuais exigem especialista."],
              ["Revisao e regras", "A IA apoia geracao de conteudo, mas consistencia depende de regras editoriais, curadoria, feedback e tratamento de excecoes."],
              ["Automacao com dependencia", "Envios, pagamentos, historico e metricas dependem de APIs, permissoes do canal, configuracao tecnica e monitoramento."],
              ["Aprendizado transferivel", "O mesmo desenho pode apoiar atendimento, cobranca, onboarding, comunicacao recorrente e operacoes fisico-digitais."],
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
            Mais do que vender um produto, o caso mostra como tecnologia pode conectar canal, dados, recorrencia e operacao:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Recorrencia operacional</h3>
              <p className="text-muted-foreground">
                Fluxos semanais, mensagens e entregas organizadas com regras de negocio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Personalizacao controlada</h3>
              <p className="text-muted-foreground">
                Conteudo ajustado por contexto declarado, com limites para temas sensiveis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Canal simples</h3>
              <p className="text-muted-foreground">
                WhatsApp como interface familiar para reduzir barreira de uso.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-medium border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Dados para evolucao</h3>
              <p className="text-muted-foreground">
                Feedbacks e historico apoiam melhorias de produto, conteudo e automacao.
              </p>
            </div>
          </div>
        </div>

        {/* CraftCode */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-6">O que esse caso demonstra</h2>
          
          <p className="text-lg text-foreground leading-relaxed">
            O Cardapio Facil demonstra capacidade de traduzir um problema concreto em produto digital, automacao, IA aplicada, 
            mensageria, dados de uso e evolucao continua. Para empresas, o mesmo principio vale: antes da ferramenta, vem o 
            diagnostico da operacao.
          </p>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center bg-gradient-primary rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Quer aplicar tecnologia e IA na sua operacao?</h2>
          <p className="text-xl mb-8">
            Comece pelo diagnostico para entender processos, dados, gargalos e oportunidades de automacao.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <TrackedRouterLink to="/diagnostico-tecnologia-ia" eventLabel="Agendar diagnostico" eventLocation="cardapio_case">
                Agendar diagnostico
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
