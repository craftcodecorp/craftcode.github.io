import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  getAnalyticsConsent,
  grantAnalyticsConsent,
  denyAnalyticsConsent,
  trackPageView,
} from "@/lib/analytics-init";
import { Link, useLocation } from "react-router-dom";

const AnalyticsConsent = () => {
  const [consent, setConsent] = useState<"granted" | "denied" | null>(null);
  const location = useLocation();

  useEffect(() => {
    setConsent(getAnalyticsConsent());
  }, []);

  if (consent !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-3xl rounded-lg border border-border bg-white p-4 shadow-large">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Usamos analytics para entender visitas e conversões do diagnóstico. Você pode aceitar ou continuar sem esse rastreamento.
          {" "}
          <Link to="/privacidade" className="font-medium text-primary underline underline-offset-4">
            Ver privacidade
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              denyAnalyticsConsent();
              setConsent("denied");
            }}
          >
            Recusar
          </Button>
          <Button
            type="button"
            size="sm"
            onClick={() => {
              grantAnalyticsConsent();
              trackPageView(location.pathname + location.search);
              setConsent("granted");
            }}
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsConsent;
