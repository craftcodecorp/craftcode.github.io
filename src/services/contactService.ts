/**
 * Contact Form Service
 * Handles the submission of contact form data using EmailJS
 */
import emailjs from '@emailjs/browser';

const emailjsConfigKeys = [
  "VITE_EMAILJS_SERVICE_ID",
  "VITE_EMAILJS_TEMPLATE_ID",
  "VITE_EMAILJS_PUBLIC_KEY",
] as const;

const placeholderValues = new Set([
  "",
  "service_default",
  "template_default",
  "public_key_default",
  "development_public_key",
  "your_public_key",
]);

export const getEmailJsConfigStatus = () => {
  const values = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };
  const missingKeys = emailjsConfigKeys.filter((key) => placeholderValues.has(String(import.meta.env[key] ?? "").trim()));

  return {
    values,
    missingKeys,
    isConfigured: missingKeys.length === 0,
  };
};

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

/**
 * Response from the contact form submission
 */
export interface ContactFormResponse {
  success: boolean;
  message: string;
}

/**
 * Submits contact form data using EmailJS
 * @param data Form data to submit
 * @returns Promise that resolves with the response data
 */
export const submitContactForm = async (data: ContactFormData): Promise<ContactFormResponse> => {
  try {
    const emailJsConfig = getEmailJsConfigStatus();

    if (!emailJsConfig.isConfigured) {
      if (import.meta.env.DEV) {
        console.warn("EmailJS not configured. Simulating contact form submission in development mode.", emailJsConfig.missingKeys);
        return {
          success: true,
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        };
      }

      return {
        success: false,
        message: 'O formulário de diagnóstico não está configurado para envio. Por favor, entre em contato pelo WhatsApp ou email.',
      };
    }

    // Prepare template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      company: data.company || 'Não informado',
      message: data.message,
      reply_to: data.email,
      to_name: 'Equipe CraftCode',
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      emailJsConfig.values.serviceId,
      emailJsConfig.values.templateId,
      templateParams,
      emailJsConfig.values.publicKey
    );

    console.log('EmailJS SUCCESS:', response);
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    };
  } catch (error: unknown) {
    console.error('EmailJS ERROR:', error);
    
    // For development mode, simulate a successful response
    if (import.meta.env.DEV) {
      console.log('DEV MODE: Simulating successful submission');
      return {
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      };
    }

    // Mensagens de erro específicas baseadas no tipo de erro
    let errorMessage = 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.';
    
    const errorText = typeof error === 'object' && error !== null && 'text' in error
      ? String((error as { text?: unknown }).text)
      : '';

    if (errorText.includes('Authentication failed') || errorText.includes('Invalid login')) {
      errorMessage = 'Erro de autenticação no serviço de email. Por favor, entre em contato conosco por outro meio.';
    } else if (errorText.includes('Sending has been rejected')) {
      errorMessage = 'O envio do email foi rejeitado. Por favor, tente novamente ou entre em contato por outro meio.';
    }
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};
