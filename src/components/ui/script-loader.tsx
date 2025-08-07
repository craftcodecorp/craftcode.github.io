import { useEffect, useState } from "react";

interface ScriptLoaderProps {
  src: string;
  id?: string;
  async?: boolean;
  defer?: boolean;
  strategy?: "beforeInteractive" | "afterInteractive" | "lazyOnload";
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * ScriptLoader component
 * Optimizes loading of third-party scripts based on loading strategy
 * 
 * @param src - Script URL to load
 * @param id - Optional ID for the script tag
 * @param async - Whether to load the script asynchronously
 * @param defer - Whether to defer loading the script
 * @param strategy - Loading strategy:
 *   - beforeInteractive: Load immediately (critical scripts)
 *   - afterInteractive: Load after page becomes interactive (default)
 *   - lazyOnload: Load during idle time (non-critical scripts)
 * @param onLoad - Callback function when script loads successfully
 * @param onError - Callback function when script fails to load
 */
export function ScriptLoader({
  src,
  id,
  async = true,
  defer = true,
  strategy = "afterInteractive",
  onLoad,
  onError,
}: ScriptLoaderProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Skip if already loaded
    if (loaded) return;
    
    // Check if script already exists
    const existingScript = document.getElementById(id || src);
    if (existingScript) {
      setLoaded(true);
      onLoad?.();
      return;
    }

    // Function to create and load script
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = src;
      script.async = async;
      script.defer = defer;
      if (id) script.id = id;

      // Event handlers
      script.onload = () => {
        setLoaded(true);
        onLoad?.();
      };

      script.onerror = () => {
        onError?.();
      };

      document.body.appendChild(script);
    };

    // Apply loading strategy
    if (strategy === "beforeInteractive") {
      // Load immediately
      loadScript();
    } else if (strategy === "afterInteractive") {
      // Load after page becomes interactive
      if (document.readyState === "complete") {
        loadScript();
      } else {
        window.addEventListener("load", loadScript);
        return () => window.removeEventListener("load", loadScript);
      }
    } else if (strategy === "lazyOnload") {
      // Load during browser idle time
      if ("requestIdleCallback" in window) {
        (window as any).requestIdleCallback(loadScript);
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(loadScript, 1500);
      }
    }
  }, [src, id, async, defer, strategy, loaded, onLoad, onError]);

  return null;
}

export default ScriptLoader;
