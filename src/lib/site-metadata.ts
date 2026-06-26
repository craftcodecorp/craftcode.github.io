export const SITE_URL = import.meta.env.VITE_SITE_URL || "https://craftcode.com.br";
export const SITE_NAME = "CraftCode";
export const CONTACT_EMAIL = "contato@craftcode.com.br";
export const CARDAPIO_URL = "https://cardapiofacil.online";
export const WHATSAPP_URL = "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20CraftCode.";

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
    title: "CraftCode Technology | Desenvolvimento de Software, IA e Dados",
    description:
      "A CraftCode desenvolve software sob medida, soluções com IA, dados e modernização de sistemas para empresas que precisam transformar tecnologia em resultado.",
    canonicalPath: "/",
    priority: "1.0",
    changefreq: "weekly",
  },
  {
    path: "/cardapio-facil",
    title: "Cardápio Fácil | Planejamento de Refeições com IA",
    description:
      "Conheça o Cardápio Fácil, produto da CraftCode que usa IA para entregar cardápios personalizados e listas de compras direto pelo WhatsApp.",
    canonicalPath: "/cardapio-facil",
    priority: "0.8",
    changefreq: "monthly",
  },
];
