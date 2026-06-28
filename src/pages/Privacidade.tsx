import PageLayout from "@/components/PageLayout";
import { CONTACT_EMAIL } from "@/lib/site-metadata";

const sections = [
  {
    title: "Dados de contato",
    text: "Quando você envia o formulário ou chama pelo WhatsApp, usamos nome, email, empresa, setor e mensagem para responder ao pedido de diagnóstico e conduzir os próximos passos comerciais.",
  },
  {
    title: "Analytics e cookies",
    text: "O Google Analytics so e ativado depois do consentimento no banner do site. Usamos esses dados de forma agregada para entender paginas visitadas, CTAs, cliques de WhatsApp e envios de formulario.",
  },
  {
    title: "Compartilhamento",
    text: "Não vendemos dados pessoais. Serviços como EmailJS, WhatsApp e Google Analytics podem processar informações técnicas ou mensagens necessárias para entregar contato, mensageria e medição.",
  },
  {
    title: "Retencao e direitos",
    text: "Mantemos dados pelo tempo necessário para atendimento, histórico comercial e obrigações legais. Você pode pedir acesso, correção ou exclusão pelo email de contato.",
  },
];

const Privacidade = () => (
  <PageLayout path="/privacidade">
    <section className="bg-gradient-hero py-20 text-white md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 font-semibold text-secondary">Privacidade</p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">Politica de Privacidade</h1>
          <p className="text-xl leading-relaxed text-white/80">
            Esta página resume como a CraftCode trata dados recebidos pelo site institucional, formulário de diagnóstico, WhatsApp e analytics.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-lg border border-border bg-white p-6 shadow-soft">
              <h2 className="mb-3 text-2xl font-bold text-primary">{section.title}</h2>
              <p className="leading-relaxed text-muted-foreground">{section.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-border bg-muted/30 p-6">
          <h2 className="mb-3 text-2xl font-bold text-primary">Contato sobre privacidade</h2>
          <p className="text-muted-foreground">
            Para duvidas ou solicitacoes relacionadas a dados pessoais, envie uma mensagem para{" "}
            <a className="font-medium text-primary underline underline-offset-4" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Privacidade;
