import PageLayout from "@/components/PageLayout";
import { DiagnosticCta, PageHero, SectionHeader } from "@/components/PageSections";
import { methodSteps } from "@/lib/repositioning-content";
import Contact from "@/components/Contact";

const diagnosticBlocks = [
  {
    title: "Para quem e indicado",
    items: [
      "Empresas com processos manuais, retrabalho, controles paralelos ou dados dispersos.",
      "Operacoes que querem usar IA ou automacao, mas precisam decidir onde isso faz sentido.",
      "Gestores que precisam priorizar tecnologia por impacto, risco e viabilidade.",
    ],
  },
  {
    title: "Quando faz sentido",
    items: [
      "Antes de contratar uma ferramenta, construir um sistema ou automatizar um fluxo importante.",
      "Quando sistemas nao conversam e a equipe depende de planilhas para fechar a operacao.",
      "Quando a empresa cresceu e o processo atual passou a limitar atendimento, vendas ou gestao.",
    ],
  },
  {
    title: "Problemas que evita",
    items: [
      "Investir em tecnologia sem resolver a causa do gargalo.",
      "Automatizar excecoes, dados ruins ou regras que ainda nao estao claras.",
      "Criar dashboards, assistentes ou sistemas que a equipe nao consegue usar no dia a dia.",
    ],
  },
];

const objections = [
  ["Ja temos ERP", "O diagnostico verifica se o ERP esta bem usado, se faltam integracoes e onde ainda existem controles paralelos."],
  ["Ja temos BI", "Avaliamos se os indicadores apoiam decisao real ou se ainda dependem de dados manuais e metricas pouco confiaveis."],
  ["Queremos IA rapido", "Primeiro identificamos onde ha dado, processo e revisao suficientes para aplicar IA com responsabilidade."],
  ["Nao sabemos por onde comecar", "A priorizacao organiza o caminho por impacto, esforco, dependencia tecnica e capacidade de adocao."],
];

const DiagnosticoTecnologiaIa = () => (
  <PageLayout path="/diagnostico-tecnologia-ia">
    <PageHero
      eyebrow="Diagnostico de Tecnologia e IA Aplicada"
      title="Antes de automatizar, entenda processo, dados e prioridade."
      description="Uma analise pratica dos processos, sistemas, dados e oportunidades de automacao da sua empresa para identificar onde tecnologia e IA podem gerar impacto real."
      primaryLocation="diagnostic_page_hero"
      primaryHref="#contact"
      primaryLabel="Solicitar diagnostico"
    />

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Oferta de entrada"
          title="Uma analise para decidir antes de implementar."
          description="O diagnostico organiza contexto, prioridades e limites tecnicos para transformar intencao em plano de acao responsavel."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {diagnosticBlocks.map((block) => (
            <div key={block.title} className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-primary mb-4">{block.title}</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {block.items.map((item) => (
                  <li key={item} className="leading-relaxed">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Objecoes comuns antes de comecar"
          description="O diagnostico foi desenhado para empresas que ja tentaram ferramentas, ainda dependem de improviso ou querem aplicar IA sem criar mais complexidade."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {objections.map(([title, description]) => (
            <div key={title} className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-primary mb-3">{title}</h2>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Como funciona"
          title="Do gargalo operacional ao plano de acao."
          description="O diagnostico evita comecar pela ferramenta. Primeiro entendemos a operacao, depois definimos quais tecnologias fazem sentido."
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {methodSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="border border-border rounded-lg p-5 bg-white shadow-soft">
                <Icon className="w-6 h-6 text-secondary mb-5" />
                <span className="text-sm font-bold text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="text-xl font-bold text-primary mt-3 mb-2">{step.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="O que sera analisado e entregue"
          description="A profundidade depende do contexto, mas o objetivo e sair com clareza sobre processos, dados, sistemas, riscos e proximos passos."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            ["Analise da operacao", "Processos criticos, gargalos, retrabalho, sistemas envolvidos, planilhas, dados e pontos de decisao."],
            ["Mapa de oportunidades", "Onde IA, automacao, integracao, BI ou sistema sob medida podem gerar impacto pratico."],
            ["Priorizacao tecnica", "Ordem sugerida por impacto, esforco, dependencia, risco, qualidade dos dados e adocao da equipe."],
            ["Proximos passos", "Recomendacao de caminho: prototipo, integracao, automacao, dashboard, modernizacao ou ajuste de processo."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h2 className="text-xl font-bold text-primary mb-3">{title}</h2>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Limites do diagnostico"
          description="A etapa nao promete implementacao imediata nem resultado automatico. Ela reduz incerteza para decidir o que construir, integrar ou automatizar primeiro."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ["Nao e venda de ferramenta", "A recomendacao parte do processo e dos dados disponiveis, nao de uma plataforma pre-definida."],
            ["Nao substitui governanca", "Dados sensiveis, permissoes, seguranca e revisao humana precisam entrar no plano quando houver IA ou automacao."],
            ["Nao ignora adocao", "A solucao so funciona se a equipe conseguir incorporar o novo fluxo a rotina real."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-border bg-muted/30 p-6">
              <h2 className="text-xl font-bold text-primary mb-3">{title}</h2>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <DiagnosticCta location="diagnostic_page_cta" />
    <Contact />
  </PageLayout>
);

export default DiagnosticoTecnologiaIa;
