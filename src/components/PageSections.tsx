import { Button } from "@/components/ui/button";
import { TrackedAnchor, TrackedRouterLink } from "@/components/TrackedLink";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLocation: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export const PageHero = ({
  eyebrow,
  title,
  description,
  primaryLocation,
  primaryHref = "/diagnostico-tecnologia-ia",
  primaryLabel = "Agendar diagnostico",
}: PageHeroProps) => (
  <section className="bg-gradient-hero text-white py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-4xl">
        <p className="text-secondary font-semibold mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-10">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="cta" size="lg" asChild>
            {primaryHref.startsWith("/") && !primaryHref.includes("#") ? (
              <TrackedRouterLink to={primaryHref} eventLabel={primaryLabel} eventLocation={primaryLocation}>
                {primaryLabel}
              </TrackedRouterLink>
            ) : (
              <TrackedAnchor href={primaryHref} eventLabel={primaryLabel} eventLocation={primaryLocation}>
                {primaryLabel}
              </TrackedAnchor>
            )}
          </Button>
          <Button variant="default" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
            <TrackedRouterLink to="/solucoes" eventLabel="Conhecer solucoes" eventLocation={primaryLocation}>
              Conhecer solucoes
            </TrackedRouterLink>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export const SectionHeader = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) => (
  <div className="max-w-3xl mb-12">
    {eyebrow && <p className="text-secondary font-semibold mb-3">{eyebrow}</p>}
    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-5">{title}</h2>
    {description && <p className="text-xl text-muted-foreground leading-relaxed">{description}</p>}
  </div>
);

export const DiagnosticCta = ({ location = "page_cta" }: { location?: string }) => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="bg-gradient-primary rounded-lg p-8 md:p-10 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-3">Comece pelo Diagnostico de Tecnologia e IA Aplicada.</h2>
          <p className="text-white/80 max-w-2xl">
            Identifique gargalos, oportunidades de automacao, riscos tecnicos e aplicacoes praticas antes de investir em uma solucao.
          </p>
        </div>
        <Button variant="secondary" size="lg" asChild>
          <TrackedRouterLink to="/diagnostico-tecnologia-ia" eventLabel="Agendar diagnostico" eventLocation={location}>
            Agendar diagnostico
          </TrackedRouterLink>
        </Button>
      </div>
    </div>
  </section>
);
