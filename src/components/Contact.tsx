import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Linkedin,
  AlertCircle
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { submitContactForm } from "@/services/contactService";

// Define the form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
});

// Define the form data type
type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Initialize form with react-hook-form and zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  // Form submission handler
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);
    
    try {
      const response = await submitContactForm({
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message
      });
      
      if (response.success) {
        setSubmitSuccess(true);
        reset();
        // scroll to success message
        setTimeout(() => {
          const successMessage = document.querySelector('#contact-form-success');
          successMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      } else {
        // Resposta com sucesso=false indica erro tratado pelo serviço
        setSubmitError(response.message);
        // scroll to error message
        setTimeout(() => {
          const errorMessage = document.querySelector('#contact-form-error');
          errorMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
      // scroll to error message
      setTimeout(() => {
        const errorMessage = document.querySelector('#contact-form-error');
        errorMessage?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Pronto para transformar sua ideia em realidade? Entre em contato e 
            descubra como podemos ajudar sua empresa a alcançar novos patamares.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <Card className="shadow-large border-border bg-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Conte-nos sobre seu projeto
                </h3>
                
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  {/* Success message */}
                  {submitSuccess && (
                    <div id="contact-form-success" className="p-4 mb-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-800">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error message */}
                  {submitError && (
                    <div id="contact-form-error" className="p-4 mb-4 bg-red-50 border border-red-200 rounded-lg animate-fadeIn">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-red-700">{submitError}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome *
                      </label>
                      <Input 
                        {...register("name")}
                        placeholder="Seu nome completo"
                        className={`h-12 border ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300"} placeholder:text-gray-400 text-gray-900`}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input 
                        {...register("email")}
                        type="email"
                        placeholder="seu@email.com"
                        className={`h-12 border ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300"} placeholder:text-gray-400 text-gray-900`}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <Input 
                      {...register("company")}
                      placeholder="Nome da sua empresa"
                      className="h-12 border border-gray-300 placeholder:text-gray-400 text-gray-900"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea 
                      {...register("message")}
                      placeholder="Conte-nos sobre seu projeto, desafios ou necessidades..."
                      className={`min-h-[120px] border ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300"} placeholder:text-gray-400 text-gray-900`}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-6 transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar mensagem
                      </span>
                    )}
                  </Button>
                  
                  {/* Form status text */}
                  {!submitSuccess && !submitError && (
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Todos os campos marcados com * são obrigatórios
                    </p>
                  )}
                  
                  <p className="text-sm text-gray-600 text-center">
                    Responderemos em até 24 horas úteis
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Fale diretamente conosco
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 rounded-lg border border-border/50 hover:shadow-soft transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p className="text-muted-foreground">Resposta rápida e direta</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg border border-border/50 hover:shadow-soft transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contato@craftcode.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 rounded-lg border border-border/50 hover:shadow-soft transition-shadow">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                    <Linkedin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <p className="text-muted-foreground">linkedin.com/company/craftcodebr</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Info */}
            <div className="bg-muted/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-secondary mr-2" />
                <h4 className="font-semibold text-foreground">Base de operações</h4>
              </div>
              <p className="text-muted-foreground mb-2">
                Brasil - Atendimento remoto nacional
              </p>
              <p className="text-sm text-muted-foreground">
                Trabalhamos de forma distribuída para oferecer a melhor experiência 
                aos nossos clientes em todo o território nacional.
              </p>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-primary rounded-xl p-6 text-white">
              <h4 className="font-semibold mb-4">Próximos passos</h4>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Análise do seu projeto
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Proposta personalizada
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Reunião de alinhamento
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                  Início do desenvolvimento
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;