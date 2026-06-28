import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, Mail, MapPin, MessageSquare, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { submitContactForm } from "@/services/contactService";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site-metadata";
import { trackConversionEvent } from "@/lib/analytics-init";
import { TrackedAnchor } from "@/components/TrackedLink";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email invalido" }),
  company: z.string().min(2, { message: "Informe o nome da empresa" }),
  sector: z.string().optional(),
  message: z.string().min(10, { message: "Descreva brevemente o desafio da empresa" }),
});

type FormData = z.infer<typeof formSchema>;

const fieldClassName =
  "h-12 border border-border bg-white text-gray-900 shadow-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2";

const errorFieldClassName =
  "border-red-500 focus-visible:ring-red-500";

const getMessageLengthBucket = (message: string) => {
  if (message.length < 80) return "short";
  if (message.length < 240) return "medium";
  return "long";
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      sector: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);
    trackConversionEvent("contact_form_submit", {
      form_name: "diagnostico_tecnologia_ia",
      conversion_goal: "diagnostico_tecnologia_ia",
      sector_present: Boolean(data.sector),
      message_length_bucket: getMessageLengthBucket(data.message),
    });

    try {
      const response = await submitContactForm({
        name: data.name,
        email: data.email,
        company: data.company,
        message: [
          "Interesse: Diagnóstico de Tecnologia e IA Aplicada",
          data.sector ? `Setor: ${data.sector}` : undefined,
          `Desafio: ${data.message}`,
        ]
          .filter(Boolean)
          .join("\n"),
      });

      if (response.success) {
        setSubmitSuccess(true);
        reset();
        trackConversionEvent("contact_form_success", {
          form_name: "diagnostico_tecnologia_ia",
          conversion_goal: "diagnostico_tecnologia_ia",
          form_status: "success",
        });
        setTimeout(() => {
          document.querySelector("#contact-form-success")?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      } else {
        setSubmitError(response.message);
        trackConversionEvent("contact_form_error", {
          form_name: "diagnostico_tecnologia_ia",
          conversion_goal: "diagnostico_tecnologia_ia",
          form_status: "error",
          error_type: "submission_failed",
          error_code: "email_service_response",
        });
        setTimeout(() => {
          document.querySelector("#contact-form-error")?.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 100);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Ocorreu um erro ao enviar o formulario. Por favor, tente novamente.";
      setSubmitError(message);
      trackConversionEvent("contact_form_error", {
        form_name: "diagnostico_tecnologia_ia",
        conversion_goal: "diagnostico_tecnologia_ia",
        form_status: "error",
        error_type: "unexpected_exception",
        error_code: "contact_submit_exception",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold mb-3">Diagnóstico</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos encontrar o primeiro gargalo.
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Uma conversa objetiva para entender processo, sistema, dado e prioridade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-16">
          <Card className="shadow-large border-border bg-white rounded-lg">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-primary mb-2">Agendar diagnóstico</h3>
              <p className="text-muted-foreground mb-6">
                Conte rapidamente o contexto da empresa.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                {submitSuccess && (
                  <div id="contact-form-success" className="p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn" role="status">
                    <p className="text-sm font-medium text-green-800">Mensagem enviada com sucesso. Vamos responder com os próximos passos do diagnóstico.</p>
                  </div>
                )}

                {submitError && (
                  <div id="contact-form-error" className="p-4 bg-red-50 border border-red-200 rounded-lg animate-fadeIn flex items-center gap-3" role="alert">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-sm text-red-700">{submitError}</p>
                  </div>
                )}

	                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
	                  <div>
	                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                    <Input
	                      id="contact-name"
	                      {...register("name")}
	                      placeholder="Seu nome"
	                      className={`${fieldClassName} ${errors.name ? errorFieldClassName : ""}`}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
	                    />
	                    {errors.name && <p id="contact-name-error" className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
	                  </div>
	                  <div>
	                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
	                    <Input
	                      id="contact-email"
	                      {...register("email")}
	                      type="email"
	                      placeholder="seu@email.com"
	                      className={`${fieldClassName} ${errors.email ? errorFieldClassName : ""}`}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
	                    />
	                    {errors.email && <p id="contact-email-error" className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
	                  </div>
	                </div>

	                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
	                  <div>
	                    <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-2">Empresa *</label>
	                    <Input
	                      id="contact-company"
	                      {...register("company")}
	                      placeholder="Nome da empresa"
	                      className={`${fieldClassName} ${errors.company ? errorFieldClassName : ""}`}
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? "contact-company-error" : undefined}
	                    />
	                    {errors.company && <p id="contact-company-error" className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
	                  </div>
	                  <div>
	                    <label htmlFor="contact-sector" className="block text-sm font-medium text-gray-700 mb-2">Setor</label>
	                    <Input
	                      id="contact-sector"
	                      {...register("sector")}
	                      placeholder="Serviço, indústria, varejo..."
	                      className={fieldClassName}
	                    />
	                  </div>
	                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">Principal desafio *</label>
                  <Textarea
	                    id="contact-message"
	                    {...register("message")}
                      placeholder="Ex.: planilhas demais, atendimento manual, sistemas desconectados..."
	                    className={`min-h-[130px] border border-border bg-white text-gray-900 shadow-sm placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 ${errors.message ? errorFieldClassName : ""}`}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
	                  />
                  {errors.message && <p id="contact-message-error" className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Solicitar diagnóstico
                    </span>
                  )}
                </Button>

                <p className="text-sm text-gray-600 text-center">Resposta em até 24 horas úteis.</p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6 bg-muted/30">
              <h3 className="text-2xl font-bold text-foreground mb-4">O que avaliamos</h3>
              <ul className="space-y-3 text-muted-foreground">
                {["Gargalos da operação", "Sistemas e planilhas", "Dados para decisão", "IA e automação", "Prioridade de ação"].map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <TrackedAnchor
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              eventLabel="WhatsApp diagnóstico"
              eventLocation="contact"
              className="flex items-center p-4 rounded-lg border border-border/70 hover:shadow-soft transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">WhatsApp</h4>
                <p className="text-muted-foreground">Atalho para pedir o diagnóstico</p>
              </div>
            </TrackedAnchor>

            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center p-4 rounded-lg border border-border/70 hover:shadow-soft transition-shadow">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground">{CONTACT_EMAIL}</p>
              </div>
            </a>

            <div className="relative overflow-hidden bg-gradient-primary rounded-lg p-6 text-white">
              <img
                src="/images/visuals/solucoes-sistemas-integrados.png"
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-primary/70" />
              <div className="relative z-10 flex items-center mb-3">
                <MapPin className="w-5 h-5 mr-2" />
                <h4 className="font-semibold">Base regional</h4>
              </div>
              <p className="relative z-10 text-white/80">
                Pindamonhangaba, Vale do Paraíba e empresas que precisam operar melhor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
