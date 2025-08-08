/**
 * Contact Form Service
 * Handles the submission of contact form data using EmailJS
 */
import emailjs from '@emailjs/browser';

// EmailJS configuration
// These values should be stored in environment variables in production
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_default';

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
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('EmailJS SUCCESS:', response);
    return {
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
    };
  } catch (error: any) {
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
    
    if (error?.text?.includes('Authentication failed') || error?.text?.includes('Invalid login')) {
      errorMessage = 'Erro de autenticação no serviço de email. Por favor, entre em contato conosco por outro meio.';
    } else if (error?.text?.includes('Sending has been rejected')) {
      errorMessage = 'O envio do email foi rejeitado. Por favor, tente novamente ou entre em contato por outro meio.';
    }
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};
