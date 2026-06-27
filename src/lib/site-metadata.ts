export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://craftcode.com.br";
export const SITE_NAME = "CraftCode";
export const CONTACT_EMAIL = "contato@craftcode.com.br";
export const CARDAPIO_URL = "https://cardapiofacil.online";
export const WHATSAPP_URL = "https://wa.me/15559944371?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20Diagn%C3%B3stico%20de%20Tecnologia%20e%20IA%20Aplicada%20para%20minha%20empresa.";

export const toAbsoluteUrl = (path: string) => {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

export type PublicRoute = {
  path: string;
  title: string;
  description: string;
  canonicalPath: string;
  priority: string;
  changefreq: string;
};

export const publicRoutes: PublicRoute[] = [
  {
    path: "/",
    title: "CraftCode | IA, Automacao e Sistemas no Vale do Paraiba",
    description:
      "IA aplicada, automacao e sistemas sob medida para empresas de Pindamonhangaba e Vale do Paraiba modernizarem processos, integrarem sistemas e decidirem com dados.",
    canonicalPath: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/solucoes",
    title: "Solucoes de Tecnologia e IA Aplicada | CraftCode",
    description:
      "Conheca as solucoes da CraftCode em IA aplicada, automacao, integracao de sistemas, dados, BI, sistemas sob medida e consultoria tecnica.",
    canonicalPath: "/solucoes",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/diagnostico-tecnologia-ia",
    title: "Diagnostico de Tecnologia e IA Aplicada | CraftCode",
    description:
      "Analise processos, sistemas, dados e oportunidades de automacao para identificar onde tecnologia e IA podem gerar impacto real na sua empresa.",
    canonicalPath: "/diagnostico-tecnologia-ia",
    priority: "0.95",
    changefreq: "weekly",
  },
  {
    path: "/ia-aplicada",
    title: "IA Aplicada para Empresas | CraftCode",
    description:
      "IA sem hype para atendimento, vendas, gestao e operacao: assistentes, triagens, organizacao de informacoes e automacoes conectadas ao negocio.",
    canonicalPath: "/ia-aplicada",
    priority: "0.85",
    changefreq: "monthly",
  },
  {
    path: "/automacao-processos",
    title: "Automacao de Processos para Empresas | CraftCode",
    description:
      "Automatize rotinas, reduza retrabalho, integre ferramentas e padronize processos com tecnologia aplicada a operacao real.",
    canonicalPath: "/automacao-processos",
    priority: "0.85",
    changefreq: "monthly",
  },
  {
    path: "/dados-bi",
    title: "Dados, BI e Dashboards para Gestao | CraftCode",
    description:
      "Organize dados dispersos, crie indicadores confiaveis e transforme informacoes operacionais em decisoes melhores para sua empresa.",
    canonicalPath: "/dados-bi",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/sistemas-sob-medida",
    title: "Sistemas Sob Medida e Modernizacao | CraftCode",
    description:
      "Sistemas internos, portais, modernizacao de legados e MVPs para empresas que precisam de tecnologia aderente aos processos reais.",
    canonicalPath: "/sistemas-sob-medida",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/integracao-sistemas",
    title: "Integracao de Sistemas para Empresas | CraftCode",
    description:
      "Conecte ERPs, CRMs, planilhas, APIs, pagamentos e bancos de dados para reduzir controles paralelos e melhorar a rastreabilidade da operacao.",
    canonicalPath: "/integracao-sistemas",
    priority: "0.85",
    changefreq: "monthly",
  },
  {
    path: "/setores",
    title: "Tecnologia para Setores e Operacoes Reais | CraftCode",
    description:
      "Solucoes de IA, automacao, dados e sistemas para servicos, industria, varejo, franquias e operacoes fisico-digitais no Vale do Paraiba.",
    canonicalPath: "/setores",
    priority: "0.75",
    changefreq: "monthly",
  },
  {
    path: "/sobre",
    title: "Sobre a CraftCode | Tecnologia Aplicada a Operacao Real",
    description:
      "Conheca a CraftCode e a experiencia de Italo Castilho em sistemas criticos, dados, produtos digitais, integracoes e lideranca tecnica.",
    canonicalPath: "/sobre",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/conteudos",
    title: "Conteudos sobre IA Aplicada e Automacao | CraftCode",
    description:
      "Temas iniciais para empresarios que querem entender IA aplicada, automacao, dados, integracao e sistemas sob medida sem hype.",
    canonicalPath: "/conteudos",
    priority: "0.35",
    changefreq: "monthly",
  },
  {
    path: "/privacidade",
    title: "Politica de Privacidade | CraftCode",
    description:
      "Entenda como a CraftCode usa dados de contato, mensagens, analytics e cookies no site institucional e no fluxo de diagnostico.",
    canonicalPath: "/privacidade",
    priority: "0.2",
    changefreq: "yearly",
  },
  {
    path: "/cardapio-facil",
    title: "Cardapio Facil como Caso de IA Aplicada | CraftCode",
    description:
      "Conheca o Cardapio Facil como prova de IA aplicada, automacao via WhatsApp, integracao e produto digital criado pela CraftCode.",
    canonicalPath: "/cardapio-facil",
    priority: "0.5",
    changefreq: "monthly",
  },
];
