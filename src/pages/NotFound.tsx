import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/lib/seo-utils";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SEO 
        title="Página não encontrada | 404"
        description="A página que você está procurando não foi encontrada."
        noIndex={true}
      />
      <div className="text-center p-8 max-w-md bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! Página não encontrada</p>
        <p className="text-gray-500 mb-6">A página que você está procurando pode ter sido removida ou está temporariamente indisponível.</p>
        <a href="/" className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
          Voltar para a página inicial
        </a>
      </div>
    </div>
  );
};

export default NotFound;
