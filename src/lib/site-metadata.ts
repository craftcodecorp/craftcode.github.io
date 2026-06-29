export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://craftcode.com.br";
export const SITE_NAME = "CraftCode";
export const CONTACT_EMAIL = "contato@craftcode.com.br";
export const CARDAPIO_URL = "https://cardapiofacil.online";
export const WHATSAPP_URL = "https://wa.me/15559944371?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20Diagn%C3%B3stico%20de%20Tecnologia%20e%20IA%20Aplicada%20para%20minha%20empresa.";

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
    title: "CraftCode | IA, Automação e Sistemas no Vale do Paraíba",
    description:
      "IA aplicada, automação e sistemas sob medida para empresas do Vale do Paraíba modernizarem processos, integrarem sistemas e decidirem com dados.",
    canonicalPath: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/solucoes",
    title: "Soluções de Tecnologia e IA Aplicada | CraftCode",
    description:
      "Conheça as soluções da CraftCode em IA aplicada, automação, integração de sistemas, dados, BI, sistemas sob medida e consultoria técnica.",
    canonicalPath: "/solucoes",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/diagnostico-tecnologia-ia",
    title: "Diagnóstico de Tecnologia e IA Aplicada | CraftCode",
    description:
      "Analise processos, sistemas, dados e oportunidades de automação para identificar onde tecnologia e IA podem gerar impacto real na sua empresa.",
    canonicalPath: "/diagnostico-tecnologia-ia",
    priority: "0.95",
    changefreq: "weekly",
  },
  {
    path: "/ia-aplicada",
    title: "IA Aplicada para Empresas | CraftCode",
    description:
      "IA sem hype para atendimento, vendas, gestão e operação: assistentes, triagens, organização de informações e automações conectadas ao negócio.",
    canonicalPath: "/ia-aplicada",
    priority: "0.85",
    changefreq: "monthly",
  },
  {
    path: "/automacao-processos",
    title: "Automação de Processos para Empresas | CraftCode",
    description:
      "Automatize rotinas, reduza retrabalho, integre ferramentas e padronize processos com tecnologia aplicada à operação real.",
    canonicalPath: "/automacao-processos",
    priority: "0.85",
    changefreq: "monthly",
  },
  {
    path: "/dados-bi",
    title: "Dados, BI e Dashboards para Gestão | CraftCode",
    description:
      "Organize dados dispersos, crie indicadores confiáveis e transforme informações operacionais em decisões melhores para sua empresa.",
    canonicalPath: "/dados-bi",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/sistemas-sob-medida",
    title: "Sistemas Sob Medida e Modernização | CraftCode",
    description:
      "Sistemas internos, portais, modernização de legados e MVPs para empresas que precisam de tecnologia aderente aos processos reais.",
    canonicalPath: "/sistemas-sob-medida",
    priority: "0.8",
    changefreq: "monthly",
  },
  {
    path: "/integracao-sistemas",
    title: "Integração de Sistemas para Empresas | CraftCode",
    description:
      "Conecte ERPs, CRMs, planilhas, APIs, pagamentos e bancos de dados para reduzir controles paralelos e melhorar a rastreabilidade da operação.",
    canonicalPath: "/integracao-sistemas",
    priority: "0.85",
    changefreq: "monthly",
  },
  {
    path: "/setores",
    title: "Tecnologia para Setores e Operações Reais | CraftCode",
    description:
      "Soluções de IA, automação, dados e sistemas para serviços, indústria, varejo, franquias e operações físico-digitais no Vale do Paraíba.",
    canonicalPath: "/setores",
    priority: "0.75",
    changefreq: "monthly",
  },
  {
    path: "/sobre",
    title: "Sobre a CraftCode | Tecnologia Aplicada à Operação Real",
    description:
      "Conheça a CraftCode e a experiência de Ítalo Castilho em sistemas críticos, dados, produtos digitais, integrações e liderança técnica.",
    canonicalPath: "/sobre",
    priority: "0.7",
    changefreq: "monthly",
  },
  {
    path: "/conteudos",
    title: "Conteúdos sobre IA, Automação e Operação | CraftCode",
    description:
      "Ideias práticas sobre IA aplicada, automação, dados, integração de sistemas e tecnologia para operações reais, sem hype e sem jargão desnecessário.",
    canonicalPath: "/conteudos",
    priority: "0.6",
    changefreq: "monthly",
  },
  {
    path: "/privacidade",
    title: "Política de Privacidade | CraftCode",
    description:
      "Entenda como a CraftCode usa dados de contato, mensagens, analytics e cookies no site institucional e no fluxo de diagnóstico.",
    canonicalPath: "/privacidade",
    priority: "0.2",
    changefreq: "yearly",
  },
  {
    path: "/cardapio-facil",
    title: "Cardápio Fácil como Caso de IA Aplicada | CraftCode",
    description:
      "Conheça o Cardápio Fácil como prova de IA aplicada, automação via WhatsApp, integração e produto digital criado pela CraftCode.",
    canonicalPath: "/cardapio-facil",
    priority: "0.5",
    changefreq: "monthly",
  },
];
