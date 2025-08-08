/**
 * EmailJS Initialization
 * Sets up EmailJS with the public key from environment variables
 */
import { init } from '@emailjs/browser';

/**
 * Initialize EmailJS with the public key
 * This should be called once at application startup
 */
export const initializeEmailJS = (): void => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  if (!publicKey || publicKey === 'development_public_key' || publicKey === 'your_public_key') {
    console.warn(
      'EmailJS public key not properly configured. ' +
      'Form submissions will be simulated in development mode.'
    );
    return;
  }
  
  init(publicKey);
  console.log('EmailJS initialized successfully');
};
