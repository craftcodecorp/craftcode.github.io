/**
 * Contact Form Service
 * Handles the submission of contact form data to the backend API
 */

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

/**
 * Submits contact form data to the API
 * @param data Form data to submit
 * @returns Promise that resolves with the response data
 */
export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // You can replace this with your actual API endpoint
    const response = await fetch('https://api.craftcode.com.br/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      // If the server responds with an error status
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro ao enviar o formulário');
    }

    const responseData = await response.json();
    return {
      success: true,
      message: responseData.message || 'Mensagem enviada com sucesso!',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    
    // For development/testing, you can simulate a successful response
    // Remove this in production and let the real error propagate
    if (process.env.NODE_ENV === 'development') {
      console.log('DEV MODE: Simulating successful submission');
      return {
        success: true,
        message: 'Mensagem enviada com sucesso! (Simulado em ambiente de desenvolvimento)',
      };
    }
    
    throw error;
  }
};
