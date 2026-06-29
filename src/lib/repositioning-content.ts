import {
  BarChart3,
  Blocks,
  Bot,
  Building2,
  ClipboardCheck,
  Database,
  Factory,
  GitBranch,
  LineChart,
  Network,
  RefreshCcw,
  Settings2,
  Store,
  Target,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const primaryCta = {
  label: "Agendar diagnóstico",
  href: "/diagnostico-tecnologia-ia",
};

export const secondaryCta = {
  label: "Ver soluções possíveis",
  href: "/solucoes",
};

export const brandPhrases = [
  "IA sem hype. Tecnologia com aplicação real.",
  "Antes de automatizar, entendemos o processo.",
  "Dados não servem para enfeitar dashboard. Servem para decidir melhor.",
  "A melhor tecnologia é aquela que a operação consegue usar.",
];

export const painPoints = [
  "Planilhas espalhadas.",
  "Retrabalho entre áreas.",
  "Sistemas isolados.",
  "Atendimento manual.",
  "Indicadores confusos.",
  "Decisão sem dados.",
  "Processos na cabeça da equipe.",
  "Crescimento travado pela operação.",
];

export type Solution = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  benefits: string[];
  examples: string[];
  icon: LucideIcon;
};

export const solutions: Solution[] = [
  {
    slug: "ia-aplicada",
    title: "IA aplicada",
    shortTitle: "IA aplicada",
    description:
      "Assistentes, triagens e análises aplicadas onde existe processo, dado e revisão humana.",
    benefits: ["Menos esforço manual", "Mais padrão nas respostas", "Apoio para equipes"],
    examples: ["Triagem de solicitações", "Assistentes internos", "Organização de informações"],
    icon: Bot,
  },
  {
    slug: "automacao-processos",
    title: "Automação de processos",
    shortTitle: "Automação",
    description:
      "Fluxos, alertas e rotinas automatizadas para tirar tarefas repetitivas do caminho.",
    benefits: ["Menos retrabalho", "Rotina mais previsível", "Mais padrão operacional"],
    examples: ["Alertas e notificações", "Fluxos internos", "Tarefas repetitivas automatizadas"],
    icon: Settings2,
  },
  {
    slug: "integracao-sistemas",
    title: "Integração de sistemas",
    shortTitle: "Integração",
    description:
      "Conexão entre ERP, CRM, planilhas, pagamentos, APIs e bancos de dados com regra e rastreabilidade.",
    benefits: ["Menos controles paralelos", "Dados sincronizados", "Mais rastreabilidade"],
    examples: ["APIs", "Sincronização de dados", "Integrações com pagamentos"],
    icon: Network,
  },
  {
    slug: "dados-bi",
    title: "Dados, BI e dashboards",
    shortTitle: "Dados e BI",
    description:
      "Indicadores confiáveis para acompanhar a operação, margem, vendas e prioridades de gestão.",
    benefits: ["Indicadores confiáveis", "Relatórios automáticos", "Visão de gestão"],
    examples: ["Dashboards operacionais", "Painéis de performance", "Relatórios recorrentes"],
    icon: BarChart3,
  },
  {
    slug: "sistemas-sob-medida",
    title: "Sistemas sob medida",
    shortTitle: "Sistemas",
    description:
      "Ferramentas internas e portais quando integrar ferramentas prontas não resolve o processo central.",
    benefits: ["Aderente ao processo", "Pronto para evoluir", "Menos improviso"],
    examples: ["Portais", "Ferramentas internas", "Modernização de legados"],
    icon: Blocks,
  },
  {
    slug: "solucoes#consultoria",
    title: "Consultoria técnica e arquitetura",
    shortTitle: "Consultoria",
    description:
      "Apoio para decidir com clareza antes de comprar, construir ou automatizar.",
    benefits: ["Decisão mais segura", "Riscos conhecidos", "Roadmap claro"],
    examples: ["Revisão de arquitetura", "Avaliação técnica", "Plano de evolução"],
    icon: ClipboardCheck,
  },
];

export const methodSteps = [
  {
    title: "Diagnóstico",
    description: "Mapeamos processos, sistemas, dados, gargalos e oportunidades.",
    icon: Target,
  },
  {
    title: "Priorização",
    description: "Organizamos o plano por impacto, esforço e risco.",
    icon: LineChart,
  },
  {
    title: "Prototipação",
    description: "Validamos fluxo, dados e adoção antes de escalar.",
    icon: GitBranch,
  },
  {
    title: "Implementação",
    description: "Criamos automações, integrações, dashboards ou sistemas.",
    icon: Wrench,
  },
  {
    title: "Evolução",
    description: "Medimos, ajustamos e preparamos para crescer.",
    icon: RefreshCcw,
  },
];

export const sectors = [
  {
    title: "Serviços em crescimento",
    description:
      "Empresas que cresceram mais rápido que seus processos de atendimento, vendas e gestão.",
    pains: ["Atendimento desorganizado", "Planilhas demais", "Pouca previsibilidade"],
    icon: Users,
  },
  {
    title: "Indústria e operações técnicas",
    description:
      "Operações com manutenção, estoque, logística ou produção que precisam de rastreabilidade.",
    pains: ["Controles paralelos", "Pouca integração", "Indicadores fracos"],
    icon: Factory,
  },
  {
    title: "Varejo e franquias",
    description:
      "Redes, lojas e equipes que precisam manter padrão sem perder velocidade.",
    pains: ["Gestão descentralizada", "Dados divergentes", "Padrão difícil"],
    icon: Store,
  },
  {
    title: "Operações físico-digitais",
    description:
      "Negócios que unem software, pagamento, atendimento e operação no mesmo fluxo.",
    pains: ["Falhas de integração", "Pouca rastreabilidade", "Suporte reativo"],
    icon: Building2,
  },
];

export const authorityPillars = [
  "Mais de 20 anos em tecnologia",
  "Sistemas críticos e integrações",
  "Dados, BI e visualização",
  "Produto digital e escala",
  "Liderança técnica com visão de negócio",
];

export const contentTopics = [
  "Onde a IA realmente pode ajudar PMEs do Vale do Paraíba",
  "Como saber se sua empresa precisa de sistema, automação ou organização de processos",
  "O erro de começar pela ferramenta antes de entender o processo",
  "Como automatizar atendimento sem perder qualidade",
  "Por que empresas ainda dependem demais de planilhas",
  "O que uma operação físico-digital ensina sobre integração e cobrança",
  "Como transformar dados em decisões sem dashboards inúteis",
  "IA para indústria: aplicações práticas fora do hype",
  "Como preparar sua empresa para usar IA com segurança",
  "Tecnologia de alto nível aplicada aos negócios do Vale do Paraíba",
];

export const solutionBySlug = (slug: string) =>
  solutions.find((solution) => solution.slug === slug || solution.slug.split("#")[0] === slug);

export const serviceDecisionContent = {
  "ia-aplicada": {
    signals: [
      "Atendimento, vendas ou operação dependem de respostas repetitivas e pouco padronizadas.",
      "A equipe perde tempo buscando informações em documentos, sistemas e históricos dispersos.",
      "Há interesse em IA, mas ainda não está claro onde ela gera valor com segurança.",
    ],
    prerequisites: [
      "Processos minimamente descritos e responsáveis disponíveis para validar regras.",
      "Fontes de dados, documentos ou bases de conhecimento com qualidade suficiente.",
      "Critérios claros para revisão humana, limites de uso e proteção de informações sensíveis.",
    ],
    sectors: ["Atendimento consultivo", "Vendas B2B", "Serviços técnicos", "Operações internas"],
    risks: [
      "Dados ruins ou documentos desatualizados reduzem qualidade das respostas.",
      "Uso sem revisão humana pode gerar orientações inconsistentes.",
      "IA não corrige processo confuso nem substitui regra de negócio bem definida.",
    ],
  },
  "automacao-processos": {
    signals: [
      "A mesma informação é digitada em mais de um lugar.",
      "Prazos dependem de lembretes manuais, planilhas ou pessoas específicas.",
      "Erros operacionais acontecem por falta de padrão entre etapas e áreas.",
    ],
    prerequisites: [
      "Mapeamento do fluxo atual, exceções e regras de negócio.",
      "Acesso às ferramentas envolvidas ou alternativas para integração.",
      "Equipe alinhada para mudar rotina, medir ganhos e ajustar processos.",
    ],
    sectors: ["Administrativo", "Financeiro", "Suporte", "Operações com recorrência"],
    risks: [
      "Automatizar exceções demais aumenta manutenção e fragilidade.",
      "Integrações sem tratamento de erro criam falhas silenciosas.",
      "Baixa adesão da equipe pode manter controles paralelos ativos.",
    ],
  },
  "dados-bi": {
    signals: [
      "Gestão olha para números diferentes dependendo da planilha ou sistema consultado.",
      "Indicadores demoram para ser montados e chegam tarde para apoiar decisões.",
      "Dados existem, mas não estão organizados para acompanhar operação, vendas ou margem.",
    ],
    prerequisites: [
      "Identificação das fontes de dados e responsáveis por cada indicador.",
      "Definição do que será medido, para qual decisão e com qual frequência.",
      "Tratamento de qualidade, histórico, permissões e governança mínima.",
    ],
    sectors: ["Gestão executiva", "Comercial", "Indústria", "Varejo e franquias"],
    risks: [
      "Indicadores sem dono viram relatório bonito e pouco usado.",
      "Fontes divergentes precisam de conciliação antes do dashboard.",
      "Sem rotina de análise, BI não melhora decisão sozinho.",
    ],
  },
  "sistemas-sob-medida": {
    signals: [
      "Ferramentas prontas exigem improvisos demais ou não acompanham o processo real.",
      "A empresa precisa de portal, sistema interno ou modernização de legado.",
      "Integrar ferramentas existentes não resolve a regra central do negócio.",
    ],
    prerequisites: [
      "Escopo priorizado por processo, usuário e resultado esperado.",
      "Regras de negócio validadas antes de construir telas e automações.",
      "Plano de evolução, suporte, segurança, dados e integrações futuras.",
    ],
    sectors: ["Operações técnicas", "Produtos digitais", "Portais internos", "Legados"],
    risks: [
      "Construir sistema para processo instável aumenta custo e retrabalho.",
      "Escopo amplo demais atrasa valor e dificulta adoção.",
      "Sem plano de suporte, segurança e evolução, o sistema vira novo legado.",
    ],
  },
  "integracao-sistemas": {
    signals: [
      "ERP, CRM, planilhas, pagamentos ou plataformas não compartilham dados de forma confiável.",
      "A operação cria controles paralelos para compensar sistemas desconectados.",
      "Falhas de sincronização geram retrabalho, atraso, erro de cobrança ou baixa rastreabilidade.",
    ],
    prerequisites: [
      "Mapeamento dos sistemas envolvidos, donos dos dados e frequência de atualização.",
      "Acesso a APIs, bancos, arquivos ou alternativas técnicas autorizadas.",
      "Definição de regras para tratamento de erro, conciliação, auditoria e segurança.",
    ],
    sectors: ["Financeiro", "Vendas", "Operações físico-digitais", "Indústria e logística"],
    risks: [
      "APIs limitadas, dados sem padrão ou acessos restritos podem mudar a solução.",
      "Sem monitoramento, falhas de sincronização ficam invisíveis.",
      "Integração sem regra de conciliação pode propagar erro entre sistemas.",
    ],
  },
} as const;

export const iconMap = {
  database: Database,
};
