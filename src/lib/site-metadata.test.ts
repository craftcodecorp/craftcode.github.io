import { describe, expect, it } from "vitest";
import { publicRoutes } from "./site-metadata";

describe("publicRoutes", () => {
  it("includes the public content hub in prerendered metadata", () => {
    expect(publicRoutes.map((route) => route.path)).toContain("/conteudos");
  });

  it("keeps canonical public routes and accented metadata for SEO", () => {
    expect(publicRoutes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          path: "/diagnostico-tecnologia-ia",
          canonicalPath: "/diagnostico-tecnologia-ia",
          title: "Diagnóstico de Tecnologia e IA Aplicada | CraftCode",
        }),
        expect.objectContaining({
          path: "/dados-bi",
          title: "Dados, BI e Dashboards para Gestão | CraftCode",
        }),
        expect.objectContaining({
          path: "/cardapio-facil",
          title: "Cardápio Fácil como Caso de IA Aplicada | CraftCode",
        }),
      ])
    );
  });
});
