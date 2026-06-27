import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Database, GitBranch, ShieldCheck } from "lucide-react";
import { authorityPillars } from "@/lib/repositioning-content";
import { TrackedAnchor, TrackedRouterLink } from "@/components/TrackedLink";

type AboutProps = {
  ctaHref?: string;
  ctaLocation?: string;
};

const About = ({ ctaHref = "/diagnostico-tecnologia-ia", ctaLocation = "about" }: AboutProps) => {
  const ctaLabel = "Agendar diagnostico";

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-secondary font-semibold mb-3">Sobre a CraftCode</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tecnologia de alto nivel aplicada a realidade das empresas da regiao.
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A CraftCode foi criada por Italo Castilho, profissional de tecnologia com mais de 20 anos de experiencia em sistemas criticos, dados, produtos digitais, integracoes e lideranca tecnica.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              A trajetoria passa por mercado financeiro, consultorias, startups, varejo, pagamentos digitais e novos negocios, sempre conectando tecnologia a operacao real das empresas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                [ShieldCheck, "Sistemas criticos", "Estabilidade, seguranca e confiabilidade."],
                [Database, "Dados e BI", "Informacao util para decisao de gestao."],
                [GitBranch, "Produto e escala", "Solucoes preparadas para evoluir."],
                [Award, "Lideranca tecnica", "Visao tecnica com responsabilidade de negocio."],
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
                  Conversar sobre minha operacao
                </TrackedRouterLink>
              ) : (
                <TrackedAnchor href={ctaHref} eventLabel={ctaLabel} eventLocation={ctaLocation}>
                  Conversar sobre minha operacao
                </TrackedAnchor>
              )}
            </Button>
          </div>

          <Card className="shadow-large border-border bg-white rounded-lg">
            <CardContent className="p-6 lg:p-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-lg mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">IC</span>
              </div>

              <h3 className="text-2xl font-bold text-primary mb-1">Italo Castilho</h3>
              <p className="text-secondary font-medium mb-5">Fundador da CraftCode</p>

              <p className="text-foreground mb-6 leading-relaxed">
                Antes de automatizar, e preciso entender o processo. Antes de usar IA, e preciso organizar dados, fluxos e objetivos. Antes de construir software, e preciso saber qual problema de negocio sera resolvido.
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
