import PageLayout from "@/components/PageLayout";
import { DiagnosticCta, PageHero, SectionHeader } from "@/components/PageSections";
import { methodSteps, primaryCta } from "@/lib/repositioning-content";
import Contact from "@/components/Contact";

const DiagnosticList = ({ items }: { items: readonly string[] }) => (
  <ul className="space-y-3 text-sm text-muted-foreground">
    {items.map((item) => (
      <li key={item} className="flex gap-3 leading-relaxed">
        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" aria-hidden="true" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const diagnosticBlocks = [
  {
    title: "Para quem e indicado",
    items: [
      "Empresas com processos manuais, retrabalho, controles paralelos ou dados dispersos.",
      "Operações que querem usar IA ou automação, mas precisam decidir onde isso faz sentido.",
      "Gestores que precisam priorizar tecnologia por impacto, risco e viabilidade.",
    ],
  },
  {
    title: "Quando faz sentido",
    items: [
      "Antes de contratar uma ferramenta, construir um sistema ou automatizar um fluxo importante.",
      "Quando sistemas não conversam e a equipe depende de planilhas para fechar a operação.",
      "Quando a empresa cresceu e o processo atual passou a limitar atendimento, vendas ou gestão.",
    ],
  },
  {
    title: "Problemas que evita",
    items: [
      "Investir em tecnologia sem resolver a causa do gargalo.",
      "Automatizar exceções, dados ruins ou regras que ainda não estão claras.",
      "Criar dashboards, assistentes ou sistemas que a equipe não consegue usar no dia a dia.",
    ],
  },
];

const objections = [
  ["Já temos ERP", "O diagnóstico verifica se o ERP está bem usado, se faltam integrações e onde ainda existem controles paralelos."],
  ["Já temos BI", "Avaliamos se os indicadores apoiam decisão real ou se ainda dependem de dados manuais e métricas pouco confiáveis."],
  ["Queremos IA rápido", "Primeiro identificamos onde há dado, processo e revisão suficientes para aplicar IA com responsabilidade."],
  ["Não sabemos por onde começar", "A priorização organiza o caminho por impacto, esforço, dependência técnica e capacidade de adoção."],
];

const DiagnosticoTecnologiaIa = () => (
  <PageLayout path="/diagnostico-tecnologia-ia">
    <PageHero
      eyebrow="Diagnóstico de Tecnologia e IA Aplicada"
      title="Antes de automatizar, entenda processo, dados e prioridade."
      description="Uma análise prática dos processos, sistemas, dados e oportunidades de automação da sua empresa para identificar onde tecnologia e IA podem gerar impacto real."
      primaryLocation="diagnostic_page_hero"
      primaryHref="#contact"
      primaryLabel={primaryCta.label}
      imageSrc="/images/visuals/diagnostico-plano-acao.png"
    />

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          eyebrow="Oferta de entrada"
          title="Uma análise para decidir antes de implementar."
          description="O diagnóstico organiza contexto, prioridades e limites técnicos para transformar intenção em plano de ação responsável."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {diagnosticBlocks.map((block) => (
            <div key={block.title} className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-4">{block.title}</h3>
              <DiagnosticList items={block.items} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Objeções comuns antes de começar"
          description="O diagnóstico foi desenhado para empresas que já tentaram ferramentas, ainda dependem de improviso ou querem aplicar IA sem criar mais complexidade."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {objections.map(([title, description]) => (
            <div key={title} className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
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
          title="Do gargalo operacional ao plano de ação."
          description="O diagnóstico evita começar pela ferramenta. Primeiro entendemos a operação, depois definimos quais tecnologias fazem sentido."
        />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {methodSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="border border-border rounded-lg p-5 bg-white shadow-soft">
                <Icon className="w-6 h-6 text-secondary mb-5" />
                <span className="text-sm font-bold text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-bold text-primary mt-3 mb-2">{step.title}</h3>
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
          title="O que será analisado e entregue"
          description="A profundidade depende do contexto, mas a saída esperada é clareza sobre prioridades, riscos e o caminho mais seguro para começar."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            ["Análise da operação", "Processos críticos, gargalos, retrabalho, sistemas envolvidos, planilhas, dados e pontos de decisão."],
            ["Mapa de oportunidades", "Onde IA, automação, integração, BI ou sistema sob medida podem gerar impacto prático."],
            ["Priorização técnica", "Ordem sugerida por impacto, esforço, dependência, risco, qualidade dos dados e adoção da equipe."],
            ["Próximos passos", "Recomendação de caminho: protótipo, integração, automação, dashboard, modernização ou ajuste de processo."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Limites do diagnóstico"
          description="A etapa não promete implementação imediata nem resultado automático. Ela reduz incerteza para decidir o que construir, integrar ou automatizar primeiro."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ["Não é venda de ferramenta", "A recomendação parte do processo e dos dados disponíveis, não de uma plataforma pré-definida."],
            ["Não substitui governança", "Dados sensíveis, permissões, segurança e revisão humana precisam entrar no plano quando houver IA ou automação."],
            ["Não ignora adoção", "A solução só funciona se a equipe conseguir incorporar o novo fluxo à rotina real."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-border bg-muted/30 p-6">
              <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
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
