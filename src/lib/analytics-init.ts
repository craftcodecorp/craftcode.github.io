import ReactGA from 'react-ga4';

let analyticsInitialized = false;
const analyticsConsentKey = "craftcode_analytics_consent";

export const hasAnalyticsConsent = (): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(analyticsConsentKey) === "granted";
};

export const grantAnalyticsConsent = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(analyticsConsentKey, "granted");
  initializeAnalytics();
};

export const denyAnalyticsConsent = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(analyticsConsentKey, "denied");
};

export const getAnalyticsConsent = (): "granted" | "denied" | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(analyticsConsentKey);
  return value === "granted" || value === "denied" ? value : null;
};

/**
 * Inicializa o Google Analytics com o ID de medição fornecido nas variáveis de ambiente.
 * Em ambiente de desenvolvimento, o rastreamento é desativado por padrão.
 */
export const initializeAnalytics = (): void => {
  if (analyticsInitialized) {
    return;
  }

  if (!hasAnalyticsConsent()) {
    return;
  }

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const isDevelopment = import.meta.env.VITE_ENV === 'development';
  
  if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(measurementId, {
      testMode: isDevelopment,
      gaOptions: {
        send_page_view: false,
      },
      gtagOptions: {
        send_page_view: false,
      },
    });
    analyticsInitialized = true;
    
    // Ativar modo de depuração se estiver em ambiente de desenvolvimento
    if (isDevelopment) {
      ReactGA.set({ debug: true });
    }
    
    console.log(`Google Analytics initialized with ID: ${measurementId}`);
    console.log(`Analytics test mode: ${isDevelopment ? 'ON' : 'OFF'}`);
  } else {
    console.warn('Google Analytics Measurement ID not provided or using placeholder value. Analytics tracking is disabled.');
  }
};

/**
 * Registra uma visualização de página no Google Analytics.
 * @param path - O caminho da página visualizada
 */
export const trackPageView = (path: string): void => {
  initializeAnalytics();
  if (!analyticsInitialized) {
    return;
  }

  ReactGA.send({ hitType: "pageview", page: path, page_path: path });
  console.log(`Page view tracked: ${path}`);
};

/**
 * Registra um evento no Google Analytics.
 * @param category - Categoria do evento
 * @param action - Ação realizada
 * @param label - Rótulo opcional do evento
 * @param value - Valor numérico opcional associado ao evento
 */
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
): void => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
  
  console.log(`Event tracked: ${category} - ${action}${label ? ` - ${label}` : ''}${value ? ` - ${value}` : ''}`);
};

export const trackConversionEvent = (
  name:
    | "cta_click"
    | "navigation_click"
    | "content_click"
    | "whatsapp_click"
    | "contact_form_submit"
    | "contact_form_success"
    | "contact_form_error",
  params: Record<string, string | number | boolean | undefined> = {}
): void => {
  initializeAnalytics();

  if (!analyticsInitialized) {
    console.log(`Event skipped: ${name}`, params);
    return;
  }

  ReactGA.event(name, {
    page_path: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...params,
  });
  console.log(`Event tracked: ${name}`, params);
};
