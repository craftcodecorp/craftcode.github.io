import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { primaryCta, solutions } from "@/lib/repositioning-content";
import { LazyLoad } from "@/components/ui/lazy-load";
import { TrackedRouterLink } from "@/components/TrackedLink";

const Solutions = () => {
  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="text-secondary font-semibold mb-3">Soluções</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tecnologia certa para o gargalo certo.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nem tudo precisa virar sistema. Às vezes falta integrar, automatizar, organizar dados ou simplificar a rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            const href = solution.slug.includes("#") ? `/${solution.slug}` : `/${solution.slug}`;

            return (
              <LazyLoad key={solution.title} className="h-full" threshold={0.1} rootMargin="200px">
                <Card className="group hover:shadow-large transition-all duration-300 border-border bg-white shadow-medium h-full rounded-lg">
                  <CardContent className="p-6 lg:p-7 flex flex-col h-full">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors">
                      <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-3">{solution.title}</h3>
                    <p className="text-foreground/80 mb-5 leading-relaxed">{solution.description}</p>

                    <ul className="space-y-2 mt-auto mb-5">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <TrackedRouterLink
                      to={href}
                      className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
                      eventLabel={`Entender esta solução: ${solution.title}`}
                      eventLocation="solutions_grid"
                    >
                      Entender esta solução
                    </TrackedRouterLink>
                  </CardContent>
                </Card>
              </LazyLoad>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-border bg-background p-6 md:p-8 rounded-lg shadow-soft">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Não sabe por onde começar?</h3>
            <p className="text-muted-foreground max-w-2xl">
              O diagnóstico mostra onde agir primeiro sem transformar tecnologia em aposta.
            </p>
          </div>
          <Button variant="cta" size="lg" asChild>
            <TrackedRouterLink to={primaryCta.href} eventLabel="Ver oportunidades de melhoria" eventLocation="solutions_cta">
              Ver oportunidades de melhoria
            </TrackedRouterLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
