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
  label: "Agendar diagnostico",
  href: "/diagnostico-tecnologia-ia",
};

export const secondaryCta = {
  label: "Conhecer solucoes",
  href: "/solucoes",
};

export const brandPhrases = [
  "IA sem hype. Tecnologia com aplicacao real.",
  "Antes de automatizar, entendemos o processo.",
  "Dados nao servem para enfeitar dashboard. Servem para decidir melhor.",
  "A melhor tecnologia e aquela que a operacao consegue usar.",
];

export const painPoints = [
  "Informacoes espalhadas em planilhas.",
  "Retrabalho entre areas.",
  "Sistemas que nao conversam entre si.",
  "Atendimento manual e pouco escalavel.",
  "Indicadores dificeis de acompanhar.",
  "Decisoes tomadas sem dados confiaveis.",
  "Processos dependentes de pessoas especificas.",
  "Duvida sobre onde aplicar IA com seguranca.",
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
      "Assistentes, triagens, geracao de documentos e analises conectadas a processos reais de atendimento, vendas, gestao e operacao.",
    benefits: ["Menos trabalho manual", "Respostas mais consistentes", "Apoio pratico para equipes"],
    examples: ["Triagem de solicitacoes", "Assistentes internos", "Organizacao de informacoes"],
    icon: Bot,
  },
  {
    slug: "automacao-processos",
    title: "Automacao de processos",
    shortTitle: "Automacao",
    description:
      "Fluxos, alertas, integracoes e rotinas automatizadas para reduzir retrabalho, padronizar operacoes e liberar tempo da equipe.",
    benefits: ["Reducao de retrabalho", "Rotinas mais previsiveis", "Padronizacao operacional"],
    examples: ["Alertas e notificacoes", "Fluxos internos", "Tarefas repetitivas automatizadas"],
    icon: Settings2,
  },
  {
    slug: "integracao-sistemas",
    title: "Integracao de sistemas",
    shortTitle: "Integracao",
    description:
      "Conexao entre ERPs, CRMs, planilhas, plataformas, pagamentos, APIs e bancos de dados para dar consistencia a informacao.",
    benefits: ["Menos controles paralelos", "Dados sincronizados", "Operacao mais rastreavel"],
    examples: ["APIs", "Sincronizacao de dados", "Integracoes com pagamentos"],
    icon: Network,
  },
  {
    slug: "dados-bi",
    title: "Dados, BI e dashboards",
    shortTitle: "Dados e BI",
    description:
      "Organizacao de dados e indicadores gerenciais para transformar informacoes dispersas em decisoes melhores.",
    benefits: ["Indicadores confiaveis", "Relatorios automatizados", "Visao executiva da operacao"],
    examples: ["Dashboards operacionais", "Paineis de performance", "Relatorios recorrentes"],
    icon: BarChart3,
  },
  {
    slug: "sistemas-sob-medida",
    title: "Sistemas sob medida",
    shortTitle: "Sistemas",
    description:
      "Sistemas internos, portais, modernizacoes e MVPs quando integrar ferramentas existentes nao resolve o problema de negocio.",
    benefits: ["Ferramenta aderente ao processo", "Base preparada para evoluir", "Menos improviso operacional"],
    examples: ["Portais", "Ferramentas internas", "Modernizacao de legados"],
    icon: Blocks,
  },
  {
    slug: "solucoes#consultoria",
    title: "Consultoria tecnica e arquitetura",
    shortTitle: "Consultoria",
    description:
      "Revisao tecnica, desenho de solucao e apoio para empresas que precisam decidir com clareza antes de investir em tecnologia.",
    benefits: ["Decisoes tecnicas mais seguras", "Riscos conhecidos", "Roadmap mais claro"],
    examples: ["Revisao de arquitetura", "Avaliacao tecnica", "Plano de evolucao"],
    icon: ClipboardCheck,
  },
];

export const methodSteps = [
  {
    title: "Diagnostico",
    description: "Mapeamos processos, sistemas, dados, gargalos e oportunidades praticas.",
    icon: Target,
  },
  {
    title: "Priorizacao",
    description: "Organizamos o plano por impacto, esforco, risco e maturidade da operacao.",
    icon: LineChart,
  },
  {
    title: "Prototipacao",
    description: "Validamos fluxos, dados e experiencia antes de escalar a implementacao.",
    icon: GitBranch,
  },
  {
    title: "Implementacao",
    description: "Construimos automacoes, integracoes, dashboards ou sistemas com foco em uso real.",
    icon: Wrench,
  },
  {
    title: "Evolucao",
    description: "Medimos resultados, ajustamos processos e preparamos a solucao para crescer.",
    icon: RefreshCcw,
  },
];

export const sectors = [
  {
    title: "Servicos em crescimento",
    description:
      "Clinicas, escolas, imobiliarias, franquias, academias e empresas B2B que precisam organizar atendimento, vendas e gestao.",
    pains: ["Atendimento desorganizado", "Excesso de planilhas", "Baixa previsibilidade"],
    icon: Users,
  },
  {
    title: "Industria e operacoes tecnicas",
    description:
      "Pequenas e medias industrias, manutencao, estoque, logistica e producao com dados operacionais dispersos.",
    pains: ["Controles paralelos", "Pouca integracao", "Baixa visibilidade de indicadores"],
    icon: Factory,
  },
  {
    title: "Varejo e franquias",
    description:
      "Redes locais, franquias e negocios com lojas, equipes externas ou multiplos pontos de operacao.",
    pains: ["Gestao descentralizada", "Divergencia de informacoes", "Padronizacao dificil"],
    icon: Store,
  },
  {
    title: "Operacoes fisico-digitais",
    description:
      "Negocios que conectam software, pagamento, equipamentos, atendimento e suporte operacional.",
    pains: ["Falhas de integracao", "Baixa rastreabilidade", "Suporte reativo"],
    icon: Building2,
  },
];

export const authorityPillars = [
  "Mais de 20 anos em tecnologia",
  "Sistemas criticos e integracoes",
  "Dados, BI e visualizacao",
  "Produto digital e escala",
  "Lideranca tecnica com visao de negocio",
];

export const contentTopics = [
  "Onde a IA realmente pode ajudar PMEs do Vale do Paraiba",
  "Como saber se sua empresa precisa de sistema, automacao ou organizacao de processos",
  "O erro de comecar pela ferramenta antes de entender o processo",
  "Como automatizar atendimento sem perder qualidade",
  "Por que empresas ainda dependem demais de planilhas",
  "O que uma operacao fisico-digital ensina sobre integracao e cobranca",
  "Como transformar dados em decisoes sem dashboards inuteis",
  "IA para industria: aplicacoes praticas fora do hype",
  "Como preparar sua empresa para usar IA com seguranca",
  "Tecnologia de alto nivel aplicada aos negocios do Vale do Paraiba",
];

export const solutionBySlug = (slug: string) =>
  solutions.find((solution) => solution.slug === slug || solution.slug.split("#")[0] === slug);

export const serviceDecisionContent = {
  "ia-aplicada": {
    signals: [
      "Atendimento, vendas ou operacao dependem de respostas repetitivas e pouco padronizadas.",
      "A equipe perde tempo buscando informacoes em documentos, sistemas e historicos dispersos.",
      "Ha interesse em IA, mas ainda nao esta claro onde ela gera valor com seguranca.",
    ],
    prerequisites: [
      "Processos minimamente descritos e responsaveis disponiveis para validar regras.",
      "Fontes de dados, documentos ou bases de conhecimento com qualidade suficiente.",
      "Criterios claros para revisao humana, limites de uso e protecao de informacoes sensiveis.",
    ],
    sectors: ["Atendimento consultivo", "Vendas B2B", "Servicos tecnicos", "Operacoes internas"],
    risks: [
      "Dados ruins ou documentos desatualizados reduzem qualidade das respostas.",
      "Uso sem revisao humana pode gerar orientacoes inconsistentes.",
      "IA nao corrige processo confuso nem substitui regra de negocio bem definida.",
    ],
  },
  "automacao-processos": {
    signals: [
      "A mesma informacao e digitada em mais de um lugar.",
      "Prazos dependem de lembretes manuais, planilhas ou pessoas especificas.",
      "Erros operacionais acontecem por falta de padrao entre etapas e areas.",
    ],
    prerequisites: [
      "Mapeamento do fluxo atual, excecoes e regras de negocio.",
      "Acesso as ferramentas envolvidas ou alternativas para integracao.",
      "Equipe alinhada para mudar rotina, medir ganhos e ajustar processos.",
    ],
    sectors: ["Administrativo", "Financeiro", "Suporte", "Operacoes com recorrencia"],
    risks: [
      "Automatizar excecoes demais aumenta manutencao e fragilidade.",
      "Integracoes sem tratamento de erro criam falhas silenciosas.",
      "Baixa adesao da equipe pode manter controles paralelos ativos.",
    ],
  },
  "dados-bi": {
    signals: [
      "Gestao olha para numeros diferentes dependendo da planilha ou sistema consultado.",
      "Indicadores demoram para ser montados e chegam tarde para apoiar decisoes.",
      "Dados existem, mas nao estao organizados para acompanhar operacao, vendas ou margem.",
    ],
    prerequisites: [
      "Identificacao das fontes de dados e responsaveis por cada indicador.",
      "Definicao do que sera medido, para qual decisao e com qual frequencia.",
      "Tratamento de qualidade, historico, permissoes e governanca minima.",
    ],
    sectors: ["Gestao executiva", "Comercial", "Industria", "Varejo e franquias"],
    risks: [
      "Indicadores sem dono viram relatorio bonito e pouco usado.",
      "Fontes divergentes precisam de conciliacao antes do dashboard.",
      "Sem rotina de analise, BI nao melhora decisao sozinho.",
    ],
  },
  "sistemas-sob-medida": {
    signals: [
      "Ferramentas prontas exigem improvisos demais ou nao acompanham o processo real.",
      "A empresa precisa de portal, sistema interno ou modernizacao de legado.",
      "Integrar ferramentas existentes nao resolve a regra central do negocio.",
    ],
    prerequisites: [
      "Escopo priorizado por processo, usuario e resultado esperado.",
      "Regras de negocio validadas antes de construir telas e automacoes.",
      "Plano de evolucao, suporte, seguranca, dados e integracoes futuras.",
    ],
    sectors: ["Operacoes tecnicas", "Produtos digitais", "Portais internos", "Legados"],
    risks: [
      "Construir sistema para processo instavel aumenta custo e retrabalho.",
      "Escopo amplo demais atrasa valor e dificulta adocao.",
      "Sem plano de suporte, seguranca e evolucao, o sistema vira novo legado.",
    ],
  },
  "integracao-sistemas": {
    signals: [
      "ERP, CRM, planilhas, pagamentos ou plataformas nao compartilham dados de forma confiavel.",
      "A operacao cria controles paralelos para compensar sistemas desconectados.",
      "Falhas de sincronizacao geram retrabalho, atraso, erro de cobranca ou baixa rastreabilidade.",
    ],
    prerequisites: [
      "Mapeamento dos sistemas envolvidos, donos dos dados e frequencia de atualizacao.",
      "Acesso a APIs, bancos, arquivos ou alternativas tecnicas autorizadas.",
      "Definicao de regras para tratamento de erro, conciliacao, auditoria e seguranca.",
    ],
    sectors: ["Financeiro", "Vendas", "Operacoes fisico-digitais", "Industria e logistica"],
    risks: [
      "APIs limitadas, dados sem padrao ou acessos restritos podem mudar a solucao.",
      "Sem monitoramento, falhas de sincronizacao ficam invisiveis.",
      "Integracao sem regra de conciliacao pode propagar erro entre sistemas.",
    ],
  },
} as const;

export const iconMap = {
  database: Database,
};
