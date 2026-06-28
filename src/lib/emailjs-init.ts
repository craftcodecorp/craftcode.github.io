/**
 * EmailJS Initialization
 * Sets up EmailJS with the public key from environment variables
 */
import { init } from '@emailjs/browser';
import { getEmailJsConfigStatus } from '@/services/contactService';

/**
 * Initialize EmailJS with the public key
 * This should be called once at application startup
 */
export const initializeEmailJS = (): void => {
  const { values, isConfigured } = getEmailJsConfigStatus();
  
  if (!isConfigured) {
    console.warn(
      'EmailJS public key not properly configured. ' +
      'Form submissions will be simulated in development mode.'
    );
    return;
  }
  
  init(values.publicKey);
  console.log('EmailJS initialized successfully');
};
