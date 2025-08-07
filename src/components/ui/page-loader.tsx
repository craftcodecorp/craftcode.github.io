import React from "react";

interface PageLoaderProps {
  message?: string;
}

/**
 * PageLoader component
 * Displays a loading spinner and optional message while page content is loading
 */
export function PageLoader({ message = "Carregando..." }: PageLoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-primary/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
      </div>
      <p className="text-lg text-muted-foreground animate-pulse">{message}</p>
    </div>
  );
}

export default PageLoader;
