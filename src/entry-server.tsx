import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from "react-router-dom";
import { HelmetProvider, FilledContext } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "@/pages/Index";
import CardapioFacil from "@/pages/CardapioFacil";
import NotFound from "@/pages/NotFound";
import { publicRoutes } from "@/lib/site-metadata";
import Solucoes from "@/pages/Solucoes";
import DiagnosticoTecnologiaIa from "@/pages/DiagnosticoTecnologiaIa";
import IaAplicada from "@/pages/IaAplicada";
import AutomacaoProcessos from "@/pages/AutomacaoProcessos";
import DadosBi from "@/pages/DadosBi";
import SistemasSobMedida from "@/pages/SistemasSobMedida";
import IntegracaoSistemas from "@/pages/IntegracaoSistemas";
import Setores from "@/pages/Setores";
import Sobre from "@/pages/Sobre";
import Conteudos from "@/pages/Conteudos";
import Privacidade from "@/pages/Privacidade";

export { publicRoutes };

export function render(url: string) {
  const helmetContext = {} as FilledContext;
  const queryClient = new QueryClient();

  const app = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <StaticRouter location={url}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solucoes" element={<Solucoes />} />
            <Route path="/diagnostico-tecnologia-ia" element={<DiagnosticoTecnologiaIa />} />
            <Route path="/ia-aplicada" element={<IaAplicada />} />
            <Route path="/automacao-processos" element={<AutomacaoProcessos />} />
            <Route path="/dados-bi" element={<DadosBi />} />
            <Route path="/sistemas-sob-medida" element={<SistemasSobMedida />} />
            <Route path="/integracao-sistemas" element={<IntegracaoSistemas />} />
            <Route path="/setores" element={<Setores />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/conteudos" element={<Conteudos />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/cardapio-facil" element={<CardapioFacil />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StaticRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return {
    app,
    head: [
      helmet.title.toString(),
      helmet.priority.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ].filter(Boolean).join("\n"),
  };
}
