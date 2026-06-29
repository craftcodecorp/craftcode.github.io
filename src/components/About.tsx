import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Database, GitBranch, ShieldCheck } from "lucide-react";
import { authorityPillars, primaryCta } from "@/lib/repositioning-content";
import { TrackedAnchor, TrackedRouterLink } from "@/components/TrackedLink";

type AboutProps = {
  ctaHref?: string;
  ctaLocation?: string;
};

const About = ({ ctaHref = "/diagnostico-tecnologia-ia", ctaLocation = "about" }: AboutProps) => {
  const ctaLabel = primaryCta.label;

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-secondary font-semibold mb-3">Sobre a CraftCode</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Consultoria técnica para simplificar operações complexas.
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A CraftCode foi criada por Ítalo Castilho para aproximar tecnologia madura, IA aplicada e visão de negócio da rotina das empresas da região.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              A experiência vem de sistemas críticos, dados, produtos digitais, integrações e liderança técnica em contextos que exigem estabilidade e clareza.
            </p>

            <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                ["20+ anos", "Tecnologia aplicada a negócios reais."],
                ["Sistemas críticos", "Ambientes com estabilidade e rastreabilidade."],
                ["Dados e produto", "Decisão, evolução e operação em escala."],
              ].map(([value, label]) => (
                <div key={value} className="rounded-lg border border-border bg-white p-4 shadow-soft">
                  <p className="text-2xl font-bold text-primary">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                [ShieldCheck, "Sistemas críticos", "Estabilidade, segurança e confiabilidade."],
                [Database, "Dados e BI", "Informação útil para decisão de gestão."],
                [GitBranch, "Produto e escala", "Soluções preparadas para evoluir."],
                [Award, "Liderança técnica", "Visão técnica com responsabilidade de negócio."],
              ].map(([Icon, title, description]) => (
                <div key={String(title)} className="flex items-start bg-muted/30 p-4 rounded-lg border border-border/60">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{title as string}</h3>
                    <p className="text-sm text-muted-foreground">{description as string}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="default" size="lg" asChild>
              {ctaHref.startsWith("/") ? (
                <TrackedRouterLink to={ctaHref} eventLabel={ctaLabel} eventLocation={ctaLocation}>
                  {ctaLabel}
                </TrackedRouterLink>
              ) : (
                <TrackedAnchor href={ctaHref} eventLabel={ctaLabel} eventLocation={ctaLocation}>
                  {ctaLabel}
                </TrackedAnchor>
              )}
            </Button>
          </div>

          <Card className="shadow-large border-border bg-white rounded-lg">
            <CardContent className="p-6 lg:p-8">
              <div className="w-24 h-24 rounded-lg mb-6 overflow-hidden bg-primary/5 border border-border shadow-sm">
                <img
                  src="/images/italo-castilho-avatar-v3.png"
                  alt="Retrato de Ítalo Castilho"
                  className="h-full w-full object-cover object-[50%_28%]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-1">Ítalo Castilho</h3>
              <p className="text-secondary font-medium mb-5">Fundador da CraftCode</p>

              <p className="text-foreground mb-6 leading-relaxed">
                Antes de automatizar, entendemos o processo. Antes de usar IA, organizamos dados, fluxos e objetivos.
              </p>

              <div className="flex flex-wrap gap-2">
                {authorityPillars.map((pillar) => (
                  <span key={pillar} className="px-3 py-1 bg-secondary/10 text-secondary font-medium rounded-md text-sm">
                    {pillar}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
