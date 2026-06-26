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
