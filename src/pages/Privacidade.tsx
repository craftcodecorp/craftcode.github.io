import PageLayout from "@/components/PageLayout";
import { CONTACT_EMAIL } from "@/lib/site-metadata";

const sections = [
  {
    title: "Dados de contato",
    text: "Quando voce envia o formulario ou chama pelo WhatsApp, usamos nome, email, empresa, setor e mensagem para responder ao pedido de diagnostico e conduzir os proximos passos comerciais.",
  },
  {
    title: "Analytics e cookies",
    text: "O Google Analytics so e ativado depois do consentimento no banner do site. Usamos esses dados de forma agregada para entender paginas visitadas, CTAs, cliques de WhatsApp e envios de formulario.",
  },
  {
    title: "Compartilhamento",
    text: "Nao vendemos dados pessoais. Servicos como EmailJS, WhatsApp e Google Analytics podem processar informacoes tecnicas ou mensagens necessarias para entregar contato, mensageria e medicao.",
  },
  {
    title: "Retencao e direitos",
    text: "Mantemos dados pelo tempo necessario para atendimento, historico comercial e obrigacoes legais. Voce pode pedir acesso, correcao ou exclusao pelo email de contato.",
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
            Esta pagina resume como a CraftCode trata dados recebidos pelo site institucional, formulario de diagnostico, WhatsApp e analytics.
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
