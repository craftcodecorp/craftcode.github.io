import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense, useRef } from "react";
import { HelmetProvider } from "react-helmet-async";
import { initWebPSupport } from "@/lib/webp-support";
import { trackPageView } from "@/lib/analytics-init";
import PageLoader from "@/components/ui/page-loader";
import AnalyticsConsent from "@/components/AnalyticsConsent";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CardapioFacil = lazy(() => import("./pages/CardapioFacil"));
const Solucoes = lazy(() => import("./pages/Solucoes"));
const DiagnosticoTecnologiaIa = lazy(() => import("./pages/DiagnosticoTecnologiaIa"));
const IaAplicada = lazy(() => import("./pages/IaAplicada"));
const AutomacaoProcessos = lazy(() => import("./pages/AutomacaoProcessos"));
const DadosBi = lazy(() => import("./pages/DadosBi"));
const SistemasSobMedida = lazy(() => import("./pages/SistemasSobMedida"));
const IntegracaoSistemas = lazy(() => import("./pages/IntegracaoSistemas"));
const Setores = lazy(() => import("./pages/Setores"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Conteudos = lazy(() => import("./pages/Conteudos"));
const Privacidade = lazy(() => import("./pages/Privacidade"));

const queryClient = new QueryClient();

// Componente para rastrear visualizações de página
const PageViewTracker = () => {
  const location = useLocation();
  const lastSentPath = useRef<string | null>(null);
  
  useEffect(() => {
    const path = location.pathname + location.search;
    if (lastSentPath.current === path) {
      return;
    }

    lastSentPath.current = path;
    trackPageView(path);
  }, [location.pathname, location.search]);
  
  return null;
};

const HashScroller = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = decodeURIComponent(location.hash.slice(1));
    let attempts = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let animationFrameId: number;
    const maxAttempts = 40;

    const scrollToTarget = () => {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      attempts += 1;
      if (attempts < maxAttempts) {
        timeoutId = setTimeout(() => {
          animationFrameId = window.requestAnimationFrame(scrollToTarget);
        }, 50);
      }
    };

    animationFrameId = window.requestAnimationFrame(scrollToTarget);

    return () => {
      clearTimeout(timeoutId);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [location.pathname, location.hash]);

  return null;
};

const App = () => {
  // Initialize WebP support when the app loads. Analytics starts only after consent.
  useEffect(() => {
    initWebPSupport();
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <PageViewTracker />
            <HashScroller />
            <AnalyticsConsent />
            <Suspense fallback={<PageLoader />}>
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
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
